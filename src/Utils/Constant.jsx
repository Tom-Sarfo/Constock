export const scrollToWidth = (
  width,
  scrollToPosition,
  setScrollPosition,
  containerRef
) => {
  const newScrollPos = scrollToPosition + width;
  setScrollPosition(newScrollPos);
  containerRef.current.scrollLeft = newScrollPos;

  console.log("pos: ", typeof containerRef);
};

