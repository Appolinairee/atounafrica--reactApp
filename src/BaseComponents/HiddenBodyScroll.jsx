const HiddenBodyScroll = ({state}) => {
    const bodyElement = document.body;

    if (state) {
      bodyElement.classList.add("overflow-hidden");
    } else {
      bodyElement.classList.remove("overflow-hidden");
    }

    return () => {
      bodyElement.classList.remove("overflow-hidden");
    };
}

export default HiddenBodyScroll;