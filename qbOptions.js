var options = {
  allow_empty: true,

  //default_filter: 'name',
  sort_filters: true,

  optgroups: {
    core: {
      en: 'Core',
      fr: 'Coeur'
    },
    general: {
      en: 'General Info',
    },
    card_group: {
      en: 'Card Group',
    },
    dilemma_group: {
      en: 'Dilemma Group',
    },
    icons: {
      en: 'Icons',
    },
    skills: {
      en: 'Skills',
    }
  },

  plugins: {
    'bt-tooltip-errors': { delay: 100 },
    'sortable': null,
    'filter-description': { mode: 'bootbox' },
    'bt-selectpicker': null,
    //      'chosen-selectpicker': null,
    'unique-filter': null,
    'bt-checkbox': { color: 'primary' },
    'invert': null,
    'not-group': null
  },

  // standard operators in custom optgroups
  operators: [
    { type: 'equal', optgroup: 'basic' },
    { type: 'not_equal', optgroup: 'basic' },
    { type: 'in', optgroup: 'basic' },
    { type: 'not_in', optgroup: 'basic' },
    { type: 'less', optgroup: 'numbers' },
    { type: 'less_or_equal', optgroup: 'numbers' },
    { type: 'greater', optgroup: 'numbers' },
    { type: 'greater_or_equal', optgroup: 'numbers' },
    { type: 'between', optgroup: 'numbers' },
    { type: 'not_between', optgroup: 'numbers' },
    { type: 'begins_with', optgroup: 'strings' },
    { type: 'not_begins_with', optgroup: 'strings' },
    { type: 'contains', optgroup: 'strings' },
    { type: 'not_contains', optgroup: 'strings' },
    { type: 'ends_with', optgroup: 'strings' },
    { type: 'not_ends_with', optgroup: 'strings' },
    { type: 'is_empty' },
    { type: 'is_not_empty' },
    { type: 'is_null' },
    { type: 'is_not_null' }
  ],

  filters: filters
};