import { useReducer, useEffect } from "react";

const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  HANDLE_FAV_BUTTON: 'HANDLE_FAV_BUTTON',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
}

const initialState = {
  favPhotos: [],
  modal: false,
  photoDetails: {},
  photosData: [],
  topicsData: []
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
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photosData: action.payload
      }
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicsData: action.payload
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      )
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data}))
  }, [])

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data}))
  }, [])


  const toggleModal = (e, photoInfo) => {
    e.stopPropagation();
    dispatch({type: ACTIONS.TOGGLE_MODAL, payload: photoInfo})
  }

  const handleFavButton = (photoId) => {
    dispatch({type: ACTIONS.HANDLE_FAV_BUTTON, payload: photoId})
  }



  return {
    photosData: state.photosData, topicsData: state.topicsData, favPhotos: state.favPhotos, modal: state.modal, photoDetails: state.photoDetails, toggleModal, handleFavButton
  }
}

export default useApplicationData;