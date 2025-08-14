import React from "react";
import team from '../assets/gallery/team.jpg';
import celebrate from '../assets/gallery/celebrate.jpg';
import coding from '../assets/gallery/coding.jpg';
import meeting from '../assets/gallery/meeting.jpg';
import office from '../assets/gallery/office.jpg';
import project from '../assets/gallery/project-review.jpg';


const images = [
  { id: 1, src: team, alt: "Team brainstoring", title: "Team" },
  { id: 2, src: celebrate, alt: "Celebration Event", title:"Celebration Event" },
  { id: 3, src: coding, alt: "Coding Session", title:"Coding Session" },
  { id: 4, src: meeting, alt: "Client Meeting", title:"Client Meeting" },
  { id: 5, src: office, alt: "Office Space", title:"Office Space" },
  { id: 6, src: project, alt: "project-review", title:"Project Review" },
]

const OurGallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center max-w-7xl mx-auto px-4 py-12 text-gray-800">
        Our Gallery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
        {images.map(({ id, src,title, alt }) => (
          <figure
            key={id}
            className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-2xl shadow-md group"
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            {/* Title */}
             <div className="absolute top-0 left-0 w-full bg-black/60 text-white text-sm sm:text-base font-semibold px-3 py-2 flex justify-center">
              {title}
            </div>
            {/* Caption overlay */}
            <figcaption className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-medium tracking-wide transition-opacity duration-300">
              {alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default OurGallery;
