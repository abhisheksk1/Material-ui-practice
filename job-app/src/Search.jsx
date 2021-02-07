import { SentimentSatisfied } from '@material-ui/icons';
import React from 'react';
import "./Search.css"

const Search = () => {
    
    return (
        <div className="search-box">
            <input
                type="text"
                className="search-txt" 
                placeholder="Type to Search"
            />
            <a href="" className="search-btn">
                <i className="fas fa-search"></i>
            </a>
        </div>
    );
};

export default Search;
