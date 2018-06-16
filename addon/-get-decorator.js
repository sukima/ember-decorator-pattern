import { assert } from '@ember/debug';
import { getOwner } from '@ember/application';

export default function getDecorator(ctx, decoratorName) {
  let Decorator = getOwner(ctx).factoryFor(`decorator:${decoratorName}`);
  assert(`Unknown decorator ${decoratorName}. Was it added to app/decorators?`, Decorator);
  return Decorator;
}
