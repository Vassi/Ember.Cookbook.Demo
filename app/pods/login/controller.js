import Ember from 'ember';
import validationMixin from './loginValidations';

var { get, set} = Ember;
export default Ember.Controller.extend(validationMixin, {
  actions: {
     submitLogin() {
        if (get(this, 'validations.isValid')) {
           alert("Submit!");
        }
        else {
           set(this, 'displayValidation', true);
        }
     }
 }
});
