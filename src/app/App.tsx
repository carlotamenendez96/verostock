import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LandingPage from '@features/landing/pages/LandingPage';
import { BlogLayout } from '@features/blog/layouts/BlogLayout';
import BlogHome from '@features/blog/pages/BlogHome';
import ArticleDetail from '@features/blog/pages/ArticleDetail';

function AppTitleSync() {
  const { t, i18n } = useTranslation('common');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = t('pageTitle');
    }
  }, [location.pathname, t, i18n.language]);

  return null;
}

const App: React.FC = () => {
  const { i18n } = useTranslation('common');

  useEffect(() => {
    document.documentElement.lang = i18n.language?.startsWith('en') ? 'en' : 'es';
  }, [i18n.language]);

  return (
    <Router>
      <AppTitleSync />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogHome />} />
          <Route path="article/:id" element={<ArticleDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
