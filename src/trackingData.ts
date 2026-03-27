import type { TrackingItem } from "../src/types";

export const trackingData: TrackingItem[] = [
  {
    id: "CAR123",
    carName: "Hyundai Creta",
    status: "On The Way",
    progress: 60,
    estimated: "28 March 2026",
    steps: {
      loaded: true,
      onWay: true,
      arrived: false,
      delivered: false,
    },
  },
  {
    id: "CAR456",
    carName: "Mahindra Thar",
    status: "Delivered",
    progress: 100,
    estimated: "Delivered",
    steps: {
      loaded: true,
      onWay: true,
      arrived: true,
      delivered: true,
    },
  },
];