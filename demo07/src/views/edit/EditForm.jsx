import React ,{Component} from 'react';
import TablePublish from '../../containers/edit/TablePublish.js' ;
import DatePickerInput from '../../components/DatePickerInput.jsx' ;
import Validator from 'validator_lib' ;
import _ from 'lodash' ;
import rules from './rules' ;

 class EditForm extends Component {
   constructor(props) {
      super(props) ;
      this.getValidatorData = this.getValidatorData.bind(this);
      this.renderHelpText = this.renderHelpText.bind(this);
      this.getClasses = this.getClasses.bind(this);
      let validator2 = new Validator(rules) ;
      window.validator2 = validator2 ;
   }

   getValidatorData() {
      return this.props.formData ;
   }
   //<span className="errorInfo_validate">这里是错误提示信息</span>
   renderHelpText(message) {
     return (
       <span className="errorInfo_validate">{message}</span>
     );
   }

   getClasses(field) {
     return classnames({
       'form-group': true,
       'has-error': !this.props.isValid(field)
     });
   }


   handleInputChange(event){
     let target = event.target ;
     let value = target.value ;
     let name = target.name ;
     //console.info('xxxxxxxx ' + name +" , " + value) ;
     this.props.handleInputChange({name,value}) ;
   }

   handleValidateInput(event){
     let target = event.target ;
     let name = target.name ;
     this.handleValidateInput2(name) ;
   }

   handleValidateInput2(name){
     validator2.isValid(this.props.formData,name) ;
     let fieldErrors = validator2.fieldErrors() ;
     this.props.updateFieldErrors(fieldErrors) ;
   }

   componentDidMount(){
     var _self = this ;
     var validator = $("#myEditForm").validate({meta : ""});
		 window.validator = validator ;

     validator2.rule('brandTitle', function(param, val) {
       if(_self.props.formData.seqNum==='123'){
         if(val==='456'){
           return true ;
         }
         return false;
       }
       return true ;
     }) ;

     validator2.rule('brandTitle', function(param, val) {
       if(_self.props.formData[param]==='123'){
         if(val==='456'){
           return true ;
         }
         return false;
       }
       return true ;
     }) ;

     validator2.rule('geoA', function(param, val) {
       if(_self.props.formData[param]==='A'){
         if(_.includes(['1','2','3'],val)){
           return true ;
         }
         return false;
       }
       return true ;
     }) ;

     //必填相互校验
     validator2.rule('required2', function(param, val) {
       //console.info('-['+_self.props.formData[param]+']-','-['+val+']-') ;
       if(_self.props.formData[param]===''){
         if(val===''){
           return true ;
         }
         return false ;
       }else{
         if(val===''){
           return false ;
         }
         return true ;
       }
     }) ;


   }


   getErrorTip(name){
     let fieldErrors = this.props.fieldErrors ;
     let tip = "" ;
     let tmpTip = fieldErrors[name] ;
     if(tmpTip&&tmpTip['message']){
       tip = tmpTip['message'] ;
     }
     return tip ;
   }

   render (){
     return (
       <form className="form-horizontal" id ="myEditForm">
          <div className="data_section ">
             <div className="title_layout">
                <span className="left">品牌集</span>
             </div>
             {/*------------------必填项 start----------------------------*/}
             <div className="content_layout">
                <span className="left text-danger">必填项</span>
                <div className="right">
                   <div className="form-group">
                        <label className="pure-u-1-8 control-label">序列号</label>
                        <div className="pure-u-1-3">
                            <input type="text" name ="seqNum" className="form-control"
                              value = {this.props.formData.seqNum}
                              onChange = {this.handleInputChange.bind(this)}
                              onBlur = {this.handleValidateInput.bind(this)}
                              placeholder="数字"/>
                        </div>
                        <span className="errorInfo_validate">{this.getErrorTip('seqNum')}</span>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">品牌集名称</label>
                        <div className="pure-u-1-3">
                            <input type="text"  className="form-control"
                              name ="title"
                              value = {this.props.formData.title}
                              onChange = {this.handleInputChange.bind(this)}
                              onBlur = {this.handleValidateInput.bind(this)}
                              placeholder="数字" />
                        </div>
                        <span className="errorInfo_validate">{this.getErrorTip('title')}</span>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">销售日期</label>
                        <div className="pure-u-1-6">
                            <DatePickerInput
                              id ="startDate"
                              name ="startDate"
                              value = {this.props.formData.startDate}
                              handleInputChange = {this.props.handleInputChange}
                              handleValidateInput = {this.handleValidateInput2.bind(this)}
                              placeholder="范围"
                            />
                        </div>
                        <label htmlFor="startDate"
                          className="glyphicon glyphicon-calendar iconfont_box"></label>
                        <div className="pure-u-1-6">
                            <DatePickerInput
                              id ="endDate"
                              name ="endDate"
                              value = {this.props.formData.endDate}
                              handleInputChange = {this.props.handleInputChange}
                              placeholder="范围"
                            />
                        </div>
                        <label htmlFor="endDate"
                          className="glyphicon glyphicon-calendar iconfont_box"></label>
                        <span className="errorInfo_validate">{this.getErrorTip('startDate')}</span>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">区域1</label>
                        <div className="pure-u-1-6">
                            <select name="loc1" name ="loc1"
                              className="form-control"
                               value ={this.props.formData.loc1}
                               onChange = {this.handleInputChange.bind(this)}
                               >
                                <option value="">选择</option>
                                <option value="A">A-大区</option>
                                <option value="C">C-城市</option>
                                <option value="N">N-国家</option>
                                <option value="P">P-机场</option>
                                <option value="S">S-州</option>
                                <option value="Z">Z-区域</option>
                            </select>
                        </div>
                        <div className="pure-u-1-6">
                            <input type="text"  className="form-control"
                            name ="startCity"
                            onChange = {this.handleInputChange.bind(this)}
                            value ={this.props.formData.startCity}
                            onBlur = {this.handleValidateInput.bind(this)}
                            placeholder="范围" />
                        </div>
                        <span className="errorInfo_validate">{this.getErrorTip('startCity')}</span>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">区域2</label>
                        <div className="pure-u-1-6">
                            <select name="loc2"
                              className="form-control"
                              value ={this.props.formData.loc2}
                              onChange = {this.handleInputChange.bind(this)}>
                                <option value="">选择</option>
                                <option value="A">A-大区</option>
                                <option value="C">C-城市</option>
                                <option value="N">N-国家</option>
                                <option value="P">P-机场</option>
                                <option value="S">S-州</option>
                                <option value="Z">Z-区域</option>
                            </select>
                        </div>
                        <div className="pure-u-1-6">
                            <input type="text"  className="form-control"
                              name ="endCity"
                              onChange = {this.handleInputChange.bind(this)}
                              value ={this.props.formData.endCity}
                              onBlur = {this.handleValidateInput.bind(this)}
                              placeholder="范围" />
                        </div>
                        <span className="errorInfo_validate">{this.getErrorTip('endCity')}</span>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">区域限制</label>
                        <div className="pure-u-1-2">
                            <div className="radio-inline">
                                <input type="radio" name ="locDefine" id="r1"
                                value ="1"
                                onChange = {this.handleInputChange.bind(this)}
                                checked = {this.props.formData.locDefine == '1'}/>
                                <label htmlFor="r1" className="myhand">区域1→区域2</label>
                            </div>
                            <div className="radio-inline">
                                <input type="radio" name ="locDefine" id="r2"
                                 checked = {this.props.formData.locDefine== '2'}
                                 onChange = {this.handleInputChange.bind(this)}
                                 value ="2"/>
                                <label htmlFor="r2" className="myhand">区域2→区域1</label>
                            </div>
                            <div className="radio-inline">
                                <input type="radio" name ="locDefine" id="r3"
                                checked = {this.props.formData.locDefine == '3'}
                                onChange = {this.handleInputChange.bind(this)}
                                value="3"/>
                                <label htmlFor="r3" className="myhand">双向</label>
                            </div>
                        </div>
                    </div>

                </div>
             </div>
            {/*------------------必填项 end----------------------------*/}

            {/*------------------选填项 start----------------------------*/}
            <div className="content_layout">
                <span className="left">选填项</span>
                <div className="right">
                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">旅行日期</label>
                        <div className="pure-u-1-6">
                            <input type="text"  className="form-control"
                              name = "travelStart"
                              value = {this.props.formData.travelStart}
                              onChange = {this.handleInputChange.bind(this)}
                             placeholder="范围" />
                        </div>
                        <div className="pure-u-1-6">
                            <input type="text"  className="form-control"
                              name ="travelEnd"
                              value = {this.props.formData.travelEnd}
                              onChange = {this.handleInputChange.bind(this)}
                              placeholder="范围" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label  className="pure-u-1-8 control-label">发布</label>
                        <div className="pure-u-1-2">
                            <TablePublish/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">描述</label>
                        <div className="pure-u-1-3">
                            <textarea className="form-control"
                             name ="desc"
                             value = {this.props.formData.desc}
                             onChange = {this.handleInputChange.bind(this)}
                             rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            {/*------------------选填项 end----------------------------*/}

          </div>
        </form>
     ) ;
   }
 }
 //module.exports = validation(strategy)(UserLogin);
 //export default validation(strategy)(EditForm) ;
 export default  EditForm ;
