import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div className={`accordion__item ${expanded ? 'is-open' : ''}`} key={item.question}>
            <h3>
              <button aria-expanded={expanded} aria-controls={`faq-panel-${index}`} onClick={() => setOpen(expanded ? -1 : index)}>
                <span>{item.question}</span><Plus aria-hidden="true" />
              </button>
            </h3>
            <div id={`faq-panel-${index}`} className="accordion__panel" role="region" aria-hidden={!expanded}>
              <div><p>{item.answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
