import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div className="definition">
        <p>{props.meaning.definition}</p>
      </div>
      <div className="example">
        {props.meaning.example && <em>{props.meaning.example}</em>}
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
