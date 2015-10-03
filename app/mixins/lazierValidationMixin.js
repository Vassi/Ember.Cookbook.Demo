import Ember from 'ember';

var computed = Ember.computed;
export default Ember.Mixin.create({
   displayValidation: false,
   vattrs: computed.alias('validations.attrs'),
   vattrsAreValid: computed.and('validations.isValid', 'displayValidation'),
   vattrsAreInvalid: computed.and('validations.isInvalid', 'displayValidation')
});
