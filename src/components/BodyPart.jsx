import React from 'react'
import { Stack, Typography } from '@mui/material'
import icon from '../assets/icons/gym.png'
export default function BodyPart({bodyPartName, bodyPart, setBodyPart }) {
  return (
      <Stack
          type='button'
          justifyContent='center'
          alignItems='center'
          className='bodyPart-card'
          sx={{
              borderTop: bodyPart === bodyPartName ? '4px solid #FF2625' : '',
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px'
          }}
          onClick={() => {
              setBodyPart(bodyPartName);
              window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
          }}
          
      >
          <img src={icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
          <Typography
              fontSize='24px'
              fontWeight='bold'
              textTransform='capitalize'
              color='#3A1212'
          >{bodyPartName}</Typography>
    </Stack>
  )
}
