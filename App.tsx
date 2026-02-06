import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BlogHome from './pages/blog/Home';
import ArticleDetail from './pages/blog/ArticleDetail';
import BlogNavbar from './components/blog/Navbar';
import BlogFooter from './components/blog/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/blog"
          element={
            <div className="flex flex-col min-h-screen bg-white">
              <BlogNavbar />
              <BlogHome />
              <BlogFooter />
            </div>
          }
        />
        <Route
          path="/blog/article/:id"
          element={
            <div className="flex flex-col min-h-screen bg-white">
              <BlogNavbar />
              <ArticleDetail />
              <BlogFooter />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
