import React from "react";
import { formatAsCurrency } from "../../utils/helpers.js";
import { Button, Typography, Grid, Container } from '@mui/material/'

const ProductView = ({ product }) => {
  return (
    <Container className="mb-32 bg-white">
      <Grid container>
        <Grid container direction="column" sx={{maxHeight: 1000}}>
          <Grid item xs={8}>
            <img className="img-det mt-16" src={product.picture} alt={product.title} />
          </Grid>
          <Grid item xs={4}>
            <Typography className="mt-32 font-14" alignContent="right">
              {product.condition === "new" ? "Nuevo" : "Usado"} -{" "}
              {product.sold_quantity} Vendidos
            </Typography>
            <Typography variant="h4" className="mt-16 font-24 overflow-wrap">{product.title}</Typography>
            <Typography variant="h3" className="mt-32 font-46">
              $ {formatAsCurrency(product.price.amount)}
            </Typography>
            <Button fullWidth variant="contained" className="mt-32 mr-32 purchase-btn">
              Comprar
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h4" className="ml-32 mb-32 font-28">Descripción del producto</Typography>
        <Typography className="ml-32 mb-32 font-16">{product.description}</Typography>
      </Grid>
    </Container>
  );
};

export default ProductView;