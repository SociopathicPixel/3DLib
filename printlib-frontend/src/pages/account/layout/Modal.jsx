import styles from '../../../styles/Modal.module.scss';
function Modal({ children, onClose }) {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
