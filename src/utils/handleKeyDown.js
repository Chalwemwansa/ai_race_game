const handleKey = (event, position, setPosition, mazeLevel) => {
  const walls = [2, 3, 1];
  function handleUp() {
    if (!walls.includes(mazeLevel[position.x - 1][position.y])) {
      setPosition({ x: position.x - 1, y: position.y });
      return true;
    }
    return false;
  }
  function handleDown() {
    if (!walls.includes(mazeLevel[position.x + 1][position.y])) {
      setPosition({ x: position.x + 1, y: position.y });
      return true;
    }
    return false;
  }
  function handleRight() {
    if (!walls.includes(mazeLevel[position.x][position.y + 1])) {
      setPosition({ x: position.x, y: position.y + 1 });
      return true;
    }
    return false;
  }
  function handleLeft() {
    if (!walls.includes(mazeLevel[position.x][position.y - 1])) {
      setPosition({ x: position.x, y: position.y - 1 });
      return true;
    }
    return false;
  }
  if (event.key === "ArrowUp") {
    return handleUp();
  }
  if (event.key === "ArrowDown") {
    return handleDown();
  }
  if (event.key === "ArrowLeft") {
    return handleLeft();
  }
  if (event.key === "ArrowRight") {
    return handleRight();
  }
};

export default handleKey;
