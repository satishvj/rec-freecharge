import React, { useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

import {
    Icon,
    IconButton,
    Grid,
    CardActions,
    Tooltip,
    Button
  } from '@material-ui/core';

  
const useStyles = makeStyles((theme) => ({
    media: {
      height: 200,
    }, 
    card:{
        height: 400,
        margin: '5%'
    }
  }));
export default function CardView(props) {
    const classes = useStyles();
    let history = useHistory()

    function buy(data) {
        console.log(data)
        history.push({
            pathname: '/pay',
            state: { amount: data.price }
          })
    }


    return (
        <div>
            <Card className={classes.card}>
              
                {props.data !== null && (
                    <>
                        <CardContent className='w-full' >
                            <div>
                                <div xs={12} sm={12} md={12} lg={12} className='relative flex flex-col'>
                                    {/* <div className='flex w-full justify-between'> */}
                                    <div className='flex justify-between'>
                                        <div className='flex ml-8 overflow-hidden'>
                                            <div className='overflow-hidden'>
                                                <Typography className='font-bold mb-8 mt-4 Text-ellipsis' gutterBottom>
                                                    {props.data.name}
                                                </Typography>
                                                {/* <CardMedia
        className={classes.media}
        image={props.data.image}
        title="Paella dish"
      /> */}
      <img src={props.data.image} className={classes.media}/>
                                                <Typography className='subText14 Text-ellipsis' gutterBottom>
                                                    {props.data && props.data.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CardActions>
                                <div className="lastOpened-lbl">
                                    <Button variant="contained" color="primary" onClick={() => { buy(props.data) }}>
                                        Buy {`$` + props.data.price}
                    </Button>
                                </div>
                            </CardActions>
                        </CardContent>

                    </>)}
</Card>
    </div>
    )
}