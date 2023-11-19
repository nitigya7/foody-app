import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams()
  useEffect(() => {
    menuData();
  },);

  const menuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+ resId +"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data)
  };
  if (resInfo === null) return <Shimmer />;
  const { itemCards } =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards);
  return (
    <div className="top_menu_wrapper">
      <div className="container">
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <h3>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(" , ")}</h3>
      <h3>{resInfo?.cards[0]?.card?.card?.info?.areaName}</h3>
      <h4>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>
      <h2>Menu</h2>
      <div className="menu_list">
        {/* {itemCards[0].card.info.name.map((items) => {
          
        })} */}
        {
          itemCards.map(item=>{
            return(
              <>
              <div key={item.card.info.id} className="menu_wrapper">
                <div className="menu_items">
                {item.card.info.name}
              Rs {item.card.info.price/ 100}
               {item.card.info.description}
               </div>
               <div className="menu_image">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ item.card.info.imageId} alt="img" />
               </div>
              </div>
              </>
            )
          })
        }
      </div>
     </div>
    </div>
  );
};

export default RestrauntMenu;
