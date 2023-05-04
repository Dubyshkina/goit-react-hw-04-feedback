import { Component } from 'react';

import PropTypes from 'prop-types';

import css from '../Feedback/Feedback.module.css';

class Feedback extends Component {
  static defaultProps = {
    options: [],
  };

  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={css.container__wrap}>
        <div className={css.container__btn}>
          {this.props.options.map(btn => (
            <button key={btn} value={btn} type="button" onClick={e => this.props.onLeaveFeedback(e)} className={css.btn}>{btn}</button>
          ))}
        </div>
      </div>
    );
  }
}

export default Feedback;
