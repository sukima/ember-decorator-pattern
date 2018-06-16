import ArrayProxy from '@ember/array/proxy';
import { get } from '@ember/object';
import getDecorator from './-get-decorator';

export default ArrayProxy.extend({
  decoratedContent: null,

  objectAtContent(index) {
    let content = this.get('arrangedContent').objectAt(index);
    let decoratedContent = this.get('decoratedContent');
    if (decoratedContent.has(content)) {
      return decoratedContent.get(content);
    }

    let lookupName = this.get('itemDecorator');
    let Decorator = getDecorator(this, lookupName);
    let decorator = Decorator.create({ content, index });
    decoratedContent.set(content, decorator);
    return decorator;
  },

  init() {
    this._super(...argumants);
    this.set('decoratedContent', new WeakMap());
  }
});
