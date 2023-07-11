import css from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

const FeedbackOptions = ({ good, neutral, bad, handleChangeGood, handleChangeNeutral, handleChangeBad }) => {
    return <ul className={css.checkboxes}>
        <li><label className={css.checklabel} >
          <span>Good</span>
            <input
            className={css.checkinput}
            type="checkbox"
            checked={good}
            onChange={handleChangeGood}
          />
        </label></li>
				<li><label className={css.checklabel}>
          <span>Neutral</span>
            <input
            className={css.checkinput}
            type="checkbox"
            checked={neutral}
            onChange={handleChangeNeutral}
          />
        </label> </li>
				<li><label className={css.checklabel}>
          <span>Bad</span>
            <input
            className={css.checkinput}
            type="checkbox"
            checked={bad}
            onChange={handleChangeBad}
          />
        </label> </li>
				</ul>

};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    handleChangeGood: PropTypes.func.isRequired,
    handleChangeNeutral: PropTypes.func.isRequired,
    handleChangeBad:PropTypes.func.isRequired,
};