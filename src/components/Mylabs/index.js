import React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Button from '@mui/material/Button'
import './index.css'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import SecondCard from '../Card1/SecondCard'

const MyLabs = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }


  const [pvtLabs, setPvtLabs] = useState([])

  const pvtLabsList = []

  const getLabs = () => {
    axios
      .get('http://3.139.66.50:8000/api/lab/')
      .then((response) => {
        // console.log('Arhi hai lab')
        const data = response.data
        // console.log(`GET users`, data)

        for (let i = 0; i < data.length; i++) {
          if (data[i].lab_visibility == 'Private') {
            console.log('Ye private lab', data[i])
            const parsedPvtLabs = {
              id: data[i].id,
              lab_name: data[i].lab_name,
              lab_type: data[i].lab_type,
              rating: data[i].rating,
              lab_url: data[i].lab_url,
              lab_image: data[i].lab_image,
              address1: data[i].address1,
            }

            pvtLabsList.push(parsedPvtLabs)
          }
        }
        setPvtLabs(pvtLabsList)

        //  console.log("certification: ",labs[0].certification);
        //  console.log("lab_description: ",labs[0].lab_description);
        //  console.log("otherservice: ",labs[0].otherservice);
        //  console.log("Rating: ", labs[0].rating);
      })
      .catch((error) => console.error('Nhi arhi lab', error))
  }

  getLabs()

  return (

    <div>
    {pvtLabs.map((p, index) => (
      <div key={index}>
        <SecondCard
          id={pvtLabs[index].id}
          time={pvtLabs[index].lab_type}
          lab_name={pvtLabs[index].lab_name}
          // time="Weekly"
          image={pvtLabs[index].lab_image}
          rating={pvtLabs[index].rating}
          address={pvtLabs[index].address1}
          lab_url={pvtLabs[index].lab_url}
        ></SecondCard>
      </div>
    ))}
  </div>



    // <div>
    //   <Container style={{ marginTop: '30px' }}>
    //     <h2 style={{ color: 'black', marginBottom: '20px' }}>My Labs</h2>
       
    //     <Grid container>
    //       <Grid item lg={12} className="mylab_main">
    //         <Grid container>
    //           <Grid item lg={4} md={4} xs={12} className="mylab_img">
    //             <img src="https://balabs.com/wp-content/uploads/2019/01/lab-testing.jpg" alt="" />
    //           </Grid>

    //           <Grid item lg={0.3} md={0.3} xs={0.2}></Grid>

    //           <Grid item lg={3} md={5.3} xs={9.1} className="mylab_text">
    //             <h4>Visit Your Labs</h4>
    //             <p>Address</p>
    //             <Grid container style={{ marginTop: '-7%' }}>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.6}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={2} xs={2}>
    //                 <p
    //                   style={{
    //                     backgroundColor: 'green',
    //                     width: '30px',
    //                     color: 'white',
    //                     padding: '4px',
    //                     borderRadius: '5px',
    //                   }}
    //                 >
    //                   4.0
    //                 </p>
    //               </Grid>
    //               <Grid item lg={1}></Grid>
    //             </Grid>
    //             <Grid
    //               container
    //               style={{ marginTop: '-2%', justifyContent: 'center', gap: '20px' }}
    //               id="lab_month"
    //             >
    //               <Grid item lg={3}>
    //                 <p style={{ color: 'black' }}>
    //                   Monthly <br></br>$2250
    //                 </p>
    //               </Grid>
    //               <Grid item lg={3}>
    //                 <p style={{ color: 'black' }}>
    //                   Test <br></br> 1200
    //                 </p>
    //               </Grid>
    //               <Grid item lg={3}>
    //                 <p style={{ color: 'black' }}>
    //                   Visit <br></br>
    //                   <p style={{ color: 'lightblue' }}>https://</p>
    //                 </p>
    //               </Grid>
    //             </Grid>
    //           </Grid>

    //           <Grid item lg={3.5} md={1.5}></Grid>

    //           <Grid item lg={0.5}>
    //             <Button
    //               id="basic-button"
    //               aria-controls={open ? 'basic-menu' : undefined}
    //               aria-haspopup="true"
    //               aria-expanded={open ? 'true' : undefined}
    //               onClick={handleClick}
    //             >
    //               <MoreVertIcon style={{ marginTop: '10px', color: 'gray' }} />
    //             </Button>
    //             <Menu
    //               id="basic-menu"
    //               anchorEl={anchorEl}
    //               open={open}
    //               onClose={handleClose}
    //               MenuListProps={{
    //                 'aria-labelledby': 'basic-button',
    //               }}
    //             >
    //               <MenuItem onClick={handleClose} style={{ fontSize: '12px', margin: '-5px' }}>
    //                 Public
    //               </MenuItem>
    //             </Menu>
    //             <p style={{ marginTop: '60px', marginLeft: '-42px' }} className="date">
    //               12:2:2023
    //             </p>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>

    //     <Grid container>
    //       <Grid item lg={12} className="mylab_main">
    //         <Grid container>
    //           <Grid item lg={4} md={4} xs={12} className="mylab_img">
    //             <img src="https://balabs.com/wp-content/uploads/2019/01/lab-testing.jpg" alt="" />
    //           </Grid>

    //           <Grid item lg={0.3} md={0.3} xs={0.2}></Grid>

    //           <Grid item lg={3} md={5.3} xs={9.1} className="mylab_text">
    //             <h4>Visit Your Labs</h4>
    //             <p>Address</p>
    //             <Grid container style={{ marginTop: '-7%' }}>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.6}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={2} xs={2}>
    //                 <p
    //                   style={{
    //                     backgroundColor: 'green',
    //                     width: '30px',
    //                     color: 'white',
    //                     padding: '4px',
    //                     borderRadius: '5px',
    //                   }}
    //                 >
    //                   4.0
    //                 </p>
    //               </Grid>
    //               <Grid item lg={1}></Grid>
    //             </Grid>
    //             <Grid
    //               container
    //               style={{ marginTop: '-2%', justifyContent: 'center', gap: '20px' }}
    //               id="lab_month"
    //             >
    //               <Grid item lg={3}>
    //                 <p style={{ color: 'black' }}>
    //                   Monthly <br></br>$2250
    //                 </p>
    //               </Grid>
    //               <Grid item lg={3}>
    //                 <p style={{ color: 'black' }}>
    //                   Test <br></br> 1200
    //                 </p>
    //               </Grid>
    //               <Grid item lg={3}>
    //                 <p style={{ color: 'black' }}>
    //                   Visit <br></br>
    //                   <p style={{ color: 'lightblue' }}>https://</p>
    //                 </p>
    //               </Grid>
    //             </Grid>
    //           </Grid>

    //           <Grid item lg={3.5} md={1.5}></Grid>

    //           <Grid item lg={0.5}>
    //             <Button
    //               id="basic-button"
    //               aria-controls={open ? 'basic-menu' : undefined}
    //               aria-haspopup="true"
    //               aria-expanded={open ? 'true' : undefined}
    //               onClick={handleClick}
    //             >
    //               <MoreVertIcon style={{ marginTop: '10px', color: 'gray' }} />
    //             </Button>
    //             <Menu
    //               id="basic-menu"
    //               anchorEl={anchorEl}
    //               open={open}
    //               onClose={handleClose}
    //               MenuListProps={{
    //                 'aria-labelledby': 'basic-button',
    //               }}
    //             >
    //               <MenuItem onClick={handleClose} style={{ fontSize: '12px', margin: '-5px' }}>
    //                 Public
    //               </MenuItem>
    //             </Menu>
    //             <p style={{ marginTop: '60px', marginLeft: '-42px' }} className="date">
    //               12:2:2023
    //             </p>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>

    //     <Grid container>
    //       <Grid item lg={12} className="mylab_main">
    //         <Grid container>
    //           <Grid item lg={4} md={4} xs={12} className="mylab_img">
    //             <img src="https://balabs.com/wp-content/uploads/2019/01/lab-testing.jpg" alt="" />
    //           </Grid>

    //           <Grid item lg={0.3} md={0.3} xs={0.2}></Grid>

    //           <Grid item lg={3} md={5.3} xs={9.1} className="mylab_text">
    //             <h4>Visit Your Labs</h4>
    //             <p>Address</p>
    //             <Grid container style={{ marginTop: '-7%' }}>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.4}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={1.6}>
    //                 <StarBorderIcon style={{ color: 'rgb(255,193,7)' }} />
    //               </Grid>
    //               <Grid item lg={2} xs={2}>
    //                 <p
    //                   style={{
    //                     backgroundColor: 'green',
    //                     width: '30px',
    //                     color: 'white',
    //                     padding: '4px',
    //                     borderRadius: '5px',
    //                   }}
    //                 >
    //                   4.0
    //                 </p>
    //               </Grid>
    //               <Grid item lg={1}></Grid>
    //             </Grid>
    //             <Grid
    //               container
    //               style={{ marginTop: '-2%', justifyContent: 'center', gap: '20px' }}
    //               id="lab_month"
    //             >
    //               <Grid item lg={3}>
    //                 <p style={{ color: 'black' }}>
    //                   Monthly <br></br>$2250
    //                 </p>
    //               </Grid>
    //               <Grid item lg={3}>
    //                 <p style={{ color: 'black' }}>
    //                   Test <br></br> 1200
    //                 </p>
    //               </Grid>
    //               <Grid item lg={3}>
    //                 <p style={{ color: 'black' }}>
    //                   Visit <br></br>
    //                   <p style={{ color: 'lightblue' }}>https://</p>
    //                 </p>
    //               </Grid>
    //             </Grid>
    //           </Grid>

    //           <Grid item lg={3.5} md={1.5}></Grid>

    //           <Grid item lg={0.5}>
    //             <Button
    //               id="basic-button"
    //               aria-controls={open ? 'basic-menu' : undefined}
    //               aria-haspopup="true"
    //               aria-expanded={open ? 'true' : undefined}
    //               onClick={handleClick}
    //             >
    //               <MoreVertIcon style={{ marginTop: '10px', color: 'gray' }} />
    //             </Button>
    //             <Menu
    //               id="basic-menu"
    //               anchorEl={anchorEl}
    //               open={open}
    //               onClose={handleClose}
    //               MenuListProps={{
    //                 'aria-labelledby': 'basic-button',
    //               }}
    //             >
    //               <MenuItem onClick={handleClose} style={{ fontSize: '12px', margin: '-5px' }}>
    //                 Public
    //               </MenuItem>
    //             </Menu>
    //             <p style={{ marginTop: '60px', marginLeft: '-42px' }} className="date">
    //               12:2:2023
    //             </p>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>

    //   </Container>
    // </div>
  )
}

export default MyLabs
