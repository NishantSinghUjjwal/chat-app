import React from "react";
import Sidebar from "./Sidebar";
import Conversation from "./Conversation";

const HomePage = () => {
  return (
    <div className=" h-full w-full flex ">
      <Sidebar />
      <Conversation
        selectedUser={{
          name: "Nishant",
          profilePicture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTge9IeKn1nllU0AJc72GpZjWCx4vqF9KXcQ&s",
          isOnline: true,
        }}
      />
    </div>
  );
};

export default HomePage;
