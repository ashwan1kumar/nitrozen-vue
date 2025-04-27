const strokeBtn = app => {
  app.directive("stroke-btn", {
    beforeMount: function(el, binding, vnode) {
      el.classList.add("n-button-stroke");
      if (vnode.props.theme == "primary") {
        el.classList.add("n-button-stroke-primary");
      } else {
        el.classList.add("n-button-stroke-secondary");
      }
    }
  });
};


export default strokeBtn;