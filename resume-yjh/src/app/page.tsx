/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";

export default function Page() {
  const year = new Date().getFullYear();

  // 다크모드 재적용 로직(원본 스크립트 이식)
  useEffect(() => {
    const root = document.documentElement;
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved === "dark") root.classList.add("dark");

    const applyDark = () => {
      if (root.classList.contains("dark")) {
        document.body.classList.remove("from-slate-50", "to-slate-100");
        document.body.classList.add("from-slate-900", "to-slate-950", "text-slate-100");
        document.querySelectorAll<HTMLElement>(".card").forEach((el) => {
          el.classList.remove("bg-white", "border-slate-200");
          el.classList.add("bg-slate-900/70", "border-slate-800");
        });
      } else {
        document.body.classList.add("from-slate-50", "to-slate-100", "text-slate-800");
        document.body.classList.remove("from-slate-900", "to-slate-950", "text-slate-100");
        document.querySelectorAll<HTMLElement>(".card").forEach((el) => {
          el.classList.add("bg-white", "border-slate-200");
          el.classList.remove("bg-slate-900/70", "border-slate-800");
        });
      }
    };
    applyDark();
    const mo = new MutationObserver(applyDark);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Header Card */}
      <header className="card relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            {/* image */}
            <div className="flex-shrink-0">
              <img
                src="/image/yoo.jpeg" // 실제 이미지 경로로 변경하세요.
                alt="유재환 프로필 사진"
                className="w-30 h-40 object-cover rounded-lg md:w-49 md:h-60"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2 md:space-y-3"> {/* 텍스트 블록 내부 수직 정렬 및 간격 조정 */}
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">유재환</h1> {/* 이름 크기 */}
              <p className="text-lg font-medium text-slate-600 dark:text-slate-400">웹개발자 · 풀스택</p> {/* 직무 크기 */}
              {/* 이메일 및 전화번호 정보 (수정된 코드 적용) */}
              <br />
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Tel. 010.2065.9321
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Email. yyho6623@gmail.com               
              </p>             
            </div>
          </div>
          {/* <div className="no-print flex flex-wrap gap-2">
            <a
              href="https://github.com/jhyoo93"
              className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div> */}
        </div>

        <br />

        <p className="mt-6 max-w-3xl text-slate-700">
          저는 다양한 웹 프로젝트에서 핵심 기능 개발과 서비스 최적화를 담당해온 웹 개발자입니다.<br />
          <br />
          백엔드 영역에서는 RESTful API를 설계하고, 트랜잭션 기반의 데이터 처리 및 비즈니스 로직 구현을 통해 안정적인 시스템 아키텍처를 구축해왔습니다.
          프론트엔드에서는 SPA 기반으로 상태 관리와 렌더링 성능을 개선해 사용자 경험을 높였습니다.<br />
          <br />
          특히 클라이언트-서버 간 데이터 연동을 체계적으로 설계하고 구현함으로써 서비스의 확장성과 유지보수성을 크게 향상시켰습니다. 또한,
          레거시 코드 리팩토링을 통해 <strong>중복 코드를 20% 이상</strong> 제거하고, 코드 모듈화를 통해 <strong>가독성과 재사용성을 50% 이상</strong> 개선한 경험이 있습니다.<br />
          <br />
          시스템 전반의 성능 개선을 위해 주요 API의 로직을 최적화하여, 평균 응답 속도를 <strong>1.2초에서 0.7초</strong>로 단축시키는 등
          서비스 안정성과 사용자 만족도를 높이는 데 기여했습니다.<br />
          <br />
          
          이외에도 Git, Jira 등 다양한 협업 도구를 활용하여 효율적인 팀 개발 프로세스와 커뮤니케이션을 실현해왔습니다.<br />
          <br />

          현재는 개발자로서의 역량을 한층 더 확장하기 위해 iOS 앱 개발 부트캠프에 참여하여 모바일 개발을 학습 중이며,<br />
          동시에 Vue.js와 JPA를 심화 학습하여 풀스택 개발자로서의 기술 깊이와 범위를 넓혀가고 있습니다.<br />
          <br />

        </p>
      </header>

      {/* Skills */}
      <section
        id="skills"
        className="mt-10 card rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
      >
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="mt-6 space-y-6 border-l-2 border-slate-200 pl-6">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-500">Web · Server</h3>
            <div className="flex flex-wrap gap-2">
              <span className="chip">Vue</span>
              <span className="chip">React</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Spring Boot</span>
              <span className="chip">JPA</span>
              <span className="chip">MySQL</span>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-500">iOS</h3>
            <div className="flex flex-wrap gap-2">
              <span className="chip">Swift</span>
              <span className="chip">UIKit</span>
              <span className="chip">SwiftUI</span>
              <span className="chip">CoreData</span>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-500">Infra · DevOps</h3>
            <div className="flex flex-wrap gap-2">
              <span className="chip">GitHub</span>
              <span className="chip">GitLab</span>
              <span className="chip">Jira</span>
              <span className="chip">Notion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-10 card rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h2 className="text-xl font-bold">Project</h2>

        {/* 아이템 간 구분선만 사용 */}
        <div className="mt-6 space-y-6 border-l-2 border-slate-200 pl-6">
          {/* 1) 엘루오씨앤씨 / PMR */}
          <article className="py-8 md:grid md:grid-cols-12 md:gap-8 md:items-start">
            <div className="md:col-span-4 space-y-3">
              <div className="text-sm text-slate-500">엘루오씨앤씨 / PMR 내부 관리 시스템</div>
              <div className="font-semibold">25.03 – 25.06</div>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Express</span>
                <span className="badge">React.js</span>
                <span className="badge">Node.js</span>
                <span className="badge">JavaScript</span>
                <span className="badge">Zustand</span>
                <span className="badge">TanStack Query</span>
                <span className="badge">TailwindCSS</span>
              </div>
            </div>
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-lg font-semibold">개요</h3>
              <p className="text-slate-700">웹 기반 프로젝트 통합 관리 시스템 신규 구축</p>
              <h4 className="mt-4 text-sm font-semibold text-slate-500">구현 기능</h4>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-slate-700">
                <li>손익 계산 모듈(계약/예상/실적 비용) 설계·구현</li>
                <li>인력 투입 월별 공수, 급여 단가 기반 데이터 처리 로직 개발</li>
                <li>일별 업무 기록 및 승인 워크플로우 구현 (트랜잭션 기반 승인 처리)</li>
                <li><span className="font-semibold">Express</span> 기반 REST API 설계 및 서버 사이드 로직 개발</li>
                <li><span className="font-semibold">TanStack Query</span> 캐시/프리패치로 탭 전환 재렌더 최소화</li>
                <li>불필요 호출 억제를 위해 <span className="font-semibold">Zustand</span> 전역 상태관리</li>
                <li>카테고리별 캐시 정책 튜닝(문서 전용)</li>
              </ul>
            </div>
          </article>

          {/* 2) 미래엔 / M카이브 */}
          <article className="py-8 md:grid md:grid-cols-12 md:gap-8 md:items-start">
            <div className="md:col-span-4 space-y-3">
              <div className="text-sm text-slate-500">미래엔 / M카이브</div>
              <div className="font-semibold">24.02 – 24.04</div>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Spring FrameWork</span>
                <span className="badge">JavaScript</span>
                <span className="badge">Thymeleaf</span>
                <span className="badge">MyBatis</span>
                <span className="badge">JQuery</span>
              </div>
            </div>
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-lg font-semibold">개요</h3>
              <p className="text-slate-700">초·중·고 대상의 온라인 강의 플랫폼 신규 구축</p>
              <h4 className="mt-4 text-sm font-semibold text-slate-500">구현 기능</h4>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-slate-700">
                <li>검색 흐름 재정비로 응답 속도 <span className="font-semibold">44% 개선</span> (480ms → 270ms)</li>
                <li>콘텐츠 관리 <span className="font-semibold">REST API</span> 설계/구현으로 운영 효율화</li>
                <li>핵심 화면 구조 단순화로 사용자 흐름 개선</li>
                <li>JavaScript 모듈화로 중복 제거 & 결합도 완화</li>
              </ul>
            </div>
          </article>

          {/* 3) 콜러키친 */}
          <article className="py-8 md:grid md:grid-cols-12 md:gap-8 md:items-start">
            <div className="md:col-span-4 space-y-3">
              <div className="text-sm text-slate-500">콜러키친</div>
              <div className="font-semibold">23.12 – 24.02</div>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Vue.js</span>
                <span className="badge">Spring FrameWork</span>
                <span className="badge">Node.js</span>
                <span className="badge">MySQL</span>
                <span className="badge">Mybatis</span>
              </div>
            </div>
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-lg font-semibold">개요</h3>
              <p className="text-slate-700">브랜드 홍보용 웹사이트 신규 구축</p>
              <h4 className="mt-4 text-sm font-semibold text-slate-500">구현 기능</h4>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <span className="font-semibold">Vue 3 기반 SPA</span>로 개발하여 초기 렌더링 성능을 약 <span className="font-semibold">25%</span> 개선하였으며,
                  <br />
                  <strong>Composition API</strong>를 활용한 모듈화로 코드 가독성 및 재사용성을 향상
                </li>
                <li>
                  <span className="font-semibold">Vuex</span>를 활용하여 전역 상태 관리의 복잡성을 해소하고,
                  관리자 <span className="font-semibold">CRUD</span> 변경 사항이 사용자 화면에 실시간으로 반영되도록 반응형 데이터 구조 설계
                </li>
                <li>
                  <strong>Vue Router</strong>를 통한 페이지 네비게이션 최적화 및 <span className="font-semibold">Lazy Loading</span> 적용으로 초기 로딩 성능을 추가적으로 확보했습니다.
                </li>
                <li><span className="font-semibold">Spring + MyBatis</span> REST API 설계/구현 및 배포 파이프라인 고도화</li>
              </ul>
            </div>
          </article>

          {/* 4) 유지운영 */}
          <article className="py-8 md:grid md:grid-cols-12 md:gap-8 md:items-start">
            <div className="md:col-span-4 space-y-3">
              <div className="text-sm text-slate-500">신세계, 파라다이스, 서울척병원 / 유지운영</div>
              <div className="font-semibold">22.08 – 25.02</div>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Spring FrameWork</span>
                <span className="badge">Node.js</span>
                <span className="badge">JQuery</span>
                <span className="badge">JavaScript</span>
                <span className="badge">MySQL</span>
                <span className="badge">Mybatis</span>
              </div>
            </div>
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-lg font-semibold">개요</h3>
              <p className="text-slate-700">고객사 서비스 유지보수 및 <span className="font-semibold">성능 최적화</span></p>
              <h4 className="mt-4 text-sm font-semibold text-slate-500">구현 기능</h4>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-slate-700">
                <li>요구 기반 개선·신규 기능 지속 제공, 주요 장애 감소</li>
                <li>관리자 데이터 관리 기능 정비로 운영 생산성 향상</li>
                <li>비회원 로그인 기반 문의/조회 서비스 추가 및 UI/UX 개선</li>
                <li>카카오 알림톡 API 개선 및 연동 안정화</li>
                <li><span className="font-semibold">코드 중복률 20%+</span> 감소, <span className="font-semibold">장애 15%</span> 감소</li>
              </ul>
            </div>
          </article>
        </div>
      </section>



      {/* Education */}
      <section
        id="experience"
        className="mt-10 card rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
      >
        <h2 className="text-xl font-bold">Education</h2>
        <div className="mt-6 space-y-6 border-l-2 border-slate-200 pl-6">
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              <div className="flex items-center justify-between">
                <span className="font-semibold">JAVA 웹프로그래밍[과정평가형]</span>
                <span className="text-sm text-slate-500">2021.12 – 2022.06</span>
              </div>
              <p className="text-sm text-slate-600">Java, Spring, MyBatis, JavaScript</p>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="font-semibold">ESTsoft Frontier iOS Bootcamp (3기)</span>
                <span className="text-sm text-slate-500">2025.06 – 진행중</span>
              </div>
              <p className="text-sm text-slate-600">Swift, UIKit, SwiftUI, CoreData</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Link */}
      {/* <section
        id="experience"
        className="mt-10 card rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
      >

      <h2 className="text-xl font-bold">Education</h2>
        <div className="mt-6 space-y-6 border-l-2 border-slate-200 pl-6">
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              <div className="flex items-center justify-between">
                <span className="font-semibold">JAVA 웹프로그래밍[과정평가형]</span>
                <span className="text-sm text-slate-500">2021.12 – 2022.06</span>
              </div>
              <p className="text-sm text-slate-600">Java, Spring, MyBatis, JavaScript</p>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="font-semibold">ESTsoft Frontier iOS Bootcamp (3기)</span>
                <span className="text-sm text-slate-500">2025.06 – 진행중</span>
              </div>
              <p className="text-sm text-slate-600">Swift, UIKit, SwiftUI, CoreData</p>
            </li>
          </ul>
        </div>  

      </section> */}

      {/* Footer */}
      <footer className="mt-10 flex items-center justify-between text-sm text-slate-500">
        <p>
          © <span>{year}</span> Yoo, Jaehwan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}