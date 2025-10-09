import './Table.css';

const Table = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>

        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear.toFixed(2)}</td>
            <td>{yearData.yearlyInterest.toFixed(2)}</td>
            <td>{yearData.totalInterest.toFixed(2)}</td>
            <td>{yearData.totalInvestedCapital.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
