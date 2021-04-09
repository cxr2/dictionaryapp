import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  let audio = props.phonetic.audio;

  function playAudio() {
    const audioSound = new Audio(audio);
    audioSound.play();
  }

  return (
    <div className="Phonetic">
      <h2>
        <span class="text"> {props.phonetic.text}</span>
        <i class="fas fa-volume-up" onClick={playAudio}></i>
      </h2>
    </div>
  );
}
