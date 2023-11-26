import React, { useState, useEffect } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/FetchData';
import ExerciseCard from './ExerciseCard';

export default function Exercises({ exercises, setExercise, bodyPart }) {

  // pagination logic
  const [currentPage, setcurrentPage] = useState(1)
  const exercisesPerPage = 10;
  // to set the current displayed Exercises
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise); //map data

  const changePage = (e, value) => {
    setcurrentPage(value);
    window.scrollTo({top:1800, behaviour: 'smooth'})
  }


  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`, exerciseOptions)
      }
      setExercise(exerciseData)
    }
    fetchExerciseData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[bodyPart])

  return (
    <Box
      id='exercises'
      sx={{ mt: { lg: '109px' } }} mt="50px" p="20px"
    >
      <Typography variant='h4' m='10px' p='20px'>
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '100px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {
          currentExercises.map((exercise, index) => (
            <ExerciseCard exercise={exercise} key={index} />
          ))
        }
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {
          exercises.length > exercisesPerPage && (
            <Pagination
              color='standard'
              shape='rounded'
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={changePage}
              size='large'
            />
          )
        }
      </Stack>
    </Box>
  )
}
