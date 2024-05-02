import {Action, ActionPanel, Icon, List} from "@raycast/api";
import {useState} from "react";
import {CodeSmells} from "./data/code-smells";
import {obstructions, ocurrences, smellHierarchies} from "./data/types";

export default function Command() {
  const [searchText, setSearchText] = useState("");
  const filterCodeSmells = CodeSmells.filter((smell) => smell.name.toLowerCase().includes(searchText.toLowerCase()));
  const filterObstructions = obstructions.filter((obstruction) => obstruction.toLowerCase().includes(searchText.toLowerCase()));
  const filterOcurrences = ocurrences.filter((ocurrence) => ocurrence.toLowerCase().includes(searchText.toLowerCase()));
  const filterHierarchies = smellHierarchies.filter((hierarchy) => hierarchy.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <List
      filtering={false}
      onSearchTextChange={setSearchText}
      navigationTitle="Search Beers"
      searchBarPlaceholder="Search your favorite beer"
    >
      <List.Section title="Obstructions">
        {
          filterObstructions.map(obstruction => (
            <List.Item
              key={obstruction}
              title={obstruction}
              icon={Icon.Folder}
              actions={
                <ActionPanel>
                  <Action title={obstruction}/>
                </ActionPanel>
              }
            />
          ))
        }
      </List.Section>

      <List.Section title="Ocurrences">
        {
          filterOcurrences.map(ocurrence => (
            <List.Item
              key={ocurrence}
              title={ocurrence}
              icon={Icon.Folder}
              actions={
                <ActionPanel>
                  <Action title={ocurrence}/>
                </ActionPanel>
              }
            />
          ))
        }
      </List.Section>

      <List.Section title="Smell Hierarchies">
        {
          filterHierarchies.map(hierarchy => (
            <List.Item
              key={hierarchy}
              title={hierarchy}
              icon={Icon.Folder}
              actions={
                <ActionPanel>
                  <Action title={hierarchy}/>
                </ActionPanel>
              }
            />
          ))
        }
      </List.Section>

      <List.Section title="Smells">
        {filterCodeSmells.map((item) => (
          <List.Item
            key={item.link}
            title={item.name}
            icon={Icon.Link}
            actions={
              <ActionPanel>
                <Action.OpenInBrowser url={item.link} title={item.name}/>
              </ActionPanel>
            }
          />
        ))}
      </List.Section>
    </List>
  );
}

