const toggleNode = node => {
  node.nextElementSibling.classList.toggle("expanded");
};

const parentNode = document.querySelector("li");
parentNode.addEventListener("click", () => toggleNode(parentNode));

// Add the following code to set the initial state of the tree diagram
document.querySelector("ul.child-nodes").style.display = "none";
