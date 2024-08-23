import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About(){
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
              <h1 className="banner-title">About</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/home">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/company">company</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
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
  <section id="main-container" className="main-container">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <h3 className="column-title">Who We Are</h3>
                <p>
                    At Moudwork, we pride ourselves on delivering top-notch construction services with a focus on quality and client satisfaction. Our team of experts is dedicated to transforming your vision into reality with precision and excellence.
                </p>
                <blockquote>
                    <p>
                        "Building dreams with integrity and innovation, one project at a time."
                    </p>
                </blockquote>
                <p>
                    Our approach is grounded in a commitment to craftsmanship and customer service. From residential homes to commercial spaces, we ensure that every detail meets the highest standards. We believe in clear communication and transparency throughout the construction process.
                </p>
            </div>
            {/* Col end */}
            <div className="col-lg-6 mt-5 mt-lg-0">
                <div id="page-slider" className="page-slider small-bg">
                    <div
                        className="item"
                        style={{
                            backgroundImage: "url(./assets/images/slider-pages/slide-page1.jpg)"
                        }}
                    >
                        <div className="container">
                            <div className="box-slider-content">
                                <div className="box-slider-text">
                                    <h2 className="box-slide-title">Our Vision</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item 1 end */}
                    <div
                        className="item"
                        style={{
                            backgroundImage: "url(./assets/images/slider-pages/slide-page2.jpg)"
                        }}
                    >
                        <div className="container">
                            <div className="box-slider-content">
                                <div className="box-slider-text">
                                    <h2 className="box-slide-title">Our Values</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item 2 end */}
                    <div
                        className="item"
                        style={{
                            backgroundImage: "url(./assets/images/slider-pages/slide-page3.jpg)"
                        }}
                    >
                        <div className="container">
                            <div className="box-slider-content">
                                <div className="box-slider-text">
                                    <h2 className="box-slide-title">Our Commitment</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item 3 end */}
                </div>
                {/* Page slider end */}
            </div>
            {/* Col end */}
        </div>
        {/* Content row end */}
    </div>
    {/* Container end */}
</section>



  {/* Main container end */}
  <section id="facts" className="facts-area dark-bg">
    <div className="container">
      <div className="facts-wrapper">
        <div className="row">
          <div className="col-md-3 col-sm-6 ts-facts">
            <div className="ts-facts-img">
              <img
                loading="lazy"
                src="./assets/images/icon-image/fact1.png"
                alt="facts-img"
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
                alt="facts-img"
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
                alt="facts-img"
              />
            </div>
            <div className="ts-facts-content">
              <h2 className="ts-facts-num">
                <span className="counterUp" data-count={43800}>
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
                alt="facts-img"
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
        </div>{" "}
        {/* Facts end */}
      </div>
      {/*/ Content row end */}
    </div>
    {/*/ Container end */}
  </section>


  {/* Facts end */}
  <section id="ts-team" className="ts-team">
    <div className="container">
        <div className="row text-center">
            <div className="col-lg-12">
                <h2 className="section-title">Quality Service</h2>
                <h3 className="section-sub-title">Professional Team</h3>
            </div>
        </div>
        {/*/ Title row end */}
        <div className="row">
            <div className="col-lg-12">
                <div id="team-slide" className="team-slide">
                    <div className="item">
                        <div className="ts-team-wrapper">
                            <div className="team-img-wrapper">
                                <img
                                    loading="lazy"
                                    className="w-100"
                                    src="./assets/images/team/team1.jpg"
                                    alt="team-img"
                                />
                            </div>
                            <div className="ts-team-content">
                                <h3 className="ts-name">Abdessamia Ennaji</h3>
                                <p className="ts-designation">Founder & CEO</p>
                                <p className="ts-description">
                                    Abdessamia is the visionary behind Moudwork, leading the company with a commitment to excellence and innovation in construction.
                                </p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="https://www.linkedin.com/in/abdessamiaennaji">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                    <a target="_blank" href="https://twitter.com/abdessamiaennaji">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </div>
                                {/*/ social-icons*/}
                            </div>
                        </div>
                        {/*/ Team wrapper end */}
                    </div>
                    {/* Team 1 end */}
                    <div className="item">
                        <div className="ts-team-wrapper">
                            <div className="team-img-wrapper">
                                <img
                                    loading="lazy"
                                    className="w-100"
                                    src="./assets/images/team/team2.jpg"
                                    alt="team-img"
                                />
                            </div>
                            <div className="ts-team-content">
                                <h3 className="ts-name">John Doe</h3>
                                <p className="ts-designation">Project Manager</p>
                                <p className="ts-description">
                                    John oversees project execution, ensuring that each project is completed on time and within budget.
                                </p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="https://www.linkedin.com/in/johndoe">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                    <a target="_blank" href="https://twitter.com/johndoe">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </div>
                                {/*/ social-icons*/}
                            </div>
                        </div>
                        {/*/ Team wrapper end */}
                    </div>
                    {/* Team 2 end */}
                    <div className="item">
                        <div className="ts-team-wrapper">
                            <div className="team-img-wrapper">
                                <img
                                    loading="lazy"
                                    className="w-100"
                                    src="./assets/images/team/team3.jpg"
                                    alt="team-img"
                                />
                            </div>
                            <div className="ts-team-content">
                                <h3 className="ts-name">Jane Smith</h3>
                                <p className="ts-designation">Lead Architect</p>
                                <p className="ts-description">
                                    Jane brings creative solutions and innovative designs to every project, ensuring aesthetic and functional excellence.
                                </p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="https://www.linkedin.com/in/janesmith">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                    <a target="_blank" href="https://twitter.com/janesmith">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </div>
                                {/*/ social-icons*/}
                            </div>
                        </div>
                        {/*/ Team wrapper end */}
                    </div>
                    {/* Team 3 end */}
                    <div className="item">
                        <div className="ts-team-wrapper">
                            <div className="team-img-wrapper">
                                <img
                                    loading="lazy"
                                    className="w-100"
                                    src="./assets/images/team/team4.jpg"
                                    alt="team-img"
                                />
                            </div>
                            <div className="ts-team-content">
                                <h3 className="ts-name">Michael Brown</h3>
                                <p className="ts-designation">Construction Supervisor</p>
                                <p className="ts-description">
                                    Michael ensures that construction sites run smoothly, overseeing all activities and coordinating with subcontractors.
                                </p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="https://www.linkedin.com/in/michaelbrown">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                    <a target="_blank" href="https://twitter.com/michaelbrown">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </div>
                                {/*/ social-icons*/}
                            </div>
                        </div>
                        {/*/ Team wrapper end */}
                    </div>
                    {/* Team 4 end */}
                    <div className="item">
                        <div className="ts-team-wrapper">
                            <div className="team-img-wrapper">
                                <img
                                    loading="lazy"
                                    className="w-100"
                                    src="./assets/images/team/team5.jpg"
                                    alt="team-img"
                                />
                            </div>
                            <div className="ts-team-content">
                                <h3 className="ts-name">Emily Clark</h3>
                                <p className="ts-designation">Interior Designer</p>
                                <p className="ts-description">
                                    Emily is responsible for creating functional and beautiful interior spaces that align with our clients’ visions.
                                </p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="https://www.linkedin.com/in/emilyclark">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                    <a target="_blank" href="https://twitter.com/emilyclark">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </div>
                                {/*/ social-icons*/}
                            </div>
                        </div>
                        {/*/ Team wrapper end */}
                    </div>
                    {/* Team 5 end */}
                    <div className="item">
                        <div className="ts-team-wrapper">
                            <div className="team-img-wrapper">
                                <img
                                    loading="lazy"
                                    className="w-100"
                                    src="./assets/images/team/team6.jpg"
                                    alt="team-img"
                                />
                            </div>
                            <div className="ts-team-content">
                                <h3 className="ts-name">Oliver Johnson</h3>
                                <p className="ts-designation">Estimator</p>
                                <p className="ts-description">
                                    Oliver accurately estimates project costs and manages budgets to ensure financial efficiency.
                                </p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="https://www.linkedin.com/in/oliverjohnson">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                    <a target="_blank" href="https://twitter.com/oliverjohnson">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </div>
                                {/*/ social-icons*/}
                            </div>
                        </div>
                        {/*/ Team wrapper end */}
                    </div>
                    {/* Team 6 end */}
                </div>
                {/* Team slide end */}
            </div>
        </div>
        {/*/ Content row end */}
    </div>
    {/*/ Container end */}
</section>

  {/*/ Team end */}
</>
<Footer />
        </>
    )
}

export default About;