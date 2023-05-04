
import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) =>  {
    return (
      <div className={css.container__wrap}>
        <ul className={css.stat__list}>
        <li className={css.stat__item}>Good: {good}</li>
        <li className={css.stat__item}>Neutral: {neutral}</li>
        <li className={css.stat__item}>Bad: {bad}</li>
        <li className={css.stat__item}>Total: {total}</li>
        <li className={css.stat__item}>Positive feedback: {positivePercentage.toFixed(0)}%</li>
        </ul>
      </div>
    );
  }

  Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

export default Statistics;
