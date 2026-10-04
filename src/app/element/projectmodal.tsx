'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { InfoDataItem } from './Data';
import './css/modal.scss';
const techStacks = [
  { name: 'HTML5', className: 'btn-black' },
  { name: 'CSS3', className: 'btn-blue' },
  { name: 'SCSS', className: 'btn-red' },
  { name: 'CSS Modules', className: 'btn-mint' },
  { name: 'JavaScript', className: 'btn-yellow' },
];

interface ProjectModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedItem: InfoDataItem | null;
  onSelectItem: (item: InfoDataItem) => void;
  detailList: InfoDataItem[];
}

export default function ProjectModal({
  isOpen,
  onOpenChange,
  selectedItem,
  onSelectItem,
  detailList,
}: ProjectModalProps) {
  const currentIndex = selectedItem
    ? detailList.findIndex((item) => item.title === selectedItem.title)
    : 0;

  // 💡 [수정] 첫 번째 항목일 때 누르면 마지막 항목으로 순환 이동
  const handlePrevItem = () => {
    if (detailList.length === 0) return;
    const prevIndex = currentIndex <= 0 ? detailList.length - 1 : currentIndex - 1;
    onSelectItem(detailList[prevIndex]);
  };

  // 💡 [수정] 마지막 항목일 때 누르면 첫 번째 항목으로 순환 이동
  const handleNextItem = () => {
    if (detailList.length === 0) return;
    const nextIndex = currentIndex >= detailList.length - 1 ? 0 : currentIndex + 1;
    onSelectItem(detailList[nextIndex]);
  };
  
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="custom-modal-bg show" />
        <Dialog.Content className="custom-modal show">

          {/* 좌측 이전 버튼 */}
          <button
            type="button"
            className="btn-blue-subtle bs-m modal-nav-btn prev only-icon"
            onClick={handlePrevItem}
            //disabled={currentIndex <= 0}
            aria-label="이전 항목"
          >
            <i className="icon-chevron-01-left"></i>
          </button>

          {/* 우측 다음 버튼 */}
          <button
            type="button"
            className="btn-blue-subtle bs-m modal-nav-btn next only-icon"
            onClick={handleNextItem}
            //disabled={currentIndex >= detailList.length - 1}
            aria-label="다음 항목"
          >
            <i className="icon-chevron-01-right"></i>
          </button>

          {/* 상단 헤더 */}
          <div className="top">
            <span className="txt1">{selectedItem?.title}</span>
            <Dialog.Close asChild>
              <button
                type="button"
                className="btn-black-named bs-s close"
                onClick={() => onOpenChange(false)}
                aria-label="닫기"
              >
                <i className="icon-xmark"></i>
              </button>
            </Dialog.Close>
          </div>

          <div className="modal-body">
            {/* 이미지 목록 (1개일 때 single-img 적용) */}
            {selectedItem?.images && selectedItem.images.length > 0 && (
              <div
                className={`modal-images view-box1 ${
                  selectedItem.images.length === 1 ? 'single-img' : ''
                }`}
              >
                {selectedItem.images.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`${selectedItem.title} 이미지 ${idx + 1}`}
                    className={`img_${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* 페이지네이션 카운트 및 활성 도트 */}
            <div className="modal-pagination-bar">
              <div className="pagination-count">
                <p className="txt1">{currentIndex + 1}/</p>
                <p className="txt2">{detailList.length}</p>
              </div>

              <div className="pagination-dots">
                {detailList.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => onSelectItem(detailList[idx])}
                    aria-label={`${idx + 1}번째 프로젝트 보기`}
                  />
                ))}
              </div>
            </div>

            {/* 상세 내용 및 기술 스택 박스 */}
            <div className="modal-data-box">
              <div>
                <p>Info</p>
              {selectedItem?.details && selectedItem.details.length > 0 && (
                <ul className="modal-data-list">
                  {selectedItem.details.map((detail, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>
                      • {detail}
                    </li>
                  ))}
                </ul>
              )}
              </div>
              <div>
                <p>Stack</p>
              <ul className="tech-stack-list">
                {techStacks.map((tech, idx) => (
                  <li key={idx}>
                    <p className={`${tech.className} bs-s`} style={{ width: '100%', justifyContent: 'center' }}>
                      <span>{tech.name}</span>
                    </p>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}