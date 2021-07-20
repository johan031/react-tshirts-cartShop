import React from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { useGlobalContext } from "../context/context";
import { Grid, Button, Typography } from "@material-ui/core";

const Item = ({ id, title, img, amount, price }) => {
  const { remove, increase, decrease } = useGlobalContext();

  return (
    <Grid>
      <img src={img} alt={title} className="item__img" />
      <div>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {price}$
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => remove(id)}
        >
          remove
        </Button>
      </div>
      <div className="item__amount-box">
        <BiUpArrow onClick={() => increase(id)} />
        <span className="item__amount">{amount}</span>
        <BiDownArrow onClick={() => decrease(id)} />
      </div>
    </Grid>
  );
};

export default Item;
