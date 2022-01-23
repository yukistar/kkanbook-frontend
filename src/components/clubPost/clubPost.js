import React from "react";
import { useHistory } from "react-router-dom"
import { Cookies } from "react-cookie";
import Button from "react-bootstrap/Button";
import "./clubPost.css"

const ClubPost = () => {
    const history = useHistory();
    const cookiesUser = new Cookies().get('rememberUser');

    const clickedPostBtn = () => {
        (cookiesUser !== undefined) ? 
        history.push("/post") : 
        history.push({pathname: "/signin", state: {history: history.location.pathname}})
    }

    return (
        <div className="club-post">
            <Button 
                onClick={clickedPostBtn}
                size="lg" className="popup-button"
            >+</Button>
        </div>
    )
}

export default ClubPost