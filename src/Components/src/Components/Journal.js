import React, { useState, useEffect } from "react";
import "./css/Journal.css";
import angryface from "../img/angryface.png";
import cryingface from "../img/cryingface.png";
import laughing from "../img/laughing.png";
import pensiveface from "../img/pensiveface.png";
import sick from "../img/sick.png";
import sleeping from "../img/sleeping.png";
import smilingface from "../img/smilingface.png";
import stareyes from "../img/stareyes.png";
import screaming from "../img/screaming.png";
import firebase from "firebase";
import { db } from "../firebase";

var emojiset = new Set();
//Implementing sentimental analysis for text input
function Sentiment_Analysis() {
  var Sentiment = require("sentiment");
  var sentiment = new Sentiment();
  var text = document.getElementById("journal").value;
  var result = sentiment.analyze(text);
  if (result.score > 0) var type = "Positive";
  if (result.score === 0) var type = "Neutral";
  if (result.score < 0) var type = "Negative";
  alert(result.score);
  alert(Array.from(emojiset));
  //setInput("");

  db.collection("sentiments").add({
    daily_sentiments: Array.from(emojiset),
    score: result.score,
    datetime: firebase.firestore.FieldValue.serverTimestamp(),
    text: document.getElementById("journal").value,
  });
}

function selectEmoji(name) {
  if (document.getElementById(name).style.width == "80%") {
    document.getElementById(name).style.width = "60%";
    emojiset.delete(name);
  } else {
    document.getElementById(name).style.width = "80%";
    emojiset.add(name);
  }
}

class Journal extends React.Component {
  render() {
    // const [sentiments, setSentiments] = useState([]);

    return (
      <div>
        <form>
          <center>
            <h5 class="headerquestion">How do you feel today?</h5>

            <div class="emojigrid">
              <img
                src={pensiveface}
                id="sad"
                className="emoji"
                onClick={() => selectEmoji("sad")}
              />
              <img
                src={smilingface}
                className="emoji"
                onClick={() => selectEmoji("smiling")}
                id="smiling"
              />
              <img
                src={angryface}
                id="angry"
                className="emoji"
                onClick={() => selectEmoji("angry")}
              />
              <img
                src={cryingface}
                id="crying"
                className="emoji"
                onClick={() => selectEmoji("crying")}
              />
              <img
                src={sleeping}
                id="sleepy"
                className="emoji"
                onClick={() => selectEmoji("sleepy")}
              />
              <img
                src={sick}
                id="sick"
                className="emoji"
                onClick={() => selectEmoji("sick")}
              />
              <img
                src={screaming}
                id="scared"
                className="emoji"
                onClick={() => selectEmoji("scared")}
              />
              <img
                src={stareyes}
                id="excited"
                className="emoji"
                onClick={() => selectEmoji("excited")}
              />
              <img
                src={laughing}
                id="laughing"
                className="emoji"
                onClick={() => selectEmoji("laughing")}
              />
            </div>

            <h5 class="headerquestion">How did your day go?</h5>
            <p>
              <textarea id="journal"></textarea>
            </p>

            <div>
              <button
                class=" submits"
                name="sub"
                onClick={() => {
                  Sentiment_Analysis();
                }}
              >
                Submit
              </button>
            </div>
          </center>
        </form>
      </div>
    );
  }
}

export default Journal;
