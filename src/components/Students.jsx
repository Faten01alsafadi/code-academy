import { QRCodeCanvas } from "qrcode.react";

function Students() {
  const frontEnd = [
    { name: "Fajer Jbaee", id: "FE-2026-001" },
    { name: "Luna Alsafadi", id: "FE-2026-002" },
    { name: "Lara Alhajali", id: "FE-2026-003" },
    { name: "Atheer Maklad", id: "FE-2026-004" },
    // { name: "Asala Alghadban", id: "FE-2026-005" },
    // { name: "Taim Quroni", id: "FE-2026-006" },
  ];

  const backEnd = [
    { name: "Zain Ghabra", id: "BE-2026-001" },
    { name: "Ashraf Hlal", id: "BE-2026-002" },
    // { name: "Hadeel Zidan", id: "BE-2026-003" },
    // { name: "Jana Abo Omar", id: "BE-2026-004" },
  ];

  return (
    <section className="section" data-aos="fade-up" id="students">
      <h2>Our Certified Graduates</h2>
      <p>Official certificates issued by Code Academy</p>

      {/* FRONT-END */}
      <h3 style={{ marginTop: "30px" }}>Front-End Certificates</h3>
      <div className="grid">
        {frontEnd.map((s, i) => (
    <div className="card cert-card" data-aos="zoom-in" key={i}>
  <h4>{s.name}</h4>
  <span>Front-End Development</span>

  <div className="qr">
    <QRCodeCanvas
      value={`https://codeacademy.com/verify/${s.id}`}
      size={90}
    />
  </div>

  <small>Certificate ID: {s.id}</small>
</div>
        ))}
      </div>

      {/* BACK-END */}
      <h3 style={{ marginTop: "40px" }}>Back-End Certificates</h3>
      <div className="grid">
        {backEnd.map((s, i) => (
     <div className="card cert-card" data-aos="zoom-in" key={i}>
  <h4>{s.name}</h4>
  <span>Back-End Development</span>

  <div className="qr">
    <QRCodeCanvas
      value={`https://codeacademy.com/verify/${s.id}`}
      size={90}
    />
  </div>

  <small>Certificate ID: {s.id}</small>
</div>
        ))}
      </div>
    </section>
  );
}

export default Students;