
const RestrauntCard = ({name,cloudinaryImageId,cuisines,avgRating})=>{

    return(
        
        <div className="cards-men">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="img"/>
        <h3>{name}</h3>
        <h5>{cuisines.join(" ,")}</h5>
        <span>Rating {avgRating}</span>
    </div>
    )
}

export default RestrauntCard;