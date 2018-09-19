import React from "react";
import "./ImageRow.css"

//Puts our images in a row.
const ImageRow = props =>
    <div className='table'>
        <ul id='horizontal-list'>
            {/* maps the array we send from the state. */}
            {/* Similar to forEach it goes and puts each image as a list item. */}
            {props.images.map(result => (
                <li key={result} >
                    <button>
                        <img alt='character' src={result} className='img-fluid' onClick={props.onClick} />
                    </button>
                </li>
            ))}
        </ul>
    </div>

export default ImageRow