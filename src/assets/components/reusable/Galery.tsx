import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [images, setImages] = useState<any>([]);

  useEffect(() => {
    // Fetch images from an API (e.g., Unsplash)
    fetch(
      "https://api.unsplash.com/photos?client_id=9k8C3bkkp1acFZiDJ3qNWAdbco5Ap-T-v710qaFhf2o"
    )
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Gallery</h1>
      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        {images.map(
          (image: {
            id: React.Key | null | undefined;
            urls: { small: string | undefined };
            description: string | undefined;
          }) => (
            <div
              key={image.id}
              className="group relative rounded-lg overflow-hidden shadow-lg w-fit h-fit"
            >
              <img
                src={image.urls.small}
                alt={image.description}
                className=" object-cover transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0  bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <p className="text-white text-lg">
                  {image.description || "No Description"}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Gallery;
