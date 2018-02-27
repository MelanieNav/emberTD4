import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

const Adapater=DS.RESTAdapter.extend({
  ajaxOptions: function(url, type, options) {
    let hash = this._super(url, type, options);
    if (type === 'POST' || type==='PUT') {
      hash.dataType = 'text';
    }
    return hash;
  },
  host:'http://127.0.0.1:8081',
  namespace: 'boards',
  urlForDeleteRecord(id, modelName) {
    modelName=pluralize(modelName);
    return this.get('host')+'/'+this.get('namespace')+`/${modelName}/*?filter={_id:'${id}'}`;
  }
});

export default Adapater;
