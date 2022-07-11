import express from 'express';

import { createPet, deletePet, getPet, getPets, updatePet } from '../controllers/pets.mjs';

const router = express.Router();

// All routes are starting with /pets
router.get('/', getPets);

router.post('/', createPet);

router.get('/:id', getPet);

router.delete('/:id', deletePet);

router.patch('/:id', updatePet);

export default router;
