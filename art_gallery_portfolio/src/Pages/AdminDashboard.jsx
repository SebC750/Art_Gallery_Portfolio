import "../Styles/AdminDashboard.css"
import {useState, useEffect} from "react"
import artworkAPI from "../api/artworkAPI"
const AdminDashboard = () =>{
        
        const [artworks, setArtworks] = useState([])
        useEffect(() =>{

        },[artworks])
        const updateArtworkList = () =>{

        }
        const handleDeleteArtwork = () =>{

        }
        const handleAddArtwork = () =>{

        }
        const handleUpdateArtwork = () =>{

        }
        return(
         <div>
                <h1> Welcome home Sebastian!</h1>
                 
                <div className="artwork-list">
                    
                </div>
         </div>
        )
}
export default AdminDashboard