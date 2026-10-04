'use client';

import { useState } from 'react';
import './css/footer.scss'; 
export default function Footer({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('srlaeogus2s@naver.com'); // 실제 이메일로 변경
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
   <footer className="footer-wrap">
      <div className="terminal-container">
        {/* 터미널 상단 윈도우 바 */}
        <div className="terminal-header">
          <span className="title">bash - session_finish.sh</span>
          <div className="window-controls">
            <span className="dot icon-minus" aria-label="최소화"></span>
            <span className="dot icon-expand-04" aria-label="최대화"></span>
            <span
              className="dot icon-xmark"
              style={{ cursor: 'pointer' }}
              onClick={handleScrollTop}
              aria-label="상단으로 이동"
            ></span>
          </div>
        </div>

        {/* 터미널 본문 */}
        <div className="terminal-body">
          <p className="cmd-line">
            <span className="prompt">guest@portfolio:~$</span> npx complete-review --status "SUCCESS"
          </p>

          <div className="terminal-output">
            <p className="log-item">&gt; Portfolio review completed successfully!</p>
            <p className="log-item">&gt; Accessibility (KWCAG / WAI-ARIA) ... Verified 100% 🟢</p>
            
            <div className="closing-message">
              <p className="msg-title">🚀 [Message from Kim Daehyun]</p>
              <p className="msg-content">
                "탄탄한 마크업과 웹 접근성을 기반으로, 팀에 기여하며 함께 성장하는 웹퍼블리셔가 되겠습니다.<br />
                소중한 시간 내어 포트폴리오를 검토해 주셔서 진심으로 감사드립니다. <strong>잘 부탁드립니다!</strong>"
              </p>
            </div>

            {/* 터미널 내 액션 버튼 그룹 */}
            <div className="terminal-actions">
              <button
                type="button"
                className="term-btn email"
                onClick={handleCopyEmail}
                aria-label="이메일 주소 복사"
              >
                <i className="icon-emails"></i>
                <span>{copied ? '이메일 복사 완료! 🟢' : '이메일 복사하기'}</span>
              </button>

              <a
                href="https://github.com/your-github-id"
                target="_blank"
                rel="noopener noreferrer"
                className="term-btn git"
                aria-label="GitHub 바로가기"
              >
                <i className="icon-github"></i>
                <span>GitHub 바로가기</span>
              </a>

              <button
                type="button"
                className="term-btn top"
                onClick={handleScrollTop}
                aria-label="페이지 맨 위로 이동"
              >
                <span>TOP</span>
                 <i className="icon-chevron-square-up"></i>
              </button>
            </div>

            <p className="copyright-line">
              © 2026 Kim Daehyun. Built with Next.js, Radix UI & SCSS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
