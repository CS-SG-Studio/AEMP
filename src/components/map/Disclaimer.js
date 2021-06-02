import React from 'react'
import './Disclaimer.css'
import styled from 'styled-components';

function Disclaimer(props) {
    return (props.trigger) ? (
        <div className="disclaimer">
            <div className="disclaimer-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}


export default Disclaimer