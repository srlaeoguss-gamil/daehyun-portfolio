'use client';
import { useState, useEffect, useRef } from 'react';
import Modal from './element/modal';
import Image from 'next/image';
//이미지 모음///
import Icon1 from './img/icon1.png';
import IconCss from './img/css3.webp';
import IconSass from './img/sass.png';
import IconVs from './img/vscord.webp';
import IconGit from './img/github.png';
import IconModule from './img/module.png';
import ImgJNF from './img/JNFLogo.png';
//이미지 모음///
import TypeAni from'./element/typeAni';
import KdLogo from'./element/KdLogo';
import Accordion from'./element/accordion';
import Accordion2 from'./element/accordion2';
import ProjectModal from './element/projectmodal'; // 💡 [추가] 통합 모달 임포트
import { InfoData, InfoDataItem } from './element/Data'; // 💡 [추가] 데이터 임포트
import './page.scss'; 
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isChild2Visible, setIsChild2Visible] = useState(false);
  const [isChild3Visible, setIsChild3Visible] = useState(false);
  const [isChild4Visible, setIsChild4Visible] = useState(false);
  
  const child2Ref = useRef<HTMLDivElement>(null);
  const child3Ref = useRef<HTMLDivElement>(null);
  const child4Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Intersection Observer 인스턴스 생성
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 브라우저 뷰포트에 지정한 요소가 15% 이상 들어왔을 때
          if (entry.isIntersecting) {
            setIsChild2Visible(true); // 상태를 true로 변경하여 CSS 클래스 활성화
            setIsChild3Visible(true); 
            setIsChild4Visible(true); 
            observer.unobserve(entry.target); // 한 번 애니메이션이 실행된 후에는 불필요한 관찰 중지
          }
        });
      },
      { 
        threshold: 0.3 // 요소가 15% 노출되었을 때 콜백 함수를 실행 
      }
    );

    const currentElement = child2Ref.current;
    const currentElement2 = child3Ref.current;
    const currentElement3 = child4Ref.current;
    // 관찰할 대상 요소가 존재한다면 Observer 등록
    if (currentElement) {
      observer.observe(currentElement);
    }
    if (currentElement2) {
      observer.observe(currentElement2);
    }
    if (currentElement3) {
      observer.observe(currentElement3);
    }
    // 컴포넌트가 언마운트(화면에서 사라짐)될 때 메모리 누수 방지를 위해 Observer 해제
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      if (currentElement2) {
        observer.unobserve(currentElement2);
      }
      if (currentElement3) {
        observer.unobserve(currentElement3);
      }
    };
  }, []);
  // 💡 [추가] 통합 모달 상태 및 데이터 관리
  const [selectedItem, setSelectedItem] = useState<InfoDataItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 💡 [추가] skillCareer + skillCareer2 합쳐서 단일 detailList 생성
  const detailList = [
    ...(InfoData.skillCareer || []),
    ...(InfoData.skillCareer2 || []),
  ].filter((item) => Boolean(item.isDetails));
  // 💡 [추가] 아코디언 아이템 클릭 시 모달 열기 핸들러
  const handleOpenModal = (item: InfoDataItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  return (
    <div>
      <div id="intro" className={`child1 ${isTypingDone ? 'ani-on' : ''}`}>
        <TypeAni onComplete={() => setIsTypingDone(true)} />
        <div className={'child1-box'}>
          <KdLogo/>

        </div>
        
      </div>
      <div id="profile" ref={child2Ref} className={`child2 ${isChild2Visible ? 'active' : ''}`}>
        <div className={'child2-box'}>
          <p className="top-title">
            Developer Profile
          </p>
          <div className="row-cols-12px">
            <div className="col-12 col-xl ani-1">
              <div className="txtbox">
                <h3>"탄탄한 마크업과 웹 접근성 기반 위에,<em></em><br/><em></em> 모던 프론트엔드의 가치를 더합니다."</h3>
                <p>안녕하세요, 프론트엔드 개발자 김대현입니다.<br/><br/>
                  저는 웹퍼블리셔로서 다져온 깊이 있는 마크업 구조화, 유지보수 가능한 CSS 아키텍처, 그리고 철저한 웹 접근성(KWCAG / WAI-ARIA) 준수를 바탕으로 누구나 평등하게 이용할 수 있는 웹 환경을 구축합니다.<br/><br/>여기에 그치지 않고, React와 Next.js를 활용한 컴포넌트 설계와 인터랙션 구현 등 프론트엔드 역량을 지속적으로 확장해 나가고 있습니다. 시각적인 완성도와 코드의 기술적 깊이를 모두 놓치지 않는 성장하는 개발자가 되겠습니다.
                  </p>
              </div>
            </div>
            <div className="col-12 col-xl ani-2">
              <div className="listbox">
                <div className="row-cols-12px">
                  <div className=" col-12">
                    <div className="box1">
                      <Image src={Icon1} alt=""/>
                      <div className="txtbox1">
                        <p className="">
                         웹 접근성 표준 준수 (Web Accessibility)
                        </p>
                        <span>KWCAG 및 WAI-ARIA 지침을 완벽히 준수하여, 시각장애인 스크린 리더<br/>등 정보 소외 계층 없는 평등한 웹 환경을 구축합니다.</span>
                        <em>#시맨틱마크업</em> <em>#스크린리더최적화</em> <em>#WCAG준수</em>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className="box2">
                      <p className="txt1"><i className="icon-layout"></i>스타일링 및 아키텍처<span> (Styling & Architecture)</span></p>
                      <ul>
                        <li>
                          <Image src={IconSass} alt=""/>
                          <div className="txts">
                            <p>SCSS / SASS</p>
                            <span>고급 활용</span> <span>믹스인/함수형 프로그래밍</span>
                          </div>
                        </li>
                         <li>
                          <Image src={IconCss} alt=""/>
                          <div className="txts">
                            <p>CSS Modules</p>
                            <span>모듈화된 스타일</span> <span>애니메이션 구현</span>
                          </div>
                        </li>
                        <li>
                          <Image src={IconModule} alt=""/>
                          <div className="txts">
                            <p>Custom Utility Architecture</p>
                            <span>자체 유틸리티 체계 </span><span>직관적 네이밍 및 재사용성 설계</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className="box2">
                      <p className="txt1"><i className="icon-settings-01"></i>표준 및 도구 <span>(Standards & Tools)</span></p>
                      <ul>
                        <li>
                          <Image src={IconGit} alt=""/>
                          <div className="txts">
                            <p>Git / GitHub</p>
                            <span>버전 관리 </span> <span>협업 및 배포</span>
                          </div>
                        </li>
                         <li>
                          <Image src={IconVs} alt=""/>
                          <div className="txts">
                            <p>VS Code</p>
                            <span>주력 개발 환경 </span> <span>생산성 확장 프로그램</span>
                          </div>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  id="projects" ref={child3Ref} className={`child3 ${isChild3Visible ? 'active' : ''}`}>
        <div className={'child3-box'}>
          <p className="top-title">
            Work Experience & Projects
          </p>
          <div className="row-cols-12px">
            <div className="col-12">
              <div className="box1">
                <Image src={ImgJNF} alt=""/>
                <div className="txtbox">
                  <p>(주)제이앤에프커뮤니케이션</p>
                  <span>[2024.03 ~] SW개발 | UI/UX 개발</span>
                </div>
              </div>
            </div>
            {/* 💡 [수정] 각각의 아코디언에 onItemClick 전달 */}
            <div className="col-12 col-xl ani-1">
              <Accordion onItemClick={handleOpenModal} />
            </div>
            <div className="col-12 col-xl ani-2">
              <Accordion2 onItemClick={handleOpenModal} />
            </div>
          </div>
          
        </div>
        {/* 💡 [추가] 통합 모달: Home 최하단에서 단 1개만 실행 */}
        <ProjectModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          selectedItem={selectedItem}
          onSelectItem={setSelectedItem}
          detailList={detailList}
        />
      </div>
      <div  ref={child4Ref} className={`child4 ${isChild4Visible ? 'active' : ''}`}>
        
      </div>
    </div>
  );
}
