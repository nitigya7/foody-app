import { FaAngleDown } from "react-icons/fa6";
import ItemsList from "./ItemsList";
    const RestrauntCategory = ({data,accShow,setShowIndex}) => {
        console.log(data.itemCards)
        const HandelAcc = ()=>{
            setShowIndex()
        }
        // const AccStyle = {
        //     disingplay: accShow ? "flex": "none"
        // }
    return (
        <div className="res_acc">
        <div className="acc_header" onClick={HandelAcc}>
            <h2>{data.title}</h2>
            <div className="acc_icon">
            <FaAngleDown/>
            </div>
        </div>
        <div className="acc_body">
            
        {accShow ?  <ItemsList  items = {data.itemCards}/> : null}
        </div>
        
        </div>
        
    );
    };
    export default RestrauntCategory;
