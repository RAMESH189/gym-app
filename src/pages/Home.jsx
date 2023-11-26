import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

export default function Home() {
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')
  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        exercises={exercise}
      />
    </Box>
  )
}
