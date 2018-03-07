import Route from '@ember/routing/route';
import Object from '@ember/object';
import EmberObject, { computed } from '@ember/object';

export default Route.extend({
  model(){
    return this.get('store').findAll('developer');

  },
  actions:{
    modify(){
      this.get('store').findRecord('developer', 1).then(function(update) {
        update.set('name', "cc");
      });

    },
    delete:function (developer) {
      Ember.set(developer,'deleted',true);
    },
    cancelDeletion:function (deleteds) {
      deleteds.forEach(
        (developer)=>{developer.rollbackAttributes();}
      );
    },
  }
});
