import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="min-h-[300px] min-w-[900px] max-w-[90%] bg-white p-6 rounded-xl relative shadow-lg">
              <div className="flex justify-end">
                <AiOutlineClose onClick={onClose} className="text-2xl cursor-pointer" />
              </div>
              {children}
            </div>
          </div>
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onClose} />
        </>
      )}
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
