import Ember from 'ember';

var { get, set} = Ember;
export default Ember.Controller.extend({
  actions: {
     submitLogin() {
        alert(get(this, 'username'));
     }
 }
});
