import classes from './InputForm.module.css';

function InputForm() {
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = event.target.username.value;
    const enteredAge = event.target.age.value;
    console.log(enteredUsername, enteredAge);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.formDiv}>
        <label htmlFor="username" className={classes.label}>Username</label>
        <input type="text" id="username"  className={classes.input}/>
      </div>
      <div className={classes.formDiv}>
        <label htmlFor="age" className={classes.label}>Age</label>
        <input type="number" id="age" className={classes.input}/>
      </div>
      <button type="submit" className={classes.button}>Submit</button>
    </form>
  );
}

export default InputForm;
