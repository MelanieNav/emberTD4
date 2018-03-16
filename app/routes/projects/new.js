import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model(){
    return EmberObject.create();
  },
  actions:{
    save(pro){
      pro=this.get('store').createRecord('project',
        JSON.parse(JSON.stringify(pro)));
      pro.save().then(()=>{
        this.transitionTo("projects");
      });
    },
    cancel:function () {
      this.modelFor("projects.new").rollback();
      this.transitionTo("projects");
    }
  }
});
