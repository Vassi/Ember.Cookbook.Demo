import Ember from 'ember';

var { get, set, computed, getProperties } = Ember;
export default Ember.Controller.extend({
   disableSubmit: computed('model.displayValidation', 'model.validations.isInvalid', function() {
      let display = get(this, 'model.displayValidation');
      let invalid = get(this, 'model.validations.isInvalid');

      return display ? invalid : false;
   }),
   actions: {
     submitLogin() {
        if (get(this, 'model.validations.isValid')) {
           alert("Submit!");
        }
        else {
           set(this, 'model.displayValidation', true);
        }
     }
 }
});
