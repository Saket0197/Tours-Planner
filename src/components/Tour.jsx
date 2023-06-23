import { useState } from "react";

export default function Tour({id,image,price,name,info,removeTour,className}) {

    const [isReadingMore, setReadingMore] = useState(false);
    let description = isReadingMore ? `${info}....` : `${info.substring(0,200)}....`;

    function changeText() {
        setReadingMore(!isReadingMore);
    }

    let cardClass = `${className} card-${id}`

    return(
        <div id={id} className={cardClass}>
            <img className={`img img-${id}`} src={image} alt="tour-loc-pic" />
            <div className={`tour-price price-${id}`}>{`₹ ${price}`}</div>
            <div className={`tour-name name-${id}`}>{name}</div>
            <div className={`tour-desc desc-${id}`}>
                {description}
                <span className="expandText" onClick={changeText}>{isReadingMore ? `Show Less`: `Read More`}</span>
            </div>
            <button className="btn not-interested-btn" onClick={()=>{removeTour(id)}}>Not Interested</button>
        </div>
    );

}