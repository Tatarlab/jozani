import { AbiFragment } from 'web3';

export enum AirdropProjectIds {
  // Bridges
  bridgeZkSyncEra = 'bridgeZkSyncEra',
  // Swaps
  syncswap = 'syncswap',
  mute = 'mute',
  izumiFinance = 'izumiFinance',
  maverick = 'maverick',
  velocore = 'velocore',
}

export type AirdropProjectType = 'bridge' | 'swap';

export interface IAirdropProject {
  projectId: AirdropProjectIds;
  type: AirdropProjectType;
  projectName: string;
  gasMinPrice?: number;
  gasMaxPrice?: number;
  usdMinPrice?: number;
  usdMaxPrice?: number;
}

export interface IBridgeState extends Pick<IAirdropProject, 'projectId'> {
  value: boolean;
}

export interface IAirdropState {
  bridges: IAirdropProject[];
  swaps: IAirdropProject[];
  selectedBridges: string[];
  selectedSwaps: string[];
}
  
export interface IAirdropMethods {
  setSwap(projectId: string): void;
  setBridge(projectId: string): void;
  setSwaps(swaps: IAirdropProject[]): void;
  setBridges(bridges: IAirdropProject[]): void;
}

export type IAirdropStore = IAirdropState & IAirdropMethods;