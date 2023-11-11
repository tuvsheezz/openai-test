import Layout from "./components/Layout/Layout";
import LoginPage from "./components/Pages/LoginPage";

function App() {
  const loggedIn = localStorage.getItem("isLoggedIn");

  if (!loggedIn) return <LoginPage />;

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
