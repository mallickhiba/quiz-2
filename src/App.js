import { NotificationContainer } from "react-notifications";
import AuthPage from "./components/authPage";
import FrontPage from "./components/frontPage";
import { useSelector } from "react-redux";

function App() {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <div className="App">
      {loggedIn ? <FrontPage /> : <AuthPage />}
      <NotificationContainer />
    </div>
  );
}
export default App;
