import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroBanner from "../assets/images/gym1.jpeg";

export default function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight={600} fontSize="26px">
        Gym Workouts
      </Typography>

      <Typography
        fontWeight={700}
        fontFamily='Vina sans'
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb='23px' mt='30px'
      >
        "Grind hard <br /> and Repeat"
      </Typography>

      <Typography fontSize="20px" fontWeight={600} lineHeight="34px" mb={3}>
        Checkout the most effective Exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{padding:'15px', borderRadius: '10px'}}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ display: { lg: "block", xs: "none" }, opacity: 0.1 }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={heroBanner} alt="heroBannerImage" className="hero-banner-img" />
    </Box>
  );
}
