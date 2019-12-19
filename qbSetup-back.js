$(document).ready(function() {
  window.onModulesLoaded();
});

$('[data-toggle="tooltip"]').tooltip();

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

$("#submit").on("click", function() {
  var data = JSON.parse(
    $("#result")
      .find("pre")
      .html()
  );
  $("#builder").queryBuilder("setRules", data);
  window.onRulesSet();
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
  var res = $("#builder").queryBuilder("getSQL", "question_mark", false);
  $("#result")
    .removeClass("hide")
    .find("pre")
    .html(JSON.stringify(res));
  window.onSqlParsed();
});
