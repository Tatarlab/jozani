import { create } from 'zustand';
import { produce } from 'immer';
import { forEach, pick } from 'lodash';
import { devtools } from 'zustand/middleware';
import { IChallengeStore } from './types';
import { INITIAL_STATE } from './constants';
import { getFirebaseCallable } from '../../../entities/firebase';
import { getStoreOptions } from '..';

export const useChallenge = create<IChallengeStore>()(devtools((set, get) => ({
  ...INITIAL_STATE,

  setName: (name) => set(produce((state) => {
    state.challenges.new.name = name;
  })),

  setCategory: (category) => {
    set(produce((state) => {
      state.challenges.new.category = category;
    }));
  },

  getChallenge: async (id: string) => {
    const { challenges } = get();

    const c = challenges[id];

    if (c) {
      return c;
    }

    const getChallenge = getFirebaseCallable('getChallenge');
    
    const { data } = await getChallenge({ id });
    const challenge = pick<any>(data, ['name', 'reward', 'currency']);
    const {
      name, reward, currency,
    } = challenge;
    
    set(produce((state) => {
      const prevChallenge = state.challenges[id] || {};
      const { name: prevName, reward: prevReward, currency: prevCurrency } = prevChallenge;

      state.challenges[id] = {
        ...prevChallenge,
        name: name || prevName,
        reward: reward || prevReward,
        currency: currency || prevCurrency,
      };
    }));
    

    return challenge;
  },

  getChallengeAll: async () => {
    const { limit = 5, page = 1 } = get();
    const getChallengeAll = getFirebaseCallable('getChallengeAll');
    const { data } = await getChallengeAll({ limit, page });
    const challenges = forEach(data, (challenge) => {
      const { id, name, reward, currency, category } = pick<any>(challenge, ['id', 'name', 'reward', 'currency', 'category']);

      set(produce((state) => {
        state.challenges[id] = {
          id,
          name,
          reward,
          currency,
          category,
        };
      }))
    });

    return challenges;
  },
}), getStoreOptions('useChallenge')));

useChallenge.subscribe(
  (state, prev) => {
    const { new: currNew, ...currChallenges } = state.challenges;
    const challengesArray = Object.values(currChallenges);
    const { new: prevNew, ... prevChallenges } = prev.challenges;
    const prevChallengesArray = Object.values(prevChallenges);

    if (challengesArray.length > prevChallengesArray.length) {
      useChallenge.setState({ challengesList: challengesArray });
    }
  }
);
