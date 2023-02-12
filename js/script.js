// Select all of the li elements within the #taxonomy-tree element
const nodes = document.querySelectorAll("#taxonomy-tree li");

// Loop through each node in the nodes NodeList
nodes.forEach(node => {
  // Add a click event listener to the node
  node.addEventListener("click", () => {
    // Toggle the open class on the clicked node
    node.classList.toggle("open");
  });
});
