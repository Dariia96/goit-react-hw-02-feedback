import { Component } from 'react'
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import { object } from 'prop-types';

let positiveFeedback = 0;
let total = 0;
class Feedback extends Component {
	state = {
  good: 0,
  neutral: 0,
  bad: 0
	}
	
	handleChange = (name) => {
		
		this.setState((prevState) => ({
			[name]: prevState[name] + 1,
		})
		);
		this.countTotalFeedback();	
		this.countPositiveFeedbackPercentage();

	}		
	
		
	/*handleChangeNeutral = () => {

		this.setState((prevState) => ({
			neutral: prevState.neutral + 1,
		}))
		this.countTotalFeedback();
		this.countPositiveFeedbackPercentage();
	}		
		
	handleChangeBad = () => {
		this.setState((prevState) => ({
			bad: prevState.bad + 1,
		}))
		this.countTotalFeedback();
		this.countPositiveFeedbackPercentage();
	}	*/	
		
	countTotalFeedback = () => {
	 total =  1+ this.state.good + this.state.neutral + this.state.bad;
	}	
	
	countPositiveFeedbackPercentage= () => {
		positiveFeedback = + ((this.state.good / total) * 100).toFixed(0);
	}	
		
	render() {
		const {  good, neutral, bad } = this.state
		return (<section>
			
			<h2>Please leave feedback</h2>
			<FeedbackOptions
				options={Object.keys(this.state)}
				handleChange={this.handleChange}
			/>			
			
			<h2>Statistics</h2>
			
			
			<Statistics
				good =  {good}
				neutral = {neutral} 
				bad={bad}				
				total = { total}
				positiveFeedback = { positiveFeedback } 
			/>
			<Notification
			good =  { this.state.good}
			neutral = { this.state.neutral} 
			bad={this.state.bad}	
			/>
			</section>
		)
	}
}

export default Feedback