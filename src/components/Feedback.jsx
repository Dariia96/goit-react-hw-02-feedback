import { Component } from 'react'
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
let total = 0;
let positiveFeedback = 0;

class Feedback extends Component {
	state = {
  good: 0,
  neutral: 0,
  bad: 0
	}
	
	handleChangeGood = ( ) => {
		this.setState((prevState) => ({
			good: prevState.good + 1,
		})
		);
		this.countTotalFeedback();	
		this.countPositiveFeedbackPercentage();

	}		
	
		
	handleChangeNeutral = () => {

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
	}		
		
	countTotalFeedback = () => {
	total =  this.state.good + this.state.neutral + this.state.bad;
	}	
	
	countPositiveFeedbackPercentage= () => {
		positiveFeedback = + ((this.state.good / total) * 100).toFixed(0);
	}	
		
	render() {
		const {  good, neutral, bad } = this.state
		return (<section>
			
			<h2>Please leave feedback</h2>
			<FeedbackOptions
				good={good}
				neutral={neutral}
				bad={bad}
				handleChangeGood={this.handleChangeGood}
				handleChangeNeutral={this.handleChangeNeutral}
				handleChangeBad={this.handleChangeBad}
			/>			
			
			<h2>Statistics</h2>
			
			
			<Statistics
				good =  { this.state.good}
				neutral = { this.state.neutral} 
				bad={this.state.bad}				
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