import React, { useState } from "react";
import { Friend } from "../types";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItem,
  ListItemText,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import {
  AddCircle,
  Face,
  InsertDriveFile,
  InsertPhoto,
  MoreHoriz,
  Phone,
  Photo,
  VideoCall,
} from "@mui/icons-material";
interface ChatsProps {
  selectedFriend: Friend | null;
}

const Input = styled("div")(({ theme }) => ({
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

const FaceIconWrapper = styled("div")(({ theme }) => ({
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

const Chats: React.FC<ChatsProps> = ({ selectedFriend }) => {
  const [value, setvalue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
  };

  return (
    <div className=" w-full h-screen">
      {selectedFriend && (
        <div className=" w-full h-full flex flex-col">
          <div className=" w-full h-[10%] flex justify-between items-center border-b">
            <ListItem>
              <img
                src={selectedFriend.img}
                alt={selectedFriend.name}
                className=" rounded-full w-12"
              />
              <ListItemText
                primary={selectedFriend.name}
                secondary={`Active ${selectedFriend.active} ago`}
              />
            </ListItem>
            <div className=" flex h-[50%] ">
              <IconButton>
                <Phone color="primary" sx={{ fontSize: "30px" }} />
              </IconButton>
              <IconButton>
                <VideoCall color="primary" sx={{ fontSize: "30px" }} />
              </IconButton>
              <IconButton>
                <MoreHoriz color="primary" sx={{ fontSize: "30px" }} />
              </IconButton>
            </div>
          </div>
          <div className=" h-[85%] flex flex-col text-center pt-[5%] justify-between">
            <div className=" w-full mx-auto flex flex-col">
              <img
                src={selectedFriend.img}
                className="rounded-full w-16 mx-auto "
                alt={selectedFriend.name}
              />

              <h1 className=" text-2xl font-bold">{selectedFriend.name}</h1>
              <p className=" opacity-50">You're friends on Facebook</p>
            </div>
            <p className="opacity-50">You are now connected on Messenger</p>
          </div>
          <div className=" w-full flex">
            <div className=" flex">
              <IconButton className="">
                <AddCircle color="primary" />
              </IconButton>
              <IconButton>
                <InsertPhoto color="primary" />
              </IconButton>
              <IconButton>
                <InsertDriveFile color="primary" />
              </IconButton>
            </div>

            <div className=" w-full">
              <FormControl fullWidth >
                <OutlinedInput
                sx={{borderRadius:50}}
                endAdornment={
                  <InputAdornment position="end"><Face/></InputAdornment>
                }
                inputProps={{
                
                }}
                />
              </FormControl>
            </div>
          </div>
        </div>
      )}
      {!selectedFriend && (
        <div>
          <h3>No chats Selected</h3>
        </div>
      )}
    </div>
  );
};

export default Chats;
