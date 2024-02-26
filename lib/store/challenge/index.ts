import { create } from 'zustand';
import { pick } from 'lodash';
import { devtools } from 'zustand/middleware';
import { IChallengeStore } from './types';
import { INITIAL_STATE } from './constants';
import { getFirebaseCallable } from '../../../entities/firebase';

export const useChallenge = create<IChallengeStore>()(devtools((set, get) => ({
  ...INITIAL_STATE,

  setId: (id) => {
    if (!id) {
      return;
    }

    const { getChallenge } = get();

    set({ id });
    getChallenge();
  },

  setName: (name) => set({ name }),

  getChallenge: async () => {
    const { id } = get();
    const getChallenge = getFirebaseCallable('getChallenge');
    
    const { data } = await getChallenge({ id });
    const challenge = pick<any>(data, ['name', 'reward', 'currency']);
    const {
      name, reward, currency,
    } = challenge;

    set(({ name, reward, currency }));

    return challenge;
  },

  updateTodo: (name) => {
    const { todo } = get();

    if (!name) {
      return;
    }

    todo.push(name);

    set({ todo });
  },

  deleteTodo: (id) => {
    const { todo } = get();

    todo.splice(id, 1);

    set({ todo });
  },

  setCategory: (category) => set({ category }),
})))