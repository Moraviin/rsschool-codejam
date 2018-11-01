function recursion(tree) {
  return normalyze(treeParser(tree));
  function treeParser(three) {
    let arr = [];
    let nodes = [];
    if (Array.isArray(three) == true) {
      three.forEach(node => {
        nodeParser(node);
      });
    } else {
      nodeParser(three);
    }
    if (nodes.length != 0) {
      arr = arr.concat([treeParser(nodes)]);
    }
    return arr;

    function nodeParser(three) {
      for (let node in three) {
        if (node == "value") {
          arr.push(three[node]);
        } else {
          nodes.push(three[node]);
        }
      }
    }
  }
  function normalyze(arr) {
    let norm = [];
    let lvl = [];
    for (let i = 0; i <= arr.length; i++) {
      if (i === arr.length) norm.push(lvl);
      else {
        if (Array.isArray(arr[i]) == false) {
          lvl.push(arr[i]);
        } else {
          norm.push(lvl);
          lvl = [];
          arr = arr[i];
          i = -1;
        }
      }
    }
    return norm;
  }
}
