import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  const year = new Date().getFullYear();

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
                서울, 대한민국 ·{" "}
                <a href="mailto:yyho6623@gmail.com" className="underline decoration-brand-500 decoration-2 underline-offset-2">
                  yyho6623@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="no-print flex flex-wrap gap-2">
            <a
              href="https://github.com/jhyoo93"
              className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
              target="_blank" rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <br />

        <p className="mt-6 max-w-3xl text-slate-700">
          저는 다양한 웹 프로젝트에서 핵심 기능 개발과 서비스 최적화를 담당해온 웹 개발자입니다.<br /><br />
          백엔드에서는 RESTful API를 설계하고 트랜잭션 기반 데이터 처리를 수행했으며, 프론트엔드에서는 SPA 구조와 상태 관리를 최적화하여 사용자 경험을 개선했습니다.<br /><br />
          클라이언트-서버 간 데이터 연동을 주도하여 서비스 확장성과 유지보수성을 극대화했습니다. 레거시 코드 리팩토링을 통해 중복 코드를{" "}
          <strong>20% 이상 제거</strong>하고, 모듈화로 가독성과 재사용성을 <strong>50% 이상 향상</strong>시켰습니다. 또한, <strong>성능 최적화</strong> 작업을 통해 평균 응답 속도를{" "}
          <strong>1.2초에서 0.7초로 단축</strong>하여 시스템 안정성을 크게 개선했습니다. 아울러 Git, Jira 등의 협업 도구를 활용해 효율적인 팀워크와 개발 프로세스를 경험했습니다.
        </p>
      </header>

      {/* Skills */}
      <section id="skills" className="mt-10 card rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
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

      {/* Projects (필요 부분만 발췌) */}
      <section id="projects" className="mt-10 card rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h2 className="text-xl font-bold">Project</h2>
        <div className="mt-6 space-y-6 border-l-2 border-slate-200 pl-6">
          {/* 하나만 예시, 나머지는 동일 패턴으로 추가 */}
          <article className="py-8 md:grid md:grid-cols-12 md:gap-8">
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
              <ul className="mt-2 space-y-2 text-slate-700 list-disc pl-5">
                <li>손익 계산 모듈(계약/예상/실적 비용) 설계·구현</li>
                <li>트랜잭션 기반 승인 워크플로우 구현</li>
                <li><span className="font-semibold">TanStack Query</span> 프리패치로 전환 렌더 비용 최소화</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Education */}
      <section id="experience" className="mt-10 card rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
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
        <p>© <span>{year}</span> Yoo, Jaehwan. All rights reserved.</p>
      </footer>
    </div>
  );
}
