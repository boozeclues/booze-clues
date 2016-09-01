import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true,
    },
    size: {
      refreshModel: true,
    },
  },

  model() {
    return this.store.findAll('favorite');
  },
});
