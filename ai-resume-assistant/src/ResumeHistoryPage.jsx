import "./ResumeHistoryPage.css";

import {
  ArrowLeft,
  FileText,
  Plus,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function ResumeHistoryPage() {

  const navigate = useNavigate();

  const resumes = [
    {
      id: 1,
      title: "UI设计师简历",
      date: "2026-06-24",
    },
    {
      id: 2,
      title: "产品经理简历",
      date: "2026-06-18",
    },
    {
      id: 3,
      title: "新媒体运营简历",
      date: "2026-06-12",
    },
  ];

  return (

    <div className="resume-history-page">

      {/* 顶部 */}

      <header className="history-header">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>我的简历</h1>

      </header>

      {/* 简介卡片 */}

      <section className="summary-card">

        <h2>已创建简历</h2>

        <p>
          在这里查看和管理所有生成过的简历，
          可随时打开继续编辑或预览。
        </p>

      </section>

      {/* 简历列表 */}

      <section className="resume-list">

        {resumes.map((resume) => (

          <div
            key={resume.id}
            className="resume-card"
            onClick={() => navigate("/preview")}
          >

            <div className="resume-left">

              <div className="resume-icon">

                <FileText size={22}/>

              </div>

              <div>

                <h3>{resume.title}</h3>

                <div className="resume-date">

                  <CalendarDays size={14}/>

                  <span>{resume.date}</span>

                </div>

              </div>

            </div>

            <ChevronRight size={18}/>

          </div>

        ))}

      </section>

      {/* 新建按钮 */}

      <button
        className="create-btn"
        onClick={() => navigate("/resume")}
      >

        <Plus size={18}/>

        创建新简历

      </button>

    </div>

  );
}

export default ResumeHistoryPage;