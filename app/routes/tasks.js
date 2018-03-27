import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      tasks:this.get('store').findAll('task'),
      fields:['title'],
      operations:[{icon:'red remove',link:'tasks.delete'},{icon:'edit',link:'tasks.update'}]
    });
  }
});
