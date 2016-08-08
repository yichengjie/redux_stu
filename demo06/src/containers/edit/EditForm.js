import EditForm from '../../views/edit/EditForm.jsx' ;
import {connect} from 'react-redux';
import {handleInputChange} from  '../../actions/edit/actions.js' ;

let mapState2Props = (state,ownProp) =>{
  return {
    formData:state.brandGroup
  } ;
};
let mapDispatch2Props = (dispatch,ownProp) => {
  return {
    handleInputChange:(param) => dispatch(handleInputChange(param))
  };
} ;

export default connect(
  mapState2Props,
  mapDispatch2Props
)(EditForm) ;
