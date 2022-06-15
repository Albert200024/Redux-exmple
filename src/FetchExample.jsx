import React, { useState } from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import useToggle from './useToggle';
import './App.css';

export default function FetchExample() {
    let [value, setValue] = useState("")
    let {fetch1, fetch2, fetch3} = useSelector((state) => state)
    console.log(fetch3)
    let [display, setDisplay] = useState(false)
    let [displayItem, setDisplayItem] = useState(false)   
    const [toggle, setToggle] = useToggle(false)
    let [displayItem2, setDisplayItem2] = useState(false)

    const addFetch1 = (fetch1) => {
        fetch1.loadig ?  setValue("es chkam") : setValue(fetch1.users.map(i => {
            return <p key={i.id}>{i.name}</p>
        }))
     }
   
    return (
       <div style={{margin:15}}>
          <div style={display ? {display:"block"} : {display:"none"}}>
               <div>
                  <div className={displayItem  ? "itemBlock" : "itemNone"}>
                      <h2>{value}</h2>
                  </div>
                  <div>
                     <button onClick={() => addFetch1(fetch1)}>add fetch 1</button>
                     <button onClick={() => setDisplayItem(!displayItem)}>ShowItem 1</button>
                  </div>
               </div>
               <div>
                   <div className={toggle  ? "itemBlock" : "itemNone"}>
                   {fetch2.loading ? <h1>loading</h1> : 
                    fetch2.error ? <p style={{color:'red'}}>{fetch2.error}</p> : 
                    fetch2.users.map(elem => ( 
                        <p style={{color:"green"}} key= {elem.id}>{elem.email}</p>
                    ))
                   }   
                   </div>
                   <div>
                     <button onClick={setToggle}>ShowItem 2</button>
                  </div>
               </div>
               <div>
                   <div className={toggle  ? "itemBlock1" : "itemNone1"}>
                       {fetch3.loadig ? <h1>loading</h1> : 
                        fetch3.error ? <h3 style={{color:'red'}}> {fetch3.error}</h3> : 
                        fetch3.data.map((elem, index) => (
                             <h3 key={index}>{elem.city}</h3>
                        ))
                       }
                   </div>
                   <div>
                       <button onClick={setToggle}>Show Item 3</button>
                   </div>
               </div>
          </div>
          <button onClick={() => setDisplay(!display)}>Show Fetch</button>
       </div>
  )
}
