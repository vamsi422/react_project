import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="bg-black text-white ">
        <div className="text-center text-2xl font-bold">
          context api project
        </div>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
