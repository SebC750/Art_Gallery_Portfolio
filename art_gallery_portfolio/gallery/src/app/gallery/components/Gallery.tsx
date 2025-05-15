'use client'
import { useState, useEffect } from "react"
import { sortByDate, sortByTitle } from "@/app/utilities/functions"
import { Artwork } from "../../utilities/types"
/* 
Gallery: This is the gallery page. It is where all of the artworks are shown to the user. For compactness and organization, I organized the artworks in rows of 3 images each.
The gallery includes all of the artworks and a sort by option that allows you to sort the images by either title or the date they were first published on the internet. 
The artwork and its metadata are formatted as a hero section.
*/
const Gallery = () => {

    const [allArtworks, setArtworks] = useState<Artwork[]>([])

    const [isArtworkSelected, setIsArtworkSelected] = useState<boolean>(false)

    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleImgDownloadAttempt = (e: { preventDefault: () => void }) => {
        e.preventDefault()
    }
    const handleDragAttempt = (e: { preventDefault: () => void }) => {
        e.preventDefault();
    };



    const sortByFilter = (filterType: string) => {

        if (filterType === "title") {
            try {
                setErrorMessage(null)
                const sortedArray = sortByTitle([...allArtworks])
                if (!sortedArray) {
                    setErrorMessage("Oops, could not sort the artworks! Sorry!")
                    return null
                }
                setArtworks(sortedArray)
            } catch (e) {
                console.error(e)
                setErrorMessage("Oops, could not sort the artworks! Sorry!")
                setArtworks(allArtworks)
            }
        }

        else if (filterType === "date") {
            try {
                setErrorMessage(null)
                const sortedArray = sortByDate([...allArtworks])
                if (!sortedArray) {
                    setErrorMessage("Oops, could not sort the artworks! Sorry!")
                    return null
                }
                setArtworks(sortedArray)
            } catch (e) {
                console.error(e)
                setErrorMessage("Oops, could not sort the artworks! Sorry!")
                setArtworks(allArtworks)
            }
        }

    }
    return (
        <div className="min-h-screen">
            <div className="p-10">
                <nav className="navbar justify-between px-10">
                    <h2 className="text-4xl text-red-500 font-bold flex items-center gap-3"> <i className="bi bi-image-fill"></i> Gallery </h2>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-0 shadow-none w-40 text-xl text-red-500 border-b-2 border-red-500">Sort by</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-transparent rounded-box z-1 w-full p-2 shadow-sm">
                            <li><a type="button" className="text-red-500 link-hover font-bold underline-offset-8" > <i className="bi bi-alphabet text-3xl"></i> Title </a></li>
                            <li><a type="button" className="text-red-500 link-hover font-bold underline-offset-8"> <i className="bi bi-calendar text-3xl"></i> Date</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="px-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery