import { dasherize } from '@ember/string';
import { computed, get } from '@ember/object';
import getDecorator from './-get-decorator';

export function decorates(dependentProp, decoratorName) {
  return computed(dependentProp, {
    get(key) {
      let content = get(this, dependentProp);
      let lookupName = decoratorName || dasherize(key);
      let Decorator = getDecorator(this, lookupName);
      return Decorator.create({ content });
    }
  }).readOnly();
}
