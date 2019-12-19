var http        = require("http");
var express     = require('express');
var app         = express();
var mysql       = require('mysql');
var bodyParser  = require('body-parser');
var path        = require('path');
var fs          = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('index-back.html', "utf8");
var jsdom = new JSDOM(html, { pretendToBeVisual: true, runScripts: 'dangerously', resources: 'usable', url: 'http://node.the-big-box.myds.me' });
// Set window and document from jsdom
var { window } = jsdom;
window.requestAnimationFrame(timestamp => true);
var { document } = window;
// Also set global window and document before requiring jQuery
global.window = window;
global.document = document;

document.addEventListener('click', function() {
  //console.log('test');
});

// Load global jQuery handler
const $ = global.jQuery = require('jquery');

// Create event handler for when the DOM has loaded
var domLoaded = false;
window.onModulesLoaded = () => {
  console.log("Virtual DOM loaded.");
  domLoaded = true;
};

// Create a MySQL database connection
var configPath = 'config.json';
var dbOptions = JSON.parse(fs.readFileSync(configPath));
var connection = mysql.createConnection({
  host     : dbOptions.host,
  port     : dbOptions.port,
  user     : dbOptions.user,
  password : dbOptions.password,
  database : dbOptions.database
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})

// Set the static folder
var nodedir = path.join(__dirname, 'node_modules');
app.use(express.static(nodedir));


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var server = app.listen(3000, "localhost", function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});

app.param('cardID', function (req, res, next, cardID) {
  var query = `
    SELECT
     *
    FROM
     card_1e
    WHERE
     cardID = ` + cardID + `
    AND
     searchable LIKE 'Y'
    ORDER BY
     cardtype ASC,
     affiliation ASC,
     title ASC
    LIMIT 1;
  `;
  connection.query(query, function (error, results, fields) {
    if (error) return next(error);
    req.card = results;
    next();
  });
});

app.param('title', function (req, res, next, title) {
  var query = `
    SELECT
     *
    FROM
     card_1e
    WHERE
     title LIKE ?
    AND
     searchable LIKE 'Y'
    ORDER BY
     cardtype ASC,
     affiliation ASC,
     title ASC
  `;
  connection.query(query, ["%" + title + "%"], function (error, results, fields) {
    if (error) return next(error);
    req.card = results;
    next();
  });
});

//rest api to get all cards
app.get('/1e/cards', function (req, res) {
  var query = `
    SELECT
     *
    FROM
     card_1e
    WHERE
     searchable LIKE 'Y'
    ORDER BY
     cardtype ASC,
     affiliation ASC,
     title ASC
    LIMIT 100
  `;
  connection.query(query, function (error, results, fields) {
   if (error) throw error;
   res.json(results);
 });
});

app.get('/1e/cards/:cardID', function (req, res) {
  res.json(req.card);
});

app.get('/1e/search/:title', function (req, res) {
  res.json(req.card);
});

app.get('/cc_1e_search', function (req, res) {
  res.sendFile(path.join(__dirname + '/cc_1e_search.html'));
});

app.post('/1e_search', function (req, res) {
  console.log(req.body.mode);
  console.log(req.body);
  res.send(req.body);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/margins-padding.css', function (req, res) {
  res.sendFile(path.join(__dirname, '/margins-padding.css'));
});

app.get('/qbFilters.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/qbFilters.js'));
});

app.get('/qbOptions.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/qbOptions.js'));
});

app.get('/qbSetup.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/qbSetup.js'));
});

app.get('/qbSetup-back.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/qbSetup-back.js'));
});

app.post('/search/1e', function (req, res) {
  res.locals.start = Date.now();
  var json = req.body;

  var event = new jsdom.window.MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
  var event2 = new jsdom.window.MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });

  window.onSqlParsed = () => {
    var after = $('#result').find('pre').html();
    var parsedAfter = JSON.parse(after);
    parsedAfter.sql = parsedAfter.sql.replace(/&lt;/g,'<').replace(/&gt;/g,'>')
    getPersonnel(parsedAfter, res, () => {
      res.json(res.cards);
      res.end();
    });
  };
  window.onRulesSet = () => {
    $('.parse-sql')[0].dispatchEvent(event2);
  };
  if(domLoaded) {
    $('#result').find('pre').html(JSON.stringify(json));
    var before = $('#result').find('pre').html(); 
    $('#submit')[0].dispatchEvent(event);
  };
});

function getPersonnel(jsonSQL, res, next) {
  var query = `
    SELECT
     c.*
    FROM
     card_1e c
     LEFT JOIN card_1e_skills_pivot csp ON c.cardID = csp.cardID
    WHERE
     (` + jsonSQL.sql + `)
    AND
     searchable LIKE 'Y'
    AND c.cardID IN
    (
      SELECT DISTINCT
        COALESCE(NULLIF(firstprintID, 0), cardID)
      FROM card_1e
    )
    ORDER BY
     cardtype ASC,
     affiliation ASC,
     title ASC
    LIMIT 50
  `;
  connection.query(query, jsonSQL.params, function (error, results, fields) {
    if (error) console.log(error);
    console.log(results.length + " results in " + Math.abs(Date.now() - res.locals.start) / 1000 + " seconds for query:\n" + JSON.stringify(jsonSQL) + "\n----------");
    res.cards = results;
    next();
  });
};
