import { Wildlife1, Wildlife2, Wildlife3, Wildlife4 } from "../assets/wildlife";
import { Travel1, Travel2, Travel3, Travel4 } from "../assets/travel";
import { Creative1, Creative2, Creative3, Creative4 } from "../assets/creative";
import { Macro1, Macro2, Macro3, Macro4 } from "../assets/macro/index";
import { Nature1, Nature2, Nature3, Nature4 } from "../assets/nature";
import { People1, People2, People3, People4 } from "../assets/people";
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
  {
    id: uuid(),
    name: "Creative",
    images: [Creative1, Creative2, Creative3, Creative4],
  },
  {
    id: uuid(),
    name: "Macro",
    images: [Macro1, Macro2, Macro3, Macro4],
  },
  {
    id: uuid(),
    name: "Nature",
    images: [Nature1, Nature2, Nature3, Nature4],
  },
  {
    id: uuid(),
    name: "People",
    images: [People1, People2, People3, People4],
  },
];
