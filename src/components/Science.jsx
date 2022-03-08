import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./App.css";

const Science = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    // var url =
    //   "http://newsapi.org/v2/top-headlines?country=in&apiKey=7976b61bad274197a89216117adc7b42";
    var url =
      "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=ed60638fa7674d3d9b592036d42ae4e5";
    var req = new Request(url);
    fetch(req).then(function (response) {
      return response.json().then((myJson) => {
        setArticle(myJson.articles);
      });
    });
  });

  return (
    <div className="ent" >

      <div className="main">
        {/* <h1>bEwaKooF neWs</h1> <br /> */}
        {article.map((item, index) => {
          return (
            <div className="demo" background={item.urlToImage} key={index}>
              <p className="title"> {item.title} </p>
              <br />
              <img
                src={item.urlToImage}
                height="300px"
                width="500px"
                alt="newsImg"
              />
              <br />

              <p className="content"> {item.content} </p>
              <br />
              <p className="desc"> {item.description} </p>
              <br />
              <p className="author"> {item.author} </p>
              <br />
              <a className="read" href={item.url} target="_blank">
                read more
              </a>
              <br />
              <br />
              <br />
              <hr color="black" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Science;
