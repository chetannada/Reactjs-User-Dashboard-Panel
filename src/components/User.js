import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function User() {
  const getEmail = localStorage.getItem("emailData");
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 10,
        ml: 30,
        [theme.breakpoints.down("md")]: {
          ml: 22,
        },
        [theme.breakpoints.down("sm")]: {
          ml: 18,
        },
      }}
    >
      <Typography variant="h6">My Email: {getEmail}</Typography>
    </Box>
  );
}
