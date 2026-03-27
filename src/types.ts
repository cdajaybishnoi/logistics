export interface TrackingSteps {
  loaded: boolean;
  onWay: boolean;
  arrived: boolean;
  delivered: boolean;
}

export interface TrackingItem {
  id: string;
  carName: string;
  status: string;
  progress: number;
  estimated: string;
  steps: TrackingSteps;
}