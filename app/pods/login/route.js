import Ember from 'ember';
import loginModel from './model';

export default Ember.Route.extend({
  model: function() {
    return loginModel.create({ container: this.get('container')});
  },
});
