import css from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, handleChange }) => {
    return <ul className={css.checkboxes}>
        {options.map((option) => (
            <li key = {option}>
            <button
            className={css.checkinput}            
            name={option}
            type="button"
            onClick={()=>handleChange(option)}
                >
                    <span>{option}</span>
                </button>
            </li>
        ))}
        
		</ul>

};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    
    handleChange: PropTypes.func.isRequired,
    
};