import { useState } from "react";
import "./OptDialogue.scss";

interface Dialogue {
  visible: boolean;
  onClose: () => void;
}
const OtpDialog = ({ visible, onClose }: Dialogue) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e: any, index: number) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    onClose();
  };

  return (
    <dialog open={visible}>
      <form onSubmit={handleSubmit} className="otp-form">
        <p>
          To proceed, you need to confirm the payment by entering the OTP
          received on your registered mobile number with the debit card.
        </p>
        <div className="input-span">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="number"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              maxLength={1}
              className="span-input"
            />
          ))}
        </div>
        <button type="submit" className="verify">
          Verify
        </button>
      </form>
    </dialog>
  );
};

export default OtpDialog;
