// Get all nodes
const nodes = document.querySelectorAll(".node");

// Add click event listeners to all nodes
nodes.forEach((node) => {
  node.addEventListener("click", (event) => {
    // Get sub-nodes of the clicked node
    const subNodes = node.nextElementSibling;

    // If sub-nodes are visible, hide them
    if (subNodes.style.display === "block") {
      subNodes.style.display = "none";
    }
    // If sub-nodes are hidden, show them
    else {
      subNodes.style.display = "block";
    }

    // Prevent the click event from propagating to parent nodes
    event.stopPropagation();
  });
});
