import "./ResumePreview.css";

import {
  Download,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useState } from "react";

function ResumePreview() {

  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state || {};

  const [photoBg, setPhotoBg] =
    useState("blue");

  return (
    <div className="preview-page">

      {/* 顶部导航 */}

      <header className="preview-header">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20} />
        </button>

        <h1>返回主页</h1>

      </header>

      {/* 简历 */}

      <div className="paper-wrapper">

        <div className="resume-paper">

          <div className="resume-top">

            <div className="resume-info">

              <h1
                contentEditable
                suppressContentEditableWarning
              >
                {data.name || "姓名"}
              </h1>

              <p
                contentEditable
                suppressContentEditableWarning
              >
                {data.major || "专业"}
              </p>

              <p
                contentEditable
                suppressContentEditableWarning
              >
                求职意向：
                {data.target || "未填写"}
              </p>

            </div>

            <div className="photo-section">

              <div
                className={`photo-card ${photoBg}`}
              >
                {data.photo ? (
                  <img
                    src={data.photo}
                    alt="证件照"
                    className="resume-photo"
                  />
                ) : (
                  "证件照"
                )}
              </div>

              <div className="photo-switch">

                <button
                  onClick={() => setPhotoBg("red")}
                >
                  红底
                </button>

                <button
                  onClick={() => setPhotoBg("blue")}
                >
                  蓝底
                </button>

                <button
                  onClick={() => setPhotoBg("white")}
                >
                  白底
                </button>

              </div>

            </div>

          </div>

          {/* 教育经历 */}

          <section className="resume-section">

            <div className="section-title">

              <h3>教育经历</h3>

              <button className="polish-btn">
                <Sparkles size={14}/>
                AI润色
              </button>

            </div>

            <div
              className="editable"
              contentEditable
              suppressContentEditableWarning
            >
              {data.school || "学校"}
              {" · "}
              {data.major || "专业"}
              {" · "}
              {data.degree || "学历"}
            </div>

          </section>

          {/* 项目经历 */}

          <section className="resume-section">

            <div className="section-title">

              <h3>项目经历</h3>

              <button className="polish-btn">
                <Sparkles size={14}/>
                AI润色
              </button>

            </div>

            <div
              className="editable"
              contentEditable
              suppressContentEditableWarning
            >
              <strong>
                {data.projectName}
              </strong>

              <br />

              {data.projectDesc ||
                "暂无项目经历"}
            </div>

          </section>

          {/* 实习经历 */}

          <section className="resume-section">

            <div className="section-title">

              <h3>实习经历</h3>

              <button className="polish-btn">
                <Sparkles size={14}/>
                AI润色
              </button>

            </div>

            <div
              className="editable"
              contentEditable
              suppressContentEditableWarning
            >
              <strong>
                {data.company}
                {" "}
                {data.position}
              </strong>

              <br />

              {data.internshipDesc ||
                "暂无实习经历"}
            </div>

          </section>

          {/* 自我评价 */}

          <section className="resume-section">

            <div className="section-title">

              <h3>自我评价</h3>

              <button className="polish-btn">
                <Sparkles size={14}/>
                AI润色
              </button>

            </div>

            <div
              className="editable"
              contentEditable
              suppressContentEditableWarning
            >
              {data.selfIntro ||
                "暂无自我评价"}
            </div>

          </section>

        </div>

      </div>

      <button
        className="secondary-btn"
        onClick={() => navigate("/resume")}
      >
        重新填写
      </button>

      <button className="pdf-btn">

        <Download size={18} />

        导出PDF

      </button>

    </div>
  );
}

export default ResumePreview;