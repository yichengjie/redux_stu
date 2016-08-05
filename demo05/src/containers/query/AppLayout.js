import AppLayout from '../../views/query/AppLayout.jsx' ;
import { connect } from 'react-redux';
import { queryBrandGroups,deleteBrand ,deleteBrandGroup,
  addSelectBrandGroupId,clearSelectBrandGroupId} from '../../actions/query/actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    brandGroups: state.brandGroups,
    brandGroupIds:state.brandGroupIds
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    queryBrandGroups: (param) => {
      dispatch(queryBrandGroups(param));
    },
    deleteBrand:(param) => {
      dispatch(deleteBrand(param)) ;
    },
    deleteBrandGroup:(param) => {
      //删除品牌集数据
      dispatch(deleteBrandGroup(param)) ;
      //删除选中的s5状态
      dispatch(clearSelectBrandGroupId()) ;
    },
    addSelectBrandGroupId:(param) =>{
      dispatch(addSelectBrandGroupId(param)) ;
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);
