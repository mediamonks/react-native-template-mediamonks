import { compose } from 'redux';
import { connect } from 'react-redux';
import { incrementCounterValue, decrementCounterValue } from '../../store/actions/counterActions';
import TestComponent from './TestComponent';

const mapStateToProps = state => ({ counterValue: state.counter.counterValue });
const mapDispatchToProps = { incrementCounterValue, decrementCounterValue };

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(connected)(TestComponent);
