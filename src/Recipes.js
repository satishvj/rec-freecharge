import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CardView from './CardView'

export default function Recipes(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("http://starlord.hackerearth.com/recipe")
        .then(res => res.json())
        .then(
          (result) => {
            setData(result)
          },
          (error) => {
          console.log(error)    
          setIsLoaded(true);
          setError(error);
          }
        )
       
      }, [])

      useEffect(()=>{
          if (data && data.length > 0) {
              setIsLoaded(true);
              setItems(data)
            }
      },[data])
   

      
 

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else{
      
        return (
              <Grid container>
                {console.log(items)}
            {items && items.map(item => (

                <Grid item xs={12} sm={6} md={4} lg={4}>
                <CardView data={item} key={item.id}/>
            </Grid>
            ))}
        </Grid>
         );
        }
    }