import { useParams } from "react-router-dom";
import { SearchResult } from "./searchresult";

export function Search(){
    const {itm}=useParams();
    
    return(
        <SearchResult item={itm}></SearchResult>
    )
}