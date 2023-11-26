import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function ExerciseVideo({ exerciseVideo, name }) {
  if (!exerciseVideo.length) return 'Loading...';
  console.log('exerciseVideo', exerciseVideo);
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '2opx' } }} padding='20px' marginLeft='20px'>
      <Typography variant='h4' mb='33px'>
        Watch <span style={{color: '#ff2625', textTransform:'capitalize'}}>{name}</span> videos
      </Typography>
      <Stack
          sx={{ flexDirection: { lg: 'row' }, gap: { lg: '80px', xs: '0px' } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {
          exerciseVideo?.slice(0, 6).map((videoItem, index) => (
            <a
              key={index}
              className="exercise-video"
              target="_blank"
              rel="noreferrer"
              href={`https://www.youtube.com/watch?v=${videoItem.video.videoId}`}
            >
              <img src={videoItem.video.thumbnails[0].url} alt={videoItem.video.title} />
              <Box>
              <Typography sx={{ fontSize: { lg: '20px', xs: '18px' } }} pb='5px' fontWeight={600} color="#000">
                {videoItem.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {videoItem.video.channelName}
              </Typography>
            </Box>
            </a>
          ))
        }
      </Stack>
    </Box>
  )
}
