const courses = [
  {
    title: "Front-End Development",
    desc: "Three levels of pure javascript, HTML & CSS without React .",
  },
  {
    title: "Back-End Development",
    desc: "Three levels of PHP & Laravel",
  },
  {
    title: "Full-Stack Basics",
    desc: "Build complete web applications using front & back-end",
  },
];

function Courses() {
  return (
    <section className="section" data-aos="zoom-in">
      <h2>Our Courses</h2>
      <div className="grid">
        {courses.map((c, i) => (
          <div data-aos="fade-up" data-aos-delay={i * 100} key={i} className="card">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;