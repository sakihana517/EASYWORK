import "./NotificationPage.css";

import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  Sparkles,
  FileText,
  Mic,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function NotificationPage() {

  const navigate = useNavigate();

  return (

    <div className="notification-page">

      <header className="notification-header">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>通知中心</h1>

      </header>

      {/* 顶部提醒 */}

      <section className="notice-banner">

        <Bell size={22}/>

        <div>

          <h3>你有 3 条未读消息</h3>

          <p>
            及时查看面试结果与成长档案更新
          </p>

        </div>

      </section>

      {/* 操作 */}

      <div className="action-row">

        <button className="read-btn">

          <CheckCircle2 size={16}/>

          全部已读

        </button>

      </div>

      {/* 今日通知 */}

      <h2 className="section-title">
        今日
      </h2>

      <section className="notification-list">

        <div className="notification-card unread">

          <div className="dot"></div>

          <div className="notification-icon">

            <Mic size={20}/>

          </div>

          <div className="notification-content">

            <h3>
              AI模拟面试已完成
            </h3>

            <p>
              你的面试报告已生成，
              点击查看详细分析结果。
            </p>

            <span>
              10分钟前
            </span>

          </div>

        </div>

        <div className="notification-card unread">

          <div className="dot"></div>

          <div className="notification-icon">

            <Sparkles size={20}/>

          </div>

          <div className="notification-content">

            <h3>
              简历优化建议已生成
            </h3>

            <p>
              AI已为你的简历提供新的优化建议。
            </p>

            <span>
              1小时前
            </span>

          </div>

        </div>

      </section>

      {/* 最近通知 */}

      <h2 className="section-title">
        最近
      </h2>

      <section className="notification-list">

        <div className="notification-card">

          <div className="notification-icon">

            <FileText size={20}/>

          </div>

          <div className="notification-content">

            <h3>
              成长档案已更新
            </h3>

            <p>
              AI已成功整理你的项目复盘内容。
            </p>

            <span>
              昨天
            </span>

          </div>

        </div>

        <div className="notification-card">

          <div className="notification-icon">

            <Bell size={20}/>

          </div>

          <div className="notification-content">

            <h3>
              系统通知
            </h3>

            <p>
              欢迎使用简易WORK，
              开启你的智能求职之旅。
            </p>

            <span>
              3天前
            </span>

          </div>

        </div>

      </section>

    </div>

  );
}

export default NotificationPage;