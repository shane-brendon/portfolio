import React from "react";
import "./_meaHowWeWork.scss";

const meaHowWeWork = () => {
  return (
    <section className="meaHowWeWork">
      <div className="container">
        <div className="meaHowWeWork__content">
          <span className="caption">How we work</span>
          <h3>Making Your Projects Look Awesome</h3>
          <div className="description-dark">
            Technical skills, design, business understanding, ability to put
            themselves in the merchant's shoes.
          </div>
          <button className="read-more">Read More</button>
        </div>
        <div className="meaHowWeWork__list">
          <ol>
            <li>
              <span>1</span>
              <div>
                <p> Full service range including</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <p> Technical skills, design, business</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <p> Themselves in the merchant's</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default meaHowWeWork;
