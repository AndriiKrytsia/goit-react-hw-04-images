import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ onModalClick, imageArr }) => {
  return (
    <ul className="ImageGallery">
      {imageArr.map(image => (
        <ImageGalleryItem
          onModalClick={onModalClick}
          key={image.id}
          webformatURL={image.webformatURL}
          tags={image.tags}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
};
