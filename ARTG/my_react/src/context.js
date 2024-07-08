import React, {useState, useContext, useEffect, useCallback} from 'react';

const URL = 'https://api.artic.edu/api/v1/artworks/search?q= ';
const ArtFields = '&fields=id,title,artist_title,date_display,image_id,artwork_type_title&limit=12&page=1'; //fields needed
const AppContext = React.createContext();   //holds the data we want to provide to components

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("landscape"); //landscape query will be the initial 
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const [artworkType, setArtworkType] = useState("");  // so we can filter the artworks by type


    const fetchArts = useCallback(async()=> {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}${ArtFields}`);
            const Artdata = await response.json();
            const {data} = Artdata; // extract the data array from the response 
            
            // console.log('API Data:', data); 



            if(data){
                
                /* To filter the artworks based on the artwork type (Book, Photography,..) - so we can search by art type 
                Because, based on the documentation, direct search by the artwork type is not supported through a dedicated endpoint */

                /*  Artwork Types : Print - Photograph - Drawing and Watercolor - Textile - Painting - Archtectural
                    Drawing - Vessel - Book  */
                const filteredData = artworkType
          ? data.filter((artWork) => artWork.artwork_type_title === artworkType) : data;

                const newArts = filteredData.slice(0,20).map((artWork) => {  //map over the filtered arts to create new array of specific fields
                    const {id, title, date_display, artist_title, image_id} = artWork;

                    //console.log('Art Work:', artWork); 

                        
                return {
                    id: id,
                    title:title,
                    artist: artist_title,
                    date: date_display,
                    cover_id: image_id 
                }

            });
            
             console.log('New Arts:', newArts); 

            setArts(newArts);

            if(newArts.length > 1) {
                setResultTitle("Art Works");
            } else {
                setResultTitle("No Search Results Found!");
            }

        } else {
            setArts([]);
            setResultTitle("No Search Results Found!");
        }

        setLoading(false); 

        }catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(()=> {
        fetchArts();
    }, [searchTerm, artworkType]); //whenever change, fetch arts

    return(
        <AppContext.Provider value={{  //the context values provided to components wrapped by App Provider
            loading,arts, setSearchTerm, resultTitle,
            setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {  //custom hook 
    return useContext(AppContext);
}

export {AppContext,AppProvider};
