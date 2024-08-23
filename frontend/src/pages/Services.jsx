import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Services(){

    return(
        <>
        <Navbar />
        <>
  <div
    id="banner-area"
    className="banner-area"
    style={{ backgroundImage: "url(./assets/images/banner/banner1.jpg)" }}
  >
    <div className="banner-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-heading">
              <h1 className="banner-title">Service</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/home">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/services">Services</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    All Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* Col end */}
        </div>
        {/* Row end */}
      </div>
      {/* Container end */}
    </div>
    {/* Banner text end */}
  </div>
  {/* Banner area end */}
  <section id="main-container" className="main-container pb-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service1.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon1.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href="service-single.html">Innovative Construction Solutions</a>
                </h3>
                <p>
                  At Moudwork, we turn your vision into reality with our innovative construction solutions. Our expert team combines advanced techniques with creative design to build exceptional structures that meet your needs and exceed your expectations.
                </p>
                <a
                  className="learn-more d-inline-block"
                  href="service-single.html"
                  aria-label="service-details"
                >
                  <i className="fa fa-caret-right" /> Learn more
                </a>
              </div>
            </div>
          </div>
          {/* Service1 end */}
        </div>
        {/* Col 1 end */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service2.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon2.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href="service-single.html">Sustainable Building Practices</a>
                </h3>
                <p>
                  We are committed to sustainability. Moudwork incorporates eco-friendly materials and techniques to create buildings that are not only durable but also environmentally responsible.
                </p>
                <a
                  className="learn-more d-inline-block"
                  href="service-single.html"
                  aria-label="service-details"
                >
                  <i className="fa fa-caret-right" /> Learn more
                </a>
              </div>
            </div>
          </div>
          {/* Service2 end */}
        </div>
        {/* Col 2 end */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service3.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon3.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href="service-single.html">Custom Design and Build</a>
                </h3>
                <p>
                  Moudwork specializes in custom design and build projects tailored to your unique requirements. From concept to completion, we ensure that every detail aligns with your vision and objectives.
                </p>
                <a
                  className="learn-more d-inline-block"
                  href="service-single.html"
                  aria-label="service-details"
                >
                  <i className="fa fa-caret-right" /> Learn more
                </a>
              </div>
            </div>
          </div>
          {/* Service3 end */}
        </div>
        {/* Col 3 end */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service4.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon4.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href="service-single.html">Exterior Design Excellence</a>
                </h3>
                <p>
                  Our exterior design services are second to none. Moudwork focuses on creating striking and functional facades that enhance the aesthetic appeal and performance of your building.
                </p>
                <a
                  className="learn-more d-inline-block"
                  href="service-single.html"
                  aria-label="service-details"
                >
                  <i className="fa fa-caret-right" /> Learn more
                </a>
              </div>
            </div>
          </div>
          {/* Service4 end */}
        </div>
        {/* Col 4 end */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service5.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon5.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href="service-single.html">Comprehensive Renovation</a>
                </h3>
                <p>
                  At Moudwork, we handle all aspects of renovation projects, ensuring that your existing structures are updated to meet modern standards and your evolving needs.
                </p>
                <a
                  className="learn-more d-inline-block"
                  href="service-single.html"
                  aria-label="service-details"
                >
                  <i className="fa fa-caret-right" /> Learn more
                </a>
              </div>
            </div>
          </div>
          {/* Service5 end */}
        </div>
        {/* Col 5 end */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service6.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon6.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href="service-single.html">Safety Management</a>
                </h3>
                <p>
                  Moudwork prioritizes safety in all our projects. We implement stringent safety management protocols to ensure that every construction site is secure for our team and clients.
                </p>
                <a
                  className="learn-more d-inline-block"
                  href="service-single.html"
                  aria-label="service-details"
                >
                  <i className="fa fa-caret-right" /> Learn more
                </a>
              </div>
            </div>
          </div>
          {/* Service6 end */}
        </div>
        {/* Col 6 end */}
      </div>
      {/* Main row end */}
    </div>
    {/* Container end */}
  </section>

  {/* Main container end */}
</>
<Footer />
        
        </>
    )
}

export default Services;