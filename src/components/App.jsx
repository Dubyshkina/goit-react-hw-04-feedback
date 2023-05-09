import { useState } from 'react';

import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

import css from '../components/App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // }

  const onLeaveFeedback = e => {
    switch (e.target.id) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        console.log('Unknown id');
        break;
    }
  };

  const countTotal = () => good + neutral + bad;
 

  const countPercentage = () => {
    return (good / countTotal()) * 100;
  };

  const isFeedBack = () => {
    if (countTotal() === 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <div className={css.section}>
        <Section title="Please leave feedback">
          <Feedback
            options={[
              { id: 'good', name: 'Good' },
              { id: 'neutral', name: 'Neutral' },
              { id: 'bad', name: 'Bad' },
            ]}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {isFeedBack() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotal()}
              positivePercentage={countPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    </>
  );
};

export default App;
