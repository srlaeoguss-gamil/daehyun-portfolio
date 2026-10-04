'use client';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './epic2024-v1.0/commons.css'; // 아이콘 fonts
import './epic2024-v1.0/style.css'; // 아이콘 fonts
import './css/typeAni.scss'; // 까만 배경, 초록색 글씨 등 터미널 디자인

export default function TerminalStartup({ onComplete }: { onComplete?: () => void }) {
  // 1. 터미널이 렌더링되는 상태
  const [showTerminal, setShowTerminal] = useState(true);

  // 💡 추가된 상태: 퇴장 애니메이션 실행 여부를 관리합니다.
  const [isHiding, setIsHiding] = useState(false);

  // showTerminal이 false가 되면 아래 렌더링(return)을 건너뜁니다.
  if (!showTerminal) return null;
  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="title">bash - VS Code</span>
        <span className="dot icon-minus"></span>
        <span className="dot icon-expand-04"></span>
        <span
          className="dot icon-xmark"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setIsHiding(true);
            setTimeout(() => {
              document.body.classList.remove('overflow-hidden');
              setShowTerminal(false);
              // 💡 수정된 부분 1: '?'를 추가하여 onComplete가 존재할 때만 호출합니다.
              onComplete?.();
            }, 1000);
          }}
        ></span>
      </div>
      <div className="terminal-body">
        {/* 웹 접근성을 위한 숨김 텍스트 (스크린 리더용) */}

        {/* 실제 화면에 보이는 애니메이션 (스크린 리더는 읽지 않도록 처리) */}
        <TypeAnimation
          sequence={[
            'guest@portfolio:~$ ', // 1. 프롬프트 표시
            50,
            'guest@portfolio:~$ npx load-developer --name "Kim Daehyun"', //
            50,
            `guest@portfolio:~$ npx load-developer --name "Kim Daehyun"\n> Initializing profile...`,
            50,
            `guest@portfolio:~$ npx load-developer --name "Kim Daehyun"\n> Initializing profile...\n> Loading skills: [Next.js, React, SCSS]`, //
            50,
            `guest@portfolio:~$ npx load-developer --name "Kim Daehyun"\n> Initializing profile...\n> Loading skills: [Next.js, React, SCSS]\n> Applying Web Accessibility (KWCAG)... 100% 🟢`,
            100,
            `guest@portfolio:~$ npx load-developer --name "Kim Daehyun"\n> Initializing profile...\n> Loading skills: [Next.js, React, SCSS]\n> Applying Web Accessibility (KWCAG)... 100% 🟢\n\n🚀 김대현의 포트폴리오가 성공적으로 컴파일되었습니다! (in 1992 ms)`,
            100,
            () => {
              setIsHiding(true);

              setTimeout(() => {
                document.body.classList.remove('overflow-hidden');
                setShowTerminal(false);
                // 💡 수정된 부분 2: '?'를 추가하여 onComplete가 존재할 때만 호출합니다.
                onComplete?.();
              }, 1000);
            },
          ]}
          wrapper="span" // 터미널 느낌을 살리기 위해 pre 태그 사용
          cursor={true}
          speed={70} // 타이핑 속도
          className="typing-text"
          aria-hidden="true" // 💡 스크린 리더가 타이핑 중간중간 깨진 글자를 읽지 않도록 방지
        />
      </div>
    </div>
  );
}