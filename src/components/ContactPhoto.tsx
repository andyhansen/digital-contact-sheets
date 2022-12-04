import React, { FC } from 'react';
import Photo from '../models/Photo';

type props = {
  photo?: Photo;
}

const ContactPhoto: FC<props> = ({ photo = new Photo() }) => {
  return (
    <div className="ContactPhoto">
      <img src={photo.image.src} width={photo.width} height={photo.height} />
    </div>
  );
}

export default ContactPhoto;
