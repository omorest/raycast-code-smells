import { Icon, List } from "@raycast/api";
import { useState } from "react";
import { CodeSmells } from "./data/code-smells";
import { obstructions, ocurrences, smellHierarchies } from "./data/types";
import { Smells } from "./components/smells";
import { ListSectionCategory } from "./components/ListSectionCategory";

export default function Command() {
  const [searchText, setSearchText] = useState<string>("");

  const filterCodeSmells = CodeSmells.filter((smell) => smell.name.toLowerCase().includes(searchText.toLowerCase()));
  const filterObstructions = obstructions.filter((obstruction) =>
    obstruction.toLowerCase().includes(searchText.toLowerCase()),
  );
  const filterOcurrences = ocurrences.filter((ocurrence) => ocurrence.toLowerCase().includes(searchText.toLowerCase()));
  const filterHierarchies = smellHierarchies.filter((hierarchy) =>
    hierarchy.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <List
      filtering={false}
      onSearchTextChange={setSearchText}
      navigationTitle="Search Beers"
      searchBarPlaceholder="Search..."
    >
      <ListSectionCategory
        sectionTitle={"Obstructions"}
        items={filterObstructions}
        icon={Icon.Folder}
        categoryFilterName="Obstruction"
      />

      <ListSectionCategory
        sectionTitle={"Ocurrences"}
        items={filterOcurrences}
        icon={Icon.Folder}
        categoryFilterName="Ocurrence"
      />

      <ListSectionCategory
        sectionTitle="Smell Hierarchies"
        items={filterHierarchies}
        icon={Icon.Folder}
        categoryFilterName="SmellHierarchies"
      />

      <List.Section title="Smells" subtitle={"Section"}>
        <Smells smells={filterCodeSmells} />
      </List.Section>
    </List>
  );
}
