import { LatLngBoundsExpression } from "leaflet";

type LandType = {
  tokenId: string;
  bounds: LatLngBoundsExpression;
};

export const Lands: LandType[] = [
  {
    tokenId: "",
    bounds: [
      [0, 0],
      [1, 1],
    ],
  },
  {
    tokenId: "",
    bounds: [
      [0, 2],
      [1, 3],
    ],
  },
  {
    tokenId: "",
    bounds: [
      [0, 4],
      [1, 5],
    ],
  },
  {
    tokenId: "",
    bounds: [
      [0, 6],
      [1, 7],
    ],
  },
];
