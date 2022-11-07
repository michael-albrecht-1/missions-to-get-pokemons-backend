import { Router } from 'express';
import {
  createMission,
  searchMissions,
  completeMission,
} from '../controllers/Missions.controller';

const router = Router();
router.post('/', createMission);
router.get('/', searchMissions);
router.patch('/complete/:id', completeMission);

export default router;
