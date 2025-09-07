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
            <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-2xl font-extrabold text-white shadow-soft">
              YJH
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">유재환</h1>
              <p className="mt-1 text-slate-600">웹개발자 · 풀스택</p>
              <p className="mt-1 text-sm text-slate-500">
                <a
                  href="mailto:yyho6623@gmail.com"
                  className="underline decoration-brand-500 decoration-2 underline-offset-2"
                >
                  <span className="inline-flex items-center gap-1"> {/* 아이콘 추가를 위한 flex */}
                    ✉️ yyho6623@gmail.com
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className="no-print flex flex-wrap gap-2">
            <a
              href="https://github.com/jhyoo93"
              className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <br />

        <p className="mt-6 max-w-3xl text-slate-700">
          저는 다양한 웹 프로젝트에서 핵심 기능 개발과 서비스 최적화를 담당해온 웹 개발자입니다.<br />
          <br />
          백엔드에서는 RESTful API를 설계하고 트랜잭션 기반 데이터 처리를 수행했으며, 프론트엔드에서는 SPA 구조와 상태
          관리를 최적화하여 사용자 경험을 개선했습니다.<br />
          <br />
          클라이언트-서버 간 데이터 연동을 주도하여 서비스 확장성과 유지보수성을 극대화했습니다. 레거시 코드 리팩토링을 통해
          중복 코드를 <strong>20% 이상 제거</strong>하고, 모듈화로 가독성과 재사용성을 <strong>50% 이상 향상</strong>
          시켰습니다. 또한, <strong>성능 최적화</strong> 작업을 통해 평균 응답 속도를{" "}
          <strong>1.2초에서 0.7초로 단축</strong>하여 시스템 안정성을 크게 개선했습니다. 아울러 Git, Jira 등의 협업 도구를
          활용해 효율적인 팀워크와 개발 프로세스를 경험했습니다.
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
              <ul className="mt-2 list-disc pl-5 space-y-2 text-slate-700">
                <li><span className="font-semibold">Vue 3 기반 SPA</span>로 초기 렌더 비용 약 <span className="font-semibold">25%</span> 절감</li>
                <li>관리자 <span className="font-semibold">CRUD</span> 변경이 사용자 화면에 자연 반영되도록 동기 구조 개선</li>
                <li><span className="font-semibold">Spring + MyBatis</span> REST API 설계/구현 및 배포 파이프라인 고도화</li>
                <li>핵심지표 개선: <span className="font-semibold">LCP 3.25s → 1.9s</span>, CLS 안정화</li>
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
              <h4 className="mt-4 text-sm font-semibold text-slate-500">팀 내 역할</h4>
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

      {/* Footer */}
      <footer className="mt-10 flex items-center justify-between text-sm text-slate-500">
        <p>
          © <span>{year}</span> Yoo, Jaehwan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}