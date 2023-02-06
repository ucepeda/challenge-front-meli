import React, { useEffect, useReducer } from "react";
import { Search } from "../controllers/products.js";
import { useParams } from "react-router-dom";

import Loading from "../Components/Loading";
import Breadcrumb from "../Components/Breadcrumb";
import Head from "../Components/Head";

import ProductView from "../Views/Product";
import { FETCH_SUCCESS, FETCH_ERROR } from "../reducers/actions/common";
import { productReducer, initialState } from "../reducers/product";
import { Container } from '@mui/material/'


const Product = () => {
  const { id } = useParams();
  const [{ product, loading }, dispatch] = useReducer(
    productReducer,
    initialState
  );
  const getProduct = async (id) => {
    try {
      const search = new Search();
      const data = await search.product(id);
      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (e) {
      console.error(e);
      dispatch({ type: FETCH_ERROR, payload: {} });
    }
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  const RenderProduct = () => {
    return (
      <>
        <Head title={product.title} description={product.description} />
        <Container>
        <Breadcrumb categories={product.categories} />
        <ProductView product={product} />
        </Container>
        
      </>
    );
  };

  return (
    <>
      {!!product && !loading ? <RenderProduct /> : <Loading />}
    </>
  );
};

export default Product;