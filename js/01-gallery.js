import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryImg = document.querySelector(".gallery");

const galleryHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
  })
  .join("");

galleryImg.insertAdjacentHTML("beforeend", galleryHTML);

let instance = null;

galleryImg.addEventListener("click", (event) => {
  event.preventDefault();

  const linkEl = event.target.closest(".gallery__link");

  if (linkEl) {
    const href = linkEl.href;
    instance = basicLightbox.create(`<img src="${href}" />`);
    instance.show();
  }
});

const handleKeyDown = (event) => {
  if (event.code === "Escape" && instance && instance.visible()) {
    instance.hide();
    document.removeEventListener("keydown", handleKeyDown);
  }
};

document.addEventListener("keydown", handleKeyDown);
