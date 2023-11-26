import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

export default function Navbar() {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{ gap: { sm: '122px', xs: "40px" }, mt: { sm: '32px', xs: '2opx' }, justifyContent: 'none' }}
      px='20px'
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ height: "52px", width: "52px", margin: "5px 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{ color: "#3A1212", borderBottom: "3px solid #FF2625" }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ color: "#3A1212" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}
