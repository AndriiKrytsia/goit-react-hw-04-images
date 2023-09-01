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
  const [isShowBtn, setShowBtn] = useState(false);


  const handelOpenModal = imageBig => {
    setIsModalOpen(true);
    setModalImage(imageBig)
  };

  const handelCloseModal = () => {
    setIsModalOpen(false);
  };

  handelPageUpdate = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearchValue = setSearchValue => {
      setSearchValue(value),
      setPage(1),
      setImages([]),
      setIsError(false),
      setIsLoader(false),
      setIsModalOpen(false),
      setModalImage(null),
      setIsShowBtn(false),
  };

   useEffect =>(_, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoader: true });
        const responImages = await getImages(
          this.state.searchValue,
          this.state.page
        );
        if (responImages.totalHits === 0) {
          return alert('Try now!!!');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...responImages.hits],
          isShowBtn: Math.ceil(responImages.totalHits / 12) > this.state.page,
        }));
      } catch (error) {
        this.setState({ isError: true });
      } finally {
        this.setState({ isLoader: false });
      }
    }
  }


    return (
      <div className="App">
        <Searchbar onChangeSearch={this.handleSearchValue} />
        <ImageGallery imageArr={images} onModalClick={this.handelOpenModal} />
        {isModalOpen && (
          <Modal
            modalImageBig={modalImage}
            handelCloseModal={this.handelCloseModal}
          />
        )}
        {isShowBtn && <Button onClickLoadMore={this.handelPageUpdate} />}
        {isLoader && <Loader />}
      </div>
    );
  }

