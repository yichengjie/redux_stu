import AppLayout from '../../views/query/AppLayout.jsx' ;
import { connect } from 'react-redux';
import { queryBrandGroups } from '../../actions/query/actions.js';


const mapStateToProps = (state, ownProps) => {
  return {
    brandGroups: state.brandGroups
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    queryBrandGroups: () => {
      dispatch(queryBrandGroups());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);
