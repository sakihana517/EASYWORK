import "./InterviewInvite.css";

import {
  ArrowLeft,
  Phone,
  UserRound,
  Briefcase,
  Clock3,
  FileQuestion,
  CheckCircle2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function InterviewInvite() {

  const navigate = useNavigate();

  return (

    <div className="invite-page">

      {/* 顶部 */}

      <header className="invite-header">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>AI面试官已就绪</h1>

      </header>

      {/* AI面试官 */}

      <section className="invite-card">

        <div className="avatar-box">

          <UserRound size={48}/>

        </div>

        <h2>高级AI面试官</h2>

        <p>
          已根据你的简历生成专属问题
        </p>

      </section>

      {/* 面试信息 */}

      <section className="info-card">

        <div className="info-item">

          <Briefcase size={18}/>

          <span>目标岗位</span>

          <strong>UI设计师</strong>

        </div>

        <div className="info-item">

          <Clock3 size={18}/>

          <span>预计时长</span>

          <strong>15分钟</strong>

        </div>

        <div className="info-item">

          <FileQuestion size={18}/>

          <span>问题数量</span>

          <strong>15题</strong>

        </div>

      </section>

      {/* 考察内容 */}

      <section className="skill-card">

        <h3>重点考察内容</h3>

        <div className="skill-item">
          <CheckCircle2 size={16}/>
          项目经历
        </div>

        <div className="skill-item">
          <CheckCircle2 size={16}/>
          专业能力
        </div>

        <div className="skill-item">
          <CheckCircle2 size={16}/>
          岗位匹配度
        </div>

        <div className="skill-item">
          <CheckCircle2 size={16}/>
          沟通表达能力
        </div>

      </section>

      {/* 呼叫状态 */}

      <div className="calling-box">

        <div className="phone-wave">

          <Phone size={30}/>

        </div>

        <p>AI正在呼叫你...</p>

      </div>

      {/* 接受面试 */}

      <button
        className="accept-btn"
        onClick={() => navigate("/interview-call")}
      >

        <Phone size={20}/>

        接受面试

      </button>

    </div>

  );
}

export default InterviewInvite;