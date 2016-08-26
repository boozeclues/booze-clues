import { moduleForModel, test } from 'ember-qunit';

moduleForModel('recipe-ingredient', 'Unit | Model | recipe ingredient', {
  // Specify the other units that are required for this test.
  needs: ['model:drink', 'model:ingredient']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
