import { v4 as uuidv4 } from 'uuid';

let pets = [];

export const createPet = (req, res) => {
  const pet = req.body;

  pets.push({...pet, id: uuidv4() });

  res.send(`Animal with the name ${pet.name} was added.`);
}

export const deletePet = (req, res) => {
  const { id } = req.params;
  const pet = req.body;

  pets = pets.filter((pet) => pet.id !== id);
  res.send(`Pet ${pet.name} with id: ${id} was deleted.`)
}

export const getPets = (req, res) => {
  res.send(pets);
}

export const getPet = (req, res) => {
  const { id } = req.params;

  const foundPet = pets.find((pet) => pet.id === id);
  res.send(foundPet)
}

export const updatePet = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const pet = pets.find((pet) => pet.id === id);

  if (name) {
    pet.name = name;
  }

  res.send(`Pet with id: ${id} name was changed to ${name}`);
}
