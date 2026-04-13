import { QRCodeCanvas } from "qrcode.react";

function Certificate({ id, name }) {
const verifyUrl = `https://code-academy-beryl.vercel.app/verify/${id}`;

  return (
    <div className="certificate">
      <h3>{name}</h3>

      {/* QR CODE */}
      <QRCodeCanvas value={verifyUrl} size={120} />

      <p>{id}</p>
    </div>
  );
}

export default Certificate;