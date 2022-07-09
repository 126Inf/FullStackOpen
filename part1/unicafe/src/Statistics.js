import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad }) => {
  if (good || neutral || bad) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Statistics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <StatisticsLine text={"Good"} score={good} />
            </tr>
            <tr>
              <StatisticsLine text={"Neutral"} score={neutral} />
            </tr>
            <tr>
              <StatisticsLine text={"Bad"} score={bad} />
            </tr>
            <tr>
              <StatisticsLine text={"All"} score={bad + good + neutral} />
            </tr>
            <tr>
              <StatisticsLine
                text={"Average"}
                score={(good * 1 + bad * -1) / (bad + good + neutral)}
              />
            </tr>
            <tr>
              <StatisticsLine
                text={"Positive"}
                score={good / (neutral + bad + good)}
              />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return <p>No Feedback Given</p>;
};

export default Statistics;
