import { useSelector,useDispatch } from 'react-redux';
import { addItem, removeItem,incompleteItem } from './Components/Todoslice';
import { useRef } from 'react';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const inputRef = useRef('');
  const todos = useSelector((state) => state.Todo.items);

  function addItemHandle(){
    
    inputRef.current.value != '' ? dispatch(addItem(inputRef.current.value)) : alert('Please enter an item.');
    
  }

  function removeItemHandler(){
     
    inputRef.current.value != '' ? dispatch(removeItem(inputRef.current.value)) : alert('Please enter an item.');
   
  }
  function completeTask(index){
    
    dispatch(removeItem(index))
  }
  function inCompleteTask(index){
   
    dispatch(incompleteItem(index))
  }
  useSelector((state) => console.log(state.Todo.items))
  console.log("loaded")
  return (
    <>    
         <div className="todo-container">
                <div className="header">TODO - ITEMS</div>
                <div className="tasks">
                    {todos.map((task, index) => (   
                            <div
                            className="task"
                            style={{ textDecoration: task.completed ? "line-through" : "" }}
                            >
                            {task.title}
                            {task.completed == false ? <button onClick={() => completeTask(index)}>Complete</button> : <button onClick={() => inCompleteTask(index)}>InComplete</button>}
                            </div>                     
                    ))}
                      <input type="text" className="input" ref={inputRef} placeholder="Add a new task"/>        
                      <button onClick={addItemHandle} className='addButton'>Add Item</button> 
                </div>   
         </div>
  
    </>
  )
}

export default App
