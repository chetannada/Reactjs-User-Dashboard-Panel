import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useRouteError, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import { useTheme } from "@mui/material/styles";

export default function Error() {
  const err = useRouteError();
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#e6f0ff",
        [theme.breakpoints.down("md")]: {
          pl: 2,
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          [theme.breakpoints.down("md")]: {
            fontSize: 55,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: 45,
          },
        }}
        gutterBottom
      >
        <ErrorIcon
          sx={{
            fontSize: 85,
            color: "#ff4d4d",
            [theme.breakpoints.down("md")]: {
              fontSize: 55,
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: 45,
            },
          }}
        />{" "}
        Error {err.status}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          [theme.breakpoints.down("md")]: {
            fontSize: 25,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: 20,
          },
        }}
        gutterBottom
      >
        {err.data}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Link to="/">
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              bgcolor: "#80ff80",
              "&:hover": {
                bgcolor: "#e6e6e6",
              },
            }}
          >
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
