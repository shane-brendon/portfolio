import React from "react";
import Link from "next/link";
import "./_hero.scss";

const hero = () => {
  return (
    <section className="heroBanner">
      <div className="container">
        <div className="heroBanner__top">
          <img src="/pic.png" alt="" width="100%" height="100%" />
          <div className="heroBanner__content">
            <span className="caption">Modern Studio</span>
            <h1>We’re Help To Build Your Dream Project</h1>
            <div className="description">
              <p>
                Agency provides a full service range including technical skills,
                design, business understanding.
              </p>
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
        </div>
        <div className="heroBanner__testimony">
          <div className="heroBanner__testimony--profile">
            <img src="/profile.png" alt="" />
          </div>
          <div className="">
            <div className="description">
              <span>"Put themselves in the merchant's shoes"</span>
            </div>
            <div className="heroBanner__testimony--company">Meta Inc.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
