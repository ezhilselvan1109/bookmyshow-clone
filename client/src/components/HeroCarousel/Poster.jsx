import React, { useState } from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Poster = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: '../../../public/assets/97-minutes.avif',
      title: '97 Minutes 1',
      description: 'Tamil',
    },
    {
      image: '../../../public/assets/Jurassic-world-ultimate-collection.avif',
      title: 'Jurassic World Ultimate Collection 2',
      description: 'English',
    },
    {
      image: '../../../public/assets/Sniper-the-last-stand.avif',
      title: 'Sniper The Last Stand 3',
      description: 'English',
    },
    {
      image: '../../../public/assets/97-minutes.avif',
      title: '97 Minutes 4',
      description: 'Tamil',
    },
    {
      image: '../../../public/assets/Sniper-the-last-stand.avif',
      title: 'Sniper The Last Stand 5',
      description: 'English',
    },
    {
      image: '../../../public/assets/97-minutes.avif',
      title: '97 Minutes 6',
      description: 'Tamil',
    },
    {
      image: '../../../public/assets/Jurassic-world-ultimate-collection.avif',
      title: 'Jurassic World Ultimate Collection 7',
      description: 'English',
    },
    {
      image: '../../../public/assets/Sniper-the-last-stand.avif',
      title: 'Sniper The Last Stand 8',
      description: 'English',
    },
    {
      image: '../../../public/assets/97-minutes.avif',
      title: '97 Minutes 9',
      description: 'Tamil',
    },
    {
      image: '../../../public/assets/Sniper-the-last-stand.avif',
      title: 'Sniper The Last Stand 10',
      description: 'English',
    }
  ];

  const handleNext = () => {
    setCurrentIndex(5);
  };

  const handlePrev = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="my-2 mx-5 bg-gray-400">
      <div className="w-11/12 ">
        <div className="relative">
          <div className="flex space-x-4">
            {cards.slice(currentIndex, currentIndex + 5).map((card, index) => (
              <div className="flex-none w-1/5 p-2" key={index}>
                <img className="object-cover rounded-sm" src={card.image} alt="Card" />
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 absolute">
            {currentIndex != 0 ?
              <button className="w-12 h-12 text-center rounded-full bg-gray-300 right-4" onClick={handlePrev}><MdArrowBackIosNew /></button>
              :
                <button className="w-12 h-12 text-center rounded-full bg-gray-300 left-10" onClick={handleNext}><MdArrowForwardIos /></button>
            }</div>
        </div>
      </div>
    </div>
  );
};

export default Poster;