import Ember from 'ember';

export default Ember.Route.extend({
  resetController(controller, isExiting) {
     this._super(...arguments);

     if (isExiting) {
        controller.send('resetData');
     }
 }
});
