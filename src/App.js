import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import FetchExample from './FetchExample';
import { editName, loadUser, selectName } from './store/features/currentUser/currentUserSlice';
import { actionFuncCounter } from './store/features/counter/newCounter';

function App() {
  const {currentUser, todos, counter} = useSelector((state) => state )
  const dsipatch = useDispatch()
 
  let [value, setValue] = useState("")
  useEffect(() => {
     dsipatch(loadUser())
  }, [])
   
  console.log(counter)
  return (
    <div className="App">
          <h1>{currentUser.name}</h1>
          <input type="name" value={currentUser.name}
          onChange={(evnt) => {
                dsipatch(editName(evnt.target.value))
          }}/>
          <h1>{counter}</h1>
          <input type="number" onChange={(e) => setValue(e.target.value)} />
          <button onClick={() => dsipatch(actionFuncCounter(value))}>+</button>
          <FetchExample/>
    </div>
  );
}

export default App;
