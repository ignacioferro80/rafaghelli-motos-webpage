import { motos } from './motos.js';

export const getMotoById = (id) => {
    const moto = motos.find(moto => moto.id === id);
    return moto || null;
  }