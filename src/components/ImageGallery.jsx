import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ onModalClick }) => {
  return (
    <ul className="ImageGallery">
      {this.props.imageArr.map(image => (
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
