import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model(){
    return EmberObject.create();
  },
  actions:{
    save(dev){
      dev=this.get('store').createRecord('developer',{identity:dev.identity});
      dev.save().then(()=>{
        this.transitionTo("developers");
      });
    },
    cancel:function () {
      this.modelFor("developers.new").rollback();
      this.transitionTo("developers");

    }
  }
});
