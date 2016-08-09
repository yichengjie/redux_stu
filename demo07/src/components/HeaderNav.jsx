import React,{Component} from 'react';

class HeaderNav extends Component {
  constructor(props) {
    super(props) ;
  }
  static get defaultProps() {
    return {
      curNavItem: "1"
    };
  }
  render(){
    return (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#bs-example-navbar-collapse-9"
                    aria-expanded="false">
                      <span className="sr-only">导航菜单</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Brand</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
                  <ul className="nav navbar-nav">
                      <li  className={this.props.curNavItem==='1' ? "active" : ""}  data-value ="1">
                        <a href="index.html">品牌服务</a>
                      </li>
                      <li className={this.props.curNavItem==='2' ? "active" : ""} >
                        <a href="edit.html">品牌组编辑</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    ) ;
  }
}
export default HeaderNav ;
