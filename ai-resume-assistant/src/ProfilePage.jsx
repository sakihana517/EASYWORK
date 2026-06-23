import "./ProfilePage.css";

import {
  ArrowLeft,
  User,
  GraduationCap,
  Briefcase,
  Mail,
  Shield,
  Settings,
  CircleHelp,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function ProfilePage() {

  const navigate = useNavigate();

  return (

    <div className="profile-page">

      <header className="profile-header">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>个人中心</h1>

      </header>

      {/* 用户信息 */}

      <section className="user-card">

        <div className="avatar-box">

          <User size={40}/>

        </div>

        <div className="user-info">

          <h2>樱井泽花</h2>

          <p>简易WORK用户</p>

        </div>

      </section>

      {/* 基本资料 */}

      <section className="info-card">

        <h3>基本资料</h3>

        <div className="info-item">

          <GraduationCap size={18}/>
          <span>学校</span>
          <strong>XX大学</strong>

        </div>

        <div className="info-item">

          <Briefcase size={18}/>
          <span>专业</span>
          <strong>UI设计</strong>

        </div>

        <div className="info-item">

          <Mail size={18}/>
          <span>邮箱</span>
          <strong>example@email.com</strong>

        </div>

      </section>

      {/* 功能菜单 */}

      <section className="menu-card">

        <div className="menu-item">

          <div className="menu-left">

            <User size={18}/>
            <span>编辑资料</span>

          </div>

          <ChevronRight size={18}/>

        </div>

        <div className="menu-item">

          <div className="menu-left">

            <Shield size={18}/>
            <span>账号安全</span>

          </div>

          <ChevronRight size={18}/>

        </div>

        <div className="menu-item">

          <div className="menu-left">

            <Settings size={18}/>
            <span>设置</span>

          </div>

          <ChevronRight size={18}/>

        </div>

        <div className="menu-item">

          <div className="menu-left">

            <CircleHelp size={18}/>
            <span>帮助与反馈</span>

          </div>

          <ChevronRight size={18}/>

        </div>

      </section>

      {/* 关于 */}

      <section className="about-card">

        <h3>关于简易WORK</h3>

        <p>
          简易WORK是一款AI求职辅助平台，
          提供简历生成、模拟面试、
          职业成长档案等功能，
          帮助大学生与职场新人提升求职效率。
        </p>

      </section>

      <button className="logout-btn">

        退出登录

      </button>

    </div>

  );
}

export default ProfilePage;