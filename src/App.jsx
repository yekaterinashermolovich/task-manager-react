import { Provider } from "react-redux";
import "./App.css";
import { EditTaskPage } from "./pages/EditTaskPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import { HomePage } from "./pages/HomePage";
// import { NotFoundPage } from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/task/:taskId/edit" element={<EditTaskPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/task/:taskId" element={<TaskDetailPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
