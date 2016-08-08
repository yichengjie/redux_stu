import {submitForm} from '../../actions/edit/actions.js' ;
import {connect} from 'react-redux' ;
import QuerySection from '../../views/edit/QuerySection.jsx' ;

let mapState2Props = (state,ownProp) =>{
  return {
    formData:state.brandGroup
  };
} ;

let mapDispatch2Props = (dispatch,ownProp) => {
  return {
    submitForm: (param) => dispatch(submitForm(param))
  } ;
};

export default connect(
  mapState2Props,
  mapDispatch2Props
)(QuerySection) ;
