import React from "react";
import "../css/Portfoliohead.css";
function HeadSection({ BodySections, setBodySections }) {
  return (
    <>
      <div className="portfolio-head-section container-fluid">
        <p
          className={`portfolio-head-titles ${
            BodySections === "Wildlife" && "portfolio-head-titles-active"
          }`}
          onClick={() => setBodySections("Wildlife")}
        >
          Wildlife
        </p>
        <p
          className={`portfolio-head-titles ${
            BodySections === "Travel" && "portfolio-head-titles-active"
          }`}
          onClick={() => setBodySections("Travel")}
        >
          Travel
        </p>
        <p
          className={`portfolio-head-titles ${
            BodySections === "Still Life" && "portfolio-head-titles-active"
          }`}
          onClick={() => setBodySections("Still Life")}
        >
          Still Life
        </p>
        <p
          className={`portfolio-head-titles ${
            BodySections === "Creative" && "portfolio-head-titles-active"
          }`}
          onClick={() => setBodySections("Creative")}
        >
          Creative
        </p>
        <p
          className={`portfolio-head-titles ${
            BodySections === "Macro" && "portfolio-head-titles-active"
          }`}
          onClick={() => setBodySections("Macro")}
        >
          Macro
        </p>
        <p
          className={`portfolio-head-titles ${
            BodySections === "Nature" && "portfolio-head-titles-active"
          }`}
          onClick={() => setBodySections("Nature")}
        >
          Nature
        </p>
        <p
          className={`portfolio-head-titles ${
            BodySections === "People" && "portfolio-head-titles-active"
          }`}
          onClick={() => setBodySections("People")}
        >
          People
        </p>
        <p
          className={`portfolio-head-titles ${
            BodySections === "See all" && "portfolio-head-titles-active"
          }`}
          onClick={() => setBodySections("See all")}
        >
          See all
        </p>
      </div>
      <select
        name="head-section-options"
        id="select-section-for-head"
        value={BodySections}
        onChange={(e) => setBodySections(e.target.value)}
      >
        <option value="Wildlife">Wildlife</option>
        <option value="Travel">Travel</option>
        <option value="Still Life">Still Life</option>
        <option value="Creative">Creative</option>
        <option value="Macro">Macro</option>
        <option value="Nature">Nature</option>
        <option value="People">People</option>
        <option value="See all">See all</option>
      </select>
    </>
  );
}

export default HeadSection;
