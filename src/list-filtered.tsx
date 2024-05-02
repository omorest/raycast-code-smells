import {CodeSmell} from "./data/types";
import {Action, ActionPanel, Icon, List} from "@raycast/api";

type ListFilteredProps = {
  smells: CodeSmell[],
  categoryName: string
};

export const ListFiltered = (props: ListFilteredProps) => {
  return (
    <List
      searchBarPlaceholder={`Showing ${props.smells.length} ${props.categoryName}`}
    >
      {
        props.smells.map((item) => (
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
        ))
      }
    </List>
  )
}
