import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const NewsAdmin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [quote, setQuote] = useState('');
  const [quote_source, setQuoteSource] = useState('');
  const [additional_content, setAdditionalContent] = useState('');
  const [newsDate, setNewsDate] = useState(''); // Use consistent state name
  const [image, setImage] = useState(null);
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    axios.get('http://localhost:5000/api/news')
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('quote', quote);
    formData.append('quote_source', quote_source);
    formData.append('additional_content', additional_content);
    formData.append('news_date', newsDate); // Ensure the correct field name is used
    if (image) formData.append('image', image);

    const url = editingNews ? `http://localhost:5000/api/news/${editingNews.id}` : 'http://localhost:5000/api/news';
    const method = editingNews ? 'put' : 'post';

    axios({ method, url, data: formData })
      .then(() => {
        fetchNews(); // Refresh news list
        setEditingNews(null); // Clear form after save
        setTitle(''); // Reset state
        setContent(''); // Reset state
        setQuote(''); // Reset state
        setQuoteSource(''); // Reset state
        setAdditionalContent(''); // Reset state
        setNewsDate(''); // Reset state
        setImage(null); // Reset state
      })
      .catch(error => {
        console.error('Error saving news article:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/news/${id}`)
      .then(() => {
        setNews(news.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error deleting news:', error);
      });
  };

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);
    setTitle(newsItem.title);
    setContent(newsItem.content);
    setQuote(newsItem.quote); // Set quote when editing
    setQuoteSource(newsItem.quote_source); // Set quote when editing
    setAdditionalContent(newsItem.additional_content); // Set quote when editing
    setNewsDate(newsItem.news_date); // Ensure correct date state is set
    setImage(null); // Reset image since we're not editing it
  };

  return (
    <>
      <Sidebar />
      <div className="content-admin" id="content-admin">
        <h2 style={{ textAlign: 'center' }}>{editingNews ? 'Edit News Article' : 'Add News Article'}</h2>
        <form onSubmit={handleSubmit} className="form-admin">
          <div className="form-group-admin">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-control-admin"
            />
          </div>
          <div className="form-group-admin">
            <label>Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="form-control-admin"
            />
          </div>
          <div className="form-group-admin">
            <label>Quote:</label>
            <textarea
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              required
              className="form-control-admin"
            />
          </div>
          <div className="form-group-admin">
            <label>Source Quote:</label>
            <input
              value={quote_source}
              onChange={(e) => setQuoteSource(e.target.value)}
              required
              className="form-control-admin"
            />
          </div>
          <div className="form-group-admin">
            <label>Additional Content:</label>
            <textarea
              value={additional_content}
              onChange={(e) => setAdditionalContent(e.target.value)}
              required
              className="form-control-admin"
            />
          </div>
          <div className="form-group-admin">
            <label>Date:</label>
            <input
              type="date"
              value={newsDate} // Bind the correct state
              onChange={(e) => setNewsDate(e.target.value)} // Update the correct state
              required
              className="form-control-admin"
            />
          </div>
          <div className="form-group-admin">
            <label>Image:</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control-admin"
            />
          </div>
          <button type="submit" className="btn-admin">Save</button>
        </form>

        <div className="news-list-admin">
          <h2>News Articles</h2>
          <div>
            {news.map(item => (
              <div key={item.id} className="news-card-admin">
                {item.image_url && <img src={`http://localhost:5000/${item.image_url}`} alt={item.title} className="news-image-admin" />}
                <div className="entry-meta">
                  <span className="post-date">{new Date(item.news_date).toLocaleDateString()}</span>
                </div>
                <h2 className="entry-title">
                {item.title}
                </h2>
                <div className="entry-content">
                <p>{item.content}</p>
                <blockquote>
                  <p>
                    {item.quote}<cite>- {item.quote_source}</cite>
                  </p>
                </blockquote>
                <p>
                  {item.additional_content}
                </p>
                </div>
                <button onClick={() => handleEdit(item)} className="btn-admin">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="btn-admin">Delete</button>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAdmin;
