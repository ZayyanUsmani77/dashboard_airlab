import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import './card.css'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Button from '@mui/material/Button'

const SecondCard = (props) => {
  console.log('props', props)

  return (
    <>
      <div>
        <Container>
          <Grid container className="Private_main">
            <Grid item lg={3.5} xs={12} className="private_img">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <h4>Visit Your Labs</h4>
              <p>{props.address}</p>

              <Grid container>
                <Grid item lg={1} style={{ marginLeft: '17px' }}>
                  <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
                </Grid>
                <Grid item lg={1}>
                  <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
                </Grid>
                <Grid item lg={1}>
                  <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
                </Grid>
                <Grid item lg={1}>
                  <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
                </Grid>
                <Grid item lg={1}>
                  <p
                    style={{
                      backgroundColor: 'green',
                      width: '30px',
                      color: 'white',
                      padding: '4px',
                      // height: '20px',
                      borderRadius: '5px',
                    }}
                  >
                    {props.rating}
                  </p>
                </Grid>
                <Grid item lg={3} xs={1.8}></Grid>
                <Grid item lg={1}>
                  <Button variant="contained" size="small" style={{ borderRadius: '5px' }}>
                    Book
                  </Button>
                </Grid>
                <Container>
                  <Grid container>
                    <Grid item lg={4} xs={4.5}>
                      <p>{props.type}</p>
                      <p style={{ marginTop: '-19px' }}>$2345</p>
                    </Grid>

                    <Grid item lg={4} xs={3.5}>
                      <p>Test</p>
                      <p style={{ marginTop: '-19px' }}>120</p>
                    </Grid>

                    <Grid item lg={4} xs={4}>
                      <p>Visit</p>
                      <p style={{ marginTop: '-19px', color: 'lightBlue' }}>{props.lab_url}</p>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default SecondCard
