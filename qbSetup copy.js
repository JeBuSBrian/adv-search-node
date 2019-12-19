$('[data-toggle="tooltip"]').tooltip();

var $b = $('#builder');


// init
$('#builder').queryBuilder(options);

$('#builder').on('afterCreateRuleInput.queryBuilder', function (e, rule) {
  if (rule.filter.plugin == 'selectize') {
    rule.$el.find('.rule-value-container').css('min-width', '200px')
      .find('.selectize-control').removeClass('form-control');
  }
});

// change language
$('[name=language]').selectpicker().on('change', function () {
  var lang = $(this).val();

  var done = function () {
    var rules = $b.queryBuilder('getRules');
    if (!$.isEmptyObject(rules)) {
      options.rules = rules;
    }
    else {
      delete options.rules;
    }
    options.lang_code = lang;
    $b.queryBuilder('destroy');
    $('#builder').queryBuilder(options);
  };

  if ($.fn.queryBuilder.regional[lang] === undefined) {
    $.getScript('/jQuery-QueryBuilder/dist/i18n/query-builder.' + lang + '.js', done);
  }
  else {
    done();
  }
});

// change theme
$('.change-theme').on('click', function () {
  $('#qb-theme').replaceWith('<link rel="stylesheet" href="' + $(this).data('qb') + '" id="qb-theme">');
  $('#bt-theme').replaceWith('<link rel="stylesheet" href="' + $(this).data('bt') + '" id="bt-theme">');
});

// set rules
$('.set').on('click', function () {
  $('#builder').queryBuilder('setRules', {
    condition: 'AND',
    flags: {
      condition_readonly: true
    },
    data: {
      root: true
    },
    rules: [{
      id: 'price',
      operator: 'between',
      value: [10.25, 15.52],
      flags: {
        no_delete: true,
        filter_readonly: true
      },
      data: {
        unit: '€'
      }
    }, {
      id: 'state',
      operator: 'equal',
      value: 'AK'
    }, {
      condition: 'OR',
      not: true,
      flags: {
        no_delete: true,
        no_drop: true,
        no_sortable: true
      },
      rules: [{
        id: 'category',
        operator: 'equal',
        value: 2
      }, {
        id: 'coord',
        operator: 'equal',
        value: undefined // will use filter's default value
      }]
    }, {
      id: 'title',
      operator: 'in',
      value: ['Kirk']
    }, {
      id: 'age',
      operator: 'in',
      value: [20, 21, 22]
    }, {
      empty: true
    }]
  });
});

// set rules from MongoDB
$('.set-mongo').on('click', function () {
  $('#builder').queryBuilder('setRulesFromMongo', {
    "$or": [{
      "title": {
        "$regex": "^(?!Kirk)"
      }
    }, {
      "price": { "$gte": 0, "$lte": 100 }
    }, {
      "$nor": [{
        "$and": [{
          "category": 2
        }, {
          "category": { "$in": [4, 5] }
        }]
      }]
    }]
  });
});

// set rules from SQL
$('.set-sql').on('click', function () {
  $('#builder').queryBuilder('setRulesFromSQL', 'title NOT LIKE "Kirk%" OR price BETWEEN 100 OR 200 OR NOT (category IN(1, 2) AND rate <= 2)');
});

// reset builder
$('.reset').on('click', function () {
  $('#builder').queryBuilder('reset');
  $('#result').addClass('hide').find('pre').empty();
});

$('.submit').on('click', function () {
  var data = $('#builder').queryBuilder('getRules', {
      get_flags: true,
      skip_empty: true
    });
  //console.log(data);
  $.ajax({
    type: 'POST',
    url: '/search/1e',
    data: JSON.stringify(data),
    contentType: 'application/json',
    dataType: 'json',
    success: function (data) {
      $('#result').removeClass('hide')
        .find('pre').html(data); }
  });
});

// get rules
$('.parse-json').on('click', function () {
  $('#result').removeClass('hide')
    .find('pre').html(JSON.stringify(
      $('#builder').queryBuilder('getRules', {
        get_flags: true,
        skip_empty: true
      }),
      undefined, 2
    ));
});

$('.parse-sql').on('click', function () {
  //console.log("here");
  var prejson = `
      {
        "condition": "AND",
        "rules": [
          {
            "id": "age",
            "field": "age",
            "type": "integer",
            "input": "text",
            "operator": "not_equal",
            "value": 456
          }
        ],
        "not": false,
        "valid": true
      }
    `;
  //var res = $('#builder').queryBuilder('getSQL', $(this).data(JSON.parse(prejson)), false);
  //$('#builder').queryBuilder('setRules', JSON.parse(prejson));


  var res = $('#builder').queryBuilder('getSQL', $(this).data('stmt'), false);
  $('#result').removeClass('hide')
    .find('pre').html(
      res.sql + (res.params ? '\n\n' + JSON.stringify(res.params, undefined, 2) : '')
    );
});

$('.parse-mongo').on('click', function () {
  $('#result').removeClass('hide')
    .find('pre').html(JSON.stringify(
      $('#builder').queryBuilder('getMongo'),
      undefined, 2
    ));
});

// set filters
$('.set-filters').on('click', function () {
  $(this).prop('disabled', true);
  $(this).tooltip('hide');

  // add a new filter after 'state'
  $('#builder').queryBuilder('addFilter',
    {
      id: 'new_one',
      label: 'New filter',
      type: 'string'
    },
    'state'
  );

  // remove filter 'coord'
  $('#builder').queryBuilder('removeFilter',
    ['coord', 'state', 'bson'],
    true
  );

  // also available : 'setFilters'
});