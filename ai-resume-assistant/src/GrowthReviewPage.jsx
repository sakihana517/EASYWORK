import "./GrowthReviewPage.css";

import {
  ArrowLeft,
  Building2,
  Briefcase,
  Calendar,
  FileText,
  Upload,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function GrowthReviewPage() {

  const navigate = useNavigate();

  return (

    <div className="review-page">

      {/* 顶部 */}

      <header className="review-header">

        <button
          className="back-btn"
          onClick={() => navigate("/growth")}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>AI项目复盘</h1>

      </header>

      {/* 表单 */}

      <section className="review-card">

        <h2>基础信息</h2>

        <div className="input-group">

          <Building2 size={18}/>

          <input
            type="text"
            placeholder="实习公司名称"
          />

        </div>

        <div className="input-group">

          <Briefcase size={18}/>

          <input
            type="text"
            placeholder="岗位名称"
          />

        </div>

        <div className="input-group">

          <Calendar size={18}/>

          <input
            type="text"
            placeholder="工作时间（如：2025.06-2025.09）"
          />

        </div>

      </section>

      {/* 工作内容 */}

      <section className="review-card">

        <h2>工作内容</h2>

        <textarea
          rows="10"
          placeholder="
例如：

负责公众号运营、
小红书内容创作、
活动策划执行、
数据分析与复盘等..."
        />

      </section>

      {/* 上传附件 */}

      <section className="review-card">

        <h2>辅助材料（可选）</h2>

        <label className="upload-box">

          <Upload size={26}/>

          <span>
            上传周报 / 日报 / 项目文档
          </span>

          <small>
            支持 PDF、DOCX
          </small>

          <input
            type="file"
            hidden
          />

        </label>

      </section>

      {/* AI提示 */}

      <section className="tips-card">

        <FileText size={18}/>

        <p>
          AI将自动提炼项目成果、
          工作亮点和核心能力，
          可直接用于简历与面试。
        </p>

      </section>

      {/* 按钮 */}

      <button
        className="generate-btn"
        onClick={() => navigate("/growth-result")}
      >

        <Sparkles size={18}/>

        AI生成项目成果

      </button>

    </div>

  );
}

export default GrowthReviewPage;