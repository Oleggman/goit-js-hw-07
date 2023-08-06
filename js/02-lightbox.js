import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    (img) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${img.original}">
                <img class="gallery__image" src="${img.preview}" alt="${img.description}" title="${img.description}"/>
            </a>
        </li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
