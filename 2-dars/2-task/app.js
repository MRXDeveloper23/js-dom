const input = document.createElement("input");
const image = document.createElement("img");

image.setAttribute("src", "view.png");
image.style.position = "relative";
image.style.top = "3px";
image.style.right = "20px";

input.appendChild(image);
input.setAttribute("type", "password");
input.setAttribute("placeholder", "Enter password");
input.appendChild(image);
input.style.padding = "5px";

document.body.appendChild(input);
document.body.appendChild(image);

image.addEventListener("click", () => {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    image.setAttribute("src", "eye.png");
  } else {
    input.setAttribute("type", "password");
    image.setAttribute("src", "view.png");
  }
});
