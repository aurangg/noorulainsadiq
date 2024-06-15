"use client";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function Home() {
  const [pinValue, setPinValue] = useState("");
  const letterData = [
    {
      id: 0,
      pin: "4565",
      letterText: `Dear Chanda, I hope and pray that you are okay, I really hope and pray so. Today you are back home, to your home, and although it's not the first time you're back at home, it just feels different, very different this time. Not saying that whenever you have been back home, you really needed to be back, but this time, its different. Different perhaps in a sense as if someone has taken away the love of my life from me. I feel sick and it feels like autumn all over the place. I just hope you're okay. This letter series is going to be about each and every single day and today was the first day without you. It feels awful. It is very disturbing and unsettling. I just hope you're okay. I hope I can be the reason of your strength for the surgery that you have to go through. Don't be afraid. I am here with you. I am holding you. As much as I want to be there for you and I hate every single moment where I can't be with you, specially in these difficult times, I promise you this won't last for long. I can't let you face things on your own. You will never face anything, let alone facing something again. I am here, here for you, standing as a wall in front of everything and anything. Everything will have go through me first, while I give you the space to cherish and just live freely, the way you truly deserve. Each call, each message, each voice note and each reaction that came from you, was everything I needed. They were a warm hug, a very warm hug and that is why I was just being grateful. Thank you for everything. Chanda, I am grateful for everything. Grateful to have you as my partner. With each passing day, the urge to be with you is just growing. Only a matter of days till we make it official. I love you.`,
    },
  ];
  function isPinIncluded(pinValue: string) {
    return letterData.some((letter) => letter.pin === pinValue);
  }
  return (
    <main>
      <section>
        {/* <div
          className={`overlay ${isPinIncluded(pinValue) ? "no-overlay" : ""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="overlay-container">
                  <div className="d-flex" style={{ flexDirection: "column" }}>
                    <label>Enter Pin</label>
                    <input
                      className="input-field"
                      type="password"
                      placeholder="Pin"
                      onChange={(e) => setPinValue(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              {letterData.map((i, index) => (
                <>
                  <div className="letter-box" key={index}>
                    <>
                      <h2 className="letter-heading">
                        Letter {i.id + 1}/2 weeks
                      </h2>
                      <p style={{ marginBottom: "0px" }}>{i.letterText}</p>
                    </>
                  </div>
                  {/* {pinValue === i?.pin ? (
                  ) : (
                    <></>
                  )} */}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
