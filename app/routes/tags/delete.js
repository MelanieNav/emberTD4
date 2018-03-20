import Route from '@ember/routing/route';
import DeleteRoute from '../delete-route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';


export default DeleteRoute.extend({
  model(params){
    return this.get('store').findRecord('tag',params.tag_id);
  },
  getRedirectRoute(){
    return "tags";
  }
});
