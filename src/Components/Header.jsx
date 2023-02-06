import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from './../assets/Logo_ML.png';
import searchIcon from './../assets/ic_Search.png';
import * as C from "./../utils/constants";
import { Stack, Button, TextField } from '@mui/material/'
import "./../css/globals.scss"


/* Search function */
const Header = ({ handleSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const search = (e) => {
    const [{ value }] = e.target;
    e.preventDefault();
    // prevent empty search
    if (value.trim() !== "") {
      handleSearch(value);
      navigate(`${C.SEARCH_URL}${value}`);
    }
  };

  useEffect(() => {
    const [_, product] = location.search.split("=");
    product ? handleSearch(product) : null;
  }, []);

  return (
    <>
      <form onSubmit={search}>
        <Stack
          className="header-main"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <img
            className="logo-meli"
            alt={C.LOGO_ALT_ICO}
            src={logo}
            onClick={() => navigate("/")}
          />
          <TextField
            className="input-search"
            id="search"
            name="search"
            size="small"

            placeholder={C.SEARCH_PLACEHOLDER}
          />
          <Button type="submit" className="btn-search">
            <img
              src={searchIcon}
              alt={C.SEARCH_ALT_ICO}
            />
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default Header;