export const removeDuplicatesById = (array) => {
  const seen = new Set();
  return array.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
};
