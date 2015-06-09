(function() {
'use-strict'
var
graph = document.querySelector('.easing-block'),
eases = require('eases'),
fragment = document.createDocumentFragment(),
new_node,
data_string,
x,
y,
i;

graph.remove();
Object.keys(eases).forEach(function(eases_key) {
  new_node = graph.cloneNode(true);
  data_string = '';
  for (i = 0; i <= 100; i++) {
    x = i / 100;
    y = 1 - eases[eases_key](x);
    data_string += x + ',' + y + ' ';
  }
  new_node.querySelector('path').setAttribute('d', 'M ' + data_string);
  new_node.querySelector('h1').innerText = eases_key;
  fragment.appendChild(new_node)
});
document.body.appendChild(fragment);
})()
