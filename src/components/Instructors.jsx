function Instructors() {
  return (
    <section className="section" data-aos="fade-up">
      <h2>Our Instructors</h2>

      <div className="grid">
        <div className="card" data-aos="fade-right">
          <h3>Faten Al-Safadi</h3>
          <p>Front-End Instructor</p>
          <span>Angular & React</span>
        </div>

        <div className="card" data-aos="fade-left">
          <h3>Lama Halemi</h3>
          <p>Back-End Instructor</p>
          <span> Laravel </span>
        </div>
      </div>
    </section>
  );
}

export default Instructors;