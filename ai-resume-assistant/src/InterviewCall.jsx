import "./InterviewCall.css";

import {
  ArrowLeft,
  UserRound,
  Mic,
  MicOff,
  FileText,
  PhoneOff,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function InterviewCall() {

  const navigate = useNavigate();

  return (

    <div className="call-page">

      <header className="call-header">

        <button
          className="back-btn"
          onClick={() => navigate("/invite")}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>AI模拟面试</h1>

      </header>

      <div className="interviewer-card">

        <div className="avatar">

          <UserRound size={48}/>

        </div>

        <h2>AI高级面试官</h2>

        <p>UI设计师岗位</p>

      </div>

      <div className="question-card">

        <span className="question-count">
          问题 1 / 15
        </span>

        <h3>
          请介绍一下你在校园服务平台项目中承担的主要工作？
        </h3>

      </div>

      <div className="voice-status">

        <Mic size={22}/>

        <span>正在聆听...</span>

      </div>

      <div className="timer">

        00:42
      </div>

      <div className="transcript-card">

        <h4>实时转录</h4>

        <p>
          我在项目中主要负责前端页面设计、
          页面开发以及响应式布局实现，
          同时参与用户体验优化工作...
        </p>

      </div>

      <div className="control-bar">

        <button className="control-btn">

          <MicOff size={22}/>

          <span>静音</span>

        </button>

        <button className="control-btn">

          <FileText size={22}/>

          <span>记录</span>

        </button>

        <button
          className="control-btn end-btn"
           onClick={() => navigate("/report")}
        >

          <PhoneOff size={22}/>

          <span>结束</span>

        </button>

      </div>

    </div>

  );
}

export default InterviewCall;