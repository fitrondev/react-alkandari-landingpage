import Activity from "./components/layouts/Activity";
import Feature from "./components/layouts/Feature";
import HomeLayout from "./components/layouts/Home";
import Photos from "./components/layouts/Photos";

const App = () => {
  return (
    <>
      <HomeLayout />
      <Feature />
      <Activity />
      <Photos />
    </>
  );
};
export default App;
