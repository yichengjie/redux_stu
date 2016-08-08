/*!
 * {compony travelsky-dbky ,
 *  author: yicj,
 *  email : 626659321@qq.com,
 * create-date:2016/05/05}
 */
webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _AppLayout = __webpack_require__(317);

	var _AppLayout2 = _interopRequireDefault(_AppLayout);

	var _store = __webpack_require__(331);

	var _store2 = _interopRequireDefault(_store);

	var _reactRedux = __webpack_require__(262);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: _store2.default },
		_react2.default.createElement(_AppLayout2.default, null)
	), document.getElementById('app'));

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AppLayout = __webpack_require__(318);

	var _AppLayout2 = _interopRequireDefault(_AppLayout);

	var _reactRedux = __webpack_require__(262);

	var _actions = __webpack_require__(321);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    brandGroups: state.brandGroups,
	    brandGroupIds: state.brandGroupIds
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {};
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AppLayout2.default);

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(173);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(199);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(200);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(204);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(251);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _HeaderNav = __webpack_require__(259);

	var _HeaderNav2 = _interopRequireDefault(_HeaderNav);

	var _QuerySection = __webpack_require__(319);

	var _QuerySection2 = _interopRequireDefault(_QuerySection);

	var _OperNavBar = __webpack_require__(324);

	var _OperNavBar2 = _interopRequireDefault(_OperNavBar);

	var _BrandGroupPanel = __webpack_require__(326);

	var _BrandGroupPanel2 = _interopRequireDefault(_BrandGroupPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ = __webpack_require__(315);

	var AppLayout = function (_Component) {
	  (0, _inherits3.default)(AppLayout, _Component);

	  function AppLayout(props) {
	    (0, _classCallCheck3.default)(this, AppLayout);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AppLayout).call(this, props));
	  }

	  (0, _createClass3.default)(AppLayout, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'navbar-fixed-top', id: 'myheader' },
	          _react2.default.createElement(_HeaderNav2.default, null),
	          _react2.default.createElement(_QuerySection2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid main_content', id: 'main_content' },
	          _react2.default.createElement(_OperNavBar2.default, null),
	          _react2.default.createElement('span', { className: 'clearfix' }),
	          _react2.default.createElement(
	            'div',
	            { id: 'brand_group_list' },
	            this.props.brandGroups.map(function (item, index) {
	              //let checkFlag =  _.contains(this.props.brandGroupIds,item.id) ;
	              var checkFlag = _.indexOf(_this2.props.brandGroupIds, item.id) != -1;
	              return _react2.default.createElement(_BrandGroupPanel2.default, {
	                showS7Flag: index === 0,
	                s5: item,
	                key: item.id,
	                checkFlag: checkFlag
	              });
	            })
	          )
	        )
	      );
	    }
	  }]);
	  return AppLayout;
	}(_react.Component);

	exports.default = AppLayout;

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _QuerySection = __webpack_require__(320);

	var _QuerySection2 = _interopRequireDefault(_QuerySection);

	var _actions = __webpack_require__(321);

	var _reactRedux = __webpack_require__(262);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {};
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    queryBrandGroups: function queryBrandGroups(param) {
	      dispatch((0, _actions.queryBrandGroups)(param));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_QuerySection2.default);

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(301);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _defineProperty2 = __webpack_require__(293);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(173);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(199);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(200);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(204);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(251);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(298);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuerySection = function (_Component) {
	  (0, _inherits3.default)(QuerySection, _Component);

	  function QuerySection(props) {
	    (0, _classCallCheck3.default)(this, QuerySection);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(QuerySection).call(this, props));

	    _this.state = {
	      stateDesc: ["1"],
	      brandName: "",
	      brandGroupName: "",
	      startCity: "",
	      endCity: "",
	      pubObj: "",
	      startDate: "",
	      endDate: ""
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(QuerySection, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleQueryBrand();
	    }
	  }, {
	    key: 'handleQueryBrand',
	    value: function handleQueryBrand() {
	      var params = this.state;
	      this.props.queryBrandGroups(params);
	    }
	  }, {
	    key: 'handleInputChange',
	    value: function handleInputChange(name, event) {
	      var value = event.target.value;
	      this.setState((0, _defineProperty3.default)({}, name, value));
	    }
	  }, {
	    key: 'handleCheckBoxChange',
	    value: function handleCheckBoxChange(name, event) {
	      var value = event.target.value;
	      var checked = event.target.checked;
	      var list = this.state[name];
	      var newList = [];
	      if (checked) {
	        //选中
	        newList = [].concat((0, _toConsumableArray3.default)(list), [value]);
	      } else {
	        //不选中
	        newList = _underscore2.default.without(list, value);
	      }
	      this.setState((0, _defineProperty3.default)({}, name, newList));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'query_section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'query_row' },
	          _react2.default.createElement(
	            'span',
	            { className: 'query_title' },
	            '发布状态 | 生效状态'
	          ),
	          _react2.default.createElement('input', { id: 'c1', type: 'checkbox', name: 'stateDesc',
	            checked: _underscore2.default.contains(this.state.stateDesc, "1"),
	            onChange: this.handleCheckBoxChange.bind(this, 'stateDesc'),
	            value: '1' }),
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'c1', className: 'query_item' },
	            '未发布'
	          ),
	          _react2.default.createElement('input', { id: 'c2', type: 'checkbox', name: 'stateDesc',
	            checked: _underscore2.default.contains(this.state.stateDesc, "2"),
	            onChange: this.handleCheckBoxChange.bind(this, 'stateDesc'),
	            value: '2' }),
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'c2' },
	            '已发布'
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'marginLR5' },
	            '|'
	          ),
	          _react2.default.createElement('input', { id: 'c3', type: 'checkbox', name: 'stateDesc',
	            checked: _underscore2.default.contains(this.state.stateDesc, "3"),
	            onChange: this.handleCheckBoxChange.bind(this, 'stateDesc'),
	            value: '3' }),
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'c3' },
	            ' 未生效'
	          ),
	          _react2.default.createElement('input', { id: 'c4', type: 'checkbox', name: 'stateDesc',
	            checked: _underscore2.default.contains(this.state.stateDesc, "4"),
	            onChange: this.handleCheckBoxChange.bind(this, 'stateDesc'),
	            value: '4' }),
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'c4' },
	            '已生效'
	          ),
	          _react2.default.createElement('input', { id: 'c5', type: 'checkbox', name: 'stateDesc',
	            checked: _underscore2.default.contains(this.state.stateDesc, "5"),
	            onChange: this.handleCheckBoxChange.bind(this, 'stateDesc'),
	            value: '5' }),
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'c5' },
	            '已过期'
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'marginL10 marginR5' },
	            '品牌集名称'
	          ),
	          _react2.default.createElement('input', { type: 'text', className: 'common_input',
	            onChange: this.handleInputChange.bind(this, "brandName"),
	            style: { "width": "120px" } }),
	          _react2.default.createElement(
	            'span',
	            { className: 'marginL10 marginR5' },
	            '品牌集名称'
	          ),
	          _react2.default.createElement('input', { type: 'text', className: 'common_input',
	            onChange: this.handleInputChange.bind(this, "brandGroupName"),
	            style: { "width": "120px" } }),
	          _react2.default.createElement(
	            'span',
	            { className: 'pull-right marginR15' },
	            _react2.default.createElement(
	              'button',
	              { type: 'button',
	                onClick: this.handleQueryBrand.bind(this),
	                className: 'btn btn-sm btn-primary' },
	              '查询'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'query_row' },
	          _react2.default.createElement(
	            'span',
	            { className: 'marginL10 marginR5' },
	            '城市对'
	          ),
	          _react2.default.createElement('input', { type: 'text', className: 'common_input',
	            onChange: this.handleInputChange.bind(this, "startCity"),
	            style: { "width": "60px" } }),
	          _react2.default.createElement(
	            'span',
	            { style: { "margin": "0 2px" } },
	            '-'
	          ),
	          _react2.default.createElement('input', { type: 'text', className: 'common_input',
	            onChange: this.handleInputChange.bind(this, "endCity"),
	            style: { "width": "60px" } }),
	          _react2.default.createElement(
	            'span',
	            { className: 'marginL10 marginR5' },
	            '发布对象'
	          ),
	          _react2.default.createElement('input', { type: 'text', className: 'common_input',
	            onChange: this.handleInputChange.bind(this, "pubObj"),
	            style: { "width": "120px" }, placeholder: 'office号/IATA号' }),
	          _react2.default.createElement(
	            'span',
	            { className: 'marginL10 marginR5' },
	            '销售日期'
	          ),
	          _react2.default.createElement('input', { type: 'text', className: 'common_input',
	            onChange: this.handleInputChange.bind(this, "startDate"),
	            style: { "width": "100px" }, placeholder: '范围' }),
	          _react2.default.createElement(
	            'span',
	            { style: { "margin": "0 2px" } },
	            '-'
	          ),
	          _react2.default.createElement('input', { type: 'text', className: 'common_input',
	            onChange: this.handleInputChange.bind(this, "endDate"),
	            style: { "width": "100px" }, placeholder: '范围' })
	        )
	      );
	    }
	  }]);
	  return QuerySection;
	}(_react.Component);

	exports.default = QuerySection;

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ADD_BRANDG = exports.ADD_BRANDGROUP = exports.CLEAR_SELECTBRANDGROUPID = exports.ADD_SELECTBRANDGROUPID = exports.DELETE_BRANDGROUP = exports.DELETE_BRAND = exports.QUERY_BRANDGROUPS = undefined;
	exports.queryBrandGroups = queryBrandGroups;
	exports.deleteBrand = deleteBrand;
	exports.deleteBrandGroup = deleteBrandGroup;
	exports.addBrandGroup = addBrandGroup;
	exports.addBrand = addBrand;
	exports.addSelectBrandGroupId = addSelectBrandGroupId;
	exports.clearSelectBrandGroupId = clearSelectBrandGroupId;

	var _api = __webpack_require__(322);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QUERY_BRANDGROUPS = exports.QUERY_BRANDGROUPS = 'QUERY_BRANDGROUPS';
	var DELETE_BRAND = exports.DELETE_BRAND = 'DELETE_BRAND';
	var DELETE_BRANDGROUP = exports.DELETE_BRANDGROUP = 'DELETE_BRANDGROUP';
	var ADD_SELECTBRANDGROUPID = exports.ADD_SELECTBRANDGROUPID = 'ADD_SELECTBRANDGROUPID'; //selectBrandGroup
	var CLEAR_SELECTBRANDGROUPID = exports.CLEAR_SELECTBRANDGROUPID = 'CLEAR_SELECTBRANDGROUPID';
	var ADD_BRANDGROUP = exports.ADD_BRANDGROUP = "ADD_BRANDGROUP";
	var ADD_BRANDG = exports.ADD_BRANDG = "ADD_BRANDG";

	function queryBrandGroups(param) {
	  //console.info('query brandgroup param is ',JSON.stringify(param)) ;
	  var list = new _api2.default().queryBrandGroup(param);
	  return { type: QUERY_BRANDGROUPS, brandGroups: list };
	}
	function deleteBrand(param) {
	  return { type: DELETE_BRAND, param: param };
	}
	function deleteBrandGroup(param) {
	  return { type: DELETE_BRANDGROUP, param: param };
	}
	//新加品牌集
	function addBrandGroup(param) {
	  return { type: ADD_BRANDGROUP, param: param };
	}
	function addBrand(param) {
	  return { type: ADD_BRANDG, param: param };
	}
	function addSelectBrandGroupId(param) {
	  return { type: ADD_SELECTBRANDGROUPID, param: param };
	}
	function clearSelectBrandGroupId() {
	  return { type: CLEAR_SELECTBRANDGROUPID };
	}

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(199);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(200);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _jsonData = __webpack_require__(323);

	var _jsonData2 = _interopRequireDefault(_jsonData);

	var _lodash = __webpack_require__(315);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API = function () {
	  function API() {
	    (0, _classCallCheck3.default)(this, API);
	  }

	  (0, _createClass3.default)(API, [{
	    key: 'queryBrandGroup',
	    value: function queryBrandGroup(params) {
	      return _lodash2.default.cloneDeep(_jsonData2.default.listBrandGroup);
	    }
	  }]);
	  return API;
	}();

	exports.default = API;

/***/ },

/***/ 323:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  listBrandGroup: [{
	    id: '001', title: 'asgui_ca test', seqNum: '8776559', startCity: '1', endCity: '2',
	    startDate: '2016-06-30', endDate: '9999-12-31', travelStart: '2016-06-30',
	    travelEnd: '2016-06-30', pubObj: '001', stateDesc: '未发布', list: [{
	      id: "001",
	      name: 'xx001',
	      levelNum: '10011',
	      desc: '测试一下啊这里的描述信息'
	    }, {
	      id: "002",
	      name: 'xx002',
	      levelNum: '10013',
	      desc: '测试一下啊这里的描述信息'
	    }, {
	      id: "003",
	      name: 'xx003',
	      levelNum: '10013',
	      desc: '测试一下啊这里的描述信息'
	    }]
	  }, {
	    id: '002', title: 'asgui_ca test', seqNum: '8776559', startCity: '1', endCity: '2',
	    startDate: '2016-06-30', endDate: '9999-12-31', travelStart: '2016-06-30',
	    travelEnd: '2016-06-30', pubObj: '001', stateDesc: '未发布', list: [{
	      id: "003",
	      name: 'xx003',
	      levelNum: '10011',
	      desc: '测试一下啊这里的描述信息'
	    }, {
	      id: "004",
	      name: 'xx004',
	      levelNum: '10013',
	      desc: '测试一下啊这里的描述信息'
	    }, {
	      id: "005",
	      name: 'xx005',
	      levelNum: '10013',
	      desc: '测试一下啊这里的描述信息'
	    }]
	  }],
	  brandGroupModel: {
	    id: '', title: 'asgui_ca test', seqNum: '8776559', startCity: '1', endCity: '2',
	    startDate: '2016-06-30', endDate: '9999-12-31', travelStart: '2016-06-30',
	    travelEnd: '2016-06-30', pubObj: '001', stateDesc: '未发布', list: []
	  },
	  brandModel: {
	    id: "",
	    name: 'xx005',
	    levelNum: '10013',
	    desc: '测试一下啊这里的描述信息'
	  }
	};

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _OperNavBar = __webpack_require__(325);

	var _OperNavBar2 = _interopRequireDefault(_OperNavBar);

	var _reactRedux = __webpack_require__(262);

	var _actions = __webpack_require__(321);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    brandGroupIds: state.brandGroupIds
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    handleAddBrandGroup: function handleAddBrandGroup(param) {
	      dispatch((0, _actions.addBrandGroup)(param));
	    },
	    handleDeleteBrandGroup: function handleDeleteBrandGroup(param) {
	      //删除品牌集数据
	      dispatch((0, _actions.deleteBrandGroup)(param));
	      //删除选中的s5状态
	      dispatch((0, _actions.clearSelectBrandGroupId)());
	    }
	  };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_OperNavBar2.default);

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(173);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(199);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(200);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(204);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(251);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(315);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _uniquid = __webpack_require__(297);

	var _uniquid2 = _interopRequireDefault(_uniquid);

	var _jsonData = __webpack_require__(323);

	var _jsonData2 = _interopRequireDefault(_jsonData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var OperNavBar = function (_Component) {
	  (0, _inherits3.default)(OperNavBar, _Component);

	  function OperNavBar(props) {
	    (0, _classCallCheck3.default)(this, OperNavBar);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(OperNavBar).call(this, props));
	  }

	  (0, _createClass3.default)(OperNavBar, [{
	    key: 'handleAddBrandGroup',
	    value: function handleAddBrandGroup() {
	      var id = (0, _uniquid2.default)('group_');
	      var param = _lodash2.default.cloneDeep(_jsonData2.default.brandGroupModel);
	      _lodash2.default.assign(param, { id: id });
	      this.props.handleAddBrandGroup(param);
	    }
	  }, {
	    key: 'handleDeleteBrandGroup',
	    value: function handleDeleteBrandGroup() {
	      var param = this.props.brandGroupIds;
	      this.props.handleDeleteBrandGroup(param);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'pull-right clearfix', style: { "marginBottom": "8px" } },
	        _react2.default.createElement(
	          'button',
	          { type: 'button',
	            onClick: this.handleAddBrandGroup.bind(this),
	            className: 'btn btn-sm btn-success' },
	          '新建品牌集'
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: 'btn btn-info btn-sm' },
	          '发布'
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: 'btn btn-warning btn-sm' },
	          '截止'
	        ),
	        _react2.default.createElement(
	          'button',
	          {
	            onClick: this.handleDeleteBrandGroup.bind(this),
	            className: 'btn btn-danger btn-sm' },
	          '删除'
	        )
	      );
	    }
	  }]);
	  return OperNavBar;
	}(_react.Component);

	exports.default = OperNavBar;

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(173);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(199);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(200);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(204);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(251);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RecordS5Item = __webpack_require__(327);

	var _RecordS5Item2 = _interopRequireDefault(_RecordS5Item);

	var _RecordS7Item = __webpack_require__(329);

	var _RecordS7Item2 = _interopRequireDefault(_RecordS7Item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BrandGroupPanel = function (_Component) {
	  (0, _inherits3.default)(BrandGroupPanel, _Component);

	  function BrandGroupPanel(props) {
	    (0, _classCallCheck3.default)(this, BrandGroupPanel);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BrandGroupPanel).call(this, props));

	    _this.state = {
	      showS7Flag: false
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(BrandGroupPanel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.showS7Flag) {
	        this.setState({ showS7Flag: true });
	      }
	    }
	  }, {
	    key: 'handleChangeShowHide',
	    value: function handleChangeShowHide() {
	      this.setState({ showS7Flag: !this.state.showS7Flag });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var id = this.props.s5.id;

	      return _react2.default.createElement(
	        'div',
	        { className: 'panel panel-default brand_group' },
	        _react2.default.createElement(
	          'div',
	          { className: 'panel-heading' },
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-title' },
	            _react2.default.createElement(_RecordS5Item2.default, {
	              s5: this.props.s5,
	              checkFlag: this.props.checkFlag,
	              handleSelectS5: this.props.handleSelectS5,
	              handleChangeShowHide: this.handleChangeShowHide.bind(this)
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: this.state.showS7Flag ? "panel-body" : "panel-body hidden" },
	          _react2.default.createElement(
	            'ul',
	            null,
	            this.props.s5.list.map(function (item, index) {
	              return _react2.default.createElement(_RecordS7Item2.default, {
	                s7: item,
	                key: item.id,
	                index: index + 1,
	                s5Id: id
	              });
	            })
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: function defaultProps() {
	      return {
	        showS7Flag: false
	      };
	    }
	  }]);
	  return BrandGroupPanel;
	}(_react.Component);

	exports.default = BrandGroupPanel;

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _RecordS5Item = __webpack_require__(328);

	var _RecordS5Item2 = _interopRequireDefault(_RecordS5Item);

	var _reactRedux = __webpack_require__(262);

	var _actions = __webpack_require__(321);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {};
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    addBrand: function addBrand(param) {
	      dispatch((0, _actions.addBrand)(param));
	    },
	    addSelectBrandGroupId: function addSelectBrandGroupId(param) {
	      dispatch((0, _actions.addSelectBrandGroupId)(param));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_RecordS5Item2.default);

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(173);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(199);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(200);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(204);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(251);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _uniquid = __webpack_require__(297);

	var _uniquid2 = _interopRequireDefault(_uniquid);

	var _jsonData = __webpack_require__(323);

	var _jsonData2 = _interopRequireDefault(_jsonData);

	var _lodash = __webpack_require__(315);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RecordS5Item = function (_Component) {
	  (0, _inherits3.default)(RecordS5Item, _Component);

	  function RecordS5Item(props) {
	    (0, _classCallCheck3.default)(this, RecordS5Item);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RecordS5Item).call(this, props));
	  }

	  (0, _createClass3.default)(RecordS5Item, [{
	    key: 'handleNewBrand',
	    value: function handleNewBrand() {
	      var groupId = this.props.s5.id;
	      var id = (0, _uniquid2.default)('brand_');
	      var brandObj = _lodash2.default.cloneDeep(_jsonData2.default.brandModel);
	      _lodash2.default.assign(brandObj, { id: id });
	      var param = { groupId: groupId, brandObj: brandObj };
	      this.props.addBrand(param);
	    }
	  }, {
	    key: 'handleSelectS5',
	    value: function handleSelectS5(event) {
	      event.stopPropagation();
	      var groupId = this.props.s5.id;
	      var selectFlag = event.target.checked;
	      this.props.addSelectBrandGroupId({ groupId: groupId, selectFlag: selectFlag });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$s = this.props.s5;
	      var id = _props$s.id;
	      var title = _props$s.title;
	      var seqNum = _props$s.seqNum;
	      var startCity = _props$s.startCity;
	      var endCity = _props$s.endCity;
	      var startDate = _props$s.startDate;
	      var endDate = _props$s.endDate;
	      var travelStart = _props$s.travelStart;
	      var travelEnd = _props$s.travelEnd;
	      var pubObj = _props$s.pubObj;
	      var stateDesc = _props$s.stateDesc;

	      return _react2.default.createElement(
	        'div',
	        { className: 'brand_title' },
	        _react2.default.createElement(
	          'span',
	          { className: 'left text-info', onClick: this.props.handleChangeShowHide },
	          _react2.default.createElement('input', { name: 'checkAll', type: 'checkbox',
	            onClick: this.handleSelectS5.bind(this),
	            checked: this.props.checkFlag,
	            value: id }),
	          _react2.default.createElement('i', { className: 'glyphicon glyphicon-upload marginL10', 'data-name': 'showHideBody' }),
	          title,
	          _react2.default.createElement('i', { className: 'glyphicon glyphicon-info-sign pull-right descrImg', 'data-toggle': 'tooltip',
	            'data-placement': 'top', title: '描述信息为空' })
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'right' },
	          _react2.default.createElement('i', { className: 'glyphicon glyphicon-pencil marginR10 myhand' }),
	          _react2.default.createElement(
	            'button',
	            { type: 'button', className: 'btn btn-success btn-sm',
	              onClick: this.handleNewBrand.bind(this) },
	            '新建品牌'
	          )
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'center' },
	          _react2.default.createElement(
	            'span',
	            null,
	            '序列号：',
	            seqNum
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'marginL10' },
	            '城市对：',
	            _react2.default.createElement(
	              'span',
	              { className: 'bold' },
	              startCity,
	              ' → ',
	              endCity
	            )
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'marginL10' },
	            '生效日期对：',
	            _react2.default.createElement(
	              'span',
	              { className: 'bold' },
	              startDate,
	              ' — ',
	              endDate
	            )
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'marginL10' },
	            '旅行日期对：',
	            _react2.default.createElement(
	              'span',
	              { className: 'bold' },
	              travelStart,
	              ' — ',
	              travelEnd
	            )
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'marginL10' },
	            '发布对象：',
	            pubObj,
	            ' 状态：',
	            _react2.default.createElement(
	              'span',
	              { className: 'text-danger' },
	              stateDesc
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return RecordS5Item;
	}(_react.Component);

	exports.default = RecordS5Item;

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _RecordS7Item = __webpack_require__(330);

	var _RecordS7Item2 = _interopRequireDefault(_RecordS7Item);

	var _reactRedux = __webpack_require__(262);

	var _actions = __webpack_require__(321);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {};
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    deleteBrand: function deleteBrand(param) {
	      dispatch((0, _actions.deleteBrand)(param));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_RecordS7Item2.default);

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(173);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(199);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(200);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(204);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(251);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RecordS7Item = function (_Component) {
	  (0, _inherits3.default)(RecordS7Item, _Component);

	  function RecordS7Item(props) {
	    (0, _classCallCheck3.default)(this, RecordS7Item);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RecordS7Item).call(this, props));
	  }

	  (0, _createClass3.default)(RecordS7Item, [{
	    key: 'handleEditBrand',
	    value: function handleEditBrand() {
	      var id = this.props.s7.id;
	      var s5Id = this.props.s5Id;
	      console.info('修改的s7 的id : ' + id, " s5Id : " + s5Id);
	    }
	  }, {
	    key: 'handleDeleteBrand',
	    value: function handleDeleteBrand() {
	      var id = this.props.s7.id;
	      var groupId = this.props.s5Id;
	      this.props.deleteBrand({ groupId: groupId, id: id });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$s = this.props.s7;
	      var id = _props$s.id;
	      var name = _props$s.name;
	      var levelNum = _props$s.levelNum;
	      var desc = _props$s.desc;

	      var index = this.props.index;
	      return _react2.default.createElement(
	        'li',
	        { className: 'brand_list' },
	        _react2.default.createElement(
	          'div',
	          { className: 'brand_list_item item1' },
	          index
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'brand_list_item' },
	          _react2.default.createElement('span', { className: 'brand_img brand_img_ca' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'brand_list_item' },
	          _react2.default.createElement(
	            'p',
	            { className: 'brand_name' },
	            name
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '层级序号：',
	            levelNum
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            desc
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'brand_list_item pull-right' },
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement('i', { className: 'glyphicon glyphicon-search myhand' })
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement('i', { className: 'glyphicon glyphicon-pencil myhand', onClick: this.handleEditBrand.bind(this) })
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement('i', { className: 'glyphicon glyphicon-trash myhand',
	              onClick: this.handleDeleteBrand.bind(this) })
	          )
	        )
	      );
	    }
	  }]);
	  return RecordS7Item;
	}(_react.Component);

	exports.default = RecordS7Item;

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _redux = __webpack_require__(269);

	var _brandGroups = __webpack_require__(332);

	var _brandGroups2 = _interopRequireDefault(_brandGroups);

	var _brandGroupIds = __webpack_require__(333);

	var _brandGroupIds2 = _interopRequireDefault(_brandGroupIds);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducer = (0, _redux.combineReducers)({
		brandGroups: _brandGroups2.default,
		brandGroupIds: _brandGroupIds2.default
	});
	var store = (0, _redux.createStore)(reducer);
	exports.default = store;
	//export default createStore(reducer) ;

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(301);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	exports.default = brandGroups;

	var _actions = __webpack_require__(321);

	var _underscore = __webpack_require__(298);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function brandGroups() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.QUERY_BRANDGROUPS:
	      return action.brandGroups;
	    case _actions.DELETE_BRAND:
	      return state.map(function (item) {
	        if (item.id === action.param.groupId) {
	          var list2 = item.list.filter(function (item) {
	            if (item.id !== action.param.id) {
	              return true;
	            }
	          });
	          item.list = list2;
	        }
	        return item;
	      });
	    case _actions.DELETE_BRANDGROUP:
	      return state.filter(function (item) {
	        if (_underscore2.default.contains(action.param, item.id)) {
	          return false;
	        }
	        return true;
	      });
	    case _actions.ADD_BRANDGROUP:
	      return [].concat((0, _toConsumableArray3.default)(state), [action.param]);
	    case _actions.ADD_BRANDG:
	      return state.map(function (item) {
	        if (item.id === action.param.groupId) {
	          item.list = [].concat((0, _toConsumableArray3.default)(item.list), [action.param.brandObj]);
	        }
	        return item;
	      });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(301);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	exports.default = brandGroups;

	var _actions = __webpack_require__(321);

	var _underscore = __webpack_require__(298);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function brandGroups() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.ADD_SELECTBRANDGROUPID:
	      if (action.param.selectFlag) {
	        return [].concat((0, _toConsumableArray3.default)(state), [action.param.groupId]);
	      } else {
	        return _underscore2.default.without(state, action.param.groupId);
	      }
	    case _actions.CLEAR_SELECTBRANDGROUPID:
	      return [];
	    default:
	      return state;
	  }
	}

/***/ }

});