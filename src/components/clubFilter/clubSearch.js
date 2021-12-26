import React, { useState } from "react";
import "./clubFilter.css"

const ClubSearch = (props) => {
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleKeyPress = e => { 
        if (e.key === 'Enter') { 
            alert(searchKeyword);
        }
    };

    return (
        <div className="search-container">
            <input 
                className="search-input system-font"
                type="text"
                placeholder="클럽 검색"
                value={searchKeyword}
                onChange={e => setSearchKeyword(e.target.value)}
                onKeyPress={handleKeyPress}
            />
        </div>
    )
}

export default ClubSearch