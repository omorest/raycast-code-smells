import {CodeSmell} from "./data/types";
import {Action, ActionPanel, Icon, List} from "@raycast/api";

export const ListFiltered = (props: {smells: CodeSmell[]}) => {
  return (
    <List>
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
