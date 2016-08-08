import OperNarBar from '../../views/query/OperNavBar.jsx' ;
import { connect } from 'react-redux';
import {addBrandGroup,deleteBrandGroup,clearSelectBrandGroupId} from '../../actions/query/actions.js' ;

const mapStateToProps = (state, ownProps) => {
  return {
    brandGroupIds:state.brandGroupIds
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleAddBrandGroup: (param) => {
      dispatch(addBrandGroup(param));
    },
    handleDeleteBrandGroup:(param) =>{
      //删除品牌集数据
      dispatch(deleteBrandGroup(param));
      //删除选中的s5状态
      dispatch(clearSelectBrandGroupId()) ;
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OperNarBar);
