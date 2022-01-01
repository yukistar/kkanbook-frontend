import React from "react";
import "./clubFilter.css"

const ClubSearch = (props) => {
    const handleKeyPress = e => { 
        if (e.key === 'Enter') { 
            alert(props.searchKeyword);
        }
    };

    return (
        <div className="search-container">
            <input 
                className="search-input system-font"
                type="text"
                placeholder="클럽 검색"
                value={props.searchKeyword}
                onChange={e => props.setSearchKeyword(e.target.value)}
                onKeyPress={handleKeyPress}
            />
        </div>
    )
}

export default ClubSearch