import React ,{Component} from 'react';
import TablePublish from './TablePublish.jsx' ;


 class EditForm extends Component {
   constructor(props) {
     super(props) ;
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
                            <input type="text" className="form-control" placeholder="数字"/>
                        </div>
                        <span className="errorInfo_validate">这里是错误提示信息</span>
                    </div>
                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">品牌集名称</label>
                        <div className="pure-u-1-4">
                            <input type="text"  className="form-control"  placeholder="数字" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">销售日期</label>
                        <div className="pure-u-1-8">
                            <input type="text"  className="form-control"  placeholder="范围" />
                        </div>
                        <label htmlFor="id2" className="glyphicon glyphicon-th iconfont_box"></label>
                        <div className="pure-u-1-8">
                            <input type="text"  className="form-control"  placeholder="范围" />

                        </div>
                        <label htmlFor="id2" className="glyphicon glyphicon-th iconfont_box"></label>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">区域1</label>
                        <div className="pure-u-1-8">
                            <select name="loc1" className="form-control">
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
                            <input type="text"  className="form-control"  placeholder="范围" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">区域2</label>
                        <div className="pure-u-1-8">
                            <select name="loc2" className="form-control">
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
                            <input type="text"  className="form-control"  placeholder="范围" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="pure-u-1-8 control-label">区域限制</label>
                        <div className="pure-u-1-2">
                            <div className="radio-inline">
                                <input type="radio" id="r1"/><label htmlFor="r1" className="myhand">区域1→区域2</label>
                            </div>
                            <div className="radio-inline">
                                <input type="radio" id="r2"/><label htmlFor="r2" className="myhand">区域2→区域1</label>
                            </div>
                            <div className="radio-inline">
                                <input type="radio" id="r3"/><label htmlFor="r3" className="myhand">双向</label>
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
                            <input type="text"  className="form-control"  placeholder="范围" />
                        </div>
                        <div className="pure-u-1-8">
                            <input type="text"  className="form-control"  placeholder="范围" />
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
                            <textarea className="form-control" rows="3"></textarea>
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
