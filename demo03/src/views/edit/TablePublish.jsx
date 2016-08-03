
 import React ,{Component} from 'react';
 import TableFooter from './TableFooter.jsx' ;

 class TablePublish extends Component {
   constructor(props) {
     super(props) ;
   }
   render (){
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
                 <tr>
                   <td>
                       <select defaultValue ="I" className="common_input" style={{"width": "98%"}}>
                           <option value="">选择</option>
                           <option value="T">Travel Agency code</option>
                           <option value="I">IATA number</option>
                           <option value="V">Department Code</option>
                       </select>
                   </td>
                   <td><input type="text" className="common_input" style={{"width":"98%"}}/></td>
                 </tr>
               </tbody>
           </table>
           <TableFooter/>
       </div>
     );
   }
 }
 export default TablePublish;
