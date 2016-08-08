import AppLayout from '../../views/edit/AppLayout.jsx' ;
import {connect} from 'react-redux' ;
import {handleInputChange,handleListInputChange,
  handleClickTr,addTableLine,deleteTableLine} from  '../../actions/edit/actions.js' ;

let mapStateToProps = (state,ownProps) =>{
  return {
    brandGroup:state.brandGroup
  } ;
} ;

let mapDispatchToProps = (dispatch,ownProps) =>{
  return {
    handleInputChange:(param) =>{
      dispatch(handleInputChange(param)) ;
    },
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
} ;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout) ;
