import React ,{Component} from 'react';

class RecordS5Item extends Component {
  constructor(props) {
    super(props) ;
  }
  render (){
    let {id,title,seqNum,startCity,endCity,startDate,
      endDate,travelStart,travelEnd,pubObj,stateDesc} = this.props.s5 ;
    return (
      <div className="brand_title">
          <span className="left text-info">
              <input name ="checkAll" type="checkbox"/>
              <i className="glyphicon glyphicon-upload marginL10" data-name="showHideBody"></i>
                {title}
              <i className="glyphicon glyphicon-info-sign pull-right descrImg" data-toggle="tooltip"
                 data-placement="top"  title="描述信息为空"></i>
          </span>
          <span className="right">
              <i className="glyphicon glyphicon-pencil marginR10 myhand"></i>
              <button type="button" className="btn btn-success btn-sm">新建品牌</button>
          </span>
          <span className="center">
             <span>序列号：{seqNum}</span>
             <span className="marginL10">城市对：<span className="bold">{startCity} → {endCity}</span></span>
             <span className="marginL10">生效日期对：<span className="bold">{startDate} — {endDate}</span></span>
             <span className="marginL10">旅行日期对：<span className="bold">{travelStart} — {travelEnd}</span></span>
             <span className="marginL10">发布对象：{pubObj} 状态：<span className="text-danger">{stateDesc}</span></span>
          </span>
      </div>
    ) ;
  }
}

export default RecordS5Item ;
