import React ,{Component} from 'react';

class QuerySection extends Component {
  constructor(props) {
    super(props) ;
  }
  handleSaveBrandgroup(){
     let flag = true ;
     let formData = this.props.formData ;
     let seqNum = formData.seqNum ;
     if(seqNum!=='123'){
       flag = false ;
     }
     var jqFlag = validator.form() ;
     console.info('jqFlag: ' + jqFlag) ;
     console.info(JSON.stringify(formData)) ;
     this.props.submitForm(flag) ;
  }
  render(){
    return (
      <div className ="query_section">
        <div className="query_row">
            <span className="query_title">新建品牌集</span>
            <span className="marginLR5">品牌集</span>
            <span className="pull-right marginR15">
                <button type="button" className="btn btn-sm btn-default marginR5" >返回</button>
                <button type="button" className="btn btn-sm btn-success" onClick = {this.handleSaveBrandgroup.bind(this)} >保存</button>
            </span>
        </div>
      </div>
    ) ;
  }
}

export default QuerySection;
