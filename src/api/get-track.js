import axios from "axios";

export class SongAPI {

    static async searchSpotify({
        dataType = 'track',
        searchParam = ''
    }){

        if(searchParam === '') throw new Error("Please use valid serach criteria");
        else {

            const criteria = searchParam.split(' ').join('%20');
            const searchCriteria = `${dataType}:${criteria}&type=${dataType}`;
            const search = await axios.get(
                `https://api.spotify.com/v1/search?q=${searchCriteria}`
            );

            return search.data;
        };

    };

    static async getTrack({trackName}){

        const track = await this.searchSpotify({
            searchParam: trackName
        });

        return track.data.name
    };


    static async getAlbum({albumName}){

        const album = await this.searchSpotify({
            dataType: 'album',
            searchParam: albumName
        });

        return album.data.album
    };

    static async getArtist({artistName}){

        const artist = await this.searchSpotify({
            dataType: 'artist',
            searchParam: artistName
        });

        return artist.data
    };
}