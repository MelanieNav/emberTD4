import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    modify(dev) {
      dev.save().then(()=>{
        this.transitionTo("developers");
      })

    }
  }
});
