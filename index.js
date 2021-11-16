document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-button");
  const neon = document.querySelector(".neon");

  const on = () => {
    neon.classList.add("on");
    toggleButton.innerHTML = "ブゥン";
  };
  const off = () => {
    neon.classList.remove("on");
    toggleButton.innerHTML = "ボォん";
  };

  let timer = setTimeout(() => {
    on();
  }, 2000);

  toggleButton.addEventListener("click", () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    const isOn = neon.classList.contains("on");
    if (isOn) off();
    else on();
  });
});
