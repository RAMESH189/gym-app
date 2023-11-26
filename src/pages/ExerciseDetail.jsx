import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/FetchData';
import Details from '../components/Details';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilerExercises from '../components/SimilerExercises';


export default function ExerciseDetail() {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideo, setexerciseVideo] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions)
      setexerciseDetail(exerciseDetailData);
      
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions)
      setexerciseVideo(exerciseVideosData.contents)
     
      const targetMuscleData = await fetchData(`${exerciseDbUrl}/target/${exerciseDetailData.target}?limit=1000`, exerciseOptions)
      setTargetMuscleExercises(targetMuscleData)

      const equipmentData = await fetchData(`${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}?limit=1000`, exerciseOptions)
      setEquipmentExercises(equipmentData)
    }
    fetchExerciseData()
  }, [id])


  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
      <SimilerExercises equipmentExercises={equipmentExercises} targetMuscleExercises={targetMuscleExercises} />
    </Box>
  )
}
