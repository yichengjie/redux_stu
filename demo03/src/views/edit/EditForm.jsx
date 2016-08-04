import React ,{Component} from 'react';
import TablePublish from './TablePublish.jsx' ;


 class EditForm extends Component {
   constructor(props) {
     super(props) ;
   }

   handleInputChange(event){
     let target = event.target ;
     let value = target.value ;
     let name = target.name ;
     //console.info('xxxxxxxx ' + name +" , " + value) ;
     this.props.handleInputChange(name,value) ;
   }

   render (){
     return (
       <form className="form-horizontal">
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
                        <div className="pure-u-1-4">
                            <input type="text" name ="seqNum" className="form-control"
                              value = {this.props.fields.getIn(['seqNum'])}
                              onChange = {this.handleInputChange.bind(this)}
                              placeholder="数字"/>
                        </div>
                        <span className="errorInfo_validate">这里是错误提示信息</span>
                    </div>
                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">品牌集名称</label>
                        <div className="pure-u-1-4">
                            <input type="text"  className="form-control"
                            name ="title"
                            value = {this.props.fields.getIn(['title'])}
                            onChange = {this.handleInputChange.bind(this)}
                            placeholder="数字" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">销售日期</label>
                        <div className="pure-u-1-8">
                            <input type="text"  className="form-control"
                            name ="startDate"
                            value = {this.props.fields.getIn(['startDate'])}
                            onChange = {this.handleInputChange.bind(this)}
                            placeholder="范围" />
                        </div>
                        <label htmlFor="id2" className="glyphicon glyphicon-th iconfont_box"></label>
                        <div className="pure-u-1-8">
                            <input type="text"  className="form-control"
                            name ="endDate"
                            value ={this.props.fields.getIn(['endDate'])}
                            onChange = {this.handleInputChange.bind(this)}
                            placeholder="范围" />
                        </div>
                        <label htmlFor="id2" className="glyphicon glyphicon-th iconfont_box"></label>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">区域1</label>
                        <div className="pure-u-1-8">
                            <select name="loc1" name ="loc1"
                              className="form-control"
                               value ={this.props.fields.getIn(['loc1'])}
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
                        <div className="pure-u-1-8">
                            <input type="text"  className="form-control"
                            name ="startCity"
                            onChange = {this.handleInputChange.bind(this)}
                            value ={this.props.fields.getIn(['startCity'])}
                            placeholder="范围" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">区域2</label>
                        <div className="pure-u-1-8">
                            <select name="loc2"
                              className="form-control"
                              value ={this.props.fields.getIn(['loc2'])}
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
                        <div className="pure-u-1-8">
                            <input type="text"  className="form-control"
                              name ="endCity"
                              onChange = {this.handleInputChange.bind(this)}
                              value ={this.props.fields.getIn(['endCity'])}
                              placeholder="范围" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">区域限制</label>
                        <div className="pure-u-1-2">
                            <div className="radio-inline">
                                <input type="radio" name ="locDefine" id="r1"
                                value ="1"
                                onChange = {this.handleInputChange.bind(this)}
                                checked = {this.props.fields.getIn(['locDefine']) == '1'}/>
                                <label htmlFor="r1" className="myhand">区域1→区域2</label>
                            </div>
                            <div className="radio-inline">
                                <input type="radio" name ="locDefine" id="r2"
                                 checked = {this.props.fields.getIn(['locDefine']) == '2'}
                                 onChange = {this.handleInputChange.bind(this)}
                                 value ="2"/>
                                <label htmlFor="r2" className="myhand">区域2→区域1</label>
                            </div>
                            <div className="radio-inline">
                                <input type="radio" name ="locDefine" id="r3"
                                checked = {this.props.fields.getIn(['locDefine']) == '3'}
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
                        <div className="pure-u-1-8">
                            <input type="text"  className="form-control"
                              name = "travelStart"
                              value = {this.props.fields.getIn(['travelStart'])}
                              onChange = {this.handleInputChange.bind(this)}
                             placeholder="范围" />
                        </div>
                        <div className="pure-u-1-8">
                            <input type="text"  className="form-control"
                              name ="travelEnd"
                              value = {this.props.fields.getIn(['travelEnd'])}
                              onChange = {this.handleInputChange.bind(this)}
                             placeholder="范围" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label  className="pure-u-1-8 control-label">发布</label>
                        <div className="pure-u-1-2">
                            <TablePublish
                              list = {this.props.fields.getIn(['listPubObjVo'])}
                              handleListInputChange = {this.props.handleListInputChange.bind(this)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">描述</label>
                        <div className="pure-u-1-3">
                            <textarea className="form-control"
                             name ="desc"
                             value = {this.props.fields.getIn(['desc'])}
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
 export default EditForm ;
