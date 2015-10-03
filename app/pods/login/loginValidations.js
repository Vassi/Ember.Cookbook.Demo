import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';
import lazyValidationMixin from 'cookbook/mixins/lazierValidationMixin';

var validations = buildValidations({
   username: validator('presence', true),
   password: validator('presence', true)
}).reopen(lazyValidationMixin);

var computed = Ember.computed;

export default validations.reopen({
   invalidUsername: computed.and('displayValidation', 'validations.attrs.username.isInvalid'),
   invalidPassword: computed.and('displayValidation', 'validations.attrs.password.isInvalid')
});
