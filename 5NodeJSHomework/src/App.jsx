import { Button, Card, CardActionArea, CardContent, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function App() {

  const [data, setData] = useState([])
  const [remove, setRemove] = useState([])
  const [change, setChange] = useState([])

  useEffect(() => {
    fetch("http://192.168.1.70:8080/books")
      .then((res) => res.json())
      .then((data) => setData(data))
    // .then((data) => console.log(data))
  }, [])

  const handleDelete = (id) => {
    fetch(`http://192.168.1.70:8080/books/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((remove) => setRemove(remove))
    // booksData()
    // .then((data) => console.log(data))
    // alert(id)
  }

  return (
    <>
      <section>
        <div className='container mx-auto px-4'>
          <div className='card-header'>
            <h1 className='text-[20px]'>Card Component</h1>
          </div>
          <div className='card-body mt-8'>
            <Grid container spacing={2}>
              {data.map(item => (
                <Grid container key={item.id} size={{ xs: 6, sm: 6, md: 4 }}>
                  <Card sx={{ width: 300 }}>
                    <CardActionArea>
                      <img className='h-[200px]' alt='book' />
                      <CardContent>
                        <Typography sx={{ display: "block", fontSize: "25px", paddingBottom: "15px" }} variant='h3' component={"h3"}>
                          {item.title}
                        </Typography>
                        <Typography variant='body2'>
                          {item.author}
                        </Typography>
                        {item.inStock ? <Typography sx={{ display: "inline-block", borderRadius: "9999px", padding: "4px", backgroundColor: "green", color: "white" }} variant='body2'>In Stock</Typography> : <Typography sx={{ display: "inline-block", borderRadius: "9999px", padding: "4px", backgroundColor: "red", color: "white" }} variant='body2'>Out of Stock</Typography>
                        }
                        <Stack direction="row" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "10px" }}>
                          <Typography sx={{ textAlign: 'right' }} variant='body2'>
                            {item.price} AZN
                          </Typography>
                          <Button disabled={!item.inStock} variant='contained'>
                            Buy
                          </Button>
                        </Stack>
                        <Button type='button' onClick={() => handleDelete(item.id)}>Delete</Button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </section>
    </>
  )
}
