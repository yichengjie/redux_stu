import React,{Component} from 'react';

class HeaderNav extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
                      <span className="sr-only">导航菜单</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Brand</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
                  <ul className="nav navbar-nav">
                      <li className="active"><a href="index.html">品牌服务</a></li>
                  </ul>
              </div>
          </div>
      </nav>
    ) ;
  }
}
export default HeaderNav ;
