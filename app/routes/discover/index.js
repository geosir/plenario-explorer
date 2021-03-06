import Ember from 'ember';

export default Ember.Route.extend({
  query: Ember.inject.service('query'),
  model() {
    return Ember.RSVP.hash({
      pointDatasets: this.get('query').allEventMetadata(),
      shapeDatasets: this.get('query').allShapeMetadata()
    });
  },
});
