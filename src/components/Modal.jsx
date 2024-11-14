import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
export default function Modal({ title, children, onClose }) {
  //const hiddenAnimationState={opacity:0,y:30};
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
      variants={{
        hidden:{opacity:0,y:30},
        visible:{opacity:1,y:0}
      }}
        initial="hidden"//when component appears into the dom
        animate="visible"
        exit={{opacity:0,y:30}}
        open
        className="modal"
        >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
