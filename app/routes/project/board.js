import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      story:this.get('store').findAll('story'),
      fields:['code','description','developer','project','tags']
    });
  }
});
