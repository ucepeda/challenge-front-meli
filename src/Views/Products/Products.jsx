import { formatAsCurrency } from "./../../utils/helpers";
import { Link } from "react-router-dom";
import shippingIcon from "../../assets/ic_shipping.png";
import { Card, CardMedia, Typography, Grid, Container, Divider } from '@mui/material/'


const ProductsView = ({
  id,
  title,
  price,
  free_shipping,
  address,
  picture,
}) => {
  return (
    <>
      <Container>
        <Card sx={{ display: 'flex', width: '100%' }}>
          <Link to={`/items/${id}`}>
            <CardMedia
              className="img-thumbnail"
              image={picture}
              title={title}
            />
          </Link>
          <Grid container direction='row'>
            <Grid item xs={7} className="mt-16 ml-16 mb-16">
              <Typography variant="h5" className="font-24">
                ${formatAsCurrency(price.amount)}{" "}
                {free_shipping ? (
                  <img
                    src={shippingIcon}
                    alt="free shipping" />
                ) : null}
              </Typography>
              <Typography variant="body1" className="font-18" component="div" sx={{ marginTop: 3 }}>
                {title}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" className="font-12 ml-32" color="text.secondary" sx={{ marginTop: 3 }}>
                {address}
              </Typography>
            </Grid>
            
          </Grid>
          <Divider variant="middle" />
        </Card>
        
      </Container>
    </>

  );
};

export default ProductsView;