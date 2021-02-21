import * as s from "./Modal.styled";
const Modal = ({ data, onClose }) => {
  return (
    <s.Backdrop>
      <s.Content>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button onClick={onClose}>Close</button>
      </s.Content>
    </s.Backdrop>
  );
};

export default Modal;
