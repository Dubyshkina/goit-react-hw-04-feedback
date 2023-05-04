import { Component } from "react";

import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

import css from '../components/App.module.css';


 class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = (e) => {
    const currentBtnValue = e.target.value;
    this.setState(prevState => ({
      ...prevState,
       [currentBtnValue]: prevState[currentBtnValue] + 1,
       }))
  }
  countTotal = () => {

    const valuesArr = Object.values(this.state);

    return valuesArr.reduce((total, value) => {
      return (total += value);
    }, 0);
  }

countPercentage = () => {

  return Math.round((this.state.good / this.countTotal()) * 100);

}

isFeedBack = () => {
  if(this.countTotal() === 0){
    return false;
  }else{
    return true;
  }
};

  render(){
  
   const btnName = Object.keys(this.state)
    return (
      <>
      <div className={css.section}>
        <Section title='Please leave feedback'>
      <Feedback options ={btnName} onLeaveFeedback={this.onLeaveFeedback}
      />
      </Section>
      {this.isFeedBack() ? (
    <Section title='Statistics' >
       <Statistics 
        stat={this.state}
        total={this.countTotal()}
        positiveFeedback={this.countPercentage()}/>
    </Section>
       
      ) : (
        <Notification message='No feedback given'/>
      )}
      </div>
      </>
    );
  }
 };
 export default App;
  
