
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Friend, SelectFriendFunction } from "../types";



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.light, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.light, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface FriendsProps {
  onSelectFriend: SelectFriendFunction;
}

const Friends: React.FC<FriendsProps> = ({ onSelectFriend }) => {
  const friendList: Friend[] = [
    {"index": 1, "name": "Alice", "message": "Alice, a good friend, is now available on Messenger", img:'https://randomuser.me/api/portraits/women/29.jpg', active:"2h"},
    {"index": 2, "name": "Bob", "message": "Hey, Bob is online on Messenger", img:'https://randomuser.me/api/portraits/men/19.jpg', active:"2h"},
    {"index": 3, "name": "Charlie", "message": "Charlie is now active on Messenger", img:'https://randomuser.me/api/portraits/women/59.jpg', active:"2h"},
    {"index": 4, "name": "David", "message": "David, your buddy, is online on Messenger", img:'https://randomuser.me/api/portraits/men/89.jpg', active:"2h"},
    {"index": 5, "name": "Eve", "message": "Eve is available for a chat on Messenger", img:'https://randomuser.me/api/portraits/women/23.jpg', active:"2h"},
    {"index": 6, "name": "Frank", "message": "Frank is on Messenger, ready to connect", img:'https://randomuser.me/api/portraits/men/7.jpg', active:"2h"},
    {"index": 7, "name": "Grace", "message": "Grace is online now, drop her a message on Messenger", img:'https://randomuser.me/api/portraits/women/75.jpg', active:"2h"},
    {"index": 8, "name": "Henry", "message": "Henry, your friend, is available on Messenger", img:'https://randomuser.me/api/portraits/men/12.jpg', active:"2h"},
    {"index": 9, "name": "Ivy", "message": "Ivy is waiting for your message on Messenger", img:'https://randomuser.me/api/portraits/women/11.jpg', active:"2h"},
    {"index": 10, "name": "Jack", "message": "Jack is now active on Messenger", img:'https://randomuser.me/api/portraits/men/79.jpg', active:'2hr'},
  ];

  const handleClick = (friend: Friend) => {
    onSelectFriend(friend);
  };

  return (
    <div className=" w-full flex flex-col px-[5%] border">
      <div className=" w-full flex justify-between">
        <h1 className=" text-2xl font-bold">Chats</h1>
        <IconButton sx={{ bgcolor: "" }} color="primary">
          <EditNoteIcon sx={{ fontSize: "30px" }} />
        </IconButton>
      </div>
      <div className=" mb-[5%]">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <div className=" overflow-y-scroll">
        <List>
          {friendList.map((friend) => (
            <ListItem key={friend.index} onClick={() => handleClick(friend)}>
              <ListItemButton>
                <ListItemIcon>
                  <img src={friend.img} alt={friend.name} className=" rounded-full w-12" />
                </ListItemIcon>
                <ListItemText primary={friend.name} secondary={friend.message} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Friends;
