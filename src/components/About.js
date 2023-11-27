import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = ()=>{
const {logdin} = useContext(UserContext)
    return(
        <>
        <h1>this is about page {logdin}</h1>
        </>
    )
}
export default About;