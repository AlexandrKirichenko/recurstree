import React, {useState} from 'react'
import './App.css';

const root = {
  id: "1",
  children: [{
    id: "2",
    children: [{
      id: "3",
      children: [{
        id: "4"
      },
        {
          id: "5"
        },
        {
          id: "6"
        },
        {
          id: "7",
          children: [{
            id: "77"
          }]
        }]
    }]
  },
    {
      id: "8",
      children: [{
        id: "9",
      },
        {
          id: "10"
        }]
    }]
}

const Notes = ({ id, children }) => {
  // const [showChildren, setShowChildren] = React.useState(true);
  // const handleClick = React.useCallback(() => {
  //   setShowChildren(!showChildren);
  // }, [showChildren, setShowChildren])
 
  return (
    <ul>
      {/*<span onClick={handleClick}>*/}
      
      {/*</span>*/}
      <li>
        <h4 >{id}</h4>
        {(children ?? []).map((node) => <Notes {...node}/>)}
      </li>
    </ul>
  )
}

function App() {
  const [notes,setNotes] = useState([]);
  return (
    <div>
      <Notes {...root}/>
    </div>
  );
}

export default App;
