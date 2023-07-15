import React from "react";
import Link from "next/link";
import "./_hero.scss";

const hero = () => {
  return (
    <section className="heroBanner">
      <div className="container">
        <img src="/Bitmap.png" alt="" width="100%" height="100%"/>
        <div className="heroBanner__content">
          <span className="caption">Modern Studio</span>
          <h1>We’re Help To Build Your Dream Project</h1>
          <div className="heroBanner__description">
            <p>Agency provides a full service range including technical skills, design, business understanding.</p>
          </div>
        </div>
        <div className="heroBanner__cta">
          <Link className="btn orange" rel="stylesheet" href="">
            How we work
          </Link>
          <Link className="btn contact" rel="stylesheet" href="">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default hero;
