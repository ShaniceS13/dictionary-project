import React from "react";

export default function Phonetic(props) {
  if (!props.phonetic) return null;
  return <div className="Phonetic">{props.phonetic}</div>;
}
