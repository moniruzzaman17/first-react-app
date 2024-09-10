import React, { useState } from 'react';
import './Joke.css';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

export default function Joke() {
    const [joke, setJoke] = useState("Click the button to generate a programming joke!");
    const [category, setCategory] = useState(''); // Default category

    // Handle category change
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    // Fetch joke from the API based on selected category
    const fetchApi = () => {
        if (!category) {
            toastr.warning('Please select a category before generating a joke.');
            return;
        }

        fetch(`https://sv443.net/jokeapi/v2/joke/${category}?type=single`)
            .then((res) => res.json())
            .then((data) => setJoke(data.joke))
            .catch(() => setJoke("Failed to load joke. Please try again."));
    };

    return (
        <div className="container text-center">
            {/* Animated Background */}
            <div className="animated-circle circle-one"></div>
            <div className="animated-circle circle-two"></div>

            {/* Main Content */}
            <h1 className="title">Jokes Generator</h1>

            {/* Category Dropdown */}
            <div className="mb-3">
                <select 
                    className="form-select"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <option value="" selected disabled>Select Jokes Category</option>
                    <option value="Programming">Programming</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                    <option value="Dark">Dark</option>
                    <option value="Spooky">Spooky</option>
                    <option value="Christmas">Christmas</option>
                </select>
            </div>

            {/* Jokes Display Box */}
            <div className="joke-box">
                {joke}
            </div>

            {/* Generate Joke Button */}
            <button className="btn btn-primary generate-btn" onClick={fetchApi}>
                <i className="fas fa-laugh"></i> Generate Joke
            </button>
        </div>
    );
}
