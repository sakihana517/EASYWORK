import "./App.css";

import {
  Sparkles,
  Bell,
  User,
  Mic,
  FileText,
  Home,
  FolderArchive,
  CircleUserRound,
} from "lucide-react";

import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

/* AI简历 */

import ResumePage from "./ResumePage";
import ResumePreview from "./ResumePreview";
import ResumeHistoryPage from "./ResumeHistoryPage";

/* AI模拟面试 */

import InterviewPage from "./InterviewPage";
import InterviewMatching from "./InterviewMatching";
import InterviewInvite from "./InterviewInvite";
import InterviewCall from "./InterviewCall";
import InterviewReport from "./InterviewReport";
import InterviewHistoryPage from "./InterviewHistoryPage";

/* 职业成长档案 */

import GrowthPage from "./GrowthPage";
import GrowthReviewPage from "./GrowthReviewPage";
import GrowthResultPage from "./GrowthResultPage";
import GrowthTimelinePage from "./GrowthTimelinePage";

/* 我的 */

import MyPage from "./MyPage";
import NotificationPage from "./NotificationPage";
import ProfilePage from "./ProfilePage";

function HomePage() {

  const navigate = useNavigate();

  return (

    <div className="app">

      {/* 顶部区域 */}

      <section className="hero">

        <div className="top-bar">

          <div className="logo-btn">
            <Sparkles size={30} />
          </div>

          <div className="top-actions">

            <button
              className="circle-btn"
              onClick={() => navigate("/notifications")}
            >
              <Bell size={24} />
            </button>

            <button
             className="circle-btn"
             onClick={() => navigate("/profile")}
            >
             <User size={24} />
            </button>

          </div>

        </div>

        <h1>简易WORK</h1>

        <p className="subtitle">
          让求职更简单
        </p>

        <button
          className="hero-btn"
          onClick={() => navigate("/resume")}
        >
          立即开始
        </button>

      </section>

      {/* 功能入口 */}

      <section className="feature-list">

        {/* AI简历 */}

        <div
          className="feature-card"
          onClick={() => navigate("/resume")}
        >

          <div className="icon-box">
            <Sparkles size={40} />
          </div>

          <div className="feature-content">

            <h2>AI生成简历</h2>

            <p>
              输入个人经历，一键生成专业简历
            </p>

          </div>

        </div>

        {/* AI模拟面试 */}

        <div
          className="feature-card"
          onClick={() => navigate("/interview")}
        >

          <div className="icon-box">
            <Mic size={40} />
          </div>

          <div className="feature-content">

            <h2>AI模拟面试</h2>

            <p>
              提前体验真实面试场景
            </p>

          </div>

        </div>

        {/* 职业成长档案 */}

        <div
          className="feature-card"
          onClick={() => navigate("/growth")}
        >

          <div className="icon-box">
            <FolderArchive size={40} />
          </div>

          <div className="feature-content">

            <h2>职业成长档案</h2>

            <p>
              沉淀项目经验与成长轨迹
            </p>

          </div>

        </div>

      </section>

      {/* 底部导航 */}

      <nav className="bottom-nav">

        <button
          className="nav-item active"
          onClick={() => navigate("/")}
        >
          <Home size={24} />
        </button>

        <button
          className="nav-item"
          onClick={() => navigate("/resume-history")}
        >
          <FileText size={24} />
        </button>

        <button
          className="nav-item"
          onClick={() => navigate("/interview-history")}
        >
          <Mic size={24} />
        </button>

        <button
          className="nav-item"
          onClick={() => navigate("/my")}
        >
          <CircleUserRound size={24} />
        </button>

      </nav>

    </div>

  );
}

function App() {

  return (

    <Routes>

      {/* 首页 */}

      <Route
        path="/"
        element={<HomePage />}
      />

      {/* ========================= */}
      {/* AI简历模块 */}
      {/* ========================= */}

      <Route
        path="/resume"
        element={<ResumePage />}
      />

      <Route
        path="/preview"
        element={<ResumePreview />}
      />

      <Route
        path="/resume-history"
        element={<ResumeHistoryPage />}
      />

      {/* ========================= */}
      {/* AI模拟面试模块 */}
      {/* ========================= */}

      <Route
        path="/interview"
        element={<InterviewPage />}
      />

      <Route
        path="/interview-matching"
        element={<InterviewMatching />}
      />

      <Route
        path="/interview-invite"
        element={<InterviewInvite />}
      />

      <Route
        path="/interview-call"
        element={<InterviewCall />}
      />

      <Route
        path="/report"
        element={<InterviewReport />}
      />

      <Route
        path="/interview-history"
        element={<InterviewHistoryPage />}
      />

      {/* ========================= */}
      {/* 职业成长档案模块 */}
      {/* ========================= */}

      <Route
        path="/growth"
        element={<GrowthPage />}
      />

      <Route
        path="/growth-review"
        element={<GrowthReviewPage />}
      />

      <Route
        path="/growth-result"
        element={<GrowthResultPage />}
      />

      <Route
        path="/growth-timeline"
        element={<GrowthTimelinePage />}
      />

      {/* ========================= */}
      {/* 我的模块 */}
      {/* ========================= */}

      <Route
        path="/my"
        element={<MyPage />}
      />

      <Route
        path="/notifications"
        element={<NotificationPage />}
      />

      <Route
        path="/profile"
        element={<ProfilePage />}
      />

    </Routes>

  );
}

export default App;