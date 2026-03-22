import React from "react";
import { Link } from "react-router-dom";
import aiImage from "../assets/ai.jpg";

const Home = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <div
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          color: "white",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${aiImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            zIndex: 1,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.95))",
            zIndex: 2,
          }}
        />
        <div
  style={{
    height: "100vh",
    position: "relative",
  }}
>
  {/* Background */}
  <div style={{ ... }}></div>

  {/* Overlay */}
  <div style={{ ... }}></div>

  {/* ✅ EMBLEM GOES HERE */}
  <img
    src={emblem}
    alt="logo"
    style={{
      position: "absolute",
      top: "20px",
      left: "20px",
      width: "60px",
      zIndex: 4,
      borderRadius: "10px",
    }}
  />

  {/* Hero Content */}
  <div style={{ zIndex: 3 }}>
    ...
  </div>
</div>

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
            JobLynk.live
          </h1>
          <p style={{ fontSize: "1.5rem", color: "#cbd5f5" }}>
            Bridging Jobs & Talent
          </p>
        </div>
      </div>

      {/* ===== 🧠 BRAINS NAVIGATION ===== */}
      <div
        style={{
          padding: "60px 20px",
          background: "#0f172a",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "25px",
          textAlign: "center",
        }}
      >
        {[
          { name: "About", path: "/about" },
          { name: "Disclaimer", path: "/disclaimer" },
          { name: "Support", path: "/support" },
          { name: "Pricing", path: "/pricing" },
          { name: "Pay Portal", path: "/payportal" },
          { name: "Resume Tools", path: "/resume-tools" },
          { name: "Sign Up", path: "/signup" },
          { name: "Employers", path: "/employers" },
          { name: "Contact", path: "/support" },
        ].map((item, index) => (
          <Link key={index} to={item.path} style={{ textDecoration: "none" }}>
            <div
              style={{
                background: "#1e293b",
                padding: "30px",
                borderRadius: "20px",
                color: "white",
                fontWeight: "600",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2563eb";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1e293b";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              🧠 {item.name}
            </div>
          </Link>
        ))}
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <div style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            About JobLynk.live
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
            JobLynk.live was built to simplify job access for everyone. We make
            resumes affordable, eliminate confusion, and connect job seekers
            directly with real employers.
          </p>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div
        style={{
          background: "#0f172a",
          color: "#94a3b8",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <p>© 2024 JobLynk.live — Bridging Jobs & Talent</p>
      </div>
    </>
  );
};

export default Home;
