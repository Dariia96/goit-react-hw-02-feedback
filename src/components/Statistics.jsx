import PropTypes from "prop-types";
const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    if (good !== 0 || neutral !== 0 || bad !== 0) {
          return <ul><li>Good: { good}</li>
				<li>Neutral: { neutral} </li>
				<li>Bad:{bad}</li>
				<li>Total:{ total}</li>
				<li>Positive feedback:{ positiveFeedback } % </li></ul>
    }
  return <p>No feedback given</p>

};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};