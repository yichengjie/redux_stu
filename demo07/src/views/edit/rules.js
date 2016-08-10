export default {
  seqNum: {
      required: true,
      maxLength: 10,
      message: {
        required: '必须字段',
        maxLength: '最大长度不能超过10位'
      }
    },
    title:{
       required: true,
       brandTitle:'seqNum',
       digits:true,
       message: {
         required: '必填字段',
         digits:'必须输入数字',
         brandTitle:'当序列号为 123 时，品牌集名称必须为 456'
       }
    },
    startCity:{
      required2:'loc1',
      geoA:"loc1",
      message:{
        required2:'两者同时为空，或同时填写',
        geoA:'大区填写不正确'
      }
    },
    endCity:{
      required2:'loc2',
      geoA:"loc2",
      message:{
        required2:'两者同时为空，或同时填写',
        geoA:'大区填写不正确'
      }
    },
    startDate:{
       required: true,
       message:{
         required: '销售日期必填'
       }
    }
} ;
