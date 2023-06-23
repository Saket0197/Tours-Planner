import Tour from "./Tour";
import data from "../data";
import { useState } from "react";

function Tours() {

    const [toursList, setToursList] = useState(data);

    function removeTour(id) {
        let filteredArr = toursList.filter((tour) => {
            return tour.id !== id;
        });

        setToursList(filteredArr);
    }

    function refreshTours() {
        setToursList(data);
    }

    return(
        <div>
            {
                toursList.length ? 
                            <div className="tours-container">
                               {
                                toursList.map((tour) => {
                                return <Tour key={tour.id} {...tour} removeTour = {removeTour} className = 'tour-card'/>})
                              }
                            </div>
                             : 
                        <div className="no-tours-container">
                            <h2 className="no-tours">No Tours Left</h2>
                            <button className="btn revisit-btn" onClick={refreshTours}>Revisit Tours</button>
                        </div>
            }
        </div>
    );

}

export default Tours;