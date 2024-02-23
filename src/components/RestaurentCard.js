import { IMAGE_URL } from '../utils/constants';

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData.info;
  const { slaString } = resData.info.sla;

  return (
    <div className="res-card">
      <div className="res-card-logo">
        <img src={`${IMAGE_URL}${resData.info.cloudinaryImageId}`} />
      </div>
      <div className="block">
        <div className="name">{name}</div>
        <div className="cost-time">
          {avgRating && (
            <>
              <span className="rating">
                <span>{avgRating}</span>
              </span>
              <span>•</span>
            </>
          )}
          <span className="time">{slaString}</span>
        </div>

        <div className="cuisines">{cuisines.join(', ')}</div>
      </div>
    </div>
  );
};
export default RestaurentCard;
