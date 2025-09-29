/**
 * @module game
 * @summary Encapsulates all logic, components, and state for the Rock, Paper, Scissors game.
 * @domain functional
 * @dependencies zustand, @tanstack/react-query
 * @version 1.0.0
 */

// Domain public exports - Hooks
export * from './hooks/useGame';

// Domain public exports - Services
export * from './services';

// Domain public exports - Stores
export * from './stores/gameStore';

// Domain public exports - Types
export * from './types';

// Domain public exports - Constants
export * from './constants';

// Module metadata
export const moduleMetadata = {
  name: 'game',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: [],
  publicHooks: ['useGame'],
  publicServices: ['gameService'],
  publicStores: ['useGameStore'],
  dependencies: {
    internal: ['@/core/components'],
    external: ['zustand', '@tanstack/react-query'],
    domains: [],
  },
  exports: {
    components: [],
    hooks: ['useGame'],
    services: ['gameService'],
    stores: ['useGameStore'],
    types: ['Choice', 'GameResult', 'GameState', 'GameActions', 'PlayRoundPayload', 'PlayRoundResponse'],
    constants: ['CHOICES'],
  },
} as const;
