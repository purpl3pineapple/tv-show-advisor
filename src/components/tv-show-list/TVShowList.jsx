import { TVShowListItem } from "../tv-show-list-item/TVShowListItem";
import tvShowListStyle from "./style.module.css";

export const TVShowList = ({tvShowList, onItemClick}) => {

    return (
        <div>
            <div className={tvShowListStyle.title}>
                You'll porbably like:
            </div>
            <div className={tvShowListStyle.list}>
                {
                    tvShowList.map((tvShow)=> {
                        return (
                            <span 
                                key={tvShow.id}
                                className={tvShowListStyle.tv_show_item}
                            >
                                <TVShowListItem 
                                    tvShow={tvShow}
                                    onClick={onItemClick}
                                />
                            </span>
                        );
                    })
                }
            </div>
        </div>
    );
}