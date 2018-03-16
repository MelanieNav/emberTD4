import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    delete:function(dev) {
      dev.destroyRecord();

    },
    cancel:function () {
      this.modelFor("developers.delete").rollback();
      this.transitionTo("developers");
    }
  }
});
