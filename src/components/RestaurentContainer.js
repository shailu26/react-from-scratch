import { useState } from 'react';
import { resList } from '../utils/mockData';
import RestaurentCard from './RestaurentCard';

const RestaurentContainer = () => {
  const [resData, setResData] = useState(resList);

  return (
    <>
      <div className="filter-block">
        <button
          className="filter-btn"
          onClick={() => {
            setResData(resData.filter((d) => d.info.avgRating > 4));
          }}
        >
          Top Restautrents
        </button>
      </div>
      <div className="res-container">
        {resData.map((res) => (
          <RestaurentCard key={res.info.id} resData={res} />
        ))}
      </div>
    </>
  );
};

export default RestaurentContainer;
