import { useState } from 'react';
import classes from './InputForm.module.css';

function InputForm({ onAddUser }) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 18 || +enteredAge > 120) {
      return;
    }

    console.log(enteredUsername, enteredAge);
    onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');

  };


  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.formDiv}>
        <label htmlFor="username" name="username" className={classes.label}>Username</label>
        <input type="text" id="username"  className={classes.input}
          onChange={(e) => setEnteredUsername(e.target.value)} value={enteredUsername}/>
      </div>
      <div className={classes.formDiv}>
        <label htmlFor="age" name="age" className={classes.label}>Age</label>
        <input type="number" id="age" className={classes.input}
          onChange={(e) => setEnteredAge(e.target.value)} value={enteredAge}/>
      </div>
      <button type="submit" className={classes.button}>Add User</button>
    </form>
  );
}

export default InputForm;
