import { useState } from "react";

import "./styles.css";

let movieArena = {
  Bollywood: [
    {
      name: "Sholay",
      desc:
        "It is a 1975 Indian Hindi-language action-adventure film starring Amitabh Bachchan, Dharmendra and directed by Ramesh Sippy, produced by his father G. P. Sippy, and written by Salim–Javed.",
      ratings: "4/5"
    },
    {
      name: "3 Idiots",
      desc:
        "It is a 2009 Indian Hindi-language coming-of-age comedy-drama film starring Aamir Khan, R.Madhavan, Kareena Kapoor,Sharman Joshi and directed by Rajkumar Hirani",
      ratings: "4/5"
    },
    {
      name: "Gangs of Wasseypur 1 & 2",
      desc:
        "It is a 2012 Indian Hindi-language two-part crime film directed by Anurag Kashyap starring Manoj Bajpai, Nawazuddin Siddiqui, Pankaj Tripathi, Richa Chadda, Huma Qureshi and Tigmanshu Dhulia in the major roles. Its story spans 68 years from 1941 to 2009.",
      ratings: "4.5/5"
    }
  ],

  Hollywood: [
    {
      name: "Scarface",
      desc:
        "Scarface is a 1983 American crime drama film directed by Brian De Palma starring Al Pacino",
      ratings: "4.5/5"
    },
    {
      name: "The Godfather",
      desc:
        "The Godfather is a 1972 American crime film directed by Francis Ford Coppola. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton",
      ratings: "5/5"
    },
    {
      name: "The Shawshank Redemption",
      desc:
        "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont starring Morgan Freeman and Tim Robbins",
      ratings: "4.5/5"
    }
  ],

  World: [
    {
      name: "City Of God",
      desc:
        "City of God (Portuguese: Cidade de Deus) is a 2002 Brazilian epic crime film co-directed by Fernando Meirelles and Kátia Lund",
      ratings: "4/5"
    },
    {
      name: "Seven Samurai",
      desc:
        "Seven Samurai (Japanese: 七人の侍, Hepburn: Shichinin no Samurai) is a 1954 Japanese epic samurai drama film co-written, edited, and directed by Akira Kurosawa",
      ratings: "4/5"
    },
    {
      name: "Fallen Angels",
      desc:
        "Fallen Angels is a 1995 Hong Kong neo-noir crime thriller drama film written and directed by Wong Kar-wai.",
      ratings: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Bollywood");

  function genreClickHandler(genre) {
    setGenre(genre);
    console.log(selectedGenre);
  }

  // var movieData = Object.keys(movieArena);

  return (
    <div className="App">
      <h1>
        Movie Arena <span> 🎥 </span>{" "}
      </h1>

      <p
        style={{
          padding: "2%",
          fontSize: "15px",
          fontWeight: "bold"
        }}
      >
        Here are some of the critically acclaimed best movies around the world.
      </p>

      <div>
        {Object.keys(movieArena).map((genre) => {
          return (
            <button
              onClick={() => {
                genreClickHandler(genre);
              }}
              style={{
                cursor: "pointer",
                padding: "0.5rem",
                margin: "0.2rem",
                border: "1px solid black",
                backgroundColor: "brown",
                color: "whitesmoke",
                borderRadius: "1rem",
                fontWeight: "bold"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />

      <div style={{ textAlign: "left", width: "50%" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieArena[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid black",
                width: "80%",
                margin: "10% 60%",
                borderRadius: "0.7rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name}</div>
              <hr />
              <div style={{ fontSize: "larger" }}> {movie.desc}</div>
              <hr />
              <div style={{ fontSize: "smaller" }}>
                Ratings: {movie.ratings}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
