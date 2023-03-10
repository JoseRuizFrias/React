import React from "react";
import { generatePath, Link } from "react-router-dom";
import { MemberEntity } from "./model";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

interface Props {
  member: MemberEntity;
}

export const MemberComponent: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <List>
      <ListItem className="list-user-list-member">
        <ListItemAvatar>
          <Avatar alt={member.id.toString()} src={member.avatar_url} />
        </ListItemAvatar>
        <Typography component="span" variant="body2">
          <ListItemText>
            {member.id}
          </ListItemText>
        </Typography>
        <Typography component="span" variant="body2">
          <ListItemText className="list-user-list-member-link">
            <Link to={generatePath("/detail/:id", { id: member.login })}>
              {member.login}
            </Link>
          </ListItemText>
        </Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};
