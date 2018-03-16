import Route from '@ember/routing/route';
import Object from '@ember/object';
import EmberObject, { computed } from '@ember/object';
import * as store from "ember-data";

export default Route.extend({
  model(){
    return this.get('store').findAll('developer');

  },
});
