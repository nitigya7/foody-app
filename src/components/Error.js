import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError()
    return(
        <>
        <h1>opps !!!</h1>
        <h2>something went wrong !!</h2>
        <h3>
          {err.status}: {err.statusText}
        </h3>
        </>
    )
}

export default Error;