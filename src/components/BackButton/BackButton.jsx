import { useNavigate } from "react-router-dom";
import back_icon from "@assets/back_icon.svg";
import "./BackButton.css";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <img src={back_icon} alt="" />
      <span className="back-text">BACK</span>
    </button>
  );
};
