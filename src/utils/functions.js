export function showAlert(message, textColor) {
  const showMessage = document.querySelector("#showMessage");
  const div = document.createElement("div");
  showMessage.appendChild(div);
  div.innerHTML = message;
  div.classList.add(`text-${textColor}-500`);
  div.classList.add("py-2");
  div.classList.add("px-4");
  div.classList.add("font-bold");
  div.classList.add("text-md");
  div.classList.add("rounded");

  setInterval(() => {
    div.remove();
  }, 2000);
}
