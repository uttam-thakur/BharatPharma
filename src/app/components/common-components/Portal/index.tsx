import ReactDOM from "react-dom";
import { useEffect, useState, ComponentType } from "react";

const Portal = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent: React.FC<P> = (props) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    const portalRoot = document.querySelector("#portalRoot");
    return portalRoot
      ? ReactDOM.createPortal(<Component {...props} />, portalRoot)
      : null;
  };

  return WrappedComponent;
};

export default Portal;