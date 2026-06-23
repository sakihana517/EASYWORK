import "./MyPage.css";

import {
  ArrowLeft,
  FileText,
  Mic,
  FolderArchive,
  Bell,
  User,
  Crown,
  Home,
  CircleUserRound,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function MyPage() {

  const navigate = useNavigate();

  return (

    <div className="my-page">

      {/* 顶部 */}

      <header className="my-header">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>我的</h1>

      </header>

      {/* 用户信息 */}

      <section className="profile-card">

        <div className="avatar">
          <User size={36}/>
        </div>

        <div className="profile-info">

          <h2>樱井泽花</h2>

          <p>UI设计专业 · 大四</p>

        </div>

      </section>

      {/* 数据统计 */}

      <section className="stats-grid">

        <div className="stat-card">
          <h3>3</h3>
          <p>简历</p>
        </div>

        <div className="stat-card">
          <h3>12</h3>
          <p>面试</p>
        </div>

        <div className="stat-card">
          <h3>5</h3>
          <p>成长档案</p>
        </div>

        <div className="stat-card">
          <h3>85</h3>
          <p>平均分</p>
        </div>

      </section>

      {/* Plus会员 */}

      <section className="vip-card">

        <div className="vip-title">

          <Crown size={20}/>

          <span>Plus会员</span>

        </div>

        <p>
          无限使用全部AI功能
        </p>

        <div className="price-row">

          <span>￥18/月</span>

          <span>￥68/年</span>

        </div>

        <button className="vip-btn">
          立即开通
        </button>

      </section>

      {/* 免费版次数 */}

      <section className="usage-card">

        <h3>免费版剩余次数</h3>

        <div className="usage-item">

          <span>AI简历生成</span>

          <span>3 / 5</span>

        </div>

        <div className="usage-item">

          <span>AI模拟面试</span>

          <span>1 / 5</span>

        </div>

        <div className="usage-item">

          <span>成长档案整理</span>

          <span>4 / 5</span>

        </div>

      </section>

      {/* 功能入口 */}

      <section className="menu-list">

        <div
          className="menu-item"
          onClick={() => navigate("/resume-history")}
        >
          <FileText size={20}/>
          <span>我的简历</span>
        </div>

        <div
          className="menu-item"
          onClick={() => navigate("/interview-history")}
        >
          <Mic size={20}/>
          <span>面试记录</span>
        </div>

        <div
          className="menu-item"
          onClick={() => navigate("/growth-timeline")}
        >
          <FolderArchive size={20}/>
          <span>成长时间轴</span>
        </div>

        <div
          className="menu-item"
          onClick={() => navigate("/notifications")}
        >
          <Bell size={20}/>
          <span>通知中心</span>
        </div>

        <div
          className="menu-item"
          onClick={() => navigate("/profile")}
        >
          <User size={20}/>
          <span>个人中心</span>
        </div>

      </section>

      {/* 底部导航 */}

      <nav className="bottom-nav">

        <button
          className="nav-item"
          onClick={() => navigate("/")}
        >
          <Home size={24}/>
        </button>

        <button
          className="nav-item"
          onClick={() => navigate("/resume-history")}
        >
          <FileText size={24}/>
        </button>

        <button
          className="nav-item"
          onClick={() => navigate("/interview-history")}
        >
          <Mic size={24}/>
        </button>

        <button
          className="nav-item active"
          onClick={() => navigate("/my")}
        >
          <CircleUserRound size={24}/>
        </button>

      </nav>

    </div>

  );
}

export default MyPage;