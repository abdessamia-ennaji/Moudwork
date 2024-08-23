import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Faq(){
    return(
        <>
        <Navbar />
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
              <h1 className="banner-title">Faq</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/home">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/about">company</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Faq
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
        <div className="col-lg-8">
          <h3 className="border-title border-left mar-t0">
            General Construction
          </h3>
          <div
            className="accordion accordion-group accordion-classic"
            id="construction-accordion"
          >
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
                    Is head protection required on construction sites by law?
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#construction-accordion"
              >
                <div className="card-body">
                  Yes, head protection is legally required on construction sites. It ensures the safety of workers from potential head injuries due to falling objects, impacts, or other hazards present in the construction environment.
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
                    What are the first aid requirements for construction sites?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#construction-accordion"
              >
                <div className="card-body">
                  Construction sites must be equipped with a first aid kit that complies with legal requirements. This kit should be regularly checked and maintained. Additionally, at least one person on-site must be trained in first aid to respond to emergencies effectively.
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
                    What is the role of an appointed person on a construction site?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#construction-accordion"
              >
                <div className="card-body">
                  An appointed person on a construction site is responsible for specific safety tasks and ensuring that safety protocols are followed. They act as a point of contact for safety issues and are instrumental in managing risk assessments and emergency procedures.
                </div>
              </div>
            </div>
          </div>
          {/*/ Accordion end */}
          <div className="gap-40" />
          <h3 className="border-title border-left">Safety</h3>
          <div
            className="accordion accordion-group accordion-classic"
            id="safety-accordion"
          >
            <div className="card">
              <div className="card-header p-0 bg-transparent" id="headingFour">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    What are the key safety measures for construction sites?
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                className="collapse show"
                aria-labelledby="headingFour"
                data-parent="#safety-accordion"
              >
                <div className="card-body">
                  Key safety measures include providing proper personal protective equipment (PPE), conducting regular safety training, ensuring proper site maintenance, and adhering to safety regulations and standards. Regular safety audits and clear communication of safety procedures are also crucial.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0 bg-transparent" id="headingFive">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What are the requirements for first aid on construction sites?
                  </button>
                </h2>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFive"
                data-parent="#safety-accordion"
              >
                <div className="card-body">
                  Construction sites must have a well-stocked first aid kit, and at least one person on-site must be trained in first aid. The first aid kit should be accessible, regularly checked, and contain items appropriate for potential site injuries.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0 bg-transparent" id="headingSix">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    What does an appointed person do in terms of safety?
                  </button>
                </h2>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                aria-labelledby="headingSix"
                data-parent="#safety-accordion"
              >
                <div className="card-body">
                  An appointed person for safety on a construction site oversees safety compliance, manages safety protocols, and ensures that all safety regulations are followed. They are responsible for conducting risk assessments, addressing safety concerns, and ensuring that safety training is up to date.
                </div>
              </div>
            </div>
          </div>
          {/*/ Accordion end */}
        </div>
        {/* Col end */}
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="sidebar sidebar-right">
            <div className="widget recent-posts">
              <h3 className="widget-title">Recent Posts</h3>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center">
                  <div className="posts-thumb">
                    <a href="#">
                      <img
                        loading="lazy"
                        alt="news-image"
                        src="./assets/images/news/news1.jpg"
                      />
                    </a>
                  </div>
                  <div className="post-info">
                    <h4 className="entry-title">
                      <a href="#">
                        Moudwork Completes $17.6 Million Medical Clinic Project
                      </a>
                    </h4>
                  </div>
                </li>
                {/* 1st post end*/}
                <li className="d-flex align-items-center">
                  <div className="posts-thumb">
                    <a href="#">
                      <img
                        loading="lazy"
                        alt="news-img"
                        src="./assets/images/news/news2.jpg"
                      />
                    </a>
                  </div>
                  <div className="post-info">
                    <h4 className="entry-title">
                      <a href="#">
                        Moudwork's Award for Outstanding Safety Practices
                      </a>
                    </h4>
                  </div>
                </li>
                {/* 2nd post end*/}
                <li className="d-flex align-items-center">
                  <div className="posts-thumb">
                    <a href="#">
                      <img
                        loading="lazy"
                        alt="news-img"
                        src="./assets/images/news/news3.jpg"
                      />
                    </a>
                  </div>
                  <div className="post-info">
                    <h4 className="entry-title">
                      <a href="#">
                        Moudwork Announces New Green Building Initiative
                      </a>
                    </h4>
                  </div>
                </li>
                {/* 3rd post end*/}
              </ul>
            </div>
            {/* Recent post end */}
          </div>
          {/* Sidebar end */}
        </div>
        {/* Col end */}
      </div>
      {/* Content row end */}
    </div>
    {/* Container end */}
  </section>

  {/* Main container end */}
  <Footer />
</>

    )
}

export default Faq;