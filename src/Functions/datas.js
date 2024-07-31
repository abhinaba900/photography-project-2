import { Wildlife1, Wildlife2, Wildlife3, Wildlife4 } from "../assets/wildlife";
import { Travel1, Travel2, Travel3, Travel4 } from "../assets/travel";
import {
  StillLife1,
  StillLife2,
  StillLife3,
  StillLife4,
} from "../assets/still life";
import { v4 as uuid } from "uuid";

export const datas = [
  {
    id: uuid(),
    name: "Wildlife",
    images: [Wildlife1, Wildlife2, Wildlife3, Wildlife4],
  },
  {
    id: uuid(),
    name: "Travel",
    images: [Travel1, Travel2, Travel3, Travel4],
  },
  {
    id: uuid(),
    name: "Still Life",
    images: [StillLife1, StillLife2, StillLife3, StillLife4],
  },
];
