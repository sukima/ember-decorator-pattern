import Ember from 'ember';
import getDecorator from './-get-decorator';

const { ArrayProxy, get } = Ember;

export default ArrayProxy.extend({
  objectAtContent(index) {
    const Decorator = getDecorator(this, this.get('itemDecorator'));
    let content = get(this, 'arrangedContent').objectAt(index)
      || get(this, 'defaultObject');
    return Decorator.create({ content, index });
  }
});
