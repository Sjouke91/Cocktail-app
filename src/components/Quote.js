import React from "react";

export default function Quote() {
  function QuoteRandomizer() {
    let RandomNo = Math.floor(Math.random() * 4);

    if (RandomNo === 0) {
      return "Civelisation begins with destilation -Newton Faulkner";
    } else if (RandomNo === 1) {
      return "If life gives you limes, make margaritas -Jimmi Buffett";
    } else if (RandomNo === 2) {
      return "A perfect martini should be made by filling a glass with gin then waving it in the general direction of Italy. —Noël Coward";
    } else if (RandomNo === 3) {
      return "The next thing I knew, I was ankle deep in martinis at the Ritz Bar… —Elaine Dundy";
    } else {
      return "Remember gentlemen, it's not just France we are fighting for, it's Champagne! —Winston Churchill";
    }
  }

  const quote = QuoteRandomizer();

  return (
    <div>
      <h2>{quote}</h2>
    </div>
  );
}
