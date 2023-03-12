import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Cards from "./Cards";
import { jsonPlaceholderData } from "../constants/Constants";
import { filterData } from "./utils/Helper";
import { useTheme } from "@mui/material/styles";

export default function Blogs() {
  const [searchText, setSearchText] = useState("");
  const [allUserData, setAllUserData] = useState([]);
  const [filteredUserData, setFilteredUserData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const theme = useTheme();
  useEffect(() => {
    getJsonPlaceholderData();
  }, []);

  async function getJsonPlaceholderData() {
    try {
      const response = await fetch(jsonPlaceholderData);
      const json = await response.json();
      setAllUserData(json);
      setFilteredUserData(json);
    } catch (error) {
      console.log(error);
    }
  }

  const searchData = (searchText, userData) => {
    if (searchText !== "") {
      const data = filterData(searchText, userData);
      setFilteredUserData(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredUserData(userData);
    }
  };

  if (!allUserData) return null;

  return (
    <>
      {allUserData?.length === 0 ? (
        <Typography
          variant="h6"
          sx={{
            mt: 10,
            ml: 28,
            mr: 10,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
              ml: 22,
              fontSize: 18,
            },
            [theme.breakpoints.down("sm")]: {
              mr: 2,
              ml: 18,
            },
          }}
          gutterBottom
        >
          User data is Loading...
        </Typography>
      ) : (
        <Box
          sx={{
            mt: 10,
            ml: 28,
            mr: 5,
            [theme.breakpoints.down("md")]: {
              ml: 20,
            },
            [theme.breakpoints.down("sm")]: {
              mr: 0,
              ml: 16,
            },
          }}
        >
          <Paper
            sx={{
              p: "2px 4px",
              display: "flex",
              m: "auto",
              alignItems: "center",
              width: 400,
              [theme.breakpoints.down("md")]: {
                width: 250,
                ml: 1,
              },
              [theme.breakpoints.down("sm")]: {
                width: 180,
                mr: 2,
              },
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search any user you want..."
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                searchData(e.target.value, allUserData);
              }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          {errorMessage && (
            <Typography
              variant="body1"
              sx={{ textAlign: "center", pt: 3 }}
              gutterBottom
            >
              {errorMessage}
            </Typography>
          )}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              borderRadius: 1,
            }}
          >
            {filteredUserData?.map((item, index) => {
              return <Cards {...item} key={index} />;
            })}
          </Box>
        </Box>
      )}
    </>
  );
}
