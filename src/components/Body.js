import ReastaurantCard from "./RestaurantCard";
import reslist from "../utils/mockdata";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <ReastaurantCard
            // resName="Meghana Foods"
            // cuisine="Burger,fast-Food,Chinese"
            resData={reslist[0]}
          /> */}
        {/* <ReastaurantCard resData={reslist[1]}/>
          <ReastaurantCard resData={reslist[2]}/> */}
        {reslist.map((restaurant) => (
          <ReastaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body