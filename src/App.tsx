import MainLayOut from "./components/layout/MainLayOut";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute>
        <MainLayOut />
      </ProtectedRoute>
    </>
  );
}

export default App;
