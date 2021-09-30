import './App.css';
import Counter from './containers/Counter'
import ToDoList from './containers/ToDoList'
import Timer from './containers/Timer'

function App() {
  return (
    <div className="App">
      <h2> Counter </h2>
      <Counter/> 
      <h2> Timer </h2>
      <Timer/>
      <h2> To Do List </h2>
      <ToDoList/>
    </div>
  );
}

export default App;
