import React, { useState } from 'react';

const Card = (props) => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  const toggleShowInfo = () => {
    setShowFullInfo(!showFullInfo);
  };

  const containerHeight = showFullInfo ? 'h-auto' : 'h-96';

  return (
    <div className={`relative mt-10 text-gray-700 bg-white shadow-md rounded-xl w-96 ${containerHeight} m-9`}>
      <div className="relative w-52 h-52 mx-auto -mt-6 overflow-hidden rounded-full">
        <img
          src={props.url}
          alt="card-image"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="p-6">
        <h5 className="block mb-2 text-xl font-bold text-center">
          {props.name}
        </h5>
        <p className="text-center">
          {showFullInfo ? props.info : `${props.info.slice(0, 200)}...`}
        </p>
      </div>

      <div className="p-6 pt-0 text-center">
        <button
          className="py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg hover:shadow-gray-900"
          type="button"
          onClick={toggleShowInfo}
        >
          {showFullInfo ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Card;
