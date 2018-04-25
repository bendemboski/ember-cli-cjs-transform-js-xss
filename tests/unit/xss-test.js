import { module, test } from 'qunit';
import filterXSS from 'xss';

module('xss', function() {
  test('it imports', function(assert) {
    assert.equal(filterXSS, window.filterXSS);
    assert.equal(filterXSS('foo<script>hello</script>bar'), 'foo&lt;script&gt;hello&lt;/script&gt;bar');
  });
});
