/*!
 * {compony travelsky-dbky ,
 *  author: yicj,
 *  email : 626659321@qq.com,
 * create-date:2016/05/05}
 */
webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _AppLayout = __webpack_require__(172);

	var _AppLayout2 = _interopRequireDefault(_AppLayout);

	var _store = __webpack_require__(299);

	var _store2 = _interopRequireDefault(_store);

	var _reactRedux = __webpack_require__(262);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: _store2.default },
		_react2.default.createElement(_AppLayout2.default, null)
	), document.getElementById('app'));

/***/ },

/***/ 172:
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

	var _QuerySection = __webpack_require__(260);

	var _QuerySection2 = _interopRequireDefault(_QuerySection);

	var _EditForm = __webpack_require__(291);

	var _EditForm2 = _interopRequireDefault(_EditForm);

	var _underscore = __webpack_require__(298);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppLayout = function (_Component) {
	  (0, _inherits3.default)(AppLayout, _Component);

	  function AppLayout(props) {
	    (0, _classCallCheck3.default)(this, AppLayout);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AppLayout).call(this, props));
	  }

	  (0, _createClass3.default)(AppLayout, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'app' },
	        _react2.default.createElement(
	          'div',
	          { className: 'navbar-fixed-top' },
	          _react2.default.createElement(_HeaderNav2.default, { curNavItem: '2' }),
	          _react2.default.createElement(_QuerySection2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid main_content', id: 'main_content' },
	          _react2.default.createElement(_EditForm2.default, null)
	        )
	      );
	    }
	  }]);
	  return AppLayout;
	}(_react.Component);

	exports.default = AppLayout;

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(261);

	var _reactRedux = __webpack_require__(262);

	var _QuerySection = __webpack_require__(288);

	var _QuerySection2 = _interopRequireDefault(_QuerySection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapState2Props = function mapState2Props(state, ownProp) {
	  return {
	    formData: state.brandGroup
	  };
	};

	var mapDispatch2Props = function mapDispatch2Props(dispatch, ownProp) {
	  return {
	    submitForm: function submitForm(param) {
	      return dispatch((0, _actions.submitForm)(param));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapState2Props, mapDispatch2Props)(_QuerySection2.default);

/***/ },

/***/ 261:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleInputChange = handleInputChange;
	exports.handleListInputChange = handleListInputChange;
	exports.addBrandGroup = addBrandGroup;
	exports.handleClickTr = handleClickTr;
	exports.addTableLine = addTableLine;
	exports.deleteTableLine = deleteTableLine;
	exports.submitForm = submitForm;
	var ADD_BRANDGROUP = exports.ADD_BRANDGROUP = 'ADD_BRANDGROUP';
	var HANDLE_INPUTCHANGE = exports.HANDLE_INPUTCHANGE = 'HANDLE_INPUTCHANGE'; // handleInputChange
	var HANDLE_LISTINPUTCHANGE = exports.HANDLE_LISTINPUTCHANGE = 'HANDLE_LISTINPUTCHANGE'; //handleListInputChange
	var HANDLE_CLICKTR = exports.HANDLE_CLICKTR = 'HANDLE_CLICKTR';
	var ADD_TABLELINE = exports.ADD_TABLELINE = 'ADD_TABLELINE'; //addTableLine
	var DELETE_TABLELINE = exports.DELETE_TABLELINE = 'DELETE_TABLELINE';
	var SUBMIT_FORM = exports.SUBMIT_FORM = 'SUBMIT_FORM';

	function handleInputChange(param) {
	  return { type: HANDLE_INPUTCHANGE, param: param };
	}

	function handleListInputChange(param) {
	  return { type: HANDLE_LISTINPUTCHANGE, param: param };
	}

	function addBrandGroup(param) {
	  return { type: ADD_BRANDGROUP, param: param };
	}

	function handleClickTr(param) {
	  return { type: HANDLE_CLICKTR, param: param };
	}

	function addTableLine(param) {
	  return { type: ADD_TABLELINE, param: param };
	}

	function deleteTableLine(param) {
	  return { type: DELETE_TABLELINE, listName: param };
	}

	function submitForm(flag) {
	  return { type: SUBMIT_FORM, flag: flag };
	}

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(289);

	var _stringify2 = _interopRequireDefault(_stringify);

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

	var QuerySection = function (_Component) {
	  (0, _inherits3.default)(QuerySection, _Component);

	  function QuerySection(props) {
	    (0, _classCallCheck3.default)(this, QuerySection);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(QuerySection).call(this, props));
	  }

	  (0, _createClass3.default)(QuerySection, [{
	    key: 'handleSaveBrandgroup',
	    value: function handleSaveBrandgroup() {
	      var flag = true;
	      var formData = this.props.formData;
	      var seqNum = formData.seqNum;
	      if (seqNum !== '123') {
	        flag = false;
	      }
	      console.info((0, _stringify2.default)(formData));
	      this.props.submitForm(flag);
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
	            '新建品牌集'
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'marginLR5' },
	            '品牌集'
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'pull-right marginR15' },
	            _react2.default.createElement(
	              'button',
	              { type: 'button', className: 'btn btn-sm btn-default' },
	              '返回'
	            ),
	            _react2.default.createElement(
	              'button',
	              { type: 'button', className: 'btn btn-sm btn-success', onClick: this.handleSaveBrandgroup.bind(this) },
	              '保存'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return QuerySection;
	}(_react.Component);

	exports.default = QuerySection;

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(290), __esModule: true };

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(186)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _EditForm = __webpack_require__(292);

	var _EditForm2 = _interopRequireDefault(_EditForm);

	var _reactRedux = __webpack_require__(262);

	var _actions = __webpack_require__(261);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapState2Props = function mapState2Props(state, ownProp) {
	  return {
	    formData: state.brandGroup
	  };
	};
	var mapDispatch2Props = function mapDispatch2Props(dispatch, ownProp) {
	  return {
	    handleInputChange: function handleInputChange(param) {
	      return dispatch((0, _actions.handleInputChange)(param));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapState2Props, mapDispatch2Props)(_EditForm2.default);

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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

	var _TablePublish = __webpack_require__(294);

	var _TablePublish2 = _interopRequireDefault(_TablePublish);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EditForm = function (_Component) {
	    (0, _inherits3.default)(EditForm, _Component);

	    function EditForm(props) {
	        (0, _classCallCheck3.default)(this, EditForm);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(EditForm).call(this, props));
	    }

	    (0, _createClass3.default)(EditForm, [{
	        key: 'handleInputChange',
	        value: function handleInputChange(event) {
	            var target = event.target;
	            var value = target.value;
	            var name = target.name;
	            //console.info('xxxxxxxx ' + name +" , " + value) ;
	            this.props.handleInputChange({ name: name, value: value });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _React$createElement;

	            return _react2.default.createElement(
	                'form',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'data_section ' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'title_layout' },
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'left' },
	                            '品牌集'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'content_layout' },
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'left text-danger' },
	                            '必填项'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'right' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { className: 'pure-u-1-8 control-label' },
	                                    '序列号'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-4' },
	                                    _react2.default.createElement('input', { type: 'text', name: 'seqNum', className: 'form-control',
	                                        value: this.props.formData.seqNum,
	                                        onChange: this.handleInputChange.bind(this),
	                                        placeholder: '数字' })
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'errorInfo_validate' },
	                                    '这里是错误提示信息'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { className: 'pure-u-1-8 control-label' },
	                                    '品牌集名称'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-4' },
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control',
	                                        name: 'title',
	                                        value: this.props.formData.title,
	                                        onChange: this.handleInputChange.bind(this),
	                                        placeholder: '数字' })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { className: 'pure-u-1-8 control-label' },
	                                    '销售日期'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-8' },
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control',
	                                        name: 'startDate',
	                                        value: this.props.formData.startDate,
	                                        onChange: this.handleInputChange.bind(this),
	                                        placeholder: '范围' })
	                                ),
	                                _react2.default.createElement('label', { htmlFor: 'id2', className: 'glyphicon glyphicon-th iconfont_box' }),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-8' },
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control',
	                                        name: 'endDate',
	                                        value: this.props.formData.endDate,
	                                        onChange: this.handleInputChange.bind(this),
	                                        placeholder: '范围' })
	                                ),
	                                _react2.default.createElement('label', { htmlFor: 'id2', className: 'glyphicon glyphicon-th iconfont_box' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { className: 'pure-u-1-8 control-label' },
	                                    '区域1'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-8' },
	                                    _react2.default.createElement(
	                                        'select',
	                                        (_React$createElement = { name: 'loc1' }, (0, _defineProperty3.default)(_React$createElement, 'name', 'loc1'), (0, _defineProperty3.default)(_React$createElement, 'className', 'form-control'), (0, _defineProperty3.default)(_React$createElement, 'value', this.props.formData.loc1), (0, _defineProperty3.default)(_React$createElement, 'onChange', this.handleInputChange.bind(this)), _React$createElement),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: '' },
	                                            '选择'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'A' },
	                                            'A-大区'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'C' },
	                                            'C-城市'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'N' },
	                                            'N-国家'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'P' },
	                                            'P-机场'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'S' },
	                                            'S-州'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'Z' },
	                                            'Z-区域'
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-8' },
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control',
	                                        name: 'startCity',
	                                        onChange: this.handleInputChange.bind(this),
	                                        value: this.props.formData.startCity,
	                                        placeholder: '范围' })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { className: 'pure-u-1-8 control-label' },
	                                    '区域2'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-8' },
	                                    _react2.default.createElement(
	                                        'select',
	                                        { name: 'loc2',
	                                            className: 'form-control',
	                                            value: this.props.formData.loc2,
	                                            onChange: this.handleInputChange.bind(this) },
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: '' },
	                                            '选择'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'A' },
	                                            'A-大区'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'C' },
	                                            'C-城市'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'N' },
	                                            'N-国家'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'P' },
	                                            'P-机场'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'S' },
	                                            'S-州'
	                                        ),
	                                        _react2.default.createElement(
	                                            'option',
	                                            { value: 'Z' },
	                                            'Z-区域'
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-8' },
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control',
	                                        name: 'endCity',
	                                        onChange: this.handleInputChange.bind(this),
	                                        value: this.props.formData.endCity,
	                                        placeholder: '范围' })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { className: 'pure-u-1-8 control-label' },
	                                    '区域限制'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-2' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'radio-inline' },
	                                        _react2.default.createElement('input', { type: 'radio', name: 'locDefine', id: 'r1',
	                                            value: '1',
	                                            onChange: this.handleInputChange.bind(this),
	                                            checked: this.props.formData.locDefine == '1' }),
	                                        _react2.default.createElement(
	                                            'label',
	                                            { htmlFor: 'r1', className: 'myhand' },
	                                            '区域1→区域2'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'radio-inline' },
	                                        _react2.default.createElement('input', { type: 'radio', name: 'locDefine', id: 'r2',
	                                            checked: this.props.formData.locDefine == '2',
	                                            onChange: this.handleInputChange.bind(this),
	                                            value: '2' }),
	                                        _react2.default.createElement(
	                                            'label',
	                                            { htmlFor: 'r2', className: 'myhand' },
	                                            '区域2→区域1'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'radio-inline' },
	                                        _react2.default.createElement('input', { type: 'radio', name: 'locDefine', id: 'r3',
	                                            checked: this.props.formData.locDefine == '3',
	                                            onChange: this.handleInputChange.bind(this),
	                                            value: '3' }),
	                                        _react2.default.createElement(
	                                            'label',
	                                            { htmlFor: 'r3', className: 'myhand' },
	                                            '双向'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'content_layout' },
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'left' },
	                            '选填项'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'right' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { className: 'pure-u-1-8 control-label' },
	                                    '旅行日期'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-8' },
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control',
	                                        name: 'travelStart',
	                                        value: this.props.formData.travelStart,
	                                        onChange: this.handleInputChange.bind(this),
	                                        placeholder: '范围' })
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-8' },
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control',
	                                        name: 'travelEnd',
	                                        value: this.props.formData.travelEnd,
	                                        onChange: this.handleInputChange.bind(this),
	                                        placeholder: '范围' })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { className: 'pure-u-1-8 control-label' },
	                                    '发布'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-2' },
	                                    _react2.default.createElement(_TablePublish2.default, null)
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { className: 'pure-u-1-8 control-label' },
	                                    '描述'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'pure-u-1-3' },
	                                    _react2.default.createElement('textarea', { className: 'form-control',
	                                        name: 'desc',
	                                        value: this.props.formData.desc,
	                                        onChange: this.handleInputChange.bind(this),
	                                        rows: '3' })
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return EditForm;
	}(_react.Component);

	exports.default = EditForm;

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TablePublish = __webpack_require__(295);

	var _TablePublish2 = _interopRequireDefault(_TablePublish);

	var _reactRedux = __webpack_require__(262);

	var _actions = __webpack_require__(261);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapState2Props = function mapState2Props(state, ownProp) {
	  return {
	    list: state.brandGroup.listPubObjVo
	  };
	};

	var mapDispatch2Props = function mapDispatch2Props(dispatch, ownProp) {
	  return {
	    handleListInputChange: function handleListInputChange(param) {
	      dispatch((0, _actions.handleListInputChange)(param));
	    },
	    handleClickTr: function handleClickTr(param) {
	      dispatch((0, _actions.handleClickTr)(param));
	    },
	    addTableLine: function addTableLine(param) {
	      dispatch((0, _actions.addTableLine)(param));
	    },
	    deleteTableLine: function deleteTableLine(param) {
	      dispatch((0, _actions.deleteTableLine)(param));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapState2Props, mapDispatch2Props)(_TablePublish2.default);

/***/ },

/***/ 295:
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

	var _TableFooter = __webpack_require__(296);

	var _TableFooter2 = _interopRequireDefault(_TableFooter);

	var _uniquid = __webpack_require__(297);

	var _uniquid2 = _interopRequireDefault(_uniquid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TablePublish = function (_Component) {
	  (0, _inherits3.default)(TablePublish, _Component);

	  function TablePublish(props) {
	    (0, _classCallCheck3.default)(this, TablePublish);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TablePublish).call(this, props));
	  }

	  (0, _createClass3.default)(TablePublish, [{
	    key: 'handleInputChange',
	    value: function handleInputChange(id, name, event) {
	      var target = event.target;
	      var value = target.value;
	      var listName = "listPubObjVo";
	      var obj = { listName: listName, id: id, name: name, value: value };
	      this.props.handleListInputChange(obj);
	    }
	  }, {
	    key: 'addTableLine',
	    value: function addTableLine() {
	      var listName = "listPubObjVo";
	      var id = (0, _uniquid2.default)('pubObj_');
	      var type = "";
	      var code = "";
	      var addObj = { id: id, type: type, code: code };
	      var param = { listName: listName, addObj: addObj };
	      this.props.addTableLine(param);
	    }
	  }, {
	    key: 'deleteTableLine',
	    value: function deleteTableLine() {
	      var listName = "listPubObjVo";
	      this.props.deleteTableLine(listName);
	    }
	  }, {
	    key: 'handleClickTr',
	    value: function handleClickTr(id) {
	      var listName = "listPubObjVo";
	      this.props.handleClickTr({ listName: listName, id: id });
	    }
	  }, {
	    key: 'renderTr',
	    value: function renderTr(item) {
	      var id = item.id;
	      return _react2.default.createElement(
	        'tr',
	        { key: id, onClick: this.handleClickTr.bind(this, id), className: item.checked ? "selected_td" : "" },
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'select',
	            { className: 'common_input',
	              style: { "width": "98%" },
	              onChange: this.handleInputChange.bind(this, id, 'type'),
	              value: item.type },
	            _react2.default.createElement(
	              'option',
	              { value: '' },
	              '选择'
	            ),
	            _react2.default.createElement(
	              'option',
	              { value: 'T' },
	              'Travel Agency code'
	            ),
	            _react2.default.createElement(
	              'option',
	              { value: 'I' },
	              'IATA number'
	            ),
	            _react2.default.createElement(
	              'option',
	              { value: 'V' },
	              'Department Code'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement('input', { type: 'text', className: 'common_input',
	            value: item.code,
	            onChange: this.handleInputChange.bind(this, id, 'code'),
	            style: { "width": "98%" } })
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var list = this.props.list;
	      return _react2.default.createElement(
	        'div',
	        { className: 'table_layout', style: { "width": "360px" } },
	        _react2.default.createElement(
	          'table',
	          null,
	          _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement(
	                'th',
	                { width: '130' },
	                '发布类型'
	              ),
	              _react2.default.createElement(
	                'th',
	                { width: '130' },
	                '发布对象'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'tbody',
	            null,
	            list.map(function (item, index) {
	              return _this2.renderTr(item, index);
	            })
	          )
	        ),
	        _react2.default.createElement(_TableFooter2.default, {
	          addTableLine: this.addTableLine.bind(this),
	          deleteTableLine: this.deleteTableLine.bind(this)
	        })
	      );
	    }
	  }]);
	  return TablePublish;
	}(_react.Component);

	exports.default = TablePublish;

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

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

	var TableFooter = function (_Component) {
	  (0, _inherits3.default)(TableFooter, _Component);

	  function TableFooter(props) {
	    (0, _classCallCheck3.default)(this, TableFooter);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TableFooter).call(this, props));
	  }

	  (0, _createClass3.default)(TableFooter, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "table_footer" },
	        _react2.default.createElement(
	          "button",
	          { type: "button",
	            onClick: this.props.addTableLine.bind(this),
	            className: "btn btn-success btn-sm" },
	          "增加一行"
	        ),
	        _react2.default.createElement(
	          "button",
	          { type: "button",
	            onClick: this.props.deleteTableLine.bind(this),
	            className: "btn btn-default btn-sm" },
	          "删除一行"
	        )
	      );
	    }
	  }]);
	  return TableFooter;
	}(_react.Component);

	exports.default = TableFooter;

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _redux = __webpack_require__(269);

	var _brandGroup = __webpack_require__(300);

	var _brandGroup2 = _interopRequireDefault(_brandGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducer = (0, _redux.combineReducers)({
		brandGroup: _brandGroup2.default
	});
	var store = (0, _redux.createStore)(reducer);
	exports.default = store;

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(301);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _defineProperty2 = __webpack_require__(293);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assign = __webpack_require__(311);

	var _assign2 = _interopRequireDefault(_assign);

	exports.default = brandGroup;

	var _actions = __webpack_require__(261);

	var _lodash = __webpack_require__(315);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initState = {
	  seqNum: "123",
	  title: "",
	  startDate: "",
	  endDate: "",
	  loc1: "",
	  startCity: "",
	  loc2: "",
	  endCity: "",
	  travelStart: "",
	  travelEnd: "",
	  desc: "",
	  locDefine: "1",
	  listPubObjVo: [{ id: '001', type: 'I', code: 'testcode', checked: true }]
	};

	function brandGroup() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.HANDLE_INPUTCHANGE:
	      //return _.assign(state,tmpObj);
	      return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, action.param.name, action.param.value));
	    case _actions.HANDLE_LISTINPUTCHANGE:
	      var list1 = state[action.param.listName].map(function (item) {
	        if (item.id === action.param.id) {
	          item[action.param.name] = action.param.value;
	        }
	        return item;
	      });
	      return _lodash2.default.assign({}, state, (0, _defineProperty3.default)({}, action.param.listName, list1));
	    case _actions.HANDLE_CLICKTR:
	      var list2 = state[action.param.listName].map(function (item) {
	        if (item.id == action.param.id) {
	          item.checked = true;
	        } else {
	          item.checked = false;
	        }
	        return item;
	      });
	      return _lodash2.default.assign({}, state, (0, _defineProperty3.default)({}, action.param.listName, list2));
	    case _actions.ADD_TABLELINE:
	      var list3 = [].concat((0, _toConsumableArray3.default)(state[action.param.listName]), [action.param.addObj]);
	      return _lodash2.default.assign({}, state, (0, _defineProperty3.default)({}, action.param.listName, list3));
	    case _actions.DELETE_TABLELINE:
	      var list4 = state[action.listName];
	      var obj = null;
	      var evens = _lodash2.default.filter(list4, function (item) {
	        return item.checked !== true;
	      });
	      if (evens.length == list4.length) {
	        obj = (0, _defineProperty3.default)({}, action.listName, list4.slice(0, listVo.length - 1));
	      } else {
	        obj = (0, _defineProperty3.default)({}, action.listName, evens);
	      }
	      return _lodash2.default.assign({}, state, obj);
	    case _actions.SUBMIT_FORM:
	      if (action.flag) {
	        return initState;
	      }
	      return state;
	    case _actions.ADD_BRANDGROUP:
	      return {};
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(312), __esModule: true };

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(313);
	module.exports = __webpack_require__(186).Object.assign;

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(185);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(314)});

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(218)
	  , gOPS     = __webpack_require__(242)
	  , pIE      = __webpack_require__(243)
	  , toObject = __webpack_require__(176)
	  , IObject  = __webpack_require__(221)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(195)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }

});