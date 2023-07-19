import React from "react";
import Link from "next/link";
import "./_meaMediaText.scss";

const meaMediaText = () => {
  return (
    <section className="meaMediaText">
      <div className="container">
        <div className="meaMediaText__top">
          <img src="/meaMediaText.png" alt="" />
          <div className="meaMediaText__content">
            <div className="caption">About</div>
            <h3 className="meaMediaText__content--title">
              An Experience Design Agency
            </h3>
            <div className="meaMediaText__content--subTitle">
              Provides a full service range
            </div>
            <div className="description-dark">
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </div>
            <Link href="#" className="meaMediaText__content--btn">
              ABOUT US
            </Link>
          </div>
        </div>
        <div className="meaMediaText__bottom">
          <ul>
            <li>
              <h3>42%</h3>
              <span>Years of experience</span>
            </li>
            <li>
              <h3>73+</h3>
              <span>Agency members</span>
            </li>
            <li>
              <h3>5.000</h3>
              <span>Projects complete </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default meaMediaText;
