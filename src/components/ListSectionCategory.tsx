import { Action, ActionPanel, Icon, Image, List } from "@raycast/api";
import { ListFiltered } from "../list-filtered";
import { CodeSmells } from "../data/code-smells";

type Icon = Image.ImageLike | { value: Image.ImageLike | null | undefined; tooltip: string } | undefined;

type ListSectionProps = {
  sectionTitle: string;
  items: string[];
  icon: Icon;
  categoryFilterName: "Obstruction" | "Ocurrence" | "SmellHierarchies";
};

export const ListSectionCategory = ({ sectionTitle, items, icon, categoryFilterName }: ListSectionProps) => {
  return (
    <List.Section title={sectionTitle} subtitle={"Category"}>
      {items.map((item) => (
        <List.Item
          key={item}
          title={item}
          icon={icon}
          actions={
            <ActionPanel>
              <Action.Push
                title={item}
                target={
                  <ListFiltered
                    categoryName={item}
                    smells={CodeSmells.filter((smell) =>
                      smell.categories[categoryFilterName].some((category) => category === item),
                    )}
                  />
                }
              />
            </ActionPanel>
          }
        />
      ))}
    </List.Section>
  );
};
