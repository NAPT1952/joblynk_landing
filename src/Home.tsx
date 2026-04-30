import React, { useEffect } from "react";

/* ===== GOOGLE ADSENSE COMPONENT ===== */
const AdBlock = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div style={{ margin: "40px 0", textAlign: "center" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4282121192943910"
        data-ad-slot="1234567890" // 🔴 REPLACE WITH YOUR REAL SLOT ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

/* ===== HOME PAGE ===== */
const Home = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <div
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/images/ai.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.8), rgba(30,41,59,0.9))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            JobLynk.live
          </h1>
          <p style={{ fontSize: "1.4rem", marginBottom: "2rem" }}>
            Bridging Jobs & Talent
          </p>

          <button
            style={{
              padding: "14px 40px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "50px",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* ===== AD (TOP) ===== */}
      <AdBlock />

      {/* ===== ABOUT ===== */}
      <div style={{ padding: "60px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            About JobLynk
          </h2>

          <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
            JobLynk connects employers and job seekers instantly without
            middlemen, delays, or high costs.
          </p>
        </div>
      </div>

      {/* ===== AD (MIDDLE) ===== */}
      <AdBlock />

      {/* ===== TEAM ===== */}
      <div style={{ padding: "60px 20px", background: "#f8fafc" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Meet the Team
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h3>Vikram Khanna</h3>
            <p>Founder</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3>Neha Patel</h3>
            <p>Operations</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3>Abdul Rahman</h3>
            <p>Tech Lead</p>
          </div>
        </div>
      </div>

      {/* ===== AD (BOTTOM) ===== */}
      <AdBlock />

      {/* ===== FOOTER ===== */}
      <div
        style={{
          background: "#0f172a",
          color: "#94a3b8",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <p>© 2026 JobLynk.live — Bridging Jobs & Talent</p>
      </div>
    </>
  );
};

export default Home;
