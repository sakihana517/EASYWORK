import "./ResumePage.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  ArrowLeft,
  Upload,
  Camera,
} from "lucide-react";

function ResumePage() {
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    school: "",
    major: "",
    degree: "",
    target: "",
    projectName: "",
    projectDesc: "",
    company: "",
    position: "",
    internshipDesc: "",
    selfIntro: "",
  });

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };

  return (
    <div className="resume-page">

      <header className="resume-header">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20} />
        </button>

        <h1>简历信息填写</h1>

      </header>

      {/* AI证件照 */}

      <section className="form-card">

        <h2>AI证件照生成</h2>

        <div className="photo-upload">

          <div className="photo-preview">

            {photo ? (
              <img
                src={photo}
                alt="preview"
                className="preview-image"
              />
            ) : (
              <>
                <Camera size={42} />
                <span>上传生活照</span>
              </>
            )}

          </div>

          <label className="upload-btn">

            <Upload size={18} />

            选择照片

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handlePhotoUpload}
            />

          </label>

        </div>

        <p className="upload-tip">
          建议上传正面、清晰、无遮挡照片
        </p>

      </section>

      {/* 基本信息 */}

      <section className="form-card">

        <h2>基本信息</h2>

        <input
          type="text"
          placeholder="姓名"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="手机号"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="邮箱"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="学校"
          value={formData.school}
          onChange={(e) =>
            setFormData({
              ...formData,
              school: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="专业"
          value={formData.major}
          onChange={(e) =>
            setFormData({
              ...formData,
              major: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="学历"
          value={formData.degree}
          onChange={(e) =>
            setFormData({
              ...formData,
              degree: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="求职意向（如：UI设计师）"
          value={formData.target}
          onChange={(e) =>
            setFormData({
              ...formData,
              target: e.target.value,
            })
          }
        />

      </section>

      {/* 项目经历 */}

      <section className="form-card">

        <h2>项目经历</h2>

        <input
          type="text"
          placeholder="项目名称"
          value={formData.projectName}
          onChange={(e) =>
            setFormData({
              ...formData,
              projectName: e.target.value,
            })
          }
        />

        <textarea
          rows="4"
          placeholder="项目描述"
          value={formData.projectDesc}
          onChange={(e) =>
            setFormData({
              ...formData,
              projectDesc: e.target.value,
            })
          }
        />

      </section>

      {/* 实习经历 */}

      <section className="form-card">

        <h2>实习经历</h2>

        <input
          type="text"
          placeholder="公司名称"
          value={formData.company}
          onChange={(e) =>
            setFormData({
              ...formData,
              company: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="岗位名称"
          value={formData.position}
          onChange={(e) =>
            setFormData({
              ...formData,
              position: e.target.value,
            })
          }
        />

        <textarea
          rows="4"
          placeholder="工作内容"
          value={formData.internshipDesc}
          onChange={(e) =>
            setFormData({
              ...formData,
              internshipDesc: e.target.value,
            })
          }
        />

      </section>

      {/* 自我评价 */}

      <section className="form-card">

        <h2>自我评价</h2>

        <textarea
          rows="5"
          placeholder="请简单介绍自己的优势、性格特点和职业规划..."
          value={formData.selfIntro}
          onChange={(e) =>
            setFormData({
              ...formData,
              selfIntro: e.target.value,
            })
          }
        />

      </section>

      <button
        className="generate-btn"
        onClick={() =>
          navigate("/preview", {
            state: {
              ...formData,
              photo,
            },
          })
        }
      >
        AI生成简历
      </button>

    </div>
  );
}

export default ResumePage;
