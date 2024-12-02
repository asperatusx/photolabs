import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { handleFavButton, photoId, isFav } = props;

  return (
    <div
      onClick={() => handleFavButton(photoId)}
      className="photo-list__fav-icon"
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
