// file contains the start and end positions for the game

const startEndLocations = {
  easy: [
    { start: { x: 8, y: 1 }, goal: { x: 4, y: 12 } },
    { start: { x: 1, y: 1 }, goal: { x: 9, y: 8 } },
    { start: { x: 2, y: 7 }, goal: { x: 9, y: 13 } },
    { start: { x: 9, y: 5 }, goal: { x: 4, y: 9 } },
  ],
  hard: [
    { start: { x: 9, y: 1 }, goal: { x: 9, y: 19 } },
    { start: { x: 1, y: 1 }, goal: { x: 13, y: 20 } },
    { start: { x: 14, y: 1 }, goal: { x: 4, y: 16 } },
    { start: { x: 1, y: 20 }, goal: { x: 13, y: 8 } },
  ],
};

export default startEndLocations;
