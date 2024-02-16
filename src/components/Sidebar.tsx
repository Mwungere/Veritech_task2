import {
  Archive,
  Expand,
  House,
  Message,
  People,
  RequestPage,
  Settings,
} from "@mui/icons-material";
import { Icon, IconButton } from "@mui/material";
import React from "react";

const iconList = [
  {
    icon: <Message sx={{ fontSize: "30px" }} />,
    link: "/",
  },
  {
    icon: <People sx={{ fontSize: "30px" }} />,
    link: "/friends",
  },
  {
    icon: <House sx={{ fontSize: "30px" }} />,
    link: "/marketplace",
  },
  {
    icon: <RequestPage sx={{ fontSize: "30px" }} />,
    link: "/requests",
  },
  {
    icon: <Archive sx={{ fontSize: "30px" }} />,
    link: "/archive",
  },
];

const Sidebar = () => {
  return (
    <div className=" w-[20%] flex flex-col justify-between h-screen border">
      <div className=" w-full flex flex-col">
        <div className=" w-full flex flex-col p-1">
          {iconList.map((item, index) => {
            return (
              <div className="rounded-full w-full">
                <a
                  href={item.link}
                  key={index}
                  className={` text-gray-500 text-3xl`}
                >
                  <IconButton>
                    {item.icon}
                  </IconButton>
                    
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-full flex flex-col p-2 gap-5">
        <IconButton>
        <Settings sx={{fontSize: '30px'}} className=" text-gray-500" />
        </IconButton>
        <IconButton>
        <Expand sx={{fontSize: '30px'}} className=" text-gray-500"/>
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
