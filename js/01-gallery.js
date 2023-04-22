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

    window.addEventListener(
      "keydown",
      (evt) => {
        if (evt.code !== "Escape") return;
        instance.close();
      },
      { once: true }
    );
  }
});

