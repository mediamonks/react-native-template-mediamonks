import { connect } from 'react-redux';
import Home from './Home';
import { RootState } from '../../store/reducers';
import { incrementBy } from '../../store/actions/appActions';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {
  increment: incrementBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
