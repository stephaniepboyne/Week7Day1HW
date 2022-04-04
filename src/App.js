import './App.css';
import React, {useState} from 'react';

function App() {
  
  const [toDos, setToDos] = useState([
    {name: 'Book appointment', priority: 'High Priority'},
    {name: 'Buy groceries', priority: 'High Priority'},
    {name: 'Cook dinner', priority: 'High Priority'},
    {name: 'Meditate', priority: 'Low Priority'}
  ]);

  const [newToDo, setNewToDo] = useState('');
  const [newPriority, setNewPriority] = useState('');
  
  const handleToDoInput = (event) => {
    setNewToDo(event.target.value)
  }

  const handlePriority = (event) => {
    setNewPriority(event.target.value)
  }

  const saveNewToDo = (event) => {
    event.preventDefault();
    const copyToDos = [...toDos];
    copyToDos.push({name: newToDo, priority: newPriority});
    setToDos(copyToDos);
    setNewToDo('')
  }

  const itemNodes = toDos.map( (toDo, index) => {
    return (
      <li key={index} class = {toDo.priority == 'High Priority' ? 'high-priority' : 'low-priority'}>
        <span>{toDo.name} : {toDo.priority}</span>
      </li>
    )
  })


  
  return (

    <>
      <h1>To Do List</h1>
      <br></br>

      <ul>
        {itemNodes}
      </ul>

      <br></br>

      <form onSubmit={saveNewToDo}>
        <label htmlFor='new-toDo'>Add New To Do:</label>
        <input id='new-toDo' type='text' value={newToDo} onChange={handleToDoInput}/>
        <br></br>
        <br></br>
        <label htmlFor='high'>High</label>
        <input id='high' name='prority' type='radio' value='High Priority' onChange = {handlePriority}></input> 
        <br></br>
        <br></br>
        <label htmlFor='low'>Low</label>
        <input id='low' name='prority' type='radio' value='Low Priority' onChange = {handlePriority}></input> 
        <br></br>
        <br></br>
        <input id = 'save' type='submit' value='Save New To Do'/>
      </form>
    </>
  );
}

export default App;
