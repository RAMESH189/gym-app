import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import HorizondalScrollBar from './HorizondalScrollBar'
import Loading from './Loading';

export default function SimilerExercises({ equipmentExercises, targetMuscleExercises }) {

  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Exercises for the same <span style={{color: '#ff2625', textTransform:'capitalize'}}>Target Muscle</span>
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {
          targetMuscleExercises.length ? <HorizondalScrollBar data={targetMuscleExercises } /> : <Loading />
        }
      </Stack>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
       Exercises using the same <span style={{color: '#ff2625', textTransform:'capitalize'}}>equipment</span>
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}  >
        {
          equipmentExercises.length ? <HorizondalScrollBar data={equipmentExercises } /> : <Loading />
        }
      </Stack>
    </Box>
  )
}
