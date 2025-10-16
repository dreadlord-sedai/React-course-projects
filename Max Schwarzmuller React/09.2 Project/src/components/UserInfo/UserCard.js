import classes from './UserCard.module.css'

function Usercard({username, age}) {
  return (
    <div className={classes.card}>
      <h2>User Card</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
    </div>
  );
}

export default Usercard;
