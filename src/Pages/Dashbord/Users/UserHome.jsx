import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const UserHome = () => {

    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }
    console.log(rating);
    return (
        <section>
            User
            <Rating
                onClick={handleRating}
                size={50}
                transition
                allowFraction
                showTooltip
                tooltipArray=""
                fillColorArray=""
            /* Available Props */
            />

        </section>
    );
};

export default UserHome;