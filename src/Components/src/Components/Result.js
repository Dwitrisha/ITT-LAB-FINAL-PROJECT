import React, { useState, useEffect } from "react";
import { db } from "../firebase";

function Result() {
  const [results, setResults] = useState([]);
  // when the app loads, we need to listen to database and then we get some data using fetch,
  useEffect(() => {
    //this code fires when app.js loaded
    db.collection("sentiments").onSnapshot((snapshot) => {
      setResults(
        snapshot.docs.map((doc) => ({ id: doc.id, score: doc.data().score }))
      );
    });
  }, []);

  
  return (

    <div>
    Result
    {results.map((result) => (
      <h3>{result.score}</h3>
    ))}
  </div>

  )
}

export default Result