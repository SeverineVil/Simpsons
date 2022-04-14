import React, { useState, useEffect } from "react";

function Simpson() {
  const [quote, setQuote] = useState({});

  const giveMeAQuote = () => {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data[0]));
  };

  useEffect(() => giveMeAQuote(), []);

  return (
    <div className="simpson">
      <img src={quote.image} alt="" />
      <h2>{quote.quote}</h2>
      <p>{quote.character}</p>

      <div>
        <button type="button" onClick={giveMeAQuote}>
          Give Me a Quote
        </button>
      </div>
    </div>
  );
}

export default Simpson;
