import { useState } from "react";

const useToggle = (initalState = true) => {
   const [toggle, setToggle] = useState(initalState)
   const show = () => setToggle(!toggle)
   return [toggle, show]
}

export default useToggle