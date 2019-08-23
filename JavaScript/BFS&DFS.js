//深度优先遍历
//递归版本
function deepFirsetSearch(node, nodeList) {
  if (node) {
    nodeList.push(node);
    var children = node.children;
    for (let i = 0; i < children.length; i++) {
      deepFirsetSearch(children[i], nodeList);
    }
  }
  return nodeList;
}
//非递归版本
function deepFirsetSearch2(node) {
  var nodes = [];
  if (node != null) {
    var stack = [];
    stack.push(node);
    while (stack.length != 0) {
      var item = stack.pop();
      nodes.push(item);
      var children = item.children;
      for (var i = children.length - 1; i >= 0; i--)
        stack.push(children[i]);
    }
  }
  return nodes;
}
//广度优先遍历
//递归版本
function breadFirstSearch(node) {
  var nodes = [];
  var i = 0;
  if (node != null) {
    nodes.push(node);
    breadthFirstSearch(node.nextElementSibling);
    node = nodes[i++];
    breadFirstSearch(node.firstElementChild);
  }
  return nodes;
}
//非递归版本
function breadFirstSearch2(node) {
  var nodes = [];
  if (node != null) {
    var queue = [];
    queue.unshift(node);
    while (queue.length != 0) {
      var item = queue.shift();
      nodes.push(item);
      var children = item.children;
      for (let i = 0; i < children.length; i++) {
        queue.push(children[i]);
      }
    }
  }
  return nodes;
}