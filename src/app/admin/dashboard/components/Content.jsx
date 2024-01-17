import React from "react";

const Content = ({isSidebarOpen, children}) => {
  return <div
        className={`content ${
          isSidebarOpen ? "ml-12 md:ml-60" : "ml-12"
        } transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 `}
      >
        {children}
      </div>
};

export default Content;
