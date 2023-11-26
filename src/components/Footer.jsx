import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import footerLogo from '../assets/images/Logo.png'

export default function Footer() {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={footerLogo} alt="logo" style={{ width: '150px', height: '100px' }} />
    </Stack>
      <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
        For all Gym guys and gals <br /> with the help of 
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none', color: 'black' }}
          href='https://youtu.be/KBpoBc98BwM?feature=shared'><b> Javascript Mastery.</b>
        </a>
      </Typography>
  </Box>
  )
}
