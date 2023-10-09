import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IAirdropStore } from './types';
import { INITIAL_STATE } from './constants';

export const useAirddropProjects = create<IAirdropStore>()(devtools((set, get) => ({
  ...INITIAL_STATE,

  setSwap: (projectId) => {
    const { selectedSwaps } = get();

    const projectIdIndex = selectedSwaps.findIndex((foundProjectId) => foundProjectId === `${projectId}`);

    if (projectIdIndex >= 0) {
      selectedSwaps.splice(projectIdIndex, 1);
    } else {
      selectedSwaps.push(`${projectId}`);
    }

    set(({ selectedSwaps }));
  },

  setBridge: (projectId) => {
    const { selectedBridges } = get();

    const projectIdIndex = selectedBridges.findIndex((foundProjectId) => foundProjectId === `${projectId}`);

    if (projectIdIndex >= 0) {
      selectedBridges.splice(projectIdIndex, 1);
    } else {
      selectedBridges.push(`${projectId}`);
    }

    set(({ selectedBridges }));
  },

  setSwaps: (swaps) => set({ swaps }),

  setBridges: (bridges) => set({ bridges }),
})))