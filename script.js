const panels = document.querySelectorAll(".panel");

const togglePanelActive = (panel) => {
  const isActive = panel.classList.contains("active");
  removeActiveClasses();
  if (!isActive) {
    panel.classList.add("active");
  }
};

const removeActiveClasses = () => {
  panels.forEach(({ classList }) => classList.remove("active"));
};

panels.forEach((panel) =>
  panel.addEventListener("click", () => togglePanelActive(panel))
);
