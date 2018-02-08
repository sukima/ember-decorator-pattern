import Ember from 'ember';

const { assert, getOwner } = Ember;

export default function getDecorator(ctx, decoratorName) {
  let Decorator = getOwner(ctx).factoryFor(`decorator:${decoratorName}`);
  assert(`Unknown decorator ${decoratorName}. Was it added to app/decorators?`, Decorator);
  return Decorator;
}
