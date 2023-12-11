import React from "react";

function Content() {
  return (
    <div className="content">
      <a href="/#" className="btn">
        2024 Collection
      </a>
      <h1>
        You should always <br />
        feel comfortable
      </h1>
      <p>The perfect mind in healthy body</p>
      <div className="arrow">
        <i class="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div className="social">
        <i
          class="fa-brands fa-instagram"
          style={{
            color: "#f8f9fa8a",
            background:
              " radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)",
          }}
        ></i>
        <i class="fa-brands fa-facebook" style={{ color: "#3b5998" }}></i>
        <i class="fa-brands fa-twitter" style={{ color: "#00acee" }}></i>
      </div>
    </div>
  );
}

export default Content;
