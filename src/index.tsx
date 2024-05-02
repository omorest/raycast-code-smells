import {Action, ActionPanel, Icon, List} from "@raycast/api";
import {useState} from "react";
import {CodeSmells} from "./data/code-smells";
import { obstructions, ocurrences, smellHierarchies} from "./data/types";
import {Smells} from "./components/smells";
import {ListFiltered} from "./list-filtered";


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
      searchBarPlaceholder="Search the code smells..."
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
                  <Action.Push
                    title={obstruction}
                    target={
                      <ListFiltered
                        smells={CodeSmells.filter(smell => smell.categories.Obstruction.some(category => category === obstruction))}
                      />
                    }
                  />
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
                  <Action.Push
                    title={ocurrence}
                    target={
                      <ListFiltered
                        smells={CodeSmells.filter(smell => smell.categories.Ocurrence.some(category => category === ocurrence))}
                      />
                    }
                  />
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
                  <Action.Push
                    title={hierarchy}
                    target={
                      <ListFiltered
                        smells={CodeSmells.filter(smell => smell.categories.SmellHierarchies.some(category => category === hierarchy))}
                      />
                    }
                  />
                </ActionPanel>
              }
            />
          ))
        }
      </List.Section>

      <List.Section title="Smells">
        <Smells smells={filterCodeSmells}/>
      </List.Section>
    </List>
  );
}

