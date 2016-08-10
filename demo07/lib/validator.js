
// example rules
// let rules = {
//   username: {
//     required: true,
//     maxLength: 10,
//     username2:true,
//     message: {
//       required: 'username is required',
//       maxLength: 'username max length is 10',
//       username2:'username must is hello email'
//     }
//   },
//   password: {
//     required: true,
//     message: {
//       required: 'password is required'
//     }
//   },
//   confirm: {
//     required: true,
//     equal: 'password',
//     message: {
//       required: 'confirm password is required.',
//       equal: 'confirm password should be equal password'
//     }
//   },
//   email: {
//    required: true,
//     email: true,
//     message: {
//       required: 'email is required.',
//       email: 'email is invalid'
//     }
//   },
//   qq: {
//    required: true,
//     qq: true,
//     message: {
//       required: 'qq is required.',
//       qq: 'qq is invalid.'
//     }
//   }
// } ;
var _ = {
  log:function(){
    //console.log.apply(console, arguments);
  },
  keys:function(obj){
    obj = obj || {} ;
    return Object.keys(obj) ;
  },
  isArray:function(arr){
    return Object.prototype.toString.call(arr) === '[object Array]';
  }
} ;

/**
 * 封装我们的Validator对象
 * @param store 关联的store
 * @param rules 关联的规则
 * @param opts 可选的参数
 * @constructor
 */
function Validator(rules, opts) {
  if (!(this instanceof Validator)) return new Validator(rules, opts);
  //校验参数
  if (!rules) {
    throw new Error('rules can not empty!');
  }
  this.rules = rules;
  this.opts = opts || {};
  this.fieldErrors = {};
  /**
   * 最小化暴露方法
   */
  return {
    isValid: this.isValid.bind(this),
    rule: this.rule.bind(this),
    clearError: this.clearError.bind(this),
    fieldErrors: function () {
      return this.fieldErrors;
    }.bind(this)
  };
}
/**
 * 添加自定义的规则
 * @param name 规则名称
 * @param callback 规则函数
 */
Validator.prototype.rule = function (name, callback) {
  this[name] = callback;
};
/**
 * 清空错误信息
 * @path 要清空的错误信息路径,不传默认清空所有
 */
Validator.prototype.clearError = function(path) {
  if (path) {
    // 获取path对应的值
    //var pathArr = path.split("\.");
    // 根据传入的path清空错误信息
    this.fieldErrors[path] = '' ;
  } else {
    // 如果没有传path默认清空所有的错误
    this.fieldErrors = {};
  }
};
/**
 * 判断校验是不是通过
 * @param path
 */
Validator.prototype.isValid = function (formData,path) {
  var success = true;
  var _this = this;
  var rules = this.rules;
  var opts = this.opts;
  var oneError = opts['oneError'];
  oneError = (oneError !== false);
  var validate = function (path) {
    var messageInfo = oneError ? '' : [];
    //获取path对应的校验规则
    var ruleObj = rules[path];
    var validatePassTip = ruleObj['message']['success'] || '';
    //获取path对应的值
    //var pathArr = path.split("\.");
    //值默认为空字符串
    var val = formData[path];
    //遍历所有的规则名称，执行校验方法
    var ruleNameList = _.keys(ruleObj).filter(function (ruleName) {
      return ruleName !== 'message';
    });
    //校验规则中是否包含必填项，如果没有必填项，当值为空时不校验
    var isRequired = ruleNameList.indexOf('required') != -1;
    for (var i = 0, len = ruleNameList.length; i < len; i++) {
      var ruleName = ruleNameList[i];
      //校验规则对应的值
      var ruleValue = ruleObj[ruleName];
      //log it
      _.log(
        '\npath:', path,
        'ruleName:', ruleName,
        'ruleValue:', ruleValue,
        'val:', val
      );
      //如果不是必填项，当值为空字时，不校验
      // isRequired = isRequired || ruleName.indexOf('Required') != -1;
      // if (ruleName !== 'required' && !isRequired && val === '') {
      //   continue;
      // }
      if (typeof(_this[ruleName]) === 'undefined') {
        throw new Error(path + ':' + ruleName + ' can not find.');
      }
      //校验结果
      var result = _this[ruleName](ruleValue, val);
      //校验没有通过
      if (!result) {
        success = false;
        var validMsg = (ruleObj['message'] || {})[ruleName];
        if (!validMsg) {
          _.log('Warning:', path, ' rule: ', ruleName, 'not any message info!');
        }
        _.isArray(messageInfo) ?  messageInfo.push(validMsg || '') : (messageInfo = validMsg || '');
        //只显示一个错误
        if (oneError) {
          break;
        }
      }
    }
    var retObj = {};
    if (messageInfo.length) {
      retObj = {
        result: false,
        message: messageInfo
      };
    } else {
      retObj = {
        result: true,
        message: validatePassTip
      };
    }
    _this.fieldErrors[path] = retObj ;
    //Object.assign(_this.fieldErrors,retObj) ;
  };
  //部分校验
  if (path != null) {
    if (rules[path]) {
      validate(path);
    } else {
      throw new Error('can not find match path.');
    }
  } else {
    //全部校验
    //循环所有的path

    _.keys(rules).forEach(function (path) {
      validate(path);
    });
  }
  return success;
};





//////////////////////////////////////////////////validate method//////////////////////////////////////////////////
/**
 *  判断是不是email
 *
 * @param param (email: true|false)
 * @param value (校验的值)
 * @returns {boolean|*}
 */
Validator.prototype.email = function (param, value) {
  var pass = true;
  if(value==='') return true ;
  if (param === true) {
    pass = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
  }

  return pass;
};


/**
 * 判断是不是url
 *
 * @param param(url:true|false)
 * @param value
 * @returns {boolean|*}
 */
Validator.prototype.url = function url(param, value) {
  var pass = true;
  if(value==='') return true ;
  if (param === true) {
    pass = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
  }

  return pass;
};


/**
 *  校验是不是日期
 *
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.date = function (param, value) {
  var pass = true;
  if(value==='') return true ;
  if (param === true) {
    pass = !/Invalid|NaN/.test(new Date(value).toString());
  }

  return pass;
};


/**
 * 判断是不是ISO的日期格式
 *
 * @param param
 * @param value
 * @returns {boolean|*}
 */
Validator.prototype.dataISO = function dataISO(param, value) {
  var pass = true;
  if(value==='') return true ;
  if (param === true) {
    pass = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }

  return pass;
};


/**
 * 判断是不是数字带小数点
 *
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.number = function number(param, value) {
  var result = true;
  if(value==='') return true ;
  if (param === true) {
    result = /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
  }

  return result;
};


/**
 * 校验是不是数字不带小数点
 *
 * @param param
 * @param value
 * @returns {boolean|*}
 */
Validator.prototype.digits = function digits(param, value) {
  var pass = true;
  if(value==='') return true ;
  if (param === true) {
    pass = /^\d+$/.test(value);
  }

  return pass;
};


/**
 * 校验必须项
 *
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.required = function required(param, value) {
  var pass = true;
  if (pass === true) {
    return value.length > 0;
  }
  return pass;
};


/**
 * 身份证号码
 *
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.cardNo = function cardNo(param, value) {
  var pass = true;
  if(value==='') return true ;
  if (param === true) {
    var len = value.length, re;
    if (len == 15)
      re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{3})$/);
    else if (len == 18)
      re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\d|[Xx])$/);
    else {
      return false;
    }
    var a = value.match(re);
    if (a != null) {
      if (len == 15) {
        var D = new Date("19" + a[3] + "/" + a[4] + "/" + a[5]);
        var B = D.getYear() == a[3] && (D.getMonth() + 1) == a[4]
          && D.getDate() == a[5];
      } else {
        var D = new Date(a[3] + "/" + a[4] + "/" + a[5]);
        var B = D.getFullYear() == a[3] && (D.getMonth() + 1) == a[4]
          && D.getDate() == a[5];
      }
      if (!B) {
        return false;
      }
    }
    return true;
  }

  return pass;
};


/**
 *
 * @param param
 * @param value
 * @returns {boolean|*}
 */
Validator.prototype.qq = function qq(param, value) {
  var pass = true;
  if(value==='') return true ;
  if (param === true) {
    var reg = /^[1-9][0-9]{4,14}$/;
    pass = reg.test(value);
  }

  return pass;
};


/**
 * 手机号码
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.mobile = function mobile(param, value) {
  var pass = true;
  if(value==='') return true ;
  if (param === true) {
    var length = value.length;
    var reg = /^((1)+\d{10})$/;
    pass = length == 11 && reg.test(value);
  }

  return pass;
};

/**
 * 电话号码
 * @param param
 * @param value
 * @returns {boolean|*}
 */
Validator.prototype.phone = function phone(param, value) {
  var pass = true;
  if(value==='') return true ;
  if (param === true) {
    var reg = /^((\d{10,11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/;
    pass = reg.test(value);
  }

  return pass;
};


/**
 * 密码强度验证: 密码必须是字符与数字的混合
 *
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.pwdMix = function pwdMix(param, value) {
  var pass = true;
  if(value==='') return true ;
  if (param === true) {
    var reg = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
    pass = reg.test(value);
  }

  return pass;
};


/**
 * 最小值
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.min = function min(param, value) {
  if(value==='') return true ;
  return value >= param;
};


/**
 * 最大值
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.max = function max(param, value) {
  if(value==='') return true ;
  return value <= param;
};


/**
 * 最小长度
 *
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.minLength = function minLength(param, value) {
  if(value==='') return true ;
  return value.length >= param;
};


/**
 * 最大长度
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.maxLength = function maxLength(param, value) {
  if(value==='') return true ;
  return value.length <= param;
};


/**
 * 在范围内
 *
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.range = function range(param, value) {
  if(value==='') return true ;
  return value >= param[0] && value <= param[1];
};


/**
 *  * 长度在范围之内
 *   *
 *    * @param param
 *     * @param val
 *      * @returns {boolean}
 *       */
Validator.prototype.rangeLength = function rangeLength(param, val) {
  if(value==='') return true ;
  return val.length >= param[0] && val.length <= param[1];
};


/**
 * 非法字符
 *
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.forbbidenChar = function forbbidenChar(param, value) {
  var pass = true;
  if(value==='') return true ;
  if (param === true) {
    pass = /[&\\<>'"]/.test(value);
  }

  return pass;
};


/**
 * 邮编
 *
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.zipCode = function zipCode(param, value) {
  if(value==='') return true ;
  var pass = true;
  if (param === true) {
    pass = /^[0-9]{6}$/.test(value);
  }
  return pass;
};


/**
 * 判断是不是数字最多两位小数
 *
 * @param param
 * @param value
 * @returns {boolean}
 */
Validator.prototype.number2point = function number(param, value) {
  var result = true;
  if(value==='') return true ;
  if (param === true) {
    result = /^[0-9]+(.[0-9]{1,2})?$/.test(value);
  }

  return result;
};

module.exports = Validator ;
