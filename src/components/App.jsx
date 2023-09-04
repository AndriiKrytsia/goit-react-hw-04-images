import { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';
import { getImages } from '../helpers/imageApi';
import { Button } from './Button';
import { Modal } from './Modal';
import { Loader } from './Loader';

export const App = () => {
  const [image, setImage] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isShowBtn, setIsShowBtn] = useState(false);

  const handleOpenModal = imageBig => {
    setIsModalOpen(true);
    setModalImage(imageBig);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePageUpdate = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearchValue = value => {
    setSearchValue(value);
    setPage(1);
    setImage([]);
    setIsError(false);
    setIsLoader(false);
    setIsModalOpen(false);
    setModalImage(null);
    setIsShowBtn(false);
  };

  useEffect(() => {
    if (!searchValue) return;
    try {
      setIsLoader(true);
      async function resImages() {
        const responseImages = await getImages(searchValue, page);

        if (responseImages.totalHits === 0) {
          return alert('Try now!!!');
        }
        setImage([...image, ...responseImages.hits]);
        setIsShowBtn(Math.ceil(responseImages.totalHits / 12) > page);
      }
      resImages();
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoader(false);
    }
  }, [searchValue, page]);

  return (
    <div className="App">
      <Searchbar onChangeSearch={handleSearchValue} />
      <ImageGallery imageArr={image} onModalClick={handleOpenModal} />
      {isModalOpen && (
        <Modal modalImageBig={modalImage} handelCloseModal={handleCloseModal} />
      )}
      {isError && <p>Error</p>}
      {isShowBtn && <Button onClickLoadMore={handlePageUpdate} />}
      {isLoader && <Loader />}
    </div>
  );
};
