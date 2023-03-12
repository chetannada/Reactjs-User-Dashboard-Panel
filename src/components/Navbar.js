import { React, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  useEffect(() => {
    if (!getEmail && !getPassword) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [getEmail, getPassword]);

  const handleClick = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate("/login");
  };
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar
        sx={{
          bgcolor: "var(--main-bg-color)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Toolbar
          sx={{
            ml: -3,
          }}
        >
          <Link to="/">
            <Typography
              variant="h6"
              sx={{
                color: "white",
                [theme.breakpoints.down("md")]: {
                  fontSize: 18,
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: 16,
                },
              }}
            >
              Dashboard Panel
            </Typography>
          </Link>
        </Toolbar>
        <Toolbar
          sx={{
            mr: -3,
          }}
        >
          <Link to="/user">
            <IconButton title="User">
              <AccountCircleIcon
                sx={{
                  color: "#e6f0ff",
                  fontSize: 40,
                  "&:hover": {
                    color: "#e6e6e6",
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: 30,
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: 25,
                  },
                }}
              />
            </IconButton>
          </Link>
          {isLoggedIn ? (
            <Button
              sx={{
                color: "black",
                bgcolor: "#e6f0ff",
                "&:hover": {
                  bgcolor: "#e6e6e6",
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: 10,
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: 6,
                },
              }}
              onClick={handleClick}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button
                sx={{
                  color: "black",
                  bgcolor: "#e6f0ff",
                  "&:hover": {
                    bgcolor: "#e6e6e6",
                  },
                }}
              >
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
}
