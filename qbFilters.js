var cardType = {
  id: "cardtype",
  field: "cardtype",
  label: "Card Type",
  type: "string",
  input: "select",
  optgroup: "general",
  placeholder: "Select something",
  values: [
    {
      label: "Artifact",
      value: "artifact"
    },
    {
      label: "Damage Marker",
      value: "damage marker"
    },
    {
      label: "Dilemma",
      value: "dilemma"
    },
    {
      label: "Doorway",
      value: "doorway"
    },
    {
      label: "Equipment",
      value: "equipment"
    },
    {
      label: "Event",
      value: "event"
    },
    {
      label: "Facility",
      value: "facility"
    },
    {
      label: "Incident",
      value: "incident"
    },
    {
      label: "Interrupt",
      value: "interrupt"
    },
    {
      label: "Mission",
      value: "mission"
    },
    {
      label: "Objective",
      value: "objective"
    },
    {
      label: "Personnel",
      value: "personnel"
    },
    {
      label: "Q Artifact",
      value: "q artifact"
    },
    {
      label: "Q Dilemma",
      value: "q dilemma"
    },
    {
      label: "Q Event",
      value: "q event"
    },
    {
      label: "Q Interrupt",
      value: "q interrupt"
    },
    {
      label: "Q Mission",
      value: "q mission"
    },
    {
      label: "Ship",
      value: "ship"
    },
    {
      label: "Site",
      value: "site"
    },
    {
      label: "Tactic",
      value: "tactic"
    },
    {
      label: "Time Location",
      value: "time location"
    },
    {
      label: "Tribble",
      value: "tribble"
    },
    {
      label: "Trouble",
      value: "trouble"
    }
  ],
  operators: ["equal", "not_equal"]
};

var affiliation = {
  id: "affiliation",
  field: "affiliation",
  label: "Affiliation",
  type: "string",
  input: "select",
  optgroup: "general",
  default_operator: "contains",
  placeholder: "Select something",
  values: [
    {
      label: "Bajoran",
      value: "bajoran"
    },
    {
      label: "Borg",
      value: "borg"
    },
    {
      label: "Cardassian",
      value: "cardassian"
    },
    {
      label: "Dominion",
      value: "dominion"
    },
    {
      label: "Federation",
      value: "federation"
    },
    {
      label: "Ferengi",
      value: "ferengi"
    },
    {
      label: "Hirogen",
      value: "hirogen"
    },
    {
      label: "Kazon",
      value: "kazon"
    },
    {
      label: "Klingon",
      value: "klingon"
    },
    {
      label: "Neutral",
      value: "neutral"
    },
    {
      label: "Non-Aligned",
      value: "non-aligned"
    },
    {
      label: "Romulan",
      value: "romulan"
    },
    {
      label: "Starfleet",
      value: "starfleet"
    },
    {
      label: "Vidiian",
      value: "vidiian"
    },
    {
      label: "Vulcan",
      value: "Vulcan"
    }
  ],
  operators: ["contains"]
};

var universalStatus = {
  id: "universal",
  field: "universal",
  label: "Universal Status",
  type: "string",
  input: "select",
  optgroup: "general",
  placeholder: "Select something",
  values: [
    {
      label: "Unique",
      value: ""
    },
    {
      label: "Universal",
      value: "univ"
    },
    {
      label: "Enigma",
      value: "enig"
    }
  ],
  operators: ["equal", "not_equal"]
};

var propertyLogo = {
  id: "property_logo",
  field: "property",
  label: "Property Logo",
  type: "string",
  input: "select",
  optgroup: "general",
  placeholder: "Select something",
  values: [
    {
      label: "The Original Series",
      value: "TOS"
    },
    {
      label: "The Next Generation",
      value: "TNG"
    },
    {
      label: "Deep Space 9",
      value: "DS9"
    },
    {
      label: "Voyager",
      value: "VOY"
    },
    {
      label: "Enterprise",
      value: "ENT"
    },
    {
      label: "The Motion Picture",
      value: "TMP"
    },
    {
      label: "The Wrath of Khan",
      value: "TWOK"
    },
    {
      label: "The Search for Spock",
      value: "TSfS"
    },
    {
      label: "The Voyage Home",
      value: "TVH"
    },
    {
      label: "The Final Frontier",
      value: "TFF"
    },
    {
      label: "The Undiscovered Country",
      value: "TUC"
    },
    {
      label: "Generations",
      value: "Gen"
    },
    {
      label: "First Contact",
      value: "FC"
    },
    {
      label: "Insurrection",
      value: "Ins"
    },
    {
      label: "Nemesis",
      value: "Nem"
    },
    {
      label: "Armada",
      value: "Armada"
    },
    {
      label: "A Klingon Challenge",
      value: "AKC"
    },
    {
      label: "Customizable Card Game",
      value: "CCG"
    }
  ],
  operators: ["equal", "not_equal", "is_null", "is_empty"]
};

var title = {
  id: "title",
  field: "title",
  label: {
    en: "Title",
    fr: "Nom"
  },
  value_separator: ",",
  type: "string",
  optgroup: "general",
  default_value: "",
  default_operator: "contains",
  size: 30
};

var lore = {
  id: "lore",
  field: "lore",
  label: {
    en: "Lore"
  },
  value_separator: ",",
  type: "string",
  optgroup: "general",
  default_value: "",
  default_operator: "contains",
  size: 30
};

var gametext = {
  id: "gametext",
  field: "gametext",
  label: {
    en: "Gametext"
  },
  value_separator: ",",
  type: "string",
  optgroup: "general",
  default_value: "",
  default_operator: "contains",
  size: 30
};

var restrictionBox = {
  id: "restriction_box",
  field: "restriction",
  label: {
    en: "Restriction Box"
  },
  value_separator: ",",
  type: "string",
  optgroup: "general",
  default_value: "",
  default_operator: "contains",
  size: 30
};

var cardGroup = {
  id: "card_group",
  label: "Card Group",
  type: "string",
  input: "select",
  multiple: true,
  operators: ["in"],
  plugin: "selectize",
  plugin_config: {
    valueField: "id",
    labelField: "name",
    searchField: "name",
    sortField: "name",
    options: [
      { id: "baj_esp", name: "Bajoran Espionage" },
      { id: "baj_trt", name: "Bajoran Treaty" },
      { id: "biolab", name: "Biolab" },
      { id: "brig", name: "Brig" },
      { id: "cap_odr", name: "Captain's Order" },
      { id: "capture", name: "Capturing-related" },
      { id: "car_esp", name: "Cardassian Espionage" },
      { id: "car_trt", name: "Cardassian Treaty" },
      { id: "chaotic", name: "Chatoica-related" },
      { id: "contend", name: "Contender-related Objective" },
      { id: "dom_trt", name: "Dominion Treaty" },
      { id: "duras", name: "Duras-related" },
      { id: "equ_art", name: "Equipment-artifacts" },
      { id: "esp_fed", name: "Espionage ... on Federation" },
      { id: "fed_trt", name: "Federation Treaty" },
      { id: "harvest", name: "Harvester Virus-related" },
      { id: "infiltr", name: "Infiltration-related" },
      { id: "khan", name: "Khan-related" },
      { id: "kli_trt", name: "Klingon Treaty" },
      { id: "kli_int", name: "Klingon-related Interrupt" },
      { id: "maneuvr", name: "Maneuver" },
      { id: "morph", name: "Morph" },
      { id: "orb_art", name: "Orb Artifact" },
      { id: "quest", name: "Question-related" },
      { id: "rom_esp", name: "Romulan Espionage" },
      { id: "rom_trt", name: "Romulan Treaty" },
      { id: "royale", name: "Royale-related" },
      { id: "temporl", name: "Temporal Agent-related" },
      { id: "trading", name: "Trading Post" },
      { id: "tsunkat", name: "Tsunkatse-related" },
      { id: "vul_esp", name: "Vulcan Espionage" },
      { id: "vul_art", name: "Vulcan-related Artifact" },
      { id: "vul_int", name: "Vulcan-related Interrupt" }
    ]
  },
  valueSetter: function(rule, value) {
    rule.$el.find(".rule-value-container select")[0].selectize.setValue(value);
  }
};

var staffing = {
  id: "staffing",
  label: "Staffing",
  type: "string",
  input: "select",
  optgroup: "icons",
  multiple: true,
  operators: ["in"],
  plugin: "selectize",
  plugin_config: {
    valueField: "id",
    labelField: "name",
    searchField: "name",
    sortField: "name",
    render: {
      item: function(item, escape) {
        return (
          '<div><img src="https://trekcc.org' +
          item.url +
          '" height="12" border="0" alt="' +
          item.bbcode +
          '" title="' +
          item.bbcode +
          '"></div>'
        );
      },
      option: function(item, excape) {
        return (
          '<div><img src="https://trekcc.org' +
          item.url +
          '" height="12" border="0" alt="' +
          item.bbcode +
          '" title="' +
          item.bbcode +
          '"></div>'
        );
      }
    },
    options: [
      {
        id: "cmd",
        name: "Command",
        bbcode: "[Cmd]",
        url: "/images/icons/1e/CommandIcon.jpg"
      },
      {
        id: "com",
        name: "Communications",
        bbcode: "[Com]",
        url: "/images/icons/1e/SubCommandCommunications.jpg"
      },
      {
        id: "def",
        name: "Defense",
        bbcode: "[Def]",
        url: "/images/icons/1e/SubCommandDefense.jpg"
      },
      {
        id: "ent-e",
        name: "Enterprise-E",
        bbcode: "[Ent-E]",
        url: "/images/icons/1e/EnterpriseE.jpg"
      },
      {
        id: "nav",
        name: "Navigation",
        bbcode: "[Nav]",
        url: "/images/icons/1e/SubCommandNavigation.jpg"
      },
      {
        id: "ocd",
        name: "OCD",
        bbcode: "[OCD]",
        url: "/images/icons/1e/OCD.jpg"
      },
      {
        id: "stf",
        name: "Staff",
        bbcode: "[Stf]",
        url: "/images/icons/1e/StaffIcon.jpg"
      }
    ]
  },
  valueSetter: function(rule, value) {
    rule.$el.find(".rule-value-container select")[0].selectize.setValue(value);
  }
};

var skills = [
  {
    id: "acquisition",
    label: "Acquisition",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "animal",
    label: "Animal",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "anthropology",
    label: "Anthropology",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "archaeology",
    label: "Archaeology",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "astrophysics",
    label: "Astrophysics",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "barbering",
    label: "Barbering",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "biology",
    label: "Biology",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "cantankerousness",
    label: "Cantankerousness",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "civilian",
    label: "CIVILIAN",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "computer_skill",
    label: "Computer Skill",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "cybernetics",
    label: "Cybernetics",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "diplomacy",
    label: "Diplomacy",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "empathy",
    label: "Empathy",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "engineer",
    label: "ENGINEER",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "exobiology",
    label: "Exobiology",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "fca",
    label: "FCA",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "geology",
    label: "Geology",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "greed",
    label: "Greed",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "guramba",
    label: "Guramba",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "honor",
    label: "Honor",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "klingon_intelligence",
    label: "Klingon Intelligence",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "law",
    label: "Law",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "leadership",
    label: "Leadership",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "medical",
    label: "MEDICAL",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "memory_alpha",
    label: "Memory Alpha",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "mindmeld",
    label: "Mindmeld",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "miracle_worker",
    label: "Miracle Worker",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "music",
    label: "Music",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "navigation",
    label: "Navigation",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "obsidian_order",
    label: "Obsidian Order",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "officer",
    label: "OFFICER",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "orion_syndicate",
    label: "Orion Syndicate",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "physics",
    label: "Physics",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "resistance",
    label: "Resistance",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "science",
    label: "SCIENCE",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "section_31",
    label: "Section 31",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "security",
    label: "SECURITY",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "smuggling",
    label: "Smuggling",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "stellar_cartography",
    label: "Stellar Cartography",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "tal_shiar",
    label: "Tal Shiar",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "transporter_skill",
    label: "Transporter Skill",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "treachery",
    label: "Treachery",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "vip",
    label: "V.I.P.",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "vshar",
    label: "V'Shar",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  },
  {
    id: "youth",
    label: "Youth",
    type: "integer",
    input: "text",
    value_separator: "|",
    default_value: 1,
    default_operator: "greater_or_equal",
    optgroup: "skills",
    operators: [
      "equal",
      "not_equal",
      "less",
      "less_or_equal",
      "greater",
      "greater_or_equal",
      "between",
      "not_between"
    ],
    description: function(rule) {
      if (
        rule.operator &&
        ["in", "not_in"].indexOf(rule.operator.type) !== -1
      ) {
        return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
      }
    }
  }
  // {
  //   id: 'custom_skill',
  //   field: 'custom_skill',
  //   label: {
  //     en: 'Custom Skill'
  //   },
  //   value_separator: ',',
  //   type: 'string',
  //   optgroup: 'skills',
  //   default_value: '',
  //   default_operator: 'contains',
  //   size: 30
  // }
];

var filters = [
  cardType,
  affiliation,
  universalStatus,
  propertyLogo,
  title,
  lore,
  gametext,
  restrictionBox,
  cardGroup,
  staffing
];

filters = filters.concat(skills);
