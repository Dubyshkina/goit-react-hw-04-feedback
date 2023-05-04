
import PropTypes from 'prop-types';
import css from '../Feedback/Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) =>{
    return (
      <div className={css.container__wrap}>
        <div className={css.container__btn}>
          {options.map(option => (
            <button key={option.id} id={option.id} type="button" onClick={onLeaveFeedback} className={css.btn}>{option.name}</button>
          ))}
        </div>
      </div>
    );
  }


  Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    onLeaveFeedback: PropTypes.func
};


export default Feedback;
