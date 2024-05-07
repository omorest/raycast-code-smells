import { Action, ActionPanel, Icon, List } from "@raycast/api";
import { CodeSmell } from "../data/types";

export const Smells = (props: { smells: CodeSmell[] }) => {
  return (
    <>
      {props.smells.map((item) => (
        <List.Item
          key={item.link}
          title={item.name}
          icon={Icon.Link}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={item.link} title={`Go to ${item.name}`} />
              <Action.CopyToClipboard content={item.link} shortcut={{ modifiers: ["cmd"], key: "." }} />
            </ActionPanel>
          }
        />
      ))}
    </>
  );
};
