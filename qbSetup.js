$('[data-toggle="tooltip"]').tooltip();

var $b = $("#builder");

$(document).keyup(evebt => {
  if (event.keyCode === 13) {
    console.log("here");
    event.preventDefault();
    $(".submit").click();
  }
});

// init
$("#builder").queryBuilder(options);

$("#builder").on("afterCreateRuleInput.queryBuilder", function(e, rule) {
  if (rule.filter.plugin == "selectize") {
    rule.$el
      .find(".rule-value-container")
      .css("min-width", "200px")
      .find(".selectize-control")
      .removeClass("form-control");
  }
});

// change language
$("[name=language]")
  .selectpicker()
  .on("change", function() {
    var lang = $(this).val();

    var done = function() {
      var rules = $b.queryBuilder("getRules");
      if (!$.isEmptyObject(rules)) {
        options.rules = rules;
      } else {
        delete options.rules;
      }
      options.lang_code = lang;
      $b.queryBuilder("destroy");
      $("#builder").queryBuilder(options);
    };

    if ($.fn.queryBuilder.regional[lang] === undefined) {
      $.getScript(
        "/jQuery-QueryBuilder/dist/i18n/query-builder." + lang + ".js",
        done
      );
    } else {
      done();
    }
  });

// change theme
$(".change-theme").on("click", function() {
  $("#qb-theme").replaceWith(
    '<link rel="stylesheet" href="' + $(this).data("qb") + '" id="qb-theme">'
  );
  $("#bt-theme").replaceWith(
    '<link rel="stylesheet" href="' + $(this).data("bt") + '" id="bt-theme">'
  );
});

// set rules
$(".set").on("click", function() {
  $("#builder").queryBuilder("setRules", {
    condition: "AND",
    flags: {
      condition_readonly: true
    },
    data: {
      root: true
    },
    rules: [
      {
        id: "price",
        operator: "between",
        value: [10.25, 15.52],
        flags: {
          no_delete: true,
          filter_readonly: true
        },
        data: {
          unit: "€"
        }
      },
      {
        id: "state",
        operator: "equal",
        value: "AK"
      },
      {
        condition: "OR",
        not: true,
        flags: {
          no_delete: true,
          no_drop: true,
          no_sortable: true
        },
        rules: [
          {
            id: "category",
            operator: "equal",
            value: 2
          },
          {
            id: "coord",
            operator: "equal",
            value: undefined // will use filter's default value
          }
        ]
      },
      {
        id: "title",
        operator: "in",
        value: ["Kirk"]
      },
      {
        id: "age",
        operator: "in",
        value: [20, 21, 22]
      },
      {
        empty: true
      }
    ]
  });
});

// set rules from MongoDB
$(".set-mongo").on("click", function() {
  $("#builder").queryBuilder("setRulesFromMongo", {
    $or: [
      {
        title: {
          $regex: "^(?!Kirk)"
        }
      },
      {
        price: { $gte: 0, $lte: 100 }
      },
      {
        $nor: [
          {
            $and: [
              {
                category: 2
              },
              {
                category: { $in: [4, 5] }
              }
            ]
          }
        ]
      }
    ]
  });
});

// set rules from SQL
$(".set-sql").on("click", function() {
  $("#builder").queryBuilder(
    "setRulesFromSQL",
    'title NOT LIKE "Kirk%" OR price BETWEEN 100 OR 200 OR NOT (category IN(1, 2) AND rate <= 2)'
  );
});

// reset builder
$(".reset").on("click", function() {
  $("#builder").queryBuilder("reset");
  $("#result")
    .addClass("hide")
    .find("pre")
    .empty();
  $("#cards")
    .addClass("hide")
    .empty();
});

$(".submit").on("click", function() {
  var data = $("#builder").queryBuilder("getRules", {
    get_flags: true,
    skip_empty: true
  });
  if (data === null) return;
  $("#loading").removeClass("hide");
  $("#submit").addClass("hide");
  $("#reset").addClass("hide");
  $.ajax({
    type: "POST",
    url: "/search/1e",
    data: JSON.stringify(data),
    contentType: "application/json",
    dataType: "json",
    success: function(data) {
      $("#cards")
        .removeClass("hide")
        .empty();
      if (data.length == 0) {
        $("#cards").append(`
          <div class="card mb-3" style="max-width: 540px;">
            <h3 class="card-title">No Results</h3>
          </div>
        `);
      } else {
        $("#cards").append(
          `
          <div class="card mb-3" style="max-width: 540px;">
            <h3 class="card-title">Here are the first ` +
            data.length +
            ` results.</h3>
          </div>
        `
        );
      }
      $.each(data, function(i, item) {
        $("#cards").append(
          `
          <div class="card mb-5 shadow-lg" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4" height="250">
                <img src="https://www.trekcc.org/` +
            (!item.errataPath || /^\s*$/.test(item.errataPath)
              ? item.imagePath
              : item.errataPath) +
            `" class="card-img" alt="..." height="250">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h4 class="card-title p-3">` +
            item.title +
            `</h4>
                  <p class="card-text p-r-3 p-l-3">` +
            item.lore +
            `</p>
                  <p class="card-text p-r-3 p-l-3"><small class="text-muted">` +
            item.cardID +
            ` - <a href="https://www.trekcc.org/1e/index.php?mode=card&cardID=` +
            item.cardID +
            `" target="_blank">Link</a></small></p>
                </div>
              </div>
            </div>
          </div>
        `
        );
      });
      $("#loading").addClass("hide");
      $("#submit").removeClass("hide");
      $("#reset").removeClass("hide");
    }
  });
});

// get rules
$(".parse-json").on("click", function() {
  $("#result")
    .removeClass("hide")
    .find("pre")
    .html(
      JSON.stringify(
        $("#builder").queryBuilder("getRules", {
          get_flags: true,
          skip_empty: true
        }),
        undefined,
        2
      )
    );
});

$(".parse-sql").on("click", function() {
  var res = $("#builder").queryBuilder("getSQL", $(this).data("stmt"), false);
  $("#result")
    .removeClass("hide")
    .find("pre")
    .html(
      res.sql +
        (res.params ? "\n\n" + JSON.stringify(res.params, undefined, 2) : "")
    );
});

$(".parse-mongo").on("click", function() {
  $("#result")
    .removeClass("hide")
    .find("pre")
    .html(JSON.stringify($("#builder").queryBuilder("getMongo"), undefined, 2));
});

// set filters
$(".set-filters").on("click", function() {
  $(this).prop("disabled", true);
  $(this).tooltip("hide");

  // add a new filter after 'state'
  $("#builder").queryBuilder(
    "addFilter",
    {
      id: "new_one",
      label: "New filter",
      type: "string"
    },
    "state"
  );

  // remove filter 'coord'
  $("#builder").queryBuilder("removeFilter", ["coord", "state", "bson"], true);

  // also available : 'setFilters'
});
