import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      steps:this.get('store').findAll('step'),
      fields:['etat'],
      operations:[{icon:'red remove',link:'steps.delete'},{icon:'edit',link:'steps.update'}]
    });
  }
});
