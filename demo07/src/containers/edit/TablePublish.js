import TablePublish from '../../views/edit/TablePublish.jsx' ;
import {connect} from 'react-redux' ;
import {handleListInputChange,handleClickTr,addTableLine,deleteTableLine} from '../../actions/edit/actions.js' ;


let mapState2Props = (state,ownProp) =>{
  return {
    list:state.brandGroup.listPubObjVo
  };
};

let mapDispatch2Props = (dispatch,ownProp) => {
  return {
    handleListInputChange:(param) => {
      dispatch(handleListInputChange(param)) ;
    },
    handleClickTr:(param) => {
      dispatch(handleClickTr(param)) ;
    },
    addTableLine:(param) => {
      dispatch(addTableLine(param)) ;
    },
    deleteTableLine:(param) => {
      dispatch(deleteTableLine(param)) ;
    }
  } ;
};

export default connect(
  mapState2Props,
  mapDispatch2Props
)(TablePublish) ;
