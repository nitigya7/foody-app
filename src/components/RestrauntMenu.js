import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestrauntCategory from "./RestrauntCategory";
const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const[showIndex,setShowIndex] = useState(0)
  const { resId } = useParams();
  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
    // console.log(json.data)
  };
  if (resInfo === null) return <Shimmer />;
  // console.log(resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[0].card.card);
  const categories =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c=> c.card.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  )

  // console.log(categories);
  return (
    <div className="top_menu_wrapper">
      <div className="container">
        <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
        <h3>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(" , ")}</h3>
        <h3>{resInfo?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h4>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>
        <h2>Menu</h2>
        <div className="menu_list">
          {categories.map((cat,index) => {
            // controlled component
            return (
              <>
                <RestrauntCategory data = {cat.card?.card} key={cat?.card?.card.title}
                 accShow={index === showIndex? true : false} setShowIndex = {()=>setShowIndex(index)} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;
