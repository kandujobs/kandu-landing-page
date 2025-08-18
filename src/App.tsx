import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BlogPage from './components/BlogPage';
import Apply100JobsInOneDay from './components/Apply100JobsInOneDay';
import BestJobBoardsStudents2025 from './components/BestJobBoardsStudents2025';
import UltimateResumeGuideStudents from './components/UltimateResumeGuideStudents';
import KanduVsLazyApply from './components/KanduVsLazyApply';
import AIJobAutomationBlog from './components/AIJobAutomationBlog';
import InstantApplyWithAI from './components/InstantApplyWithAI';
import AIJobApplicationTool from './components/AIJobApplicationTool';
import LinkedInJobAutomation from './components/LinkedInJobAutomation';
import KanduFAQ from './components/KanduFAQ';
import ResumeOptimizationAI from './components/ResumeOptimizationAI';
import JobSearchAutomation from './components/JobSearchAutomation';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/ultimate-resume-guide-students" element={<UltimateResumeGuideStudents />} />
          <Route path="/blog/kandu-vs-lazyapply" element={<KanduVsLazyApply />} />
          <Route path="/blog/apply-100-jobs-in-one-day" element={<Apply100JobsInOneDay />} />
          <Route path="/blog/best-job-boards-students-2025" element={<BestJobBoardsStudents2025 />} />
          <Route path="/blog/ai-job-automation" element={<AIJobAutomationBlog />} />
          <Route path="/blog/instant-apply-ai" element={<InstantApplyWithAI />} />
          <Route path="/blog/ai-job-application-tool" element={<AIJobApplicationTool />} />
          <Route path="/blog/linkedin-job-automation" element={<LinkedInJobAutomation />} />
          <Route path="/blog/kandu-faq" element={<KanduFAQ />} />
          <Route path="/blog/resume-optimization-ai" element={<ResumeOptimizationAI />} />
          <Route path="/blog/job-search-automation" element={<JobSearchAutomation />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
