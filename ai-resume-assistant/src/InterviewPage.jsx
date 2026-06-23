import "./InterviewPage.css";

import {
  ArrowLeft,
  Upload,
  FileText,
  Briefcase,
  Mic,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function InterviewPage() {

  const navigate = useNavigate();

  const [resumeName, setResumeName] = useState("");

  return (

    <div className="interview-page">

      <header className="interview-header">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>AI模拟面试</h1>

      </header>

      {/* 上传简历 */}

      <section className="card">

        <div className="section-title">

          <FileText size={18}/>

          <span>上传简历</span>

        </div>

        <label className="upload-box">

          <Upload size={32}/>

          <p>点击上传简历</p>

          <span>支持 PDF / DOCX</span>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            hidden
            onChange={(e)=>{

              if(e.target.files[0]){

                setResumeName(
                  e.target.files[0].name
                );

              }

            }}
          />

        </label>

        {
          resumeName &&
          (
            <div className="uploaded-file">

              <span>✓ 上传成功</span>

              <p>{resumeName}</p>

            </div>
          )
        }

      </section>

      {/* 求职岗位 */}

      <section className="card">

        <div className="section-title">

          <Briefcase size={18}/>

          <span>目标岗位</span>

        </div>

        <select>

          <option>
            UI设计师
          </option>

          <option>
            产品经理
          </option>

          <option>
            前端开发工程师
          </option>

          <option>
            新媒体运营
          </option>

          <option>
            数据分析师
          </option>

        </select>

      </section>

      {/* 面试模式 */}

      <section className="card">

        <div className="section-title">

          <Mic size={18}/>

          <span>面试模式</span>

        </div>

        <div className="mode-list">

          <label>
            <input
              type="radio"
              name="mode"
              defaultChecked
            />
            语音电话面试（推荐）
          </label>

          <label>
            <input
              type="radio"
              name="mode"
            />
            文字聊天面试
          </label>

        </div>

      </section>

      {/* AI说明 */}

      <section className="card">

        <div className="section-title">

          <Sparkles size={18}/>

          <span>AI分析内容</span>

        </div>

        <ul className="ai-list">

          <li>
            分析简历经历与项目亮点
          </li>

          <li>
            匹配岗位核心能力要求
          </li>

          <li>
            自动生成针对性面试问题
          </li>

          <li>
            模拟真实HR与业务面试官
          </li>

        </ul>

      </section>

      <button
        className="start-btn"
        onClick={() => navigate("/interview-matching")}
      >
        开始匹配AI面试官
      </button>

    </div>

  );
}

export default InterviewPage;