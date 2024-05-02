type LinkCodeSmell = `https://luzkan.github.io/smells/${string}`;

type Obstruction =
| "Bloaters"
| "ChangePreventers"
| "Couplers"
| "DataDealers"
| "Dispensables"
| "FunctionalAbusers"
| "LexicalAbusers"
| "Obfuscator"
| "ObjectOrientedAbusers"
| "Others"

type Ocurrence =
| "Conditional Logic"
| "Data"
| "Duplication"
| "Interfaces"
| "Measured Smells"
| "Message Calls"
| "Names"
| "Responsibility"
| "Unnecessary Complexity"

type SmellHierarchies =
| "Antipattern"
| "Architecture Smell"
| "Code Smell"
| "Design Smell"
| "Implementation Smell"
| "Linguistic Smell"

type Categories = {
  Obstruction: Obstruction[];
  Ocurrence: Ocurrence[];
  SmellHierarchies: SmellHierarchies[];
}

interface CodeSmell {
  categories: Categories;
  name: string;
  link: LinkCodeSmell;
}
