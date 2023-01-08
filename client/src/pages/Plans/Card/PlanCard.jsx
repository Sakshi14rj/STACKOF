import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router";


export default function PlanCard(props) {
  const navigate = useNavigate()

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.noOfQuestions} {props.isBuyable ?'Questions':'Question'}/day
        </Typography>
        <Typography variant="h5" component="div">
        {props.plan}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.price} Rupees Only
        </Typography>
        <Typography variant="body2">
          {/* well meaning and kindly.
          <br />
          {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        {
          !props.isBuyable
            ?
          <Button size="small" onClick={()=>navigate('/Payment?Silver')}>Applied</Button>
          : 
          <Button size="small" onClick={()=>navigate(`/Payment?${props.plan}`)}>Buy Now</Button>

          // <StripeCheckout
          //   stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
          //   label='Buy Now'
          //   name='pay with cc'
          //   billingAddress
          //   shippingAddress
          //   amount={parseInt(props.price)}
          //   description={`Your total is ${props.price}`}
          //   token={props.pay}
          // />
        }
      </CardActions>
    </Card>
  );
}