const treeData = [
  {
    text: "Parent Node 1",
    nodes: [
      {
        text: "Child Node 1",
        nodes: [
          {
            text: "Grandchild Node 1"
          },
          {
            text: "Grandchild Node 2"
          }
        ]
      },
      {
        text: "Child Node 2"
      }
    ]
  },
  {
    text: "Parent Node 2",
    nodes: [
      {
        text: "Child Node 1"
      },
      {
        text: "Child Node 2",
        nodes: [
          {
            text: "Grandchild Node 1"
          },
          {
            text: "Grandchild Node 2"
          }
        ]
      }
    ]
  }
];

const tree = document.querySelector(".tree");
const treeNodes = document.querySelectorAll(".node");

treeNodes.forEach(node => {
  node.addEventListener("click", e => {
    const parentNode = e.currentTarget.parentNode;
    const subNodes = parentNode.querySelector(".nodes");
    subNodes.classList.toggle("active");
  });
});

const createTree = data => {
  let treeHTML = `<ul class="nodes">`;
  data.forEach(node => {
    treeHTML += `
      <li class="node">
        <div class="node-header">
          <i class="fas fa-plus"></i>
          <span>${node.text}</span>
        </div>
    `;
    if (node.nodes) {
      treeHTML += createTree(node.nodes);
    }
    treeHTML += `</li>`;
  });
  treeHTML += `</ul>`;
  return treeHTML;
};

tree.innerHTML = createTree(treeData);
