import useComponentSize from "../../hooks/useComponentSize";
import Mobile from "./components/Mobile";
import PC from "./components/PC";

export default function BoothPage() {
  const [componentRef, size] = useComponentSize();
  let content;

  if (size.width >= 1200) {
    content = <PC />;
  } else {
    content = <Mobile />;
  }

  return <div ref={componentRef}>{content}</div>;
}
