import DeleteRoute from '../delete-route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';


export default DeleteRoute.extend({
  model(params){
    return this.get('store').findRecord('step',params.step_id);
  },
  getRedirectRoute(){
    return "steps";
  }
});
