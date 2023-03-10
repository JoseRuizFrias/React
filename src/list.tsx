import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./model";
import { MemberComponent } from "./MemberComponent";
import { Headercomponent } from "./HeaderComponent";
import { AuthContext } from "./auth";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const filterUser = React.useRef<HTMLInputElement>();
  const [inputValue, setInputValue] = React.useState("");
  const { filter, setFilterSession } = React.useContext(AuthContext);
  const defaultValue = filter ? filter : "lemoncode";

  const handleFilter = (e) => {
    e.preventDefault();
    setInputValue(filterUser.current.value);
    setFilterSession({ filter: filterUser.current.value });
    console.log(filterUser);
  };

  let mapMembers;

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${defaultValue}/members`)
      .then((response) => response.json())
      .then((json) =>
        Array.isArray(json) ? setMembers(json) : setMembers([])
      );
  }, [inputValue]);

  if (members && members.length > 0) {
    mapMembers = members.map((member) => (
      <MemberComponent key={member.id} member={member} />
    ));
  }

  return (
    <>
      <Typography><h2>Hello from List page</h2></Typography>
      <Card>
        <CardContent>
          <TextField inputRef={filterUser} defaultValue={defaultValue} />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={handleFilter}
          >
            Filter
          </Button>
        </CardContent>
      </Card>
      <div className="list-user-list-container">
        <Headercomponent />
        {mapMembers}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
