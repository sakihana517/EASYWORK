import "./InterviewReport.css";

import {
  ArrowLeft,
  Award,
  MessageSquare,
  Briefcase,
  Brain,
  RotateCcw,
  Home,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function InterviewReport() {

  const navigate = useNavigate();

  return (

    <div className="report-page">

      {/* 顶部 */}

      <header className="report-header">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>AI面试报告</h1>

      </header>

      {/* 综合评分 */}

      <section className="score-card">

        <Award size={38}/>

        <h2>86</h2>

        <p>综合得分</p>

      </section>

      {/* SVG雷达图 */}

      <section className="radar-card">

        <h3>能力雷达图</h3>

        <div className="radar-wrapper">

          <svg
            viewBox="0 0 300 300"
            className="radar-svg"
          >

            {/* 外圈 */}

            <polygon
              className="radar-grid"
              points="150,40 250,110 220,240 80,240 50,110"
            />

            <polygon
              className="radar-grid"
              points="150,70 220,120 200,210 100,210 80,120"
            />

            <polygon
              className="radar-grid"
              points="150,95 200,130 185,190 115,190 100,130"
            />

            {/* 坐标轴 */}

            <line
              className="radar-axis"
              x1="150"
              y1="150"
              x2="150"
              y2="40"
            />

            <line
              className="radar-axis"
              x1="150"
              y1="150"
              x2="250"
              y2="110"
            />

            <line
              className="radar-axis"
              x1="150"
              y1="150"
              x2="220"
              y2="240"
            />

            <line
              className="radar-axis"
              x1="150"
              y1="150"
              x2="80"
              y2="240"
            />

            <line
              className="radar-axis"
              x1="150"
              y1="150"
              x2="50"
              y2="110"
            />

            {/* 数据区域 */}

            <polygon
              className="radar-area"
              points="
                150,55
                235,115
                210,225
                95,220
                65,120
              "
            />

            {/* 数据点 */}

            <circle
              className="radar-point"
              cx="150"
              cy="55"
              r="4"
            />

            <circle
              className="radar-point"
              cx="235"
              cy="115"
              r="4"
            />

            <circle
              className="radar-point"
              cx="210"
              cy="225"
              r="4"
            />

            <circle
              className="radar-point"
              cx="95"
              cy="220"
              r="4"
            />

            <circle
              className="radar-point"
              cx="65"
              cy="120"
              r="4"
            />

            {/* 标签 */}

            <text
              x="150"
              y="25"
              textAnchor="middle"
              className="radar-label"
            >
              沟通表达
            </text>

            <text
              x="270"
              y="110"
              textAnchor="start"
              className="radar-label"
            >
              专业能力
            </text>

            <text
              x="235"
              y="265"
              textAnchor="middle"
              className="radar-label"
            >
              岗位匹配
            </text>

            <text
              x="65"
              y="265"
              textAnchor="middle"
              className="radar-label"
            >
              项目经验
            </text>

            <text
              x="20"
              y="110"
              textAnchor="start"
              className="radar-label"
            >
              学习能力
            </text>

          </svg>

        </div>

      </section>

      {/* 能力评分 */}

      <section className="report-card">

        <h3>能力评估</h3>

        <div className="score-item">
          <span>沟通表达</span>
          <strong>88</strong>
        </div>

        <div className="score-item">
          <span>专业能力</span>
          <strong>84</strong>
        </div>

        <div className="score-item">
          <span>岗位匹配度</span>
          <strong>90</strong>
        </div>

        <div className="score-item">
          <span>项目经验</span>
          <strong>82</strong>
        </div>

        <div className="score-item">
          <span>学习能力</span>
          <strong>86</strong>
        </div>

      </section>

      {/* AI总结 */}

      <section className="report-card">

        <div className="section-title">

          <MessageSquare size={18}/>

          <h3>AI总结</h3>

        </div>

        <p>
          你整体表现优秀，
          项目经历描述较完整，
          能够体现岗位相关能力。
          回答逻辑较清晰，
          但部分案例缺少量化成果支撑，
          建议增加具体数据来增强说服力。
        </p>

      </section>

      {/* 优化建议 */}

      <section className="report-card">

        <div className="section-title">

          <Brain size={18}/>

          <h3>优化建议</h3>

        </div>

        <ul>

          <li>回答尽量采用 STAR 法则。</li>

          <li>增加项目成果量化数据。</li>

          <li>突出岗位相关技能优势。</li>

          <li>提升回答的逻辑性与结构化表达。</li>

        </ul>

      </section>

      {/* 岗位分析 */}

      <section className="report-card">

        <div className="section-title">

          <Briefcase size={18}/>

          <h3>岗位匹配分析</h3>

        </div>

        <p>
          你的整体能力与UI设计师岗位匹配度较高，
          尤其在用户体验优化与设计工具应用方面具有优势。
          建议继续强化设计思维与项目展示能力。
        </p>

      </section>

      {/* 操作按钮 */}

      <button
        className="retry-btn"
        onClick={() => navigate("/interview")}
      >

        <RotateCcw size={18}/>

        重新面试

      </button>

      <button
        className="home-btn"
        onClick={() => navigate("/")}
      >

        <Home size={18}/>

        返回主页

      </button>

    </div>

  );
}

export default InterviewReport;