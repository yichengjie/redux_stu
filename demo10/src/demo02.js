export default function demo02(){
    var data = {
      levels:[ 1,3,4,5],
      posts:[
          {title:"some title ",date:"2014-20-3 12:22" },//错误日期
          {title:"不和谐的标题",date:"2014-12-3 12:22" }],
    }
    var vc = new VC( data );

    vc.check("levels").alias("等级").array(function(item,index){
      // 对于数组里的没一个值都检查一遍，如果fail，错误信息将被记录
      item.max(3)
    })

    vc.check("posts").array( function( item,index ){
      // 如果数组了的元素是一个对象，则使用.check来进行检查(目前不支持数组内部元素的消毒);
      // if(data.posts[index]['date']!=''){
      //     item.check("date").date().trim();
      // }
      item.check("date").date() ;
      //item.check("date").required();
      //item.check("name").required();
    })
    //["posts.0.date: 2014-20-3 12:22不符合日期格式"]
    console.info(vc.errors) ;
    //expect(vc.errors).to.have.length(5); // -> pass
    /**
    [ '等级.2: 最大值为3',
    '等级.3: 最大值为3',
    'posts.0.date: 2014-20-3 12:22不符合日期格式',
    'posts.0: 为必填字段',
    'posts.1: 为必填字段'
    ] **/
}
