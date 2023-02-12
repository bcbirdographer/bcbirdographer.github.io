document.addEventListener("DOMContentLoaded", function() {
  var nodes = document.querySelectorAll("#taxonomy-tree li");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener("click", function(event) {
      event.stopPropagation();
      this.classList.toggle("open");
    });
  }
});
