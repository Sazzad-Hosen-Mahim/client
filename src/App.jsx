import "./App.css";
import { TaskGrid } from "./components/Content/TaskGrid";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <TaskGrid />
        </div>
      </div>
    </>
  );
}

export default App;
