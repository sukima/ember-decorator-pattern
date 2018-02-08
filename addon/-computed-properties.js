import Ember from 'ember';
import getDecorator from './-get-decorator';

const { String: { dasherize }, computed, get } = Ember;

export function decorates(dependentProp, decoratorName) {
  return computed(dependentProp, {
    get(key) {
      const Decorator = getDecorator(this, decoratorName || dasherize(key));
      let content = get(this, dependentProp);
      return Decorator.create({ content });
    }
  }).readOnly();
}
