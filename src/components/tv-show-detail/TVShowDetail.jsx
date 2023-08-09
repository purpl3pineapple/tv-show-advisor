import { Rating } from "../rating/Rating";
import detailStyle from "./style.module.css";

export const TVShowDetail = ({tvShow}) => {

    const rating = tvShow.vote_average /2;
    return <div>
        <div className={detailStyle.title}>
            {tvShow.name}
        </div>
        <div className={detailStyle.rating_container}>
            <Rating rating={rating}/>
            <span className={detailStyle.rating}>{rating}/5</span>
        </div>
        <div className={detailStyle.overview}>
            {tvShow.overview}
        </div>
    </div>
}