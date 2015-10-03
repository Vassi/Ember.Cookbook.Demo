import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
   this.route('login');

   this.route('recipes');

   this.route('404', { path: '/*url'});

   this.route('oh-no');
});

export default Router;
