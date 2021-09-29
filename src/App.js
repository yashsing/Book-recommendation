import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Biography: [
    {
      name: "Steve Jobs by Walter Isaacson ",
      description:
        "Walter Isaacson's worldwide bestselling biography of Apple cofounder Steve Jobs. Based on more than forty interviews with Steve Jobs conducted over two years--as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues--Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. "
    },
    {
      name: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
      description:
        "Elon Musk, the entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, sold one of his internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius's life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits."
    },
    {
      name: "Can't Hurt Me: Master Your Mind and Defy the Odds ",
      description:
        "For David Goggins, childhood was a nightmare - poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes"
    }
  ],

  Fiction: [
    {
      name:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      description:
        "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results."
    },
    {
      name: "Think Again: The Power of Knowing What You Don't Know",
      description:
        "Evidence has shown that creative geniuses are not attached to one identity, but constantly willing to rethink their stances and that leaders who admit they don't know something and seek critical feedback lead more productive and innovative teams."
    },
    {
      name: "Breath: The New Science of a Lost Art",
      description:
        "There is nothing more essential to our health and well-being than breathing: take air in, let it out, repeat twenty-five thousand times a day. Yet, as a species, humans have lost the ability to breathe correctly, with grave consequences."
    }
  ],
  business: [
    {
      name: "Zero to One: Notes on Startups, or How to Build the Future",
      description:
        "if you want to build a better future, you must believe in secrets. The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things. "
    },
    {
      name: "Rework by Jason Fried, David Heinemeier Hansson",
      description:
        "What you really need to do is stop talking and start working. This book shows you the way. You'll learn how to be more productive, how to get exposure without breaking the bank, and tons more counterintuitive ideas that will inspire and provoke you."
    },
    {
      name:
        "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers",
      description:
        "In The Hard Thing About Hard Things, Ben Horowitz, cofounder of Andreessen Horowitz and one of Silicon Valley's most respected and experienced entrepreneurs, draws on his own story of founding, running, selling, buying, managing, and investing in technology companies to offer essential advice and practical wisdom for navigating the toughest problems business schools don't cover."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 className="header"> Bookopedia </h1>
      <p className="line">
        Checkout my favorite books. Select a genre to get started.
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "auto",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
