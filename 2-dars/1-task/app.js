const list = document.createElement("ul");

const home = document.createElement("li");
const homeText = document.createTextNode("Home");
home.appendChild(homeText);

const about = document.createElement("li");
const aboutText = document.createTextNode("About");
about.appendChild(aboutText);

const contact = document.createElement("li");
const contactText = document.createTextNode("Contact");
contact.appendChild(contactText);

const services = document.createElement("li");
const servicesText = document.createTextNode("Services");
services.appendChild(servicesText);

const blog = document.createElement("li");
const blogText = document.createTextNode("Blog");
blog.appendChild(blogText);

list.appendChild(home);
list.appendChild(about);
list.appendChild(contact);
list.appendChild(services);
list.appendChild(blog);

document.body.appendChild(list);

list.style.listStyle = "none";
list.style.display = "flex";
list.style.backgroundColor = "#ccc";
list.style.margin = 0;
list.style.padding = 0;
document.body.style.margin = 0;

const listElements = list.querySelectorAll("li");
listElements.forEach((listElement) => {
  listElement.style.padding = "20px";
  listElement.style.cursor = "pointer";
});

list.addEventListener("click", (event) => {
  if (event.target.nodeName !== "UL") {
    event.target.classList.add("active");
  }
  listElements.forEach((listElement) => {
    if (listElement !== event.target) {
      listElement.classList.remove("active");
    }
  });
});
