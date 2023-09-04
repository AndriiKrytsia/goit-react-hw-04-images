
export const ImageGalleryItem = ({ onModalClick, webformatURL, largeImageURL, tags }) => {
    return (
      <li
        className="ImageGalleryItem"
        onClick={() => onModalClick({ largeImageURL, tags })}
      >
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </li>
    );
    }
