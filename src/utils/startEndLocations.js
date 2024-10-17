// file contains the start and end positions for the game

const startEndLocations = {
  easy: [
    { start: { x: 1, y: 1 }, goal: { x: 4, y: 13 } },
    { start: { x: 1, y: 1 }, goal: { x: 9, y: 8 } },
    { start: { x: 1, y: 1 }, goal: { x: 9, y: 13 } },
  ],
  medium: [
    { start: { x: 1, y: 1 }, goal: { x: 8, y: 8 } },
    { start: { x: 7, y: 1 }, goal: { x: 3, y: 4 } },
    { start: { x: 5, y: 1 }, goal: { x: 1, y: 3 } },
  ],
  hard: [
    { start: { x: 1, y: 1 }, goal: { x: 9, y: 19 } },
    { start: { x: 1, y: 1 }, goal: { x: 9, y: 8 } },
    { start: { x: 1, y: 1 }, goal: { x: 9, y: 13 } },
  ],
};

export default startEndLocations;
