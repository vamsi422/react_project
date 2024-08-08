import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {

  return (
    <div className="px-4 py-2  text-gray-200 bg-zinc-700 min-h-screen ">
      <h1 className='text-center p-2 text-3xl border-b border-gray-200 '>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App

// motes : REDUX (a predictable state container for js apps)
// * face book developed Flux sate management tool(for better state management and data flow) later around 2015 redux is built on top of Flux
// * single source of truth,read only state ,changes should be made as pure function (reducers)
// * setting up redux for complicated so later on redux-toolkit was introduced.
//           STORE
//        REDUCERS
//      useSelector , useDispatch (it has only this two methods)