import { useReducer } from "react";

const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  HANDLE_FAV_BUTTON: 'HANDLE_FAV_BUTTON'
}

const initialState = {
  favPhotos: [],
  modal: false,
  photoDetails: {}
}

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
        photoDetails: action.payload || {}
      }
    case ACTIONS.HANDLE_FAV_BUTTON:
      return {
        ...state,
        favPhotos: state.favPhotos.includes(action.payload) ? state.favPhotos.filter(id => id !== action.payload) : [...state.favPhotos, action.payload]
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      )
  }
}

const useApplicationData = () => {
  // const [favPhotos, setFavPhotos] = useState([]);
  // const [modal, setModal] = useState(false);
  // const [photoDetails, setPhotoDetails] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleModal = (e, photoInfo) => {
    e.stopPropagation();
    // setModal(prevModal => !prevModal)
    // setPhotoDetails({...photoInfo})
    dispatch({type: ACTIONS.TOGGLE_MODAL, payload: photoInfo})
  }

  const handleFavButton = (photoId) => {
    // setFavPhotos(prevFav => {
    //   return prevFav.includes(photoId) ? prevFav.filter(id => id !== photoId) : [...prevFav, photoId]
    // })
    dispatch({type: ACTIONS.HANDLE_FAV_BUTTON, payload: photoId})
  }

  return {
    favPhotos: state.favPhotos, modal: state.modal, photoDetails: state.photoDetails, toggleModal, handleFavButton
  }
}

export default useApplicationData;