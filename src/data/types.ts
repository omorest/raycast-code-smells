type LinkCodeSmell = `https://luzkan.github.io/smells/${string}`;

type Obstruction =
| "Bloaters"
| "Change Preventers"
| "Couplers"
| "Data Dealers"
| "Dispensables"
| "Functional Abusers"
| "Lexical Abusers"
| "Obfuscator"
| "Object Oriented Abusers"
| "Others"

export const obstructions: Obstruction[] = [
  "Bloaters",
  "Change Preventers",
  "Couplers",
  "Data Dealers",
  "Dispensables",
  "Functional Abusers",
  "Lexical Abusers",
  "Obfuscator",
  "Object Oriented Abusers",
  "Others"
];

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

export const ocurrences: Ocurrence[] = [
  "Conditional Logic",
  "Data",
  "Duplication",
  "Interfaces",
  "Measured Smells",
  "Message Calls",
  "Names",
  "Responsibility",
  "Unnecessary Complexity"
]

type SmellHierarchies =
| "Antipattern"
| "Architecture Smell"
| "Code Smell"
| "Design Smell"
| "Implementation Smell"
| "Linguistic Smell"

export const smellHierarchies: SmellHierarchies[] = [
  "Antipattern",
  "Architecture Smell",
  "Code Smell",
  "Design Smell",
  "Implementation Smell",
  "Linguistic Smell"
]

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
