import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { GameState, GameActions, PlayRoundResponse } from '../types';

type GameStore = GameState & GameActions;

const initialState: GameState = {
  playerChoice: null,
  computerChoice: null,
  result: null,
  score: {
    wins: 0,
    losses: 0,
    ties: 0,
  },
  isLoading: false,
  resultMessage: null,
  choicesDisplayText: null,
  error: null,
};

/**
 * @store useGameStore
 * @summary Zustand store for managing the state of the Rock, Paper, Scissors game, with session persistence for the score.
 * @domain game
 * @type domain-store
 * @category game-logic
 */
export const useGameStore = create<GameStore>()(
  persist(
    immer((set) => ({
      ...initialState,

      // Actions
      setLoading: (isLoading) => {
        set((state) => {
          state.isLoading = isLoading;
          if (isLoading) {
            state.error = null; // Clear previous errors on new action
          }
        });
      },

      setResult: (resultData) => {
        set((state) => {
          state.playerChoice = resultData.playerMove;
          state.computerChoice = resultData.computerMove;
          state.result = resultData.result;
          state.resultMessage = resultData.resultMessage;
          state.choicesDisplayText = resultData.choicesDisplayText;

          // Update score based on the result
          if (resultData.result === 'vitoria') {
            state.score.wins += 1;
          } else if (resultData.result === 'derrota') {
            state.score.losses += 1;
          } else if (resultData.result === 'empate') {
            state.score.ties += 1;
          }

          state.isLoading = false;
        });
      },

      startNewRound: () => {
        set((state) => {
          state.playerChoice = null;
          state.computerChoice = null;
          state.result = null;
          state.isLoading = false;
          state.resultMessage = null;
          state.choicesDisplayText = null;
          state.error = null;
        });
      },

      resetSession: () => {
        set((state) => {
          // Reset everything including the score
          Object.assign(state, initialState);
        });
      },

      setError: (error) => {
        set((state) => {
          state.error = error;
          state.isLoading = false;
        });
      },
    })),
    {
      name: 'game-session-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      partialize: (state) => ({ score: state.score }), // Only persist the score
    }
  )
);
