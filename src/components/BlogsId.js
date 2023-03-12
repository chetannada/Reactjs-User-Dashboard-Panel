import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { useParams, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function BlogsId() {
  const { id } = useParams();
  const { state } = useLocation();
  const theme = useTheme();
  const name = state?.username?.name;
  return (
    <Box
      sx={{
        mt: 10,
        ml: 28,
        mr: 10,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 1,
        [theme.breakpoints.down("md")]: {
          ml: 20,
        },
        [theme.breakpoints.down("sm")]: {
          mt: 8,
          ml: 16,
          mr: 0,
        },
      }}
    >
      <Card
        sx={{
          width: 240,
          m: 1,
          "&:hover": {
            bgcolor: "#dfeef7",
          },
          [theme.breakpoints.down("md")]: {
            width: 200,
          },
          [theme.breakpoints.down("sm")]: {
            width: 140,
          },
        }}
      >
        <CardContent title={`${name}, Id: ${id}`}>
          <Typography
            variant="h6"
            sx={{
              [theme.breakpoints.down("md")]: {
                fontSize: 18,
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: 16,
              },
            }}
            gutterBottom
          >
            Id: {+id}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              [theme.breakpoints.down("md")]: {
                fontSize: 18,
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: 16,
              },
            }}
          >
            Name: {name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
