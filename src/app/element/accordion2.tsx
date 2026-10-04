'use client';

import { useState } from 'react';
import { InfoData, InfoDataItem } from './Data';
import './css/accordion.scss';

interface AccordionProps {
  onItemClick: (item: InfoDataItem) => void;
}

export default function Accordion2({ onItemClick }: AccordionProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleToggle = (sectionName: string) => {
    setOpenSection((prev) => (prev === sectionName ? null : sectionName));
  };

  const renderSection = (sectionTitle: string, sectionKey: string, items: InfoDataItem[]) => {
    
    return (
      <section className="accordion-list">
         <div
          className={`accordion-top`}
          id={`${sectionKey}`}
          style={{ cursor: 'pointer' }}
        >
          <h3 className="title">
            <i className={`icon-file-code`}></i>
            {sectionTitle}
          </h3>
        </div>

        <ul>
          {items.map((item, index) => {
            const hasDetails = item.isDetails;

            return (
              <li
                key={index}
                className={`accordion-item ${hasDetails ? 'clickable' : ''}`}
                onClick={() => hasDetails && onItemClick(item)}
              >
                <div className="item-main">
                  <span className="item-title">
                    {hasDetails ? <i className="icon-search-right"></i> : <i className="icon-lock"></i>}
                    {item.title}
                  </span>
                  <span className="item-period">{item.periodOrInfo}</span>
                </div>
                <div className="panel-inner">
                  <p className="sub-info">
                    <strong>담당/상세:</strong> {item.subInfo}
                  </p>
                  {item.confirmDate && (
                    <p className="confirm-info">
                      {!['외주작업', 'KOSA 미인증'].includes(item.confirmDate) ? (
                        <><strong>KOSA 확인일:</strong> {item.confirmDate}</>
                      ) : (
                        <> {item.confirmDate}</>
                      )}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  return (
    <div className="accordion-wrapper">
      {renderSection('25년 이후 및 외주 작업', 'skillCareer2', InfoData.skillCareer2)}
    </div>
  );
}