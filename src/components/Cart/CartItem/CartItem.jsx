import React from 'react'
import { Typography, Button } from '@material-ui/core'
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart  }) => {
  const classes = useStyles();


  return (
    <div>
      <Typography variant="h5">{item.name}</Typography>
      <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>

      <div>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>➖</Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>➕</Button>
        </div>
        <Button variant="contained" type="button" color="secondary"  onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
      </div>
    </div>
  )
}

export default CartItem
