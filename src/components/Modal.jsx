import { useEffect } from 'react';

export const Modal = ({ handelCloseModal, modalImageBig }) => {
  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      handelCloseModal();
    }
  };

  useEffect(() => {
    const handleEscapeClose = e => {
      if (e.key === 'Escape') {
        handelCloseModal();
      }
    };
    document.addEventListener('keydown', handleEscapeClose);
    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [handelCloseModal]);

  return (
    <div onClick={handleBackdropClose} className="Overlay">
      <div className="Modal">
        <img src={modalImageBig.largeImageURL} alt={modalImageBig.tags} />
      </div>
    </div>
  );
};
