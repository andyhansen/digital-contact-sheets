import React, { FC } from 'react';
import Photo from '../models/Photo';

type props = {
  photo?: Photo;
}

const ContactPhoto: FC<props> = ({ photo = new Photo() }) => {
  if (!photo) photo = new Photo()

  return (
    <div className="ContactPhoto">
    </div>
  );
}

export default ContactPhoto;
