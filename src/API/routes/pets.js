import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let pets = [];

// All routes are starting with /pets
router.get('/', (req, res) => {
  res.send(pets);
});

const createPet = (req, res) => {
  const pet = req.body;

  pets.push({...pet, id: uuidv4() });

  res.send(`Animal with the name ${pet.name} was added.`);
};

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundUser = pets.find((pet) => pet.id === id);
  res.send(foundUser)
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const pet = req.body;

  pets = pets.filter((pet) => pet.id !== id);
  res.send(`Pet ${pet.name} with id: ${id} was deleted.`)
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const pet = pets.find((pet) => pet.id === id);

  if (name) {
    pet.name = name;
  }

  res.send(`Pet with id: ${id} name was changed to ${name}`);
});

export default router;
