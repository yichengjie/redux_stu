
 import React ,{Component} from 'react';
 import TableFooter from '../../components/TableFooter.jsx' ;

 class TablePublish extends Component {
   constructor(props) {
     super(props) ;
   }
   handleInputChange(id,name,event){
     let target = event.target ;
     let value = target.value ;
     let listName = "listPubObjVo" ;
     var obj = {listName,id ,name ,value} ;
     this.props.handleListInputChange(obj) ;
   }
   renderTr(item){
     return (
       <tr key ={item.getIn(['id'])}>
         <td>
             <select  className="common_input"
                  style={{"width": "98%"}}
                  onChange = {this.handleInputChange.bind(this,item.getIn(['id']),'type')}
                  value ={item.getIn(['type'])}>
                 <option value="">选择</option>
                 <option value="T">Travel Agency code</option>
                 <option value="I">IATA number</option>
                 <option value="V">Department Code</option>
             </select>
         </td>
         <td>
            <input type="text" className="common_input"
              value = {item.getIn(['code'])}
              onChange = {this.handleInputChange.bind(this,item.getIn(['id']),'code')}
              style={{"width":"98%"}}/>
          </td>
       </tr>
     ) ;
   }

   render (){
     let list = this.props.list ;
     console.info(list) ;
     return (
       <div className="table_layout"  style={{"width":"260px"}}>
           <table>
               <thead>
               <tr>
                   <th width="130">发布类型</th>
                   <th  width="130">发布对象</th>
               </tr>
               </thead>
               <tbody>
                {
                  list.map((item,index)=>{
                    return this.renderTr(item,index) ;
                  })
                }
               </tbody>
           </table>
           <TableFooter/>
       </div>
     );
   }
 }
 export default TablePublish;
