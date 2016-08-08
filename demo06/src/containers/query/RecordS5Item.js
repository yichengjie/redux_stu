import RecordS5Item from '../../views/query/RecordS5Item.jsx' ;
import {connect} from 'react-redux' ;
import {addBrand,addSelectBrandGroupId} from '../../actions/query/actions.js' ;


const mapStateToProps = (state,ownProps) => {
  return {

  };
};
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    addBrand:(param) =>{
      dispatch(addBrand(param)) ;
    },
    addSelectBrandGroupId:(param) =>{
      dispatch(addSelectBrandGroupId(param)) ;
    }
  } ;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordS5Item) ;
