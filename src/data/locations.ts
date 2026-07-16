export type LocationKind = "venue" | "reception" | "hotel";

export interface EventLocation {
  id: string;
  kind: LocationKind;
  name: string;
  address: string;
  lat: number;
  lng: number;
  url?: string;
  note?: string;
}

export const kindLabel: Record<LocationKind, string> = {
  venue: "Conference venue",
  reception: "Reception",
  hotel: "Hotel option",
};

export const locations: EventLocation[] = [
  {
    id: "venue",
    kind: "venue",
    name: "NIH — 6001 Executive Blvd",
    address: "6001 Executive Blvd, Rockville, MD 20852",
    lat: 39.048844,
    lng: -77.12027,
    note: "Main conference building",
  },
  {
    id: "pinstripes",
    kind: "reception",
    name: "Pinstripes",
    address: "11920 Grand Park Ave, North Bethesda, MD 20852",
    lat: 39.051179,
    lng: -77.117726,
    note: "Reception — Tuesday, 5:00 – 6:00 PM",
  },
  {
    id: "canopy",
    kind: "hotel",
    name: "Canopy by Hilton Washington DC Bethesda North",
    address: "940 Rose Avenue, North Bethesda, MD 20852",
    lat: 39.050782,
    lng: -77.116876,
    url: "https://www.hilton.com/en/hotels/dcabnpy-canopy-washington-dc-bethesda-north/?SEO_id=GMB-AMER-PY-DCABNPY&y_source=1_OTA1MDkwMC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
  },
  {
    id: "marriott",
    kind: "hotel",
    name: "Bethesda North Marriott Hotel & Conference Center",
    address: "5701 Marinelli Road, Rockville, MD 20852",
    lat: 39.047305,
    lng: -77.11522,
    url: "https://www.marriott.com/en-us/hotels/wasbn-bethesda-north-marriott-hotel-and-conference-center/overview/",
  },
];

export const directionsUrl = (loc: EventLocation) =>
  `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`;
