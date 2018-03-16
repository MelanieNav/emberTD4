import Route from '@ember/routing/route';
import Object from '@ember/object';
import EmberObject, { computed } from '@ember/object';
import * as store from "ember-data";

export default Route.extend({
  model(){
    return this.get('store').findAll('developer');

  },
  actions:{
    modify(){
      this.get('store').findRecord('developer', 1).then(function(update) {
        update.set('name', "");
      });

    },
    delete:function () {
      store.findRecord('post', 2, { backgroundReload: false }).then(function(post) {
        post.destroyRecord();
      });
    },
    cancelDeletion:function (deleteds) {
      deleteds.forEach(
        (developer)=>{developer.rollbackAttributes();}
      );
    },
  }
});
