import "./GrowthTimelinePage.css";

import {
  ArrowLeft,
  Calendar,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function GrowthTimelinePage() {

  const navigate = useNavigate();

  const records = [
    {
      year: "2026",
      title: "产品运营实习",
      company: "XX科技有限公司",
      time: "2026.03 - 2026.06",
      result: "用户增长8000+"
    },
    {
      year: "2025",
      title: "新媒体运营实习",
      company: "XX传媒有限公司",
      time: "2025.01 - 2025.03",
      result: "粉丝增长5000+"
    },
    {
      year: "2024",
      title: "校园服务平台项目",
      company: "项目负责人",
      time: "2024.09 - 2024.12",
      result: "完成平台上线"
    }
  ];

  return (

    <div className="timeline-page">

      <header className="timeline-header">

        <button
          className="back-btn"
          onClick={() => navigate("/growth")}
        >
          <ArrowLeft size={20}/>
        </button>

        <h1>职业成长时间轴</h1>

      </header>

      {/* 数据统计 */}

      <section className="summary-card">

        <div className="summary-item">
          <h2>3</h2>
          <span>成长经历</span>
        </div>

        <div className="summary-item">
          <h2>12</h2>
          <span>项目成果</span>
        </div>

        <div className="summary-item">
          <h2>18</h2>
          <span>能力标签</span>
        </div>

      </section>

      {/* 时间轴 */}

      <section className="timeline-list">

        {
          records.map((item,index)=>(
            <div
              className="timeline-item"
              key={index}
            >

              <div className="timeline-left">

                <div className="dot"></div>

                {
                  index !== records.length - 1 &&
                  <div className="line"></div>
                }

              </div>

              <div
                className="timeline-card"
                onClick={() =>
                  navigate("/growth-detail")
                }
              >

                <span className="year">
                  {item.year}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.company}
                </p>

                <div className="time-row">

                  <Calendar size={14}/>

                  {item.time}

                </div>

                <div className="achievement">

                  <TrendingUp size={14}/>

                  {item.result}

                </div>

                <div className="detail-btn">

                  查看详情

                  <ChevronRight size={16}/>

                </div>

              </div>

            </div>
          ))
        }

      </section>

    </div>

  );
}

export default GrowthTimelinePage;