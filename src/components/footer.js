import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <>
      <div className="footer__container">
        <p className="footer">© Riley Jakusik {new Date().getFullYear()}</p>
      </div>
    </>
  );
}

export default Footer;
