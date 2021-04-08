import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="container-fluid">
          <h1>{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <h2>
                  <Phonetic phonetic={phonetic} />
                </h2>
              </div>
            );
          })}
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
