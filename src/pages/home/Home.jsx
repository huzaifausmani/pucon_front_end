import "./home.css";
import React from "react";
import { teamName } from "../../resources/constants";
import Button from "../../utils/Button/Button";

/**
 * @description Renders the Landing Page of trident's team app before login.
 * @param {null} null Accepts nothing as parameter.
 * @react_page  
 */

export default function Home() {
    return <>
        <div className="otr-home">
            <div className="inr-home">
                <hr className="upr-hr-home" />
                <span className="home-txt">{teamName}</span>
                <hr className="lwr-hr-home" />
                <Button
                    buttonText={"teamplay"}
                    textSize={19}
                    buttonOnClick={null}
                />
            </div>
        </div>
    </>
};
