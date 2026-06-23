import "./InterviewMatching.css";

import {
  ArrowLeft,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
} from "react";

function InterviewMatching() {

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {

      navigate("/interview-invite");

    }, 4000);

    return () => clearTimeout(timer);

  }, [navigate]);

  return (

    <div className="matching-page">

      {/* 顶部 */}

      <header className="matching-header">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>AI分析中</h1>

      </header>

      {/* 进度环 */}

      <div className="progress-card">

        <div className="progress-circle">

          <span>92%</span>

        </div>

        <h2>正在分析你的简历</h2>

        <p>
          AI正在根据岗位要求生成专属面试题
        </p>

      </div>

      {/* 分析内容 */}

      <div className="analysis-card">

        <div className="analysis-item">

          <CheckCircle2 size={18}/>

          <span>
            简历内容分析完成
          </span>

        </div>

        <div className="analysis-item">

          <CheckCircle2 size={18}/>

          <span>
            项目经历分析完成
          </span>

        </div>

        <div className="analysis-item">

          <CheckCircle2 size={18}/>

          <span>
            技能匹配分析完成
          </span>

        </div>

        <div className="analysis-item">

          <CheckCircle2 size={18}/>

          <span>
            岗位要求分析完成
          </span>

        </div>

        <div className="analysis-item loading">

          <LoaderCircle size={18}/>

          <span>
            正在生成面试问题...
          </span>

        </div>

      </div>

      {/* AI提示 */}

      <div className="tips-card">

        <h3>AI正在准备</h3>

        <p>
          根据你的简历与目标岗位，
          本次预计生成15道面试题，
          涵盖项目经历、专业技能、
          岗位匹配度以及表达能力评估。
        </p>

      </div>

    </div>

  );
}

export default InterviewMatching;