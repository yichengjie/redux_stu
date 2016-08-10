import EditForm from '../../views/edit/EditForm.jsx' ;
import {connect} from 'react-redux';
import {handleInputChange,updateFieldErrors} from  '../../actions/edit/actions.js' ;

let mapState2Props = (state,ownProp) =>{
  return {
    formData:state.brandGroup,
    fieldErrors:state.fieldErrors
  } ;
};
let mapDispatch2Props = (dispatch,ownProp) => {
  return {
    handleInputChange:(param) => dispatch(handleInputChange(param)),
    updateFieldErrors:(param) => dispatch(updateFieldErrors(param))
  };
} ;

export default connect(
  mapState2Props,
  mapDispatch2Props
)(EditForm) ;
