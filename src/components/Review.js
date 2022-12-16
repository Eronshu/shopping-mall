import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { getAllCartItems, getCartMock } from "../api/shoppingCartApi";
import { useEffect, useState } from "react";

export default function Review({ cart }) {
  const [products, setProducts] = useState(cart);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (cart.length > 0) {
      let sum = 0;
      cart.forEach(({ price, quantity }) => {
        sum += price*quantity;
      });
      setTotalPrice(sum);
    }
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{Math.round(100*product.price*product.quantity)/100}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${totalPrice}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
