// file contains the start and end positions for the game

const startEndLocations = {
  easy: [
    { start: { x: 1, y: 1 }, goal: { x: 5, y: 5 } },
    { start: { x: 1, y: 5 }, goal: { x: 3, y: 3 } },
    { start: { x: 5, y: 1 }, goal: { x: 1, y: 3 } },
  ],
  medium: [
    { start: { x: 1, y: 1 }, goal: { x: 8, y: 8 } },
    { start: { x: 7, y: 1 }, goal: { x: 3, y: 4 } },
    { start: { x: 5, y: 1 }, goal: { x: 1, y: 3 } },
  ],
  hard: [
    { start: { x: 1, y: 1 }, goal: { x: 6, y: 13 } },
    { start: { x: 5, y: 1 }, goal: { x: 3, y: 8 } },
    { start: { x: 8, y: 5 }, goal: { x: 1, y: 2 } },
  ],
};

export default startEndLocations;
