export const fiveSecondRule = (parentNode, childNode) => {
  setTimeout(function () {
    parentNode.removeChild(childNode);
  }, 5000);
};
