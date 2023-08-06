import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    (img) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${img.original}">
                <img
                    class="gallery__image"
                    src="${img.preview}"
                    data-source="${img.original}"
                    alt="${img.description}"
                />
            </a>
        </li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryRef.addEventListener("click", onGalleryItemClick);

let instance;

function onGalleryItemClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }

  evt.preventDefault();

  instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" alt="${evt.target.alt}" />`);
  instance.show();

  closeModalByEscape();
}

function closeModalByEscape() {
  window.addEventListener("keydown", onEscPress);

  function onEscPress(evt) {
    if (!instance.visible()) {
      window.removeEventListener("keydown", onEscPress);
      return;
    }

    if (evt.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscPress);
    }
  }
}
