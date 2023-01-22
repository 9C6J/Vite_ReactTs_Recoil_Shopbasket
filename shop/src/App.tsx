import './App.css';

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Data from './data';
import Detail from './Detail';
import { basket } from './state/recoildata';

function app() {
  const [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainBox />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/detail/:id" element={<Detail content={shoes[2]} i={2} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <div className="containter">
        <div className="row">
          {shoes.map(function (item, i) {
            return <Card content={item} i={i} key={i}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  const navigate = useNavigate();

  return (
    <div className="col-md-3">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="100%"
        onClick={() => navigate(`detail/${props.i}`)}
      />
      <h4> {props.content.title}</h4>
      <p>
        {props.content.content} &amp; {props.content.price}
      </p>
    </div>
  );
}

function NotFound(props) {
  return (
    <>
      <div> 없어요123 </div>
    </>
  );
}

function MainBox(props) {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src="./assets/background.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>20% Season Off</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./assets/background.jpg" alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./assets/background.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default app;
