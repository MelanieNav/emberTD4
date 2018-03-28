import Route from '@ember/routing/route';
import EmberObject,{get} from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return new RSVP.hash({
      story: this.get('store').findRecord('story',params.story_id)
    });
  },
  afterModel(model){
    Ember.set(model,'data',EmberObject.create(JSON.parse(JSON.stringify(get(model,'story')))));
  },
  actions:{
    save(story,data){
      Ember.set(story,'code',data.code);
      Ember.set(story,'description',data.description);
      Ember.set(story,'developer',data.developer);
      Ember.set(story,'project',data.project);
      Ember.set(story,'tags',data.tags);
      story.save().then(()=>{
        this.transitionTo("stories");
      })
    },
    cancel(){
      this.transitionTo("stories");
    }
  }
});
