function Profile() {
  
  const stars = Array.from({ length: 70 }).map((_, i) => (
    <div
      key={i}
      className="star"
      style={{
        top: Math.random() * 100 + "vh",
        left: Math.random() * 100 + "vw",
        animationDelay: Math.random() * 5 + "s",
      }}
    />
  ));

  return (
    <div className="page-background">
      {stars}

      <div className="profile-container">
        {/* HEADER: PHOTO & NAME */}
        <header className="profile-header">
          <img
            src="https://drive.google.com/file/d/1-IEgjizJi36kEiMK9dJIgX7aGpiwMEBY/view"
            alt="Profile Photo"
            className="profile-photo"
          />
          <h1>──── Karenina Martawita ────</h1>
          <p className="subtitle"></p>
        </header>

        {/* PERSONAL INFORMATION */}
        <section className="info-card">
          <h2>╰┈➤Personal Information</h2>
          <div className="info-grid">
            <p>
              <strong>Student ID:24.07.5.10.0021 </strong>
            </p>
            <p>
              <strong>Date of Birth:2010 Febuary 2 </strong>
            </p>
            <p>
              <strong>Place of Birth:Jakarta indonesia</strong>
            </p>
            <p>
              <strong>Address:Jalan Kedondong </strong>
            </p>
            <p>
              <strong>Hobbies:</strong> Animating, Art, Research
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="info-card">
          <h2>╰┈➤Education</h2>
          <div className="info-grid">
            <p>
              <strong>School:Citra Kasih Samarinda </strong>
            </p>
            <p>
              <strong>Grade:11A </strong>
            </p>
            <p>
              <strong>Extracurricular:</strong> German lessons & Debate
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="info-card">
          <h2>╰┈➤Skills</h2>
          <ul className="skills-list">
            <li>HTML & CSS</li>
            <li>Basic JavaScript</li>
            <li>Responsive Web Design</li>
            <li>Learning React.js</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section className="info-card">
          <h2>╰┈➤Contact</h2>
          <p>
            <strong>Email:karenina.martwita@student.citrakasih.sch.id </strong>
          </p>
          <p>
            <strong>Instagram:@karemima </strong>
          </p>
        </section>
      </div>

      {/*  star backgroudn and fade in soemthing */}
      <style jsx>{`
        /* PAGE BACKGROUND */
        .page-background {
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at bottom, #ffffffff, #000000ff);
          min-height: 100vh;
        }

        /* STARS */
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          width: 2px;
          height: 2px;
          animation: twinkle 2s infinite;
          opacity: 0.8;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }

        /* FADE-IN */
        .profile-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 30px;
          background: linear-gradient(135deg, #ffffffdd 0%, #ffeb8acc 100%);
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-radius: 20px;
          animation: fadeIn 1s ease-in;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* HEADER */
        .profile-header {
          text-align: center;
          background: linear-gradient(135deg, #7a89ff 0%, #fee066 100%);
          color: white;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .profile-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 5px solid white;
          object-fit: cover;
          margin-bottom: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .profile-photo:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px #ffe37b;
        }

        .profile-header h1 {
          margin: 10px 0;
          font-size: 28px;
          font-weight: 600;
        }

        .subtitle {
          font-size: 16px;
          opacity: 0.9;
          font-weight: 300;
        }

        /* INFO CARD */
        .info-card {
          background-color: #ffffffee;
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid #5b56b5;
          box-shadow: 0 2px 8px rgba(255, 179, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(255, 204, 0, 0.3);
        }

        .info-card h2 {
          color: #3c4dd0;
          font-size: 20px;
          margin-bottom: 12px;
          border-bottom: 2px solid #5860ee;
          padding-bottom: 6px;
        }

        .info-grid p {
          margin: 8px 0;
          font-size: 15px;
          color: #444b8a;
        }

        .info-grid strong {
          color: #ffc400;
          min-width: 120px;
          display: inline-block;
        }

        /* SKILLS LIST */
        .skills-list {
          list-style: none;
          padding: 0;
        }

        .skills-list li {
          background: linear-gradient(135deg, #2b64e9 0%, #f9f9f8 100%);
          color: white;
          padding: 8px 12px;
          margin: 6px 0;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          border-left: 3px solid #1d59ff;
        }
      `}</style>
    </div>
  );
}

export default Profile
