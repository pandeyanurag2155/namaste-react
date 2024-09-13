import{ CDN_URL } from "../utils/constants"

const ReastaurantCard = (props) => {
  // const {resName,cuisine}=props;
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  const deliveryTime = sla?.deliveryTime;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        // src="https://th.bing.com/th/id/R.38cfd8403144119e8d3e3d176a963016?rik=aIKV8RSzKHPIKw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fDesktop-Food-HD-Wallpapers-Free-Download.jpg&ehk=szmS7%2bieRDd4VVw82%2fkxoSha9HiVHqUNAZr02wqxugc%3d&risl=1&pid=ImgRaw&r=0"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};
export default ReastaurantCard