import { connect } from 'react-redux';
import { increment, decrement, CounterState } from '../../store/models/counter';
import { RootState } from '../../store';
import TestComponent from './TestComponent';

const mapStateToProps = ({ counterReducer }: RootState): CounterState => counterReducer;
const mapDispatchToProps = {
  increment,
  decrement,
};

export type IProps = typeof mapDispatchToProps & CounterState;

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
