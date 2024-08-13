import Sidebar from "./Sidebar";
import Conversation from "./Conversation";

const HomePage = () => {
  return (
    <div className=" h-full w-full flex ">
      <Sidebar />
      <Conversation
      />
    </div>
  );
};

export default HomePage;
