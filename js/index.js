console.log("starting");
const accordionBtns = document.querySelectorAll(".list_title");

accordionBtns.forEach((el) => {
  el.addEventListener("click", (e) => {
    const targetEl = e?.target;
    targetEl?.classList.toggle("is-open");
    let content = targetEl?.nextElementSibling;
    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
      console.log("will set to null");
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log("max height", content.style.maxHeight);
    }
  });
});
