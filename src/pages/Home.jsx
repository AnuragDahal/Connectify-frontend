import { useAuth } from "../contexts/AuthContext";
const Home = () => {
  const { token } = useAuth();
  return (
    <>
      {console.log(token ? token : "No token found")}
      <div className="pt-14 h-screen text-3xl font-semibold"></div>
    </>
  );
};

export default Home;
