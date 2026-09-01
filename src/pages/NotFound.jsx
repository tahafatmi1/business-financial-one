import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import Seo from '../components/common/Seo';

export default function NotFound() {
  return <section className="not-found"><Seo title="Page Not Found" /><div><span>404</span><h1>This Opportunity Moved</h1><p>The page you’re looking for doesn’t exist or has a new address.</p><div className="button-row"><Link className="button button--primary" to="/"><Home size={17} /> Return Home</Link><Link className="button button--outline-dark" to="/loan-programs"><ArrowLeft size={17} /> View Programs</Link></div></div></section>;
}
