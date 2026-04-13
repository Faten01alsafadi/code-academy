import { useParams } from "react-router-dom";
import students from "../data/student";


function Verify() {
  const { id } = useParams();
  const student = students[id];

  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px",
        fontFamily: "Arial",
      }}
    >
      <h2> Certificate Verification</h2>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "12px",
          display: "inline-block",
          minWidth: "300px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          background: "white",
        }}
      >
        {student ? (
          <>
            <h3 style={{ marginBottom: "10px" }}>{student.name}</h3>

            <p style={{ color: "#555" }}>
              {student.track} Developer
            </p>

            <p style={{ fontSize: "12px", opacity: 0.7 }}>
              ID: {id}
            </p>

            <h3 style={{ color: "green", marginTop: "15px" }}>
              ✔ Valid Certificate
            </h3>
          </>
        ) : (
          <>
            <h3 style={{ color: "red" }}>
              ❌ Invalid Certificate
            </h3>

            <p style={{ fontSize: "12px", opacity: 0.7 }}>
              This certificate does not exist in our system
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Verify;