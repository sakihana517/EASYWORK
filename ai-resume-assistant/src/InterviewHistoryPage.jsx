import "./InterviewHistoryPage.css";

import {
  ArrowLeft,
  Mic,
  CalendarDays,
  ChevronRight,
  Plus,
  Trophy,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function InterviewHistoryPage() {

  const navigate = useNavigate();

  const interviews = [
    {
      id: 1,
      position: "UI设计师模拟面试",
      score: 85,
      date: "2026-06-24",
    },
    {
      id: 2,
      position: "产品经理模拟面试",
      score: 78,
      date: "2026-06-20",
    },
    {
      id: 3,
      position: "新媒体运营模拟面试",
      score: 91,
      date: "2026-06-15",
    },
  ];

  return (

    <div className="interview-history-page">

      {/* 顶部 */}

      <header className="history-header">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>面试记录</h1>

      </header>

      {/* 说明卡片 */}

      <section className="summary-card">

        <h2>模拟面试档案</h2>

        <p>
          查看所有历史模拟面试记录，
          回顾表现得分与能力分析，
          持续追踪求职成长情况。
        </p>

      </section>

      {/* 记录列表 */}

      <section className="interview-list">

        {interviews.map((item) => (

          <div
            key={item.id}
            className="interview-card"
            onClick={() => navigate("/report")}
          >

            <div className="interview-left">

              <div className="interview-icon">

                <Mic size={22}/>

              </div>

              <div className="interview-info">

                <h3>{item.position}</h3>

                <div className="interview-date">

                  <CalendarDays size={14}/>

                  <span>{item.date}</span>

                </div>

              </div>

            </div>

            <div className="score-box">

              <Trophy size={16}/>

              <span>{item.score}</span>

            </div>

            <ChevronRight size={18}/>

          </div>

        ))}

      </section>

      {/* 开始新面试 */}

      <button
        className="start-btn"
        onClick={() => navigate("/interview")}
      >

        <Plus size={18}/>

        开始新的模拟面试

      </button>

    </div>

  );
}

export default InterviewHistoryPage;