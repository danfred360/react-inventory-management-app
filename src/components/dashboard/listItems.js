import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Add from "@material-ui/icons/Add";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ListItemAvatar>
          <Avatar
            alt="Launchpad"
            src="https://cdn.discordapp.com/attachments/556566918342115330/556684678963134505/Lion_Launchpad_Rocket_Color.png"
          />
        </ListItemAvatar>
      </ListItemIcon>
      <ListItemText primary="Launchpad" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Add />
      </ListItemIcon>
      <ListItemText primary="Add a Place" />
    </ListItem>
  </div>
);
