"use client";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  const handleFlip2 = () => {
    setIsFlipped2(true);
  };

  return (
    <main>
      <section className="home-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="main-heading">Hello Noor!</h2>
              <p className="main-text">I wanted to do something for you.</p>
              <p className="main-text">Because I miss you so.</p>
            </div>
            <div className="col-lg-12">
              <h2 className="other-heading">Select between two..</h2>
              <p className="main-text">
                Upon clicking, you will get to see what's behind the box
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="space-between">
                <div
                  className="perspective"
                  style={{ display: isFlipped2 === true ? "none" : "" }}
                >
                  <div
                    className={`choice-button ${isFlipped ? "flipped" : ""}`}
                    onClick={handleFlip}
                  >
                    <div className="front">Choice 1</div>
                    <div className="back">Spotify Jam</div>
                  </div>
                </div>
                <div
                  className="perspective"
                  style={{ display: isFlipped === true ? "none" : "" }}
                >
                  <div
                    className={`choice-button ${isFlipped2 ? "flipped" : ""}`}
                    onClick={handleFlip2}
                  >
                    <div className="front">Choice 2</div>
                    <div className="back">Call Me?</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
