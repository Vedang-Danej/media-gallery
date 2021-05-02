const videoToLink = (id, potrait) => {
  return {
    src: `https://drive.google.com/file/d/${id}/preview?autoplay=0`,
    potrait: potrait,
  };
};
export { videoToLink };
