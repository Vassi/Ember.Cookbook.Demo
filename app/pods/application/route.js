import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
     error() {
        this.transitionTo('oh-no');
     }
 }
});
