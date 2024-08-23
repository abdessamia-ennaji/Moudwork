// import $ from 'jquery';
import { useTranslation } from "react-i18next";



import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Home(){
  const {t} = useTranslation()
  return(
        <>
<div className="body-inner">
  <Navbar />
  <div className="banner-carousel banner-carousel-1 mb-0">
  <div
    className="banner-carousel-item"
    style={{ backgroundImage: "url(../assets/images/slider-main/bg1.jpg)" }}
  >
    <div className="slider-content">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-md-12 text-center">
            <h2 className="slide-title" data-animation-in="slideInLeft">
              {t("Home.SlideTitle1")}
            </h2>
            <h3 className="slide-sub-title" data-animation-in="slideInRight">
            {t("Home.SlideSubTitle1")}
            </h3>
            <p data-animation-in="slideInLeft" data-duration-in="1.2">
              <a href="/services" className="slider btn btn-primary">
              {t("Home.slideInLeft1")}
              </a>
              <a
                href="/contact"
                className="slider btn btn-primary border"
              >
                {t("Home.ContactUs")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="banner-carousel-item"
    style={{ backgroundImage: "url(./assets/images/slider-main/bg2.jpg)" }}
  >
    <div className="slider-content text-left">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-md-12">
            <h2 className="slide-title-box" data-animation-in="slideInDown">
            {t("Home.SlideTitle2")}
            </h2>
            <h3 className="slide-title" data-animation-in="fadeIn">
            {t("Home.SlideSubTitle2")}
            </h3>
            <h3 className="slide-sub-title" data-animation-in="slideInLeft">
            {t("Home.slideInLeft2")}
            </h3>
            <p data-animation-in="slideInRight">
              <a
                href="/services"
                className="slider btn btn-primary border"
              >
                {t("Home.ContactUs")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="banner-carousel-item"
    style={{ backgroundImage: "url(./assets/images/slider-main/bg3.jpg)" }}
  >
    <div className="slider-content text-right">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-md-12">
            <h2 className="slide-title" data-animation-in="slideInDown">
            {t("Home.SlideTitle3")}
            </h2>
            <h3 className="slide-sub-title" data-animation-in="fadeIn">
            {t("Home.SlideSubTitle3")}
            </h3>
            <p
              className="slider-description lead"
              data-animation-in="slideInRight"
            >
              {t("Home.slideInLeft3")}
            </p>
            <div data-animation-in="slideInLeft">
              <a
                href="/contact"
                className="slider btn btn-primary"
                aria-label="contact-with-us"
              >
                Get a Free Quote
              </a>
              <a
                href="/about"
                className="slider btn btn-primary border"
                aria-label="learn-more-about-us"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





<section className="call-to-action-box no-padding">
  <div className="container">
    <div className="action-style-box">
      <div className="row align-items-center">
        <div className="col-md-8 text-center text-md-left">
          <div className="call-to-action-text">
            <h3 className="action-title">
            {t("Home.ActionTitle1")}
            </h3>
          </div>
        </div>
        {/* Col end */}
        <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
          <div className="call-to-action-btn">
            <a className="btn btn-dark" href="#">
              Get Your Free Quote
            </a>
          </div>
        </div>
        {/* col end */}
      </div>
      {/* row end */}
    </div>
    {/* Action style box */}
  </div>
  {/* Container end */}
</section>





  {/* Action end */}
  <section id="ts-features" className="ts-features">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="ts-intro">
          <h2 className="into-title">About Moudwork</h2>
          <h3 className="into-sub-title">Building Excellence Together</h3>
          <p>
            At Moudwork, we are committed to transforming visions into reality. With years of experience in the construction industry, we specialize in delivering projects that stand the test of time. Our team of dedicated professionals ensures that every project is executed with precision, quality, and integrity.
          </p>
        </div>
        {/* Intro box end */}
        <div className="gap-20" />
        <div className="row">
          <div className="col-md-6">
            <div className="ts-service-box">
              <span className="ts-service-icon">
                <i className="fas fa-award" />
              </span>
              <div className="ts-service-box-content">
                <h3 className="service-box-title">
                  Reputation for Excellence
                </h3>
              </div>
            </div>
            {/* Service 1 end */}
          </div>
          {/* col end */}
          <div className="col-md-6">
            <div className="ts-service-box">
              <span className="ts-service-icon">
                <i className="fas fa-handshake" />
              </span>
              <div className="ts-service-box-content">
                <h3 className="service-box-title">Building Strong Partnerships</h3>
              </div>
            </div>
            {/* Service 2 end */}
          </div>
          {/* col end */}
        </div>
        {/* Content row 1 end */}
        <div className="row">
          <div className="col-md-6">
            <div className="ts-service-box">
              <span className="ts-service-icon">
                <i className="fas fa-bullseye" />
              </span>
              <div className="ts-service-box-content">
                <h3 className="service-box-title">Driven by Commitment</h3>
              </div>
            </div>
            {/* Service 3 end */}
          </div>
          {/* col end */}
          <div className="col-md-6">
            <div className="ts-service-box">
              <span className="ts-service-icon">
                <i className="fas fa-users-cog" />
              </span>
              <div className="ts-service-box-content">
                <h3 className="service-box-title">Team of Professionals</h3>
              </div>
            </div>
            {/* Service 4 end */}
          </div>
          {/* col end */}
        </div>
        {/* Content row 2 end */}
      </div>
      {/* Col end */}
      <div className="col-lg-6 mt-4 mt-lg-0">
        <h3 className="into-sub-title">Our Core Values</h3>
        <p>
          At the heart of Moudwork lies a set of core values that guide every project we undertake.
        </p>
        <div className="accordion accordion-group" id="our-values-accordion">
          <div className="card">
            <div className="card-header p-0 bg-transparent" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Safety First
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#our-values-accordion"
            >
              <div className="card-body">
                Ensuring the safety of our team, clients, and the community is paramount in all our operations.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header p-0 bg-transparent" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Unparalleled Customer Service
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#our-values-accordion"
            >
              <div className="card-body">
                We prioritize our clients' needs, ensuring transparent communication and exceeding expectations at every step.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header p-0 bg-transparent" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Integrity in Action
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#our-values-accordion"
            >
              <div className="card-body">
                Our commitment to honesty and ethical practices ensures that we build not just structures, but lasting trust.
              </div>
            </div>
          </div>
        </div>
        {/*/ Accordion end */}
      </div>
      {/* Col end */}
    </div>
    {/* Row end */}
  </div>
  {/* Container end */}
</section>




  {/* Feature are end */}
  <section id="facts" className="facts-area dark-bg">
  <div className="container">
    <div className="facts-wrapper">
      <div className="row">
        <div className="col-md-3 col-sm-6 ts-facts">
          <div className="ts-facts-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/fact1.png"
              alt="Total Projects"
            />
          </div>
          <div className="ts-facts-content">
            <h2 className="ts-facts-num">
              <span className="counterUp" data-count={96}>
                0
              </span>
            </h2>
            <h3 className="ts-facts-title">Total Projects</h3>
          </div>
        </div>
        {/* Col end */}
        <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
          <div className="ts-facts-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/fact2.png"
              alt="Staff Members"
            />
          </div>
          <div className="ts-facts-content">
            <h2 className="ts-facts-num">
              <span className="counterUp" data-count={35}>
                0
              </span>
            </h2>
            <h3 className="ts-facts-title">Staff Members</h3>
          </div>
        </div>
        {/* Col end */}
        <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
          <div className="ts-facts-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/fact3.png"
              alt="Hours of Work"
            />
          </div>
          <div className="ts-facts-content">
            <h2 className="ts-facts-num">
              <span className="counterUp" data-count={4000}>
                0
              </span>
            </h2>
            <h3 className="ts-facts-title">Hours of Work</h3>
          </div>
        </div>
        {/* Col end */}
        <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
          <div className="ts-facts-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/fact4.png"
              alt="Cities Experience"
            />
          </div>
          <div className="ts-facts-content">
            <h2 className="ts-facts-num">
              <span className="counterUp" data-count={12}>
                0
              </span>
            </h2>
            <h3 className="ts-facts-title">Cities Served</h3>
          </div>
        </div>
        {/* Col end */}
      </div>
      {/* Facts end */}
    </div>
    {/*/ Content row end */}
  </div>
  {/*/ Container end */}
</section>



  {/* Facts end */}
  <section id="ts-service-area" className="ts-service-area pb-0">
  <div className="container">
    <div className="row text-center">
      <div className="col-12">
        <h2 className="section-title">We Are Specialists In</h2>
        <h3 className="section-sub-title">What We Do</h3>
      </div>
    </div>
    {/*/ Title row end */}
    <div className="row">
      <div className="col-lg-4">
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon1.png"
              alt="Home Construction"
            />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#">Home Construction</a>
            </h3>
            <p>
              We build high-quality homes with meticulous attention to detail,
              ensuring your vision becomes reality.
            </p>
          </div>
        </div>
        {/* Service 1 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon2.png"
              alt="Building Remodels"
            />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#">Building Remodels</a>
            </h3>
            <p>
              Transform your existing space with our expert remodeling services
              for both residential and commercial properties.
            </p>
          </div>
        </div>
        {/* Service 2 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon3.png"
              alt="Interior Design"
            />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#">Interior Design</a>
            </h3>
            <p>
              Our interior design services blend functionality with aesthetics,
              creating spaces that are both beautiful and practical.
            </p>
          </div>
        </div>
        {/* Service 3 end */}
      </div>
      {/* Col end */}
      <div className="col-lg-4 text-center">
        <img
          loading="lazy"
          className="img-fluid"
          src="./assets/images/services/service-center.png"
          alt="Our Services"
        />
      </div>
      {/* Col end */}
      <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon4.png"
              alt="Exterior Design"
            />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#">Exterior Design</a>
            </h3>
            <p>
              Enhance your property's curb appeal with our innovative and
              durable exterior design solutions.
            </p>
          </div>
        </div>
        {/* Service 4 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon5.png"
              alt="Renovation"
            />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#">Renovation</a>
            </h3>
            <p>
              From minor updates to major overhauls, our renovation services
              give your space a fresh new look.
            </p>
          </div>
        </div>
        {/* Service 5 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon6.png"
              alt="Safety Management"
            />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#">Safety Management</a>
            </h3>
            <p>
              Our safety management services ensure that your project adheres to
              the highest safety standards.
            </p>
          </div>
        </div>
        {/* Service 6 end */}
      </div>
      {/* Col end */}
    </div>
    {/* Content row end */}
  </div>
  {/*/ Container end */}
</section>



  {/* Service end */}
  <section id="project-area" className="project-area solid-bg">
  <div className="container">
    <div className="row text-center">
      <div className="col-lg-12">
        <h2 className="section-title">Work of Excellence</h2>
        <h3 className="section-sub-title">Recent Projects</h3>
      </div>
    </div>
    {/*/ Title row end */}
    <div className="row">
      <div className="col-12">
        <div className="shuffle-btn-group">
          <label className="active" htmlFor="all">
            <input
              type="radio"
              name="shuffle-filter"
              id="all"
              value="all"
              defaultChecked
            />
            Show All
          </label>
          <label htmlFor="commercial">
            <input
              type="radio"
              name="shuffle-filter"
              id="commercial"
              value="commercial"
            />
            Commercial
          </label>
          <label htmlFor="education">
            <input
              type="radio"
              name="shuffle-filter"
              id="education"
              value="education"
            />
            Education
          </label>
          <label htmlFor="government">
            <input
              type="radio"
              name="shuffle-filter"
              id="government"
              value="government"
            />
            Government
          </label>
          <label htmlFor="infrastructure">
            <input
              type="radio"
              name="shuffle-filter"
              id="infrastructure"
              value="infrastructure"
            />
            Infrastructure
          </label>
          <label htmlFor="residential">
            <input
              type="radio"
              name="shuffle-filter"
              id="residential"
              value="residential"
            />
            Residential
          </label>
          <label htmlFor="healthcare">
            <input
              type="radio"
              name="shuffle-filter"
              id="healthcare"
              value="healthcare"
            />
            Healthcare
          </label>
        </div>
        {/* project filter end */}
        <div className="row shuffle-wrapper">
          <div className="col-1 shuffle-sizer" />
          <div
            className="col-lg-4 col-md-6 shuffle-item"
            data-groups='["government","healthcare"]'
          >
            <div className="project-img-container">
              <a
                className="gallery-popup"
                href="./assets/images/projects/project1.jpg"
                aria-label="Capital Teltway Building"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/projects/project1.jpg"
                  alt="Capital Teltway Building"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="/projects">
                      Capital Teltway Building
                    </a>
                  </h3>
                  <p className="project-cat">Commercial, Interiors</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 1 end */}
          <div
            className="col-lg-4 col-md-6 shuffle-item"
            data-groups='["healthcare"]'
          >
            <div className="project-img-container">
              <a
                className="gallery-popup"
                href="./assets/images/projects/project2.jpg"
                aria-label="Ghum Touch Hospital"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/projects/project2.jpg"
                  alt="Ghum Touch Hospital"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="/projects">Ghum Touch Hospital</a>
                  </h3>
                  <p className="project-cat">Healthcare</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 2 end */}
          <div
            className="col-lg-4 col-md-6 shuffle-item"
            data-groups='["infrastructure","commercial"]'
          >
            <div className="project-img-container">
              <a
                className="gallery-popup"
                href="./assets/images/projects/project3.jpg"
                aria-label="TNT East Facility"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/projects/project3.jpg"
                  alt="TNT East Facility"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="/projects">TNT East Facility</a>
                  </h3>
                  <p className="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 3 end */}
          <div
            className="col-lg-4 col-md-6 shuffle-item"
            data-groups='["education","infrastructure"]'
          >
            <div className="project-img-container">
              <a
                className="gallery-popup"
                href="./assets/images/projects/project4.jpg"
                aria-label="Narriot Headquarters"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/projects/project4.jpg"
                  alt="Narriot Headquarters"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="/projects">Narriot Headquarters</a>
                  </h3>
                  <p className="project-cat">Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 4 end */}
          <div
            className="col-lg-4 col-md-6 shuffle-item"
            data-groups='["infrastructure","education"]'
          >
            <div className="project-img-container">
              <a
                className="gallery-popup"
                href="./assets/images/projects/project5.jpg"
                aria-label="Kalas Metrorail"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/projects/project5.jpg"
                  alt="Kalas Metrorail"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="/projects">Kalas Metrorail</a>
                  </h3>
                  <p className="project-cat">Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 5 end */}
          <div
            className="col-lg-4 col-md-6 shuffle-item"
            data-groups='["residential"]'
          >
            <div className="project-img-container">
              <a
                className="gallery-popup"
                href="./assets/images/projects/project6.jpg"
                aria-label="Ancraft Avenue House"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/projects/project6.jpg"
                  alt="Ancraft Avenue House"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="/projects">Ancraft Avenue House</a>
                  </h3>
                  <p className="project-cat">Residential</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 6 end */}
        </div>
        {/* shuffle end */}
      </div>
      <div className="col-12">
        <div className="general-btn text-center">
          <a className="btn btn-primary" href="/projects">
            View All Projects
          </a>
        </div>
      </div>
    </div>
    {/* Content row end */}
  </div>
  {/*/ Container end */}
</section>





  {/* Project area end */}
  <section className="content">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <h3 className="column-title">Témoignages</h3>
                <div id="testimonial-slide" className="testimonial-slide">
                    <div className="item">
                        <div className="quote-item">
                            <span className="quote-text">
                                "Moudwork a transformé notre vision en réalité. Leur expertise dans la construction est inégalée, et ils ont su respecter les délais tout en dépassant nos attentes."
                            </span>
                            <div className="quote-item-footer">
                                <img
                                    loading="lazy"
                                    className="testimonial-thumb"
                                    src="./assets/images/clients/testimonial1.png"
                                    alt="testimonial"
                                />
                                <div className="quote-item-info">
                                    <h3 className="quote-author">Gabriel Denis</h3>
                                    <span className="quote-subtext">Président, OKT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="quote-item">
                            <span className="quote-text">
                                "Travailler avec Moudwork a été une expérience formidable. Leur engagement envers la qualité et la satisfaction du client est admirable."
                            </span>
                            <div className="quote-item-footer">
                                <img
                                    loading="lazy"
                                    className="testimonial-thumb"
                                    src="./assets/images/clients/testimonial2.png"
                                    alt="testimonial"
                                />
                                <div className="quote-item-info">
                                    <h3 className="quote-author">Weldon Cash</h3>
                                    <span className="quote-subtext">Directeur financier, First Choice</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="quote-item">
                            <span className="quote-text">
                                "Moudwork a livré un travail impeccable, respectant à la fois notre budget et nos délais. Nous recommandons vivement leurs services."
                            </span>
                            <div className="quote-item-footer">
                                <img
                                    loading="lazy"
                                    className="testimonial-thumb"
                                    src="./assets/images/clients/testimonial3.png"
                                    alt="testimonial"
                                />
                                <div className="quote-item-info">
                                    <h3 className="quote-author">Minter Puchan</h3>
                                    <span className="quote-subtext">Directeur, AKT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
                <h3 className="column-title">Clients Satisfaits</h3>
                <div className="row all-clients">
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://www.chabi-chic.com/" target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://ehonline.eu/wp-content/uploads/2022/11/chabichiclogo.jpg"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://ar.wikipedia.org/wiki/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D8%AF%D8%A7%D8%AE%D9%84%D9%8A%D8%A9_(%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8)"
                            target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://afriquiaplus.ma/wp-content/uploads/2020/11/interieur_604898347.png"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://www.sante.gov.ma/sites/Ar/Pages/AccueilAr.aspx" target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/56/MS-Maroc.png"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://www.linkedin.com/in/ouvrage-contractor-1b3903135/?originalSubdomain=ma" target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3N1pkkp4oGNuKpfM5I0WaJkXQlljwD7NJQ&s"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://mfe.ma/" target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="./assets/images/clients/client5.png"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://www.sgtm-maroc.com/en/" target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://i0.wp.com/droneway.ma/wp-content/uploads/2019/10/SGTM-LOGO.png?resize=530%2C209"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



  {/* Content end */}
  <section className="subscribe no-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="subscribe-call-to-acton">
            <h3>Need Our Assistance?</h3>
            <h4>(+212) 660-435648</h4>
          </div>
        </div>
        {/* Col end */}
        <div className="col-lg-8">
          <div className="ts-newsletter row align-items-center">
            <div className="col-md-5 newsletter-introtext">
              <h4 className="text-white mb-0">Newsletter Sign-up</h4>
              <p className="text-white">Latest updates and news</p>
            </div>
            <div className="col-md-7 newsletter-form">
              <form action="#" method="post">
                <div className="form-group">
                  <label htmlFor="newsletter-email" className="content-hidden">
                    Newsletter Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="newsletter-email"
                    className="form-control form-control-lg"
                    placeholder="Your your email and hit enter"
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
          </div>
          {/* Newsletter end */}
        </div>
        {/* Col end */}
      </div>
      {/* Content row end */}
    </div>
    {/*/ Container end */}
  </section>


  
  {/*/ subscribe end */}
  <section id="projects" className="projects">
    <div className="container">
        <div className="row text-center">
            <div className="col-12">
                <h2 className="section-title">Excellence in Construction</h2>
                <h3 className="section-sub-title">Recent Projects</h3>
            </div>
        </div>
        {/*/ Title row end */}
        <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="latest-post">
                    <div className="latest-post-media">
                        <a href="/projects" className="latest-post-img">
                            <img
                                loading="lazy"
                                className="img-fluid"
                                src="./assets/images/projects/project1.jpg"
                                alt="img"
                            />
                        </a>
                    </div>
                    <div className="post-body">
                        <h4 className="post-title">
                            <a href="/projects" className="d-inline-block">
                                Modern Residential Complex in Marrakech
                            </a>
                        </h4>
                        <div className="latest-post-meta">
                            <span className="post-item-date">
                                <i className="fa fa-clock-o" /> August 10, 2024
                            </span>
                        </div>
                    </div>
                </div>
                {/* Latest post end */}
            </div>
            {/* 1st post col end */}
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="latest-post">
                    <div className="latest-post-media">
                        <a href="/projects" className="latest-post-img">
                            <img
                                loading="lazy"
                                className="img-fluid"
                                src="../assets/images/projects/project2.jpg"
                                alt="img"
                            />
                        </a>
                    </div>
                    <div className="post-body">
                        <h4 className="post-title">
                            <a href="/projects" className="d-inline-block">
                                State-of-the-Art Office Building in Casablanca
                            </a>
                        </h4>
                        <div className="latest-post-meta">
                            <span className="post-item-date">
                                <i className="fa fa-clock-o" /> July 15, 2024
                            </span>
                        </div>
                    </div>
                </div>
                {/* Latest post end */}
            </div>
            {/* 2nd post col end */}
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="latest-post">
                    <div className="latest-post-media">
                        <a href="/projects" className="latest-post-img">
                            <img
                                loading="lazy"
                                className="img-fluid"
                                src="../assets/images/projects/project3.jpg"
                                alt="img"
                            />
                        </a>
                    </div>
                    <div className="post-body">
                        <h4 className="post-title">
                            <a href="/projects" className="d-inline-block">
                                Luxury Villa Development in Agadir
                            </a>
                        </h4>
                        <div className="latest-post-meta">
                            <span className="post-item-date">
                                <i className="fa fa-clock-o" /> June 22, 2024
                            </span>
                        </div>
                    </div>
                </div>
                {/* Latest post end */}
            </div>
            {/* 3rd post col end */}
        </div>
        {/*/ Content row end */}
        <div className="general-btn text-center mt-4">
            <a className="btn btn-primary" href="/projects">
                See All Projects
            </a>
        </div>
    </div>
    {/*/ Container end */}
</section>



  {/*/ News end */}
  <Footer />
  
</div>

        </>
    )
};

export default Home;