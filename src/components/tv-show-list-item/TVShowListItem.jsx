import { Config } from "../../config";
import listItemStyle from "./style.module.css";

const MAX_TITLE_CHAR = 20;

export const TVShowListItem = ({tvShow, onClick}) => {
    const on_click = () => onClick(tvShow);

    return (
        <div 
            className={listItemStyle.container}
            onClick={on_click}
        >
            <img 
                src={Config.SMALL_IMG_COVER_BASE_URL+tvShow.backdrop_path} 
                alt={tvShow.name} 
                className={listItemStyle.img} 
            />
            <div className={listItemStyle.title}>
                {tvShow.name.length > MAX_TITLE_CHAR 
                    ? tvShow.name.slice(0, MAX_TITLE_CHAR)+"..." 
                    : tvShow.name
                }
            </div>
        </div>
    );
}