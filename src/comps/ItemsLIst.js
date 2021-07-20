import React from "react";
import Item from "./Item";
import { useGlobalContext } from "../context/context";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginTop: "100px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
  },
});

const ItemsLIst = () => {
  const classes = useStyles();
  const { cart, total } = useGlobalContext();

  return (
    <section className={classes.container}>
      <Container>
        <Grid container className={classes.box}>
          {cart.map((item) => {
            return <Item key={item.id} {...item} />;
          })}
        </Grid>
        <div className="items__total-box">
          <Typography>Total: {total}$</Typography>
        </div>
      </Container>
    </section>
  );
};

export default ItemsLIst;
