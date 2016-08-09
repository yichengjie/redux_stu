import jsonData from './jsonData.js' ;
import _ from 'lodash';

class API {
  queryBrandGroup(params){
    return  _.cloneDeep(jsonData.listBrandGroup) ;
  }
}
export default API ;
