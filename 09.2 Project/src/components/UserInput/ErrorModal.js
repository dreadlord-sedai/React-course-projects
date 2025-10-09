import classes from './ErrorModal.module.css';

function ErrorModal({ title, message, onConfirm }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onConfirm}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={onConfirm}>Okay</button>
        </footer>
      </div>
    </>
  );
}

export default ErrorModal;
