import { useParams } from "react-router-dom";

function Verify() {
  const { id } = useParams();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Certificate Verification</h2>
      <p>ID: {id}</p>

      <h3 style={{ color: "green" }}>
        ✔ Valid Certificate
      </h3>
    </div>
  );
}

export default Verify;