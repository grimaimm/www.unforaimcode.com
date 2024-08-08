const remarkClassName = () => {
  return (tree) => {
    tree.children.forEach((node) => {
      if (node.type === 'blockquote') {
        const className = node.children[0]?.value?.split('\n').find(line => line.startsWith('className:'));
        if (className) {
          node.data = {
            hProperties: { className: className.split(':')[1].trim() }
          };
        }
      }
    });
  };
};

export default remarkClassName;