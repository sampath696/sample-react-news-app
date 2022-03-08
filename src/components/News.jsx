import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./App.css";

const News = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    // var url =
    //   "http://newsapi.org/v2/top-headlines?country=in&apiKey=7976b61bad274197a89216117adc7b42";
    var url =
      "http://newsapi.org/v2/top-headlines?country=in&apiKey=ed60638fa7674d3d9b592036d42ae4e5";
    var req = new Request(url);
    fetch(req).then((res)=> { 
      return res.json()
      .then((myJson) => {
      setArticle(myJson.articles);
      });
    });
  });

  return (
    <div className="ent">
      {article.map((item, index) => {
        return (
          <div className="demo" key={index}>
            <p className="title"> {item.title} </p>
            <br />
            <img src={item.urlToImage} alt="newsImg" />
            <br />

            <p className="h1" className="content">
              {" "}
              {item.content}{" "}
            </p>
            <br />
            <p className="desc"> {item.description} </p>
            <br />
            <p className="author"> {item.author} </p>
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
  );
};

export default News;
