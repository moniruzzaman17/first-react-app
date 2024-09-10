import React from 'react';
import './Joke.css';

export default function Joke() {
    const [joke, setJoke] = React.useState("Click the button to generate a programming joke!");

    // Fetch joke from the API
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke))
            .catch(() => setJoke("Failed to load joke. Please try again."));
    };

    return (
        <div className="container text-center">
            <div className="animated-circle circle-one"></div>
            <div className="animated-circle circle-two"></div>

            <h1 className="title">Jokes Generator</h1>
            <div className="joke-box">
                {joke}
            </div>

            <button className="btn btn-primary generate-btn" onClick={fetchApi}>
                <i className="fas fa-laugh"></i> Generate Joke
            </button>
        </div>
    );
}
