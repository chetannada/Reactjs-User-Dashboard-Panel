import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 10,
        ml: 30,
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
          ml: 22,
        },
        [theme.breakpoints.down("sm")]: {
          ml: 18,
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          [theme.breakpoints.down("md")]: {
            fontSize: 26,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: 22,
          },
        }}
        gutterBottom
      >
        Welcome to the
      </Typography>
      <Typography
        variant="h4"
        sx={{
          [theme.breakpoints.down("md")]: {
            fontSize: 26,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: 22,
          },
        }}
        gutterBottom
      >
        User Dashboard Panel
      </Typography>
      <Typography
        variant="h5"
        sx={{
          [theme.breakpoints.down("md")]: {
            fontSize: 22,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: 18,
          },
        }}
        gutterBottom
      >
        Have a Good Day!
      </Typography>
    </Box>
  );
}
