import Activity from "./components/layouts/Activity";
import Feature from "./components/layouts/Feature";
import HomeLayout from "./components/layouts/Home";
import Maps from "./components/layouts/Maps";
import Photos from "./components/layouts/Photos";

const App = () => {
  return (
    <>
      <HomeLayout />
      <Feature />
      <Activity />
      <Photos />
      <Maps />
    </>
  );
};
export default App;
