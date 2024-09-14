!["This is a title image for the art gallery"](https://github.com/SebC750/Art_Gallery_Portfolio/blob/main/art_gallery_portfolio/public/Artworks/froppy.jpg)
# Art Gallery
Welcome to my art gallery! This is my website where I have all of my art viewable in an official site. Since middle school, I began pursuing art as a future endeavor and after completing middle school, I enrolled into Art and Design High School of Manhattan.

While majoring as an animator, I gained a lot of experience and learned from my mistakes with guidance from my teachers. As much as I enjoyed studying at A&D, I realized around senior year that I preferred to do art as a hobby. Since then, I did not attend art school in favor of a degree in Computer Science.

Since I began studying at St. John's University in Computer Science, I learned to use many technologies, including web development technologies. Software/Web development is something I love to pursue because like Art, it allows me to open up my creative side. 

In this project, I bring both my art and programming skills to develop an art gallery where I present all of my artworks. 

# Website Updates

## Art Gallery V1.0 is complete!
I am happy to announce that I have completed the first version of the art gallery! Here is whats new for V1.0!
- Created three pages: Homepage, Gallery and About page. The homepage gives a brief introduction of myself and what this website is about. The gallery page contains all of my artworks in a 3xN format and users can click on images to learn and see more of the picture! The about page goes further in-depth about me and my art journey from since I was in middle school!
- Added a sort by functionality that allows users to sort images by either titles or date published. IIn the future, I expect to have hundreds or even thousands of images. This can affect performance for brute force algorithms like selection and insertion sort. For my use case, I opted to use merge sort as the better worse case scenario for time complexity (o(nlogn)) will make this algorithm more suited for sorting my works in the long term.
- Added state management for holding artworks and updating artworks as sorting and selecting of artworks are done. 
- Used Bootstrap and react-router-dom to enhance styling and site navigation respectively.
- Added links to my other social media (instagram, reddit and deviantart) for people to look deeper into my work and follow me there! However, i intend for this website to be a central hub for my art to be in so all future artworks will be served here first.

## Development progress (as of 09/14/2024)
- Initialized backend folder with a database.py file where I create a database class that holds credentials to access the db. Connection test was successful.
- Initialized the commissions page where I show my prices for each type of artwork (sketch, lineart, color). Still a work in progress.
- UI improvements: Made navbar transparent + added linear gradient on the background for a more modern and polished look to the page. Removed Footer component now has better formatting (the top margin did not have enough padding). Added black borders to back to top button to prevent the secondary gradient color from occluding the button.
- Better Mobile UI responsiveness: The previous version of the art gallery had the nav buttons joined together and rounded. This led to a rather awkward looking format for the navigation links. I modified the responsive changes so that the nav buttons are rearranged in a column format for portrait shaped windows. The navigation menu now looks more well-organized and fits better on mobile devices.
- Fixed bug where code text is displayed by accident in the gallery page. This was due to a conditional statement not being closed properly. This has now been resolved.
## Future plans!
Here are my future plans for the art gallery!
- Finish writing routes and create API.js file to communicate with backend.
- Admin Dashboard to add in artpieces easily (Will need backend for this, also manually adding data to json files is going to get annoying fast).
- Search functionality (If I end up having around 150+ artpieces).
- Comment section and like/dislike buttons (Will need backend for this.).
- Commission page (Not sure how lucrative my art would be but it wouldn't hurt to get a little extra cash.).
- Tags and add search bar for tags.
- UI and function improvements.

Looking forward to seeing you all at the website! Come take a look! Hope you like what I have to show!
Website is now live at: [https://vercel.com/sebc750s-projects/art-gallery-portfolio](https://art-gallery-portfolio-dvkxa31b2-sebc750s-projects.vercel.app/)


## Tech Stack

### Frontend
- HTML
- CSS
- JSX
- React.js
### Backend
- Python Flask
- MongoDB