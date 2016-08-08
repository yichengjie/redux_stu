import QuerySection from '../../views/query/QuerySection.jsx' ;
import {queryBrandGroups} from '../../actions/query/actions.js' ;
import {connect}  from 'react-redux' ;

const mapStateToProps = (state,ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    queryBrandGroups:(param)=>{
        dispatch(queryBrandGroups(param));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuerySection);
