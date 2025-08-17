import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BlogPage from './components/BlogPage';
import AIJobAutomationBlog from './components/AIJobAutomationBlog';
import InstantApplyWithAI from './components/InstantApplyWithAI';
import AIJobApplicationTool from './components/AIJobApplicationTool';
import LinkedInJobAutomation from './components/LinkedInJobAutomation';
import SEO from './components/SEO';

function App() {
  return (
    <Router>
      <div className="App">
        <SEO />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/ai-job-automation" element={<AIJobAutomationBlog />} />
          <Route path="/blog/instant-apply-ai" element={<InstantApplyWithAI />} />
          <Route path="/blog/ai-job-application-tool" element={<AIJobApplicationTool />} />
          <Route path="/blog/linkedin-job-automation" element={<LinkedInJobAutomation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
