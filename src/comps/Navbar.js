import React from "react";
import { IoMdCart } from "react-icons/io";
import { useGlobalContext } from "../context/context";
import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: { flexGrow: 1 },
});

const Navbar = () => {
  const classes = useStyles();

  const { amount } = useGlobalContext();

  return (
    <AppBar gutterBottom>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Dev T-Shirts
        </Typography>
        <div className="nav__cart-box">
          <IoMdCart />
          {amount}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
