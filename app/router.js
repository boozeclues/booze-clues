import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('index', {path:'/'}, function() {
    this.route('cabinet');
    this.route('featured', {path:'/'});
    this.route('recipe');
    this.route('browse');
  })
});


export default Router;
