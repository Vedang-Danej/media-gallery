const potraitImage = (id) => {
  return {
    src: `https://drive.google.com/uc?id=${id}`,
    width: 9,
    height: 16,
  };
};
const landscapeImage = (id) => {
  return {
    src: `https://drive.google.com/uc?id=${id}`,
    width: 16,
    height: 9,
  };
};
export { potraitImage, landscapeImage };
