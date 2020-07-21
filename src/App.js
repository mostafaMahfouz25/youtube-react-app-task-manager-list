import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'


// components 
import NavBar from './components/Navbar';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

// context 
import {TaskContextProvider} from './context/TaskContext';

function App() {
  return (
    <div className="app">
      <div className="overlay"></div>
      <BrowserRouter>
        <NavBar />
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto cont-app my-5">
                  <Switch>
                    <TaskContextProvider>
                      <Route exact path="/" component={TaskList} />
                      <Route path="/add-task" component={AddTask}  />
                    </TaskContextProvider>
                  </Switch>
                </div>
            </div>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
