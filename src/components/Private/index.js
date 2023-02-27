import React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Button from '@mui/material/Button'
import './index.css'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import SecondCard from '../Card1/SecondCard'

const Private = () => {
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
            banner={pvtLabs[index].lab_type}
            lab_name={pvtLabs[index].lab_name}
            time={pvtLabs[index].listing_type}
            image={pvtLabs[index].lab_image}
            rating={pvtLabs[index].rating}
            address={pvtLabs[index].address1}
            lab_url={pvtLabs[index].lab_url}
          ></SecondCard>
        </div>
      ))}
    </div>
  )
}

export default Private
