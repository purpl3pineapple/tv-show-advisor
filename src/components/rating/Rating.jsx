import {StarFill, StarHalf, Star as EmptyStar} from "react-bootstrap-icons";

export const Rating = ({rating}) => {

    const starList = [];
    const starFillCount = Math.floor(rating);
    const hasHalfStar = rating - parseInt(rating) >= 0.5;
    const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={"star-fill"+i}/>);  
    };

    if(hasHalfStar) starList.push(<StarHalf key="half-star"/>);

    for (let i = 1; i <= emptyStarCount; i++) {
        starList.push(<EmptyStar key={"star-empty"+i}/>);  
    };

    return (
        <div>
            {starList}
        </div>
    );
}