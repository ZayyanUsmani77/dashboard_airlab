import React from 'react'
import HomePage from '../HomePage'
import LocationArea from '../locationArea/LocationArea'
import Slider from '../slider/Slider'
import SliderBottom from './SliderBottom'
const Home = () => {
  return (
    <div>
      <Slider></Slider>
        {/* <div className="location-area">
          <div className="container">
            <div className="banner-location bg-white radius-5">
              <div className="banner-location-flex">
                <div className="banner-location-single">
                  <div className="banner-location-single-flex">
                    <div className="banner-location-single-icon">
                      <i className="las la-map-marker-alt" />
                    </div>
                    <div className="banner-location-single-contents">
                      <span className="banner-location-single-contents-subtitle"> Location </span>
                      <div className="banner-location-single-contents-dropdown">
                        <select className="js-select select-style-two" name="state">
                          <option value={1}>Allentown, New Mexico</option>
                          <option value={2}>Allentown, New NewYork</option>
                          <option value={3}>Allentown, New Barcelona</option>
                          <option value={4}>Allentown, Paris</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-location-single">
                  <div className="banner-location-single-flex">
                    <div className="banner-location-single-icon">
                      <i className="las la-calendar" />
                    </div>
                    <div className="banner-location-single-contents">
                      <span className="banner-location-single-contents-subtitle"> Check In </span>
                      <div className="banner-location-single-contents-dropdown custom-select">
                        <select className="js-select select-style-two" name="state">
                          <option value={1}>20 Jun 2022</option>
                          <option value={2}>21 Jun 2022</option>
                          <option value={3}>22 Jun 2022</option>
                          <option value={4}>23 Jun 2022</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-location-single">
                  <div className="banner-location-single-flex">
                    <div className="banner-location-single-icon">
                      <i className="las la-calendar" />
                    </div>
                    <div className="banner-location-single-contents">
                      <span className="banner-location-single-contents-subtitle"> Check Out </span>
                      <div className="banner-location-single-contents-dropdown custom-select">
                        <select className="js-select select-style-two" name="state">
                          <option value={1}>20 Jul 2022</option>
                          <option value={2}>21 Jul 2022</option>
                          <option value={3}>22 Jul 2022</option>
                          <option value={4}>23 Jul 2022</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-location-single">
                  <div className="banner-location-single-flex">
                    <div className="banner-location-single-icon">
                      <i className="las la-user-friends" />
                    </div>
                    <div className="banner-location-single-contents">
                      <span className="banner-location-single-contents-subtitle"> Person </span>
                      <div className="banner-location-single-contents-dropdown custom-select">
                        <select className="js-select select-style-two" name="state">
                          <option value={1}>2 People</option>
                          <option value={2}>3 People</option>
                          <option value={3}>4 People</option>
                          <option value={4}>5 People</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-location-single">
                  <div className="banner-location-single-flex">
                    <div className="banner-location-single-icon">
                      <i className="las la-user-friends" />
                    </div>
                    <div className="banner-location-single-contents">
                      <span className="banner-location-single-contents-subtitle"> Children </span>
                      <div className="banner-location-single-contents-dropdown custom-select">
                        <select className="js-select select-style-two" name="state">
                          <option value={1}>2 Children</option>
                          <option value={2}>3 Children</option>
                          <option value={3}>4 Children</option>
                          <option value={4}>5 Children</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-location-single-search">
                  <div className="search-suggestions-wrapper">
                    <div className="search-click-icon">
                      <i className="las la-search" />
                    </div>
                    <div className="search-show">
                      <div className="search-show-inner">
                        <form action="#">
                          <div className="search-show-form">
                            <input autoComplete="off" className="form--control" id="search_form_input" type="text" placeholder="Search here...." />
                            <button type="submit"> <i className="las la-search" /> </button>
                            <span className="suggestions-icon-close"> <i className="las la-times" /> </span>
                          </div>
                          <div className="search-product" id="search_suggestions_wrap">
                            <div className="search-product-inner">
                              <h6 className="search-product-title">Product Suggestions</h6>
                              <ul className="search-product-list mt-4">
                                <li className="search-product-list-item">
                                  <a href="javascript:void(0)" className="search-product-list-link">
                                    <div className="search-product-list-image"><img src="assets/img/search_suggestion/s1.jpg" alt="img" />
                                    </div>
                                    <div className="search-product-list-info">
                                      <div className="search-product-list-info-top">
                                        <h6 className="earch-product-list-info-title"> Apple
                                          Original Air pod Collection for most popular and
                                          best price item in market </h6>
                                      </div>
                                      <div className="search-product-list-info-price mt-2">
                                        <div className="search-product-list-info-price-through">
                                          <span className="flash-price"> $330.00 </span>
                                          <span className="old-price"> $300.00 </span>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="search-product-list-item">
                                  <a href="javascript:void(0)" className="search-product-list-link">
                                    <div className="search-product-list-image"><img src="assets/img/search_suggestion/s2.jpg" alt="img" />
                                    </div>
                                    <div className="search-product-list-info">
                                      <div className="search-product-list-info-top">
                                        <h6 className="earch-product-list-info-title"> Apple
                                          Original Airpod Collection </h6>
                                      </div>
                                      <div className="search-product-list-info-price mt-2">
                                        <span className="main-price fw-500 color-light">$269.00</span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="search-product-list-item">
                                  <a href="javascript:void(0)" className="search-product-list-link">
                                    <div className="search-product-list-image"><img src="assets/img/search_suggestion/s3.jpg" alt="img" />
                                    </div>
                                    <div className="search-product-list-info">
                                      <div className="search-product-list-info-top">
                                        <h6 className="earch-product-list-info-title"> Apple
                                          Original Airpod Collection </h6>
                                      </div>
                                      <div className="search-product-list-info-price mt-2">
                                        <span className="main-price fw-500 color-light">$499.00</span>
                                        <span className="stock-out"> Stock Out </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="search-product-list-item">
                                  <a href="javascript:void(0)" className="search-product-list-link">
                                    <div className="search-product-list-image"><img src="assets/img/search_suggestion/s4.jpg" alt="img" />
                                    </div>
                                    <div className="search-product-list-info">
                                      <div className="search-product-list-info-top">
                                        <h6 className="earch-product-list-info-title"> Apple
                                          Original Airpod Collection </h6>
                                      </div>
                                      <div className="search-product-list-info-price mt-2">
                                        <span className="main-price fw-500 color-light">$499.00</span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="search-product-list-item">
                                  <a href="javascript:void(0)" className="search-product-list-link">
                                    <div className="search-product-list-image"><img src="assets/img/search_suggestion/s5.jpg" alt="img" />
                                    </div>
                                    <div className="search-product-list-info">
                                      <div className="search-product-list-info-top">
                                        <h6 className="earch-product-list-info-title"> Apple
                                          Original Airpod Collection </h6>
                                      </div>
                                      <div className="search-product-list-info-price mt-2">
                                        <span className="main-price fw-500 color-light">$499.00</span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="search-suggestion-overlay" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <LocationArea/>
        <HomePage/>
      
        
        {/* <section className="question-area pat-50 pab-50">
          <div className="container">
            <div className="section-title center-text">
              <h2 className="title"> Frequently Asked Question </h2>
              <div className="section-title-line"> </div>
            </div>
            <div className="row g-4 mt-4">
              <div className="col-xl-8 col-lg-7">
                <div className="faq-wrapper">
                  <div className="faq-contents">
                    <div className="faq-item wow fadeInLeft" data-wow-delay=".1s">
                      <h3 className="faq-title">
                        How does it works?
                      </h3>
                      <div className="faq-panel">
                        <p className="faq-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                          ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed
                          turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu. </p>
                      </div>
                    </div>
                    <div className="faq-item active open wow fadeInLeft" data-wow-delay=".2s">
                      <h3 className="faq-title">
                        Do I get full refund if I cancel?
                      </h3>
                      <div className="faq-panel">
                        <p className="faq-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                          ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed
                          turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu. </p>
                      </div>
                    </div>
                    <div className="faq-item wow fadeInLeft" data-wow-delay=".3s">
                      <h3 className="faq-title">
                        Do you offer pool service?
                      </h3>
                      <div className="faq-panel">
                        <p className="faq-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                          ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed
                          turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu. </p>
                      </div>
                    </div>
                    <div className="faq-item wow fadeInLeft" data-wow-delay=".1s">
                      <h3 className="faq-title">
                        What if I want to cancel?
                      </h3>
                      <div className="faq-panel">
                        <p className="faq-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                          ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed
                          turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu. </p>
                      </div>
                    </div>
                    <div className="faq-item wow fadeInLeft" data-wow-delay=".1s">
                      <h3 className="faq-title">
                        What’s the closure time?
                      </h3>
                      <div className="faq-panel">
                        <p className="faq-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                          ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed
                          turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="faq-question faq-question-border radius-10 sticky-top">
                  <h3 className="faq-question-title"> Still got questions? </h3>
                  <div className="faq-question-form custom-form mat-20">
                    <form action="#">
                      <div className="single-input">
                        <label className="label-title"> Name </label>
                        <input type="text" className="form--control radius-10" placeholder="Type Name" />
                      </div>
                      <div className="single-input">
                        <label className="label-title"> Email </label>
                        <input type="text" className="form--control radius-10" placeholder="Type Email" />
                      </div>
                      <div className="single-input">
                        <label className="label-title"> Questions </label>
                        <textarea name="message" className="form--control form-message radius-10" placeholder="Type Your Questons..." defaultValue={""} />
                      </div>
                      <button className="submit-btn w-100 radius-10" type="submit"> Submit </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="blog-area pat-50 pab-50">
          <div className="container">
            <div className="section-title center-text">
              <h2 className="title"> Latest News </h2>
              <div className="section-title-line"> </div>
            </div>
            <div className="row gy-4 mt-4">
              <div className="col-xxl-4 col-lg-4 col-md-6">
                <div className="single-blog blog-two">
                  <div className="single-blog-thumbs">
                    <a href="#"> <img className="lazyloads" src="assets/img/blog/blog1.jpg" alt="" />
                    </a>
                    <div className="single-blog-thumbs-date">
                      <a href="javascript:void(0)"> <span className="date"> 18 </span> <span className="month"> Jun
                        </span> </a>
                    </div>
                  </div>
                  <div className="single-blog-contents mt-3">
                    <div className="single-blog-contents-tags mt-3">
                      <span className="single-blog-contents-tags-item">
                        <a href="javascript:void(0)"> <i className="las la-tag" /> Hotel </a>
                      </span>
                      <span className="single-blog-contents-tags-item"> <a href="javascript:void(0)"> 22 Comments
                        </a> </span>
                    </div>
                    <h4 className="single-blog-contents-title mt-3"> <a href="#"> Great Deals to
                        Send Your Loved Ones Somewhere Nice </a> </h4>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-4 col-md-6">
                <div className="single-blog blog-two">
                  <div className="single-blog-thumbs">
                    <a href="#"> <img className="lazyloads" src="assets/img/blog/blog2.jpg" alt="" />
                    </a>
                    <div className="single-blog-thumbs-date">
                      <a href="javascript:void(0)"> <span className="date"> 19 </span> <span className="month"> Jun
                        </span> </a>
                    </div>
                  </div>
                  <div className="single-blog-contents mt-3">
                    <div className="single-blog-contents-tags mt-3">
                      <span className="single-blog-contents-tags-item">
                        <a href="javascript:void(0)"> <i className="las la-tag" /> Hotel </a>
                      </span>
                      <span className="single-blog-contents-tags-item"> <a href="javascript:void(0)"> 25 Comments
                        </a> </span>
                    </div>
                    <h4 className="single-blog-contents-title mt-3"> <a href="#"> Read Real Guest
                        Reviews. 24/7 Customer Service and others. </a> </h4>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-4 col-md-6">
                <div className="single-blog blog-two">
                  <div className="single-blog-thumbs">
                    <a href="#"> <img className="lazyloads" src="assets/img/blog/blog3.jpg" alt="" />
                    </a>
                    <div className="single-blog-thumbs-date">
                      <a href="javascript:void(0)"> <span className="date"> 20 </span> <span className="month"> Jun
                        </span> </a>
                    </div>
                  </div>
                  <div className="single-blog-contents mt-3">
                    <div className="single-blog-contents-tags mt-3">
                      <span className="single-blog-contents-tags-item">
                        <a href="javascript:void(0)"> <i className="las la-tag" /> Hotel </a>
                      </span>
                      <span className="single-blog-contents-tags-item"> <a href="javascript:void(0)"> 12 Comments
                        </a> </span>
                    </div>
                    <h4 className="single-blog-contents-title mt-3"> <a href="#"> Compare hotel
                        prices and find an amazing price for the Resort </a> </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>*/}
    </div> 
  )
}

export default Home
