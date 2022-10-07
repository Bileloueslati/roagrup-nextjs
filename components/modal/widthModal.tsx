import { ComponentType } from "react";
import useBooleanState from "webrix/hooks/useBooleanState";

export interface InjectedModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

function WithModal<T>(WrappedComponent: ComponentType<T>) {
  const Hoc = (props: T) => {
    const {
      value: isOpen,
      setTrue: openModal,
      setFalse: closeModal,
    } = useBooleanState(false);

    const allProps = { isOpen, openModal, closeModal, ...props };

    WrappedComponent.displayName = "modalContent";

    return <WrappedComponent {...allProps} />;
  };

  return Hoc;
}

export default WithModal;
