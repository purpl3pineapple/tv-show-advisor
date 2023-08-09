import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import main from "./style.module.css"
import { Config } from "./config";
import { TVShowDetail } from "./components/tv-show-detail/TVShowDetail";
import { Logo } from "./components/logo/Logo";
import logoImg from "./assets/images/logo.png";
import { TVShowList } from "./components/tv-show-list/TVShowList";
import { SearchBar } from "./components/search-bar/SearchBar";

export const App = () => {

    const [currentTVShow, setCurrentTVShow] = useState();
    const [top10recommendations, setTop10Recommendations] = useState([]);

    async function fetchPopulars(){
        
        try {
            const popularTVShows = await TVShowAPI.fetchPopulars();
            if (popularTVShows.length > 0) setCurrentTVShow(popularTVShows[0]);
        } catch(e) {
            alert("Something went wrong fetching popular shows...");
        };
    };

    async function fetchRecommendations(tvShowID){
        try {
            const recommendationList = await TVShowAPI.fetchRecommendations(tvShowID);
            if (recommendationList.length > 0) setTop10Recommendations(recommendationList.slice(0, 10));
        } catch(e){
            alert("Something went wrong fetching recommended shows...");
        };
    };

    async function fetchByTitle(title){
        try {
            const tvShow = await TVShowAPI.fetchByTitle(title);
            if (tvShow.length > 0) setCurrentTVShow(tvShow[0]);
        } catch(e){
            alert("Something went wrong searching for requested show...");
        };
    };
    

    function updateCurrentTVShow(tvShow){
        setCurrentTVShow(tvShow);
    };

    useEffect(()=> {
        fetchPopulars()
    }, []);

    useEffect(()=> {
        
        if (currentTVShow) fetchRecommendations(currentTVShow.id);

    }, [currentTVShow]);
    
    return (
        <div 
        className={main.main_container}
        style={{
            background: currentTVShow 
            ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${Config.BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
            : 'black',
        }}
        >
            <div className={main.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo img={logoImg} title={"WhatToWatch?"} subtitle={"Find a show you like"}/>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <SearchBar onSubmit={fetchByTitle}/>
                    </div>
                </div>
            </div>
            <div className={main.tv_show_detail}>
                {
                    currentTVShow && 
                    <TVShowDetail tvShow={currentTVShow}/>
                }
            </div>
            <div className={main.recommended_tv_shows}>
                {
                    currentTVShow && 
                    <TVShowList 
                        tvShowList={top10recommendations}
                        onItemClick={updateCurrentTVShow}
                    />
                }
            </div>
        </div>
    );
};