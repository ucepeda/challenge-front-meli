import PropTypes from "prop-types";
import * as C from "./../utils/constants.js";
import { Breadcrumbs, Link, Stack } from '@mui/material/';


const populateCategories = (categories) => {
  return categories.map((category, i) => (
    <Link key={i} underline="hover" color="inherit" href={C.SEARCH_URL+category}>
      {category}
    </Link>
  ));
};


const Breadcrumb = ({ categories }) => {
  return (
    <Stack className="mt-16 mb-16">
        <Breadcrumbs
          separator=">"
          aria-label="breadcrumb"
        >
          {populateCategories(categories)}
        </Breadcrumbs>           
    </Stack>
  );
};

Breadcrumb.propTypes = {
  categories: PropTypes.array,
};

export default Breadcrumb;