import './App.css';
import React, {useState} from 'react';

function App() {
  
  const [toDos, setToDos] = useState([
    {name: 'Book appointment', priority: 'high'},
    {name: 'Buy groceries', priority: 'high'},
    {name: 'Cook dinner', priority: 'high'},
    {name: 'Meditate', priority: 'low'}
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
      <li key={index}>
        <span>{toDo.name}, {toDo.priority}</span>
      </li>
    )
  })


  
  return (

    <>
      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {itemNodes}
      </ul>

      <form onSubmit={saveNewToDo}>
        <label htmlFor='new-toDo'>Add New To Do:</label>
        <input id='new-toDo' type='text' value={newToDo} onChange={handleToDoInput}/>
        <label htmlFor='high'>High</label>
        <input id='high' name='prority' type='radio' value='high' onChange = {handlePriority}></input> 
        <label htmlFor='low'>Low</label>
        <input id='low' name='prority' type='radio' value='low' onChange = {handlePriority}></input> 
        <input type='submit' value='Save New To Do'/>
      </form>
    </>
  );
}

export default App;
