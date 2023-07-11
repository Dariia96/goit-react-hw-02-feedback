import PropTypes from "prop-types";
const Notification = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
          alert ("There is no feedback")
    }
  

};

export default Notification;
Notification.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    
};
