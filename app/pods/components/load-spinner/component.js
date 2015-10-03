/* globals Spinner */
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['load-spinner'],
  init() {
    var opts = {
      lines: 15,
      length: 37,
      width: 11,
      radius: 68,
      scale: 0.75,
      corners: 1,
      color: '#000',
      opacity: 0.25,
      rotate: 0,
      direction: 1,
      speed: 1.3,
      trail: 60,
      fps: 20,
      zIndex: 2e9,
      className: 'spinner',
      top: '50%',
      left: '50%',
      shadow: true,
      hwaccel: true,
      position: 'absolute'
   };
    this.spinner = new Spinner(opts);
},

  didInsertElement() {
    this.spinner.spin(document.getElementsByTagName('body')[0]);
  },
  willDestroyElement() {
    this.spinner.stop();
  }
});
