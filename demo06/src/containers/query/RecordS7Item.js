import RecordS7Item from '../../views/query/RecordS7Item.jsx' ;
import {connect} from 'react-redux' ;
import {deleteBrand} from '../../actions/query/actions.js' ;

let mapStateToProps = (state,ownProps) =>{
    return {

    } ;
} ;

let mapDispatchToProps = (dispatch,ownProps) =>{
  return {
    deleteBrand:(param) =>{
      dispatch(deleteBrand(param)) ;
    }
  } ;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordS7Item) ;
