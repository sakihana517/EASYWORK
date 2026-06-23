import "./GrowthResultPage.css";

import {
  ArrowLeft,
  Briefcase,
  Target,
  TrendingUp,
  Clock3,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function GrowthResultPage() {

  const navigate = useNavigate();

  return (

    <div className="growth-result-page">

      <header className="result-header">

        <button
          className="back-btn"
          onClick={() => navigate("/growth-review")}
        >
          <ArrowLeft size={20} />
        </button>

        <h1>AI项目复盘结果</h1>

      </header>

      {/* AI总结 */}

      <section className="summary-card">

        <h2>
          成长经历已整理完成
        </h2>

        <p>
          AI已根据你的输入自动梳理项目经历、
          工作成果与能力成长，
          并生成可持续积累的职业档案。
        </p>

      </section>

      {/* 项目概览 */}

      <section className="result-card">

        <div className="card-title">

          <Briefcase size={18} />

          <span>项目概览</span>

        </div>

        <div className="content-box">

          负责公众号内容运营与活动策划，
          参与品牌宣传项目执行，
          根据数据反馈优化内容方向，
          提升用户活跃度与传播效果。

        </div>

      </section>

      {/* 核心成果 */}

      <section className="result-card">

        <div className="card-title">

          <TrendingUp size={18} />

          <span>核心成果</span>

        </div>

        <ul className="result-list">

          <li>阅读量提升30%</li>

          <li>粉丝增长5000+</li>

          <li>完成3场线上活动策划</li>

          <li>提升用户互动率20%</li>

        </ul>

      </section>

      {/* 能力标签 */}

      <section className="result-card">

        <div className="card-title">

          <Target size={18} />

          <span>能力标签</span>

        </div>

        <div className="tag-list">

          <span>内容运营</span>

          <span>活动策划</span>

          <span>数据分析</span>

          <span>用户增长</span>

          <span>团队协作</span>

          <span>项目执行</span>

        </div>

      </section>

      {/* AI简历描述 */}

      <section className="result-card">

        <div className="card-title">

          <Sparkles size={18} />

          <span>AI简历描述推荐</span>

        </div>

        <div className="content-box">

          负责公众号内容运营与活动策划，
          通过数据分析持续优化内容策略，
          推动账号阅读量提升30%，
          累计新增粉丝5000+，
          具备较强的用户增长与项目执行能力。

        </div>

      </section>

      {/* AI成长建议 */}

      <section className="advice-card">

        <Clock3 size={18} />

        <div>

          <h3>AI成长建议</h3>

          <p>
            建议持续记录每段项目经历，
            形成完整成长轨迹。
            后续可直接用于简历生成、
            面试准备与能力复盘。
          </p>

        </div>

      </section>

      <button
        className="timeline-btn"
        onClick={() => navigate("/growth-timeline")}
      >
        加入成长时间轴
      </button>

    </div>

  );
}

export default GrowthResultPage;