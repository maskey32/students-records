import React from 'react';

import { 
    FullName,
    Image,
    ImageDiv,
    StudentProfile, 
} from './StudentStyles';

const Student = ({ image, firstName, lastName, toggleRecord }) => {
  return (
      <StudentProfile>
        <ImageDiv>
          <Image src={image} alt="Photo" />
        </ImageDiv>
        <FullName onClick={toggleRecord}>{`${firstName} ${lastName}`}</FullName>
      </StudentProfile>
  )
}

export default Student;
