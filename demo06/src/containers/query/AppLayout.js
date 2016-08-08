import AppLayout from '../../views/query/AppLayout.jsx' ;
import { connect } from 'react-redux';
import {deleteBrand ,addSelectBrandGroupId,clearSelectBrandGroupId,
  addBrand} from '../../actions/query/actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    brandGroups: state.brandGroups,
    brandGroupIds:state.brandGroupIds
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);
