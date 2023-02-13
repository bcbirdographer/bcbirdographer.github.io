// Get all the tree diagram nodes
const nodes = document.querySelectorAll(".node");

// Add a click event listener to each node
nodes.forEach(node => {
  node.addEventListener("click", function() {
    this.classList.toggle("active");

    // Get the next sibling of the node (the sub-nodes)
    let subNodes = this.nextElementSibling;
    
    // If there are sub-nodes, toggle their visibility
    if (subNodes) {
      subNodes.classList.toggle("show");
    }
  });
});
