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
    deleteBrand:(param) => {
      dispatch(deleteBrand(param)) ;
    },
    deleteBrandGroup:(param) => {
      //删除品牌集数据
      dispatch(deleteBrandGroup(param)) ;
      //删除选中的s5状态
      dispatch(clearSelectBrandGroupId()) ;
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);
