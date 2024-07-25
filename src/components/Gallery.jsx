import React from "react";

function Gallery() {
  return (
    <div className="container">
      <h1>Gallery</h1>
      <div className="gallery">
        <img src="path/to/image1.jpg" alt="Event 1" />
        <img src="path/to/image2.jpg" alt="Event 2" />
        <img src="path/to/image3.jpg" alt="Event 3" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default Gallery;
