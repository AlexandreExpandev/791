import { Router } from 'express';
import { checkHealth } from '@/api/controllers/health.controller';
import gameRoutes from '@/modules/game/game.routes';

const router = Router();

// Health Check Endpoint
router.get('/health', checkHealth);

// --- INTEGRATION POINT FOR FEATURE MODULES ---
router.use('/game', gameRoutes);
// ---------------------------------------------

export default router;
