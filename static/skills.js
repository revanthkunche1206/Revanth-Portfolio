document.querySelectorAll(".RadialProgress").forEach(el => {
  const target = parseInt(el.getAttribute("data-value"));
  const skill = el.getAttribute("data-skill");
  const label = el.querySelector(".label");

  let current = 0;

  const animate = () => {
    if (current <= target) {
      el.style.setProperty("--progress", `${current}%`);
      label.innerHTML = `${skill}<br>${current}%`;
      current++;
      requestAnimationFrame(animate);
    }
  };

  animate();
});
