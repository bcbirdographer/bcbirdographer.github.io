const nodes = document.querySelectorAll("#taxonomy-tree li");

nodes.forEach(node => {
  node.addEventListener("click", function() {
    this.classList.toggle("open");
  });
});
