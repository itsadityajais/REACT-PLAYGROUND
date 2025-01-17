import React, { useState } from "react";
import QRCode from "react-qr-code";

export function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQR() {
    setQrCode(input);
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          // value={"Aditya"}
          placeholder="Enter text to be generated"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleGenerateQR}>Generate</button>
        <div>
          <QRCode id="qr" value={qrCode} size={400} bgColor="white" />
        </div>
      </div>
    </div>
  );
}
