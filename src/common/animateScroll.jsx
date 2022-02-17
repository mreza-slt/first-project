import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AnimateStart = () => {
  const ref = useInView();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (ref.inView) setScroll(true);
  }, [ref.inView]);
  return { scroll, ref: ref.ref };
};
export default AnimateStart;
