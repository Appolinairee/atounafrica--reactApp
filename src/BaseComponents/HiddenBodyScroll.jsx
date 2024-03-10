import { useEffect } from 'react';

const HiddenBodyScroll = ({state}) => {
  useEffect(() => {
    console.log(state);
    const bodyElement = document.body;

    if (state) {
      bodyElement.classList.add("scrollbar-none");
    } else {
      bodyElement.classList.remove("scrollbar-none");
    }

    return () => {
      bodyElement.classList.remove("scrollbar-none");
    };
  }, [state]);

  return <p>Hello</p>
};

export default HiddenBodyScroll;