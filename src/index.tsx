import {Action, ActionPanel, Detail, List} from "@raycast/api";
import {useState} from "react";
import {CodeSmells} from "./data/code-smells";

export default function Command() {
  const [searchText, setSearchText] = useState("");
  const filterCodeSmells = CodeSmells.filter((smell) => smell.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <List
      filtering={false}
      onSearchTextChange={setSearchText}
      navigationTitle="Search Beers"
      searchBarPlaceholder="Search your favorite beer"
    >
      {filterCodeSmells.map((item) => (
        <List.Item
          key={item.link}
          title={item.name}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={item.link} title={item.name}/>
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
