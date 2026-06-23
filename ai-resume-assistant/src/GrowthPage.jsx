import "./GrowthPage.css";

import {
  ArrowLeft,
  TrendingUp,
  ClipboardCheck,
  Clock3,
  ChevronRight,
  Award,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function GrowthPage() {

  const navigate = useNavigate();

  return (

    <div className="growth-page">

      <header className="growth-header">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20} />
        </button>

        <h1>职业成长档案</h1>

      </header>

      <section className="growth-hero">

        <h2>
          记录成长
          <br />
          沉淀价值
        </h2>

        <p>
          自动整理项目经历、实习成果与能力成长，
          为下一份简历和面试做好准备。
        </p>

      </section>

      <section className="growth-advice">

        <h3>AI成长建议</h3>

        <p>
          建议持续记录项目经历与工作成果，
          AI将自动提炼可写入简历的亮点内容，
          帮助你建立长期成长档案。
        </p>

      </section>

      <section className="growth-menu">

        <div
          className="menu-card"
          onClick={() => navigate("/growth-review")}
        >

          <div className="menu-icon">
            <ClipboardCheck size={30} />
          </div>

          <div className="menu-content">

            <h3>AI项目复盘</h3>

            <p>
              输入实习或项目经历，
              自动梳理成果与能力亮点
            </p>

          </div>

          <div className="menu-arrow">
            <ChevronRight size={20} />
          </div>

        </div>

        <div
          className="menu-card"
          onClick={() => navigate("/growth-timeline")}
        >

          <div className="menu-icon">
            <Clock3 size={30} />
          </div>

          <div className="menu-content">

            <h3>职业成长时间轴</h3>

            <p>
              按时间沉淀每段成长经历，
              回顾你的职业发展轨迹
            </p>

          </div>

          <div className="menu-arrow">
            <ChevronRight size={20} />
          </div>

        </div>

      </section>

      <section className="growth-stats">

        <div className="stat-card">

          <TrendingUp size={22} />

          <h3>12</h3>

          <span>成长成果</span>

        </div>

        <div className="stat-card">

          <ClipboardCheck size={22} />

          <h3>5</h3>

          <span>项目经历</span>

        </div>

        <div className="stat-card">

          <Award size={22} />

          <h3>18</h3>

          <span>能力标签</span>

        </div>

        <div className="stat-card">

          <Clock3 size={22} />

          <h3>L3</h3>

          <span>成长等级</span>

        </div>

      </section>

    </div>

  );
}

export default GrowthPage;