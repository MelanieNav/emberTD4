import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', function() {
    this.route('new');
  });
  this.route('developers', function() {
    this.route('new');
    this.route('update',{path:'update/:identity'});
    this.route('delete');
  });
});

export default Router;
