import { useState } from "react";

const useApplicationData = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const [modal, setModal] = useState(false);
  const [photoDetails, setPhotoDetails] = useState({});

  const toggleModal = (e, photoInfo) => {
    e.stopPropagation();
    setModal(prevModal => !prevModal)
    setPhotoDetails(photoDetails => photoDetails = {...photoInfo})
  }

  const handleFavButton = (photoId) => {
    setFavPhotos(prevFav => {
      return prevFav.includes(photoId) ? prevFav.filter(id => id !== photoId) : [...prevFav, photoId]
    })
  }

  return {
    favPhotos, modal, photoDetails, toggleModal, handleFavButton
  }
}

export default useApplicationData;