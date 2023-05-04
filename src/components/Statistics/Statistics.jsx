import { Component } from 'react';

import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static defaultProps = {
    stat: { good: 0, bad: 0, neutral: 0 },
    total: 0,
    positiveFeedback: 0,
  };

  static propTypes = {
    stat: PropTypes.object,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number,
  };

  render() {
    return (
      <div className={css.container__wrap}>
        <ul className={css.stat__list}>
          {Object.entries(this.props.stat).map(([key, value]) => {
            return (
              <li key={key} className={css.stat__item}>
                <span>{key}: </span>
                <span>{value}</span>
              </li>
            );
          })}
          <li className={css.stat__item}>
            <span>Total: </span>
            <span>{this.props.total}</span>
          </li>
          <li className={css.stat__item}>
            <span>Positive feedback: </span>
            <span>{this.props.positiveFeedback}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
