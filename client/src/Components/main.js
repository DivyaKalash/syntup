  
import React from 'react';
import "../Css/home.css";
import synimg from "../images/SYNTUP.png";
const SiteInfo = () => {
    return (
        <>
        <div className="container">
            <div className="main-content">
        <div className="site-info">
            <div className="title">
                Syntup
            </div>
            <div className="xyz">
                 Connecting to your needs...
                 
            </div>
            <div className="abc">
               CONNECT HERE || BOOK HERE

            </div>
        </div>
        </div>
        </div>
        <div>
    <img class="img2" src={synimg} alt="not able"/>
    <img class="img1" src={synimg}/>
    </div>
    </>
    )
}
export default SiteInfo;