import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};



export default function HorizondalScrollBar({data, bodyPart, setBodyPart, isBodyPart}) {
  return (
      
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {
              data && data.map((item) => (
                  <Box
                      key={item.id || item}
                      title={item.id || item}
                      itemId={item.id || item}
                      m="0 40px"
                  >
                  {
                    isBodyPart ? <BodyPart bodyPartName={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> 
                    : <ExerciseCard exercise={item}/>
                  }
                  </Box>
              ))
          }
    </ScrollMenu>

  )
}
