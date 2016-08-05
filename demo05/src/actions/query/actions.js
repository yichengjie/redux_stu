/*
 * action 类型
 */
export const QUERY_BRANDGROUPS = 'QUERY_BRANDGROUPS' ;
/*
 * action 创建函数
 */
 let listData = [
   {
     id:'001',title:'asgui_ca test',seqNum:'8776559',startCity:'1',endCity:'2',
     startDate:'2016-06-30',endDate:'9999-12-31',travelStart:'2016-06-30',
     travelEnd:'2016-06-30',pubObj:'001',stateDesc:'未发布',list:[{
         id:"001",
         name:'xx001',
         levelNum:'10011',
         desc:'测试一下啊这里的描述信息'
       },
       {
         id:"002",
         name:'xx002',
         levelNum:'10013',
         desc:'测试一下啊这里的描述信息'
       },{
         id:"003",
         name:'xx003',
         levelNum:'10013',
         desc:'测试一下啊这里的描述信息'
       }
     ]
   },
   {
     id:'002',title:'asgui_ca test',seqNum:'8776559',startCity:'1',endCity:'2',
     startDate:'2016-06-30',endDate:'9999-12-31',travelStart:'2016-06-30',
     travelEnd:'2016-06-30',pubObj:'001',stateDesc:'未发布',list:[{
         id:"003",
         name:'xx003',
         levelNum:'10011',
         desc:'测试一下啊这里的描述信息'
       },
       {
         id:"004",
         name:'xx004',
         levelNum:'10013',
         desc:'测试一下啊这里的描述信息'
       },{
         id:"005",
         name:'xx005',
         levelNum:'10013',
         desc:'测试一下啊这里的描述信息'
       }
     ]
   }
 ];
export function queryBrandGroups() {

  return { type: QUERY_BRANDGROUPS,brandGroups:listData} ;
}
