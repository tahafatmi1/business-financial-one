import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import LoanPrograms from './pages/LoanPrograms';
import ProgramDetail from './pages/ProgramDetail';
import BusinessFunding from './pages/BusinessFunding';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

export default function App() {
  return <Routes><Route element={<Layout />}><Route path="/" element={<Home />} /><Route path="/loan-programs" element={<LoanPrograms />} /><Route path="/loan-programs/:slug" element={<ProgramDetail />} /><Route path="/business-funding" element={<BusinessFunding />} /><Route path="/about" element={<About />} /><Route path="/how-it-works" element={<HowItWorks />} /><Route path="/faq" element={<FAQ />} /><Route path="/contact" element={<Contact />} /><Route path="/apply" element={<Apply />} /><Route path="/privacy" element={<Legal type="privacy" />} /><Route path="/terms" element={<Legal type="terms" />} /><Route path="/404" element={<NotFound />} /><Route path="*" element={<Navigate to="/404" replace />} /></Route></Routes>;
}
