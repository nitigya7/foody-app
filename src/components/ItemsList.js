import { useDispatch } from "react-redux"
import { addItems } from "../utils/cartSlice"
const ItemsList = ({items})=>{
  console.log(items.card)
  const dispatch = useDispatch()
  const handleAddItem = ()=>{
     dispatch(addItems("pizza"))
  }
    return(
        <>
        <div className="acc_text">
          <h3>nnjj</h3>
          <span className="price">23</span>
          <div className="res_cosins">
            <p>jljcsam niwmsm xz.n,xnmznxnc mxnzmcnzcncnmcz</p>
          </div>
        </div>
        <div className="acc_img">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr" alt="pixxa"/>
            <button onClick={handleAddItem}>add</button>
        </div>
        </>
    )
}
export default ItemsList