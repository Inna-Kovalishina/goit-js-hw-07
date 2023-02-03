import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')

const makeImageItemMarkup = ({preview, original, description}) => {
    return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`
}

const makeImageGalleryMarkup = galleryItems.map(makeImageItemMarkup).join('');

galleryEl.innerHTML = makeImageGalleryMarkup;

const lightbox = new SimpleLightbox('.gallery a',
  { captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });


console.log(galleryEl);
