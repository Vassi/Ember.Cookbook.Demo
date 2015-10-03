import Ember from 'ember';
import validationMixin from './loginValidations';

export default Ember.Object.extend(validationMixin, {
  username: null,
  password: null
});
