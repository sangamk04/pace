import React from "react";

import "./home.css";

const Home = (props) => {
  console.log(props.todos);

  return (
    <div>
      <div class="main">
        {props.todos.map((e) => {
          return (
            <div id="inner">
              <div>
                <img src={e.urlToImage} alt="" id="img" />
              </div>

              <div>
                <p id="date">{e.publishedAt}</p>
                <h4 id="title">{e.title}</h4>
                <p id="desc">{e.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
