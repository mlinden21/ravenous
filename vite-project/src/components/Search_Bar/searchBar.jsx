import React from 'react';
import './searchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {let value = sortByOptions[sortByOption];
            return <li key={value}>{sortByOption}</li>
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar__input">
                    <input type="text" placeholder="Search businesses" />
                </div>
                <div className="SearchBar__sortBy">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar__submit">
                    <button>Let's Go</button>
                </div>
            </div>
        )
    }
}