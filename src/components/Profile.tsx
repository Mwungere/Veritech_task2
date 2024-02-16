import React, { useState } from "react";
import { Friend } from "../types";
import {
  Block,
  DoDisturbOff,
  ExpandMore,
  Facebook,
  InsertDriveFile,
  Notifications,
  NotificationsOff,
  PermMedia,
  PushPin,
  Search,
} from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

interface ChatsProps {
  selectedFriend: Friend | null;
}

const Profile: React.FC<ChatsProps> = ({ selectedFriend }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      className={`${
        selectedFriend ? " w-full h-full flex flex-col border" : " hidden"
      }`}
    >
      <div className=" w-full items-center mx-auto text-center">
        <img src={selectedFriend?.img} className=" w-16 rounded-full mx-auto" />
        <h2 className=" font-bold">{selectedFriend?.name}</h2>
        <div className=" w-[50%] flex justify-around mx-auto">
          <div className=" flex flex-col">
            <IconButton color="primary" className="">
              <Facebook />
            </IconButton>{" "}
            <p>Profile</p>
          </div>
          <div>
            <IconButton color="primary">
              <Notifications />
            </IconButton>
            <p>Mute</p>
          </div>
          <div>
            <IconButton color="primary">
              <Search />
            </IconButton>
            <p>Search</p>
          </div>
        </div>
        <div className=" w-[80%] mx-auto mt-[10%]">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
          >
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
              expandIcon={<ExpandMore />}
            >
              <Typography>Chat info</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <PushPin />
                  </ListItemIcon>
                  <ListItemText primary="View pinned messages" />
                </ListItemButton>
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
          >
            <AccordionSummary
              aria-controls="panel2-content"
              id="panel2-header"
              expandIcon={<ExpandMore />}
            >
              <Typography>Media, files and links</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <PermMedia />
                    </ListItemIcon>
                    <ListItemText primary="Media" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <InsertDriveFile />
                    </ListItemIcon>
                    <ListItemText primary="Files" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <LinkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Links" />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
          >
            <AccordionSummary
              aria-controls="panel3-content"
              id="panel3-header"
              expandIcon={<ExpandMore />}
            >
              <Typography>Privacy & Support</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <NotificationsOff />
                    </ListItemIcon>
                    <ListItemText primary="Mute Notifications" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <DoDisturbOff />
                    </ListItemIcon>
                    <ListItemText primary="Restrict" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <Block />
                    </ListItemIcon>
                    <ListItemText primary="Block" />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Profile;
