import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', function() {
    this.route('new');
    this.route('delete',{ path: 'delete/:project_id' });
    this.route('update',{ path: 'update/:project_id' });
  });
  this.route('developers', function() {
    this.route('new');
    this.route('update',{ path: 'update/:developer_id' });
    this.route('delete',{ path: 'delete/:developer_id' });
  });
  this.route('project',{ path: 'project/:project_id' });

  this.route('story', function() {
    this.route('new', {path: 'new/:project_id'});
  });
  this.route('tags', function() {
    this.route('new');
    this.route('delete',{ path: 'delete/:tag_id' });
    this.route('update',{ path: 'update/:tag_id' });
  });
  this.route('steps', function() {
    this.route('new');
    this.route('delete',{ path: 'delete/:step_id' });
    this.route('update',{ path: 'update/:step_id' });
  });
<<<<<<< HEAD
  this.route('stories', function() {
    this.route('new');
=======
  this.route('tasks', function() {
    this.route('delete',{ path: 'delete/:task_id' });
    this.route('new');
    this.route('update',{ path: 'update/:task_id' });
>>>>>>> 94e469951fe888a6b69db020a519043f01da220f
  });
});

export default Router;
