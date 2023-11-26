import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';
import './app.css';

import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function App() {
  return (
      <Box width='400px' m='auto' sx={{width: {xl: '1488px'}}}>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/exercise/:id' element = {<ExerciseDetail />} />
          </Routes>
          <Footer />
      </Box>
  )
}
