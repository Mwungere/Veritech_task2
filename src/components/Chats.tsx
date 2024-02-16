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

const Chats: React.FC<ChatsProps> = ({ selectedFriend }) => {
  const [profile, setProfile] = useState(true); // Moved useState inside the component
  console.log(profile);
  
  const [value, setvalue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
  };
  return (
    <div className="w-full h-screen">
      {selectedFriend && (
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-[10%] flex justify-between items-center border-b">
            <ListItem>
              <img
                src={selectedFriend.img}
                alt={selectedFriend.name}
                className="rounded-full w-12"
              />
              <ListItemText
                primary={selectedFriend.name}
                secondary={`Active ${selectedFriend.active} ago`}
              />
            </ListItem>
            <div className="flex h-[50%]">
              <IconButton>
                <Phone color="primary" sx={{ fontSize: "30px" }} />
              </IconButton>
              <IconButton>
                <VideoCall color="primary" sx={{ fontSize: "30px" }} />
              </IconButton>
              <IconButton onClick={() =>{setProfile(!profile)}}>
                <MoreHoriz color="primary" sx={{ fontSize: "30px" }} />
              </IconButton>
            </div>
          </div>
          <div className="h-[85%] flex flex-col text-center pt-[5%] justify-between">
            <div className="w-full mx-auto flex flex-col">
              <img
                src={selectedFriend.img}
                className="rounded-full w-16 mx-auto "
                alt={selectedFriend.name}
              />

              <h1 className="text-2xl font-bold">{selectedFriend.name}</h1>
              <p className="opacity-50">You're friends on Facebook</p>
            </div>
            <p className="opacity-50">You are now connected on Messenger</p>
          </div>
          <div className="w-full flex">
            <div className="flex">
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

            <div className="w-full">
              <FormControl fullWidth>
                <OutlinedInput
                  sx={{ borderRadius: 50, height: 40 }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Face />
                    </InputAdornment>
                  }
                  inputProps={{}}
                />
              </FormControl>
            </div>
          </div>
        </div>
      )}
      {!selectedFriend && (
        <div className=" w-full h-full items-center text-center">
          <h3 className=" self-center items-center mt-[50%] text-3xl font-bold">No chats Selected</h3>
        </div>
      )}
    </div>
  );
};

export default Chats;
