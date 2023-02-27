import React from '@babel/traverse'
import SliderBottom from '../home/SliderBottom'
import LocationArea from '../locationArea/LocationArea'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import SecondCard1 from './SecondCard1'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const Cards = () => {
  return (
    <>
      <div>
        <LocationArea></LocationArea>
        <section>
          {/* 
        <div class="container" style={{ marginTop: '25px'}}> */}
          {/* <div class="row" style={{justifyContent:"center"}}> */}
          {/* <div className="col-lg-1"></div> */}
          {/* <div class="col-lg-4 col-md-4" > */}

          <Container>
            <Grid container style={{ justifyContent: 'center' }}>
              <Grid item lg={4} xs={12} id="card_one">
                <SecondCard
                  banner="Diagnostic"
                  Time="Monthly"
                  image="https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg"
                ></SecondCard>
              </Grid>

              <Grid item lg={4} xs={12} id="card_one">
                <SecondCard
                  banner="Quality Control"
                  Time="Weekly"
                  image="https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg"
                ></SecondCard>
              </Grid>

              <Grid item lg={4} xs={12} id="card_one">
                <SecondCard
                  banner="Pharmaceutical"
                  Time="Hourly"
                  image="https://img.freepik.com/free-vector/flat-laboratory-room-with-microscope_23-2148885022.jpg"
                ></SecondCard>
              </Grid>
            </Grid>
          </Container>

          <Container>
            <Grid container style={{ justifyContent: 'center' }}>
              <Grid item lg={4} xs={12} id="card_one2">
                <SecondCard
                  banner="Diagnostic"
                  Time="Monthly"
                  image="https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg"
                ></SecondCard>
              </Grid>

              <Grid item lg={4} xs={12} id="card_one2">
                <SecondCard
                  banner="Quality Control"
                  Time="Weekly"
                  image="https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg"
                ></SecondCard>
              </Grid>

              <Grid item lg={4} xs={12} id="card_one2">
                <SecondCard1
                  banner="Pharmaceutical"
                  Time="Hourly"
                  image="https://img.freepik.com/free-vector/flat-laboratory-room-with-microscope_23-2148885022.jpg"
                ></SecondCard1>
              </Grid>
            </Grid>
          </Container>

          {/* <SecondCard banner="Diagnostic" Time="Monthly" image="https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg" ></SecondCard> */}
          {/* </div> */}
          {/* <div class="col-lg-4 col-md-4"> */}
          {/* <SecondCard banner="Quality Control" Time="Weekly" image="https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg"></SecondCard> */}
          {/* </div> */}
          {/* <div class="col-lg-3.1 col-md-4"> */}
          {/* <SecondCard banner="Pharmaceutical" Time="Hourly" image="https://img.freepik.com/free-vector/flat-laboratory-room-with-microscope_23-2148885022.jpg"></SecondCard> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div class="container" style={{ marginBottom: '25px', float: 'center' }}>
          <div class="row">
            <div class="col-md-4" >
              <SecondCard banner="Diagnostic" Time="Monthly" image="https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg" ></SecondCard>
            </div>
            <div class="col-md-4">
              <SecondCard banner="Quality Control" Time="Weekly" image="https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg"></SecondCard>
            </div>
            <div class="col-md-4">
              <SecondCard1 banner="Pharmaceutical" Time="Hourly" image="https://img.freepik.com/free-vector/flat-laboratory-room-with-microscope_23-2148885022.jpg"></SecondCard1>
            </div>
          </div>
          <SliderBottom />
        </div> */}
          {/* <SecondCard banner = "Diagnostic" image = "https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg" ></SecondCard>
			<SecondCard banner = "Quality Control" image ="https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg"></SecondCard>
			<SecondCard banner = "Pharmaceuticals" image = "https://img.freepik.com/free-vector/flat-laboratory-room-with-microscope_23-2148885022.jpg"></SecondCard>
			<SecondCard banner = "Diagnostic" image = "https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg"></SecondCard>
			<SecondCard banner = "Quality Control" image ="https://cdn.clinicallabmanager.com/assets/articleNo/25946/aImg/48191/four-ways-lab-design-can-boost-productivity-m.jpg"></SecondCard>
			<SecondCard banner = "Pharmaceuticals" image = "https://img.freepik.com/free-vector/flat-laboratory-room-with-microscope_23-2148885022.jpg"></SecondCard> */}
        </section>
      </div>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div style={{ backgroundColor: 'white' }} className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    </>
  )
}

export default Cards
