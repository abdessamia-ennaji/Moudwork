import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";

function News() {

  const [latestNews, setLatestNews] = useState(null);
  const [latestThreeNews, setLatestThreeNews] = useState(null);

  useEffect(() => {
    // Fetch the latest news article
    axios.get('http://localhost:5000/api/news/latest')
      .then(response => {
        if (response.data.length > 0) {
          setLatestNews(response.data[0]); // Set the first item if array
        }
      })
      .catch(error => {
        console.error('Error fetching latest news:', error);
      });

    // Fetch the three latest news articles
    axios.get('http://localhost:5000/api/news/latestthree')
      .then(response => {
        if (response.data.length > 0) {
          setLatestThreeNews(response.data); // Set the latest three news
        }
      })
      .catch(error => {
        console.error('Error fetching latest three news:', error);
      });
  }, []);

  if (!latestNews) return <LoadingSpinner />;


  const imageUrl = `http://localhost:5000/uploads/${latestNews.image_url}`;
  console.log('Image URL:', imageUrl);
  //
  const displayedNews = (latestThreeNews && Array.isArray(latestThreeNews)) ? latestThreeNews.slice(0, 3) : [];

  return (
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
              <h1 className="banner-title">News</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">News</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    News Right sidebar
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
        <div className="col-lg-8 mb-5 mb-lg-0">



        <div className="post-content post-single">
      <div className="post-media post-image">
        <img
          loading="lazy"
          src={`http://localhost:5000/${latestNews.image_url}`}
          className="img-fluid"
          alt="post-image"
        />
      </div>
      <div className="post-body">
        <div className="entry-header">
          <div className="post-meta">
            <span className="post-author">
              <i className="far fa-user" />
              <a href="#"> Admin</a>
            </span>
            <span className="post-cat">
              <i className="far fa-folder-open" />
              <a href="#"> News</a>
            </span>
            <span className="post-meta-date">
              <i className="far fa-calendar" /> {new Date(latestNews.news_date).toLocaleDateString()}
            </span>
            <span className="post-comment">
              <i className="far fa-comment" /> 03
              <a href="#" className="comments-link">
                Comments
              </a>
            </span>
          </div>
          <h2 className="entry-title">
            {latestNews.title}
          </h2>
        </div>
        {/* header end */}
        <div className="entry-content">
          <p>{latestNews.content}</p>
          <blockquote>
            <p>
              {latestNews.quote}<cite>- {latestNews.quote_source}</cite>
            </p>
          </blockquote>
          <p>
            {latestNews.additional_content}
          </p>
        </div>
        <div className="tags-area d-flex align-items-center justify-content-between">
          <div className="post-tags">
            <a href="#">Construction</a>
            <a href="#">Safety</a>
            <a href="#">Planning</a>
          </div>
          <div className="share-items">
            <ul className="post-social-icons list-unstyled">
              <li className="social-icons-head">Share:</li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* post-body end */}
    </div>



          {/* post content end */}
          <div className="author-box d-nlock d-sm-flex">
            <div className="author-img mb-4 mb-md-0">
              <img loading="lazy" src="./assets/images/news/avator1.png" alt="author" />
            </div>
            <div className="author-info">
              <h3>
                Elton Themen<span>Site Engineer</span>
              </h3>
              <p className="mb-2">
                Lisicing elit, sed do eiusmod tempor ut labore et dolore magna
                aliqua. Ut enim ad vene minim veniam, quis nostrud exercitation
                nisi ex ea commodo.
              </p>
              <p className="author-url mb-0">
                Website:{" "}
                <span>
                  <a href="#">http://www.example.com</a>
                </span>
              </p>
            </div>
          </div>{" "}
          {/* Author box end */}
          {/* Post comment start */}
          <div id="comments" className="comments-area">
            <h3 className="comments-heading">07 Comments</h3>
            <ul className="comments-list">
              <li>
                <div className="comment d-flex">
                  <img
                    loading="lazy"
                    className="comment-avatar"
                    alt="author"
                    src="./assets/images/news/avator1.png"
                  />
                  <div className="comment-body">
                    <div className="meta-data">
                      <span className="comment-author mr-3">
                        Michelle Aimber
                      </span>
                      <span className="comment-date float-right">
                        January 17, 2016 at 1:38 pm
                      </span>
                    </div>
                    <div className="comment-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehen.
                      </p>
                    </div>
                    <div className="text-left">
                      <a className="comment-reply font-weight-bold" href="#">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                {/* Comments end */}
                <ul className="comments-reply">
                  <li>
                    <div className="comment d-flex">
                      <img
                        loading="lazy"
                        className="comment-avatar"
                        alt="author"
                        src="./assets/images/news/avator2.png"
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author mr-3">
                            Tom Harnandez
                          </span>
                          <span className="comment-date float-right">
                            January 17, 2016 at 1:38 pm
                          </span>
                        </div>
                        <div className="comment-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehen.
                          </p>
                        </div>
                        <div className="text-left">
                          <a
                            className="comment-reply font-weight-bold"
                            href="#"
                          >
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Comments end */}
                  </li>
                </ul>
                {/* comments-reply end */}
                <div className="comment d-flex last">
                  <img
                    loading="lazy"
                    className="comment-avatar"
                    alt="author"
                    src="./assets/images/news/avator3.png"
                  />
                  <div className="comment-body">
                    <div className="meta-data">
                      <span className="comment-author mr-3">
                        Genelia Dusteen
                      </span>
                      <span className="comment-date float-right">
                        January 17, 2016 at 1:38 pm
                      </span>
                    </div>
                    <div className="comment-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehen.
                      </p>
                    </div>
                    <div className="text-left">
                      <a className="comment-reply font-weight-bold" href="#">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                {/* Comments end */}
              </li>
              {/* Comments-list li end */}
            </ul>
            {/* Comments-list ul end */}
          </div>
          {/* Post comment end */}
          <div className="comments-form border-box">
            <h3 className="title-normal">Add a comment</h3>
            <form role="form">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="message">
                      <textarea
                        className="form-control required-field"
                        id="message"
                        placeholder="Your Comment"
                        rows={10}
                        required=""
                        defaultValue={""}
                      />
                    </label>
                  </div>
                </div>
                {/* Col 12 end */}
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="name">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        type="text"
                        required=""
                      />
                    </label>
                  </div>
                </div>
                {/* Col 4 end */}
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="email">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        type="email"
                        required=""
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="website">
                      <input
                        className="form-control"
                        id="website"
                        placeholder="Your Website"
                        type="text"
                        required=""
                      />
                    </label>
                  </div>
                </div>
              </div>
              {/* Form row end */}
              <div className="clearfix">
                <button
                  className="btn btn-primary"
                  type="submit"
                  aria-label="post-comment"
                >
                  Post Comment
                </button>
              </div>
            </form>
            {/* Form end */}
          </div>
          {/* Comments form end */}
        </div>
        {/* Content Col end */}
        <div className="col-lg-4">
          <div className="sidebar sidebar-right">
            <div className="widget recent-posts">
              <h3 className="widget-title">Recent Posts</h3>
              <ul className="list-unstyled">

              {displayedNews.map((news) => (
                      <li key={news.id} className="d-flex align-items-center">
                        <div className="posts-thumb">
                          <a href="#">
                            <img
                              loading="lazy"
                              alt="img"
                              src={`http://localhost:5000/${news.image_url}`}
                            />
                          </a>
                        </div>
                        <div className="post-info">
                          <h4 className="entry-title">
                            <a href="#">
                              {news.title}
                            </a>
                          </h4>
                        </div>
                      </li>
                    ))}
                {/* 1st post end*/}
                {/* <li className="d-flex align-items-center">
                  <div className="posts-thumb">
                    <a href="#">
                      <img
                        loading="lazy"
                        alt="img"
                        src="./assets/images/news/news2.jpg"
                      />
                    </a>
                  </div>
                  <div className="post-info">
                    <h4 className="entry-title">
                      <a href="#">
                        Thandler Airport Water Reclamation Facility Expansion
                        Project Named
                      </a>
                    </h4>
                  </div>
                </li> */}
                {/* 2nd post end*/}
                {/* <li className="d-flex align-items-center">
                  <div className="posts-thumb">
                    <a href="#">
                      <img
                        loading="lazy"
                        alt="img"
                        src="./assets/images/news/news3.jpg"
                      />
                    </a>
                  </div>
                  <div className="post-info">
                    <h4 className="entry-title">
                      <a href="#">
                        Silicon Bench And Cornike Begin Construction Solar
                        Facilities
                      </a>
                    </h4>
                  </div>
                </li> */}
                {/* 3rd post end*/}
              </ul>
            </div>
            {/* Recent post end */}
            <div className="widget">
              <h3 className="widget-title">Categories</h3>
              <ul className="arrow nav nav-tabs">
                <li>
                  <a href="#">Construction</a>
                </li>
                <li>
                  <a href="#">Commercial</a>
                </li>
                <li>
                  <a href="#">Building</a>
                </li>
                <li>
                  <a href="#">Safety</a>
                </li>
                <li>
                  <a href="#">Structure</a>
                </li>
              </ul>
            </div>
            {/* Categories end */}
            <div className="widget">
              <h3 className="widget-title">Archives </h3>
              <ul className="arrow nav nav-tabs">
                <li>
                  <a href="#">Feburay 2016</a>
                </li>
                <li>
                  <a href="#">January 2016</a>
                </li>
                <li>
                  <a href="#">December 2015</a>
                </li>
                <li>
                  <a href="#">November 2015</a>
                </li>
                <li>
                  <a href="#">October 2015</a>
                </li>
              </ul>
            </div>
            {/* Archives end */}
            <div className="widget widget-tags">
              <h3 className="widget-title">Tags </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Construction</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Building</a>
                </li>
                <li>
                  <a href="#">Finance</a>
                </li>
                <li>
                  <a href="#">Safety</a>
                </li>
                <li>
                  <a href="#">Contracting</a>
                </li>
                <li>
                  <a href="#">Planning</a>
                </li>
              </ul>
            </div>
            {/* Tags end */}
          </div>
          {/* Sidebar end */}
        </div>
        {/* Sidebar Col end */}
      </div>
      {/* Main row end */}
    </div>
    {/* Conatiner end */}
  </section>
  {/* Main container end */}

  <Footer />
</>

  )
}

export default News;