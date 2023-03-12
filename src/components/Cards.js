import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function Cards({ id, name }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleClick = () => {
    navigate(`/blogs/${id}`, { state: { username: { name } } });
  };

  return (
    <Card
      sx={{
        width: 240,
        m: 1,
        "&:hover": {
          bgcolor: "#dfeef7",
        },
        [theme.breakpoints.down("md")]: {
          width: 220,
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
          Id: {id}
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
      <CardActions>
        <Button
          sx={{
            color: "black",
            bgcolor: "#f7efb0",
            "&:hover": {
              bgcolor: "#e6e6e6",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: 10,
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: 8,
            },
          }}
          onClick={handleClick}
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}
