import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TbPointFilled } from "react-icons/tb";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 10,
        ml: 30,
        mr: 5,
        [theme.breakpoints.down("md")]: {
          ml: 22,
        },
        [theme.breakpoints.down("sm")]: {
          ml: 18,
        },
      }}
    >
      <Typography variant="h5" gutterBottom>
        About me
      </Typography>
      <Typography variant="body1" gutterBottom>
        <TbPointFilled /> I'm Self-taught React.js Developer.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <TbPointFilled /> I am passionate about coding and always strive to
        write efficient, maintainable, and scalable code.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <TbPointFilled /> I am highly-motivated, hard-working, fast learner and
        constantly seeking to improve my skills and am fully aware of the latest
        Front-end Development Tools.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <TbPointFilled /> My goal is to build a fast, flexible, mobile-first
        website that clearly communicates with visitors.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <TbPointFilled /> I enjoy collaborating with other developers, learning
        new technologies, and contributing to open-source projects.
      </Typography>
    </Box>
  );
}
