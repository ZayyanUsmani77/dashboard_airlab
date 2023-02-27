import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import WorldMap from 'react-world-map'
import orders from '../../components/orders/Orders'
import './index.css'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine, CChartPie } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

const Dashboard = () => {
  const contractsRef = useRef(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // const handleContracts = () => {
  //   contractsRef.scrollIntoView({ behaviour: 'smooth' })
  // }
  const [selected, onSelect] = useState(null)
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  // const progressExample = [
  //   { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
  //   { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
  //   { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
  //   { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
  //   { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  // ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    // { title: 'Male', icon: cilUser, value: 53 },
    // { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    // { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    // { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    // { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    // { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  

  const [bookedLabs, setBookedLabs] = useState([])
  const [numInProgress, setNumInProgress] = useState(0)
  const [numOnPendng, setNumOnPendng] = useState(0)
  const [numCancelled, setNumCancelled] = useState(0)
  const [numCompleted, setNumCompleted] = useState(0)

  const bookings = []

  const getLabs = () => {
    axios
      .get('http://3.139.66.50:8000/api/booklab/')
      .then((response) => {
        // console.log('Arhi hai lab')
        const data = response.data
        // console.log(`GET users`, data)

        var numInProgressW = 0;
        var numOnPendngW = 0;
        var numCancelledW = 0;
        var numCompletedW = 0;

        for (let i = 0; i < data.length; i++) {
          console.log('Ye private lab', data[i])


          if (data[i].status === 'Progressing') {
            numInProgressW++;
            setNumInProgress(numInProgressW)
          }
          if (data[i].status === 'Pending') {
            numOnPendngW++;
            setNumOnPendng(numOnPendngW)
          }
          if (data[i].status === 'Cancelled') {
            numCancelledW++;
            setNumCancelled(numCancelledW)
          }
          if (data[i].status === 'Delivered') {
            numCompletedW++;
            setNumCompleted(numCompletedW)
          }
          const parsedBookings = {
            id: data[i].id,
            lab_name: data[i].lab_name,
            lab_type: data[i].lab_type,
            rating: data[i].rating,
            lab_url: data[i].lab_url,
            lab_image: data[i].lab_image,
            address1: data[i].address1,
          }

          bookings.push(parsedBookings)
        }
        setBookedLabs(bookings)
      })
      .catch((error) => console.error('Nhi arhi lab', error))
  }

  // uncomment this function
  // getLabs()


  const [selectedCountry, setSelectedCountry] = useState("Australia")
  const [NoOfSelectedCountry, setNoOfSelectedCountry] = useState(0)
  
  const selectCountry = () => {
    let countryFromElement = document.getElementById("labsInSelectedCountry").value; 
    let numOfCountry = 0;
    axios
      .get("http://3.139.66.50:8000/api/lab/")
      .then((response) => {
        console.log("Arhi hai lab");
        const labs = response.data;
        console.log(`GET users`, labs);
        for (let i = 0; i < labs.length; i++) {
          if(labs[i].country === countryFromElement){
            numOfCountry++;
            setNoOfSelectedCountry(numOfCountry)
          }
        }

      })
      .catch((error) => console.error("Nhi arhi lab", error));
  };


























  return (
    <>
      <div style={{ backgroundColor: 'white' }}></div>
      {/* <WidgetsDropdown title="test" /> */}

      <CRow style={{ backgroundColor: 'white' }} id="labs">
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol xs={12} md={5} xl={7}>
                  <CTableBody>
                    <h2 style={{ color: 'black', padding: '90px', marginTop: '-22px' }}>
                      <b>Labs Availability</b>
                      <p style={{ fontSize: '17px', paddingTop: '12px' }}>Labs In: {selectedCountry}</p>
                      <p style={{ fontSize: '17px', paddingTop: '12px' }}>No of labs:{NoOfSelectedCountry}</p>
                    </h2>
                  </CTableBody>
                </CCol>
                <CCol
                  xs={12}
                  md={5}
                  xl={5}
                  // style={{ paddingTop: '13%' }}
                >
                  <CTableBody>
                    <CTableRow v-for="item in tableItems">
                      {/* <CTableDataCell className="text-center">
                        <WorldMap selected={selected} onSelect={onSelect} />
                      </CTableDataCell> */}
                    </CTableRow>

                    <select
                      name="labsInSelectedCountry"
                      id="labsInSelectedCountry"
                      defaultValue="Australia"
                      value="Australia"
                      onChange={selectCountry}
                      style={{
                        width: '200%',
                        fontSize: '20px',
                        outline: 'none',
                        border: '1px solid gray',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        paddingRight: '-5px',
                      }}
                      className="select_box"
                    >
                       <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Åland Islands">Åland Islands</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American Samoa">American Samoa</option>
                                                    <option value="Andorra">Andorra</option>
                                                    <option value="Angola">Angola</option>
                                                    <option value="Anguilla">Anguilla</option>
                                                    <option value="Antarctica">Antarctica</option>
                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                    <option value="Argentina">Argentina</option>
                                                    <option value="Armenia">Armenia</option>
                                                    <option value="Aruba">Aruba</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Austria">Austria</option>
                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                    <option value="Bahamas">Bahamas</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Barbados">Barbados</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Belize">Belize</option>
                                                    <option value="Benin">Benin</option>
                                                    <option value="Bermuda">Bermuda</option>
                                                    <option value="Bhutan">Bhutan</option>
                                                    <option value="Bolivia">Bolivia</option>
                                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                    <option value="Botswana">Botswana</option>
                                                    <option value="Bouvet Island">Bouvet Island</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                    <option value="Bulgaria">Bulgaria</option>
                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                    <option value="Burundi">Burundi</option>
                                                    <option value="Cambodia">Cambodia</option>
                                                    <option value="Cameroon">Cameroon</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Cape Verde">Cape Verde</option>
                                                    <option value="Cayman Islands">Cayman Islands</option>
                                                    <option value="Central African Republic">Central African Republic</option>
                                                    <option value="Chad">Chad</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="China">China</option>
                                                    <option value="Christmas Island">Christmas Island</option>
                                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                    <option value="Colombia">Colombia</option>
                                                    <option value="Comoros">Comoros</option>
                                                    <option value="Congo">Congo</option>
                                                    <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                                    <option value="Cook Islands">Cook Islands</option>
                                                    <option value="Costa Rica">Costa Rica</option>
                                                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                    <option value="Croatia">Croatia</option>
                                                    <option value="Cuba">Cuba</option>
                                                    <option value="Cyprus">Cyprus</option>
                                                    <option value="Czech Republic">Czech Republic</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Djibouti">Djibouti</option>
                                                    <option value="Dominica">Dominica</option>
                                                    <option value="Dominican Republic">Dominican Republic</option>
                                                    <option value="Ecuador">Ecuador</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="El Salvador">El Salvador</option>
                                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                    <option value="Eritrea">Eritrea</option>
                                                    <option value="Estonia">Estonia</option>
                                                    <option value="Ethiopia">Ethiopia</option>
                                                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                                    <option value="Faroe Islands">Faroe Islands</option>
                                                    <option value="Fiji">Fiji</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="France">France</option>
                                                    <option value="French Guiana">French Guiana</option>
                                                    <option value="French Polynesia">French Polynesia</option>
                                                    <option value="French Southern Territories">French Southern Territories</option>
                                                    <option value="Gabon">Gabon</option>
                                                    <option value="Gambia">Gambia</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Ghana">Ghana</option>
                                                    <option value="Gibraltar">Gibraltar</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="Greenland">Greenland</option>
                                                    <option value="Grenada">Grenada</option>
                                                    <option value="Guadeloupe">Guadeloupe</option>
                                                    <option value="Guam">Guam</option>
                                                    <option value="Guatemala">Guatemala</option>
                                                    <option value="Guernsey">Guernsey</option>
                                                    <option value="Guinea">Guinea</option>
                                                    <option value="Guinea-bissau">Guinea-bissau</option>
                                                    <option value="Guyana">Guyana</option>
                                                    <option value="Haiti">Haiti</option>
                                                    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                                    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                                    <option value="Honduras">Honduras</option>
                                                    <option value="Hong Kong">Hong Kong</option>
                                                    <option value="Hungary">Hungary</option>
                                                    <option value="Iceland">Iceland</option>
                                                    <option value="India">India</option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                                    <option value="Iraq">Iraq</option>
                                                    <option value="Ireland">Ireland</option>
                                                    <option value="Isle of Man">Isle of Man</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Jamaica">Jamaica</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Jersey">Jersey</option>
                                                    <option value="Jordan">Jordan</option>
                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                    <option value="Kenya">Kenya</option>
                                                    <option value="Kiribati">Kiribati</option>
                                                    <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                                    <option value="Korea, Republic of">Korea, Republic of</option>
                                                    <option value="Kuwait">Kuwait</option>
                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                                    <option value="Latvia">Latvia</option>
                                                    <option value="Lebanon">Lebanon</option>
                                                    <option value="Lesotho">Lesotho</option>
                                                    <option value="Liberia">Liberia</option>
                                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                    <option value="Liechtenstein">Liechtenstein</option>
                                                    <option value="Lithuania">Lithuania</option>
                                                    <option value="Luxembourg">Luxembourg</option>
                                                    <option value="Macao">Macao</option>
                                                    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                                    <option value="Madagascar">Madagascar</option>
                                                    <option value="Malawi">Malawi</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Maldives">Maldives</option>
                                                    <option value="Mali">Mali</option>
                                                    <option value="Malta">Malta</option>
                                                    <option value="Marshall Islands">Marshall Islands</option>
                                                    <option value="Martinique">Martinique</option>
                                                    <option value="Mauritania">Mauritania</option>
                                                    <option value="Mauritius">Mauritius</option>
                                                    <option value="Mayotte">Mayotte</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                                                    <option value="Monaco">Monaco</option>
                                                    <option value="Mongolia">Mongolia</option>
                                                    <option value="Montenegro">Montenegro</option>
                                                    <option value="Montserrat">Montserrat</option>
                                                    <option value="Morocco">Morocco</option>
                                                    <option value="Mozambique">Mozambique</option>
                                                    <option value="Myanmar">Myanmar</option>
                                                    <option value="Namibia">Namibia</option>
                                                    <option value="Nauru">Nauru</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Netherlands">Netherlands</option>
                                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                    <option value="New Caledonia">New Caledonia</option>
                                                    <option value="New Zealand">New Zealand</option>
                                                    <option value="Nicaragua">Nicaragua</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    <option value="Niue">Niue</option>
                                                    <option value="Norfolk Island">Norfolk Island</option>
                                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                    <option value="Norway">Norway</option>
                                                    <option value="Oman">Oman</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Palau">Palau</option>
                                                    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                                    <option value="Panama">Panama</option>
                                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                                    <option value="Paraguay">Paraguay</option>
                                                    <option value="Peru">Peru</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Pitcairn">Pitcairn</option>
                                                    <option value="Poland">Poland</option>
                                                    <option value="Portugal">Portugal</option>
                                                    <option value="Puerto Rico">Puerto Rico</option>
                                                    <option value="Qatar">Qatar</option>
                                                    <option value="Reunion">Reunion</option>
                                                    <option value="Romania">Romania</option>
                                                    <option value="Russian Federation">Russian Federation</option>
                                                    <option value="Rwanda">Rwanda</option>
                                                    <option value="Saint Helena">Saint Helena</option>
                                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                    <option value="Saint Lucia">Saint Lucia</option>
                                                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                    <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                                    <option value="Samoa">Samoa</option>
                                                    <option value="San Marino">San Marino</option>
                                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                                    <option value="Senegal">Senegal</option>
                                                    <option value="Serbia">Serbia</option>
                                                    <option value="Seychelles">Seychelles</option>
                                                    <option value="Sierra Leone">Sierra Leone</option>
                                                    <option value="Singapore">Singapore</option>
                                                    <option value="Slovakia">Slovakia</option>
                                                    <option value="Slovenia">Slovenia</option>
                                                    <option value="Solomon Islands">Solomon Islands</option>
                                                    <option value="Somalia">Somalia</option>
                                                    <option value="South Africa">South Africa</option>
                                                    <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                                    <option value="Spain">Spain</option>
                                                    <option value="Sri Lanka">Sri Lanka</option>
                                                    <option value="Sudan">Sudan</option>
                                                    <option value="Suriname">Suriname</option>
                                                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                    <option value="Swaziland">Swaziland</option>
                                                    <option value="Sweden">Sweden</option>
                                                    <option value="Switzerland">Switzerland</option>
                                                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                    <option value="Taiwan">Taiwan</option>
                                                    <option value="Tajikistan">Tajikistan</option>
                                                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Timor-leste">Timor-leste</option>
                                                    <option value="Togo">Togo</option>
                                                    <option value="Tokelau">Tokelau</option>
                                                    <option value="Tonga">Tonga</option>
                                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                    <option value="Tunisia">Tunisia</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Turkmenistan">Turkmenistan</option>
                                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                    <option value="Tuvalu">Tuvalu</option>
                                                    <option value="Uganda">Uganda</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="United States">United States</option>
                                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                    <option value="Uruguay">Uruguay</option>
                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                    <option value="Vanuatu">Vanuatu</option>
                                                    <option value="Venezuela">Venezuela</option>
                                                    <option value="Viet Nam">Viet Nam</option>
                                                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                                                    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                    <option value="Western Sahara">Western Sahara</option>
                                                    <option value="Yemen">Yemen</option>
                                                    <option value="Zambia">Zambia</option>
                                                    <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </CTableBody>
                </CCol>
                <CCol xs={12} md={7} xl={6} sm={12}>
                  <CCardHeader></CCardHeader>
                </CCol>
                <CCardFooter></CCardFooter>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

     

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader style={{ color: 'black' }}>My Projects</CCardHeader>
            <CCardBody>
              <div style={{ color: 'black' }}>
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
                  integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q=="
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
                  integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="
                  crossOrigin="anonymous"
                />
                <div id="project" className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <h5 className="card-title">
                          My Project <span className="  fw-normal ms-2">(834)</span>
                        </h5>
                      </div>
                    </div>

                    {/* <div className="col-md-6">
                      <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                        <div>
                          <ul className="nav nav-pills">
                            <li className="nav-item">
                              <a
                                aria-current="page"
                                href="#"
                                className="router-link-active router-link-exact-active nav-link active"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="List"
                                aria-label="List"
                              >
                                <i className="bx bx-list-ul" />
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#"
                                className="nav-link"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Grid"
                                aria-label="Grid"
                              >
                                <i className="bx bx-grid-alt" />
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target=".add-new"
                            className="btn btn-primary"
                          >
                            <i className="bx bx-plus me-1" /> Add New
                          </a>
                        </div>
                        <div className="dropdown">
                          <a
                            className="btn btn-link   py-1 font-size-16 shadow-none dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded" />
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                     */}

                     
                  </div>
                  <CRow>
                    <CCol sm={6} lg={3}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">In Progress</div>
                        <div className="fs-5 fw-semibold">{numInProgress}</div>
                      </div>
                    </CCol>
                    <CCol sm={6} lg={3}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">On Pending</div>
                        <div className="fs-5 fw-semibold">{numOnPendng}</div>
                      </div>
                    </CCol>
                    {/* </CRow>
                  <CRow> */}
                    <CCol sm={6} lg={3}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Cancelled</div>
                        <div className="fs-5 fw-semibold">{numCancelled}</div>
                      </div>
                    </CCol>
                    <CCol sm={6} lg={3}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Completed</div>
                        <div className="fs-5 fw-semibold">{numCompleted}</div>
                      </div>
                    </CCol>
                  </CRow>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="">
                        <div className="table-responsive">
                          <table className="table project-list-table table-nowrap align-middle table-borderless">
                            <thead style={{ color: 'black' }}>
                              <tr>
                               
                                <th scope="col">Project Name</th>
                                <th scope="col">Status</th>
                                {/* <th scope="col">Email</th> */}
                                <th scope="col">Start Date</th>
                                <th scope="col">Deadline</th>

                                <th scope="col">Created By</th>
                                <th scope="col">Approve</th>
                              </tr>
                            </thead>


                            
                  {bookedLabs.map((p, index) => (
                    <div key={index}>

                            <tbody style={{ color: 'black' }}>
                              <tr>
                              


                                <td style={{ color: 'black' }}>
                                  {/* <a href="#" className="  "> */}
                                  {item.sender_contactperson}
                                  {/* </a> */}
                                </td>
                                <td>
                                  <>
                                    
                                  </>
                                  {item.service_status}
                                </td>

                                <td>
                                  <>
                                   
                                  {item.startdate}
                                  </>
                                </td>
                                <td>
                                  <>
                                  
                                  {item.enddate}
                                  </>
                                </td>
                                <td>{item.submitter_companyname}</td>
                                <td>False</td>
                              </tr>
                            </tbody>
                             </div>
                             ))}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader style={{ color: 'black' }}> Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">
                          <p style={{ color: 'black', marginTop: '8px', marginBottom: '-1px' }}>
                            New Clients
                          </p>
                        </div>
                        <div className="fs-5 fw-semibold" style={{ color: 'black' }}>
                         0
                        </div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          <p style={{ color: 'black', marginTop: '8px', marginBottom: '-1px' }}>
                            Recurring Clients
                          </p>
                        </div>
                        <div className="fs-5 fw-semibold" style={{ color: 'black' }}>
                          0
                        </div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  
                </CCol>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          <p style={{ color: 'black', marginTop: '8px', marginBottom: '-1px' }}>
                            Reviews
                          </p>
                        </div>
                        <div className="fs-5 fw-semibold" style={{ color: 'black' }}>
                          0
                        </div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          <p style={{ color: 'black', marginTop: '8px', marginBottom: '-1px' }}>
                            Organic
                          </p>
                        </div>
                        <div className="fs-5 fw-semibold" style={{ color: 'black' }}>
                         0
                        </div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                 

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
              
                </CCol>
              </CRow>

             
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
