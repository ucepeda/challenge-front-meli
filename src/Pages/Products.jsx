import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";

/* Service Controller */
import { Search } from "./../services/controllers/products.js";

/* components */
import Breadcrumb from "../Components/Breadcrumb";
import Message from "../Components/Message";
import Head from "../Components/Head";

/* View */
import ProductsView from "../Views/Products";

/* Reducer products  */
import { productsReducer, initialState } from "../reducers/products";
import {
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCHING,
} from "../reducers/actions/common";

import { Container } from '@mui/material/'


const Products = React.memo(({ searchItem }) => {

  const [{ products, error, categories, loading }, dispatch] = useReducer(
    productsReducer,
    initialState
  );

  const fetchData = async () => {
    try {
      dispatch({ type: FETCHING });
      const search = new Search();
      const { items, categories } = await search.products(searchItem);
      dispatch({ type: FETCH_SUCCESS, payload: { items, categories } });
    } catch (e) {
      dispatch({ type: FETCH_ERROR });
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchItem]);

  const title = searchItem ? searchItem : "Buscando productos";

  const RenderProducts = () => {
    return (
      <>
        <Head title={title} description={"Encontrá todo lo que buscas"} />
        <Container>
          <Breadcrumb categories={categories} />
          <section>
            {products.map((props) => (
              <ProductsView key={props.id} {...props} />
            ))}
          </section>
        </Container>
      </>
    );
  };

  return (
    <>
      {!!products.length && !loading ? <RenderProducts /> : null}
      {error ? (
        <Message message={"Ocurrió un error, intente de nuevo"} />
      ) : null}
    </>
  );
});

Products.propTypes = {
  searchItem: PropTypes.string,
};
export default Products;