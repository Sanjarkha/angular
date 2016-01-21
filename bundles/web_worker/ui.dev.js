"format register";
System.register("angular2/src/facade/lang", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var globalScope;
  if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
      globalScope = self;
    } else {
      globalScope = global;
    }
  } else {
    globalScope = window;
  }
  ;
  exports.IS_DART = false;
  var _global = globalScope;
  exports.global = _global;
  exports.Type = Function;
  function getTypeNameForDebugging(type) {
    return type['name'];
  }
  exports.getTypeNameForDebugging = getTypeNameForDebugging;
  exports.Math = _global.Math;
  exports.Date = _global.Date;
  var _devMode = true;
  var _modeLocked = false;
  function lockMode() {
    _modeLocked = true;
  }
  exports.lockMode = lockMode;
  function enableProdMode() {
    if (_modeLocked) {
      throw 'Cannot enable prod mode after platform setup.';
    }
    _devMode = false;
  }
  exports.enableProdMode = enableProdMode;
  function assertionsEnabled() {
    return _devMode;
  }
  exports.assertionsEnabled = assertionsEnabled;
  _global.assert = function assert(condition) {};
  function CONST_EXPR(expr) {
    return expr;
  }
  exports.CONST_EXPR = CONST_EXPR;
  function CONST() {
    return function(target) {
      return target;
    };
  }
  exports.CONST = CONST;
  function isPresent(obj) {
    return obj !== undefined && obj !== null;
  }
  exports.isPresent = isPresent;
  function isBlank(obj) {
    return obj === undefined || obj === null;
  }
  exports.isBlank = isBlank;
  function isString(obj) {
    return typeof obj === "string";
  }
  exports.isString = isString;
  function isFunction(obj) {
    return typeof obj === "function";
  }
  exports.isFunction = isFunction;
  function isType(obj) {
    return isFunction(obj);
  }
  exports.isType = isType;
  function isStringMap(obj) {
    return typeof obj === 'object' && obj !== null;
  }
  exports.isStringMap = isStringMap;
  function isPromise(obj) {
    return obj instanceof _global.Promise;
  }
  exports.isPromise = isPromise;
  function isArray(obj) {
    return Array.isArray(obj);
  }
  exports.isArray = isArray;
  function isNumber(obj) {
    return typeof obj === 'number';
  }
  exports.isNumber = isNumber;
  function isDate(obj) {
    return obj instanceof exports.Date && !isNaN(obj.valueOf());
  }
  exports.isDate = isDate;
  function noop() {}
  exports.noop = noop;
  function stringify(token) {
    if (typeof token === 'string') {
      return token;
    }
    if (token === undefined || token === null) {
      return '' + token;
    }
    if (token.name) {
      return token.name;
    }
    if (token.overriddenName) {
      return token.overriddenName;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf("\n");
    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
  }
  exports.stringify = stringify;
  function serializeEnum(val) {
    return val;
  }
  exports.serializeEnum = serializeEnum;
  function deserializeEnum(val, values) {
    return val;
  }
  exports.deserializeEnum = deserializeEnum;
  var StringWrapper = (function() {
    function StringWrapper() {}
    StringWrapper.fromCharCode = function(code) {
      return String.fromCharCode(code);
    };
    StringWrapper.charCodeAt = function(s, index) {
      return s.charCodeAt(index);
    };
    StringWrapper.split = function(s, regExp) {
      return s.split(regExp);
    };
    StringWrapper.equals = function(s, s2) {
      return s === s2;
    };
    StringWrapper.stripLeft = function(s, charVal) {
      if (s && s.length) {
        var pos = 0;
        for (var i = 0; i < s.length; i++) {
          if (s[i] != charVal)
            break;
          pos++;
        }
        s = s.substring(pos);
      }
      return s;
    };
    StringWrapper.stripRight = function(s, charVal) {
      if (s && s.length) {
        var pos = s.length;
        for (var i = s.length - 1; i >= 0; i--) {
          if (s[i] != charVal)
            break;
          pos--;
        }
        s = s.substring(0, pos);
      }
      return s;
    };
    StringWrapper.replace = function(s, from, replace) {
      return s.replace(from, replace);
    };
    StringWrapper.replaceAll = function(s, from, replace) {
      return s.replace(from, replace);
    };
    StringWrapper.slice = function(s, from, to) {
      if (from === void 0) {
        from = 0;
      }
      if (to === void 0) {
        to = null;
      }
      return s.slice(from, to === null ? undefined : to);
    };
    StringWrapper.replaceAllMapped = function(s, from, cb) {
      return s.replace(from, function() {
        var matches = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          matches[_i - 0] = arguments[_i];
        }
        matches.splice(-2, 2);
        return cb(matches);
      });
    };
    StringWrapper.contains = function(s, substr) {
      return s.indexOf(substr) != -1;
    };
    StringWrapper.compare = function(a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    };
    return StringWrapper;
  })();
  exports.StringWrapper = StringWrapper;
  var StringJoiner = (function() {
    function StringJoiner(parts) {
      if (parts === void 0) {
        parts = [];
      }
      this.parts = parts;
    }
    StringJoiner.prototype.add = function(part) {
      this.parts.push(part);
    };
    StringJoiner.prototype.toString = function() {
      return this.parts.join("");
    };
    return StringJoiner;
  })();
  exports.StringJoiner = StringJoiner;
  var NumberParseError = (function(_super) {
    __extends(NumberParseError, _super);
    function NumberParseError(message) {
      _super.call(this);
      this.message = message;
    }
    NumberParseError.prototype.toString = function() {
      return this.message;
    };
    return NumberParseError;
  })(Error);
  exports.NumberParseError = NumberParseError;
  var NumberWrapper = (function() {
    function NumberWrapper() {}
    NumberWrapper.toFixed = function(n, fractionDigits) {
      return n.toFixed(fractionDigits);
    };
    NumberWrapper.equal = function(a, b) {
      return a === b;
    };
    NumberWrapper.parseIntAutoRadix = function(text) {
      var result = parseInt(text);
      if (isNaN(result)) {
        throw new NumberParseError("Invalid integer literal when parsing " + text);
      }
      return result;
    };
    NumberWrapper.parseInt = function(text, radix) {
      if (radix == 10) {
        if (/^(\-|\+)?[0-9]+$/.test(text)) {
          return parseInt(text, radix);
        }
      } else if (radix == 16) {
        if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
          return parseInt(text, radix);
        }
      } else {
        var result = parseInt(text, radix);
        if (!isNaN(result)) {
          return result;
        }
      }
      throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " + radix);
    };
    NumberWrapper.parseFloat = function(text) {
      return parseFloat(text);
    };
    Object.defineProperty(NumberWrapper, "NaN", {
      get: function() {
        return NaN;
      },
      enumerable: true,
      configurable: true
    });
    NumberWrapper.isNaN = function(value) {
      return isNaN(value);
    };
    NumberWrapper.isInteger = function(value) {
      return Number.isInteger(value);
    };
    return NumberWrapper;
  })();
  exports.NumberWrapper = NumberWrapper;
  exports.RegExp = _global.RegExp;
  var RegExpWrapper = (function() {
    function RegExpWrapper() {}
    RegExpWrapper.create = function(regExpStr, flags) {
      if (flags === void 0) {
        flags = '';
      }
      flags = flags.replace(/g/g, '');
      return new _global.RegExp(regExpStr, flags + 'g');
    };
    RegExpWrapper.firstMatch = function(regExp, input) {
      regExp.lastIndex = 0;
      return regExp.exec(input);
    };
    RegExpWrapper.test = function(regExp, input) {
      regExp.lastIndex = 0;
      return regExp.test(input);
    };
    RegExpWrapper.matcher = function(regExp, input) {
      regExp.lastIndex = 0;
      return {
        re: regExp,
        input: input
      };
    };
    return RegExpWrapper;
  })();
  exports.RegExpWrapper = RegExpWrapper;
  var RegExpMatcherWrapper = (function() {
    function RegExpMatcherWrapper() {}
    RegExpMatcherWrapper.next = function(matcher) {
      return matcher.re.exec(matcher.input);
    };
    return RegExpMatcherWrapper;
  })();
  exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
  var FunctionWrapper = (function() {
    function FunctionWrapper() {}
    FunctionWrapper.apply = function(fn, posArgs) {
      return fn.apply(null, posArgs);
    };
    return FunctionWrapper;
  })();
  exports.FunctionWrapper = FunctionWrapper;
  function looseIdentical(a, b) {
    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
  }
  exports.looseIdentical = looseIdentical;
  function getMapKey(value) {
    return value;
  }
  exports.getMapKey = getMapKey;
  function normalizeBlank(obj) {
    return isBlank(obj) ? null : obj;
  }
  exports.normalizeBlank = normalizeBlank;
  function normalizeBool(obj) {
    return isBlank(obj) ? false : obj;
  }
  exports.normalizeBool = normalizeBool;
  function isJsObject(o) {
    return o !== null && (typeof o === "function" || typeof o === "object");
  }
  exports.isJsObject = isJsObject;
  function print(obj) {
    console.log(obj);
  }
  exports.print = print;
  var Json = (function() {
    function Json() {}
    Json.parse = function(s) {
      return _global.JSON.parse(s);
    };
    Json.stringify = function(data) {
      return _global.JSON.stringify(data, null, 2);
    };
    return Json;
  })();
  exports.Json = Json;
  var DateWrapper = (function() {
    function DateWrapper() {}
    DateWrapper.create = function(year, month, day, hour, minutes, seconds, milliseconds) {
      if (month === void 0) {
        month = 1;
      }
      if (day === void 0) {
        day = 1;
      }
      if (hour === void 0) {
        hour = 0;
      }
      if (minutes === void 0) {
        minutes = 0;
      }
      if (seconds === void 0) {
        seconds = 0;
      }
      if (milliseconds === void 0) {
        milliseconds = 0;
      }
      return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
    };
    DateWrapper.fromISOString = function(str) {
      return new exports.Date(str);
    };
    DateWrapper.fromMillis = function(ms) {
      return new exports.Date(ms);
    };
    DateWrapper.toMillis = function(date) {
      return date.getTime();
    };
    DateWrapper.now = function() {
      return new exports.Date();
    };
    DateWrapper.toJson = function(date) {
      return date.toJSON();
    };
    return DateWrapper;
  })();
  exports.DateWrapper = DateWrapper;
  function setValueOnPath(global, path, value) {
    var parts = path.split('.');
    var obj = global;
    while (parts.length > 1) {
      var name = parts.shift();
      if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
        obj = obj[name];
      } else {
        obj = obj[name] = {};
      }
    }
    if (obj === undefined || obj === null) {
      obj = {};
    }
    obj[parts.shift()] = value;
  }
  exports.setValueOnPath = setValueOnPath;
  var _symbolIterator = null;
  function getSymbolIterator() {
    if (isBlank(_symbolIterator)) {
      if (isPresent(Symbol) && isPresent(Symbol.iterator)) {
        _symbolIterator = Symbol.iterator;
      } else {
        var keys = Object.getOwnPropertyNames(Map.prototype);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (key !== 'entries' && key !== 'size' && Map.prototype[key] === Map.prototype['entries']) {
            _symbolIterator = key;
          }
        }
      }
    }
    return _symbolIterator;
  }
  exports.getSymbolIterator = getSymbolIterator;
  function evalExpression(sourceUrl, expr, declarations, vars) {
    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
    var fnArgNames = [];
    var fnArgValues = [];
    for (var argName in vars) {
      fnArgNames.push(argName);
      fnArgValues.push(vars[argName]);
    }
    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
  }
  exports.evalExpression = evalExpression;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/facade/promise", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var PromiseWrapper = (function() {
    function PromiseWrapper() {}
    PromiseWrapper.resolve = function(obj) {
      return Promise.resolve(obj);
    };
    PromiseWrapper.reject = function(obj, _) {
      return Promise.reject(obj);
    };
    PromiseWrapper.catchError = function(promise, onError) {
      return promise.catch(onError);
    };
    PromiseWrapper.all = function(promises) {
      if (promises.length == 0)
        return Promise.resolve([]);
      return Promise.all(promises);
    };
    PromiseWrapper.then = function(promise, success, rejection) {
      return promise.then(success, rejection);
    };
    PromiseWrapper.wrap = function(computation) {
      return new Promise(function(res, rej) {
        try {
          res(computation());
        } catch (e) {
          rej(e);
        }
      });
    };
    PromiseWrapper.scheduleMicrotask = function(computation) {
      PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function(_) {});
    };
    PromiseWrapper.isPromise = function(obj) {
      return obj instanceof Promise;
    };
    PromiseWrapper.completer = function() {
      var resolve;
      var reject;
      var p = new Promise(function(res, rej) {
        resolve = res;
        reject = rej;
      });
      return {
        promise: p,
        resolve: resolve,
        reject: reject
      };
    };
    return PromiseWrapper;
  })();
  exports.PromiseWrapper = PromiseWrapper;
  global.define = __define;
  return module.exports;
});

System.register("rxjs/util/noop", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function noop() {}
  exports.noop = noop;
  global.define = __define;
  return module.exports;
});

System.register("rxjs/util/throwError", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function throwError(e) {
    throw e;
  }
  exports.throwError = throwError;
  global.define = __define;
  return module.exports;
});

System.register("rxjs/util/tryOrOnError", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function tryOrOnError(target) {
    function tryCatcher() {
      try {
        tryCatcher.target.apply(this, arguments);
      } catch (e) {
        this.error(e);
      }
    }
    tryCatcher.target = target;
    return tryCatcher;
  }
  exports.tryOrOnError = tryOrOnError;
  global.define = __define;
  return module.exports;
});

System.register("rxjs/Subscription", ["rxjs/util/noop"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var noop_1 = require("rxjs/util/noop");
  var Subscription = (function() {
    function Subscription(_unsubscribe) {
      this.isUnsubscribed = false;
      if (_unsubscribe) {
        this._unsubscribe = _unsubscribe;
      }
    }
    Subscription.prototype._unsubscribe = function() {
      noop_1.noop();
    };
    Subscription.prototype.unsubscribe = function() {
      if (this.isUnsubscribed) {
        return ;
      }
      this.isUnsubscribed = true;
      var unsubscribe = this._unsubscribe;
      var subscriptions = this._subscriptions;
      this._subscriptions = void 0;
      if (unsubscribe) {
        unsubscribe.call(this);
      }
      if (subscriptions != null) {
        var index = -1;
        var len = subscriptions.length;
        while (++index < len) {
          subscriptions[index].unsubscribe();
        }
      }
    };
    Subscription.prototype.add = function(subscription) {
      if (!subscription || (subscription === this) || (subscription === Subscription.EMPTY)) {
        return ;
      }
      var sub = subscription;
      switch (typeof subscription) {
        case 'function':
          sub = new Subscription(subscription);
        case 'object':
          if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
            break;
          } else if (this.isUnsubscribed) {
            sub.unsubscribe();
          } else {
            var subscriptions = this._subscriptions || (this._subscriptions = []);
            subscriptions.push(sub);
          }
          break;
        default:
          throw new Error('Unrecognized subscription ' + subscription + ' added to Subscription.');
      }
    };
    Subscription.prototype.remove = function(subscription) {
      if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
        return ;
      }
      var subscriptions = this._subscriptions;
      if (subscriptions) {
        var subscriptionIndex = subscriptions.indexOf(subscription);
        if (subscriptionIndex !== -1) {
          subscriptions.splice(subscriptionIndex, 1);
        }
      }
    };
    Subscription.EMPTY = (function(empty) {
      empty.isUnsubscribed = true;
      return empty;
    }(new Subscription()));
    return Subscription;
  })();
  exports.Subscription = Subscription;
  global.define = __define;
  return module.exports;
});

System.register("rxjs/util/root", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };
  exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
  var freeGlobal = objectTypes[typeof global] && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    exports.root = freeGlobal;
  }
  global.define = __define;
  return module.exports;
});

System.register("rxjs/subject/SubjectSubscription", ["rxjs/Subscription", "rxjs/Subscriber"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = require("rxjs/Subscription");
  var Subscriber_1 = require("rxjs/Subscriber");
  var SubjectSubscription = (function(_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, observer) {
      _super.call(this);
      this.subject = subject;
      this.observer = observer;
      this.isUnsubscribed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function() {
      if (this.isUnsubscribed) {
        return ;
      }
      this.isUnsubscribed = true;
      var subject = this.subject;
      var observers = subject.observers;
      this.subject = void 0;
      if (!observers || observers.length === 0 || subject.isUnsubscribed) {
        return ;
      }
      if (this.observer instanceof Subscriber_1.Subscriber) {
        this.observer.unsubscribe();
      }
      var subscriberIndex = observers.indexOf(this.observer);
      if (subscriberIndex !== -1) {
        observers.splice(subscriberIndex, 1);
      }
    };
    return SubjectSubscription;
  })(Subscription_1.Subscription);
  exports.SubjectSubscription = SubjectSubscription;
  global.define = __define;
  return module.exports;
});

System.register("rxjs/scheduler/QueueAction", ["rxjs/Subscription"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = require("rxjs/Subscription");
  var QueueAction = (function(_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
      _super.call(this);
      this.scheduler = scheduler;
      this.work = work;
    }
    QueueAction.prototype.schedule = function(state) {
      if (this.isUnsubscribed) {
        return this;
      }
      this.state = state;
      var scheduler = this.scheduler;
      scheduler.actions.push(this);
      scheduler.flush();
      return this;
    };
    QueueAction.prototype.execute = function() {
      if (this.isUnsubscribed) {
        throw new Error('How did did we execute a canceled Action?');
      }
      this.work(this.state);
    };
    QueueAction.prototype.unsubscribe = function() {
      var scheduler = this.scheduler;
      var actions = scheduler.actions;
      var index = actions.indexOf(this);
      this.work = void 0;
      this.state = void 0;
      this.scheduler = void 0;
      if (index !== -1) {
        actions.splice(index, 1);
      }
      _super.prototype.unsubscribe.call(this);
    };
    return QueueAction;
  })(Subscription_1.Subscription);
  exports.QueueAction = QueueAction;
  global.define = __define;
  return module.exports;
});

System.register("rxjs/scheduler/FutureAction", ["rxjs/scheduler/QueueAction"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var QueueAction_1 = require("rxjs/scheduler/QueueAction");
  var FutureAction = (function(_super) {
    __extends(FutureAction, _super);
    function FutureAction(scheduler, work) {
      _super.call(this, scheduler, work);
      this.scheduler = scheduler;
      this.work = work;
    }
    FutureAction.prototype.schedule = function(state, delay) {
      var _this = this;
      if (delay === void 0) {
        delay = 0;
      }
      if (this.isUnsubscribed) {
        return this;
      }
      this.delay = delay;
      this.state = state;
      var id = this.id;
      if (id != null) {
        this.id = undefined;
        clearTimeout(id);
      }
      var scheduler = this.scheduler;
      this.id = setTimeout(function() {
        _this.id = void 0;
        scheduler.actions.push(_this);
        scheduler.flush();
      }, this.delay);
      return this;
    };
    FutureAction.prototype.unsubscribe = function() {
      var id = this.id;
      if (id != null) {
        this.id = void 0;
        clearTimeout(id);
      }
      _super.prototype.unsubscribe.call(this);
    };
    return FutureAction;
  })(QueueAction_1.QueueAction);
  exports.FutureAction = FutureAction;
  global.define = __define;
  return module.exports;
});

System.register("rxjs/operator/toPromise", ["rxjs/util/root"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var root_1 = require("rxjs/util/root");
  function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
      if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
        PromiseCtor = root_1.root.Rx.config.Promise;
      } else if (root_1.root.Promise) {
        PromiseCtor = root_1.root.Promise;
      }
    }
    if (!PromiseCtor) {
      throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  }
  exports.toPromise = toPromise;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/facade/collection", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  exports.Map = lang_1.global.Map;
  exports.Set = lang_1.global.Set;
  var createMapFromPairs = (function() {
    try {
      if (new exports.Map([[1, 2]]).size === 1) {
        return function createMapFromPairs(pairs) {
          return new exports.Map(pairs);
        };
      }
    } catch (e) {}
    return function createMapAndPopulateFromPairs(pairs) {
      var map = new exports.Map();
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        map.set(pair[0], pair[1]);
      }
      return map;
    };
  })();
  var createMapFromMap = (function() {
    try {
      if (new exports.Map(new exports.Map())) {
        return function createMapFromMap(m) {
          return new exports.Map(m);
        };
      }
    } catch (e) {}
    return function createMapAndPopulateFromMap(m) {
      var map = new exports.Map();
      m.forEach(function(v, k) {
        map.set(k, v);
      });
      return map;
    };
  })();
  var _clearValues = (function() {
    if ((new exports.Map()).keys().next) {
      return function _clearValues(m) {
        var keyIterator = m.keys();
        var k;
        while (!((k = keyIterator.next()).done)) {
          m.set(k.value, null);
        }
      };
    } else {
      return function _clearValuesWithForeEach(m) {
        m.forEach(function(v, k) {
          m.set(k, null);
        });
      };
    }
  })();
  var _arrayFromMap = (function() {
    try {
      if ((new exports.Map()).values().next) {
        return function createArrayFromMap(m, getValues) {
          return getValues ? Array.from(m.values()) : Array.from(m.keys());
        };
      }
    } catch (e) {}
    return function createArrayFromMapWithForeach(m, getValues) {
      var res = ListWrapper.createFixedSize(m.size),
          i = 0;
      m.forEach(function(v, k) {
        res[i] = getValues ? v : k;
        i++;
      });
      return res;
    };
  })();
  var MapWrapper = (function() {
    function MapWrapper() {}
    MapWrapper.clone = function(m) {
      return createMapFromMap(m);
    };
    MapWrapper.createFromStringMap = function(stringMap) {
      var result = new exports.Map();
      for (var prop in stringMap) {
        result.set(prop, stringMap[prop]);
      }
      return result;
    };
    MapWrapper.toStringMap = function(m) {
      var r = {};
      m.forEach(function(v, k) {
        return r[k] = v;
      });
      return r;
    };
    MapWrapper.createFromPairs = function(pairs) {
      return createMapFromPairs(pairs);
    };
    MapWrapper.clearValues = function(m) {
      _clearValues(m);
    };
    MapWrapper.iterable = function(m) {
      return m;
    };
    MapWrapper.keys = function(m) {
      return _arrayFromMap(m, false);
    };
    MapWrapper.values = function(m) {
      return _arrayFromMap(m, true);
    };
    return MapWrapper;
  })();
  exports.MapWrapper = MapWrapper;
  var StringMapWrapper = (function() {
    function StringMapWrapper() {}
    StringMapWrapper.create = function() {
      return {};
    };
    StringMapWrapper.contains = function(map, key) {
      return map.hasOwnProperty(key);
    };
    StringMapWrapper.get = function(map, key) {
      return map.hasOwnProperty(key) ? map[key] : undefined;
    };
    StringMapWrapper.set = function(map, key, value) {
      map[key] = value;
    };
    StringMapWrapper.keys = function(map) {
      return Object.keys(map);
    };
    StringMapWrapper.isEmpty = function(map) {
      for (var prop in map) {
        return false;
      }
      return true;
    };
    StringMapWrapper.delete = function(map, key) {
      delete map[key];
    };
    StringMapWrapper.forEach = function(map, callback) {
      for (var prop in map) {
        if (map.hasOwnProperty(prop)) {
          callback(map[prop], prop);
        }
      }
    };
    StringMapWrapper.merge = function(m1, m2) {
      var m = {};
      for (var attr in m1) {
        if (m1.hasOwnProperty(attr)) {
          m[attr] = m1[attr];
        }
      }
      for (var attr in m2) {
        if (m2.hasOwnProperty(attr)) {
          m[attr] = m2[attr];
        }
      }
      return m;
    };
    StringMapWrapper.equals = function(m1, m2) {
      var k1 = Object.keys(m1);
      var k2 = Object.keys(m2);
      if (k1.length != k2.length) {
        return false;
      }
      var key;
      for (var i = 0; i < k1.length; i++) {
        key = k1[i];
        if (m1[key] !== m2[key]) {
          return false;
        }
      }
      return true;
    };
    return StringMapWrapper;
  })();
  exports.StringMapWrapper = StringMapWrapper;
  var ListWrapper = (function() {
    function ListWrapper() {}
    ListWrapper.createFixedSize = function(size) {
      return new Array(size);
    };
    ListWrapper.createGrowableSize = function(size) {
      return new Array(size);
    };
    ListWrapper.clone = function(array) {
      return array.slice(0);
    };
    ListWrapper.forEachWithIndex = function(array, fn) {
      for (var i = 0; i < array.length; i++) {
        fn(array[i], i);
      }
    };
    ListWrapper.first = function(array) {
      if (!array)
        return null;
      return array[0];
    };
    ListWrapper.last = function(array) {
      if (!array || array.length == 0)
        return null;
      return array[array.length - 1];
    };
    ListWrapper.indexOf = function(array, value, startIndex) {
      if (startIndex === void 0) {
        startIndex = 0;
      }
      return array.indexOf(value, startIndex);
    };
    ListWrapper.contains = function(list, el) {
      return list.indexOf(el) !== -1;
    };
    ListWrapper.reversed = function(array) {
      var a = ListWrapper.clone(array);
      return a.reverse();
    };
    ListWrapper.concat = function(a, b) {
      return a.concat(b);
    };
    ListWrapper.insert = function(list, index, value) {
      list.splice(index, 0, value);
    };
    ListWrapper.removeAt = function(list, index) {
      var res = list[index];
      list.splice(index, 1);
      return res;
    };
    ListWrapper.removeAll = function(list, items) {
      for (var i = 0; i < items.length; ++i) {
        var index = list.indexOf(items[i]);
        list.splice(index, 1);
      }
    };
    ListWrapper.remove = function(list, el) {
      var index = list.indexOf(el);
      if (index > -1) {
        list.splice(index, 1);
        return true;
      }
      return false;
    };
    ListWrapper.clear = function(list) {
      list.length = 0;
    };
    ListWrapper.isEmpty = function(list) {
      return list.length == 0;
    };
    ListWrapper.fill = function(list, value, start, end) {
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = null;
      }
      list.fill(value, start, end === null ? list.length : end);
    };
    ListWrapper.equals = function(a, b) {
      if (a.length != b.length)
        return false;
      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
          return false;
      }
      return true;
    };
    ListWrapper.slice = function(l, from, to) {
      if (from === void 0) {
        from = 0;
      }
      if (to === void 0) {
        to = null;
      }
      return l.slice(from, to === null ? undefined : to);
    };
    ListWrapper.splice = function(l, from, length) {
      return l.splice(from, length);
    };
    ListWrapper.sort = function(l, compareFn) {
      if (lang_1.isPresent(compareFn)) {
        l.sort(compareFn);
      } else {
        l.sort();
      }
    };
    ListWrapper.toString = function(l) {
      return l.toString();
    };
    ListWrapper.toJSON = function(l) {
      return JSON.stringify(l);
    };
    ListWrapper.maximum = function(list, predicate) {
      if (list.length == 0) {
        return null;
      }
      var solution = null;
      var maxValue = -Infinity;
      for (var index = 0; index < list.length; index++) {
        var candidate = list[index];
        if (lang_1.isBlank(candidate)) {
          continue;
        }
        var candidateValue = predicate(candidate);
        if (candidateValue > maxValue) {
          solution = candidate;
          maxValue = candidateValue;
        }
      }
      return solution;
    };
    return ListWrapper;
  })();
  exports.ListWrapper = ListWrapper;
  function isListLikeIterable(obj) {
    if (!lang_1.isJsObject(obj))
      return false;
    return lang_1.isArray(obj) || (!(obj instanceof exports.Map) && lang_1.getSymbolIterator() in obj);
  }
  exports.isListLikeIterable = isListLikeIterable;
  function iterateListLike(obj, fn) {
    if (lang_1.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        fn(obj[i]);
      }
    } else {
      var iterator = obj[lang_1.getSymbolIterator()]();
      var item;
      while (!((item = iterator.next()).done)) {
        fn(item.value);
      }
    }
  }
  exports.iterateListLike = iterateListLike;
  var createSetFromList = (function() {
    var test = new exports.Set([1, 2, 3]);
    if (test.size === 3) {
      return function createSetFromList(lst) {
        return new exports.Set(lst);
      };
    } else {
      return function createSetAndPopulateFromList(lst) {
        var res = new exports.Set(lst);
        if (res.size !== lst.length) {
          for (var i = 0; i < lst.length; i++) {
            res.add(lst[i]);
          }
        }
        return res;
      };
    }
  })();
  var SetWrapper = (function() {
    function SetWrapper() {}
    SetWrapper.createFromList = function(lst) {
      return createSetFromList(lst);
    };
    SetWrapper.has = function(s, key) {
      return s.has(key);
    };
    SetWrapper.delete = function(m, k) {
      m.delete(k);
    };
    return SetWrapper;
  })();
  exports.SetWrapper = SetWrapper;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/di/metadata", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var InjectMetadata = (function() {
    function InjectMetadata(token) {
      this.token = token;
    }
    InjectMetadata.prototype.toString = function() {
      return "@Inject(" + lang_1.stringify(this.token) + ")";
    };
    InjectMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], InjectMetadata);
    return InjectMetadata;
  })();
  exports.InjectMetadata = InjectMetadata;
  var OptionalMetadata = (function() {
    function OptionalMetadata() {}
    OptionalMetadata.prototype.toString = function() {
      return "@Optional()";
    };
    OptionalMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], OptionalMetadata);
    return OptionalMetadata;
  })();
  exports.OptionalMetadata = OptionalMetadata;
  var DependencyMetadata = (function() {
    function DependencyMetadata() {}
    Object.defineProperty(DependencyMetadata.prototype, "token", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    DependencyMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], DependencyMetadata);
    return DependencyMetadata;
  })();
  exports.DependencyMetadata = DependencyMetadata;
  var InjectableMetadata = (function() {
    function InjectableMetadata() {}
    InjectableMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], InjectableMetadata);
    return InjectableMetadata;
  })();
  exports.InjectableMetadata = InjectableMetadata;
  var SelfMetadata = (function() {
    function SelfMetadata() {}
    SelfMetadata.prototype.toString = function() {
      return "@Self()";
    };
    SelfMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], SelfMetadata);
    return SelfMetadata;
  })();
  exports.SelfMetadata = SelfMetadata;
  var SkipSelfMetadata = (function() {
    function SkipSelfMetadata() {}
    SkipSelfMetadata.prototype.toString = function() {
      return "@SkipSelf()";
    };
    SkipSelfMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], SkipSelfMetadata);
    return SkipSelfMetadata;
  })();
  exports.SkipSelfMetadata = SkipSelfMetadata;
  var HostMetadata = (function() {
    function HostMetadata() {}
    HostMetadata.prototype.toString = function() {
      return "@Host()";
    };
    HostMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], HostMetadata);
    return HostMetadata;
  })();
  exports.HostMetadata = HostMetadata;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/util/decorators", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var _nextClassId = 0;
  function extractAnnotation(annotation) {
    if (lang_1.isFunction(annotation) && annotation.hasOwnProperty('annotation')) {
      annotation = annotation.annotation;
    }
    return annotation;
  }
  function applyParams(fnOrArray, key) {
    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function || fnOrArray === Number || fnOrArray === Array) {
      throw new Error("Can not use native " + lang_1.stringify(fnOrArray) + " as constructor");
    }
    if (lang_1.isFunction(fnOrArray)) {
      return fnOrArray;
    } else if (fnOrArray instanceof Array) {
      var annotations = fnOrArray;
      var fn = fnOrArray[fnOrArray.length - 1];
      if (!lang_1.isFunction(fn)) {
        throw new Error("Last position of Class method array must be Function in key " + key + " was '" + lang_1.stringify(fn) + "'");
      }
      var annoLength = annotations.length - 1;
      if (annoLength != fn.length) {
        throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + lang_1.stringify(fn));
      }
      var paramsAnnotations = [];
      for (var i = 0,
          ii = annotations.length - 1; i < ii; i++) {
        var paramAnnotations = [];
        paramsAnnotations.push(paramAnnotations);
        var annotation = annotations[i];
        if (annotation instanceof Array) {
          for (var j = 0; j < annotation.length; j++) {
            paramAnnotations.push(extractAnnotation(annotation[j]));
          }
        } else if (lang_1.isFunction(annotation)) {
          paramAnnotations.push(extractAnnotation(annotation));
        } else {
          paramAnnotations.push(annotation);
        }
      }
      Reflect.defineMetadata('parameters', paramsAnnotations, fn);
      return fn;
    } else {
      throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + lang_1.stringify(fnOrArray) + "'");
    }
  }
  function Class(clsDef) {
    var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
    var proto = constructor.prototype;
    if (clsDef.hasOwnProperty('extends')) {
      if (lang_1.isFunction(clsDef.extends)) {
        constructor.prototype = proto = Object.create(clsDef.extends.prototype);
      } else {
        throw new Error("Class definition 'extends' property must be a constructor function was: " + lang_1.stringify(clsDef.extends));
      }
    }
    for (var key in clsDef) {
      if (key != 'extends' && key != 'prototype' && clsDef.hasOwnProperty(key)) {
        proto[key] = applyParams(clsDef[key], key);
      }
    }
    if (this && this.annotations instanceof Array) {
      Reflect.defineMetadata('annotations', this.annotations, constructor);
    }
    if (!constructor['name']) {
      constructor['overriddenName'] = "class" + _nextClassId++;
    }
    return constructor;
  }
  exports.Class = Class;
  var Reflect = lang_1.global.Reflect;
  if (!(Reflect && Reflect.getMetadata)) {
    throw 'reflect-metadata shim is required when using class decorators';
  }
  function makeDecorator(annotationCls, chainFn) {
    if (chainFn === void 0) {
      chainFn = null;
    }
    function DecoratorFactory(objOrType) {
      var annotationInstance = new annotationCls(objOrType);
      if (this instanceof annotationCls) {
        return annotationInstance;
      } else {
        var chainAnnotation = lang_1.isFunction(this) && this.annotations instanceof Array ? this.annotations : [];
        chainAnnotation.push(annotationInstance);
        var TypeDecorator = function TypeDecorator(cls) {
          var annotations = Reflect.getOwnMetadata('annotations', cls);
          annotations = annotations || [];
          annotations.push(annotationInstance);
          Reflect.defineMetadata('annotations', annotations, cls);
          return cls;
        };
        TypeDecorator.annotations = chainAnnotation;
        TypeDecorator.Class = Class;
        if (chainFn)
          chainFn(TypeDecorator);
        return TypeDecorator;
      }
    }
    DecoratorFactory.prototype = Object.create(annotationCls.prototype);
    return DecoratorFactory;
  }
  exports.makeDecorator = makeDecorator;
  function makeParamDecorator(annotationCls) {
    function ParamDecoratorFactory() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
      }
      var annotationInstance = Object.create(annotationCls.prototype);
      annotationCls.apply(annotationInstance, args);
      if (this instanceof annotationCls) {
        return annotationInstance;
      } else {
        ParamDecorator.annotation = annotationInstance;
        return ParamDecorator;
      }
      function ParamDecorator(cls, unusedKey, index) {
        var parameters = Reflect.getMetadata('parameters', cls);
        parameters = parameters || [];
        while (parameters.length <= index) {
          parameters.push(null);
        }
        parameters[index] = parameters[index] || [];
        var annotationsForParam = parameters[index];
        annotationsForParam.push(annotationInstance);
        Reflect.defineMetadata('parameters', parameters, cls);
        return cls;
      }
    }
    ParamDecoratorFactory.prototype = Object.create(annotationCls.prototype);
    return ParamDecoratorFactory;
  }
  exports.makeParamDecorator = makeParamDecorator;
  function makePropDecorator(decoratorCls) {
    function PropDecoratorFactory() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
      }
      var decoratorInstance = Object.create(decoratorCls.prototype);
      decoratorCls.apply(decoratorInstance, args);
      if (this instanceof decoratorCls) {
        return decoratorInstance;
      } else {
        return function PropDecorator(target, name) {
          var meta = Reflect.getOwnMetadata('propMetadata', target.constructor);
          meta = meta || {};
          meta[name] = meta[name] || [];
          meta[name].unshift(decoratorInstance);
          Reflect.defineMetadata('propMetadata', meta, target.constructor);
        };
      }
    }
    PropDecoratorFactory.prototype = Object.create(decoratorCls.prototype);
    return PropDecoratorFactory;
  }
  exports.makePropDecorator = makePropDecorator;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/di/forward_ref", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  function forwardRef(forwardRefFn) {
    forwardRefFn.__forward_ref__ = forwardRef;
    forwardRefFn.toString = function() {
      return lang_1.stringify(this());
    };
    return forwardRefFn;
  }
  exports.forwardRef = forwardRef;
  function resolveForwardRef(type) {
    if (lang_1.isFunction(type) && type.hasOwnProperty('__forward_ref__') && type.__forward_ref__ === forwardRef) {
      return type();
    } else {
      return type;
    }
  }
  exports.resolveForwardRef = resolveForwardRef;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/reflection/reflector", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var ReflectionInfo = (function() {
    function ReflectionInfo(annotations, parameters, factory, interfaces, propMetadata) {
      this.annotations = annotations;
      this.parameters = parameters;
      this.factory = factory;
      this.interfaces = interfaces;
      this.propMetadata = propMetadata;
    }
    return ReflectionInfo;
  })();
  exports.ReflectionInfo = ReflectionInfo;
  var Reflector = (function() {
    function Reflector(reflectionCapabilities) {
      this._injectableInfo = new collection_1.Map();
      this._getters = new collection_1.Map();
      this._setters = new collection_1.Map();
      this._methods = new collection_1.Map();
      this._usedKeys = null;
      this.reflectionCapabilities = reflectionCapabilities;
    }
    Reflector.prototype.isReflectionEnabled = function() {
      return this.reflectionCapabilities.isReflectionEnabled();
    };
    Reflector.prototype.trackUsage = function() {
      this._usedKeys = new collection_1.Set();
    };
    Reflector.prototype.listUnusedKeys = function() {
      var _this = this;
      if (this._usedKeys == null) {
        throw new exceptions_1.BaseException('Usage tracking is disabled');
      }
      var allTypes = collection_1.MapWrapper.keys(this._injectableInfo);
      return allTypes.filter(function(key) {
        return !collection_1.SetWrapper.has(_this._usedKeys, key);
      });
    };
    Reflector.prototype.registerFunction = function(func, funcInfo) {
      this._injectableInfo.set(func, funcInfo);
    };
    Reflector.prototype.registerType = function(type, typeInfo) {
      this._injectableInfo.set(type, typeInfo);
    };
    Reflector.prototype.registerGetters = function(getters) {
      _mergeMaps(this._getters, getters);
    };
    Reflector.prototype.registerSetters = function(setters) {
      _mergeMaps(this._setters, setters);
    };
    Reflector.prototype.registerMethods = function(methods) {
      _mergeMaps(this._methods, methods);
    };
    Reflector.prototype.factory = function(type) {
      if (this._containsReflectionInfo(type)) {
        var res = this._getReflectionInfo(type).factory;
        return lang_1.isPresent(res) ? res : null;
      } else {
        return this.reflectionCapabilities.factory(type);
      }
    };
    Reflector.prototype.parameters = function(typeOrFunc) {
      if (this._injectableInfo.has(typeOrFunc)) {
        var res = this._getReflectionInfo(typeOrFunc).parameters;
        return lang_1.isPresent(res) ? res : [];
      } else {
        return this.reflectionCapabilities.parameters(typeOrFunc);
      }
    };
    Reflector.prototype.annotations = function(typeOrFunc) {
      if (this._injectableInfo.has(typeOrFunc)) {
        var res = this._getReflectionInfo(typeOrFunc).annotations;
        return lang_1.isPresent(res) ? res : [];
      } else {
        return this.reflectionCapabilities.annotations(typeOrFunc);
      }
    };
    Reflector.prototype.propMetadata = function(typeOrFunc) {
      if (this._injectableInfo.has(typeOrFunc)) {
        var res = this._getReflectionInfo(typeOrFunc).propMetadata;
        return lang_1.isPresent(res) ? res : {};
      } else {
        return this.reflectionCapabilities.propMetadata(typeOrFunc);
      }
    };
    Reflector.prototype.interfaces = function(type) {
      if (this._injectableInfo.has(type)) {
        var res = this._getReflectionInfo(type).interfaces;
        return lang_1.isPresent(res) ? res : [];
      } else {
        return this.reflectionCapabilities.interfaces(type);
      }
    };
    Reflector.prototype.getter = function(name) {
      if (this._getters.has(name)) {
        return this._getters.get(name);
      } else {
        return this.reflectionCapabilities.getter(name);
      }
    };
    Reflector.prototype.setter = function(name) {
      if (this._setters.has(name)) {
        return this._setters.get(name);
      } else {
        return this.reflectionCapabilities.setter(name);
      }
    };
    Reflector.prototype.method = function(name) {
      if (this._methods.has(name)) {
        return this._methods.get(name);
      } else {
        return this.reflectionCapabilities.method(name);
      }
    };
    Reflector.prototype._getReflectionInfo = function(typeOrFunc) {
      if (lang_1.isPresent(this._usedKeys)) {
        this._usedKeys.add(typeOrFunc);
      }
      return this._injectableInfo.get(typeOrFunc);
    };
    Reflector.prototype._containsReflectionInfo = function(typeOrFunc) {
      return this._injectableInfo.has(typeOrFunc);
    };
    Reflector.prototype.importUri = function(type) {
      return this.reflectionCapabilities.importUri(type);
    };
    return Reflector;
  })();
  exports.Reflector = Reflector;
  function _mergeMaps(target, config) {
    collection_1.StringMapWrapper.forEach(config, function(v, k) {
      return target.set(k, v);
    });
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/reflection/reflection_capabilities", ["angular2/src/facade/lang", "angular2/src/facade/exceptions"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var ReflectionCapabilities = (function() {
    function ReflectionCapabilities(reflect) {
      this._reflect = lang_1.isPresent(reflect) ? reflect : lang_1.global.Reflect;
    }
    ReflectionCapabilities.prototype.isReflectionEnabled = function() {
      return true;
    };
    ReflectionCapabilities.prototype.factory = function(t) {
      switch (t.length) {
        case 0:
          return function() {
            return new t();
          };
        case 1:
          return function(a1) {
            return new t(a1);
          };
        case 2:
          return function(a1, a2) {
            return new t(a1, a2);
          };
        case 3:
          return function(a1, a2, a3) {
            return new t(a1, a2, a3);
          };
        case 4:
          return function(a1, a2, a3, a4) {
            return new t(a1, a2, a3, a4);
          };
        case 5:
          return function(a1, a2, a3, a4, a5) {
            return new t(a1, a2, a3, a4, a5);
          };
        case 6:
          return function(a1, a2, a3, a4, a5, a6) {
            return new t(a1, a2, a3, a4, a5, a6);
          };
        case 7:
          return function(a1, a2, a3, a4, a5, a6, a7) {
            return new t(a1, a2, a3, a4, a5, a6, a7);
          };
        case 8:
          return function(a1, a2, a3, a4, a5, a6, a7, a8) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8);
          };
        case 9:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9);
          };
        case 10:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
          };
        case 11:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
          };
        case 12:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
          };
        case 13:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
          };
        case 14:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
          };
        case 15:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
          };
        case 16:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
          };
        case 17:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
          };
        case 18:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
          };
        case 19:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
          };
        case 20:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
          };
      }
      ;
      throw new Error("Cannot create a factory for '" + lang_1.stringify(t) + "' because its constructor has more than 20 arguments");
    };
    ReflectionCapabilities.prototype._zipTypesAndAnnotaions = function(paramTypes, paramAnnotations) {
      var result;
      if (typeof paramTypes === 'undefined') {
        result = new Array(paramAnnotations.length);
      } else {
        result = new Array(paramTypes.length);
      }
      for (var i = 0; i < result.length; i++) {
        if (typeof paramTypes === 'undefined') {
          result[i] = [];
        } else if (paramTypes[i] != Object) {
          result[i] = [paramTypes[i]];
        } else {
          result[i] = [];
        }
        if (lang_1.isPresent(paramAnnotations) && lang_1.isPresent(paramAnnotations[i])) {
          result[i] = result[i].concat(paramAnnotations[i]);
        }
      }
      return result;
    };
    ReflectionCapabilities.prototype.parameters = function(typeOrFunc) {
      if (lang_1.isPresent(typeOrFunc.parameters)) {
        return typeOrFunc.parameters;
      }
      if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
        var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
        var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
        if (lang_1.isPresent(paramTypes) || lang_1.isPresent(paramAnnotations)) {
          return this._zipTypesAndAnnotaions(paramTypes, paramAnnotations);
        }
      }
      var parameters = new Array(typeOrFunc.length);
      parameters.fill(undefined);
      return parameters;
    };
    ReflectionCapabilities.prototype.annotations = function(typeOrFunc) {
      if (lang_1.isPresent(typeOrFunc.annotations)) {
        var annotations = typeOrFunc.annotations;
        if (lang_1.isFunction(annotations) && annotations.annotations) {
          annotations = annotations.annotations;
        }
        return annotations;
      }
      if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
        var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
        if (lang_1.isPresent(annotations))
          return annotations;
      }
      return [];
    };
    ReflectionCapabilities.prototype.propMetadata = function(typeOrFunc) {
      if (lang_1.isPresent(typeOrFunc.propMetadata)) {
        var propMetadata = typeOrFunc.propMetadata;
        if (lang_1.isFunction(propMetadata) && propMetadata.propMetadata) {
          propMetadata = propMetadata.propMetadata;
        }
        return propMetadata;
      }
      if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
        var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
        if (lang_1.isPresent(propMetadata))
          return propMetadata;
      }
      return {};
    };
    ReflectionCapabilities.prototype.interfaces = function(type) {
      throw new exceptions_1.BaseException("JavaScript does not support interfaces");
    };
    ReflectionCapabilities.prototype.getter = function(name) {
      return new Function('o', 'return o.' + name + ';');
    };
    ReflectionCapabilities.prototype.setter = function(name) {
      return new Function('o', 'v', 'return o.' + name + ' = v;');
    };
    ReflectionCapabilities.prototype.method = function(name) {
      var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
      return new Function('o', 'args', functionBody);
    };
    ReflectionCapabilities.prototype.importUri = function(type) {
      return './';
    };
    return ReflectionCapabilities;
  })();
  exports.ReflectionCapabilities = ReflectionCapabilities;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/di/type_literal", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var TypeLiteral = (function() {
    function TypeLiteral() {}
    Object.defineProperty(TypeLiteral.prototype, "type", {
      get: function() {
        throw new Error("Type literals are only supported in Dart");
      },
      enumerable: true,
      configurable: true
    });
    return TypeLiteral;
  })();
  exports.TypeLiteral = TypeLiteral;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/di/exceptions", ["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/facade/exceptions"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  function findFirstClosedCycle(keys) {
    var res = [];
    for (var i = 0; i < keys.length; ++i) {
      if (collection_1.ListWrapper.contains(res, keys[i])) {
        res.push(keys[i]);
        return res;
      } else {
        res.push(keys[i]);
      }
    }
    return res;
  }
  function constructResolvingPath(keys) {
    if (keys.length > 1) {
      var reversed = findFirstClosedCycle(collection_1.ListWrapper.reversed(keys));
      var tokenStrs = reversed.map(function(k) {
        return lang_1.stringify(k.token);
      });
      return " (" + tokenStrs.join(' -> ') + ")";
    } else {
      return "";
    }
  }
  var AbstractProviderError = (function(_super) {
    __extends(AbstractProviderError, _super);
    function AbstractProviderError(injector, key, constructResolvingMessage) {
      _super.call(this, "DI Exception");
      this.keys = [key];
      this.injectors = [injector];
      this.constructResolvingMessage = constructResolvingMessage;
      this.message = this.constructResolvingMessage(this.keys);
    }
    AbstractProviderError.prototype.addKey = function(injector, key) {
      this.injectors.push(injector);
      this.keys.push(key);
      this.message = this.constructResolvingMessage(this.keys);
    };
    Object.defineProperty(AbstractProviderError.prototype, "context", {
      get: function() {
        return this.injectors[this.injectors.length - 1].debugContext();
      },
      enumerable: true,
      configurable: true
    });
    return AbstractProviderError;
  })(exceptions_1.BaseException);
  exports.AbstractProviderError = AbstractProviderError;
  var NoProviderError = (function(_super) {
    __extends(NoProviderError, _super);
    function NoProviderError(injector, key) {
      _super.call(this, injector, key, function(keys) {
        var first = lang_1.stringify(collection_1.ListWrapper.first(keys).token);
        return "No provider for " + first + "!" + constructResolvingPath(keys);
      });
    }
    return NoProviderError;
  })(AbstractProviderError);
  exports.NoProviderError = NoProviderError;
  var CyclicDependencyError = (function(_super) {
    __extends(CyclicDependencyError, _super);
    function CyclicDependencyError(injector, key) {
      _super.call(this, injector, key, function(keys) {
        return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
      });
    }
    return CyclicDependencyError;
  })(AbstractProviderError);
  exports.CyclicDependencyError = CyclicDependencyError;
  var InstantiationError = (function(_super) {
    __extends(InstantiationError, _super);
    function InstantiationError(injector, originalException, originalStack, key) {
      _super.call(this, "DI Exception", originalException, originalStack, null);
      this.keys = [key];
      this.injectors = [injector];
    }
    InstantiationError.prototype.addKey = function(injector, key) {
      this.injectors.push(injector);
      this.keys.push(key);
    };
    Object.defineProperty(InstantiationError.prototype, "wrapperMessage", {
      get: function() {
        var first = lang_1.stringify(collection_1.ListWrapper.first(this.keys).token);
        return "Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(InstantiationError.prototype, "causeKey", {
      get: function() {
        return this.keys[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(InstantiationError.prototype, "context", {
      get: function() {
        return this.injectors[this.injectors.length - 1].debugContext();
      },
      enumerable: true,
      configurable: true
    });
    return InstantiationError;
  })(exceptions_1.WrappedException);
  exports.InstantiationError = InstantiationError;
  var InvalidProviderError = (function(_super) {
    __extends(InvalidProviderError, _super);
    function InvalidProviderError(provider) {
      _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " + provider.toString());
    }
    return InvalidProviderError;
  })(exceptions_1.BaseException);
  exports.InvalidProviderError = InvalidProviderError;
  var NoAnnotationError = (function(_super) {
    __extends(NoAnnotationError, _super);
    function NoAnnotationError(typeOrFunc, params) {
      _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
    }
    NoAnnotationError._genMessage = function(typeOrFunc, params) {
      var signature = [];
      for (var i = 0,
          ii = params.length; i < ii; i++) {
        var parameter = params[i];
        if (lang_1.isBlank(parameter) || parameter.length == 0) {
          signature.push('?');
        } else {
          signature.push(parameter.map(lang_1.stringify).join(' '));
        }
      }
      return "Cannot resolve all parameters for '" + lang_1.stringify(typeOrFunc) + "'(" + signature.join(', ') + "). " + "Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" + lang_1.stringify(typeOrFunc) + "' is decorated with Injectable.";
    };
    return NoAnnotationError;
  })(exceptions_1.BaseException);
  exports.NoAnnotationError = NoAnnotationError;
  var OutOfBoundsError = (function(_super) {
    __extends(OutOfBoundsError, _super);
    function OutOfBoundsError(index) {
      _super.call(this, "Index " + index + " is out-of-bounds.");
    }
    return OutOfBoundsError;
  })(exceptions_1.BaseException);
  exports.OutOfBoundsError = OutOfBoundsError;
  var MixingMultiProvidersWithRegularProvidersError = (function(_super) {
    __extends(MixingMultiProvidersWithRegularProvidersError, _super);
    function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
      _super.call(this, "Cannot mix multi providers and regular providers, got: " + provider1.toString() + " " + provider2.toString());
    }
    return MixingMultiProvidersWithRegularProvidersError;
  })(exceptions_1.BaseException);
  exports.MixingMultiProvidersWithRegularProvidersError = MixingMultiProvidersWithRegularProvidersError;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/di/opaque_token", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var OpaqueToken = (function() {
    function OpaqueToken(_desc) {
      this._desc = _desc;
    }
    OpaqueToken.prototype.toString = function() {
      return "Token " + this._desc;
    };
    OpaqueToken = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String])], OpaqueToken);
    return OpaqueToken;
  })();
  exports.OpaqueToken = OpaqueToken;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/profile/wtf_impl", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var trace;
  var events;
  function detectWTF() {
    var wtf = lang_1.global['wtf'];
    if (wtf) {
      trace = wtf['trace'];
      if (trace) {
        events = trace['events'];
        return true;
      }
    }
    return false;
  }
  exports.detectWTF = detectWTF;
  function createScope(signature, flags) {
    if (flags === void 0) {
      flags = null;
    }
    return events.createScope(signature, flags);
  }
  exports.createScope = createScope;
  function leave(scope, returnValue) {
    trace.leaveScope(scope, returnValue);
    return returnValue;
  }
  exports.leave = leave;
  function startTimeRange(rangeType, action) {
    return trace.beginTimeRange(rangeType, action);
  }
  exports.startTimeRange = startTimeRange;
  function endTimeRange(range) {
    trace.endTimeRange(range);
  }
  exports.endTimeRange = endTimeRange;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/application_tokens", ["angular2/src/core/di", "angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  exports.APP_COMPONENT_REF_PROMISE = lang_1.CONST_EXPR(new di_1.OpaqueToken('Promise<ComponentRef>'));
  exports.APP_COMPONENT = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppComponent'));
  exports.APP_ID = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppId'));
  function _appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
  }
  exports.APP_ID_RANDOM_PROVIDER = lang_1.CONST_EXPR(new di_1.Provider(exports.APP_ID, {
    useFactory: _appIdRandomProviderFactory,
    deps: []
  }));
  function _randomChar() {
    return lang_1.StringWrapper.fromCharCode(97 + lang_1.Math.floor(lang_1.Math.random() * 25));
  }
  exports.PLATFORM_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Initializer"));
  exports.APP_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Initializer"));
  exports.PACKAGE_ROOT_URL = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Packages Root URL"));
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/testability/testability", ["angular2/src/core/di", "angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/core/zone/ng_zone", "angular2/src/facade/async"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var ng_zone_1 = require("angular2/src/core/zone/ng_zone");
  var async_1 = require("angular2/src/facade/async");
  var Testability = (function() {
    function Testability(_ngZone) {
      this._pendingCount = 0;
      this._didWork = false;
      this._callbacks = [];
      this._isAngularEventPending = false;
      this._watchAngularEvents(_ngZone);
    }
    Testability.prototype._watchAngularEvents = function(_ngZone) {
      var _this = this;
      async_1.ObservableWrapper.subscribe(_ngZone.onTurnStart, function(_) {
        _this._didWork = true;
        _this._isAngularEventPending = true;
      });
      _ngZone.runOutsideAngular(function() {
        async_1.ObservableWrapper.subscribe(_ngZone.onEventDone, function(_) {
          if (!_ngZone.hasPendingTimers) {
            _this._isAngularEventPending = false;
            _this._runCallbacksIfReady();
          }
        });
      });
    };
    Testability.prototype.increasePendingRequestCount = function() {
      this._pendingCount += 1;
      this._didWork = true;
      return this._pendingCount;
    };
    Testability.prototype.decreasePendingRequestCount = function() {
      this._pendingCount -= 1;
      if (this._pendingCount < 0) {
        throw new exceptions_1.BaseException('pending async requests below zero');
      }
      this._runCallbacksIfReady();
      return this._pendingCount;
    };
    Testability.prototype.isStable = function() {
      return this._pendingCount == 0 && !this._isAngularEventPending;
    };
    Testability.prototype._runCallbacksIfReady = function() {
      var _this = this;
      if (!this.isStable()) {
        this._didWork = true;
        return ;
      }
      async_1.PromiseWrapper.resolve(null).then(function(_) {
        while (_this._callbacks.length !== 0) {
          (_this._callbacks.pop())(_this._didWork);
        }
        _this._didWork = false;
      });
    };
    Testability.prototype.whenStable = function(callback) {
      this._callbacks.push(callback);
      this._runCallbacksIfReady();
    };
    Testability.prototype.getPendingRequestCount = function() {
      return this._pendingCount;
    };
    Testability.prototype.isAngularEventPending = function() {
      return this._isAngularEventPending;
    };
    Testability.prototype.findBindings = function(using, provider, exactMatch) {
      return [];
    };
    Testability.prototype.findProviders = function(using, provider, exactMatch) {
      return [];
    };
    Testability = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [ng_zone_1.NgZone])], Testability);
    return Testability;
  })();
  exports.Testability = Testability;
  var TestabilityRegistry = (function() {
    function TestabilityRegistry() {
      this._applications = new collection_1.Map();
      _testabilityGetter.addToWindow(this);
    }
    TestabilityRegistry.prototype.registerApplication = function(token, testability) {
      this._applications.set(token, testability);
    };
    TestabilityRegistry.prototype.getTestability = function(elem) {
      return this._applications.get(elem);
    };
    TestabilityRegistry.prototype.getAllTestabilities = function() {
      return collection_1.MapWrapper.values(this._applications);
    };
    TestabilityRegistry.prototype.findTestabilityInTree = function(elem, findInAncestors) {
      if (findInAncestors === void 0) {
        findInAncestors = true;
      }
      return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
    };
    TestabilityRegistry = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], TestabilityRegistry);
    return TestabilityRegistry;
  })();
  exports.TestabilityRegistry = TestabilityRegistry;
  var _NoopGetTestability = (function() {
    function _NoopGetTestability() {}
    _NoopGetTestability.prototype.addToWindow = function(registry) {};
    _NoopGetTestability.prototype.findTestabilityInTree = function(registry, elem, findInAncestors) {
      return null;
    };
    _NoopGetTestability = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], _NoopGetTestability);
    return _NoopGetTestability;
  })();
  function setTestabilityGetter(getter) {
    _testabilityGetter = getter;
  }
  exports.setTestabilityGetter = setTestabilityGetter;
  var _testabilityGetter = lang_1.CONST_EXPR(new _NoopGetTestability());
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/differs/iterable_differs", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var di_1 = require("angular2/src/core/di");
  var IterableDiffers = (function() {
    function IterableDiffers(factories) {
      this.factories = factories;
    }
    IterableDiffers.create = function(factories, parent) {
      if (lang_1.isPresent(parent)) {
        var copied = collection_1.ListWrapper.clone(parent.factories);
        factories = factories.concat(copied);
        return new IterableDiffers(factories);
      } else {
        return new IterableDiffers(factories);
      }
    };
    IterableDiffers.extend = function(factories) {
      return new di_1.Provider(IterableDiffers, {
        useFactory: function(parent) {
          if (lang_1.isBlank(parent)) {
            throw new exceptions_1.BaseException('Cannot extend IterableDiffers without a parent injector');
          }
          return IterableDiffers.create(factories, parent);
        },
        deps: [[IterableDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
      });
    };
    IterableDiffers.prototype.find = function(iterable) {
      var factory = this.factories.find(function(f) {
        return f.supports(iterable);
      });
      if (lang_1.isPresent(factory)) {
        return factory;
      } else {
        throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + iterable + "'");
      }
    };
    IterableDiffers = __decorate([di_1.Injectable(), lang_1.CONST(), __metadata('design:paramtypes', [Array])], IterableDiffers);
    return IterableDiffers;
  })();
  exports.IterableDiffers = IterableDiffers;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/differs/default_iterable_differ", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var lang_2 = require("angular2/src/facade/lang");
  var DefaultIterableDifferFactory = (function() {
    function DefaultIterableDifferFactory() {}
    DefaultIterableDifferFactory.prototype.supports = function(obj) {
      return collection_1.isListLikeIterable(obj);
    };
    DefaultIterableDifferFactory.prototype.create = function(cdRef) {
      return new DefaultIterableDiffer();
    };
    DefaultIterableDifferFactory = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], DefaultIterableDifferFactory);
    return DefaultIterableDifferFactory;
  })();
  exports.DefaultIterableDifferFactory = DefaultIterableDifferFactory;
  var DefaultIterableDiffer = (function() {
    function DefaultIterableDiffer() {
      this._collection = null;
      this._length = null;
      this._linkedRecords = null;
      this._unlinkedRecords = null;
      this._previousItHead = null;
      this._itHead = null;
      this._itTail = null;
      this._additionsHead = null;
      this._additionsTail = null;
      this._movesHead = null;
      this._movesTail = null;
      this._removalsHead = null;
      this._removalsTail = null;
    }
    Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
      get: function() {
        return this._collection;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
      get: function() {
        return this._length;
      },
      enumerable: true,
      configurable: true
    });
    DefaultIterableDiffer.prototype.forEachItem = function(fn) {
      var record;
      for (record = this._itHead; record !== null; record = record._next) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachPreviousItem = function(fn) {
      var record;
      for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachAddedItem = function(fn) {
      var record;
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachMovedItem = function(fn) {
      var record;
      for (record = this._movesHead; record !== null; record = record._nextMoved) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachRemovedItem = function(fn) {
      var record;
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.diff = function(collection) {
      if (lang_2.isBlank(collection))
        collection = [];
      if (!collection_1.isListLikeIterable(collection)) {
        throw new exceptions_1.BaseException("Error trying to diff '" + collection + "'");
      }
      if (this.check(collection)) {
        return this;
      } else {
        return null;
      }
    };
    DefaultIterableDiffer.prototype.onDestroy = function() {};
    DefaultIterableDiffer.prototype.check = function(collection) {
      var _this = this;
      this._reset();
      var record = this._itHead;
      var mayBeDirty = false;
      var index;
      var item;
      if (lang_2.isArray(collection)) {
        var list = collection;
        this._length = collection.length;
        for (index = 0; index < this._length; index++) {
          item = list[index];
          if (record === null || !lang_2.looseIdentical(record.item, item)) {
            record = this._mismatch(record, item, index);
            mayBeDirty = true;
          } else if (mayBeDirty) {
            record = this._verifyReinsertion(record, item, index);
          }
          record = record._next;
        }
      } else {
        index = 0;
        collection_1.iterateListLike(collection, function(item) {
          if (record === null || !lang_2.looseIdentical(record.item, item)) {
            record = _this._mismatch(record, item, index);
            mayBeDirty = true;
          } else if (mayBeDirty) {
            record = _this._verifyReinsertion(record, item, index);
          }
          record = record._next;
          index++;
        });
        this._length = index;
      }
      this._truncate(record);
      this._collection = collection;
      return this.isDirty;
    };
    Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
      get: function() {
        return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null;
      },
      enumerable: true,
      configurable: true
    });
    DefaultIterableDiffer.prototype._reset = function() {
      if (this.isDirty) {
        var record;
        var nextRecord;
        for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
          record._nextPrevious = record._next;
        }
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
          record.previousIndex = record.currentIndex;
        }
        this._additionsHead = this._additionsTail = null;
        for (record = this._movesHead; record !== null; record = nextRecord) {
          record.previousIndex = record.currentIndex;
          nextRecord = record._nextMoved;
        }
        this._movesHead = this._movesTail = null;
        this._removalsHead = this._removalsTail = null;
      }
    };
    DefaultIterableDiffer.prototype._mismatch = function(record, item, index) {
      var previousRecord;
      if (record === null) {
        previousRecord = this._itTail;
      } else {
        previousRecord = record._prev;
        this._remove(record);
      }
      record = this._linkedRecords === null ? null : this._linkedRecords.get(item, index);
      if (record !== null) {
        this._moveAfter(record, previousRecord, index);
      } else {
        record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(item);
        if (record !== null) {
          this._reinsertAfter(record, previousRecord, index);
        } else {
          record = this._addAfter(new CollectionChangeRecord(item), previousRecord, index);
        }
      }
      return record;
    };
    DefaultIterableDiffer.prototype._verifyReinsertion = function(record, item, index) {
      var reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(item);
      if (reinsertRecord !== null) {
        record = this._reinsertAfter(reinsertRecord, record._prev, index);
      } else if (record.currentIndex != index) {
        record.currentIndex = index;
        this._addToMoves(record, index);
      }
      return record;
    };
    DefaultIterableDiffer.prototype._truncate = function(record) {
      while (record !== null) {
        var nextRecord = record._next;
        this._addToRemovals(this._unlink(record));
        record = nextRecord;
      }
      if (this._unlinkedRecords !== null) {
        this._unlinkedRecords.clear();
      }
      if (this._additionsTail !== null) {
        this._additionsTail._nextAdded = null;
      }
      if (this._movesTail !== null) {
        this._movesTail._nextMoved = null;
      }
      if (this._itTail !== null) {
        this._itTail._next = null;
      }
      if (this._removalsTail !== null) {
        this._removalsTail._nextRemoved = null;
      }
    };
    DefaultIterableDiffer.prototype._reinsertAfter = function(record, prevRecord, index) {
      if (this._unlinkedRecords !== null) {
        this._unlinkedRecords.remove(record);
      }
      var prev = record._prevRemoved;
      var next = record._nextRemoved;
      if (prev === null) {
        this._removalsHead = next;
      } else {
        prev._nextRemoved = next;
      }
      if (next === null) {
        this._removalsTail = prev;
      } else {
        next._prevRemoved = prev;
      }
      this._insertAfter(record, prevRecord, index);
      this._addToMoves(record, index);
      return record;
    };
    DefaultIterableDiffer.prototype._moveAfter = function(record, prevRecord, index) {
      this._unlink(record);
      this._insertAfter(record, prevRecord, index);
      this._addToMoves(record, index);
      return record;
    };
    DefaultIterableDiffer.prototype._addAfter = function(record, prevRecord, index) {
      this._insertAfter(record, prevRecord, index);
      if (this._additionsTail === null) {
        this._additionsTail = this._additionsHead = record;
      } else {
        this._additionsTail = this._additionsTail._nextAdded = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._insertAfter = function(record, prevRecord, index) {
      var next = prevRecord === null ? this._itHead : prevRecord._next;
      record._next = next;
      record._prev = prevRecord;
      if (next === null) {
        this._itTail = record;
      } else {
        next._prev = record;
      }
      if (prevRecord === null) {
        this._itHead = record;
      } else {
        prevRecord._next = record;
      }
      if (this._linkedRecords === null) {
        this._linkedRecords = new _DuplicateMap();
      }
      this._linkedRecords.put(record);
      record.currentIndex = index;
      return record;
    };
    DefaultIterableDiffer.prototype._remove = function(record) {
      return this._addToRemovals(this._unlink(record));
    };
    DefaultIterableDiffer.prototype._unlink = function(record) {
      if (this._linkedRecords !== null) {
        this._linkedRecords.remove(record);
      }
      var prev = record._prev;
      var next = record._next;
      if (prev === null) {
        this._itHead = next;
      } else {
        prev._next = next;
      }
      if (next === null) {
        this._itTail = prev;
      } else {
        next._prev = prev;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._addToMoves = function(record, toIndex) {
      if (record.previousIndex === toIndex) {
        return record;
      }
      if (this._movesTail === null) {
        this._movesTail = this._movesHead = record;
      } else {
        this._movesTail = this._movesTail._nextMoved = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._addToRemovals = function(record) {
      if (this._unlinkedRecords === null) {
        this._unlinkedRecords = new _DuplicateMap();
      }
      this._unlinkedRecords.put(record);
      record.currentIndex = null;
      record._nextRemoved = null;
      if (this._removalsTail === null) {
        this._removalsTail = this._removalsHead = record;
        record._prevRemoved = null;
      } else {
        record._prevRemoved = this._removalsTail;
        this._removalsTail = this._removalsTail._nextRemoved = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype.toString = function() {
      var record;
      var list = [];
      for (record = this._itHead; record !== null; record = record._next) {
        list.push(record);
      }
      var previous = [];
      for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
        previous.push(record);
      }
      var additions = [];
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        additions.push(record);
      }
      var moves = [];
      for (record = this._movesHead; record !== null; record = record._nextMoved) {
        moves.push(record);
      }
      var removals = [];
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        removals.push(record);
      }
      return "collection: " + list.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "moves: " + moves.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n";
    };
    return DefaultIterableDiffer;
  })();
  exports.DefaultIterableDiffer = DefaultIterableDiffer;
  var CollectionChangeRecord = (function() {
    function CollectionChangeRecord(item) {
      this.item = item;
      this.currentIndex = null;
      this.previousIndex = null;
      this._nextPrevious = null;
      this._prev = null;
      this._next = null;
      this._prevDup = null;
      this._nextDup = null;
      this._prevRemoved = null;
      this._nextRemoved = null;
      this._nextAdded = null;
      this._nextMoved = null;
    }
    CollectionChangeRecord.prototype.toString = function() {
      return this.previousIndex === this.currentIndex ? lang_2.stringify(this.item) : lang_2.stringify(this.item) + '[' + lang_2.stringify(this.previousIndex) + '->' + lang_2.stringify(this.currentIndex) + ']';
    };
    return CollectionChangeRecord;
  })();
  exports.CollectionChangeRecord = CollectionChangeRecord;
  var _DuplicateItemRecordList = (function() {
    function _DuplicateItemRecordList() {
      this._head = null;
      this._tail = null;
    }
    _DuplicateItemRecordList.prototype.add = function(record) {
      if (this._head === null) {
        this._head = this._tail = record;
        record._nextDup = null;
        record._prevDup = null;
      } else {
        this._tail._nextDup = record;
        record._prevDup = this._tail;
        record._nextDup = null;
        this._tail = record;
      }
    };
    _DuplicateItemRecordList.prototype.get = function(item, afterIndex) {
      var record;
      for (record = this._head; record !== null; record = record._nextDup) {
        if ((afterIndex === null || afterIndex < record.currentIndex) && lang_2.looseIdentical(record.item, item)) {
          return record;
        }
      }
      return null;
    };
    _DuplicateItemRecordList.prototype.remove = function(record) {
      var prev = record._prevDup;
      var next = record._nextDup;
      if (prev === null) {
        this._head = next;
      } else {
        prev._nextDup = next;
      }
      if (next === null) {
        this._tail = prev;
      } else {
        next._prevDup = prev;
      }
      return this._head === null;
    };
    return _DuplicateItemRecordList;
  })();
  var _DuplicateMap = (function() {
    function _DuplicateMap() {
      this.map = new Map();
    }
    _DuplicateMap.prototype.put = function(record) {
      var key = lang_2.getMapKey(record.item);
      var duplicates = this.map.get(key);
      if (!lang_2.isPresent(duplicates)) {
        duplicates = new _DuplicateItemRecordList();
        this.map.set(key, duplicates);
      }
      duplicates.add(record);
    };
    _DuplicateMap.prototype.get = function(value, afterIndex) {
      if (afterIndex === void 0) {
        afterIndex = null;
      }
      var key = lang_2.getMapKey(value);
      var recordList = this.map.get(key);
      return lang_2.isBlank(recordList) ? null : recordList.get(value, afterIndex);
    };
    _DuplicateMap.prototype.remove = function(record) {
      var key = lang_2.getMapKey(record.item);
      var recordList = this.map.get(key);
      if (recordList.remove(record)) {
        this.map.delete(key);
      }
      return record;
    };
    Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
      get: function() {
        return this.map.size === 0;
      },
      enumerable: true,
      configurable: true
    });
    _DuplicateMap.prototype.clear = function() {
      this.map.clear();
    };
    _DuplicateMap.prototype.toString = function() {
      return '_DuplicateMap(' + lang_2.stringify(this.map) + ')';
    };
    return _DuplicateMap;
  })();
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/differs/keyvalue_differs", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var di_1 = require("angular2/src/core/di");
  var KeyValueDiffers = (function() {
    function KeyValueDiffers(factories) {
      this.factories = factories;
    }
    KeyValueDiffers.create = function(factories, parent) {
      if (lang_1.isPresent(parent)) {
        var copied = collection_1.ListWrapper.clone(parent.factories);
        factories = factories.concat(copied);
        return new KeyValueDiffers(factories);
      } else {
        return new KeyValueDiffers(factories);
      }
    };
    KeyValueDiffers.extend = function(factories) {
      return new di_1.Provider(KeyValueDiffers, {
        useFactory: function(parent) {
          if (lang_1.isBlank(parent)) {
            throw new exceptions_1.BaseException('Cannot extend KeyValueDiffers without a parent injector');
          }
          return KeyValueDiffers.create(factories, parent);
        },
        deps: [[KeyValueDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
      });
    };
    KeyValueDiffers.prototype.find = function(kv) {
      var factory = this.factories.find(function(f) {
        return f.supports(kv);
      });
      if (lang_1.isPresent(factory)) {
        return factory;
      } else {
        throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + kv + "'");
      }
    };
    KeyValueDiffers = __decorate([di_1.Injectable(), lang_1.CONST(), __metadata('design:paramtypes', [Array])], KeyValueDiffers);
    return KeyValueDiffers;
  })();
  exports.KeyValueDiffers = KeyValueDiffers;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/differs/default_keyvalue_differ", ["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/facade/exceptions"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var DefaultKeyValueDifferFactory = (function() {
    function DefaultKeyValueDifferFactory() {}
    DefaultKeyValueDifferFactory.prototype.supports = function(obj) {
      return obj instanceof Map || lang_1.isJsObject(obj);
    };
    DefaultKeyValueDifferFactory.prototype.create = function(cdRef) {
      return new DefaultKeyValueDiffer();
    };
    DefaultKeyValueDifferFactory = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], DefaultKeyValueDifferFactory);
    return DefaultKeyValueDifferFactory;
  })();
  exports.DefaultKeyValueDifferFactory = DefaultKeyValueDifferFactory;
  var DefaultKeyValueDiffer = (function() {
    function DefaultKeyValueDiffer() {
      this._records = new Map();
      this._mapHead = null;
      this._previousMapHead = null;
      this._changesHead = null;
      this._changesTail = null;
      this._additionsHead = null;
      this._additionsTail = null;
      this._removalsHead = null;
      this._removalsTail = null;
    }
    Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
      get: function() {
        return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null;
      },
      enumerable: true,
      configurable: true
    });
    DefaultKeyValueDiffer.prototype.forEachItem = function(fn) {
      var record;
      for (record = this._mapHead; record !== null; record = record._next) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachPreviousItem = function(fn) {
      var record;
      for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachChangedItem = function(fn) {
      var record;
      for (record = this._changesHead; record !== null; record = record._nextChanged) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachAddedItem = function(fn) {
      var record;
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachRemovedItem = function(fn) {
      var record;
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.diff = function(map) {
      if (lang_1.isBlank(map))
        map = collection_1.MapWrapper.createFromPairs([]);
      if (!(map instanceof Map || lang_1.isJsObject(map))) {
        throw new exceptions_1.BaseException("Error trying to diff '" + map + "'");
      }
      if (this.check(map)) {
        return this;
      } else {
        return null;
      }
    };
    DefaultKeyValueDiffer.prototype.onDestroy = function() {};
    DefaultKeyValueDiffer.prototype.check = function(map) {
      var _this = this;
      this._reset();
      var records = this._records;
      var oldSeqRecord = this._mapHead;
      var lastOldSeqRecord = null;
      var lastNewSeqRecord = null;
      var seqChanged = false;
      this._forEach(map, function(value, key) {
        var newSeqRecord;
        if (oldSeqRecord !== null && key === oldSeqRecord.key) {
          newSeqRecord = oldSeqRecord;
          if (!lang_1.looseIdentical(value, oldSeqRecord.currentValue)) {
            oldSeqRecord.previousValue = oldSeqRecord.currentValue;
            oldSeqRecord.currentValue = value;
            _this._addToChanges(oldSeqRecord);
          }
        } else {
          seqChanged = true;
          if (oldSeqRecord !== null) {
            oldSeqRecord._next = null;
            _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
            _this._addToRemovals(oldSeqRecord);
          }
          if (records.has(key)) {
            newSeqRecord = records.get(key);
          } else {
            newSeqRecord = new KVChangeRecord(key);
            records.set(key, newSeqRecord);
            newSeqRecord.currentValue = value;
            _this._addToAdditions(newSeqRecord);
          }
        }
        if (seqChanged) {
          if (_this._isInRemovals(newSeqRecord)) {
            _this._removeFromRemovals(newSeqRecord);
          }
          if (lastNewSeqRecord == null) {
            _this._mapHead = newSeqRecord;
          } else {
            lastNewSeqRecord._next = newSeqRecord;
          }
        }
        lastOldSeqRecord = oldSeqRecord;
        lastNewSeqRecord = newSeqRecord;
        oldSeqRecord = oldSeqRecord === null ? null : oldSeqRecord._next;
      });
      this._truncate(lastOldSeqRecord, oldSeqRecord);
      return this.isDirty;
    };
    DefaultKeyValueDiffer.prototype._reset = function() {
      if (this.isDirty) {
        var record;
        for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
          record._nextPrevious = record._next;
        }
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
          record.previousValue = record.currentValue;
        }
        for (record = this._additionsHead; record != null; record = record._nextAdded) {
          record.previousValue = record.currentValue;
        }
        this._changesHead = this._changesTail = null;
        this._additionsHead = this._additionsTail = null;
        this._removalsHead = this._removalsTail = null;
      }
    };
    DefaultKeyValueDiffer.prototype._truncate = function(lastRecord, record) {
      while (record !== null) {
        if (lastRecord === null) {
          this._mapHead = null;
        } else {
          lastRecord._next = null;
        }
        var nextRecord = record._next;
        this._addToRemovals(record);
        lastRecord = record;
        record = nextRecord;
      }
      for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
        rec.previousValue = rec.currentValue;
        rec.currentValue = null;
        this._records.delete(rec.key);
      }
    };
    DefaultKeyValueDiffer.prototype._isInRemovals = function(record) {
      return record === this._removalsHead || record._nextRemoved !== null || record._prevRemoved !== null;
    };
    DefaultKeyValueDiffer.prototype._addToRemovals = function(record) {
      if (this._removalsHead === null) {
        this._removalsHead = this._removalsTail = record;
      } else {
        this._removalsTail._nextRemoved = record;
        record._prevRemoved = this._removalsTail;
        this._removalsTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype._removeFromSeq = function(prev, record) {
      var next = record._next;
      if (prev === null) {
        this._mapHead = next;
      } else {
        prev._next = next;
      }
    };
    DefaultKeyValueDiffer.prototype._removeFromRemovals = function(record) {
      var prev = record._prevRemoved;
      var next = record._nextRemoved;
      if (prev === null) {
        this._removalsHead = next;
      } else {
        prev._nextRemoved = next;
      }
      if (next === null) {
        this._removalsTail = prev;
      } else {
        next._prevRemoved = prev;
      }
      record._prevRemoved = record._nextRemoved = null;
    };
    DefaultKeyValueDiffer.prototype._addToAdditions = function(record) {
      if (this._additionsHead === null) {
        this._additionsHead = this._additionsTail = record;
      } else {
        this._additionsTail._nextAdded = record;
        this._additionsTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype._addToChanges = function(record) {
      if (this._changesHead === null) {
        this._changesHead = this._changesTail = record;
      } else {
        this._changesTail._nextChanged = record;
        this._changesTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype.toString = function() {
      var items = [];
      var previous = [];
      var changes = [];
      var additions = [];
      var removals = [];
      var record;
      for (record = this._mapHead; record !== null; record = record._next) {
        items.push(lang_1.stringify(record));
      }
      for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
        previous.push(lang_1.stringify(record));
      }
      for (record = this._changesHead; record !== null; record = record._nextChanged) {
        changes.push(lang_1.stringify(record));
      }
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        additions.push(lang_1.stringify(record));
      }
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        removals.push(lang_1.stringify(record));
      }
      return "map: " + items.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "changes: " + changes.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n";
    };
    DefaultKeyValueDiffer.prototype._forEach = function(obj, fn) {
      if (obj instanceof Map) {
        obj.forEach(fn);
      } else {
        collection_1.StringMapWrapper.forEach(obj, fn);
      }
    };
    return DefaultKeyValueDiffer;
  })();
  exports.DefaultKeyValueDiffer = DefaultKeyValueDiffer;
  var KVChangeRecord = (function() {
    function KVChangeRecord(key) {
      this.key = key;
      this.previousValue = null;
      this.currentValue = null;
      this._nextPrevious = null;
      this._next = null;
      this._nextAdded = null;
      this._nextRemoved = null;
      this._prevRemoved = null;
      this._nextChanged = null;
    }
    KVChangeRecord.prototype.toString = function() {
      return lang_1.looseIdentical(this.previousValue, this.currentValue) ? lang_1.stringify(this.key) : (lang_1.stringify(this.key) + '[' + lang_1.stringify(this.previousValue) + '->' + lang_1.stringify(this.currentValue) + ']');
    };
    return KVChangeRecord;
  })();
  exports.KVChangeRecord = KVChangeRecord;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/parser/ast", ["angular2/src/facade/collection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var collection_1 = require("angular2/src/facade/collection");
  var AST = (function() {
    function AST() {}
    AST.prototype.visit = function(visitor) {
      return null;
    };
    AST.prototype.toString = function() {
      return "AST";
    };
    return AST;
  })();
  exports.AST = AST;
  var Quote = (function(_super) {
    __extends(Quote, _super);
    function Quote(prefix, uninterpretedExpression, location) {
      _super.call(this);
      this.prefix = prefix;
      this.uninterpretedExpression = uninterpretedExpression;
      this.location = location;
    }
    Quote.prototype.visit = function(visitor) {
      return visitor.visitQuote(this);
    };
    Quote.prototype.toString = function() {
      return "Quote";
    };
    return Quote;
  })(AST);
  exports.Quote = Quote;
  var EmptyExpr = (function(_super) {
    __extends(EmptyExpr, _super);
    function EmptyExpr() {
      _super.apply(this, arguments);
    }
    EmptyExpr.prototype.visit = function(visitor) {};
    return EmptyExpr;
  })(AST);
  exports.EmptyExpr = EmptyExpr;
  var ImplicitReceiver = (function(_super) {
    __extends(ImplicitReceiver, _super);
    function ImplicitReceiver() {
      _super.apply(this, arguments);
    }
    ImplicitReceiver.prototype.visit = function(visitor) {
      return visitor.visitImplicitReceiver(this);
    };
    return ImplicitReceiver;
  })(AST);
  exports.ImplicitReceiver = ImplicitReceiver;
  var Chain = (function(_super) {
    __extends(Chain, _super);
    function Chain(expressions) {
      _super.call(this);
      this.expressions = expressions;
    }
    Chain.prototype.visit = function(visitor) {
      return visitor.visitChain(this);
    };
    return Chain;
  })(AST);
  exports.Chain = Chain;
  var Conditional = (function(_super) {
    __extends(Conditional, _super);
    function Conditional(condition, trueExp, falseExp) {
      _super.call(this);
      this.condition = condition;
      this.trueExp = trueExp;
      this.falseExp = falseExp;
    }
    Conditional.prototype.visit = function(visitor) {
      return visitor.visitConditional(this);
    };
    return Conditional;
  })(AST);
  exports.Conditional = Conditional;
  var PropertyRead = (function(_super) {
    __extends(PropertyRead, _super);
    function PropertyRead(receiver, name, getter) {
      _super.call(this);
      this.receiver = receiver;
      this.name = name;
      this.getter = getter;
    }
    PropertyRead.prototype.visit = function(visitor) {
      return visitor.visitPropertyRead(this);
    };
    return PropertyRead;
  })(AST);
  exports.PropertyRead = PropertyRead;
  var PropertyWrite = (function(_super) {
    __extends(PropertyWrite, _super);
    function PropertyWrite(receiver, name, setter, value) {
      _super.call(this);
      this.receiver = receiver;
      this.name = name;
      this.setter = setter;
      this.value = value;
    }
    PropertyWrite.prototype.visit = function(visitor) {
      return visitor.visitPropertyWrite(this);
    };
    return PropertyWrite;
  })(AST);
  exports.PropertyWrite = PropertyWrite;
  var SafePropertyRead = (function(_super) {
    __extends(SafePropertyRead, _super);
    function SafePropertyRead(receiver, name, getter) {
      _super.call(this);
      this.receiver = receiver;
      this.name = name;
      this.getter = getter;
    }
    SafePropertyRead.prototype.visit = function(visitor) {
      return visitor.visitSafePropertyRead(this);
    };
    return SafePropertyRead;
  })(AST);
  exports.SafePropertyRead = SafePropertyRead;
  var KeyedRead = (function(_super) {
    __extends(KeyedRead, _super);
    function KeyedRead(obj, key) {
      _super.call(this);
      this.obj = obj;
      this.key = key;
    }
    KeyedRead.prototype.visit = function(visitor) {
      return visitor.visitKeyedRead(this);
    };
    return KeyedRead;
  })(AST);
  exports.KeyedRead = KeyedRead;
  var KeyedWrite = (function(_super) {
    __extends(KeyedWrite, _super);
    function KeyedWrite(obj, key, value) {
      _super.call(this);
      this.obj = obj;
      this.key = key;
      this.value = value;
    }
    KeyedWrite.prototype.visit = function(visitor) {
      return visitor.visitKeyedWrite(this);
    };
    return KeyedWrite;
  })(AST);
  exports.KeyedWrite = KeyedWrite;
  var BindingPipe = (function(_super) {
    __extends(BindingPipe, _super);
    function BindingPipe(exp, name, args) {
      _super.call(this);
      this.exp = exp;
      this.name = name;
      this.args = args;
    }
    BindingPipe.prototype.visit = function(visitor) {
      return visitor.visitPipe(this);
    };
    return BindingPipe;
  })(AST);
  exports.BindingPipe = BindingPipe;
  var LiteralPrimitive = (function(_super) {
    __extends(LiteralPrimitive, _super);
    function LiteralPrimitive(value) {
      _super.call(this);
      this.value = value;
    }
    LiteralPrimitive.prototype.visit = function(visitor) {
      return visitor.visitLiteralPrimitive(this);
    };
    return LiteralPrimitive;
  })(AST);
  exports.LiteralPrimitive = LiteralPrimitive;
  var LiteralArray = (function(_super) {
    __extends(LiteralArray, _super);
    function LiteralArray(expressions) {
      _super.call(this);
      this.expressions = expressions;
    }
    LiteralArray.prototype.visit = function(visitor) {
      return visitor.visitLiteralArray(this);
    };
    return LiteralArray;
  })(AST);
  exports.LiteralArray = LiteralArray;
  var LiteralMap = (function(_super) {
    __extends(LiteralMap, _super);
    function LiteralMap(keys, values) {
      _super.call(this);
      this.keys = keys;
      this.values = values;
    }
    LiteralMap.prototype.visit = function(visitor) {
      return visitor.visitLiteralMap(this);
    };
    return LiteralMap;
  })(AST);
  exports.LiteralMap = LiteralMap;
  var Interpolation = (function(_super) {
    __extends(Interpolation, _super);
    function Interpolation(strings, expressions) {
      _super.call(this);
      this.strings = strings;
      this.expressions = expressions;
    }
    Interpolation.prototype.visit = function(visitor) {
      return visitor.visitInterpolation(this);
    };
    return Interpolation;
  })(AST);
  exports.Interpolation = Interpolation;
  var Binary = (function(_super) {
    __extends(Binary, _super);
    function Binary(operation, left, right) {
      _super.call(this);
      this.operation = operation;
      this.left = left;
      this.right = right;
    }
    Binary.prototype.visit = function(visitor) {
      return visitor.visitBinary(this);
    };
    return Binary;
  })(AST);
  exports.Binary = Binary;
  var PrefixNot = (function(_super) {
    __extends(PrefixNot, _super);
    function PrefixNot(expression) {
      _super.call(this);
      this.expression = expression;
    }
    PrefixNot.prototype.visit = function(visitor) {
      return visitor.visitPrefixNot(this);
    };
    return PrefixNot;
  })(AST);
  exports.PrefixNot = PrefixNot;
  var MethodCall = (function(_super) {
    __extends(MethodCall, _super);
    function MethodCall(receiver, name, fn, args) {
      _super.call(this);
      this.receiver = receiver;
      this.name = name;
      this.fn = fn;
      this.args = args;
    }
    MethodCall.prototype.visit = function(visitor) {
      return visitor.visitMethodCall(this);
    };
    return MethodCall;
  })(AST);
  exports.MethodCall = MethodCall;
  var SafeMethodCall = (function(_super) {
    __extends(SafeMethodCall, _super);
    function SafeMethodCall(receiver, name, fn, args) {
      _super.call(this);
      this.receiver = receiver;
      this.name = name;
      this.fn = fn;
      this.args = args;
    }
    SafeMethodCall.prototype.visit = function(visitor) {
      return visitor.visitSafeMethodCall(this);
    };
    return SafeMethodCall;
  })(AST);
  exports.SafeMethodCall = SafeMethodCall;
  var FunctionCall = (function(_super) {
    __extends(FunctionCall, _super);
    function FunctionCall(target, args) {
      _super.call(this);
      this.target = target;
      this.args = args;
    }
    FunctionCall.prototype.visit = function(visitor) {
      return visitor.visitFunctionCall(this);
    };
    return FunctionCall;
  })(AST);
  exports.FunctionCall = FunctionCall;
  var ASTWithSource = (function(_super) {
    __extends(ASTWithSource, _super);
    function ASTWithSource(ast, source, location) {
      _super.call(this);
      this.ast = ast;
      this.source = source;
      this.location = location;
    }
    ASTWithSource.prototype.visit = function(visitor) {
      return this.ast.visit(visitor);
    };
    ASTWithSource.prototype.toString = function() {
      return this.source + " in " + this.location;
    };
    return ASTWithSource;
  })(AST);
  exports.ASTWithSource = ASTWithSource;
  var TemplateBinding = (function() {
    function TemplateBinding(key, keyIsVar, name, expression) {
      this.key = key;
      this.keyIsVar = keyIsVar;
      this.name = name;
      this.expression = expression;
    }
    return TemplateBinding;
  })();
  exports.TemplateBinding = TemplateBinding;
  var RecursiveAstVisitor = (function() {
    function RecursiveAstVisitor() {}
    RecursiveAstVisitor.prototype.visitBinary = function(ast) {
      ast.left.visit(this);
      ast.right.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitChain = function(ast) {
      return this.visitAll(ast.expressions);
    };
    RecursiveAstVisitor.prototype.visitConditional = function(ast) {
      ast.condition.visit(this);
      ast.trueExp.visit(this);
      ast.falseExp.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitPipe = function(ast) {
      ast.exp.visit(this);
      this.visitAll(ast.args);
      return null;
    };
    RecursiveAstVisitor.prototype.visitFunctionCall = function(ast) {
      ast.target.visit(this);
      this.visitAll(ast.args);
      return null;
    };
    RecursiveAstVisitor.prototype.visitImplicitReceiver = function(ast) {
      return null;
    };
    RecursiveAstVisitor.prototype.visitInterpolation = function(ast) {
      return this.visitAll(ast.expressions);
    };
    RecursiveAstVisitor.prototype.visitKeyedRead = function(ast) {
      ast.obj.visit(this);
      ast.key.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitKeyedWrite = function(ast) {
      ast.obj.visit(this);
      ast.key.visit(this);
      ast.value.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitLiteralArray = function(ast) {
      return this.visitAll(ast.expressions);
    };
    RecursiveAstVisitor.prototype.visitLiteralMap = function(ast) {
      return this.visitAll(ast.values);
    };
    RecursiveAstVisitor.prototype.visitLiteralPrimitive = function(ast) {
      return null;
    };
    RecursiveAstVisitor.prototype.visitMethodCall = function(ast) {
      ast.receiver.visit(this);
      return this.visitAll(ast.args);
    };
    RecursiveAstVisitor.prototype.visitPrefixNot = function(ast) {
      ast.expression.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitPropertyRead = function(ast) {
      ast.receiver.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitPropertyWrite = function(ast) {
      ast.receiver.visit(this);
      ast.value.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitSafePropertyRead = function(ast) {
      ast.receiver.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitSafeMethodCall = function(ast) {
      ast.receiver.visit(this);
      return this.visitAll(ast.args);
    };
    RecursiveAstVisitor.prototype.visitAll = function(asts) {
      var _this = this;
      asts.forEach(function(ast) {
        return ast.visit(_this);
      });
      return null;
    };
    RecursiveAstVisitor.prototype.visitQuote = function(ast) {
      return null;
    };
    return RecursiveAstVisitor;
  })();
  exports.RecursiveAstVisitor = RecursiveAstVisitor;
  var AstTransformer = (function() {
    function AstTransformer() {}
    AstTransformer.prototype.visitImplicitReceiver = function(ast) {
      return ast;
    };
    AstTransformer.prototype.visitInterpolation = function(ast) {
      return new Interpolation(ast.strings, this.visitAll(ast.expressions));
    };
    AstTransformer.prototype.visitLiteralPrimitive = function(ast) {
      return new LiteralPrimitive(ast.value);
    };
    AstTransformer.prototype.visitPropertyRead = function(ast) {
      return new PropertyRead(ast.receiver.visit(this), ast.name, ast.getter);
    };
    AstTransformer.prototype.visitPropertyWrite = function(ast) {
      return new PropertyWrite(ast.receiver.visit(this), ast.name, ast.setter, ast.value);
    };
    AstTransformer.prototype.visitSafePropertyRead = function(ast) {
      return new SafePropertyRead(ast.receiver.visit(this), ast.name, ast.getter);
    };
    AstTransformer.prototype.visitMethodCall = function(ast) {
      return new MethodCall(ast.receiver.visit(this), ast.name, ast.fn, this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitSafeMethodCall = function(ast) {
      return new SafeMethodCall(ast.receiver.visit(this), ast.name, ast.fn, this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitFunctionCall = function(ast) {
      return new FunctionCall(ast.target.visit(this), this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitLiteralArray = function(ast) {
      return new LiteralArray(this.visitAll(ast.expressions));
    };
    AstTransformer.prototype.visitLiteralMap = function(ast) {
      return new LiteralMap(ast.keys, this.visitAll(ast.values));
    };
    AstTransformer.prototype.visitBinary = function(ast) {
      return new Binary(ast.operation, ast.left.visit(this), ast.right.visit(this));
    };
    AstTransformer.prototype.visitPrefixNot = function(ast) {
      return new PrefixNot(ast.expression.visit(this));
    };
    AstTransformer.prototype.visitConditional = function(ast) {
      return new Conditional(ast.condition.visit(this), ast.trueExp.visit(this), ast.falseExp.visit(this));
    };
    AstTransformer.prototype.visitPipe = function(ast) {
      return new BindingPipe(ast.exp.visit(this), ast.name, this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitKeyedRead = function(ast) {
      return new KeyedRead(ast.obj.visit(this), ast.key.visit(this));
    };
    AstTransformer.prototype.visitKeyedWrite = function(ast) {
      return new KeyedWrite(ast.obj.visit(this), ast.key.visit(this), ast.value.visit(this));
    };
    AstTransformer.prototype.visitAll = function(asts) {
      var res = collection_1.ListWrapper.createFixedSize(asts.length);
      for (var i = 0; i < asts.length; ++i) {
        res[i] = asts[i].visit(this);
      }
      return res;
    };
    AstTransformer.prototype.visitChain = function(ast) {
      return new Chain(this.visitAll(ast.expressions));
    };
    AstTransformer.prototype.visitQuote = function(ast) {
      return new Quote(ast.prefix, ast.uninterpretedExpression, ast.location);
    };
    return AstTransformer;
  })();
  exports.AstTransformer = AstTransformer;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/parser/lexer", ["angular2/src/core/di/decorators", "angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/facade/exceptions"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var decorators_1 = require("angular2/src/core/di/decorators");
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  (function(TokenType) {
    TokenType[TokenType["Character"] = 0] = "Character";
    TokenType[TokenType["Identifier"] = 1] = "Identifier";
    TokenType[TokenType["Keyword"] = 2] = "Keyword";
    TokenType[TokenType["String"] = 3] = "String";
    TokenType[TokenType["Operator"] = 4] = "Operator";
    TokenType[TokenType["Number"] = 5] = "Number";
  })(exports.TokenType || (exports.TokenType = {}));
  var TokenType = exports.TokenType;
  var Lexer = (function() {
    function Lexer() {}
    Lexer.prototype.tokenize = function(text) {
      var scanner = new _Scanner(text);
      var tokens = [];
      var token = scanner.scanToken();
      while (token != null) {
        tokens.push(token);
        token = scanner.scanToken();
      }
      return tokens;
    };
    Lexer = __decorate([decorators_1.Injectable(), __metadata('design:paramtypes', [])], Lexer);
    return Lexer;
  })();
  exports.Lexer = Lexer;
  var Token = (function() {
    function Token(index, type, numValue, strValue) {
      this.index = index;
      this.type = type;
      this.numValue = numValue;
      this.strValue = strValue;
    }
    Token.prototype.isCharacter = function(code) {
      return (this.type == TokenType.Character && this.numValue == code);
    };
    Token.prototype.isNumber = function() {
      return (this.type == TokenType.Number);
    };
    Token.prototype.isString = function() {
      return (this.type == TokenType.String);
    };
    Token.prototype.isOperator = function(operater) {
      return (this.type == TokenType.Operator && this.strValue == operater);
    };
    Token.prototype.isIdentifier = function() {
      return (this.type == TokenType.Identifier);
    };
    Token.prototype.isKeyword = function() {
      return (this.type == TokenType.Keyword);
    };
    Token.prototype.isKeywordVar = function() {
      return (this.type == TokenType.Keyword && this.strValue == "var");
    };
    Token.prototype.isKeywordNull = function() {
      return (this.type == TokenType.Keyword && this.strValue == "null");
    };
    Token.prototype.isKeywordUndefined = function() {
      return (this.type == TokenType.Keyword && this.strValue == "undefined");
    };
    Token.prototype.isKeywordTrue = function() {
      return (this.type == TokenType.Keyword && this.strValue == "true");
    };
    Token.prototype.isKeywordFalse = function() {
      return (this.type == TokenType.Keyword && this.strValue == "false");
    };
    Token.prototype.toNumber = function() {
      return (this.type == TokenType.Number) ? this.numValue : -1;
    };
    Token.prototype.toString = function() {
      switch (this.type) {
        case TokenType.Character:
        case TokenType.Identifier:
        case TokenType.Keyword:
        case TokenType.Operator:
        case TokenType.String:
          return this.strValue;
        case TokenType.Number:
          return this.numValue.toString();
        default:
          return null;
      }
    };
    return Token;
  })();
  exports.Token = Token;
  function newCharacterToken(index, code) {
    return new Token(index, TokenType.Character, code, lang_1.StringWrapper.fromCharCode(code));
  }
  function newIdentifierToken(index, text) {
    return new Token(index, TokenType.Identifier, 0, text);
  }
  function newKeywordToken(index, text) {
    return new Token(index, TokenType.Keyword, 0, text);
  }
  function newOperatorToken(index, text) {
    return new Token(index, TokenType.Operator, 0, text);
  }
  function newStringToken(index, text) {
    return new Token(index, TokenType.String, 0, text);
  }
  function newNumberToken(index, n) {
    return new Token(index, TokenType.Number, n, "");
  }
  exports.EOF = new Token(-1, TokenType.Character, 0, "");
  exports.$EOF = 0;
  exports.$TAB = 9;
  exports.$LF = 10;
  exports.$VTAB = 11;
  exports.$FF = 12;
  exports.$CR = 13;
  exports.$SPACE = 32;
  exports.$BANG = 33;
  exports.$DQ = 34;
  exports.$HASH = 35;
  exports.$$ = 36;
  exports.$PERCENT = 37;
  exports.$AMPERSAND = 38;
  exports.$SQ = 39;
  exports.$LPAREN = 40;
  exports.$RPAREN = 41;
  exports.$STAR = 42;
  exports.$PLUS = 43;
  exports.$COMMA = 44;
  exports.$MINUS = 45;
  exports.$PERIOD = 46;
  exports.$SLASH = 47;
  exports.$COLON = 58;
  exports.$SEMICOLON = 59;
  exports.$LT = 60;
  exports.$EQ = 61;
  exports.$GT = 62;
  exports.$QUESTION = 63;
  var $0 = 48;
  var $9 = 57;
  var $A = 65,
      $E = 69,
      $Z = 90;
  exports.$LBRACKET = 91;
  exports.$BACKSLASH = 92;
  exports.$RBRACKET = 93;
  var $CARET = 94;
  var $_ = 95;
  var $a = 97,
      $e = 101,
      $f = 102,
      $n = 110,
      $r = 114,
      $t = 116,
      $u = 117,
      $v = 118,
      $z = 122;
  exports.$LBRACE = 123;
  exports.$BAR = 124;
  exports.$RBRACE = 125;
  var $NBSP = 160;
  var ScannerError = (function(_super) {
    __extends(ScannerError, _super);
    function ScannerError(message) {
      _super.call(this);
      this.message = message;
    }
    ScannerError.prototype.toString = function() {
      return this.message;
    };
    return ScannerError;
  })(exceptions_1.BaseException);
  exports.ScannerError = ScannerError;
  var _Scanner = (function() {
    function _Scanner(input) {
      this.input = input;
      this.peek = 0;
      this.index = -1;
      this.length = input.length;
      this.advance();
    }
    _Scanner.prototype.advance = function() {
      this.peek = ++this.index >= this.length ? exports.$EOF : lang_1.StringWrapper.charCodeAt(this.input, this.index);
    };
    _Scanner.prototype.scanToken = function() {
      var input = this.input,
          length = this.length,
          peek = this.peek,
          index = this.index;
      while (peek <= exports.$SPACE) {
        if (++index >= length) {
          peek = exports.$EOF;
          break;
        } else {
          peek = lang_1.StringWrapper.charCodeAt(input, index);
        }
      }
      this.peek = peek;
      this.index = index;
      if (index >= length) {
        return null;
      }
      if (isIdentifierStart(peek))
        return this.scanIdentifier();
      if (isDigit(peek))
        return this.scanNumber(index);
      var start = index;
      switch (peek) {
        case exports.$PERIOD:
          this.advance();
          return isDigit(this.peek) ? this.scanNumber(start) : newCharacterToken(start, exports.$PERIOD);
        case exports.$LPAREN:
        case exports.$RPAREN:
        case exports.$LBRACE:
        case exports.$RBRACE:
        case exports.$LBRACKET:
        case exports.$RBRACKET:
        case exports.$COMMA:
        case exports.$COLON:
        case exports.$SEMICOLON:
          return this.scanCharacter(start, peek);
        case exports.$SQ:
        case exports.$DQ:
          return this.scanString();
        case exports.$HASH:
        case exports.$PLUS:
        case exports.$MINUS:
        case exports.$STAR:
        case exports.$SLASH:
        case exports.$PERCENT:
        case $CARET:
          return this.scanOperator(start, lang_1.StringWrapper.fromCharCode(peek));
        case exports.$QUESTION:
          return this.scanComplexOperator(start, '?', exports.$PERIOD, '.');
        case exports.$LT:
        case exports.$GT:
          return this.scanComplexOperator(start, lang_1.StringWrapper.fromCharCode(peek), exports.$EQ, '=');
        case exports.$BANG:
        case exports.$EQ:
          return this.scanComplexOperator(start, lang_1.StringWrapper.fromCharCode(peek), exports.$EQ, '=', exports.$EQ, '=');
        case exports.$AMPERSAND:
          return this.scanComplexOperator(start, '&', exports.$AMPERSAND, '&');
        case exports.$BAR:
          return this.scanComplexOperator(start, '|', exports.$BAR, '|');
        case $NBSP:
          while (isWhitespace(this.peek))
            this.advance();
          return this.scanToken();
      }
      this.error("Unexpected character [" + lang_1.StringWrapper.fromCharCode(peek) + "]", 0);
      return null;
    };
    _Scanner.prototype.scanCharacter = function(start, code) {
      assert(this.peek == code);
      this.advance();
      return newCharacterToken(start, code);
    };
    _Scanner.prototype.scanOperator = function(start, str) {
      assert(this.peek == lang_1.StringWrapper.charCodeAt(str, 0));
      assert(collection_1.SetWrapper.has(OPERATORS, str));
      this.advance();
      return newOperatorToken(start, str);
    };
    _Scanner.prototype.scanComplexOperator = function(start, one, twoCode, two, threeCode, three) {
      assert(this.peek == lang_1.StringWrapper.charCodeAt(one, 0));
      this.advance();
      var str = one;
      if (this.peek == twoCode) {
        this.advance();
        str += two;
      }
      if (lang_1.isPresent(threeCode) && this.peek == threeCode) {
        this.advance();
        str += three;
      }
      assert(collection_1.SetWrapper.has(OPERATORS, str));
      return newOperatorToken(start, str);
    };
    _Scanner.prototype.scanIdentifier = function() {
      assert(isIdentifierStart(this.peek));
      var start = this.index;
      this.advance();
      while (isIdentifierPart(this.peek))
        this.advance();
      var str = this.input.substring(start, this.index);
      if (collection_1.SetWrapper.has(KEYWORDS, str)) {
        return newKeywordToken(start, str);
      } else {
        return newIdentifierToken(start, str);
      }
    };
    _Scanner.prototype.scanNumber = function(start) {
      assert(isDigit(this.peek));
      var simple = (this.index === start);
      this.advance();
      while (true) {
        if (isDigit(this.peek)) {} else if (this.peek == exports.$PERIOD) {
          simple = false;
        } else if (isExponentStart(this.peek)) {
          this.advance();
          if (isExponentSign(this.peek))
            this.advance();
          if (!isDigit(this.peek))
            this.error('Invalid exponent', -1);
          simple = false;
        } else {
          break;
        }
        this.advance();
      }
      var str = this.input.substring(start, this.index);
      var value = simple ? lang_1.NumberWrapper.parseIntAutoRadix(str) : lang_1.NumberWrapper.parseFloat(str);
      return newNumberToken(start, value);
    };
    _Scanner.prototype.scanString = function() {
      assert(this.peek == exports.$SQ || this.peek == exports.$DQ);
      var start = this.index;
      var quote = this.peek;
      this.advance();
      var buffer;
      var marker = this.index;
      var input = this.input;
      while (this.peek != quote) {
        if (this.peek == exports.$BACKSLASH) {
          if (buffer == null)
            buffer = new lang_1.StringJoiner();
          buffer.add(input.substring(marker, this.index));
          this.advance();
          var unescapedCode;
          if (this.peek == $u) {
            var hex = input.substring(this.index + 1, this.index + 5);
            try {
              unescapedCode = lang_1.NumberWrapper.parseInt(hex, 16);
            } catch (e) {
              this.error("Invalid unicode escape [\\u" + hex + "]", 0);
            }
            for (var i = 0; i < 5; i++) {
              this.advance();
            }
          } else {
            unescapedCode = unescape(this.peek);
            this.advance();
          }
          buffer.add(lang_1.StringWrapper.fromCharCode(unescapedCode));
          marker = this.index;
        } else if (this.peek == exports.$EOF) {
          this.error('Unterminated quote', 0);
        } else {
          this.advance();
        }
      }
      var last = input.substring(marker, this.index);
      this.advance();
      var unescaped = last;
      if (buffer != null) {
        buffer.add(last);
        unescaped = buffer.toString();
      }
      return newStringToken(start, unescaped);
    };
    _Scanner.prototype.error = function(message, offset) {
      var position = this.index + offset;
      throw new ScannerError("Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]");
    };
    return _Scanner;
  })();
  function isWhitespace(code) {
    return (code >= exports.$TAB && code <= exports.$SPACE) || (code == $NBSP);
  }
  function isIdentifierStart(code) {
    return ($a <= code && code <= $z) || ($A <= code && code <= $Z) || (code == $_) || (code == exports.$$);
  }
  function isIdentifier(input) {
    if (input.length == 0)
      return false;
    var scanner = new _Scanner(input);
    if (!isIdentifierStart(scanner.peek))
      return false;
    scanner.advance();
    while (scanner.peek !== exports.$EOF) {
      if (!isIdentifierPart(scanner.peek))
        return false;
      scanner.advance();
    }
    return true;
  }
  exports.isIdentifier = isIdentifier;
  function isIdentifierPart(code) {
    return ($a <= code && code <= $z) || ($A <= code && code <= $Z) || ($0 <= code && code <= $9) || (code == $_) || (code == exports.$$);
  }
  function isDigit(code) {
    return $0 <= code && code <= $9;
  }
  function isExponentStart(code) {
    return code == $e || code == $E;
  }
  function isExponentSign(code) {
    return code == exports.$MINUS || code == exports.$PLUS;
  }
  function unescape(code) {
    switch (code) {
      case $n:
        return exports.$LF;
      case $f:
        return exports.$FF;
      case $r:
        return exports.$CR;
      case $t:
        return exports.$TAB;
      case $v:
        return exports.$VTAB;
      default:
        return code;
    }
  }
  var OPERATORS = collection_1.SetWrapper.createFromList(['+', '-', '*', '/', '%', '^', '=', '==', '!=', '===', '!==', '<', '>', '<=', '>=', '&&', '||', '&', '|', '!', '?', '#', '?.']);
  var KEYWORDS = collection_1.SetWrapper.createFromList(['var', 'null', 'undefined', 'true', 'false', 'if', 'else']);
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/parser/parser", ["angular2/src/core/di/decorators", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/change_detection/parser/lexer", "angular2/src/core/reflection/reflection", "angular2/src/core/change_detection/parser/ast"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var decorators_1 = require("angular2/src/core/di/decorators");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var lexer_1 = require("angular2/src/core/change_detection/parser/lexer");
  var reflection_1 = require("angular2/src/core/reflection/reflection");
  var ast_1 = require("angular2/src/core/change_detection/parser/ast");
  var _implicitReceiver = new ast_1.ImplicitReceiver();
  var INTERPOLATION_REGEXP = /\{\{(.*?)\}\}/g;
  var ParseException = (function(_super) {
    __extends(ParseException, _super);
    function ParseException(message, input, errLocation, ctxLocation) {
      _super.call(this, "Parser Error: " + message + " " + errLocation + " [" + input + "] in " + ctxLocation);
    }
    return ParseException;
  })(exceptions_1.BaseException);
  var Parser = (function() {
    function Parser(_lexer, providedReflector) {
      if (providedReflector === void 0) {
        providedReflector = null;
      }
      this._lexer = _lexer;
      this._reflector = lang_1.isPresent(providedReflector) ? providedReflector : reflection_1.reflector;
    }
    Parser.prototype.parseAction = function(input, location) {
      this._checkNoInterpolation(input, location);
      var tokens = this._lexer.tokenize(input);
      var ast = new _ParseAST(input, location, tokens, this._reflector, true).parseChain();
      return new ast_1.ASTWithSource(ast, input, location);
    };
    Parser.prototype.parseBinding = function(input, location) {
      var ast = this._parseBindingAst(input, location);
      return new ast_1.ASTWithSource(ast, input, location);
    };
    Parser.prototype.parseSimpleBinding = function(input, location) {
      var ast = this._parseBindingAst(input, location);
      if (!SimpleExpressionChecker.check(ast)) {
        throw new ParseException('Host binding expression can only contain field access and constants', input, location);
      }
      return new ast_1.ASTWithSource(ast, input, location);
    };
    Parser.prototype._parseBindingAst = function(input, location) {
      var quote = this._parseQuote(input, location);
      if (lang_1.isPresent(quote)) {
        return quote;
      }
      this._checkNoInterpolation(input, location);
      var tokens = this._lexer.tokenize(input);
      return new _ParseAST(input, location, tokens, this._reflector, false).parseChain();
    };
    Parser.prototype._parseQuote = function(input, location) {
      if (lang_1.isBlank(input))
        return null;
      var prefixSeparatorIndex = input.indexOf(':');
      if (prefixSeparatorIndex == -1)
        return null;
      var prefix = input.substring(0, prefixSeparatorIndex).trim();
      if (!lexer_1.isIdentifier(prefix))
        return null;
      var uninterpretedExpression = input.substring(prefixSeparatorIndex + 1);
      return new ast_1.Quote(prefix, uninterpretedExpression, location);
    };
    Parser.prototype.parseTemplateBindings = function(input, location) {
      var tokens = this._lexer.tokenize(input);
      return new _ParseAST(input, location, tokens, this._reflector, false).parseTemplateBindings();
    };
    Parser.prototype.parseInterpolation = function(input, location) {
      var parts = lang_1.StringWrapper.split(input, INTERPOLATION_REGEXP);
      if (parts.length <= 1) {
        return null;
      }
      var strings = [];
      var expressions = [];
      for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (i % 2 === 0) {
          strings.push(part);
        } else if (part.trim().length > 0) {
          var tokens = this._lexer.tokenize(part);
          var ast = new _ParseAST(input, location, tokens, this._reflector, false).parseChain();
          expressions.push(ast);
        } else {
          throw new ParseException('Blank expressions are not allowed in interpolated strings', input, "at column " + this._findInterpolationErrorColumn(parts, i) + " in", location);
        }
      }
      return new ast_1.ASTWithSource(new ast_1.Interpolation(strings, expressions), input, location);
    };
    Parser.prototype.wrapLiteralPrimitive = function(input, location) {
      return new ast_1.ASTWithSource(new ast_1.LiteralPrimitive(input), input, location);
    };
    Parser.prototype._checkNoInterpolation = function(input, location) {
      var parts = lang_1.StringWrapper.split(input, INTERPOLATION_REGEXP);
      if (parts.length > 1) {
        throw new ParseException('Got interpolation ({{}}) where expression was expected', input, "at column " + this._findInterpolationErrorColumn(parts, 1) + " in", location);
      }
    };
    Parser.prototype._findInterpolationErrorColumn = function(parts, partInErrIdx) {
      var errLocation = '';
      for (var j = 0; j < partInErrIdx; j++) {
        errLocation += j % 2 === 0 ? parts[j] : "{{" + parts[j] + "}}";
      }
      return errLocation.length;
    };
    Parser = __decorate([decorators_1.Injectable(), __metadata('design:paramtypes', [lexer_1.Lexer, reflection_1.Reflector])], Parser);
    return Parser;
  })();
  exports.Parser = Parser;
  var _ParseAST = (function() {
    function _ParseAST(input, location, tokens, reflector, parseAction) {
      this.input = input;
      this.location = location;
      this.tokens = tokens;
      this.reflector = reflector;
      this.parseAction = parseAction;
      this.index = 0;
    }
    _ParseAST.prototype.peek = function(offset) {
      var i = this.index + offset;
      return i < this.tokens.length ? this.tokens[i] : lexer_1.EOF;
    };
    Object.defineProperty(_ParseAST.prototype, "next", {
      get: function() {
        return this.peek(0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(_ParseAST.prototype, "inputIndex", {
      get: function() {
        return (this.index < this.tokens.length) ? this.next.index : this.input.length;
      },
      enumerable: true,
      configurable: true
    });
    _ParseAST.prototype.advance = function() {
      this.index++;
    };
    _ParseAST.prototype.optionalCharacter = function(code) {
      if (this.next.isCharacter(code)) {
        this.advance();
        return true;
      } else {
        return false;
      }
    };
    _ParseAST.prototype.optionalKeywordVar = function() {
      if (this.peekKeywordVar()) {
        this.advance();
        return true;
      } else {
        return false;
      }
    };
    _ParseAST.prototype.peekKeywordVar = function() {
      return this.next.isKeywordVar() || this.next.isOperator('#');
    };
    _ParseAST.prototype.expectCharacter = function(code) {
      if (this.optionalCharacter(code))
        return ;
      this.error("Missing expected " + lang_1.StringWrapper.fromCharCode(code));
    };
    _ParseAST.prototype.optionalOperator = function(op) {
      if (this.next.isOperator(op)) {
        this.advance();
        return true;
      } else {
        return false;
      }
    };
    _ParseAST.prototype.expectOperator = function(operator) {
      if (this.optionalOperator(operator))
        return ;
      this.error("Missing expected operator " + operator);
    };
    _ParseAST.prototype.expectIdentifierOrKeyword = function() {
      var n = this.next;
      if (!n.isIdentifier() && !n.isKeyword()) {
        this.error("Unexpected token " + n + ", expected identifier or keyword");
      }
      this.advance();
      return n.toString();
    };
    _ParseAST.prototype.expectIdentifierOrKeywordOrString = function() {
      var n = this.next;
      if (!n.isIdentifier() && !n.isKeyword() && !n.isString()) {
        this.error("Unexpected token " + n + ", expected identifier, keyword, or string");
      }
      this.advance();
      return n.toString();
    };
    _ParseAST.prototype.parseChain = function() {
      var exprs = [];
      while (this.index < this.tokens.length) {
        var expr = this.parsePipe();
        exprs.push(expr);
        if (this.optionalCharacter(lexer_1.$SEMICOLON)) {
          if (!this.parseAction) {
            this.error("Binding expression cannot contain chained expression");
          }
          while (this.optionalCharacter(lexer_1.$SEMICOLON)) {}
        } else if (this.index < this.tokens.length) {
          this.error("Unexpected token '" + this.next + "'");
        }
      }
      if (exprs.length == 0)
        return new ast_1.EmptyExpr();
      if (exprs.length == 1)
        return exprs[0];
      return new ast_1.Chain(exprs);
    };
    _ParseAST.prototype.parsePipe = function() {
      var result = this.parseExpression();
      if (this.optionalOperator("|")) {
        if (this.parseAction) {
          this.error("Cannot have a pipe in an action expression");
        }
        do {
          var name = this.expectIdentifierOrKeyword();
          var args = [];
          while (this.optionalCharacter(lexer_1.$COLON)) {
            args.push(this.parseExpression());
          }
          result = new ast_1.BindingPipe(result, name, args);
        } while (this.optionalOperator("|"));
      }
      return result;
    };
    _ParseAST.prototype.parseExpression = function() {
      return this.parseConditional();
    };
    _ParseAST.prototype.parseConditional = function() {
      var start = this.inputIndex;
      var result = this.parseLogicalOr();
      if (this.optionalOperator('?')) {
        var yes = this.parsePipe();
        if (!this.optionalCharacter(lexer_1.$COLON)) {
          var end = this.inputIndex;
          var expression = this.input.substring(start, end);
          this.error("Conditional expression " + expression + " requires all 3 expressions");
        }
        var no = this.parsePipe();
        return new ast_1.Conditional(result, yes, no);
      } else {
        return result;
      }
    };
    _ParseAST.prototype.parseLogicalOr = function() {
      var result = this.parseLogicalAnd();
      while (this.optionalOperator('||')) {
        result = new ast_1.Binary('||', result, this.parseLogicalAnd());
      }
      return result;
    };
    _ParseAST.prototype.parseLogicalAnd = function() {
      var result = this.parseEquality();
      while (this.optionalOperator('&&')) {
        result = new ast_1.Binary('&&', result, this.parseEquality());
      }
      return result;
    };
    _ParseAST.prototype.parseEquality = function() {
      var result = this.parseRelational();
      while (true) {
        if (this.optionalOperator('==')) {
          result = new ast_1.Binary('==', result, this.parseRelational());
        } else if (this.optionalOperator('===')) {
          result = new ast_1.Binary('===', result, this.parseRelational());
        } else if (this.optionalOperator('!=')) {
          result = new ast_1.Binary('!=', result, this.parseRelational());
        } else if (this.optionalOperator('!==')) {
          result = new ast_1.Binary('!==', result, this.parseRelational());
        } else {
          return result;
        }
      }
    };
    _ParseAST.prototype.parseRelational = function() {
      var result = this.parseAdditive();
      while (true) {
        if (this.optionalOperator('<')) {
          result = new ast_1.Binary('<', result, this.parseAdditive());
        } else if (this.optionalOperator('>')) {
          result = new ast_1.Binary('>', result, this.parseAdditive());
        } else if (this.optionalOperator('<=')) {
          result = new ast_1.Binary('<=', result, this.parseAdditive());
        } else if (this.optionalOperator('>=')) {
          result = new ast_1.Binary('>=', result, this.parseAdditive());
        } else {
          return result;
        }
      }
    };
    _ParseAST.prototype.parseAdditive = function() {
      var result = this.parseMultiplicative();
      while (true) {
        if (this.optionalOperator('+')) {
          result = new ast_1.Binary('+', result, this.parseMultiplicative());
        } else if (this.optionalOperator('-')) {
          result = new ast_1.Binary('-', result, this.parseMultiplicative());
        } else {
          return result;
        }
      }
    };
    _ParseAST.prototype.parseMultiplicative = function() {
      var result = this.parsePrefix();
      while (true) {
        if (this.optionalOperator('*')) {
          result = new ast_1.Binary('*', result, this.parsePrefix());
        } else if (this.optionalOperator('%')) {
          result = new ast_1.Binary('%', result, this.parsePrefix());
        } else if (this.optionalOperator('/')) {
          result = new ast_1.Binary('/', result, this.parsePrefix());
        } else {
          return result;
        }
      }
    };
    _ParseAST.prototype.parsePrefix = function() {
      if (this.optionalOperator('+')) {
        return this.parsePrefix();
      } else if (this.optionalOperator('-')) {
        return new ast_1.Binary('-', new ast_1.LiteralPrimitive(0), this.parsePrefix());
      } else if (this.optionalOperator('!')) {
        return new ast_1.PrefixNot(this.parsePrefix());
      } else {
        return this.parseCallChain();
      }
    };
    _ParseAST.prototype.parseCallChain = function() {
      var result = this.parsePrimary();
      while (true) {
        if (this.optionalCharacter(lexer_1.$PERIOD)) {
          result = this.parseAccessMemberOrMethodCall(result, false);
        } else if (this.optionalOperator('?.')) {
          result = this.parseAccessMemberOrMethodCall(result, true);
        } else if (this.optionalCharacter(lexer_1.$LBRACKET)) {
          var key = this.parsePipe();
          this.expectCharacter(lexer_1.$RBRACKET);
          if (this.optionalOperator("=")) {
            var value = this.parseConditional();
            result = new ast_1.KeyedWrite(result, key, value);
          } else {
            result = new ast_1.KeyedRead(result, key);
          }
        } else if (this.optionalCharacter(lexer_1.$LPAREN)) {
          var args = this.parseCallArguments();
          this.expectCharacter(lexer_1.$RPAREN);
          result = new ast_1.FunctionCall(result, args);
        } else {
          return result;
        }
      }
    };
    _ParseAST.prototype.parsePrimary = function() {
      if (this.optionalCharacter(lexer_1.$LPAREN)) {
        var result = this.parsePipe();
        this.expectCharacter(lexer_1.$RPAREN);
        return result;
      } else if (this.next.isKeywordNull() || this.next.isKeywordUndefined()) {
        this.advance();
        return new ast_1.LiteralPrimitive(null);
      } else if (this.next.isKeywordTrue()) {
        this.advance();
        return new ast_1.LiteralPrimitive(true);
      } else if (this.next.isKeywordFalse()) {
        this.advance();
        return new ast_1.LiteralPrimitive(false);
      } else if (this.optionalCharacter(lexer_1.$LBRACKET)) {
        var elements = this.parseExpressionList(lexer_1.$RBRACKET);
        this.expectCharacter(lexer_1.$RBRACKET);
        return new ast_1.LiteralArray(elements);
      } else if (this.next.isCharacter(lexer_1.$LBRACE)) {
        return this.parseLiteralMap();
      } else if (this.next.isIdentifier()) {
        return this.parseAccessMemberOrMethodCall(_implicitReceiver, false);
      } else if (this.next.isNumber()) {
        var value = this.next.toNumber();
        this.advance();
        return new ast_1.LiteralPrimitive(value);
      } else if (this.next.isString()) {
        var literalValue = this.next.toString();
        this.advance();
        return new ast_1.LiteralPrimitive(literalValue);
      } else if (this.index >= this.tokens.length) {
        this.error("Unexpected end of expression: " + this.input);
      } else {
        this.error("Unexpected token " + this.next);
      }
      throw new exceptions_1.BaseException("Fell through all cases in parsePrimary");
    };
    _ParseAST.prototype.parseExpressionList = function(terminator) {
      var result = [];
      if (!this.next.isCharacter(terminator)) {
        do {
          result.push(this.parsePipe());
        } while (this.optionalCharacter(lexer_1.$COMMA));
      }
      return result;
    };
    _ParseAST.prototype.parseLiteralMap = function() {
      var keys = [];
      var values = [];
      this.expectCharacter(lexer_1.$LBRACE);
      if (!this.optionalCharacter(lexer_1.$RBRACE)) {
        do {
          var key = this.expectIdentifierOrKeywordOrString();
          keys.push(key);
          this.expectCharacter(lexer_1.$COLON);
          values.push(this.parsePipe());
        } while (this.optionalCharacter(lexer_1.$COMMA));
        this.expectCharacter(lexer_1.$RBRACE);
      }
      return new ast_1.LiteralMap(keys, values);
    };
    _ParseAST.prototype.parseAccessMemberOrMethodCall = function(receiver, isSafe) {
      if (isSafe === void 0) {
        isSafe = false;
      }
      var id = this.expectIdentifierOrKeyword();
      if (this.optionalCharacter(lexer_1.$LPAREN)) {
        var args = this.parseCallArguments();
        this.expectCharacter(lexer_1.$RPAREN);
        var fn = this.reflector.method(id);
        return isSafe ? new ast_1.SafeMethodCall(receiver, id, fn, args) : new ast_1.MethodCall(receiver, id, fn, args);
      } else {
        if (isSafe) {
          if (this.optionalOperator("=")) {
            this.error("The '?.' operator cannot be used in the assignment");
          } else {
            return new ast_1.SafePropertyRead(receiver, id, this.reflector.getter(id));
          }
        } else {
          if (this.optionalOperator("=")) {
            if (!this.parseAction) {
              this.error("Bindings cannot contain assignments");
            }
            var value = this.parseConditional();
            return new ast_1.PropertyWrite(receiver, id, this.reflector.setter(id), value);
          } else {
            return new ast_1.PropertyRead(receiver, id, this.reflector.getter(id));
          }
        }
      }
      return null;
    };
    _ParseAST.prototype.parseCallArguments = function() {
      if (this.next.isCharacter(lexer_1.$RPAREN))
        return [];
      var positionals = [];
      do {
        positionals.push(this.parsePipe());
      } while (this.optionalCharacter(lexer_1.$COMMA));
      return positionals;
    };
    _ParseAST.prototype.parseBlockContent = function() {
      if (!this.parseAction) {
        this.error("Binding expression cannot contain chained expression");
      }
      var exprs = [];
      while (this.index < this.tokens.length && !this.next.isCharacter(lexer_1.$RBRACE)) {
        var expr = this.parseExpression();
        exprs.push(expr);
        if (this.optionalCharacter(lexer_1.$SEMICOLON)) {
          while (this.optionalCharacter(lexer_1.$SEMICOLON)) {}
        }
      }
      if (exprs.length == 0)
        return new ast_1.EmptyExpr();
      if (exprs.length == 1)
        return exprs[0];
      return new ast_1.Chain(exprs);
    };
    _ParseAST.prototype.expectTemplateBindingKey = function() {
      var result = '';
      var operatorFound = false;
      do {
        result += this.expectIdentifierOrKeywordOrString();
        operatorFound = this.optionalOperator('-');
        if (operatorFound) {
          result += '-';
        }
      } while (operatorFound);
      return result.toString();
    };
    _ParseAST.prototype.parseTemplateBindings = function() {
      var bindings = [];
      var prefix = null;
      while (this.index < this.tokens.length) {
        var keyIsVar = this.optionalKeywordVar();
        var key = this.expectTemplateBindingKey();
        if (!keyIsVar) {
          if (prefix == null) {
            prefix = key;
          } else {
            key = prefix + key[0].toUpperCase() + key.substring(1);
          }
        }
        this.optionalCharacter(lexer_1.$COLON);
        var name = null;
        var expression = null;
        if (keyIsVar) {
          if (this.optionalOperator("=")) {
            name = this.expectTemplateBindingKey();
          } else {
            name = '\$implicit';
          }
        } else if (this.next !== lexer_1.EOF && !this.peekKeywordVar()) {
          var start = this.inputIndex;
          var ast = this.parsePipe();
          var source = this.input.substring(start, this.inputIndex);
          expression = new ast_1.ASTWithSource(ast, source, this.location);
        }
        bindings.push(new ast_1.TemplateBinding(key, keyIsVar, name, expression));
        if (!this.optionalCharacter(lexer_1.$SEMICOLON)) {
          this.optionalCharacter(lexer_1.$COMMA);
        }
      }
      return bindings;
    };
    _ParseAST.prototype.error = function(message, index) {
      if (index === void 0) {
        index = null;
      }
      if (lang_1.isBlank(index))
        index = this.index;
      var location = (index < this.tokens.length) ? "at column " + (this.tokens[index].index + 1) + " in" : "at the end of the expression";
      throw new ParseException(message, this.input, location, this.location);
    };
    return _ParseAST;
  })();
  exports._ParseAST = _ParseAST;
  var SimpleExpressionChecker = (function() {
    function SimpleExpressionChecker() {
      this.simple = true;
    }
    SimpleExpressionChecker.check = function(ast) {
      var s = new SimpleExpressionChecker();
      ast.visit(s);
      return s.simple;
    };
    SimpleExpressionChecker.prototype.visitImplicitReceiver = function(ast) {};
    SimpleExpressionChecker.prototype.visitInterpolation = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitLiteralPrimitive = function(ast) {};
    SimpleExpressionChecker.prototype.visitPropertyRead = function(ast) {};
    SimpleExpressionChecker.prototype.visitPropertyWrite = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitSafePropertyRead = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitMethodCall = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitSafeMethodCall = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitFunctionCall = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitLiteralArray = function(ast) {
      this.visitAll(ast.expressions);
    };
    SimpleExpressionChecker.prototype.visitLiteralMap = function(ast) {
      this.visitAll(ast.values);
    };
    SimpleExpressionChecker.prototype.visitBinary = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitPrefixNot = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitConditional = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitPipe = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitKeyedRead = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitKeyedWrite = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitAll = function(asts) {
      var res = collection_1.ListWrapper.createFixedSize(asts.length);
      for (var i = 0; i < asts.length; ++i) {
        res[i] = asts[i].visit(this);
      }
      return res;
    };
    SimpleExpressionChecker.prototype.visitChain = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitQuote = function(ast) {
      this.simple = false;
    };
    return SimpleExpressionChecker;
  })();
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/parser/locals", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var Locals = (function() {
    function Locals(parent, current) {
      this.parent = parent;
      this.current = current;
    }
    Locals.prototype.contains = function(name) {
      if (this.current.has(name)) {
        return true;
      }
      if (lang_1.isPresent(this.parent)) {
        return this.parent.contains(name);
      }
      return false;
    };
    Locals.prototype.get = function(name) {
      if (this.current.has(name)) {
        return this.current.get(name);
      }
      if (lang_1.isPresent(this.parent)) {
        return this.parent.get(name);
      }
      throw new exceptions_1.BaseException("Cannot find '" + name + "'");
    };
    Locals.prototype.set = function(name, value) {
      if (this.current.has(name)) {
        this.current.set(name, value);
      } else {
        throw new exceptions_1.BaseException("Setting of new keys post-construction is not supported. Key: " + name + ".");
      }
    };
    Locals.prototype.clearLocalValues = function() {
      collection_1.MapWrapper.clearValues(this.current);
    };
    return Locals;
  })();
  exports.Locals = Locals;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/exceptions", ["angular2/src/facade/exceptions"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var ExpressionChangedAfterItHasBeenCheckedException = (function(_super) {
    __extends(ExpressionChangedAfterItHasBeenCheckedException, _super);
    function ExpressionChangedAfterItHasBeenCheckedException(exp, oldValue, currValue, context) {
      _super.call(this, ("Expression '" + exp + "' has changed after it was checked. ") + ("Previous value: '" + oldValue + "'. Current value: '" + currValue + "'"));
    }
    return ExpressionChangedAfterItHasBeenCheckedException;
  })(exceptions_1.BaseException);
  exports.ExpressionChangedAfterItHasBeenCheckedException = ExpressionChangedAfterItHasBeenCheckedException;
  var ChangeDetectionError = (function(_super) {
    __extends(ChangeDetectionError, _super);
    function ChangeDetectionError(exp, originalException, originalStack, context) {
      _super.call(this, originalException + " in [" + exp + "]", originalException, originalStack, context);
      this.location = exp;
    }
    return ChangeDetectionError;
  })(exceptions_1.WrappedException);
  exports.ChangeDetectionError = ChangeDetectionError;
  var DehydratedException = (function(_super) {
    __extends(DehydratedException, _super);
    function DehydratedException() {
      _super.call(this, 'Attempt to detect changes on a dehydrated detector.');
    }
    return DehydratedException;
  })(exceptions_1.BaseException);
  exports.DehydratedException = DehydratedException;
  var EventEvaluationError = (function(_super) {
    __extends(EventEvaluationError, _super);
    function EventEvaluationError(eventName, originalException, originalStack, context) {
      _super.call(this, "Error during evaluation of \"" + eventName + "\"", originalException, originalStack, context);
    }
    return EventEvaluationError;
  })(exceptions_1.WrappedException);
  exports.EventEvaluationError = EventEvaluationError;
  var EventEvaluationErrorContext = (function() {
    function EventEvaluationErrorContext(element, componentElement, context, locals, injector) {
      this.element = element;
      this.componentElement = componentElement;
      this.context = context;
      this.locals = locals;
      this.injector = injector;
    }
    return EventEvaluationErrorContext;
  })();
  exports.EventEvaluationErrorContext = EventEvaluationErrorContext;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/interfaces", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var DebugContext = (function() {
    function DebugContext(element, componentElement, directive, context, locals, injector) {
      this.element = element;
      this.componentElement = componentElement;
      this.directive = directive;
      this.context = context;
      this.locals = locals;
      this.injector = injector;
    }
    return DebugContext;
  })();
  exports.DebugContext = DebugContext;
  var ChangeDetectorGenConfig = (function() {
    function ChangeDetectorGenConfig(genDebugInfo, logBindingUpdate, useJit) {
      this.genDebugInfo = genDebugInfo;
      this.logBindingUpdate = logBindingUpdate;
      this.useJit = useJit;
    }
    return ChangeDetectorGenConfig;
  })();
  exports.ChangeDetectorGenConfig = ChangeDetectorGenConfig;
  var ChangeDetectorDefinition = (function() {
    function ChangeDetectorDefinition(id, strategy, variableNames, bindingRecords, eventRecords, directiveRecords, genConfig) {
      this.id = id;
      this.strategy = strategy;
      this.variableNames = variableNames;
      this.bindingRecords = bindingRecords;
      this.eventRecords = eventRecords;
      this.directiveRecords = directiveRecords;
      this.genConfig = genConfig;
    }
    return ChangeDetectorDefinition;
  })();
  exports.ChangeDetectorDefinition = ChangeDetectorDefinition;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/constants", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  (function(ChangeDetectorState) {
    ChangeDetectorState[ChangeDetectorState["NeverChecked"] = 0] = "NeverChecked";
    ChangeDetectorState[ChangeDetectorState["CheckedBefore"] = 1] = "CheckedBefore";
    ChangeDetectorState[ChangeDetectorState["Errored"] = 2] = "Errored";
  })(exports.ChangeDetectorState || (exports.ChangeDetectorState = {}));
  var ChangeDetectorState = exports.ChangeDetectorState;
  (function(ChangeDetectionStrategy) {
    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckOnce"] = 0] = "CheckOnce";
    ChangeDetectionStrategy[ChangeDetectionStrategy["Checked"] = 1] = "Checked";
    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckAlways"] = 2] = "CheckAlways";
    ChangeDetectionStrategy[ChangeDetectionStrategy["Detached"] = 3] = "Detached";
    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 4] = "OnPush";
    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 5] = "Default";
    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPushObserve"] = 6] = "OnPushObserve";
  })(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
  var ChangeDetectionStrategy = exports.ChangeDetectionStrategy;
  exports.CHANGE_DETECTION_STRATEGY_VALUES = [ChangeDetectionStrategy.CheckOnce, ChangeDetectionStrategy.Checked, ChangeDetectionStrategy.CheckAlways, ChangeDetectionStrategy.Detached, ChangeDetectionStrategy.OnPush, ChangeDetectionStrategy.Default, ChangeDetectionStrategy.OnPushObserve];
  exports.CHANGE_DETECTOR_STATE_VALUES = [ChangeDetectorState.NeverChecked, ChangeDetectorState.CheckedBefore, ChangeDetectorState.Errored];
  function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
    return lang_1.isBlank(changeDetectionStrategy) || changeDetectionStrategy === ChangeDetectionStrategy.Default;
  }
  exports.isDefaultChangeDetectionStrategy = isDefaultChangeDetectionStrategy;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/pipe_lifecycle_reflector", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function implementsOnDestroy(pipe) {
    return pipe.constructor.prototype.ngOnDestroy;
  }
  exports.implementsOnDestroy = implementsOnDestroy;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/binding_record", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var DIRECTIVE_LIFECYCLE = "directiveLifecycle";
  var BINDING = "native";
  var DIRECTIVE = "directive";
  var ELEMENT_PROPERTY = "elementProperty";
  var ELEMENT_ATTRIBUTE = "elementAttribute";
  var ELEMENT_CLASS = "elementClass";
  var ELEMENT_STYLE = "elementStyle";
  var TEXT_NODE = "textNode";
  var EVENT = "event";
  var HOST_EVENT = "hostEvent";
  var BindingTarget = (function() {
    function BindingTarget(mode, elementIndex, name, unit, debug) {
      this.mode = mode;
      this.elementIndex = elementIndex;
      this.name = name;
      this.unit = unit;
      this.debug = debug;
    }
    BindingTarget.prototype.isDirective = function() {
      return this.mode === DIRECTIVE;
    };
    BindingTarget.prototype.isElementProperty = function() {
      return this.mode === ELEMENT_PROPERTY;
    };
    BindingTarget.prototype.isElementAttribute = function() {
      return this.mode === ELEMENT_ATTRIBUTE;
    };
    BindingTarget.prototype.isElementClass = function() {
      return this.mode === ELEMENT_CLASS;
    };
    BindingTarget.prototype.isElementStyle = function() {
      return this.mode === ELEMENT_STYLE;
    };
    BindingTarget.prototype.isTextNode = function() {
      return this.mode === TEXT_NODE;
    };
    return BindingTarget;
  })();
  exports.BindingTarget = BindingTarget;
  var BindingRecord = (function() {
    function BindingRecord(mode, target, implicitReceiver, ast, setter, lifecycleEvent, directiveRecord) {
      this.mode = mode;
      this.target = target;
      this.implicitReceiver = implicitReceiver;
      this.ast = ast;
      this.setter = setter;
      this.lifecycleEvent = lifecycleEvent;
      this.directiveRecord = directiveRecord;
    }
    BindingRecord.prototype.isDirectiveLifecycle = function() {
      return this.mode === DIRECTIVE_LIFECYCLE;
    };
    BindingRecord.prototype.callOnChanges = function() {
      return lang_1.isPresent(this.directiveRecord) && this.directiveRecord.callOnChanges;
    };
    BindingRecord.prototype.isDefaultChangeDetection = function() {
      return lang_1.isBlank(this.directiveRecord) || this.directiveRecord.isDefaultChangeDetection();
    };
    BindingRecord.createDirectiveDoCheck = function(directiveRecord) {
      return new BindingRecord(DIRECTIVE_LIFECYCLE, null, 0, null, null, "DoCheck", directiveRecord);
    };
    BindingRecord.createDirectiveOnInit = function(directiveRecord) {
      return new BindingRecord(DIRECTIVE_LIFECYCLE, null, 0, null, null, "OnInit", directiveRecord);
    };
    BindingRecord.createDirectiveOnChanges = function(directiveRecord) {
      return new BindingRecord(DIRECTIVE_LIFECYCLE, null, 0, null, null, "OnChanges", directiveRecord);
    };
    BindingRecord.createForDirective = function(ast, propertyName, setter, directiveRecord) {
      var elementIndex = directiveRecord.directiveIndex.elementIndex;
      var t = new BindingTarget(DIRECTIVE, elementIndex, propertyName, null, ast.toString());
      return new BindingRecord(DIRECTIVE, t, 0, ast, setter, null, directiveRecord);
    };
    BindingRecord.createForElementProperty = function(ast, elementIndex, propertyName) {
      var t = new BindingTarget(ELEMENT_PROPERTY, elementIndex, propertyName, null, ast.toString());
      return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForElementAttribute = function(ast, elementIndex, attributeName) {
      var t = new BindingTarget(ELEMENT_ATTRIBUTE, elementIndex, attributeName, null, ast.toString());
      return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForElementClass = function(ast, elementIndex, className) {
      var t = new BindingTarget(ELEMENT_CLASS, elementIndex, className, null, ast.toString());
      return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForElementStyle = function(ast, elementIndex, styleName, unit) {
      var t = new BindingTarget(ELEMENT_STYLE, elementIndex, styleName, unit, ast.toString());
      return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForHostProperty = function(directiveIndex, ast, propertyName) {
      var t = new BindingTarget(ELEMENT_PROPERTY, directiveIndex.elementIndex, propertyName, null, ast.toString());
      return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForHostAttribute = function(directiveIndex, ast, attributeName) {
      var t = new BindingTarget(ELEMENT_ATTRIBUTE, directiveIndex.elementIndex, attributeName, null, ast.toString());
      return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForHostClass = function(directiveIndex, ast, className) {
      var t = new BindingTarget(ELEMENT_CLASS, directiveIndex.elementIndex, className, null, ast.toString());
      return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForHostStyle = function(directiveIndex, ast, styleName, unit) {
      var t = new BindingTarget(ELEMENT_STYLE, directiveIndex.elementIndex, styleName, unit, ast.toString());
      return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForTextNode = function(ast, elementIndex) {
      var t = new BindingTarget(TEXT_NODE, elementIndex, null, null, ast.toString());
      return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForEvent = function(ast, eventName, elementIndex) {
      var t = new BindingTarget(EVENT, elementIndex, eventName, null, ast.toString());
      return new BindingRecord(EVENT, t, 0, ast, null, null, null);
    };
    BindingRecord.createForHostEvent = function(ast, eventName, directiveRecord) {
      var directiveIndex = directiveRecord.directiveIndex;
      var t = new BindingTarget(HOST_EVENT, directiveIndex.elementIndex, eventName, null, ast.toString());
      return new BindingRecord(HOST_EVENT, t, directiveIndex, ast, null, null, directiveRecord);
    };
    return BindingRecord;
  })();
  exports.BindingRecord = BindingRecord;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/directive_record", ["angular2/src/facade/lang", "angular2/src/core/change_detection/constants"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var constants_1 = require("angular2/src/core/change_detection/constants");
  var DirectiveIndex = (function() {
    function DirectiveIndex(elementIndex, directiveIndex) {
      this.elementIndex = elementIndex;
      this.directiveIndex = directiveIndex;
    }
    Object.defineProperty(DirectiveIndex.prototype, "name", {
      get: function() {
        return this.elementIndex + "_" + this.directiveIndex;
      },
      enumerable: true,
      configurable: true
    });
    return DirectiveIndex;
  })();
  exports.DirectiveIndex = DirectiveIndex;
  var DirectiveRecord = (function() {
    function DirectiveRecord(_a) {
      var _b = _a === void 0 ? {} : _a,
          directiveIndex = _b.directiveIndex,
          callAfterContentInit = _b.callAfterContentInit,
          callAfterContentChecked = _b.callAfterContentChecked,
          callAfterViewInit = _b.callAfterViewInit,
          callAfterViewChecked = _b.callAfterViewChecked,
          callOnChanges = _b.callOnChanges,
          callDoCheck = _b.callDoCheck,
          callOnInit = _b.callOnInit,
          callOnDestroy = _b.callOnDestroy,
          changeDetection = _b.changeDetection,
          outputs = _b.outputs;
      this.directiveIndex = directiveIndex;
      this.callAfterContentInit = lang_1.normalizeBool(callAfterContentInit);
      this.callAfterContentChecked = lang_1.normalizeBool(callAfterContentChecked);
      this.callOnChanges = lang_1.normalizeBool(callOnChanges);
      this.callAfterViewInit = lang_1.normalizeBool(callAfterViewInit);
      this.callAfterViewChecked = lang_1.normalizeBool(callAfterViewChecked);
      this.callDoCheck = lang_1.normalizeBool(callDoCheck);
      this.callOnInit = lang_1.normalizeBool(callOnInit);
      this.callOnDestroy = lang_1.normalizeBool(callOnDestroy);
      this.changeDetection = changeDetection;
      this.outputs = outputs;
    }
    DirectiveRecord.prototype.isDefaultChangeDetection = function() {
      return constants_1.isDefaultChangeDetectionStrategy(this.changeDetection);
    };
    return DirectiveRecord;
  })();
  exports.DirectiveRecord = DirectiveRecord;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/change_detector_ref", ["angular2/src/core/change_detection/constants"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var constants_1 = require("angular2/src/core/change_detection/constants");
  var ChangeDetectorRef = (function() {
    function ChangeDetectorRef() {}
    return ChangeDetectorRef;
  })();
  exports.ChangeDetectorRef = ChangeDetectorRef;
  var ChangeDetectorRef_ = (function(_super) {
    __extends(ChangeDetectorRef_, _super);
    function ChangeDetectorRef_(_cd) {
      _super.call(this);
      this._cd = _cd;
    }
    ChangeDetectorRef_.prototype.markForCheck = function() {
      this._cd.markPathToRootAsCheckOnce();
    };
    ChangeDetectorRef_.prototype.detach = function() {
      this._cd.mode = constants_1.ChangeDetectionStrategy.Detached;
    };
    ChangeDetectorRef_.prototype.detectChanges = function() {
      this._cd.detectChanges();
    };
    ChangeDetectorRef_.prototype.checkNoChanges = function() {
      this._cd.checkNoChanges();
    };
    ChangeDetectorRef_.prototype.reattach = function() {
      this._cd.mode = constants_1.ChangeDetectionStrategy.CheckAlways;
      this.markForCheck();
    };
    return ChangeDetectorRef_;
  })(ChangeDetectorRef);
  exports.ChangeDetectorRef_ = ChangeDetectorRef_;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/observable_facade", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function isObservable(value) {
    return false;
  }
  exports.isObservable = isObservable;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/proto_record", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(RecordType) {
    RecordType[RecordType["Self"] = 0] = "Self";
    RecordType[RecordType["Const"] = 1] = "Const";
    RecordType[RecordType["PrimitiveOp"] = 2] = "PrimitiveOp";
    RecordType[RecordType["PropertyRead"] = 3] = "PropertyRead";
    RecordType[RecordType["PropertyWrite"] = 4] = "PropertyWrite";
    RecordType[RecordType["Local"] = 5] = "Local";
    RecordType[RecordType["InvokeMethod"] = 6] = "InvokeMethod";
    RecordType[RecordType["InvokeClosure"] = 7] = "InvokeClosure";
    RecordType[RecordType["KeyedRead"] = 8] = "KeyedRead";
    RecordType[RecordType["KeyedWrite"] = 9] = "KeyedWrite";
    RecordType[RecordType["Pipe"] = 10] = "Pipe";
    RecordType[RecordType["Interpolate"] = 11] = "Interpolate";
    RecordType[RecordType["SafeProperty"] = 12] = "SafeProperty";
    RecordType[RecordType["CollectionLiteral"] = 13] = "CollectionLiteral";
    RecordType[RecordType["SafeMethodInvoke"] = 14] = "SafeMethodInvoke";
    RecordType[RecordType["DirectiveLifecycle"] = 15] = "DirectiveLifecycle";
    RecordType[RecordType["Chain"] = 16] = "Chain";
    RecordType[RecordType["SkipRecordsIf"] = 17] = "SkipRecordsIf";
    RecordType[RecordType["SkipRecordsIfNot"] = 18] = "SkipRecordsIfNot";
    RecordType[RecordType["SkipRecords"] = 19] = "SkipRecords";
  })(exports.RecordType || (exports.RecordType = {}));
  var RecordType = exports.RecordType;
  var ProtoRecord = (function() {
    function ProtoRecord(mode, name, funcOrValue, args, fixedArgs, contextIndex, directiveIndex, selfIndex, bindingRecord, lastInBinding, lastInDirective, argumentToPureFunction, referencedBySelf, propertyBindingIndex) {
      this.mode = mode;
      this.name = name;
      this.funcOrValue = funcOrValue;
      this.args = args;
      this.fixedArgs = fixedArgs;
      this.contextIndex = contextIndex;
      this.directiveIndex = directiveIndex;
      this.selfIndex = selfIndex;
      this.bindingRecord = bindingRecord;
      this.lastInBinding = lastInBinding;
      this.lastInDirective = lastInDirective;
      this.argumentToPureFunction = argumentToPureFunction;
      this.referencedBySelf = referencedBySelf;
      this.propertyBindingIndex = propertyBindingIndex;
    }
    ProtoRecord.prototype.isPureFunction = function() {
      return this.mode === RecordType.Interpolate || this.mode === RecordType.CollectionLiteral;
    };
    ProtoRecord.prototype.isUsedByOtherRecord = function() {
      return !this.lastInBinding || this.referencedBySelf;
    };
    ProtoRecord.prototype.shouldBeChecked = function() {
      return this.argumentToPureFunction || this.lastInBinding || this.isPureFunction() || this.isPipeRecord();
    };
    ProtoRecord.prototype.isPipeRecord = function() {
      return this.mode === RecordType.Pipe;
    };
    ProtoRecord.prototype.isConditionalSkipRecord = function() {
      return this.mode === RecordType.SkipRecordsIfNot || this.mode === RecordType.SkipRecordsIf;
    };
    ProtoRecord.prototype.isUnconditionalSkipRecord = function() {
      return this.mode === RecordType.SkipRecords;
    };
    ProtoRecord.prototype.isSkipRecord = function() {
      return this.isConditionalSkipRecord() || this.isUnconditionalSkipRecord();
    };
    ProtoRecord.prototype.isLifeCycleRecord = function() {
      return this.mode === RecordType.DirectiveLifecycle;
    };
    return ProtoRecord;
  })();
  exports.ProtoRecord = ProtoRecord;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/event_binding", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var EventBinding = (function() {
    function EventBinding(eventName, elIndex, dirIndex, records) {
      this.eventName = eventName;
      this.elIndex = elIndex;
      this.dirIndex = dirIndex;
      this.records = records;
    }
    return EventBinding;
  })();
  exports.EventBinding = EventBinding;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/coalesce", ["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/core/change_detection/proto_record"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var collection_1 = require("angular2/src/facade/collection");
  var proto_record_1 = require("angular2/src/core/change_detection/proto_record");
  function coalesce(srcRecords) {
    var dstRecords = [];
    var excludedIdxs = [];
    var indexMap = new collection_1.Map();
    var skipDepth = 0;
    var skipSources = collection_1.ListWrapper.createFixedSize(srcRecords.length);
    for (var protoIndex = 0; protoIndex < srcRecords.length; protoIndex++) {
      var skipRecord = skipSources[protoIndex];
      if (lang_1.isPresent(skipRecord)) {
        skipDepth--;
        skipRecord.fixedArgs[0] = dstRecords.length;
      }
      var src = srcRecords[protoIndex];
      var dst = _cloneAndUpdateIndexes(src, dstRecords, indexMap);
      if (dst.isSkipRecord()) {
        dstRecords.push(dst);
        skipDepth++;
        skipSources[dst.fixedArgs[0]] = dst;
      } else {
        var record = _mayBeAddRecord(dst, dstRecords, excludedIdxs, skipDepth > 0);
        indexMap.set(src.selfIndex, record.selfIndex);
      }
    }
    return _optimizeSkips(dstRecords);
  }
  exports.coalesce = coalesce;
  function _optimizeSkips(srcRecords) {
    var dstRecords = [];
    var skipSources = collection_1.ListWrapper.createFixedSize(srcRecords.length);
    var indexMap = new collection_1.Map();
    for (var protoIndex = 0; protoIndex < srcRecords.length; protoIndex++) {
      var skipRecord = skipSources[protoIndex];
      if (lang_1.isPresent(skipRecord)) {
        skipRecord.fixedArgs[0] = dstRecords.length;
      }
      var src = srcRecords[protoIndex];
      if (src.isSkipRecord()) {
        if (src.isConditionalSkipRecord() && src.fixedArgs[0] === protoIndex + 2 && protoIndex < srcRecords.length - 1 && srcRecords[protoIndex + 1].mode === proto_record_1.RecordType.SkipRecords) {
          src.mode = src.mode === proto_record_1.RecordType.SkipRecordsIf ? proto_record_1.RecordType.SkipRecordsIfNot : proto_record_1.RecordType.SkipRecordsIf;
          src.fixedArgs[0] = srcRecords[protoIndex + 1].fixedArgs[0];
          protoIndex++;
        }
        if (src.fixedArgs[0] > protoIndex + 1) {
          var dst = _cloneAndUpdateIndexes(src, dstRecords, indexMap);
          dstRecords.push(dst);
          skipSources[dst.fixedArgs[0]] = dst;
        }
      } else {
        var dst = _cloneAndUpdateIndexes(src, dstRecords, indexMap);
        dstRecords.push(dst);
        indexMap.set(src.selfIndex, dst.selfIndex);
      }
    }
    return dstRecords;
  }
  function _mayBeAddRecord(record, dstRecords, excludedIdxs, excluded) {
    var match = _findFirstMatch(record, dstRecords, excludedIdxs);
    if (lang_1.isPresent(match)) {
      if (record.lastInBinding) {
        dstRecords.push(_createSelfRecord(record, match.selfIndex, dstRecords.length + 1));
        match.referencedBySelf = true;
      } else {
        if (record.argumentToPureFunction) {
          match.argumentToPureFunction = true;
        }
      }
      return match;
    }
    if (excluded) {
      excludedIdxs.push(record.selfIndex);
    }
    dstRecords.push(record);
    return record;
  }
  function _findFirstMatch(record, dstRecords, excludedIdxs) {
    return dstRecords.find(function(rr) {
      return excludedIdxs.indexOf(rr.selfIndex) == -1 && rr.mode !== proto_record_1.RecordType.DirectiveLifecycle && _haveSameDirIndex(rr, record) && rr.mode === record.mode && lang_1.looseIdentical(rr.funcOrValue, record.funcOrValue) && rr.contextIndex === record.contextIndex && lang_1.looseIdentical(rr.name, record.name) && collection_1.ListWrapper.equals(rr.args, record.args);
    });
  }
  function _cloneAndUpdateIndexes(record, dstRecords, indexMap) {
    var args = record.args.map(function(src) {
      return _srcToDstSelfIndex(indexMap, src);
    });
    var contextIndex = _srcToDstSelfIndex(indexMap, record.contextIndex);
    var selfIndex = dstRecords.length + 1;
    return new proto_record_1.ProtoRecord(record.mode, record.name, record.funcOrValue, args, record.fixedArgs, contextIndex, record.directiveIndex, selfIndex, record.bindingRecord, record.lastInBinding, record.lastInDirective, record.argumentToPureFunction, record.referencedBySelf, record.propertyBindingIndex);
  }
  function _srcToDstSelfIndex(indexMap, srcIdx) {
    var dstIdx = indexMap.get(srcIdx);
    return lang_1.isPresent(dstIdx) ? dstIdx : srcIdx;
  }
  function _createSelfRecord(r, contextIndex, selfIndex) {
    return new proto_record_1.ProtoRecord(proto_record_1.RecordType.Self, "self", null, [], r.fixedArgs, contextIndex, r.directiveIndex, selfIndex, r.bindingRecord, r.lastInBinding, r.lastInDirective, false, false, r.propertyBindingIndex);
  }
  function _haveSameDirIndex(a, b) {
    var di1 = lang_1.isBlank(a.directiveIndex) ? null : a.directiveIndex.directiveIndex;
    var ei1 = lang_1.isBlank(a.directiveIndex) ? null : a.directiveIndex.elementIndex;
    var di2 = lang_1.isBlank(b.directiveIndex) ? null : b.directiveIndex.directiveIndex;
    var ei2 = lang_1.isBlank(b.directiveIndex) ? null : b.directiveIndex.elementIndex;
    return di1 === di2 && ei1 === ei2;
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/codegen_name_util", ["angular2/src/facade/lang", "angular2/src/facade/collection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var collection_1 = require("angular2/src/facade/collection");
  var _STATE_ACCESSOR = "state";
  var _CONTEXT_ACCESSOR = "context";
  var _PROP_BINDING_INDEX = "propertyBindingIndex";
  var _DIRECTIVES_ACCESSOR = "directiveIndices";
  var _DISPATCHER_ACCESSOR = "dispatcher";
  var _LOCALS_ACCESSOR = "locals";
  var _MODE_ACCESSOR = "mode";
  var _PIPES_ACCESSOR = "pipes";
  var _PROTOS_ACCESSOR = "protos";
  exports.CONTEXT_ACCESSOR = "context";
  exports.CONTEXT_INDEX = 0;
  var _FIELD_PREFIX = 'this.';
  var _whiteSpaceRegExp = /\W/g;
  function sanitizeName(s) {
    return lang_1.StringWrapper.replaceAll(s, _whiteSpaceRegExp, '');
  }
  exports.sanitizeName = sanitizeName;
  var CodegenNameUtil = (function() {
    function CodegenNameUtil(_records, _eventBindings, _directiveRecords, _utilName) {
      this._records = _records;
      this._eventBindings = _eventBindings;
      this._directiveRecords = _directiveRecords;
      this._utilName = _utilName;
      this._sanitizedEventNames = new collection_1.Map();
      this._sanitizedNames = collection_1.ListWrapper.createFixedSize(this._records.length + 1);
      this._sanitizedNames[exports.CONTEXT_INDEX] = exports.CONTEXT_ACCESSOR;
      for (var i = 0,
          iLen = this._records.length; i < iLen; ++i) {
        this._sanitizedNames[i + 1] = sanitizeName("" + this._records[i].name + i);
      }
      for (var ebIndex = 0; ebIndex < _eventBindings.length; ++ebIndex) {
        var eb = _eventBindings[ebIndex];
        var names = [exports.CONTEXT_ACCESSOR];
        for (var i = 0,
            iLen = eb.records.length; i < iLen; ++i) {
          names.push(sanitizeName("" + eb.records[i].name + i + "_" + ebIndex));
        }
        this._sanitizedEventNames.set(eb, names);
      }
    }
    CodegenNameUtil.prototype._addFieldPrefix = function(name) {
      return "" + _FIELD_PREFIX + name;
    };
    CodegenNameUtil.prototype.getDispatcherName = function() {
      return this._addFieldPrefix(_DISPATCHER_ACCESSOR);
    };
    CodegenNameUtil.prototype.getPipesAccessorName = function() {
      return this._addFieldPrefix(_PIPES_ACCESSOR);
    };
    CodegenNameUtil.prototype.getProtosName = function() {
      return this._addFieldPrefix(_PROTOS_ACCESSOR);
    };
    CodegenNameUtil.prototype.getDirectivesAccessorName = function() {
      return this._addFieldPrefix(_DIRECTIVES_ACCESSOR);
    };
    CodegenNameUtil.prototype.getLocalsAccessorName = function() {
      return this._addFieldPrefix(_LOCALS_ACCESSOR);
    };
    CodegenNameUtil.prototype.getStateName = function() {
      return this._addFieldPrefix(_STATE_ACCESSOR);
    };
    CodegenNameUtil.prototype.getModeName = function() {
      return this._addFieldPrefix(_MODE_ACCESSOR);
    };
    CodegenNameUtil.prototype.getPropertyBindingIndex = function() {
      return this._addFieldPrefix(_PROP_BINDING_INDEX);
    };
    CodegenNameUtil.prototype.getLocalName = function(idx) {
      return "l_" + this._sanitizedNames[idx];
    };
    CodegenNameUtil.prototype.getEventLocalName = function(eb, idx) {
      return "l_" + this._sanitizedEventNames.get(eb)[idx];
    };
    CodegenNameUtil.prototype.getChangeName = function(idx) {
      return "c_" + this._sanitizedNames[idx];
    };
    CodegenNameUtil.prototype.genInitLocals = function() {
      var declarations = [];
      var assignments = [];
      for (var i = 0,
          iLen = this.getFieldCount(); i < iLen; ++i) {
        if (i == exports.CONTEXT_INDEX) {
          declarations.push(this.getLocalName(i) + " = " + this.getFieldName(i));
        } else {
          var rec = this._records[i - 1];
          if (rec.argumentToPureFunction) {
            var changeName = this.getChangeName(i);
            declarations.push(this.getLocalName(i) + "," + changeName);
            assignments.push(changeName);
          } else {
            declarations.push("" + this.getLocalName(i));
          }
        }
      }
      var assignmentsCode = collection_1.ListWrapper.isEmpty(assignments) ? '' : assignments.join('=') + " = false;";
      return "var " + declarations.join(',') + ";" + assignmentsCode;
    };
    CodegenNameUtil.prototype.genInitEventLocals = function() {
      var _this = this;
      var res = [(this.getLocalName(exports.CONTEXT_INDEX) + " = " + this.getFieldName(exports.CONTEXT_INDEX))];
      this._sanitizedEventNames.forEach(function(names, eb) {
        for (var i = 0; i < names.length; ++i) {
          if (i !== exports.CONTEXT_INDEX) {
            res.push("" + _this.getEventLocalName(eb, i));
          }
        }
      });
      return res.length > 1 ? "var " + res.join(',') + ";" : '';
    };
    CodegenNameUtil.prototype.getPreventDefaultAccesor = function() {
      return "preventDefault";
    };
    CodegenNameUtil.prototype.getFieldCount = function() {
      return this._sanitizedNames.length;
    };
    CodegenNameUtil.prototype.getFieldName = function(idx) {
      return this._addFieldPrefix(this._sanitizedNames[idx]);
    };
    CodegenNameUtil.prototype.getAllFieldNames = function() {
      var fieldList = [];
      for (var k = 0,
          kLen = this.getFieldCount(); k < kLen; ++k) {
        if (k === 0 || this._records[k - 1].shouldBeChecked()) {
          fieldList.push(this.getFieldName(k));
        }
      }
      for (var i = 0,
          iLen = this._records.length; i < iLen; ++i) {
        var rec = this._records[i];
        if (rec.isPipeRecord()) {
          fieldList.push(this.getPipeName(rec.selfIndex));
        }
      }
      for (var j = 0,
          jLen = this._directiveRecords.length; j < jLen; ++j) {
        var dRec = this._directiveRecords[j];
        fieldList.push(this.getDirectiveName(dRec.directiveIndex));
        if (!dRec.isDefaultChangeDetection()) {
          fieldList.push(this.getDetectorName(dRec.directiveIndex));
        }
      }
      return fieldList;
    };
    CodegenNameUtil.prototype.genDehydrateFields = function() {
      var fields = this.getAllFieldNames();
      collection_1.ListWrapper.removeAt(fields, exports.CONTEXT_INDEX);
      if (collection_1.ListWrapper.isEmpty(fields))
        return '';
      fields.push(this._utilName + ".uninitialized;");
      return fields.join(' = ');
    };
    CodegenNameUtil.prototype.genPipeOnDestroy = function() {
      var _this = this;
      return this._records.filter(function(r) {
        return r.isPipeRecord();
      }).map(function(r) {
        return (_this._utilName + ".callPipeOnDestroy(" + _this.getPipeName(r.selfIndex) + ");");
      }).join('\n');
    };
    CodegenNameUtil.prototype.getPipeName = function(idx) {
      return this._addFieldPrefix(this._sanitizedNames[idx] + "_pipe");
    };
    CodegenNameUtil.prototype.getDirectiveName = function(d) {
      return this._addFieldPrefix("directive_" + d.name);
    };
    CodegenNameUtil.prototype.getDetectorName = function(d) {
      return this._addFieldPrefix("detector_" + d.name);
    };
    return CodegenNameUtil;
  })();
  exports.CodegenNameUtil = CodegenNameUtil;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/codegen_facade", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function codify(obj) {
    return JSON.stringify(obj);
  }
  exports.codify = codify;
  function rawString(str) {
    return "'" + str + "'";
  }
  exports.rawString = rawString;
  function combineGeneratedStrings(vals) {
    return vals.join(' + ');
  }
  exports.combineGeneratedStrings = combineGeneratedStrings;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/metadata/di", ["angular2/src/facade/lang", "angular2/src/core/di", "angular2/src/core/di/metadata"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var di_1 = require("angular2/src/core/di");
  var metadata_1 = require("angular2/src/core/di/metadata");
  var AttributeMetadata = (function(_super) {
    __extends(AttributeMetadata, _super);
    function AttributeMetadata(attributeName) {
      _super.call(this);
      this.attributeName = attributeName;
    }
    Object.defineProperty(AttributeMetadata.prototype, "token", {
      get: function() {
        return this;
      },
      enumerable: true,
      configurable: true
    });
    AttributeMetadata.prototype.toString = function() {
      return "@Attribute(" + lang_1.stringify(this.attributeName) + ")";
    };
    AttributeMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String])], AttributeMetadata);
    return AttributeMetadata;
  })(metadata_1.DependencyMetadata);
  exports.AttributeMetadata = AttributeMetadata;
  var QueryMetadata = (function(_super) {
    __extends(QueryMetadata, _super);
    function QueryMetadata(_selector, _a) {
      var _b = _a === void 0 ? {} : _a,
          _c = _b.descendants,
          descendants = _c === void 0 ? false : _c,
          _d = _b.first,
          first = _d === void 0 ? false : _d;
      _super.call(this);
      this._selector = _selector;
      this.descendants = descendants;
      this.first = first;
    }
    Object.defineProperty(QueryMetadata.prototype, "isViewQuery", {
      get: function() {
        return false;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryMetadata.prototype, "selector", {
      get: function() {
        return di_1.resolveForwardRef(this._selector);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryMetadata.prototype, "isVarBindingQuery", {
      get: function() {
        return lang_1.isString(this.selector);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryMetadata.prototype, "varBindings", {
      get: function() {
        return this.selector.split(',');
      },
      enumerable: true,
      configurable: true
    });
    QueryMetadata.prototype.toString = function() {
      return "@Query(" + lang_1.stringify(this.selector) + ")";
    };
    QueryMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object, Object])], QueryMetadata);
    return QueryMetadata;
  })(metadata_1.DependencyMetadata);
  exports.QueryMetadata = QueryMetadata;
  var ContentChildrenMetadata = (function(_super) {
    __extends(ContentChildrenMetadata, _super);
    function ContentChildrenMetadata(_selector, _a) {
      var _b = (_a === void 0 ? {} : _a).descendants,
          descendants = _b === void 0 ? false : _b;
      _super.call(this, _selector, {descendants: descendants});
    }
    ContentChildrenMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object, Object])], ContentChildrenMetadata);
    return ContentChildrenMetadata;
  })(QueryMetadata);
  exports.ContentChildrenMetadata = ContentChildrenMetadata;
  var ContentChildMetadata = (function(_super) {
    __extends(ContentChildMetadata, _super);
    function ContentChildMetadata(_selector) {
      _super.call(this, _selector, {
        descendants: true,
        first: true
      });
    }
    ContentChildMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], ContentChildMetadata);
    return ContentChildMetadata;
  })(QueryMetadata);
  exports.ContentChildMetadata = ContentChildMetadata;
  var ViewQueryMetadata = (function(_super) {
    __extends(ViewQueryMetadata, _super);
    function ViewQueryMetadata(_selector, _a) {
      var _b = _a === void 0 ? {} : _a,
          _c = _b.descendants,
          descendants = _c === void 0 ? false : _c,
          _d = _b.first,
          first = _d === void 0 ? false : _d;
      _super.call(this, _selector, {
        descendants: descendants,
        first: first
      });
    }
    Object.defineProperty(ViewQueryMetadata.prototype, "isViewQuery", {
      get: function() {
        return true;
      },
      enumerable: true,
      configurable: true
    });
    ViewQueryMetadata.prototype.toString = function() {
      return "@ViewQuery(" + lang_1.stringify(this.selector) + ")";
    };
    ViewQueryMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object, Object])], ViewQueryMetadata);
    return ViewQueryMetadata;
  })(QueryMetadata);
  exports.ViewQueryMetadata = ViewQueryMetadata;
  var ViewChildrenMetadata = (function(_super) {
    __extends(ViewChildrenMetadata, _super);
    function ViewChildrenMetadata(_selector) {
      _super.call(this, _selector, {descendants: true});
    }
    ViewChildrenMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], ViewChildrenMetadata);
    return ViewChildrenMetadata;
  })(ViewQueryMetadata);
  exports.ViewChildrenMetadata = ViewChildrenMetadata;
  var ViewChildMetadata = (function(_super) {
    __extends(ViewChildMetadata, _super);
    function ViewChildMetadata(_selector) {
      _super.call(this, _selector, {
        descendants: true,
        first: true
      });
    }
    ViewChildMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], ViewChildMetadata);
    return ViewChildMetadata;
  })(ViewQueryMetadata);
  exports.ViewChildMetadata = ViewChildMetadata;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/view_type", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(ViewType) {
    ViewType[ViewType["HOST"] = 0] = "HOST";
    ViewType[ViewType["COMPONENT"] = 1] = "COMPONENT";
    ViewType[ViewType["EMBEDDED"] = 2] = "EMBEDDED";
  })(exports.ViewType || (exports.ViewType = {}));
  var ViewType = exports.ViewType;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/element_ref", ["angular2/src/facade/exceptions"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var ElementRef = (function() {
    function ElementRef() {}
    Object.defineProperty(ElementRef.prototype, "nativeElement", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return ElementRef;
  })();
  exports.ElementRef = ElementRef;
  var ElementRef_ = (function() {
    function ElementRef_(_appElement) {
      this._appElement = _appElement;
    }
    Object.defineProperty(ElementRef_.prototype, "internalElement", {
      get: function() {
        return this._appElement;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ElementRef_.prototype, "nativeElement", {
      get: function() {
        return this._appElement.nativeElement;
      },
      enumerable: true,
      configurable: true
    });
    return ElementRef_;
  })();
  exports.ElementRef_ = ElementRef_;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/view_container_ref", ["angular2/src/facade/collection", "angular2/src/facade/exceptions", "angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var collection_1 = require("angular2/src/facade/collection");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var lang_1 = require("angular2/src/facade/lang");
  var ViewContainerRef = (function() {
    function ViewContainerRef() {}
    Object.defineProperty(ViewContainerRef.prototype, "element", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ViewContainerRef.prototype.clear = function() {
      for (var i = this.length - 1; i >= 0; i--) {
        this.remove(i);
      }
    };
    Object.defineProperty(ViewContainerRef.prototype, "length", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return ViewContainerRef;
  })();
  exports.ViewContainerRef = ViewContainerRef;
  var ViewContainerRef_ = (function(_super) {
    __extends(ViewContainerRef_, _super);
    function ViewContainerRef_(_element) {
      _super.call(this);
      this._element = _element;
    }
    ViewContainerRef_.prototype.get = function(index) {
      return this._element.nestedViews[index].ref;
    };
    Object.defineProperty(ViewContainerRef_.prototype, "length", {
      get: function() {
        var views = this._element.nestedViews;
        return lang_1.isPresent(views) ? views.length : 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "element", {
      get: function() {
        return this._element.ref;
      },
      enumerable: true,
      configurable: true
    });
    ViewContainerRef_.prototype.createEmbeddedView = function(templateRef, index) {
      if (index === void 0) {
        index = -1;
      }
      if (index == -1)
        index = this.length;
      var vm = this._element.parentView.viewManager;
      return vm.createEmbeddedViewInContainer(this._element.ref, index, templateRef);
    };
    ViewContainerRef_.prototype.createHostView = function(hostViewFactoryRef, index, dynamicallyCreatedProviders, projectableNodes) {
      if (index === void 0) {
        index = -1;
      }
      if (dynamicallyCreatedProviders === void 0) {
        dynamicallyCreatedProviders = null;
      }
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      if (index == -1)
        index = this.length;
      var vm = this._element.parentView.viewManager;
      return vm.createHostViewInContainer(this._element.ref, index, hostViewFactoryRef, dynamicallyCreatedProviders, projectableNodes);
    };
    ViewContainerRef_.prototype.insert = function(viewRef, index) {
      if (index === void 0) {
        index = -1;
      }
      if (index == -1)
        index = this.length;
      var vm = this._element.parentView.viewManager;
      return vm.attachViewInContainer(this._element.ref, index, viewRef);
    };
    ViewContainerRef_.prototype.indexOf = function(viewRef) {
      return collection_1.ListWrapper.indexOf(this._element.nestedViews, viewRef.internalView);
    };
    ViewContainerRef_.prototype.remove = function(index) {
      if (index === void 0) {
        index = -1;
      }
      if (index == -1)
        index = this.length - 1;
      var vm = this._element.parentView.viewManager;
      return vm.destroyViewInContainer(this._element.ref, index);
    };
    ViewContainerRef_.prototype.detach = function(index) {
      if (index === void 0) {
        index = -1;
      }
      if (index == -1)
        index = this.length - 1;
      var vm = this._element.parentView.viewManager;
      return vm.detachViewInContainer(this._element.ref, index);
    };
    return ViewContainerRef_;
  })(ViewContainerRef);
  exports.ViewContainerRef_ = ViewContainerRef_;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/render/api", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var RenderComponentType = (function() {
    function RenderComponentType(id, encapsulation, styles) {
      this.id = id;
      this.encapsulation = encapsulation;
      this.styles = styles;
    }
    return RenderComponentType;
  })();
  exports.RenderComponentType = RenderComponentType;
  var Renderer = (function() {
    function Renderer() {}
    return Renderer;
  })();
  exports.Renderer = Renderer;
  var RootRenderer = (function() {
    function RootRenderer() {}
    return RootRenderer;
  })();
  exports.RootRenderer = RootRenderer;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/template_ref", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var TemplateRef = (function() {
    function TemplateRef() {}
    Object.defineProperty(TemplateRef.prototype, "elementRef", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    return TemplateRef;
  })();
  exports.TemplateRef = TemplateRef;
  var TemplateRef_ = (function(_super) {
    __extends(TemplateRef_, _super);
    function TemplateRef_(_elementRef) {
      _super.call(this);
      this._elementRef = _elementRef;
    }
    Object.defineProperty(TemplateRef_.prototype, "elementRef", {
      get: function() {
        return this._elementRef;
      },
      enumerable: true,
      configurable: true
    });
    return TemplateRef_;
  })(TemplateRef);
  exports.TemplateRef_ = TemplateRef_;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection", ["angular2/src/core/change_detection/change_detection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var change_detection_1 = require("angular2/src/core/change_detection/change_detection");
  exports.ChangeDetectionStrategy = change_detection_1.ChangeDetectionStrategy;
  exports.ExpressionChangedAfterItHasBeenCheckedException = change_detection_1.ExpressionChangedAfterItHasBeenCheckedException;
  exports.ChangeDetectionError = change_detection_1.ChangeDetectionError;
  exports.ChangeDetectorRef = change_detection_1.ChangeDetectorRef;
  exports.WrappedValue = change_detection_1.WrappedValue;
  exports.SimpleChange = change_detection_1.SimpleChange;
  exports.IterableDiffers = change_detection_1.IterableDiffers;
  exports.KeyValueDiffers = change_detection_1.KeyValueDiffers;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/query_list", ["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/facade/async"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var async_1 = require("angular2/src/facade/async");
  var QueryList = (function() {
    function QueryList() {
      this._results = [];
      this._emitter = new async_1.EventEmitter();
    }
    Object.defineProperty(QueryList.prototype, "changes", {
      get: function() {
        return this._emitter;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "length", {
      get: function() {
        return this._results.length;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "first", {
      get: function() {
        return collection_1.ListWrapper.first(this._results);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "last", {
      get: function() {
        return collection_1.ListWrapper.last(this._results);
      },
      enumerable: true,
      configurable: true
    });
    QueryList.prototype.map = function(fn) {
      return this._results.map(fn);
    };
    QueryList.prototype.filter = function(fn) {
      return this._results.filter(fn);
    };
    QueryList.prototype.reduce = function(fn, init) {
      return this._results.reduce(fn, init);
    };
    QueryList.prototype.toArray = function() {
      return collection_1.ListWrapper.clone(this._results);
    };
    QueryList.prototype[lang_1.getSymbolIterator()] = function() {
      return this._results[lang_1.getSymbolIterator()]();
    };
    QueryList.prototype.toString = function() {
      return this._results.toString();
    };
    QueryList.prototype.reset = function(res) {
      this._results = res;
    };
    QueryList.prototype.notifyOnChanges = function() {
      this._emitter.emit(this);
    };
    return QueryList;
  })();
  exports.QueryList = QueryList;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/pipes/pipe_provider", ["angular2/src/core/di/provider", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var provider_1 = require("angular2/src/core/di/provider");
  var di_1 = require("angular2/src/core/di");
  var PipeProvider = (function(_super) {
    __extends(PipeProvider, _super);
    function PipeProvider(name, pure, key, resolvedFactories, multiBinding) {
      _super.call(this, key, resolvedFactories, multiBinding);
      this.name = name;
      this.pure = pure;
    }
    PipeProvider.createFromType = function(type, metadata) {
      var provider = new di_1.Provider(type, {useClass: type});
      var rb = provider_1.resolveProvider(provider);
      return new PipeProvider(metadata.name, metadata.pure, rb.key, rb.resolvedFactories, rb.multiProvider);
    };
    return PipeProvider;
  })(provider_1.ResolvedProvider_);
  exports.PipeProvider = PipeProvider;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/view_ref", ["angular2/src/facade/exceptions"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var ViewRef = (function() {
    function ViewRef() {}
    Object.defineProperty(ViewRef.prototype, "changeDetectorRef", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ViewRef.prototype, "destroyed", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return ViewRef;
  })();
  exports.ViewRef = ViewRef;
  var HostViewRef = (function(_super) {
    __extends(HostViewRef, _super);
    function HostViewRef() {
      _super.apply(this, arguments);
    }
    Object.defineProperty(HostViewRef.prototype, "rootNodes", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return HostViewRef;
  })(ViewRef);
  exports.HostViewRef = HostViewRef;
  var EmbeddedViewRef = (function(_super) {
    __extends(EmbeddedViewRef, _super);
    function EmbeddedViewRef() {
      _super.apply(this, arguments);
    }
    Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return EmbeddedViewRef;
  })(ViewRef);
  exports.EmbeddedViewRef = EmbeddedViewRef;
  var ViewRef_ = (function() {
    function ViewRef_(_view) {
      this._view = _view;
      this._view = _view;
    }
    Object.defineProperty(ViewRef_.prototype, "internalView", {
      get: function() {
        return this._view;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "changeDetectorRef", {
      get: function() {
        return this._view.changeDetector.ref;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "rootNodes", {
      get: function() {
        return this._view.flatRootNodes;
      },
      enumerable: true,
      configurable: true
    });
    ViewRef_.prototype.setLocal = function(variableName, value) {
      this._view.setLocal(variableName, value);
    };
    ViewRef_.prototype.hasLocal = function(variableName) {
      return this._view.hasLocal(variableName);
    };
    Object.defineProperty(ViewRef_.prototype, "destroyed", {
      get: function() {
        return this._view.destroyed;
      },
      enumerable: true,
      configurable: true
    });
    return ViewRef_;
  })();
  exports.ViewRef_ = ViewRef_;
  var HostViewFactoryRef = (function() {
    function HostViewFactoryRef() {}
    return HostViewFactoryRef;
  })();
  exports.HostViewFactoryRef = HostViewFactoryRef;
  var HostViewFactoryRef_ = (function() {
    function HostViewFactoryRef_(_hostViewFactory) {
      this._hostViewFactory = _hostViewFactory;
    }
    Object.defineProperty(HostViewFactoryRef_.prototype, "internalHostViewFactory", {
      get: function() {
        return this._hostViewFactory;
      },
      enumerable: true,
      configurable: true
    });
    return HostViewFactoryRef_;
  })();
  exports.HostViewFactoryRef_ = HostViewFactoryRef_;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/pipes", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var SelectedPipe = (function() {
    function SelectedPipe(pipe, pure) {
      this.pipe = pipe;
      this.pure = pure;
    }
    return SelectedPipe;
  })();
  exports.SelectedPipe = SelectedPipe;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/render/util", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var CAMEL_CASE_REGEXP = /([A-Z])/g;
  var DASH_CASE_REGEXP = /-([a-z])/g;
  function camelCaseToDashCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function(m) {
      return '-' + m[1].toLowerCase();
    });
  }
  exports.camelCaseToDashCase = camelCaseToDashCase;
  function dashCaseToCamelCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function(m) {
      return m[1].toUpperCase();
    });
  }
  exports.dashCaseToCamelCase = dashCaseToCamelCase;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/view_listener", ["angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var AppViewListener = (function() {
    function AppViewListener() {}
    AppViewListener.prototype.onViewCreated = function(view) {};
    AppViewListener.prototype.onViewDestroyed = function(view) {};
    AppViewListener = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], AppViewListener);
    return AppViewListener;
  })();
  exports.AppViewListener = AppViewListener;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/console", ["angular2/src/core/di", "angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  var Console = (function() {
    function Console() {}
    Console.prototype.log = function(message) {
      lang_1.print(message);
    };
    Console = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], Console);
    return Console;
  })();
  exports.Console = Console;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/zone", ["angular2/src/core/zone/ng_zone"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var ng_zone_1 = require("angular2/src/core/zone/ng_zone");
  exports.NgZone = ng_zone_1.NgZone;
  exports.NgZoneError = ng_zone_1.NgZoneError;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/shared/message_bus", ["angular2/src/facade/async"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var async_1 = require("angular2/src/facade/async");
  exports.EventEmitter = async_1.EventEmitter;
  exports.Observable = async_1.Observable;
  var MessageBus = (function() {
    function MessageBus() {}
    return MessageBus;
  })();
  exports.MessageBus = MessageBus;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/metadata/view", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  (function(ViewEncapsulation) {
    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
  })(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
  var ViewEncapsulation = exports.ViewEncapsulation;
  exports.VIEW_ENCAPSULATION_VALUES = [ViewEncapsulation.Emulated, ViewEncapsulation.Native, ViewEncapsulation.None];
  var ViewMetadata = (function() {
    function ViewMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          templateUrl = _b.templateUrl,
          template = _b.template,
          directives = _b.directives,
          pipes = _b.pipes,
          encapsulation = _b.encapsulation,
          styles = _b.styles,
          styleUrls = _b.styleUrls;
      this.templateUrl = templateUrl;
      this.template = template;
      this.styleUrls = styleUrls;
      this.styles = styles;
      this.directives = directives;
      this.pipes = pipes;
      this.encapsulation = encapsulation;
    }
    ViewMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], ViewMetadata);
    return ViewMetadata;
  })();
  exports.ViewMetadata = ViewMetadata;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/util", ["angular2/src/core/util/decorators"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var decorators_1 = require("angular2/src/core/util/decorators");
  exports.Class = decorators_1.Class;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/prod_mode", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  exports.enableProdMode = lang_1.enableProdMode;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/render", ["angular2/src/core/render/api"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var api_1 = require("angular2/src/core/render/api");
  exports.RootRenderer = api_1.RootRenderer;
  exports.Renderer = api_1.Renderer;
  exports.RenderComponentType = api_1.RenderComponentType;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/directive_resolver", ["angular2/src/core/di", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/metadata", "angular2/src/core/reflection/reflection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var metadata_1 = require("angular2/src/core/metadata");
  var reflection_1 = require("angular2/src/core/reflection/reflection");
  function _isDirectiveMetadata(type) {
    return type instanceof metadata_1.DirectiveMetadata;
  }
  var DirectiveResolver = (function() {
    function DirectiveResolver() {}
    DirectiveResolver.prototype.resolve = function(type) {
      var typeMetadata = reflection_1.reflector.annotations(di_1.resolveForwardRef(type));
      if (lang_1.isPresent(typeMetadata)) {
        var metadata = typeMetadata.find(_isDirectiveMetadata);
        if (lang_1.isPresent(metadata)) {
          var propertyMetadata = reflection_1.reflector.propMetadata(type);
          return this._mergeWithPropertyMetadata(metadata, propertyMetadata, type);
        }
      }
      throw new exceptions_1.BaseException("No Directive annotation found on " + lang_1.stringify(type));
    };
    DirectiveResolver.prototype._mergeWithPropertyMetadata = function(dm, propertyMetadata, directiveType) {
      var inputs = [];
      var outputs = [];
      var host = {};
      var queries = {};
      collection_1.StringMapWrapper.forEach(propertyMetadata, function(metadata, propName) {
        metadata.forEach(function(a) {
          if (a instanceof metadata_1.InputMetadata) {
            if (lang_1.isPresent(a.bindingPropertyName)) {
              inputs.push(propName + ": " + a.bindingPropertyName);
            } else {
              inputs.push(propName);
            }
          }
          if (a instanceof metadata_1.OutputMetadata) {
            if (lang_1.isPresent(a.bindingPropertyName)) {
              outputs.push(propName + ": " + a.bindingPropertyName);
            } else {
              outputs.push(propName);
            }
          }
          if (a instanceof metadata_1.HostBindingMetadata) {
            if (lang_1.isPresent(a.hostPropertyName)) {
              host[("[" + a.hostPropertyName + "]")] = propName;
            } else {
              host[("[" + propName + "]")] = propName;
            }
          }
          if (a instanceof metadata_1.HostListenerMetadata) {
            var args = lang_1.isPresent(a.args) ? a.args.join(', ') : '';
            host[("(" + a.eventName + ")")] = propName + "(" + args + ")";
          }
          if (a instanceof metadata_1.ContentChildrenMetadata) {
            queries[propName] = a;
          }
          if (a instanceof metadata_1.ViewChildrenMetadata) {
            queries[propName] = a;
          }
          if (a instanceof metadata_1.ContentChildMetadata) {
            queries[propName] = a;
          }
          if (a instanceof metadata_1.ViewChildMetadata) {
            queries[propName] = a;
          }
        });
      });
      return this._merge(dm, inputs, outputs, host, queries, directiveType);
    };
    DirectiveResolver.prototype._merge = function(dm, inputs, outputs, host, queries, directiveType) {
      var mergedInputs = lang_1.isPresent(dm.inputs) ? collection_1.ListWrapper.concat(dm.inputs, inputs) : inputs;
      var mergedOutputs;
      if (lang_1.isPresent(dm.outputs)) {
        dm.outputs.forEach(function(propName) {
          if (collection_1.ListWrapper.contains(outputs, propName)) {
            throw new exceptions_1.BaseException("Output event '" + propName + "' defined multiple times in '" + lang_1.stringify(directiveType) + "'");
          }
        });
        mergedOutputs = collection_1.ListWrapper.concat(dm.outputs, outputs);
      } else {
        mergedOutputs = outputs;
      }
      var mergedHost = lang_1.isPresent(dm.host) ? collection_1.StringMapWrapper.merge(dm.host, host) : host;
      var mergedQueries = lang_1.isPresent(dm.queries) ? collection_1.StringMapWrapper.merge(dm.queries, queries) : queries;
      if (dm instanceof metadata_1.ComponentMetadata) {
        return new metadata_1.ComponentMetadata({
          selector: dm.selector,
          inputs: mergedInputs,
          outputs: mergedOutputs,
          host: mergedHost,
          exportAs: dm.exportAs,
          moduleId: dm.moduleId,
          queries: mergedQueries,
          changeDetection: dm.changeDetection,
          providers: dm.providers,
          viewProviders: dm.viewProviders
        });
      } else {
        return new metadata_1.DirectiveMetadata({
          selector: dm.selector,
          inputs: mergedInputs,
          outputs: mergedOutputs,
          host: mergedHost,
          exportAs: dm.exportAs,
          queries: mergedQueries,
          providers: dm.providers
        });
      }
    };
    DirectiveResolver = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], DirectiveResolver);
    return DirectiveResolver;
  })();
  exports.DirectiveResolver = DirectiveResolver;
  exports.CODEGEN_DIRECTIVE_RESOLVER = new DirectiveResolver();
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/view_resolver", ["angular2/src/core/di", "angular2/src/core/metadata/view", "angular2/src/core/metadata/directives", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/reflection/reflection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var view_1 = require("angular2/src/core/metadata/view");
  var directives_1 = require("angular2/src/core/metadata/directives");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var reflection_1 = require("angular2/src/core/reflection/reflection");
  var ViewResolver = (function() {
    function ViewResolver() {
      this._cache = new collection_1.Map();
    }
    ViewResolver.prototype.resolve = function(component) {
      var view = this._cache.get(component);
      if (lang_1.isBlank(view)) {
        view = this._resolve(component);
        this._cache.set(component, view);
      }
      return view;
    };
    ViewResolver.prototype._resolve = function(component) {
      var compMeta;
      var viewMeta;
      reflection_1.reflector.annotations(component).forEach(function(m) {
        if (m instanceof view_1.ViewMetadata) {
          viewMeta = m;
        }
        if (m instanceof directives_1.ComponentMetadata) {
          compMeta = m;
        }
      });
      if (lang_1.isPresent(compMeta)) {
        if (lang_1.isBlank(compMeta.template) && lang_1.isBlank(compMeta.templateUrl) && lang_1.isBlank(viewMeta)) {
          throw new exceptions_1.BaseException("Component '" + lang_1.stringify(component) + "' must have either 'template', 'templateUrl', or '@View' set.");
        } else if (lang_1.isPresent(compMeta.template) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("template", component);
        } else if (lang_1.isPresent(compMeta.templateUrl) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("templateUrl", component);
        } else if (lang_1.isPresent(compMeta.directives) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("directives", component);
        } else if (lang_1.isPresent(compMeta.pipes) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("pipes", component);
        } else if (lang_1.isPresent(compMeta.encapsulation) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("encapsulation", component);
        } else if (lang_1.isPresent(compMeta.styles) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("styles", component);
        } else if (lang_1.isPresent(compMeta.styleUrls) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("styleUrls", component);
        } else if (lang_1.isPresent(viewMeta)) {
          return viewMeta;
        } else {
          return new view_1.ViewMetadata({
            templateUrl: compMeta.templateUrl,
            template: compMeta.template,
            directives: compMeta.directives,
            pipes: compMeta.pipes,
            encapsulation: compMeta.encapsulation,
            styles: compMeta.styles,
            styleUrls: compMeta.styleUrls
          });
        }
      } else {
        if (lang_1.isBlank(viewMeta)) {
          throw new exceptions_1.BaseException("No View decorator found on component '" + lang_1.stringify(component) + "'");
        } else {
          return viewMeta;
        }
      }
      return null;
    };
    ViewResolver.prototype._throwMixingViewAndComponent = function(propertyName, component) {
      throw new exceptions_1.BaseException("Component '" + lang_1.stringify(component) + "' cannot have both '" + propertyName + "' and '@View' set at the same time\"");
    };
    ViewResolver = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], ViewResolver);
    return ViewResolver;
  })();
  exports.ViewResolver = ViewResolver;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/debug/debug_element", ["angular2/src/facade/lang", "angular2/src/facade/exceptions"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var DebugElement = (function() {
    function DebugElement() {}
    Object.defineProperty(DebugElement.prototype, "componentInstance", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(DebugElement.prototype, "nativeElement", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(DebugElement.prototype, "elementRef", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(DebugElement.prototype, "children", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(DebugElement.prototype, "componentViewChildren", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    DebugElement.prototype.query = function(predicate, scope) {
      if (scope === void 0) {
        scope = Scope.all;
      }
      var results = this.queryAll(predicate, scope);
      return results.length > 0 ? results[0] : null;
    };
    DebugElement.prototype.queryAll = function(predicate, scope) {
      if (scope === void 0) {
        scope = Scope.all;
      }
      var elementsInScope = scope(this);
      return elementsInScope.filter(predicate);
    };
    return DebugElement;
  })();
  exports.DebugElement = DebugElement;
  var DebugElement_ = (function(_super) {
    __extends(DebugElement_, _super);
    function DebugElement_(_appElement) {
      _super.call(this);
      this._appElement = _appElement;
    }
    Object.defineProperty(DebugElement_.prototype, "componentInstance", {
      get: function() {
        if (!lang_1.isPresent(this._appElement)) {
          return null;
        }
        return this._appElement.getComponent();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugElement_.prototype, "nativeElement", {
      get: function() {
        return this.elementRef.nativeElement;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugElement_.prototype, "elementRef", {
      get: function() {
        return this._appElement.ref;
      },
      enumerable: true,
      configurable: true
    });
    DebugElement_.prototype.getDirectiveInstance = function(directiveIndex) {
      return this._appElement.getDirectiveAtIndex(directiveIndex);
    };
    Object.defineProperty(DebugElement_.prototype, "children", {
      get: function() {
        return this._getChildElements(this._appElement.parentView, this._appElement);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugElement_.prototype, "componentViewChildren", {
      get: function() {
        if (!lang_1.isPresent(this._appElement.componentView)) {
          return [];
        }
        return this._getChildElements(this._appElement.componentView, null);
      },
      enumerable: true,
      configurable: true
    });
    DebugElement_.prototype.triggerEventHandler = function(eventName, eventObj) {
      this._appElement.parentView.triggerEventHandlers(eventName, eventObj, this._appElement.proto.index);
    };
    DebugElement_.prototype.hasDirective = function(type) {
      if (!lang_1.isPresent(this._appElement)) {
        return false;
      }
      return this._appElement.hasDirective(type);
    };
    DebugElement_.prototype.inject = function(type) {
      if (!lang_1.isPresent(this._appElement)) {
        return null;
      }
      return this._appElement.get(type);
    };
    DebugElement_.prototype.getLocal = function(name) {
      return this._appElement.parentView.locals.get(name);
    };
    DebugElement_.prototype._getChildElements = function(view, parentAppElement) {
      var _this = this;
      var els = [];
      for (var i = 0; i < view.appElements.length; ++i) {
        var appEl = view.appElements[i];
        if (appEl.parent == parentAppElement) {
          els.push(new DebugElement_(appEl));
          var views = appEl.nestedViews;
          if (lang_1.isPresent(views)) {
            views.forEach(function(nextView) {
              els = els.concat(_this._getChildElements(nextView, null));
            });
          }
        }
      }
      return els;
    };
    return DebugElement_;
  })(DebugElement);
  exports.DebugElement_ = DebugElement_;
  function inspectElement(elementRef) {
    return new DebugElement_(elementRef.internalElement);
  }
  exports.inspectElement = inspectElement;
  function asNativeElements(arr) {
    return arr.map(function(debugEl) {
      return debugEl.nativeElement;
    });
  }
  exports.asNativeElements = asNativeElements;
  var Scope = (function() {
    function Scope() {}
    Scope.all = function(debugElement) {
      var scope = [];
      scope.push(debugElement);
      debugElement.children.forEach(function(child) {
        return scope = scope.concat(Scope.all(child));
      });
      debugElement.componentViewChildren.forEach(function(child) {
        return scope = scope.concat(Scope.all(child));
      });
      return scope;
    };
    Scope.light = function(debugElement) {
      var scope = [];
      debugElement.children.forEach(function(child) {
        scope.push(child);
        scope = scope.concat(Scope.light(child));
      });
      return scope;
    };
    Scope.view = function(debugElement) {
      var scope = [];
      debugElement.componentViewChildren.forEach(function(child) {
        scope.push(child);
        scope = scope.concat(Scope.light(child));
      });
      return scope;
    };
    return Scope;
  })();
  exports.Scope = Scope;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/platform_directives_and_pipes", ["angular2/src/core/di", "angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  exports.PLATFORM_DIRECTIVES = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Directives"));
  exports.PLATFORM_PIPES = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Pipes"));
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/platform_common_providers", ["angular2/src/facade/lang", "angular2/src/core/di", "angular2/src/core/console", "angular2/src/core/reflection/reflection", "angular2/src/core/testability/testability"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var di_1 = require("angular2/src/core/di");
  var console_1 = require("angular2/src/core/console");
  var reflection_1 = require("angular2/src/core/reflection/reflection");
  var testability_1 = require("angular2/src/core/testability/testability");
  function _reflector() {
    return reflection_1.reflector;
  }
  exports.PLATFORM_COMMON_PROVIDERS = lang_1.CONST_EXPR([new di_1.Provider(reflection_1.Reflector, {
    useFactory: _reflector,
    deps: []
  }), testability_1.TestabilityRegistry, console_1.Console]);
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/pipe_resolver", ["angular2/src/core/di", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/core/metadata", "angular2/src/core/reflection/reflection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var metadata_1 = require("angular2/src/core/metadata");
  var reflection_1 = require("angular2/src/core/reflection/reflection");
  function _isPipeMetadata(type) {
    return type instanceof metadata_1.PipeMetadata;
  }
  var PipeResolver = (function() {
    function PipeResolver() {}
    PipeResolver.prototype.resolve = function(type) {
      var metas = reflection_1.reflector.annotations(di_1.resolveForwardRef(type));
      if (lang_1.isPresent(metas)) {
        var annotation = metas.find(_isPipeMetadata);
        if (lang_1.isPresent(annotation)) {
          return annotation;
        }
      }
      throw new exceptions_1.BaseException("No Pipe decorator found on " + lang_1.stringify(type));
    };
    PipeResolver = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], PipeResolver);
    return PipeResolver;
  })();
  exports.PipeResolver = PipeResolver;
  exports.CODEGEN_PIPE_RESOLVER = new PipeResolver();
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/dom_adapter", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  exports.DOM = null;
  function setRootDomAdapter(adapter) {
    if (lang_1.isBlank(exports.DOM)) {
      exports.DOM = adapter;
    }
  }
  exports.setRootDomAdapter = setRootDomAdapter;
  var DomAdapter = (function() {
    function DomAdapter() {}
    Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
      get: function() {
        return this._attrToPropMap;
      },
      set: function(value) {
        this._attrToPropMap = value;
      },
      enumerable: true,
      configurable: true
    });
    ;
    ;
    return DomAdapter;
  })();
  exports.DomAdapter = DomAdapter;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/animate/css_animation_options", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var CssAnimationOptions = (function() {
    function CssAnimationOptions() {
      this.classesToAdd = [];
      this.classesToRemove = [];
      this.animationClasses = [];
    }
    return CssAnimationOptions;
  })();
  exports.CssAnimationOptions = CssAnimationOptions;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/facade/math", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  exports.Math = lang_1.global.Math;
  exports.NaN = typeof exports.NaN;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/util", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var CAMEL_CASE_REGEXP = /([A-Z])/g;
  var DASH_CASE_REGEXP = /-([a-z])/g;
  function camelCaseToDashCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function(m) {
      return '-' + m[1].toLowerCase();
    });
  }
  exports.camelCaseToDashCase = camelCaseToDashCase;
  function dashCaseToCamelCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function(m) {
      return m[1].toUpperCase();
    });
  }
  exports.dashCaseToCamelCase = dashCaseToCamelCase;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/animate/browser_details", ["angular2/src/core/di", "angular2/src/facade/math", "angular2/src/platform/dom/dom_adapter"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var math_1 = require("angular2/src/facade/math");
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var BrowserDetails = (function() {
    function BrowserDetails() {
      this.elapsedTimeIncludesDelay = false;
      this.doesElapsedTimeIncludesDelay();
    }
    BrowserDetails.prototype.doesElapsedTimeIncludesDelay = function() {
      var _this = this;
      var div = dom_adapter_1.DOM.createElement('div');
      dom_adapter_1.DOM.setAttribute(div, 'style', "position: absolute; top: -9999px; left: -9999px; width: 1px;\n      height: 1px; transition: all 1ms linear 1ms;");
      this.raf(function(timestamp) {
        dom_adapter_1.DOM.on(div, 'transitionend', function(event) {
          var elapsed = math_1.Math.round(event.elapsedTime * 1000);
          _this.elapsedTimeIncludesDelay = elapsed == 2;
          dom_adapter_1.DOM.remove(div);
        });
        dom_adapter_1.DOM.setStyle(div, 'width', '2px');
      }, 2);
    };
    BrowserDetails.prototype.raf = function(callback, frames) {
      if (frames === void 0) {
        frames = 1;
      }
      var queue = new RafQueue(callback, frames);
      return function() {
        return queue.cancel();
      };
    };
    BrowserDetails = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], BrowserDetails);
    return BrowserDetails;
  })();
  exports.BrowserDetails = BrowserDetails;
  var RafQueue = (function() {
    function RafQueue(callback, frames) {
      this.callback = callback;
      this.frames = frames;
      this._raf();
    }
    RafQueue.prototype._raf = function() {
      var _this = this;
      this.currentFrameId = dom_adapter_1.DOM.requestAnimationFrame(function(timestamp) {
        return _this._nextFrame(timestamp);
      });
    };
    RafQueue.prototype._nextFrame = function(timestamp) {
      this.frames--;
      if (this.frames > 0) {
        this._raf();
      } else {
        this.callback(timestamp);
      }
    };
    RafQueue.prototype.cancel = function() {
      dom_adapter_1.DOM.cancelAnimationFrame(this.currentFrameId);
      this.currentFrameId = null;
    };
    return RafQueue;
  })();
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/dom_tokens", ["angular2/src/core/di", "angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  exports.DOCUMENT = lang_1.CONST_EXPR(new di_1.OpaqueToken('DocumentToken'));
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/events/event_manager", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/core/di", "angular2/src/core/zone/ng_zone", "angular2/src/facade/collection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var di_1 = require("angular2/src/core/di");
  var ng_zone_1 = require("angular2/src/core/zone/ng_zone");
  var collection_1 = require("angular2/src/facade/collection");
  exports.EVENT_MANAGER_PLUGINS = lang_1.CONST_EXPR(new di_1.OpaqueToken("EventManagerPlugins"));
  var EventManager = (function() {
    function EventManager(plugins, _zone) {
      var _this = this;
      this._zone = _zone;
      plugins.forEach(function(p) {
        return p.manager = _this;
      });
      this._plugins = collection_1.ListWrapper.reversed(plugins);
    }
    EventManager.prototype.addEventListener = function(element, eventName, handler) {
      var plugin = this._findPluginFor(eventName);
      plugin.addEventListener(element, eventName, handler);
    };
    EventManager.prototype.addGlobalEventListener = function(target, eventName, handler) {
      var plugin = this._findPluginFor(eventName);
      return plugin.addGlobalEventListener(target, eventName, handler);
    };
    EventManager.prototype.getZone = function() {
      return this._zone;
    };
    EventManager.prototype._findPluginFor = function(eventName) {
      var plugins = this._plugins;
      for (var i = 0; i < plugins.length; i++) {
        var plugin = plugins[i];
        if (plugin.supports(eventName)) {
          return plugin;
        }
      }
      throw new exceptions_1.BaseException("No event manager plugin found for event " + eventName);
    };
    EventManager = __decorate([di_1.Injectable(), __param(0, di_1.Inject(exports.EVENT_MANAGER_PLUGINS)), __metadata('design:paramtypes', [Array, ng_zone_1.NgZone])], EventManager);
    return EventManager;
  })();
  exports.EventManager = EventManager;
  var EventManagerPlugin = (function() {
    function EventManagerPlugin() {}
    EventManagerPlugin.prototype.supports = function(eventName) {
      return false;
    };
    EventManagerPlugin.prototype.addEventListener = function(element, eventName, handler) {
      throw "not implemented";
    };
    EventManagerPlugin.prototype.addGlobalEventListener = function(element, eventName, handler) {
      throw "not implemented";
    };
    return EventManagerPlugin;
  })();
  exports.EventManagerPlugin = EventManagerPlugin;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/events/dom_events", ["angular2/src/platform/dom/dom_adapter", "angular2/core", "angular2/src/platform/dom/events/event_manager"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var core_1 = require("angular2/core");
  var event_manager_1 = require("angular2/src/platform/dom/events/event_manager");
  var DomEventsPlugin = (function(_super) {
    __extends(DomEventsPlugin, _super);
    function DomEventsPlugin() {
      _super.apply(this, arguments);
    }
    DomEventsPlugin.prototype.supports = function(eventName) {
      return true;
    };
    DomEventsPlugin.prototype.addEventListener = function(element, eventName, handler) {
      var zone = this.manager.getZone();
      var outsideHandler = function(event) {
        return zone.run(function() {
          return handler(event);
        });
      };
      this.manager.getZone().runOutsideAngular(function() {
        dom_adapter_1.DOM.on(element, eventName, outsideHandler);
      });
    };
    DomEventsPlugin.prototype.addGlobalEventListener = function(target, eventName, handler) {
      var element = dom_adapter_1.DOM.getGlobalEventTarget(target);
      var zone = this.manager.getZone();
      var outsideHandler = function(event) {
        return zone.run(function() {
          return handler(event);
        });
      };
      return this.manager.getZone().runOutsideAngular(function() {
        return dom_adapter_1.DOM.onAndCancel(element, eventName, outsideHandler);
      });
    };
    DomEventsPlugin = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], DomEventsPlugin);
    return DomEventsPlugin;
  })(event_manager_1.EventManagerPlugin);
  exports.DomEventsPlugin = DomEventsPlugin;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/debug/by", ["angular2/src/facade/lang", "angular2/src/platform/dom/dom_adapter"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var By = (function() {
    function By() {}
    By.all = function() {
      return function(debugElement) {
        return true;
      };
    };
    By.css = function(selector) {
      return function(debugElement) {
        return lang_1.isPresent(debugElement.nativeElement) ? dom_adapter_1.DOM.elementMatches(debugElement.nativeElement, selector) : false;
      };
    };
    By.directive = function(type) {
      return function(debugElement) {
        return debugElement.hasDirective(type);
      };
    };
    return By;
  })();
  exports.By = By;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/debug/debug_element_view_listener", ["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/core/di", "angular2/src/core/linker/view_listener", "angular2/src/platform/dom/dom_adapter", "angular2/src/core/debug/debug_element"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var collection_1 = require("angular2/src/facade/collection");
  var di_1 = require("angular2/src/core/di");
  var view_listener_1 = require("angular2/src/core/linker/view_listener");
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var debug_element_1 = require("angular2/src/core/debug/debug_element");
  var NG_ID_PROPERTY = 'ngid';
  var INSPECT_GLOBAL_NAME = 'ng.probe';
  var NG_ID_SEPARATOR = '#';
  var _allIdsByView = new collection_1.Map();
  var _allViewsById = new collection_1.Map();
  var _nextId = 0;
  function _setElementId(element, indices) {
    if (lang_1.isPresent(element) && dom_adapter_1.DOM.isElementNode(element)) {
      dom_adapter_1.DOM.setData(element, NG_ID_PROPERTY, indices.join(NG_ID_SEPARATOR));
    }
  }
  function _getElementId(element) {
    var elId = dom_adapter_1.DOM.getData(element, NG_ID_PROPERTY);
    if (lang_1.isPresent(elId)) {
      return elId.split(NG_ID_SEPARATOR).map(function(partStr) {
        return lang_1.NumberWrapper.parseInt(partStr, 10);
      });
    } else {
      return null;
    }
  }
  function inspectNativeElement(element) {
    var elId = _getElementId(element);
    if (lang_1.isPresent(elId)) {
      var view = _allViewsById.get(elId[0]);
      if (lang_1.isPresent(view)) {
        return new debug_element_1.DebugElement_(view.appElements[elId[1]]);
      }
    }
    return null;
  }
  exports.inspectNativeElement = inspectNativeElement;
  var DebugElementViewListener = (function() {
    function DebugElementViewListener() {
      dom_adapter_1.DOM.setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
    }
    DebugElementViewListener.prototype.onViewCreated = function(view) {
      var viewId = _nextId++;
      _allViewsById.set(viewId, view);
      _allIdsByView.set(view, viewId);
      for (var i = 0; i < view.appElements.length; i++) {
        var el = view.appElements[i];
        _setElementId(el.nativeElement, [viewId, i]);
      }
    };
    DebugElementViewListener.prototype.onViewDestroyed = function(view) {
      var viewId = _allIdsByView.get(view);
      _allIdsByView.delete(view);
      _allViewsById.delete(viewId);
    };
    DebugElementViewListener = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], DebugElementViewListener);
    return DebugElementViewListener;
  })();
  exports.DebugElementViewListener = DebugElementViewListener;
  exports.ELEMENT_PROBE_PROVIDERS = lang_1.CONST_EXPR([DebugElementViewListener, lang_1.CONST_EXPR(new di_1.Provider(view_listener_1.AppViewListener, {useExisting: DebugElementViewListener}))]);
  exports.ELEMENT_PROBE_BINDINGS = exports.ELEMENT_PROBE_PROVIDERS;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/events/key_events", ["angular2/src/platform/dom/dom_adapter", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/platform/dom/events/event_manager", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var lang_1 = require("angular2/src/facade/lang");
  var collection_1 = require("angular2/src/facade/collection");
  var event_manager_1 = require("angular2/src/platform/dom/events/event_manager");
  var di_1 = require("angular2/src/core/di");
  var modifierKeys = ['alt', 'control', 'meta', 'shift'];
  var modifierKeyGetters = {
    'alt': function(event) {
      return event.altKey;
    },
    'control': function(event) {
      return event.ctrlKey;
    },
    'meta': function(event) {
      return event.metaKey;
    },
    'shift': function(event) {
      return event.shiftKey;
    }
  };
  var KeyEventsPlugin = (function(_super) {
    __extends(KeyEventsPlugin, _super);
    function KeyEventsPlugin() {
      _super.call(this);
    }
    KeyEventsPlugin.prototype.supports = function(eventName) {
      return lang_1.isPresent(KeyEventsPlugin.parseEventName(eventName));
    };
    KeyEventsPlugin.prototype.addEventListener = function(element, eventName, handler) {
      var parsedEvent = KeyEventsPlugin.parseEventName(eventName);
      var outsideHandler = KeyEventsPlugin.eventCallback(element, collection_1.StringMapWrapper.get(parsedEvent, 'fullKey'), handler, this.manager.getZone());
      this.manager.getZone().runOutsideAngular(function() {
        dom_adapter_1.DOM.on(element, collection_1.StringMapWrapper.get(parsedEvent, 'domEventName'), outsideHandler);
      });
    };
    KeyEventsPlugin.parseEventName = function(eventName) {
      var parts = eventName.toLowerCase().split('.');
      var domEventName = parts.shift();
      if ((parts.length === 0) || !(lang_1.StringWrapper.equals(domEventName, 'keydown') || lang_1.StringWrapper.equals(domEventName, 'keyup'))) {
        return null;
      }
      var key = KeyEventsPlugin._normalizeKey(parts.pop());
      var fullKey = '';
      modifierKeys.forEach(function(modifierName) {
        if (collection_1.ListWrapper.contains(parts, modifierName)) {
          collection_1.ListWrapper.remove(parts, modifierName);
          fullKey += modifierName + '.';
        }
      });
      fullKey += key;
      if (parts.length != 0 || key.length === 0) {
        return null;
      }
      var result = collection_1.StringMapWrapper.create();
      collection_1.StringMapWrapper.set(result, 'domEventName', domEventName);
      collection_1.StringMapWrapper.set(result, 'fullKey', fullKey);
      return result;
    };
    KeyEventsPlugin.getEventFullKey = function(event) {
      var fullKey = '';
      var key = dom_adapter_1.DOM.getEventKey(event);
      key = key.toLowerCase();
      if (lang_1.StringWrapper.equals(key, ' ')) {
        key = 'space';
      } else if (lang_1.StringWrapper.equals(key, '.')) {
        key = 'dot';
      }
      modifierKeys.forEach(function(modifierName) {
        if (modifierName != key) {
          var modifierGetter = collection_1.StringMapWrapper.get(modifierKeyGetters, modifierName);
          if (modifierGetter(event)) {
            fullKey += modifierName + '.';
          }
        }
      });
      fullKey += key;
      return fullKey;
    };
    KeyEventsPlugin.eventCallback = function(element, fullKey, handler, zone) {
      return function(event) {
        if (lang_1.StringWrapper.equals(KeyEventsPlugin.getEventFullKey(event), fullKey)) {
          zone.run(function() {
            return handler(event);
          });
        }
      };
    };
    KeyEventsPlugin._normalizeKey = function(keyName) {
      switch (keyName) {
        case 'esc':
          return 'escape';
        default:
          return keyName;
      }
    };
    KeyEventsPlugin = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], KeyEventsPlugin);
    return KeyEventsPlugin;
  })(event_manager_1.EventManagerPlugin);
  exports.KeyEventsPlugin = KeyEventsPlugin;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/events/hammer_common", ["angular2/src/platform/dom/events/event_manager", "angular2/src/facade/collection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var event_manager_1 = require("angular2/src/platform/dom/events/event_manager");
  var collection_1 = require("angular2/src/facade/collection");
  var _eventNames = {
    'pan': true,
    'panstart': true,
    'panmove': true,
    'panend': true,
    'pancancel': true,
    'panleft': true,
    'panright': true,
    'panup': true,
    'pandown': true,
    'pinch': true,
    'pinchstart': true,
    'pinchmove': true,
    'pinchend': true,
    'pinchcancel': true,
    'pinchin': true,
    'pinchout': true,
    'press': true,
    'pressup': true,
    'rotate': true,
    'rotatestart': true,
    'rotatemove': true,
    'rotateend': true,
    'rotatecancel': true,
    'swipe': true,
    'swipeleft': true,
    'swiperight': true,
    'swipeup': true,
    'swipedown': true,
    'tap': true
  };
  var HammerGesturesPluginCommon = (function(_super) {
    __extends(HammerGesturesPluginCommon, _super);
    function HammerGesturesPluginCommon() {
      _super.call(this);
    }
    HammerGesturesPluginCommon.prototype.supports = function(eventName) {
      eventName = eventName.toLowerCase();
      return collection_1.StringMapWrapper.contains(_eventNames, eventName);
    };
    return HammerGesturesPluginCommon;
  })(event_manager_1.EventManagerPlugin);
  exports.HammerGesturesPluginCommon = HammerGesturesPluginCommon;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/url_resolver", ["angular2/src/core/di", "angular2/src/facade/lang", "angular2/src/core/application_tokens", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  var application_tokens_1 = require("angular2/src/core/application_tokens");
  var di_2 = require("angular2/src/core/di");
  function createWithoutPackagePrefix() {
    return new UrlResolver();
  }
  exports.createWithoutPackagePrefix = createWithoutPackagePrefix;
  exports.DEFAULT_PACKAGE_URL_PROVIDER = new di_2.Provider(application_tokens_1.PACKAGE_ROOT_URL, {useValue: "/"});
  var UrlResolver = (function() {
    function UrlResolver(packagePrefix) {
      if (packagePrefix === void 0) {
        packagePrefix = null;
      }
      if (lang_1.isPresent(packagePrefix)) {
        this._packagePrefix = lang_1.StringWrapper.stripRight(packagePrefix, "/") + "/";
      }
    }
    UrlResolver.prototype.resolve = function(baseUrl, url) {
      var resolvedUrl = url;
      if (lang_1.isPresent(baseUrl) && baseUrl.length > 0) {
        resolvedUrl = _resolveUrl(baseUrl, resolvedUrl);
      }
      if (lang_1.isPresent(this._packagePrefix) && getUrlScheme(resolvedUrl) == "package") {
        resolvedUrl = resolvedUrl.replace("package:", this._packagePrefix);
      }
      return resolvedUrl;
    };
    UrlResolver = __decorate([di_1.Injectable(), __param(0, di_1.Inject(application_tokens_1.PACKAGE_ROOT_URL)), __metadata('design:paramtypes', [String])], UrlResolver);
    return UrlResolver;
  })();
  exports.UrlResolver = UrlResolver;
  function getUrlScheme(url) {
    var match = _split(url);
    return (match && match[_ComponentIndex.Scheme]) || "";
  }
  exports.getUrlScheme = getUrlScheme;
  function _buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
    var out = [];
    if (lang_1.isPresent(opt_scheme)) {
      out.push(opt_scheme + ':');
    }
    if (lang_1.isPresent(opt_domain)) {
      out.push('//');
      if (lang_1.isPresent(opt_userInfo)) {
        out.push(opt_userInfo + '@');
      }
      out.push(opt_domain);
      if (lang_1.isPresent(opt_port)) {
        out.push(':' + opt_port);
      }
    }
    if (lang_1.isPresent(opt_path)) {
      out.push(opt_path);
    }
    if (lang_1.isPresent(opt_queryData)) {
      out.push('?' + opt_queryData);
    }
    if (lang_1.isPresent(opt_fragment)) {
      out.push('#' + opt_fragment);
    }
    return out.join('');
  }
  var _splitRe = lang_1.RegExpWrapper.create('^' + '(?:' + '([^:/?#.]+)' + ':)?' + '(?://' + '(?:([^/?#]*)@)?' + '([\\w\\d\\-\\u0100-\\uffff.%]*)' + '(?::([0-9]+))?' + ')?' + '([^?#]+)?' + '(?:\\?([^#]*))?' + '(?:#(.*))?' + '$');
  var _ComponentIndex;
  (function(_ComponentIndex) {
    _ComponentIndex[_ComponentIndex["Scheme"] = 1] = "Scheme";
    _ComponentIndex[_ComponentIndex["UserInfo"] = 2] = "UserInfo";
    _ComponentIndex[_ComponentIndex["Domain"] = 3] = "Domain";
    _ComponentIndex[_ComponentIndex["Port"] = 4] = "Port";
    _ComponentIndex[_ComponentIndex["Path"] = 5] = "Path";
    _ComponentIndex[_ComponentIndex["QueryData"] = 6] = "QueryData";
    _ComponentIndex[_ComponentIndex["Fragment"] = 7] = "Fragment";
  })(_ComponentIndex || (_ComponentIndex = {}));
  function _split(uri) {
    return lang_1.RegExpWrapper.firstMatch(_splitRe, uri);
  }
  function _removeDotSegments(path) {
    if (path == '/')
      return '/';
    var leadingSlash = path[0] == '/' ? '/' : '';
    var trailingSlash = path[path.length - 1] === '/' ? '/' : '';
    var segments = path.split('/');
    var out = [];
    var up = 0;
    for (var pos = 0; pos < segments.length; pos++) {
      var segment = segments[pos];
      switch (segment) {
        case '':
        case '.':
          break;
        case '..':
          if (out.length > 0) {
            out.pop();
          } else {
            up++;
          }
          break;
        default:
          out.push(segment);
      }
    }
    if (leadingSlash == '') {
      while (up-- > 0) {
        out.unshift('..');
      }
      if (out.length === 0)
        out.push('.');
    }
    return leadingSlash + out.join('/') + trailingSlash;
  }
  function _joinAndCanonicalizePath(parts) {
    var path = parts[_ComponentIndex.Path];
    path = lang_1.isBlank(path) ? '' : _removeDotSegments(path);
    parts[_ComponentIndex.Path] = path;
    return _buildFromEncodedParts(parts[_ComponentIndex.Scheme], parts[_ComponentIndex.UserInfo], parts[_ComponentIndex.Domain], parts[_ComponentIndex.Port], path, parts[_ComponentIndex.QueryData], parts[_ComponentIndex.Fragment]);
  }
  function _resolveUrl(base, url) {
    var parts = _split(encodeURI(url));
    var baseParts = _split(base);
    if (lang_1.isPresent(parts[_ComponentIndex.Scheme])) {
      return _joinAndCanonicalizePath(parts);
    } else {
      parts[_ComponentIndex.Scheme] = baseParts[_ComponentIndex.Scheme];
    }
    for (var i = _ComponentIndex.Scheme; i <= _ComponentIndex.Port; i++) {
      if (lang_1.isBlank(parts[i])) {
        parts[i] = baseParts[i];
      }
    }
    if (parts[_ComponentIndex.Path][0] == '/') {
      return _joinAndCanonicalizePath(parts);
    }
    var path = baseParts[_ComponentIndex.Path];
    if (lang_1.isBlank(path))
      path = '/';
    var index = path.lastIndexOf('/');
    path = path.substring(0, index + 1) + parts[_ComponentIndex.Path];
    parts[_ComponentIndex.Path] = path;
    return _joinAndCanonicalizePath(parts);
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/xhr", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var XHR = (function() {
    function XHR() {}
    XHR.prototype.get = function(url) {
      return null;
    };
    return XHR;
  })();
  exports.XHR = XHR;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/selector", ["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/facade/exceptions"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var _EMPTY_ATTR_VALUE = '';
  var _SELECTOR_REGEXP = lang_1.RegExpWrapper.create('(\\:not\\()|' + '([-\\w]+)|' + '(?:\\.([-\\w]+))|' + '(?:\\[([-\\w*]+)(?:=([^\\]]*))?\\])|' + '(\\))|' + '(\\s*,\\s*)');
  var CssSelector = (function() {
    function CssSelector() {
      this.element = null;
      this.classNames = [];
      this.attrs = [];
      this.notSelectors = [];
    }
    CssSelector.parse = function(selector) {
      var results = [];
      var _addResult = function(res, cssSel) {
        if (cssSel.notSelectors.length > 0 && lang_1.isBlank(cssSel.element) && collection_1.ListWrapper.isEmpty(cssSel.classNames) && collection_1.ListWrapper.isEmpty(cssSel.attrs)) {
          cssSel.element = "*";
        }
        res.push(cssSel);
      };
      var cssSelector = new CssSelector();
      var matcher = lang_1.RegExpWrapper.matcher(_SELECTOR_REGEXP, selector);
      var match;
      var current = cssSelector;
      var inNot = false;
      while (lang_1.isPresent(match = lang_1.RegExpMatcherWrapper.next(matcher))) {
        if (lang_1.isPresent(match[1])) {
          if (inNot) {
            throw new exceptions_1.BaseException('Nesting :not is not allowed in a selector');
          }
          inNot = true;
          current = new CssSelector();
          cssSelector.notSelectors.push(current);
        }
        if (lang_1.isPresent(match[2])) {
          current.setElement(match[2]);
        }
        if (lang_1.isPresent(match[3])) {
          current.addClassName(match[3]);
        }
        if (lang_1.isPresent(match[4])) {
          current.addAttribute(match[4], match[5]);
        }
        if (lang_1.isPresent(match[6])) {
          inNot = false;
          current = cssSelector;
        }
        if (lang_1.isPresent(match[7])) {
          if (inNot) {
            throw new exceptions_1.BaseException('Multiple selectors in :not are not supported');
          }
          _addResult(results, cssSelector);
          cssSelector = current = new CssSelector();
        }
      }
      _addResult(results, cssSelector);
      return results;
    };
    CssSelector.prototype.isElementSelector = function() {
      return lang_1.isPresent(this.element) && collection_1.ListWrapper.isEmpty(this.classNames) && collection_1.ListWrapper.isEmpty(this.attrs) && this.notSelectors.length === 0;
    };
    CssSelector.prototype.setElement = function(element) {
      if (element === void 0) {
        element = null;
      }
      this.element = element;
    };
    CssSelector.prototype.getMatchingElementTemplate = function() {
      var tagName = lang_1.isPresent(this.element) ? this.element : 'div';
      var classAttr = this.classNames.length > 0 ? " class=\"" + this.classNames.join(' ') + "\"" : '';
      var attrs = '';
      for (var i = 0; i < this.attrs.length; i += 2) {
        var attrName = this.attrs[i];
        var attrValue = this.attrs[i + 1] !== '' ? "=\"" + this.attrs[i + 1] + "\"" : '';
        attrs += " " + attrName + attrValue;
      }
      return "<" + tagName + classAttr + attrs + "></" + tagName + ">";
    };
    CssSelector.prototype.addAttribute = function(name, value) {
      if (value === void 0) {
        value = _EMPTY_ATTR_VALUE;
      }
      this.attrs.push(name);
      if (lang_1.isPresent(value)) {
        value = value.toLowerCase();
      } else {
        value = _EMPTY_ATTR_VALUE;
      }
      this.attrs.push(value);
    };
    CssSelector.prototype.addClassName = function(name) {
      this.classNames.push(name.toLowerCase());
    };
    CssSelector.prototype.toString = function() {
      var res = '';
      if (lang_1.isPresent(this.element)) {
        res += this.element;
      }
      if (lang_1.isPresent(this.classNames)) {
        for (var i = 0; i < this.classNames.length; i++) {
          res += '.' + this.classNames[i];
        }
      }
      if (lang_1.isPresent(this.attrs)) {
        for (var i = 0; i < this.attrs.length; ) {
          var attrName = this.attrs[i++];
          var attrValue = this.attrs[i++];
          res += '[' + attrName;
          if (attrValue.length > 0) {
            res += '=' + attrValue;
          }
          res += ']';
        }
      }
      this.notSelectors.forEach(function(notSelector) {
        return res += ":not(" + notSelector + ")";
      });
      return res;
    };
    return CssSelector;
  })();
  exports.CssSelector = CssSelector;
  var SelectorMatcher = (function() {
    function SelectorMatcher() {
      this._elementMap = new collection_1.Map();
      this._elementPartialMap = new collection_1.Map();
      this._classMap = new collection_1.Map();
      this._classPartialMap = new collection_1.Map();
      this._attrValueMap = new collection_1.Map();
      this._attrValuePartialMap = new collection_1.Map();
      this._listContexts = [];
    }
    SelectorMatcher.createNotMatcher = function(notSelectors) {
      var notMatcher = new SelectorMatcher();
      notMatcher.addSelectables(notSelectors, null);
      return notMatcher;
    };
    SelectorMatcher.prototype.addSelectables = function(cssSelectors, callbackCtxt) {
      var listContext = null;
      if (cssSelectors.length > 1) {
        listContext = new SelectorListContext(cssSelectors);
        this._listContexts.push(listContext);
      }
      for (var i = 0; i < cssSelectors.length; i++) {
        this._addSelectable(cssSelectors[i], callbackCtxt, listContext);
      }
    };
    SelectorMatcher.prototype._addSelectable = function(cssSelector, callbackCtxt, listContext) {
      var matcher = this;
      var element = cssSelector.element;
      var classNames = cssSelector.classNames;
      var attrs = cssSelector.attrs;
      var selectable = new SelectorContext(cssSelector, callbackCtxt, listContext);
      if (lang_1.isPresent(element)) {
        var isTerminal = attrs.length === 0 && classNames.length === 0;
        if (isTerminal) {
          this._addTerminal(matcher._elementMap, element, selectable);
        } else {
          matcher = this._addPartial(matcher._elementPartialMap, element);
        }
      }
      if (lang_1.isPresent(classNames)) {
        for (var index = 0; index < classNames.length; index++) {
          var isTerminal = attrs.length === 0 && index === classNames.length - 1;
          var className = classNames[index];
          if (isTerminal) {
            this._addTerminal(matcher._classMap, className, selectable);
          } else {
            matcher = this._addPartial(matcher._classPartialMap, className);
          }
        }
      }
      if (lang_1.isPresent(attrs)) {
        for (var index = 0; index < attrs.length; ) {
          var isTerminal = index === attrs.length - 2;
          var attrName = attrs[index++];
          var attrValue = attrs[index++];
          if (isTerminal) {
            var terminalMap = matcher._attrValueMap;
            var terminalValuesMap = terminalMap.get(attrName);
            if (lang_1.isBlank(terminalValuesMap)) {
              terminalValuesMap = new collection_1.Map();
              terminalMap.set(attrName, terminalValuesMap);
            }
            this._addTerminal(terminalValuesMap, attrValue, selectable);
          } else {
            var parttialMap = matcher._attrValuePartialMap;
            var partialValuesMap = parttialMap.get(attrName);
            if (lang_1.isBlank(partialValuesMap)) {
              partialValuesMap = new collection_1.Map();
              parttialMap.set(attrName, partialValuesMap);
            }
            matcher = this._addPartial(partialValuesMap, attrValue);
          }
        }
      }
    };
    SelectorMatcher.prototype._addTerminal = function(map, name, selectable) {
      var terminalList = map.get(name);
      if (lang_1.isBlank(terminalList)) {
        terminalList = [];
        map.set(name, terminalList);
      }
      terminalList.push(selectable);
    };
    SelectorMatcher.prototype._addPartial = function(map, name) {
      var matcher = map.get(name);
      if (lang_1.isBlank(matcher)) {
        matcher = new SelectorMatcher();
        map.set(name, matcher);
      }
      return matcher;
    };
    SelectorMatcher.prototype.match = function(cssSelector, matchedCallback) {
      var result = false;
      var element = cssSelector.element;
      var classNames = cssSelector.classNames;
      var attrs = cssSelector.attrs;
      for (var i = 0; i < this._listContexts.length; i++) {
        this._listContexts[i].alreadyMatched = false;
      }
      result = this._matchTerminal(this._elementMap, element, cssSelector, matchedCallback) || result;
      result = this._matchPartial(this._elementPartialMap, element, cssSelector, matchedCallback) || result;
      if (lang_1.isPresent(classNames)) {
        for (var index = 0; index < classNames.length; index++) {
          var className = classNames[index];
          result = this._matchTerminal(this._classMap, className, cssSelector, matchedCallback) || result;
          result = this._matchPartial(this._classPartialMap, className, cssSelector, matchedCallback) || result;
        }
      }
      if (lang_1.isPresent(attrs)) {
        for (var index = 0; index < attrs.length; ) {
          var attrName = attrs[index++];
          var attrValue = attrs[index++];
          var terminalValuesMap = this._attrValueMap.get(attrName);
          if (!lang_1.StringWrapper.equals(attrValue, _EMPTY_ATTR_VALUE)) {
            result = this._matchTerminal(terminalValuesMap, _EMPTY_ATTR_VALUE, cssSelector, matchedCallback) || result;
          }
          result = this._matchTerminal(terminalValuesMap, attrValue, cssSelector, matchedCallback) || result;
          var partialValuesMap = this._attrValuePartialMap.get(attrName);
          if (!lang_1.StringWrapper.equals(attrValue, _EMPTY_ATTR_VALUE)) {
            result = this._matchPartial(partialValuesMap, _EMPTY_ATTR_VALUE, cssSelector, matchedCallback) || result;
          }
          result = this._matchPartial(partialValuesMap, attrValue, cssSelector, matchedCallback) || result;
        }
      }
      return result;
    };
    SelectorMatcher.prototype._matchTerminal = function(map, name, cssSelector, matchedCallback) {
      if (lang_1.isBlank(map) || lang_1.isBlank(name)) {
        return false;
      }
      var selectables = map.get(name);
      var starSelectables = map.get("*");
      if (lang_1.isPresent(starSelectables)) {
        selectables = selectables.concat(starSelectables);
      }
      if (lang_1.isBlank(selectables)) {
        return false;
      }
      var selectable;
      var result = false;
      for (var index = 0; index < selectables.length; index++) {
        selectable = selectables[index];
        result = selectable.finalize(cssSelector, matchedCallback) || result;
      }
      return result;
    };
    SelectorMatcher.prototype._matchPartial = function(map, name, cssSelector, matchedCallback) {
      if (lang_1.isBlank(map) || lang_1.isBlank(name)) {
        return false;
      }
      var nestedSelector = map.get(name);
      if (lang_1.isBlank(nestedSelector)) {
        return false;
      }
      return nestedSelector.match(cssSelector, matchedCallback);
    };
    return SelectorMatcher;
  })();
  exports.SelectorMatcher = SelectorMatcher;
  var SelectorListContext = (function() {
    function SelectorListContext(selectors) {
      this.selectors = selectors;
      this.alreadyMatched = false;
    }
    return SelectorListContext;
  })();
  exports.SelectorListContext = SelectorListContext;
  var SelectorContext = (function() {
    function SelectorContext(selector, cbContext, listContext) {
      this.selector = selector;
      this.cbContext = cbContext;
      this.listContext = listContext;
      this.notSelectors = selector.notSelectors;
    }
    SelectorContext.prototype.finalize = function(cssSelector, callback) {
      var result = true;
      if (this.notSelectors.length > 0 && (lang_1.isBlank(this.listContext) || !this.listContext.alreadyMatched)) {
        var notMatcher = SelectorMatcher.createNotMatcher(this.notSelectors);
        result = !notMatcher.match(cssSelector, null);
      }
      if (result && lang_1.isPresent(callback) && (lang_1.isBlank(this.listContext) || !this.listContext.alreadyMatched)) {
        if (lang_1.isPresent(this.listContext)) {
          this.listContext.alreadyMatched = true;
        }
        callback(this.selector, this.cbContext);
      }
      return result;
    };
    return SelectorContext;
  })();
  exports.SelectorContext = SelectorContext;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/util", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var CAMEL_CASE_REGEXP = /([A-Z])/g;
  var DASH_CASE_REGEXP = /-([a-z])/g;
  var SINGLE_QUOTE_ESCAPE_STRING_RE = /'|\\|\n|\r|\$/g;
  var DOUBLE_QUOTE_ESCAPE_STRING_RE = /"|\\|\n|\r|\$/g;
  exports.MODULE_SUFFIX = lang_1.IS_DART ? '.dart' : '.js';
  exports.CONST_VAR = lang_1.IS_DART ? 'const' : 'var';
  function camelCaseToDashCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function(m) {
      return '-' + m[1].toLowerCase();
    });
  }
  exports.camelCaseToDashCase = camelCaseToDashCase;
  function dashCaseToCamelCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function(m) {
      return m[1].toUpperCase();
    });
  }
  exports.dashCaseToCamelCase = dashCaseToCamelCase;
  function escapeSingleQuoteString(input) {
    if (lang_1.isBlank(input)) {
      return null;
    }
    return "'" + escapeString(input, SINGLE_QUOTE_ESCAPE_STRING_RE) + "'";
  }
  exports.escapeSingleQuoteString = escapeSingleQuoteString;
  function escapeDoubleQuoteString(input) {
    if (lang_1.isBlank(input)) {
      return null;
    }
    return "\"" + escapeString(input, DOUBLE_QUOTE_ESCAPE_STRING_RE) + "\"";
  }
  exports.escapeDoubleQuoteString = escapeDoubleQuoteString;
  function escapeString(input, re) {
    return lang_1.StringWrapper.replaceAllMapped(input, re, function(match) {
      if (match[0] == '$') {
        return lang_1.IS_DART ? '\\$' : '$';
      } else if (match[0] == '\n') {
        return '\\n';
      } else if (match[0] == '\r') {
        return '\\r';
      } else {
        return "\\" + match[0];
      }
    });
  }
  function codeGenExportVariable(name) {
    if (lang_1.IS_DART) {
      return "const " + name + " = ";
    } else {
      return "var " + name + " = exports['" + name + "'] = ";
    }
  }
  exports.codeGenExportVariable = codeGenExportVariable;
  function codeGenConstConstructorCall(name) {
    if (lang_1.IS_DART) {
      return "const " + name;
    } else {
      return "new " + name;
    }
  }
  exports.codeGenConstConstructorCall = codeGenConstConstructorCall;
  function codeGenValueFn(params, value, fnName) {
    if (fnName === void 0) {
      fnName = '';
    }
    if (lang_1.IS_DART) {
      return codeGenFnHeader(params, fnName) + " => " + value;
    } else {
      return codeGenFnHeader(params, fnName) + " { return " + value + "; }";
    }
  }
  exports.codeGenValueFn = codeGenValueFn;
  function codeGenFnHeader(params, fnName) {
    if (fnName === void 0) {
      fnName = '';
    }
    if (lang_1.IS_DART) {
      return fnName + "(" + params.join(',') + ")";
    } else {
      return "function " + fnName + "(" + params.join(',') + ")";
    }
  }
  exports.codeGenFnHeader = codeGenFnHeader;
  function codeGenToString(expr) {
    if (lang_1.IS_DART) {
      return "'${" + expr + "}'";
    } else {
      return expr;
    }
  }
  exports.codeGenToString = codeGenToString;
  function splitAtColon(input, defaultValues) {
    var parts = lang_1.StringWrapper.split(input.trim(), /\s*:\s*/g);
    if (parts.length > 1) {
      return parts;
    } else {
      return defaultValues;
    }
  }
  exports.splitAtColon = splitAtColon;
  var Statement = (function() {
    function Statement(statement) {
      this.statement = statement;
    }
    return Statement;
  })();
  exports.Statement = Statement;
  var Expression = (function() {
    function Expression(expression, isArray) {
      if (isArray === void 0) {
        isArray = false;
      }
      this.expression = expression;
      this.isArray = isArray;
    }
    return Expression;
  })();
  exports.Expression = Expression;
  function escapeValue(value) {
    if (value instanceof Expression) {
      return value.expression;
    } else if (lang_1.isString(value)) {
      return escapeSingleQuoteString(value);
    } else if (lang_1.isBlank(value)) {
      return 'null';
    } else {
      return "" + value;
    }
  }
  exports.escapeValue = escapeValue;
  function codeGenArray(data) {
    return "[" + data.map(escapeValue).join(',') + "]";
  }
  exports.codeGenArray = codeGenArray;
  function codeGenFlatArray(values) {
    var result = '([';
    var isFirstArrayEntry = true;
    var concatFn = lang_1.IS_DART ? '.addAll' : 'concat';
    for (var i = 0; i < values.length; i++) {
      var value = values[i];
      if (value instanceof Expression && value.isArray) {
        result += "])." + concatFn + "(" + value.expression + ")." + concatFn + "([";
        isFirstArrayEntry = true;
      } else {
        if (!isFirstArrayEntry) {
          result += ',';
        }
        isFirstArrayEntry = false;
        result += escapeValue(value);
      }
    }
    result += '])';
    return result;
  }
  exports.codeGenFlatArray = codeGenFlatArray;
  function codeGenStringMap(keyValueArray) {
    return "{" + keyValueArray.map(codeGenKeyValue).join(',') + "}";
  }
  exports.codeGenStringMap = codeGenStringMap;
  function codeGenKeyValue(keyValue) {
    return escapeValue(keyValue[0]) + ":" + escapeValue(keyValue[1]);
  }
  function addAll(source, target) {
    for (var i = 0; i < source.length; i++) {
      target.push(source[i]);
    }
  }
  exports.addAll = addAll;
  function flattenArray(source, target) {
    if (lang_1.isPresent(source)) {
      for (var i = 0; i < source.length; i++) {
        var item = source[i];
        if (lang_1.isArray(item)) {
          flattenArray(item, target);
        } else {
          target.push(item);
        }
      }
    }
    return target;
  }
  exports.flattenArray = flattenArray;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/interfaces", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(LifecycleHooks) {
    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
  })(exports.LifecycleHooks || (exports.LifecycleHooks = {}));
  var LifecycleHooks = exports.LifecycleHooks;
  exports.LIFECYCLE_HOOKS_VALUES = [LifecycleHooks.OnInit, LifecycleHooks.OnDestroy, LifecycleHooks.DoCheck, LifecycleHooks.OnChanges, LifecycleHooks.AfterContentInit, LifecycleHooks.AfterContentChecked, LifecycleHooks.AfterViewInit, LifecycleHooks.AfterViewChecked];
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/template_ast", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var TextAst = (function() {
    function TextAst(value, ngContentIndex, sourceSpan) {
      this.value = value;
      this.ngContentIndex = ngContentIndex;
      this.sourceSpan = sourceSpan;
    }
    TextAst.prototype.visit = function(visitor, context) {
      return visitor.visitText(this, context);
    };
    return TextAst;
  })();
  exports.TextAst = TextAst;
  var BoundTextAst = (function() {
    function BoundTextAst(value, ngContentIndex, sourceSpan) {
      this.value = value;
      this.ngContentIndex = ngContentIndex;
      this.sourceSpan = sourceSpan;
    }
    BoundTextAst.prototype.visit = function(visitor, context) {
      return visitor.visitBoundText(this, context);
    };
    return BoundTextAst;
  })();
  exports.BoundTextAst = BoundTextAst;
  var AttrAst = (function() {
    function AttrAst(name, value, sourceSpan) {
      this.name = name;
      this.value = value;
      this.sourceSpan = sourceSpan;
    }
    AttrAst.prototype.visit = function(visitor, context) {
      return visitor.visitAttr(this, context);
    };
    return AttrAst;
  })();
  exports.AttrAst = AttrAst;
  var BoundElementPropertyAst = (function() {
    function BoundElementPropertyAst(name, type, value, unit, sourceSpan) {
      this.name = name;
      this.type = type;
      this.value = value;
      this.unit = unit;
      this.sourceSpan = sourceSpan;
    }
    BoundElementPropertyAst.prototype.visit = function(visitor, context) {
      return visitor.visitElementProperty(this, context);
    };
    return BoundElementPropertyAst;
  })();
  exports.BoundElementPropertyAst = BoundElementPropertyAst;
  var BoundEventAst = (function() {
    function BoundEventAst(name, target, handler, sourceSpan) {
      this.name = name;
      this.target = target;
      this.handler = handler;
      this.sourceSpan = sourceSpan;
    }
    BoundEventAst.prototype.visit = function(visitor, context) {
      return visitor.visitEvent(this, context);
    };
    Object.defineProperty(BoundEventAst.prototype, "fullName", {
      get: function() {
        if (lang_1.isPresent(this.target)) {
          return this.target + ":" + this.name;
        } else {
          return this.name;
        }
      },
      enumerable: true,
      configurable: true
    });
    return BoundEventAst;
  })();
  exports.BoundEventAst = BoundEventAst;
  var VariableAst = (function() {
    function VariableAst(name, value, sourceSpan) {
      this.name = name;
      this.value = value;
      this.sourceSpan = sourceSpan;
    }
    VariableAst.prototype.visit = function(visitor, context) {
      return visitor.visitVariable(this, context);
    };
    return VariableAst;
  })();
  exports.VariableAst = VariableAst;
  var ElementAst = (function() {
    function ElementAst(name, attrs, inputs, outputs, exportAsVars, directives, children, ngContentIndex, sourceSpan) {
      this.name = name;
      this.attrs = attrs;
      this.inputs = inputs;
      this.outputs = outputs;
      this.exportAsVars = exportAsVars;
      this.directives = directives;
      this.children = children;
      this.ngContentIndex = ngContentIndex;
      this.sourceSpan = sourceSpan;
    }
    ElementAst.prototype.visit = function(visitor, context) {
      return visitor.visitElement(this, context);
    };
    ElementAst.prototype.isBound = function() {
      return (this.inputs.length > 0 || this.outputs.length > 0 || this.exportAsVars.length > 0 || this.directives.length > 0);
    };
    ElementAst.prototype.getComponent = function() {
      return this.directives.length > 0 && this.directives[0].directive.isComponent ? this.directives[0].directive : null;
    };
    return ElementAst;
  })();
  exports.ElementAst = ElementAst;
  var EmbeddedTemplateAst = (function() {
    function EmbeddedTemplateAst(attrs, outputs, vars, directives, children, ngContentIndex, sourceSpan) {
      this.attrs = attrs;
      this.outputs = outputs;
      this.vars = vars;
      this.directives = directives;
      this.children = children;
      this.ngContentIndex = ngContentIndex;
      this.sourceSpan = sourceSpan;
    }
    EmbeddedTemplateAst.prototype.visit = function(visitor, context) {
      return visitor.visitEmbeddedTemplate(this, context);
    };
    return EmbeddedTemplateAst;
  })();
  exports.EmbeddedTemplateAst = EmbeddedTemplateAst;
  var BoundDirectivePropertyAst = (function() {
    function BoundDirectivePropertyAst(directiveName, templateName, value, sourceSpan) {
      this.directiveName = directiveName;
      this.templateName = templateName;
      this.value = value;
      this.sourceSpan = sourceSpan;
    }
    BoundDirectivePropertyAst.prototype.visit = function(visitor, context) {
      return visitor.visitDirectiveProperty(this, context);
    };
    return BoundDirectivePropertyAst;
  })();
  exports.BoundDirectivePropertyAst = BoundDirectivePropertyAst;
  var DirectiveAst = (function() {
    function DirectiveAst(directive, inputs, hostProperties, hostEvents, exportAsVars, sourceSpan) {
      this.directive = directive;
      this.inputs = inputs;
      this.hostProperties = hostProperties;
      this.hostEvents = hostEvents;
      this.exportAsVars = exportAsVars;
      this.sourceSpan = sourceSpan;
    }
    DirectiveAst.prototype.visit = function(visitor, context) {
      return visitor.visitDirective(this, context);
    };
    return DirectiveAst;
  })();
  exports.DirectiveAst = DirectiveAst;
  var NgContentAst = (function() {
    function NgContentAst(index, ngContentIndex, sourceSpan) {
      this.index = index;
      this.ngContentIndex = ngContentIndex;
      this.sourceSpan = sourceSpan;
    }
    NgContentAst.prototype.visit = function(visitor, context) {
      return visitor.visitNgContent(this, context);
    };
    return NgContentAst;
  })();
  exports.NgContentAst = NgContentAst;
  (function(PropertyBindingType) {
    PropertyBindingType[PropertyBindingType["Property"] = 0] = "Property";
    PropertyBindingType[PropertyBindingType["Attribute"] = 1] = "Attribute";
    PropertyBindingType[PropertyBindingType["Class"] = 2] = "Class";
    PropertyBindingType[PropertyBindingType["Style"] = 3] = "Style";
  })(exports.PropertyBindingType || (exports.PropertyBindingType = {}));
  var PropertyBindingType = exports.PropertyBindingType;
  function templateVisitAll(visitor, asts, context) {
    if (context === void 0) {
      context = null;
    }
    var result = [];
    asts.forEach(function(ast) {
      var astResult = ast.visit(visitor, context);
      if (lang_1.isPresent(astResult)) {
        result.push(astResult);
      }
    });
    return result;
  }
  exports.templateVisitAll = templateVisitAll;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/source_module", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var MODULE_REGEXP = /#MODULE\[([^\]]*)\]/g;
  function moduleRef(moduleUrl) {
    return "#MODULE[" + moduleUrl + "]";
  }
  exports.moduleRef = moduleRef;
  var SourceModule = (function() {
    function SourceModule(moduleUrl, sourceWithModuleRefs) {
      this.moduleUrl = moduleUrl;
      this.sourceWithModuleRefs = sourceWithModuleRefs;
    }
    SourceModule.getSourceWithoutImports = function(sourceWithModuleRefs) {
      return lang_1.StringWrapper.replaceAllMapped(sourceWithModuleRefs, MODULE_REGEXP, function(match) {
        return '';
      });
    };
    SourceModule.prototype.getSourceWithImports = function() {
      var _this = this;
      var moduleAliases = {};
      var imports = [];
      var newSource = lang_1.StringWrapper.replaceAllMapped(this.sourceWithModuleRefs, MODULE_REGEXP, function(match) {
        var moduleUrl = match[1];
        var alias = moduleAliases[moduleUrl];
        if (lang_1.isBlank(alias)) {
          if (moduleUrl == _this.moduleUrl) {
            alias = '';
          } else {
            alias = "import" + imports.length;
            imports.push([moduleUrl, alias]);
          }
          moduleAliases[moduleUrl] = alias;
        }
        return alias.length > 0 ? alias + "." : '';
      });
      return new SourceWithImports(newSource, imports);
    };
    return SourceModule;
  })();
  exports.SourceModule = SourceModule;
  var SourceExpression = (function() {
    function SourceExpression(declarations, expression) {
      this.declarations = declarations;
      this.expression = expression;
    }
    return SourceExpression;
  })();
  exports.SourceExpression = SourceExpression;
  var SourceExpressions = (function() {
    function SourceExpressions(declarations, expressions) {
      this.declarations = declarations;
      this.expressions = expressions;
    }
    return SourceExpressions;
  })();
  exports.SourceExpressions = SourceExpressions;
  var SourceWithImports = (function() {
    function SourceWithImports(source, imports) {
      this.source = source;
      this.imports = imports;
    }
    return SourceWithImports;
  })();
  exports.SourceWithImports = SourceWithImports;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/change_definition_factory", ["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/core/reflection/reflection", "angular2/src/core/change_detection/change_detection", "angular2/src/compiler/template_ast", "angular2/src/core/linker/interfaces"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var reflection_1 = require("angular2/src/core/reflection/reflection");
  var change_detection_1 = require("angular2/src/core/change_detection/change_detection");
  var template_ast_1 = require("angular2/src/compiler/template_ast");
  var interfaces_1 = require("angular2/src/core/linker/interfaces");
  function createChangeDetectorDefinitions(componentType, componentStrategy, genConfig, parsedTemplate) {
    var pvVisitors = [];
    var visitor = new ProtoViewVisitor(null, pvVisitors, componentStrategy);
    template_ast_1.templateVisitAll(visitor, parsedTemplate);
    return createChangeDefinitions(pvVisitors, componentType, genConfig);
  }
  exports.createChangeDetectorDefinitions = createChangeDetectorDefinitions;
  var ProtoViewVisitor = (function() {
    function ProtoViewVisitor(parent, allVisitors, strategy) {
      this.parent = parent;
      this.allVisitors = allVisitors;
      this.strategy = strategy;
      this.nodeCount = 0;
      this.boundElementCount = 0;
      this.variableNames = [];
      this.bindingRecords = [];
      this.eventRecords = [];
      this.directiveRecords = [];
      this.viewIndex = allVisitors.length;
      allVisitors.push(this);
    }
    ProtoViewVisitor.prototype.visitEmbeddedTemplate = function(ast, context) {
      this.nodeCount++;
      this.boundElementCount++;
      template_ast_1.templateVisitAll(this, ast.outputs);
      for (var i = 0; i < ast.directives.length; i++) {
        ast.directives[i].visit(this, i);
      }
      var childVisitor = new ProtoViewVisitor(this, this.allVisitors, change_detection_1.ChangeDetectionStrategy.Default);
      template_ast_1.templateVisitAll(childVisitor, ast.vars);
      template_ast_1.templateVisitAll(childVisitor, ast.children);
      return null;
    };
    ProtoViewVisitor.prototype.visitElement = function(ast, context) {
      this.nodeCount++;
      if (ast.isBound()) {
        this.boundElementCount++;
      }
      template_ast_1.templateVisitAll(this, ast.inputs, null);
      template_ast_1.templateVisitAll(this, ast.outputs);
      template_ast_1.templateVisitAll(this, ast.exportAsVars);
      for (var i = 0; i < ast.directives.length; i++) {
        ast.directives[i].visit(this, i);
      }
      template_ast_1.templateVisitAll(this, ast.children);
      return null;
    };
    ProtoViewVisitor.prototype.visitNgContent = function(ast, context) {
      return null;
    };
    ProtoViewVisitor.prototype.visitVariable = function(ast, context) {
      this.variableNames.push(ast.name);
      return null;
    };
    ProtoViewVisitor.prototype.visitEvent = function(ast, directiveRecord) {
      var bindingRecord = lang_1.isPresent(directiveRecord) ? change_detection_1.BindingRecord.createForHostEvent(ast.handler, ast.fullName, directiveRecord) : change_detection_1.BindingRecord.createForEvent(ast.handler, ast.fullName, this.boundElementCount - 1);
      this.eventRecords.push(bindingRecord);
      return null;
    };
    ProtoViewVisitor.prototype.visitElementProperty = function(ast, directiveRecord) {
      var boundElementIndex = this.boundElementCount - 1;
      var dirIndex = lang_1.isPresent(directiveRecord) ? directiveRecord.directiveIndex : null;
      var bindingRecord;
      if (ast.type === template_ast_1.PropertyBindingType.Property) {
        bindingRecord = lang_1.isPresent(dirIndex) ? change_detection_1.BindingRecord.createForHostProperty(dirIndex, ast.value, ast.name) : change_detection_1.BindingRecord.createForElementProperty(ast.value, boundElementIndex, ast.name);
      } else if (ast.type === template_ast_1.PropertyBindingType.Attribute) {
        bindingRecord = lang_1.isPresent(dirIndex) ? change_detection_1.BindingRecord.createForHostAttribute(dirIndex, ast.value, ast.name) : change_detection_1.BindingRecord.createForElementAttribute(ast.value, boundElementIndex, ast.name);
      } else if (ast.type === template_ast_1.PropertyBindingType.Class) {
        bindingRecord = lang_1.isPresent(dirIndex) ? change_detection_1.BindingRecord.createForHostClass(dirIndex, ast.value, ast.name) : change_detection_1.BindingRecord.createForElementClass(ast.value, boundElementIndex, ast.name);
      } else if (ast.type === template_ast_1.PropertyBindingType.Style) {
        bindingRecord = lang_1.isPresent(dirIndex) ? change_detection_1.BindingRecord.createForHostStyle(dirIndex, ast.value, ast.name, ast.unit) : change_detection_1.BindingRecord.createForElementStyle(ast.value, boundElementIndex, ast.name, ast.unit);
      }
      this.bindingRecords.push(bindingRecord);
      return null;
    };
    ProtoViewVisitor.prototype.visitAttr = function(ast, context) {
      return null;
    };
    ProtoViewVisitor.prototype.visitBoundText = function(ast, context) {
      var nodeIndex = this.nodeCount++;
      this.bindingRecords.push(change_detection_1.BindingRecord.createForTextNode(ast.value, nodeIndex));
      return null;
    };
    ProtoViewVisitor.prototype.visitText = function(ast, context) {
      this.nodeCount++;
      return null;
    };
    ProtoViewVisitor.prototype.visitDirective = function(ast, directiveIndexAsNumber) {
      var directiveIndex = new change_detection_1.DirectiveIndex(this.boundElementCount - 1, directiveIndexAsNumber);
      var directiveMetadata = ast.directive;
      var outputsArray = [];
      collection_1.StringMapWrapper.forEach(ast.directive.outputs, function(eventName, dirProperty) {
        return outputsArray.push([dirProperty, eventName]);
      });
      var directiveRecord = new change_detection_1.DirectiveRecord({
        directiveIndex: directiveIndex,
        callAfterContentInit: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterContentInit) !== -1,
        callAfterContentChecked: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterContentChecked) !== -1,
        callAfterViewInit: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterViewInit) !== -1,
        callAfterViewChecked: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterViewChecked) !== -1,
        callOnChanges: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.OnChanges) !== -1,
        callDoCheck: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.DoCheck) !== -1,
        callOnInit: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.OnInit) !== -1,
        callOnDestroy: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.OnDestroy) !== -1,
        changeDetection: directiveMetadata.changeDetection,
        outputs: outputsArray
      });
      this.directiveRecords.push(directiveRecord);
      template_ast_1.templateVisitAll(this, ast.inputs, directiveRecord);
      var bindingRecords = this.bindingRecords;
      if (directiveRecord.callOnChanges) {
        bindingRecords.push(change_detection_1.BindingRecord.createDirectiveOnChanges(directiveRecord));
      }
      if (directiveRecord.callOnInit) {
        bindingRecords.push(change_detection_1.BindingRecord.createDirectiveOnInit(directiveRecord));
      }
      if (directiveRecord.callDoCheck) {
        bindingRecords.push(change_detection_1.BindingRecord.createDirectiveDoCheck(directiveRecord));
      }
      template_ast_1.templateVisitAll(this, ast.hostProperties, directiveRecord);
      template_ast_1.templateVisitAll(this, ast.hostEvents, directiveRecord);
      template_ast_1.templateVisitAll(this, ast.exportAsVars);
      return null;
    };
    ProtoViewVisitor.prototype.visitDirectiveProperty = function(ast, directiveRecord) {
      var setter = reflection_1.reflector.setter(ast.directiveName);
      this.bindingRecords.push(change_detection_1.BindingRecord.createForDirective(ast.value, ast.directiveName, setter, directiveRecord));
      return null;
    };
    return ProtoViewVisitor;
  })();
  function createChangeDefinitions(pvVisitors, componentType, genConfig) {
    var pvVariableNames = _collectNestedProtoViewsVariableNames(pvVisitors);
    return pvVisitors.map(function(pvVisitor) {
      var id = componentType.name + "_" + pvVisitor.viewIndex;
      return new change_detection_1.ChangeDetectorDefinition(id, pvVisitor.strategy, pvVariableNames[pvVisitor.viewIndex], pvVisitor.bindingRecords, pvVisitor.eventRecords, pvVisitor.directiveRecords, genConfig);
    });
  }
  function _collectNestedProtoViewsVariableNames(pvVisitors) {
    var nestedPvVariableNames = collection_1.ListWrapper.createFixedSize(pvVisitors.length);
    pvVisitors.forEach(function(pv) {
      var parentVariableNames = lang_1.isPresent(pv.parent) ? nestedPvVariableNames[pv.parent.viewIndex] : [];
      nestedPvVariableNames[pv.viewIndex] = parentVariableNames.concat(pv.variableNames);
    });
    return nestedPvVariableNames;
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/transform/template_compiler/change_detector_codegen", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var Codegen = (function() {
    function Codegen(moduleAlias) {}
    Codegen.prototype.generate = function(typeName, changeDetectorTypeName, def) {
      throw "Not implemented in JS";
    };
    Codegen.prototype.toString = function() {
      throw "Not implemented in JS";
    };
    return Codegen;
  })();
  exports.Codegen = Codegen;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/shadow_css", ["angular2/src/facade/collection", "angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var ShadowCss = (function() {
    function ShadowCss() {
      this.strictStyling = true;
    }
    ShadowCss.prototype.shimCssText = function(cssText, selector, hostSelector) {
      if (hostSelector === void 0) {
        hostSelector = '';
      }
      cssText = stripComments(cssText);
      cssText = this._insertDirectives(cssText);
      return this._scopeCssText(cssText, selector, hostSelector);
    };
    ShadowCss.prototype._insertDirectives = function(cssText) {
      cssText = this._insertPolyfillDirectivesInCssText(cssText);
      return this._insertPolyfillRulesInCssText(cssText);
    };
    ShadowCss.prototype._insertPolyfillDirectivesInCssText = function(cssText) {
      return lang_1.StringWrapper.replaceAllMapped(cssText, _cssContentNextSelectorRe, function(m) {
        return m[1] + '{';
      });
    };
    ShadowCss.prototype._insertPolyfillRulesInCssText = function(cssText) {
      return lang_1.StringWrapper.replaceAllMapped(cssText, _cssContentRuleRe, function(m) {
        var rule = m[0];
        rule = lang_1.StringWrapper.replace(rule, m[1], '');
        rule = lang_1.StringWrapper.replace(rule, m[2], '');
        return m[3] + rule;
      });
    };
    ShadowCss.prototype._scopeCssText = function(cssText, scopeSelector, hostSelector) {
      var unscoped = this._extractUnscopedRulesFromCssText(cssText);
      cssText = this._insertPolyfillHostInCssText(cssText);
      cssText = this._convertColonHost(cssText);
      cssText = this._convertColonHostContext(cssText);
      cssText = this._convertShadowDOMSelectors(cssText);
      if (lang_1.isPresent(scopeSelector)) {
        cssText = this._scopeSelectors(cssText, scopeSelector, hostSelector);
      }
      cssText = cssText + '\n' + unscoped;
      return cssText.trim();
    };
    ShadowCss.prototype._extractUnscopedRulesFromCssText = function(cssText) {
      var r = '',
          m;
      var matcher = lang_1.RegExpWrapper.matcher(_cssContentUnscopedRuleRe, cssText);
      while (lang_1.isPresent(m = lang_1.RegExpMatcherWrapper.next(matcher))) {
        var rule = m[0];
        rule = lang_1.StringWrapper.replace(rule, m[2], '');
        rule = lang_1.StringWrapper.replace(rule, m[1], m[3]);
        r += rule + '\n\n';
      }
      return r;
    };
    ShadowCss.prototype._convertColonHost = function(cssText) {
      return this._convertColonRule(cssText, _cssColonHostRe, this._colonHostPartReplacer);
    };
    ShadowCss.prototype._convertColonHostContext = function(cssText) {
      return this._convertColonRule(cssText, _cssColonHostContextRe, this._colonHostContextPartReplacer);
    };
    ShadowCss.prototype._convertColonRule = function(cssText, regExp, partReplacer) {
      return lang_1.StringWrapper.replaceAllMapped(cssText, regExp, function(m) {
        if (lang_1.isPresent(m[2])) {
          var parts = m[2].split(','),
              r = [];
          for (var i = 0; i < parts.length; i++) {
            var p = parts[i];
            if (lang_1.isBlank(p))
              break;
            p = p.trim();
            r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
          }
          return r.join(',');
        } else {
          return _polyfillHostNoCombinator + m[3];
        }
      });
    };
    ShadowCss.prototype._colonHostContextPartReplacer = function(host, part, suffix) {
      if (lang_1.StringWrapper.contains(part, _polyfillHost)) {
        return this._colonHostPartReplacer(host, part, suffix);
      } else {
        return host + part + suffix + ', ' + part + ' ' + host + suffix;
      }
    };
    ShadowCss.prototype._colonHostPartReplacer = function(host, part, suffix) {
      return host + lang_1.StringWrapper.replace(part, _polyfillHost, '') + suffix;
    };
    ShadowCss.prototype._convertShadowDOMSelectors = function(cssText) {
      for (var i = 0; i < _shadowDOMSelectorsRe.length; i++) {
        cssText = lang_1.StringWrapper.replaceAll(cssText, _shadowDOMSelectorsRe[i], ' ');
      }
      return cssText;
    };
    ShadowCss.prototype._scopeSelectors = function(cssText, scopeSelector, hostSelector) {
      var _this = this;
      return processRules(cssText, function(rule) {
        var selector = rule.selector;
        var content = rule.content;
        if (rule.selector[0] != '@' || rule.selector.startsWith('@page')) {
          selector = _this._scopeSelector(rule.selector, scopeSelector, hostSelector, _this.strictStyling);
        } else if (rule.selector.startsWith('@media')) {
          content = _this._scopeSelectors(rule.content, scopeSelector, hostSelector);
        }
        return new CssRule(selector, content);
      });
    };
    ShadowCss.prototype._scopeSelector = function(selector, scopeSelector, hostSelector, strict) {
      var r = [],
          parts = selector.split(',');
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p = p.trim();
        if (this._selectorNeedsScoping(p, scopeSelector)) {
          p = strict && !lang_1.StringWrapper.contains(p, _polyfillHostNoCombinator) ? this._applyStrictSelectorScope(p, scopeSelector) : this._applySelectorScope(p, scopeSelector, hostSelector);
        }
        r.push(p);
      }
      return r.join(', ');
    };
    ShadowCss.prototype._selectorNeedsScoping = function(selector, scopeSelector) {
      var re = this._makeScopeMatcher(scopeSelector);
      return !lang_1.isPresent(lang_1.RegExpWrapper.firstMatch(re, selector));
    };
    ShadowCss.prototype._makeScopeMatcher = function(scopeSelector) {
      var lre = /\[/g;
      var rre = /\]/g;
      scopeSelector = lang_1.StringWrapper.replaceAll(scopeSelector, lre, '\\[');
      scopeSelector = lang_1.StringWrapper.replaceAll(scopeSelector, rre, '\\]');
      return lang_1.RegExpWrapper.create('^(' + scopeSelector + ')' + _selectorReSuffix, 'm');
    };
    ShadowCss.prototype._applySelectorScope = function(selector, scopeSelector, hostSelector) {
      return this._applySimpleSelectorScope(selector, scopeSelector, hostSelector);
    };
    ShadowCss.prototype._applySimpleSelectorScope = function(selector, scopeSelector, hostSelector) {
      if (lang_1.isPresent(lang_1.RegExpWrapper.firstMatch(_polyfillHostRe, selector))) {
        var replaceBy = this.strictStyling ? "[" + hostSelector + "]" : scopeSelector;
        selector = lang_1.StringWrapper.replace(selector, _polyfillHostNoCombinator, replaceBy);
        return lang_1.StringWrapper.replaceAll(selector, _polyfillHostRe, replaceBy + ' ');
      } else {
        return scopeSelector + ' ' + selector;
      }
    };
    ShadowCss.prototype._applyStrictSelectorScope = function(selector, scopeSelector) {
      var isRe = /\[is=([^\]]*)\]/g;
      scopeSelector = lang_1.StringWrapper.replaceAllMapped(scopeSelector, isRe, function(m) {
        return m[1];
      });
      var splits = [' ', '>', '+', '~'],
          scoped = selector,
          attrName = '[' + scopeSelector + ']';
      for (var i = 0; i < splits.length; i++) {
        var sep = splits[i];
        var parts = scoped.split(sep);
        scoped = parts.map(function(p) {
          var t = lang_1.StringWrapper.replaceAll(p.trim(), _polyfillHostRe, '');
          if (t.length > 0 && !collection_1.ListWrapper.contains(splits, t) && !lang_1.StringWrapper.contains(t, attrName)) {
            var re = /([^:]*)(:*)(.*)/g;
            var m = lang_1.RegExpWrapper.firstMatch(re, t);
            if (lang_1.isPresent(m)) {
              p = m[1] + attrName + m[2] + m[3];
            }
          }
          return p;
        }).join(sep);
      }
      return scoped;
    };
    ShadowCss.prototype._insertPolyfillHostInCssText = function(selector) {
      selector = lang_1.StringWrapper.replaceAll(selector, _colonHostContextRe, _polyfillHostContext);
      selector = lang_1.StringWrapper.replaceAll(selector, _colonHostRe, _polyfillHost);
      return selector;
    };
    return ShadowCss;
  })();
  exports.ShadowCss = ShadowCss;
  var _cssContentNextSelectorRe = /polyfill-next-selector[^}]*content:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim;
  var _cssContentRuleRe = /(polyfill-rule)[^}]*(content:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim;
  var _cssContentUnscopedRuleRe = /(polyfill-unscoped-rule)[^}]*(content:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim;
  var _polyfillHost = '-shadowcsshost';
  var _polyfillHostContext = '-shadowcsscontext';
  var _parenSuffix = ')(?:\\((' + '(?:\\([^)(]*\\)|[^)(]*)+?' + ')\\))?([^,{]*)';
  var _cssColonHostRe = lang_1.RegExpWrapper.create('(' + _polyfillHost + _parenSuffix, 'im');
  var _cssColonHostContextRe = lang_1.RegExpWrapper.create('(' + _polyfillHostContext + _parenSuffix, 'im');
  var _polyfillHostNoCombinator = _polyfillHost + '-no-combinator';
  var _shadowDOMSelectorsRe = [/>>>/g, /::shadow/g, /::content/g, /\/deep\//g, /\/shadow-deep\//g, /\/shadow\//g];
  var _selectorReSuffix = '([>\\s~+\[.,{:][\\s\\S]*)?$';
  var _polyfillHostRe = lang_1.RegExpWrapper.create(_polyfillHost, 'im');
  var _colonHostRe = /:host/gim;
  var _colonHostContextRe = /:host-context/gim;
  var _commentRe = /\/\*[\s\S]*?\*\//g;
  function stripComments(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, _commentRe, function(_) {
      return '';
    });
  }
  var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
  var _curlyRe = /([{}])/g;
  var OPEN_CURLY = '{';
  var CLOSE_CURLY = '}';
  var BLOCK_PLACEHOLDER = '%BLOCK%';
  var CssRule = (function() {
    function CssRule(selector, content) {
      this.selector = selector;
      this.content = content;
    }
    return CssRule;
  })();
  exports.CssRule = CssRule;
  function processRules(input, ruleCallback) {
    var inputWithEscapedBlocks = escapeBlocks(input);
    var nextBlockIndex = 0;
    return lang_1.StringWrapper.replaceAllMapped(inputWithEscapedBlocks.escapedString, _ruleRe, function(m) {
      var selector = m[2];
      var content = '';
      var suffix = m[4];
      var contentPrefix = '';
      if (lang_1.isPresent(m[4]) && m[4].startsWith('{' + BLOCK_PLACEHOLDER)) {
        content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
        suffix = m[4].substring(BLOCK_PLACEHOLDER.length + 1);
        contentPrefix = '{';
      }
      var rule = ruleCallback(new CssRule(selector, content));
      return "" + m[1] + rule.selector + m[3] + contentPrefix + rule.content + suffix;
    });
  }
  exports.processRules = processRules;
  var StringWithEscapedBlocks = (function() {
    function StringWithEscapedBlocks(escapedString, blocks) {
      this.escapedString = escapedString;
      this.blocks = blocks;
    }
    return StringWithEscapedBlocks;
  })();
  function escapeBlocks(input) {
    var inputParts = lang_1.StringWrapper.split(input, _curlyRe);
    var resultParts = [];
    var escapedBlocks = [];
    var bracketCount = 0;
    var currentBlockParts = [];
    for (var partIndex = 0; partIndex < inputParts.length; partIndex++) {
      var part = inputParts[partIndex];
      if (part == CLOSE_CURLY) {
        bracketCount--;
      }
      if (bracketCount > 0) {
        currentBlockParts.push(part);
      } else {
        if (currentBlockParts.length > 0) {
          escapedBlocks.push(currentBlockParts.join(''));
          resultParts.push(BLOCK_PLACEHOLDER);
          currentBlockParts = [];
        }
        resultParts.push(part);
      }
      if (part == OPEN_CURLY) {
        bracketCount++;
      }
    }
    if (currentBlockParts.length > 0) {
      escapedBlocks.push(currentBlockParts.join(''));
      resultParts.push(BLOCK_PLACEHOLDER);
    }
    return new StringWithEscapedBlocks(resultParts.join(''), escapedBlocks);
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/style_url_resolver", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var StyleWithImports = (function() {
    function StyleWithImports(style, styleUrls) {
      this.style = style;
      this.styleUrls = styleUrls;
    }
    return StyleWithImports;
  })();
  exports.StyleWithImports = StyleWithImports;
  function isStyleUrlResolvable(url) {
    if (lang_1.isBlank(url) || url.length === 0 || url[0] == '/')
      return false;
    var schemeMatch = lang_1.RegExpWrapper.firstMatch(_urlWithSchemaRe, url);
    return lang_1.isBlank(schemeMatch) || schemeMatch[1] == 'package' || schemeMatch[1] == 'asset';
  }
  exports.isStyleUrlResolvable = isStyleUrlResolvable;
  function extractStyleUrls(resolver, baseUrl, cssText) {
    var foundUrls = [];
    var modifiedCssText = lang_1.StringWrapper.replaceAllMapped(cssText, _cssImportRe, function(m) {
      var url = lang_1.isPresent(m[1]) ? m[1] : m[2];
      if (!isStyleUrlResolvable(url)) {
        return m[0];
      }
      foundUrls.push(resolver.resolve(baseUrl, url));
      return '';
    });
    return new StyleWithImports(modifiedCssText, foundUrls);
  }
  exports.extractStyleUrls = extractStyleUrls;
  var _cssImportRe = /@import\s+(?:url\()?\s*(?:(?:['"]([^'"]*))|([^;\)\s]*))[^;]*;?/g;
  var _urlWithSchemaRe = /^([a-zA-Z\-\+\.]+):/g;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/proto_view_compiler", ["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/compiler/template_ast", "angular2/src/compiler/source_module", "angular2/src/core/linker/view", "angular2/src/core/linker/view_type", "angular2/src/core/linker/element", "angular2/src/compiler/util", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var collection_1 = require("angular2/src/facade/collection");
  var template_ast_1 = require("angular2/src/compiler/template_ast");
  var source_module_1 = require("angular2/src/compiler/source_module");
  var view_1 = require("angular2/src/core/linker/view");
  var view_type_1 = require("angular2/src/core/linker/view_type");
  var element_1 = require("angular2/src/core/linker/element");
  var util_1 = require("angular2/src/compiler/util");
  var di_1 = require("angular2/src/core/di");
  exports.PROTO_VIEW_JIT_IMPORTS = lang_1.CONST_EXPR({
    'AppProtoView': view_1.AppProtoView,
    'AppProtoElement': element_1.AppProtoElement,
    'ViewType': view_type_1.ViewType
  });
  exports.APP_VIEW_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/view' + util_1.MODULE_SUFFIX);
  exports.VIEW_TYPE_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/view_type' + util_1.MODULE_SUFFIX);
  exports.APP_EL_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/element' + util_1.MODULE_SUFFIX);
  exports.METADATA_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/metadata/view' + util_1.MODULE_SUFFIX);
  var IMPLICIT_TEMPLATE_VAR = '\$implicit';
  var CLASS_ATTR = 'class';
  var STYLE_ATTR = 'style';
  var ProtoViewCompiler = (function() {
    function ProtoViewCompiler() {}
    ProtoViewCompiler.prototype.compileProtoViewRuntime = function(metadataCache, component, template, pipes) {
      var protoViewFactory = new RuntimeProtoViewFactory(metadataCache, component, pipes);
      var allProtoViews = [];
      protoViewFactory.createCompileProtoView(template, [], [], allProtoViews);
      return new CompileProtoViews([], allProtoViews);
    };
    ProtoViewCompiler.prototype.compileProtoViewCodeGen = function(resolvedMetadataCacheExpr, component, template, pipes) {
      var protoViewFactory = new CodeGenProtoViewFactory(resolvedMetadataCacheExpr, component, pipes);
      var allProtoViews = [];
      var allStatements = [];
      protoViewFactory.createCompileProtoView(template, [], allStatements, allProtoViews);
      return new CompileProtoViews(allStatements.map(function(stmt) {
        return stmt.statement;
      }), allProtoViews);
    };
    ProtoViewCompiler = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], ProtoViewCompiler);
    return ProtoViewCompiler;
  })();
  exports.ProtoViewCompiler = ProtoViewCompiler;
  var CompileProtoViews = (function() {
    function CompileProtoViews(declarations, protoViews) {
      this.declarations = declarations;
      this.protoViews = protoViews;
    }
    return CompileProtoViews;
  })();
  exports.CompileProtoViews = CompileProtoViews;
  var CompileProtoView = (function() {
    function CompileProtoView(embeddedTemplateIndex, protoElements, protoView) {
      this.embeddedTemplateIndex = embeddedTemplateIndex;
      this.protoElements = protoElements;
      this.protoView = protoView;
    }
    return CompileProtoView;
  })();
  exports.CompileProtoView = CompileProtoView;
  var CompileProtoElement = (function() {
    function CompileProtoElement(boundElementIndex, attrNameAndValues, variableNameAndValues, renderEvents, directives, embeddedTemplateIndex, appProtoEl) {
      this.boundElementIndex = boundElementIndex;
      this.attrNameAndValues = attrNameAndValues;
      this.variableNameAndValues = variableNameAndValues;
      this.renderEvents = renderEvents;
      this.directives = directives;
      this.embeddedTemplateIndex = embeddedTemplateIndex;
      this.appProtoEl = appProtoEl;
    }
    return CompileProtoElement;
  })();
  exports.CompileProtoElement = CompileProtoElement;
  function visitAndReturnContext(visitor, asts, context) {
    template_ast_1.templateVisitAll(visitor, asts, context);
    return context;
  }
  var ProtoViewFactory = (function() {
    function ProtoViewFactory(component) {
      this.component = component;
    }
    ProtoViewFactory.prototype.createCompileProtoView = function(template, templateVariableBindings, targetStatements, targetProtoViews) {
      var embeddedTemplateIndex = targetProtoViews.length;
      targetProtoViews.push(null);
      var builder = new ProtoViewBuilderVisitor(this, targetStatements, targetProtoViews);
      template_ast_1.templateVisitAll(builder, template);
      var viewType = getViewType(this.component, embeddedTemplateIndex);
      var appProtoView = this.createAppProtoView(embeddedTemplateIndex, viewType, templateVariableBindings, targetStatements);
      var cpv = new CompileProtoView(embeddedTemplateIndex, builder.protoElements, appProtoView);
      targetProtoViews[embeddedTemplateIndex] = cpv;
      return cpv;
    };
    return ProtoViewFactory;
  })();
  var CodeGenProtoViewFactory = (function(_super) {
    __extends(CodeGenProtoViewFactory, _super);
    function CodeGenProtoViewFactory(resolvedMetadataCacheExpr, component, pipes) {
      _super.call(this, component);
      this.resolvedMetadataCacheExpr = resolvedMetadataCacheExpr;
      this.pipes = pipes;
      this._nextVarId = 0;
    }
    CodeGenProtoViewFactory.prototype._nextProtoViewVar = function(embeddedTemplateIndex) {
      return "appProtoView" + this._nextVarId++ + "_" + this.component.type.name + embeddedTemplateIndex;
    };
    CodeGenProtoViewFactory.prototype.createAppProtoView = function(embeddedTemplateIndex, viewType, templateVariableBindings, targetStatements) {
      var protoViewVarName = this._nextProtoViewVar(embeddedTemplateIndex);
      var viewTypeExpr = codeGenViewType(viewType);
      var pipesExpr = embeddedTemplateIndex === 0 ? codeGenTypesArray(this.pipes.map(function(pipeMeta) {
        return pipeMeta.type;
      })) : null;
      var statement = "var " + protoViewVarName + " = " + exports.APP_VIEW_MODULE_REF + "AppProtoView.create(" + this.resolvedMetadataCacheExpr.expression + ", " + viewTypeExpr + ", " + pipesExpr + ", " + util_1.codeGenStringMap(templateVariableBindings) + ");";
      targetStatements.push(new util_1.Statement(statement));
      return new util_1.Expression(protoViewVarName);
    };
    CodeGenProtoViewFactory.prototype.createAppProtoElement = function(boundElementIndex, attrNameAndValues, variableNameAndValues, directives, targetStatements) {
      var varName = "appProtoEl" + this._nextVarId++ + "_" + this.component.type.name;
      var value = exports.APP_EL_MODULE_REF + "AppProtoElement.create(\n        " + this.resolvedMetadataCacheExpr.expression + ",\n        " + boundElementIndex + ",\n        " + util_1.codeGenStringMap(attrNameAndValues) + ",\n        " + codeGenDirectivesArray(directives) + ",\n        " + util_1.codeGenStringMap(variableNameAndValues) + "\n      )";
      var statement = "var " + varName + " = " + value + ";";
      targetStatements.push(new util_1.Statement(statement));
      return new util_1.Expression(varName);
    };
    return CodeGenProtoViewFactory;
  })(ProtoViewFactory);
  var RuntimeProtoViewFactory = (function(_super) {
    __extends(RuntimeProtoViewFactory, _super);
    function RuntimeProtoViewFactory(metadataCache, component, pipes) {
      _super.call(this, component);
      this.metadataCache = metadataCache;
      this.pipes = pipes;
    }
    RuntimeProtoViewFactory.prototype.createAppProtoView = function(embeddedTemplateIndex, viewType, templateVariableBindings, targetStatements) {
      var pipes = embeddedTemplateIndex === 0 ? this.pipes.map(function(pipeMeta) {
        return pipeMeta.type.runtime;
      }) : [];
      var templateVars = keyValueArrayToStringMap(templateVariableBindings);
      return view_1.AppProtoView.create(this.metadataCache, viewType, pipes, templateVars);
    };
    RuntimeProtoViewFactory.prototype.createAppProtoElement = function(boundElementIndex, attrNameAndValues, variableNameAndValues, directives, targetStatements) {
      var attrs = keyValueArrayToStringMap(attrNameAndValues);
      return element_1.AppProtoElement.create(this.metadataCache, boundElementIndex, attrs, directives.map(function(dirMeta) {
        return dirMeta.type.runtime;
      }), keyValueArrayToStringMap(variableNameAndValues));
    };
    return RuntimeProtoViewFactory;
  })(ProtoViewFactory);
  var ProtoViewBuilderVisitor = (function() {
    function ProtoViewBuilderVisitor(factory, allStatements, allProtoViews) {
      this.factory = factory;
      this.allStatements = allStatements;
      this.allProtoViews = allProtoViews;
      this.protoElements = [];
      this.boundElementCount = 0;
    }
    ProtoViewBuilderVisitor.prototype._readAttrNameAndValues = function(directives, attrAsts) {
      var attrs = visitAndReturnContext(this, attrAsts, {});
      directives.forEach(function(directiveMeta) {
        collection_1.StringMapWrapper.forEach(directiveMeta.hostAttributes, function(value, name) {
          var prevValue = attrs[name];
          attrs[name] = lang_1.isPresent(prevValue) ? mergeAttributeValue(name, prevValue, value) : value;
        });
      });
      return mapToKeyValueArray(attrs);
    };
    ProtoViewBuilderVisitor.prototype.visitBoundText = function(ast, context) {
      return null;
    };
    ProtoViewBuilderVisitor.prototype.visitText = function(ast, context) {
      return null;
    };
    ProtoViewBuilderVisitor.prototype.visitNgContent = function(ast, context) {
      return null;
    };
    ProtoViewBuilderVisitor.prototype.visitElement = function(ast, context) {
      var _this = this;
      var boundElementIndex = null;
      if (ast.isBound()) {
        boundElementIndex = this.boundElementCount++;
      }
      var component = ast.getComponent();
      var variableNameAndValues = [];
      if (lang_1.isBlank(component)) {
        ast.exportAsVars.forEach(function(varAst) {
          variableNameAndValues.push([varAst.name, null]);
        });
      }
      var directives = [];
      var renderEvents = visitAndReturnContext(this, ast.outputs, new Map());
      collection_1.ListWrapper.forEachWithIndex(ast.directives, function(directiveAst, index) {
        directiveAst.visit(_this, new DirectiveContext(index, boundElementIndex, renderEvents, variableNameAndValues, directives));
      });
      var renderEventArray = [];
      renderEvents.forEach(function(eventAst, _) {
        return renderEventArray.push(eventAst);
      });
      var attrNameAndValues = this._readAttrNameAndValues(directives, ast.attrs);
      this._addProtoElement(ast.isBound(), boundElementIndex, attrNameAndValues, variableNameAndValues, renderEventArray, directives, null);
      template_ast_1.templateVisitAll(this, ast.children);
      return null;
    };
    ProtoViewBuilderVisitor.prototype.visitEmbeddedTemplate = function(ast, context) {
      var _this = this;
      var boundElementIndex = this.boundElementCount++;
      var directives = [];
      collection_1.ListWrapper.forEachWithIndex(ast.directives, function(directiveAst, index) {
        directiveAst.visit(_this, new DirectiveContext(index, boundElementIndex, new Map(), [], directives));
      });
      var attrNameAndValues = this._readAttrNameAndValues(directives, ast.attrs);
      var templateVariableBindings = ast.vars.map(function(varAst) {
        return [varAst.value.length > 0 ? varAst.value : IMPLICIT_TEMPLATE_VAR, varAst.name];
      });
      var nestedProtoView = this.factory.createCompileProtoView(ast.children, templateVariableBindings, this.allStatements, this.allProtoViews);
      this._addProtoElement(true, boundElementIndex, attrNameAndValues, [], [], directives, nestedProtoView.embeddedTemplateIndex);
      return null;
    };
    ProtoViewBuilderVisitor.prototype._addProtoElement = function(isBound, boundElementIndex, attrNameAndValues, variableNameAndValues, renderEvents, directives, embeddedTemplateIndex) {
      var appProtoEl = null;
      if (isBound) {
        appProtoEl = this.factory.createAppProtoElement(boundElementIndex, attrNameAndValues, variableNameAndValues, directives, this.allStatements);
      }
      var compileProtoEl = new CompileProtoElement(boundElementIndex, attrNameAndValues, variableNameAndValues, renderEvents, directives, embeddedTemplateIndex, appProtoEl);
      this.protoElements.push(compileProtoEl);
    };
    ProtoViewBuilderVisitor.prototype.visitVariable = function(ast, ctx) {
      return null;
    };
    ProtoViewBuilderVisitor.prototype.visitAttr = function(ast, attrNameAndValues) {
      attrNameAndValues[ast.name] = ast.value;
      return null;
    };
    ProtoViewBuilderVisitor.prototype.visitDirective = function(ast, ctx) {
      ctx.targetDirectives.push(ast.directive);
      template_ast_1.templateVisitAll(this, ast.hostEvents, ctx.hostEventTargetAndNames);
      ast.exportAsVars.forEach(function(varAst) {
        ctx.targetVariableNameAndValues.push([varAst.name, ctx.index]);
      });
      return null;
    };
    ProtoViewBuilderVisitor.prototype.visitEvent = function(ast, eventTargetAndNames) {
      eventTargetAndNames.set(ast.fullName, ast);
      return null;
    };
    ProtoViewBuilderVisitor.prototype.visitDirectiveProperty = function(ast, context) {
      return null;
    };
    ProtoViewBuilderVisitor.prototype.visitElementProperty = function(ast, context) {
      return null;
    };
    return ProtoViewBuilderVisitor;
  })();
  function mapToKeyValueArray(data) {
    var entryArray = [];
    collection_1.StringMapWrapper.forEach(data, function(value, name) {
      entryArray.push([name, value]);
    });
    collection_1.ListWrapper.sort(entryArray, function(entry1, entry2) {
      return lang_1.StringWrapper.compare(entry1[0], entry2[0]);
    });
    var keyValueArray = [];
    entryArray.forEach(function(entry) {
      keyValueArray.push([entry[0], entry[1]]);
    });
    return keyValueArray;
  }
  function mergeAttributeValue(attrName, attrValue1, attrValue2) {
    if (attrName == CLASS_ATTR || attrName == STYLE_ATTR) {
      return attrValue1 + " " + attrValue2;
    } else {
      return attrValue2;
    }
  }
  var DirectiveContext = (function() {
    function DirectiveContext(index, boundElementIndex, hostEventTargetAndNames, targetVariableNameAndValues, targetDirectives) {
      this.index = index;
      this.boundElementIndex = boundElementIndex;
      this.hostEventTargetAndNames = hostEventTargetAndNames;
      this.targetVariableNameAndValues = targetVariableNameAndValues;
      this.targetDirectives = targetDirectives;
    }
    return DirectiveContext;
  })();
  function keyValueArrayToStringMap(keyValueArray) {
    var stringMap = {};
    for (var i = 0; i < keyValueArray.length; i++) {
      var entry = keyValueArray[i];
      stringMap[entry[0]] = entry[1];
    }
    return stringMap;
  }
  function codeGenDirectivesArray(directives) {
    var expressions = directives.map(function(directiveType) {
      return typeRef(directiveType.type);
    });
    return "[" + expressions.join(',') + "]";
  }
  function codeGenTypesArray(types) {
    var expressions = types.map(typeRef);
    return "[" + expressions.join(',') + "]";
  }
  function codeGenViewType(value) {
    if (lang_1.IS_DART) {
      return "" + exports.VIEW_TYPE_MODULE_REF + value;
    } else {
      return "" + value;
    }
  }
  function typeRef(type) {
    return "" + source_module_1.moduleRef(type.moduleUrl) + type.name;
  }
  function getViewType(component, embeddedTemplateIndex) {
    if (embeddedTemplateIndex > 0) {
      return view_type_1.ViewType.EMBEDDED;
    } else if (component.type.isHost) {
      return view_type_1.ViewType.HOST;
    } else {
      return view_type_1.ViewType.COMPONENT;
    }
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/html_ast", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var HtmlTextAst = (function() {
    function HtmlTextAst(value, sourceSpan) {
      this.value = value;
      this.sourceSpan = sourceSpan;
    }
    HtmlTextAst.prototype.visit = function(visitor, context) {
      return visitor.visitText(this, context);
    };
    return HtmlTextAst;
  })();
  exports.HtmlTextAst = HtmlTextAst;
  var HtmlAttrAst = (function() {
    function HtmlAttrAst(name, value, sourceSpan) {
      this.name = name;
      this.value = value;
      this.sourceSpan = sourceSpan;
    }
    HtmlAttrAst.prototype.visit = function(visitor, context) {
      return visitor.visitAttr(this, context);
    };
    return HtmlAttrAst;
  })();
  exports.HtmlAttrAst = HtmlAttrAst;
  var HtmlElementAst = (function() {
    function HtmlElementAst(name, attrs, children, sourceSpan) {
      this.name = name;
      this.attrs = attrs;
      this.children = children;
      this.sourceSpan = sourceSpan;
    }
    HtmlElementAst.prototype.visit = function(visitor, context) {
      return visitor.visitElement(this, context);
    };
    return HtmlElementAst;
  })();
  exports.HtmlElementAst = HtmlElementAst;
  function htmlVisitAll(visitor, asts, context) {
    if (context === void 0) {
      context = null;
    }
    var result = [];
    asts.forEach(function(ast) {
      var astResult = ast.visit(visitor, context);
      if (lang_1.isPresent(astResult)) {
        result.push(astResult);
      }
    });
    return result;
  }
  exports.htmlVisitAll = htmlVisitAll;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/parse_util", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var ParseLocation = (function() {
    function ParseLocation(file, offset, line, col) {
      this.file = file;
      this.offset = offset;
      this.line = line;
      this.col = col;
    }
    ParseLocation.prototype.toString = function() {
      return this.file.url + "@" + this.line + ":" + this.col;
    };
    return ParseLocation;
  })();
  exports.ParseLocation = ParseLocation;
  var ParseSourceFile = (function() {
    function ParseSourceFile(content, url) {
      this.content = content;
      this.url = url;
    }
    return ParseSourceFile;
  })();
  exports.ParseSourceFile = ParseSourceFile;
  var ParseError = (function() {
    function ParseError(location, msg) {
      this.location = location;
      this.msg = msg;
    }
    ParseError.prototype.toString = function() {
      var source = this.location.file.content;
      var ctxStart = this.location.offset;
      if (ctxStart > source.length - 1) {
        ctxStart = source.length - 1;
      }
      var ctxEnd = ctxStart;
      var ctxLen = 0;
      var ctxLines = 0;
      while (ctxLen < 100 && ctxStart > 0) {
        ctxStart--;
        ctxLen++;
        if (source[ctxStart] == "\n") {
          if (++ctxLines == 3) {
            break;
          }
        }
      }
      ctxLen = 0;
      ctxLines = 0;
      while (ctxLen < 100 && ctxEnd < source.length - 1) {
        ctxEnd++;
        ctxLen++;
        if (source[ctxEnd] == "\n") {
          if (++ctxLines == 3) {
            break;
          }
        }
      }
      var context = source.substring(ctxStart, this.location.offset) + '[ERROR ->]' + source.substring(this.location.offset, ctxEnd + 1);
      return this.msg + " (\"" + context + "\"): " + this.location;
    };
    return ParseError;
  })();
  exports.ParseError = ParseError;
  var ParseSourceSpan = (function() {
    function ParseSourceSpan(start, end) {
      this.start = start;
      this.end = end;
    }
    ParseSourceSpan.prototype.toString = function() {
      return this.start.file.content.substring(this.start.offset, this.end.offset);
    };
    return ParseSourceSpan;
  })();
  exports.ParseSourceSpan = ParseSourceSpan;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/html_tags", ["angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  exports.NAMED_ENTITIES = lang_1.CONST_EXPR({
    'Aacute': '\u00C1',
    'aacute': '\u00E1',
    'Acirc': '\u00C2',
    'acirc': '\u00E2',
    'acute': '\u00B4',
    'AElig': '\u00C6',
    'aelig': '\u00E6',
    'Agrave': '\u00C0',
    'agrave': '\u00E0',
    'alefsym': '\u2135',
    'Alpha': '\u0391',
    'alpha': '\u03B1',
    'amp': '&',
    'and': '\u2227',
    'ang': '\u2220',
    'apos': '\u0027',
    'Aring': '\u00C5',
    'aring': '\u00E5',
    'asymp': '\u2248',
    'Atilde': '\u00C3',
    'atilde': '\u00E3',
    'Auml': '\u00C4',
    'auml': '\u00E4',
    'bdquo': '\u201E',
    'Beta': '\u0392',
    'beta': '\u03B2',
    'brvbar': '\u00A6',
    'bull': '\u2022',
    'cap': '\u2229',
    'Ccedil': '\u00C7',
    'ccedil': '\u00E7',
    'cedil': '\u00B8',
    'cent': '\u00A2',
    'Chi': '\u03A7',
    'chi': '\u03C7',
    'circ': '\u02C6',
    'clubs': '\u2663',
    'cong': '\u2245',
    'copy': '\u00A9',
    'crarr': '\u21B5',
    'cup': '\u222A',
    'curren': '\u00A4',
    'dagger': '\u2020',
    'Dagger': '\u2021',
    'darr': '\u2193',
    'dArr': '\u21D3',
    'deg': '\u00B0',
    'Delta': '\u0394',
    'delta': '\u03B4',
    'diams': '\u2666',
    'divide': '\u00F7',
    'Eacute': '\u00C9',
    'eacute': '\u00E9',
    'Ecirc': '\u00CA',
    'ecirc': '\u00EA',
    'Egrave': '\u00C8',
    'egrave': '\u00E8',
    'empty': '\u2205',
    'emsp': '\u2003',
    'ensp': '\u2002',
    'Epsilon': '\u0395',
    'epsilon': '\u03B5',
    'equiv': '\u2261',
    'Eta': '\u0397',
    'eta': '\u03B7',
    'ETH': '\u00D0',
    'eth': '\u00F0',
    'Euml': '\u00CB',
    'euml': '\u00EB',
    'euro': '\u20AC',
    'exist': '\u2203',
    'fnof': '\u0192',
    'forall': '\u2200',
    'frac12': '\u00BD',
    'frac14': '\u00BC',
    'frac34': '\u00BE',
    'frasl': '\u2044',
    'Gamma': '\u0393',
    'gamma': '\u03B3',
    'ge': '\u2265',
    'gt': '>',
    'harr': '\u2194',
    'hArr': '\u21D4',
    'hearts': '\u2665',
    'hellip': '\u2026',
    'Iacute': '\u00CD',
    'iacute': '\u00ED',
    'Icirc': '\u00CE',
    'icirc': '\u00EE',
    'iexcl': '\u00A1',
    'Igrave': '\u00CC',
    'igrave': '\u00EC',
    'image': '\u2111',
    'infin': '\u221E',
    'int': '\u222B',
    'Iota': '\u0399',
    'iota': '\u03B9',
    'iquest': '\u00BF',
    'isin': '\u2208',
    'Iuml': '\u00CF',
    'iuml': '\u00EF',
    'Kappa': '\u039A',
    'kappa': '\u03BA',
    'Lambda': '\u039B',
    'lambda': '\u03BB',
    'lang': '\u27E8',
    'laquo': '\u00AB',
    'larr': '\u2190',
    'lArr': '\u21D0',
    'lceil': '\u2308',
    'ldquo': '\u201C',
    'le': '\u2264',
    'lfloor': '\u230A',
    'lowast': '\u2217',
    'loz': '\u25CA',
    'lrm': '\u200E',
    'lsaquo': '\u2039',
    'lsquo': '\u2018',
    'lt': '<',
    'macr': '\u00AF',
    'mdash': '\u2014',
    'micro': '\u00B5',
    'middot': '\u00B7',
    'minus': '\u2212',
    'Mu': '\u039C',
    'mu': '\u03BC',
    'nabla': '\u2207',
    'nbsp': '\u00A0',
    'ndash': '\u2013',
    'ne': '\u2260',
    'ni': '\u220B',
    'not': '\u00AC',
    'notin': '\u2209',
    'nsub': '\u2284',
    'Ntilde': '\u00D1',
    'ntilde': '\u00F1',
    'Nu': '\u039D',
    'nu': '\u03BD',
    'Oacute': '\u00D3',
    'oacute': '\u00F3',
    'Ocirc': '\u00D4',
    'ocirc': '\u00F4',
    'OElig': '\u0152',
    'oelig': '\u0153',
    'Ograve': '\u00D2',
    'ograve': '\u00F2',
    'oline': '\u203E',
    'Omega': '\u03A9',
    'omega': '\u03C9',
    'Omicron': '\u039F',
    'omicron': '\u03BF',
    'oplus': '\u2295',
    'or': '\u2228',
    'ordf': '\u00AA',
    'ordm': '\u00BA',
    'Oslash': '\u00D8',
    'oslash': '\u00F8',
    'Otilde': '\u00D5',
    'otilde': '\u00F5',
    'otimes': '\u2297',
    'Ouml': '\u00D6',
    'ouml': '\u00F6',
    'para': '\u00B6',
    'permil': '\u2030',
    'perp': '\u22A5',
    'Phi': '\u03A6',
    'phi': '\u03C6',
    'Pi': '\u03A0',
    'pi': '\u03C0',
    'piv': '\u03D6',
    'plusmn': '\u00B1',
    'pound': '\u00A3',
    'prime': '\u2032',
    'Prime': '\u2033',
    'prod': '\u220F',
    'prop': '\u221D',
    'Psi': '\u03A8',
    'psi': '\u03C8',
    'quot': '\u0022',
    'radic': '\u221A',
    'rang': '\u27E9',
    'raquo': '\u00BB',
    'rarr': '\u2192',
    'rArr': '\u21D2',
    'rceil': '\u2309',
    'rdquo': '\u201D',
    'real': '\u211C',
    'reg': '\u00AE',
    'rfloor': '\u230B',
    'Rho': '\u03A1',
    'rho': '\u03C1',
    'rlm': '\u200F',
    'rsaquo': '\u203A',
    'rsquo': '\u2019',
    'sbquo': '\u201A',
    'Scaron': '\u0160',
    'scaron': '\u0161',
    'sdot': '\u22C5',
    'sect': '\u00A7',
    'shy': '\u00AD',
    'Sigma': '\u03A3',
    'sigma': '\u03C3',
    'sigmaf': '\u03C2',
    'sim': '\u223C',
    'spades': '\u2660',
    'sub': '\u2282',
    'sube': '\u2286',
    'sum': '\u2211',
    'sup': '\u2283',
    'sup1': '\u00B9',
    'sup2': '\u00B2',
    'sup3': '\u00B3',
    'supe': '\u2287',
    'szlig': '\u00DF',
    'Tau': '\u03A4',
    'tau': '\u03C4',
    'there4': '\u2234',
    'Theta': '\u0398',
    'theta': '\u03B8',
    'thetasym': '\u03D1',
    'thinsp': '\u2009',
    'THORN': '\u00DE',
    'thorn': '\u00FE',
    'tilde': '\u02DC',
    'times': '\u00D7',
    'trade': '\u2122',
    'Uacute': '\u00DA',
    'uacute': '\u00FA',
    'uarr': '\u2191',
    'uArr': '\u21D1',
    'Ucirc': '\u00DB',
    'ucirc': '\u00FB',
    'Ugrave': '\u00D9',
    'ugrave': '\u00F9',
    'uml': '\u00A8',
    'upsih': '\u03D2',
    'Upsilon': '\u03A5',
    'upsilon': '\u03C5',
    'Uuml': '\u00DC',
    'uuml': '\u00FC',
    'weierp': '\u2118',
    'Xi': '\u039E',
    'xi': '\u03BE',
    'Yacute': '\u00DD',
    'yacute': '\u00FD',
    'yen': '\u00A5',
    'yuml': '\u00FF',
    'Yuml': '\u0178',
    'Zeta': '\u0396',
    'zeta': '\u03B6',
    'zwj': '\u200D',
    'zwnj': '\u200C'
  });
  (function(HtmlTagContentType) {
    HtmlTagContentType[HtmlTagContentType["RAW_TEXT"] = 0] = "RAW_TEXT";
    HtmlTagContentType[HtmlTagContentType["ESCAPABLE_RAW_TEXT"] = 1] = "ESCAPABLE_RAW_TEXT";
    HtmlTagContentType[HtmlTagContentType["PARSABLE_DATA"] = 2] = "PARSABLE_DATA";
  })(exports.HtmlTagContentType || (exports.HtmlTagContentType = {}));
  var HtmlTagContentType = exports.HtmlTagContentType;
  var HtmlTagDefinition = (function() {
    function HtmlTagDefinition(_a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a,
          closedByChildren = _b.closedByChildren,
          requiredParents = _b.requiredParents,
          implicitNamespacePrefix = _b.implicitNamespacePrefix,
          contentType = _b.contentType,
          closedByParent = _b.closedByParent,
          isVoid = _b.isVoid,
          ignoreFirstLf = _b.ignoreFirstLf;
      this.closedByChildren = {};
      this.closedByParent = false;
      if (lang_1.isPresent(closedByChildren) && closedByChildren.length > 0) {
        closedByChildren.forEach(function(tagName) {
          return _this.closedByChildren[tagName] = true;
        });
      }
      this.isVoid = lang_1.normalizeBool(isVoid);
      this.closedByParent = lang_1.normalizeBool(closedByParent) || this.isVoid;
      if (lang_1.isPresent(requiredParents) && requiredParents.length > 0) {
        this.requiredParents = {};
        this.parentToAdd = requiredParents[0];
        requiredParents.forEach(function(tagName) {
          return _this.requiredParents[tagName] = true;
        });
      }
      this.implicitNamespacePrefix = implicitNamespacePrefix;
      this.contentType = lang_1.isPresent(contentType) ? contentType : HtmlTagContentType.PARSABLE_DATA;
      this.ignoreFirstLf = lang_1.normalizeBool(ignoreFirstLf);
    }
    HtmlTagDefinition.prototype.requireExtraParent = function(currentParent) {
      if (lang_1.isBlank(this.requiredParents)) {
        return false;
      }
      if (lang_1.isBlank(currentParent)) {
        return true;
      }
      var lcParent = currentParent.toLowerCase();
      return this.requiredParents[lcParent] != true && lcParent != 'template';
    };
    HtmlTagDefinition.prototype.isClosedByChild = function(name) {
      return this.isVoid || lang_1.normalizeBool(this.closedByChildren[name.toLowerCase()]);
    };
    return HtmlTagDefinition;
  })();
  exports.HtmlTagDefinition = HtmlTagDefinition;
  var TAG_DEFINITIONS = {
    'area': new HtmlTagDefinition({isVoid: true}),
    'embed': new HtmlTagDefinition({isVoid: true}),
    'link': new HtmlTagDefinition({isVoid: true}),
    'img': new HtmlTagDefinition({isVoid: true}),
    'input': new HtmlTagDefinition({isVoid: true}),
    'param': new HtmlTagDefinition({isVoid: true}),
    'hr': new HtmlTagDefinition({isVoid: true}),
    'br': new HtmlTagDefinition({isVoid: true}),
    'source': new HtmlTagDefinition({isVoid: true}),
    'track': new HtmlTagDefinition({isVoid: true}),
    'wbr': new HtmlTagDefinition({isVoid: true}),
    'p': new HtmlTagDefinition({
      closedByChildren: ['address', 'article', 'aside', 'blockquote', 'div', 'dl', 'fieldset', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'],
      closedByParent: true
    }),
    'thead': new HtmlTagDefinition({closedByChildren: ['tbody', 'tfoot']}),
    'tbody': new HtmlTagDefinition({
      closedByChildren: ['tbody', 'tfoot'],
      closedByParent: true
    }),
    'tfoot': new HtmlTagDefinition({
      closedByChildren: ['tbody'],
      closedByParent: true
    }),
    'tr': new HtmlTagDefinition({
      closedByChildren: ['tr'],
      requiredParents: ['tbody', 'tfoot', 'thead'],
      closedByParent: true
    }),
    'td': new HtmlTagDefinition({
      closedByChildren: ['td', 'th'],
      closedByParent: true
    }),
    'th': new HtmlTagDefinition({
      closedByChildren: ['td', 'th'],
      closedByParent: true
    }),
    'col': new HtmlTagDefinition({
      requiredParents: ['colgroup'],
      isVoid: true
    }),
    'svg': new HtmlTagDefinition({implicitNamespacePrefix: 'svg'}),
    'math': new HtmlTagDefinition({implicitNamespacePrefix: 'math'}),
    'li': new HtmlTagDefinition({
      closedByChildren: ['li'],
      closedByParent: true
    }),
    'dt': new HtmlTagDefinition({closedByChildren: ['dt', 'dd']}),
    'dd': new HtmlTagDefinition({
      closedByChildren: ['dt', 'dd'],
      closedByParent: true
    }),
    'rb': new HtmlTagDefinition({
      closedByChildren: ['rb', 'rt', 'rtc', 'rp'],
      closedByParent: true
    }),
    'rt': new HtmlTagDefinition({
      closedByChildren: ['rb', 'rt', 'rtc', 'rp'],
      closedByParent: true
    }),
    'rtc': new HtmlTagDefinition({
      closedByChildren: ['rb', 'rtc', 'rp'],
      closedByParent: true
    }),
    'rp': new HtmlTagDefinition({
      closedByChildren: ['rb', 'rt', 'rtc', 'rp'],
      closedByParent: true
    }),
    'optgroup': new HtmlTagDefinition({
      closedByChildren: ['optgroup'],
      closedByParent: true
    }),
    'option': new HtmlTagDefinition({
      closedByChildren: ['option', 'optgroup'],
      closedByParent: true
    }),
    'pre': new HtmlTagDefinition({ignoreFirstLf: true}),
    'listing': new HtmlTagDefinition({ignoreFirstLf: true}),
    'style': new HtmlTagDefinition({contentType: HtmlTagContentType.RAW_TEXT}),
    'script': new HtmlTagDefinition({contentType: HtmlTagContentType.RAW_TEXT}),
    'title': new HtmlTagDefinition({contentType: HtmlTagContentType.ESCAPABLE_RAW_TEXT}),
    'textarea': new HtmlTagDefinition({
      contentType: HtmlTagContentType.ESCAPABLE_RAW_TEXT,
      ignoreFirstLf: true
    })
  };
  var DEFAULT_TAG_DEFINITION = new HtmlTagDefinition();
  function getHtmlTagDefinition(tagName) {
    var result = TAG_DEFINITIONS[tagName.toLowerCase()];
    return lang_1.isPresent(result) ? result : DEFAULT_TAG_DEFINITION;
  }
  exports.getHtmlTagDefinition = getHtmlTagDefinition;
  var NS_PREFIX_RE = /^@([^:]+):(.+)/g;
  function splitNsName(elementName) {
    if (elementName[0] != '@') {
      return [null, elementName];
    }
    var match = lang_1.RegExpWrapper.firstMatch(NS_PREFIX_RE, elementName);
    return [match[1], match[2]];
  }
  exports.splitNsName = splitNsName;
  function getNsPrefix(elementName) {
    return splitNsName(elementName)[0];
  }
  exports.getNsPrefix = getNsPrefix;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/schema/element_schema_registry", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var ElementSchemaRegistry = (function() {
    function ElementSchemaRegistry() {}
    ElementSchemaRegistry.prototype.hasProperty = function(tagName, propName) {
      return true;
    };
    ElementSchemaRegistry.prototype.getMappedPropName = function(propName) {
      return propName;
    };
    return ElementSchemaRegistry;
  })();
  exports.ElementSchemaRegistry = ElementSchemaRegistry;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/template_preparser", ["angular2/src/facade/lang", "angular2/src/compiler/html_tags"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var html_tags_1 = require("angular2/src/compiler/html_tags");
  var NG_CONTENT_SELECT_ATTR = 'select';
  var NG_CONTENT_ELEMENT = 'ng-content';
  var LINK_ELEMENT = 'link';
  var LINK_STYLE_REL_ATTR = 'rel';
  var LINK_STYLE_HREF_ATTR = 'href';
  var LINK_STYLE_REL_VALUE = 'stylesheet';
  var STYLE_ELEMENT = 'style';
  var SCRIPT_ELEMENT = 'script';
  var NG_NON_BINDABLE_ATTR = 'ngNonBindable';
  function preparseElement(ast) {
    var selectAttr = null;
    var hrefAttr = null;
    var relAttr = null;
    var nonBindable = false;
    ast.attrs.forEach(function(attr) {
      var lcAttrName = attr.name.toLowerCase();
      if (lcAttrName == NG_CONTENT_SELECT_ATTR) {
        selectAttr = attr.value;
      } else if (lcAttrName == LINK_STYLE_HREF_ATTR) {
        hrefAttr = attr.value;
      } else if (lcAttrName == LINK_STYLE_REL_ATTR) {
        relAttr = attr.value;
      } else if (attr.name == NG_NON_BINDABLE_ATTR) {
        nonBindable = true;
      }
    });
    selectAttr = normalizeNgContentSelect(selectAttr);
    var nodeName = ast.name.toLowerCase();
    var type = PreparsedElementType.OTHER;
    if (html_tags_1.splitNsName(nodeName)[1] == NG_CONTENT_ELEMENT) {
      type = PreparsedElementType.NG_CONTENT;
    } else if (nodeName == STYLE_ELEMENT) {
      type = PreparsedElementType.STYLE;
    } else if (nodeName == SCRIPT_ELEMENT) {
      type = PreparsedElementType.SCRIPT;
    } else if (nodeName == LINK_ELEMENT && relAttr == LINK_STYLE_REL_VALUE) {
      type = PreparsedElementType.STYLESHEET;
    }
    return new PreparsedElement(type, selectAttr, hrefAttr, nonBindable);
  }
  exports.preparseElement = preparseElement;
  (function(PreparsedElementType) {
    PreparsedElementType[PreparsedElementType["NG_CONTENT"] = 0] = "NG_CONTENT";
    PreparsedElementType[PreparsedElementType["STYLE"] = 1] = "STYLE";
    PreparsedElementType[PreparsedElementType["STYLESHEET"] = 2] = "STYLESHEET";
    PreparsedElementType[PreparsedElementType["SCRIPT"] = 3] = "SCRIPT";
    PreparsedElementType[PreparsedElementType["OTHER"] = 4] = "OTHER";
  })(exports.PreparsedElementType || (exports.PreparsedElementType = {}));
  var PreparsedElementType = exports.PreparsedElementType;
  var PreparsedElement = (function() {
    function PreparsedElement(type, selectAttr, hrefAttr, nonBindable) {
      this.type = type;
      this.selectAttr = selectAttr;
      this.hrefAttr = hrefAttr;
      this.nonBindable = nonBindable;
    }
    return PreparsedElement;
  })();
  exports.PreparsedElement = PreparsedElement;
  function normalizeNgContentSelect(selectAttr) {
    if (lang_1.isBlank(selectAttr) || selectAttr.length === 0) {
      return '*';
    }
    return selectAttr;
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/template_normalizer", ["angular2/src/compiler/directive_metadata", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/async", "angular2/src/compiler/xhr", "angular2/src/compiler/url_resolver", "angular2/src/compiler/style_url_resolver", "angular2/src/core/di", "angular2/src/core/metadata/view", "angular2/src/compiler/html_ast", "angular2/src/compiler/html_parser", "angular2/src/compiler/template_preparser"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var directive_metadata_1 = require("angular2/src/compiler/directive_metadata");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var async_1 = require("angular2/src/facade/async");
  var xhr_1 = require("angular2/src/compiler/xhr");
  var url_resolver_1 = require("angular2/src/compiler/url_resolver");
  var style_url_resolver_1 = require("angular2/src/compiler/style_url_resolver");
  var di_1 = require("angular2/src/core/di");
  var view_1 = require("angular2/src/core/metadata/view");
  var html_ast_1 = require("angular2/src/compiler/html_ast");
  var html_parser_1 = require("angular2/src/compiler/html_parser");
  var template_preparser_1 = require("angular2/src/compiler/template_preparser");
  var TemplateNormalizer = (function() {
    function TemplateNormalizer(_xhr, _urlResolver, _htmlParser) {
      this._xhr = _xhr;
      this._urlResolver = _urlResolver;
      this._htmlParser = _htmlParser;
    }
    TemplateNormalizer.prototype.normalizeTemplate = function(directiveType, template) {
      var _this = this;
      if (lang_1.isPresent(template.template)) {
        return async_1.PromiseWrapper.resolve(this.normalizeLoadedTemplate(directiveType, template, template.template, directiveType.moduleUrl));
      } else if (lang_1.isPresent(template.templateUrl)) {
        var sourceAbsUrl = this._urlResolver.resolve(directiveType.moduleUrl, template.templateUrl);
        return this._xhr.get(sourceAbsUrl).then(function(templateContent) {
          return _this.normalizeLoadedTemplate(directiveType, template, templateContent, sourceAbsUrl);
        });
      } else {
        throw new exceptions_1.BaseException("No template specified for component " + directiveType.name);
      }
    };
    TemplateNormalizer.prototype.normalizeLoadedTemplate = function(directiveType, templateMeta, template, templateAbsUrl) {
      var _this = this;
      var rootNodesAndErrors = this._htmlParser.parse(template, directiveType.name);
      if (rootNodesAndErrors.errors.length > 0) {
        var errorString = rootNodesAndErrors.errors.join('\n');
        throw new exceptions_1.BaseException("Template parse errors:\n" + errorString);
      }
      var visitor = new TemplatePreparseVisitor();
      html_ast_1.htmlVisitAll(visitor, rootNodesAndErrors.rootNodes);
      var allStyles = templateMeta.styles.concat(visitor.styles);
      var allStyleAbsUrls = visitor.styleUrls.filter(style_url_resolver_1.isStyleUrlResolvable).map(function(url) {
        return _this._urlResolver.resolve(templateAbsUrl, url);
      }).concat(templateMeta.styleUrls.filter(style_url_resolver_1.isStyleUrlResolvable).map(function(url) {
        return _this._urlResolver.resolve(directiveType.moduleUrl, url);
      }));
      var allResolvedStyles = allStyles.map(function(style) {
        var styleWithImports = style_url_resolver_1.extractStyleUrls(_this._urlResolver, templateAbsUrl, style);
        styleWithImports.styleUrls.forEach(function(styleUrl) {
          return allStyleAbsUrls.push(styleUrl);
        });
        return styleWithImports.style;
      });
      var encapsulation = templateMeta.encapsulation;
      if (encapsulation === view_1.ViewEncapsulation.Emulated && allResolvedStyles.length === 0 && allStyleAbsUrls.length === 0) {
        encapsulation = view_1.ViewEncapsulation.None;
      }
      return new directive_metadata_1.CompileTemplateMetadata({
        encapsulation: encapsulation,
        template: template,
        templateUrl: templateAbsUrl,
        styles: allResolvedStyles,
        styleUrls: allStyleAbsUrls,
        ngContentSelectors: visitor.ngContentSelectors
      });
    };
    TemplateNormalizer = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [xhr_1.XHR, url_resolver_1.UrlResolver, html_parser_1.HtmlParser])], TemplateNormalizer);
    return TemplateNormalizer;
  })();
  exports.TemplateNormalizer = TemplateNormalizer;
  var TemplatePreparseVisitor = (function() {
    function TemplatePreparseVisitor() {
      this.ngContentSelectors = [];
      this.styles = [];
      this.styleUrls = [];
      this.ngNonBindableStackCount = 0;
    }
    TemplatePreparseVisitor.prototype.visitElement = function(ast, context) {
      var preparsedElement = template_preparser_1.preparseElement(ast);
      switch (preparsedElement.type) {
        case template_preparser_1.PreparsedElementType.NG_CONTENT:
          if (this.ngNonBindableStackCount === 0) {
            this.ngContentSelectors.push(preparsedElement.selectAttr);
          }
          break;
        case template_preparser_1.PreparsedElementType.STYLE:
          var textContent = '';
          ast.children.forEach(function(child) {
            if (child instanceof html_ast_1.HtmlTextAst) {
              textContent += child.value;
            }
          });
          this.styles.push(textContent);
          break;
        case template_preparser_1.PreparsedElementType.STYLESHEET:
          this.styleUrls.push(preparsedElement.hrefAttr);
          break;
      }
      if (preparsedElement.nonBindable) {
        this.ngNonBindableStackCount++;
      }
      html_ast_1.htmlVisitAll(this, ast.children);
      if (preparsedElement.nonBindable) {
        this.ngNonBindableStackCount--;
      }
      return null;
    };
    TemplatePreparseVisitor.prototype.visitAttr = function(ast, context) {
      return null;
    };
    TemplatePreparseVisitor.prototype.visitText = function(ast, context) {
      return null;
    };
    return TemplatePreparseVisitor;
  })();
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/directive_lifecycle_reflector", ["angular2/src/facade/lang", "angular2/src/core/linker/interfaces"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var interfaces_1 = require("angular2/src/core/linker/interfaces");
  function hasLifecycleHook(lcInterface, token) {
    if (!(token instanceof lang_1.Type))
      return false;
    var proto = token.prototype;
    switch (lcInterface) {
      case interfaces_1.LifecycleHooks.AfterContentInit:
        return !!proto.ngAfterContentInit;
      case interfaces_1.LifecycleHooks.AfterContentChecked:
        return !!proto.ngAfterContentChecked;
      case interfaces_1.LifecycleHooks.AfterViewInit:
        return !!proto.ngAfterViewInit;
      case interfaces_1.LifecycleHooks.AfterViewChecked:
        return !!proto.ngAfterViewChecked;
      case interfaces_1.LifecycleHooks.OnChanges:
        return !!proto.ngOnChanges;
      case interfaces_1.LifecycleHooks.DoCheck:
        return !!proto.ngDoCheck;
      case interfaces_1.LifecycleHooks.OnDestroy:
        return !!proto.ngOnDestroy;
      case interfaces_1.LifecycleHooks.OnInit:
        return !!proto.ngOnInit;
      default:
        return false;
    }
  }
  exports.hasLifecycleHook = hasLifecycleHook;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/schema/dom_element_schema_registry", ["angular2/src/core/di", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/platform/dom/dom_adapter", "angular2/src/compiler/html_tags", "angular2/src/compiler/schema/element_schema_registry"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  var collection_1 = require("angular2/src/facade/collection");
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var html_tags_1 = require("angular2/src/compiler/html_tags");
  var element_schema_registry_1 = require("angular2/src/compiler/schema/element_schema_registry");
  var NAMESPACE_URIS = lang_1.CONST_EXPR({
    'xlink': 'http://www.w3.org/1999/xlink',
    'svg': 'http://www.w3.org/2000/svg'
  });
  var DomElementSchemaRegistry = (function(_super) {
    __extends(DomElementSchemaRegistry, _super);
    function DomElementSchemaRegistry() {
      _super.apply(this, arguments);
      this._protoElements = new Map();
    }
    DomElementSchemaRegistry.prototype._getProtoElement = function(tagName) {
      var element = this._protoElements.get(tagName);
      if (lang_1.isBlank(element)) {
        var nsAndName = html_tags_1.splitNsName(tagName);
        element = lang_1.isPresent(nsAndName[0]) ? dom_adapter_1.DOM.createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]) : dom_adapter_1.DOM.createElement(nsAndName[1]);
        this._protoElements.set(tagName, element);
      }
      return element;
    };
    DomElementSchemaRegistry.prototype.hasProperty = function(tagName, propName) {
      if (tagName.indexOf('-') !== -1) {
        return true;
      } else {
        var elm = this._getProtoElement(tagName);
        return dom_adapter_1.DOM.hasProperty(elm, propName);
      }
    };
    DomElementSchemaRegistry.prototype.getMappedPropName = function(propName) {
      var mappedPropName = collection_1.StringMapWrapper.get(dom_adapter_1.DOM.attrToPropMap, propName);
      return lang_1.isPresent(mappedPropName) ? mappedPropName : propName;
    };
    DomElementSchemaRegistry = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], DomElementSchemaRegistry);
    return DomElementSchemaRegistry;
  })(element_schema_registry_1.ElementSchemaRegistry);
  exports.DomElementSchemaRegistry = DomElementSchemaRegistry;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/browser/xhr_impl", ["angular2/src/facade/promise", "angular2/src/facade/lang", "angular2/src/compiler/xhr"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var promise_1 = require("angular2/src/facade/promise");
  var lang_1 = require("angular2/src/facade/lang");
  var xhr_1 = require("angular2/src/compiler/xhr");
  var XHRImpl = (function(_super) {
    __extends(XHRImpl, _super);
    function XHRImpl() {
      _super.apply(this, arguments);
    }
    XHRImpl.prototype.get = function(url) {
      var completer = promise_1.PromiseWrapper.completer();
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'text';
      xhr.onload = function() {
        var response = lang_1.isPresent(xhr.response) ? xhr.response : xhr.responseText;
        var status = xhr.status === 1223 ? 204 : xhr.status;
        if (status === 0) {
          status = response ? 200 : 0;
        }
        if (200 <= status && status <= 300) {
          completer.resolve(response);
        } else {
          completer.reject("Failed to load " + url, null);
        }
      };
      xhr.onerror = function() {
        completer.reject("Failed to load " + url, null);
      };
      xhr.send();
      return completer.promise;
    };
    return XHRImpl;
  })(xhr_1.XHR);
  exports.XHRImpl = XHRImpl;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/browser/testability", ["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/platform/dom/dom_adapter", "angular2/core"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var core_1 = require("angular2/core");
  var PublicTestability = (function() {
    function PublicTestability(testability) {
      this._testability = testability;
    }
    PublicTestability.prototype.isStable = function() {
      return this._testability.isStable();
    };
    PublicTestability.prototype.whenStable = function(callback) {
      this._testability.whenStable(callback);
    };
    PublicTestability.prototype.findBindings = function(using, provider, exactMatch) {
      return this.findProviders(using, provider, exactMatch);
    };
    PublicTestability.prototype.findProviders = function(using, provider, exactMatch) {
      return this._testability.findBindings(using, provider, exactMatch);
    };
    return PublicTestability;
  })();
  var BrowserGetTestability = (function() {
    function BrowserGetTestability() {}
    BrowserGetTestability.init = function() {
      core_1.setTestabilityGetter(new BrowserGetTestability());
    };
    BrowserGetTestability.prototype.addToWindow = function(registry) {
      lang_1.global.getAngularTestability = function(elem, findInAncestors) {
        if (findInAncestors === void 0) {
          findInAncestors = true;
        }
        var testability = registry.findTestabilityInTree(elem, findInAncestors);
        if (testability == null) {
          throw new Error('Could not find testability for element.');
        }
        return new PublicTestability(testability);
      };
      lang_1.global.getAllAngularTestabilities = function() {
        var testabilities = registry.getAllTestabilities();
        return testabilities.map(function(testability) {
          return new PublicTestability(testability);
        });
      };
      var whenAllStable = function(callback) {
        var testabilities = lang_1.global.getAllAngularTestabilities();
        var count = testabilities.length;
        var didWork = false;
        var decrement = function(didWork_) {
          didWork = didWork || didWork_;
          count--;
          if (count == 0) {
            callback(didWork);
          }
        };
        testabilities.forEach(function(testability) {
          testability.whenStable(decrement);
        });
      };
      if (!lang_1.global.frameworkStabilizers) {
        lang_1.global.frameworkStabilizers = collection_1.ListWrapper.createGrowableSize(0);
      }
      lang_1.global.frameworkStabilizers.push(whenAllStable);
    };
    BrowserGetTestability.prototype.findTestabilityInTree = function(registry, elem, findInAncestors) {
      if (elem == null) {
        return null;
      }
      var t = registry.getTestability(elem);
      if (lang_1.isPresent(t)) {
        return t;
      } else if (!findInAncestors) {
        return null;
      }
      if (dom_adapter_1.DOM.isShadowRoot(elem)) {
        return this.findTestabilityInTree(registry, dom_adapter_1.DOM.getHost(elem), true);
      }
      return this.findTestabilityInTree(registry, dom_adapter_1.DOM.parentElement(elem), true);
    };
    return BrowserGetTestability;
  })();
  exports.BrowserGetTestability = BrowserGetTestability;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/browser/generic_browser_adapter", ["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/platform/dom/dom_adapter", "angular2/src/platform/browser/xhr_impl"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var xhr_impl_1 = require("angular2/src/platform/browser/xhr_impl");
  var GenericBrowserDomAdapter = (function(_super) {
    __extends(GenericBrowserDomAdapter, _super);
    function GenericBrowserDomAdapter() {
      var _this = this;
      _super.call(this);
      this._animationPrefix = null;
      this._transitionEnd = null;
      try {
        var element = this.createElement('div', this.defaultDoc());
        if (lang_1.isPresent(this.getStyle(element, 'animationName'))) {
          this._animationPrefix = '';
        } else {
          var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
          for (var i = 0; i < domPrefixes.length; i++) {
            if (lang_1.isPresent(this.getStyle(element, domPrefixes[i] + 'AnimationName'))) {
              this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
              break;
            }
          }
        }
        var transEndEventNames = {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd otransitionend',
          transition: 'transitionend'
        };
        collection_1.StringMapWrapper.forEach(transEndEventNames, function(value, key) {
          if (lang_1.isPresent(_this.getStyle(element, key))) {
            _this._transitionEnd = value;
          }
        });
      } catch (e) {
        this._animationPrefix = null;
        this._transitionEnd = null;
      }
    }
    GenericBrowserDomAdapter.prototype.getXHR = function() {
      return xhr_impl_1.XHRImpl;
    };
    GenericBrowserDomAdapter.prototype.getDistributedNodes = function(el) {
      return el.getDistributedNodes();
    };
    GenericBrowserDomAdapter.prototype.resolveAndSetHref = function(el, baseUrl, href) {
      el.href = href == null ? baseUrl : baseUrl + '/../' + href;
    };
    GenericBrowserDomAdapter.prototype.supportsDOMEvents = function() {
      return true;
    };
    GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function() {
      return lang_1.isFunction(this.defaultDoc().body.createShadowRoot);
    };
    GenericBrowserDomAdapter.prototype.getAnimationPrefix = function() {
      return lang_1.isPresent(this._animationPrefix) ? this._animationPrefix : "";
    };
    GenericBrowserDomAdapter.prototype.getTransitionEnd = function() {
      return lang_1.isPresent(this._transitionEnd) ? this._transitionEnd : "";
    };
    GenericBrowserDomAdapter.prototype.supportsAnimation = function() {
      return lang_1.isPresent(this._animationPrefix) && lang_1.isPresent(this._transitionEnd);
    };
    return GenericBrowserDomAdapter;
  })(dom_adapter_1.DomAdapter);
  exports.GenericBrowserDomAdapter = GenericBrowserDomAdapter;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/profile/wtf_init", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function wtfInit() {}
  exports.wtfInit = wtfInit;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/shared/render_store", ["angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var RenderStore = (function() {
    function RenderStore() {
      this._nextIndex = 0;
      this._lookupById = new Map();
      this._lookupByObject = new Map();
    }
    RenderStore.prototype.allocateId = function() {
      return this._nextIndex++;
    };
    RenderStore.prototype.store = function(obj, id) {
      this._lookupById.set(id, obj);
      this._lookupByObject.set(obj, id);
    };
    RenderStore.prototype.remove = function(obj) {
      var index = this._lookupByObject.get(obj);
      this._lookupByObject.delete(obj);
      this._lookupById.delete(index);
    };
    RenderStore.prototype.deserialize = function(id) {
      if (id == null) {
        return null;
      }
      if (!this._lookupById.has(id)) {
        return null;
      }
      return this._lookupById.get(id);
    };
    RenderStore.prototype.serialize = function(obj) {
      if (obj == null) {
        return null;
      }
      return this._lookupByObject.get(obj);
    };
    RenderStore = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], RenderStore);
    return RenderStore;
  })();
  exports.RenderStore = RenderStore;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/shared/messaging_api", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  exports.RENDERER_CHANNEL = "ng-Renderer";
  exports.XHR_CHANNEL = "ng-XHR";
  exports.EVENT_CHANNEL = "ng-events";
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/ui/bind", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function bind(fn, scope) {
    return fn.bind(scope);
  }
  exports.bind = bind;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/ui/event_serializer", ["angular2/src/facade/collection", "angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var MOUSE_EVENT_PROPERTIES = ["altKey", "button", "clientX", "clientY", "metaKey", "movementX", "movementY", "offsetX", "offsetY", "region", "screenX", "screenY", "shiftKey"];
  var KEYBOARD_EVENT_PROPERTIES = ['altkey', 'charCode', 'code', 'ctrlKey', 'isComposing', 'key', 'keyCode', 'location', 'metaKey', 'repeat', 'shiftKey', 'which'];
  var EVENT_PROPERTIES = ['type', 'bubbles', 'cancelable'];
  var NODES_WITH_VALUE = new collection_1.Set(["input", "select", "option", "button", "li", "meter", "progress", "param"]);
  function serializeGenericEvent(e) {
    return serializeEvent(e, EVENT_PROPERTIES);
  }
  exports.serializeGenericEvent = serializeGenericEvent;
  function serializeEventWithTarget(e) {
    var serializedEvent = serializeEvent(e, EVENT_PROPERTIES);
    return addTarget(e, serializedEvent);
  }
  exports.serializeEventWithTarget = serializeEventWithTarget;
  function serializeMouseEvent(e) {
    return serializeEvent(e, MOUSE_EVENT_PROPERTIES);
  }
  exports.serializeMouseEvent = serializeMouseEvent;
  function serializeKeyboardEvent(e) {
    var serializedEvent = serializeEvent(e, KEYBOARD_EVENT_PROPERTIES);
    return addTarget(e, serializedEvent);
  }
  exports.serializeKeyboardEvent = serializeKeyboardEvent;
  function addTarget(e, serializedEvent) {
    if (NODES_WITH_VALUE.has(e.target.tagName.toLowerCase())) {
      var target = e.target;
      serializedEvent['target'] = {'value': target.value};
      if (lang_1.isPresent(target.files)) {
        serializedEvent['target']['files'] = target.files;
      }
    }
    return serializedEvent;
  }
  function serializeEvent(e, properties) {
    var serialized = {};
    for (var i = 0; i < properties.length; i++) {
      var prop = properties[i];
      serialized[prop] = e[prop];
    }
    return serialized;
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/shared/service_message_broker", ["angular2/src/core/di", "angular2/src/facade/collection", "angular2/src/web_workers/shared/serializer", "angular2/src/facade/lang", "angular2/src/web_workers/shared/message_bus", "angular2/src/facade/async"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var collection_1 = require("angular2/src/facade/collection");
  var serializer_1 = require("angular2/src/web_workers/shared/serializer");
  var lang_1 = require("angular2/src/facade/lang");
  var message_bus_1 = require("angular2/src/web_workers/shared/message_bus");
  var async_1 = require("angular2/src/facade/async");
  var ServiceMessageBrokerFactory = (function() {
    function ServiceMessageBrokerFactory() {}
    return ServiceMessageBrokerFactory;
  })();
  exports.ServiceMessageBrokerFactory = ServiceMessageBrokerFactory;
  var ServiceMessageBrokerFactory_ = (function(_super) {
    __extends(ServiceMessageBrokerFactory_, _super);
    function ServiceMessageBrokerFactory_(_messageBus, _serializer) {
      _super.call(this);
      this._messageBus = _messageBus;
      this._serializer = _serializer;
    }
    ServiceMessageBrokerFactory_.prototype.createMessageBroker = function(channel, runInZone) {
      if (runInZone === void 0) {
        runInZone = true;
      }
      this._messageBus.initChannel(channel, runInZone);
      return new ServiceMessageBroker_(this._messageBus, this._serializer, channel);
    };
    ServiceMessageBrokerFactory_ = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [message_bus_1.MessageBus, serializer_1.Serializer])], ServiceMessageBrokerFactory_);
    return ServiceMessageBrokerFactory_;
  })(ServiceMessageBrokerFactory);
  exports.ServiceMessageBrokerFactory_ = ServiceMessageBrokerFactory_;
  var ServiceMessageBroker = (function() {
    function ServiceMessageBroker() {}
    return ServiceMessageBroker;
  })();
  exports.ServiceMessageBroker = ServiceMessageBroker;
  var ServiceMessageBroker_ = (function(_super) {
    __extends(ServiceMessageBroker_, _super);
    function ServiceMessageBroker_(messageBus, _serializer, channel) {
      var _this = this;
      _super.call(this);
      this._serializer = _serializer;
      this.channel = channel;
      this._methods = new collection_1.Map();
      this._sink = messageBus.to(channel);
      var source = messageBus.from(channel);
      async_1.ObservableWrapper.subscribe(source, function(message) {
        return _this._handleMessage(message);
      });
    }
    ServiceMessageBroker_.prototype.registerMethod = function(methodName, signature, method, returnType) {
      var _this = this;
      this._methods.set(methodName, function(message) {
        var serializedArgs = message.args;
        var deserializedArgs = collection_1.ListWrapper.createFixedSize(signature.length);
        for (var i = 0; i < signature.length; i++) {
          var serializedArg = serializedArgs[i];
          deserializedArgs[i] = _this._serializer.deserialize(serializedArg, signature[i]);
        }
        var promise = lang_1.FunctionWrapper.apply(method, deserializedArgs);
        if (lang_1.isPresent(returnType) && lang_1.isPresent(promise)) {
          _this._wrapWebWorkerPromise(message.id, promise, returnType);
        }
      });
    };
    ServiceMessageBroker_.prototype._handleMessage = function(map) {
      var message = new ReceivedMessage(map);
      if (this._methods.has(message.method)) {
        this._methods.get(message.method)(message);
      }
    };
    ServiceMessageBroker_.prototype._wrapWebWorkerPromise = function(id, promise, type) {
      var _this = this;
      async_1.PromiseWrapper.then(promise, function(result) {
        async_1.ObservableWrapper.callEmit(_this._sink, {
          'type': 'result',
          'value': _this._serializer.serialize(result, type),
          'id': id
        });
      });
    };
    return ServiceMessageBroker_;
  })(ServiceMessageBroker);
  exports.ServiceMessageBroker_ = ServiceMessageBroker_;
  var ReceivedMessage = (function() {
    function ReceivedMessage(data) {
      this.method = data['method'];
      this.args = data['args'];
      this.id = data['id'];
      this.type = data['type'];
    }
    return ReceivedMessage;
  })();
  exports.ReceivedMessage = ReceivedMessage;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/ui/xhr_impl", ["angular2/src/core/di", "angular2/src/web_workers/shared/serializer", "angular2/src/web_workers/shared/messaging_api", "angular2/src/compiler/xhr", "angular2/src/web_workers/shared/service_message_broker", "angular2/src/web_workers/ui/bind"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var serializer_1 = require("angular2/src/web_workers/shared/serializer");
  var messaging_api_1 = require("angular2/src/web_workers/shared/messaging_api");
  var xhr_1 = require("angular2/src/compiler/xhr");
  var service_message_broker_1 = require("angular2/src/web_workers/shared/service_message_broker");
  var bind_1 = require("angular2/src/web_workers/ui/bind");
  var MessageBasedXHRImpl = (function() {
    function MessageBasedXHRImpl(_brokerFactory, _xhr) {
      this._brokerFactory = _brokerFactory;
      this._xhr = _xhr;
    }
    MessageBasedXHRImpl.prototype.start = function() {
      var broker = this._brokerFactory.createMessageBroker(messaging_api_1.XHR_CHANNEL);
      broker.registerMethod("get", [serializer_1.PRIMITIVE], bind_1.bind(this._xhr.get, this._xhr), serializer_1.PRIMITIVE);
    };
    MessageBasedXHRImpl = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [service_message_broker_1.ServiceMessageBrokerFactory, xhr_1.XHR])], MessageBasedXHRImpl);
    return MessageBasedXHRImpl;
  })();
  exports.MessageBasedXHRImpl = MessageBasedXHRImpl;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/shared/client_message_broker", ["angular2/src/web_workers/shared/message_bus", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/web_workers/shared/serializer", "angular2/src/core/di", "angular2/src/facade/lang", "angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var message_bus_1 = require("angular2/src/web_workers/shared/message_bus");
  var lang_1 = require("angular2/src/facade/lang");
  var async_1 = require("angular2/src/facade/async");
  var collection_1 = require("angular2/src/facade/collection");
  var serializer_1 = require("angular2/src/web_workers/shared/serializer");
  var di_1 = require("angular2/src/core/di");
  var lang_2 = require("angular2/src/facade/lang");
  var lang_3 = require("angular2/src/facade/lang");
  exports.Type = lang_3.Type;
  var ClientMessageBrokerFactory = (function() {
    function ClientMessageBrokerFactory() {}
    return ClientMessageBrokerFactory;
  })();
  exports.ClientMessageBrokerFactory = ClientMessageBrokerFactory;
  var ClientMessageBrokerFactory_ = (function(_super) {
    __extends(ClientMessageBrokerFactory_, _super);
    function ClientMessageBrokerFactory_(_messageBus, _serializer) {
      _super.call(this);
      this._messageBus = _messageBus;
      this._serializer = _serializer;
    }
    ClientMessageBrokerFactory_.prototype.createMessageBroker = function(channel, runInZone) {
      if (runInZone === void 0) {
        runInZone = true;
      }
      this._messageBus.initChannel(channel, runInZone);
      return new ClientMessageBroker_(this._messageBus, this._serializer, channel);
    };
    ClientMessageBrokerFactory_ = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [message_bus_1.MessageBus, serializer_1.Serializer])], ClientMessageBrokerFactory_);
    return ClientMessageBrokerFactory_;
  })(ClientMessageBrokerFactory);
  exports.ClientMessageBrokerFactory_ = ClientMessageBrokerFactory_;
  var ClientMessageBroker = (function() {
    function ClientMessageBroker() {}
    return ClientMessageBroker;
  })();
  exports.ClientMessageBroker = ClientMessageBroker;
  var ClientMessageBroker_ = (function(_super) {
    __extends(ClientMessageBroker_, _super);
    function ClientMessageBroker_(messageBus, _serializer, channel) {
      var _this = this;
      _super.call(this);
      this.channel = channel;
      this._pending = new Map();
      this._sink = messageBus.to(channel);
      this._serializer = _serializer;
      var source = messageBus.from(channel);
      async_1.ObservableWrapper.subscribe(source, function(message) {
        return _this._handleMessage(message);
      });
    }
    ClientMessageBroker_.prototype._generateMessageId = function(name) {
      var time = lang_1.stringify(lang_1.DateWrapper.toMillis(lang_1.DateWrapper.now()));
      var iteration = 0;
      var id = name + time + lang_1.stringify(iteration);
      while (lang_1.isPresent(this._pending[id])) {
        id = "" + name + time + iteration;
        iteration++;
      }
      return id;
    };
    ClientMessageBroker_.prototype.runOnService = function(args, returnType) {
      var _this = this;
      var fnArgs = [];
      if (lang_1.isPresent(args.args)) {
        args.args.forEach(function(argument) {
          if (argument.type != null) {
            fnArgs.push(_this._serializer.serialize(argument.value, argument.type));
          } else {
            fnArgs.push(argument.value);
          }
        });
      }
      var promise;
      var id = null;
      if (returnType != null) {
        var completer = async_1.PromiseWrapper.completer();
        id = this._generateMessageId(args.method);
        this._pending.set(id, completer);
        async_1.PromiseWrapper.catchError(completer.promise, function(err, stack) {
          lang_1.print(err);
          completer.reject(err, stack);
        });
        promise = async_1.PromiseWrapper.then(completer.promise, function(value) {
          if (_this._serializer == null) {
            return value;
          } else {
            return _this._serializer.deserialize(value, returnType);
          }
        });
      } else {
        promise = null;
      }
      var message = {
        'method': args.method,
        'args': fnArgs
      };
      if (id != null) {
        message['id'] = id;
      }
      async_1.ObservableWrapper.callEmit(this._sink, message);
      return promise;
    };
    ClientMessageBroker_.prototype._handleMessage = function(message) {
      var data = new MessageData(message);
      if (lang_2.StringWrapper.equals(data.type, "result") || lang_2.StringWrapper.equals(data.type, "error")) {
        var id = data.id;
        if (this._pending.has(id)) {
          if (lang_2.StringWrapper.equals(data.type, "result")) {
            this._pending.get(id).resolve(data.value);
          } else {
            this._pending.get(id).reject(data.value, null);
          }
          this._pending.delete(id);
        }
      }
    };
    return ClientMessageBroker_;
  })(ClientMessageBroker);
  exports.ClientMessageBroker_ = ClientMessageBroker_;
  var MessageData = (function() {
    function MessageData(data) {
      this.type = collection_1.StringMapWrapper.get(data, "type");
      this.id = this._getValueIfPresent(data, "id");
      this.value = this._getValueIfPresent(data, "value");
    }
    MessageData.prototype._getValueIfPresent = function(data, key) {
      if (collection_1.StringMapWrapper.contains(data, key)) {
        return collection_1.StringMapWrapper.get(data, key);
      } else {
        return null;
      }
    };
    return MessageData;
  })();
  var FnArg = (function() {
    function FnArg(value, type) {
      this.value = value;
      this.type = type;
    }
    return FnArg;
  })();
  exports.FnArg = FnArg;
  var UiArguments = (function() {
    function UiArguments(method, args) {
      this.method = method;
      this.args = args;
    }
    return UiArguments;
  })();
  exports.UiArguments = UiArguments;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/shared/api", ["angular2/src/facade/lang", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var di_1 = require("angular2/src/core/di");
  exports.ON_WEB_WORKER = lang_1.CONST_EXPR(new di_1.OpaqueToken('WebWorker.onWebWorker'));
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/shared/post_message_bus", ["angular2/src/facade/exceptions", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var async_1 = require("angular2/src/facade/async");
  var collection_1 = require("angular2/src/facade/collection");
  var di_1 = require("angular2/src/core/di");
  var PostMessageBus = (function() {
    function PostMessageBus(sink, source) {
      this.sink = sink;
      this.source = source;
    }
    PostMessageBus.prototype.attachToZone = function(zone) {
      this.source.attachToZone(zone);
      this.sink.attachToZone(zone);
    };
    PostMessageBus.prototype.initChannel = function(channel, runInZone) {
      if (runInZone === void 0) {
        runInZone = true;
      }
      this.source.initChannel(channel, runInZone);
      this.sink.initChannel(channel, runInZone);
    };
    PostMessageBus.prototype.from = function(channel) {
      return this.source.from(channel);
    };
    PostMessageBus.prototype.to = function(channel) {
      return this.sink.to(channel);
    };
    PostMessageBus = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [PostMessageBusSink, PostMessageBusSource])], PostMessageBus);
    return PostMessageBus;
  })();
  exports.PostMessageBus = PostMessageBus;
  var PostMessageBusSink = (function() {
    function PostMessageBusSink(_postMessageTarget) {
      this._postMessageTarget = _postMessageTarget;
      this._channels = collection_1.StringMapWrapper.create();
      this._messageBuffer = [];
    }
    PostMessageBusSink.prototype.attachToZone = function(zone) {
      var _this = this;
      this._zone = zone;
      this._zone.runOutsideAngular(function() {
        async_1.ObservableWrapper.subscribe(_this._zone.onEventDone, function(_) {
          _this._handleOnEventDone();
        });
      });
    };
    PostMessageBusSink.prototype.initChannel = function(channel, runInZone) {
      var _this = this;
      if (runInZone === void 0) {
        runInZone = true;
      }
      if (collection_1.StringMapWrapper.contains(this._channels, channel)) {
        throw new exceptions_1.BaseException(channel + " has already been initialized");
      }
      var emitter = new async_1.EventEmitter();
      var channelInfo = new _Channel(emitter, runInZone);
      this._channels[channel] = channelInfo;
      emitter.subscribe(function(data) {
        var message = {
          channel: channel,
          message: data
        };
        if (runInZone) {
          _this._messageBuffer.push(message);
        } else {
          _this._sendMessages([message]);
        }
      });
    };
    PostMessageBusSink.prototype.to = function(channel) {
      if (collection_1.StringMapWrapper.contains(this._channels, channel)) {
        return this._channels[channel].emitter;
      } else {
        throw new exceptions_1.BaseException(channel + " is not set up. Did you forget to call initChannel?");
      }
    };
    PostMessageBusSink.prototype._handleOnEventDone = function() {
      if (this._messageBuffer.length > 0) {
        this._sendMessages(this._messageBuffer);
        this._messageBuffer = [];
      }
    };
    PostMessageBusSink.prototype._sendMessages = function(messages) {
      this._postMessageTarget.postMessage(messages);
    };
    return PostMessageBusSink;
  })();
  exports.PostMessageBusSink = PostMessageBusSink;
  var PostMessageBusSource = (function() {
    function PostMessageBusSource(eventTarget) {
      var _this = this;
      this._channels = collection_1.StringMapWrapper.create();
      if (eventTarget) {
        eventTarget.addEventListener("message", function(ev) {
          return _this._handleMessages(ev);
        });
      } else {
        addEventListener("message", function(ev) {
          return _this._handleMessages(ev);
        });
      }
    }
    PostMessageBusSource.prototype.attachToZone = function(zone) {
      this._zone = zone;
    };
    PostMessageBusSource.prototype.initChannel = function(channel, runInZone) {
      if (runInZone === void 0) {
        runInZone = true;
      }
      if (collection_1.StringMapWrapper.contains(this._channels, channel)) {
        throw new exceptions_1.BaseException(channel + " has already been initialized");
      }
      var emitter = new async_1.EventEmitter();
      var channelInfo = new _Channel(emitter, runInZone);
      this._channels[channel] = channelInfo;
    };
    PostMessageBusSource.prototype.from = function(channel) {
      if (collection_1.StringMapWrapper.contains(this._channels, channel)) {
        return this._channels[channel].emitter;
      } else {
        throw new exceptions_1.BaseException(channel + " is not set up. Did you forget to call initChannel?");
      }
    };
    PostMessageBusSource.prototype._handleMessages = function(ev) {
      var messages = ev.data;
      for (var i = 0; i < messages.length; i++) {
        this._handleMessage(messages[i]);
      }
    };
    PostMessageBusSource.prototype._handleMessage = function(data) {
      var channel = data.channel;
      if (collection_1.StringMapWrapper.contains(this._channels, channel)) {
        var channelInfo = this._channels[channel];
        if (channelInfo.runInZone) {
          this._zone.run(function() {
            channelInfo.emitter.emit(data.message);
          });
        } else {
          channelInfo.emitter.emit(data.message);
        }
      }
    };
    return PostMessageBusSource;
  })();
  exports.PostMessageBusSource = PostMessageBusSource;
  var _Channel = (function() {
    function _Channel(emitter, runInZone) {
      this.emitter = emitter;
      this.runInZone = runInZone;
    }
    return _Channel;
  })();
  global.define = __define;
  return module.exports;
});

System.register("rxjs/util/SymbolShim", ["rxjs/util/root"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var root_1 = require("rxjs/util/root");
  function polyfillSymbol(root) {
    var Symbol = ensureSymbol(root);
    ensureIterator(Symbol, root);
    ensureObservable(Symbol);
    ensureFor(Symbol);
    return Symbol;
  }
  exports.polyfillSymbol = polyfillSymbol;
  function ensureFor(Symbol) {
    if (!Symbol.for) {
      Symbol.for = symbolForPolyfill;
    }
  }
  exports.ensureFor = ensureFor;
  var id = 0;
  function ensureSymbol(root) {
    if (!root.Symbol) {
      root.Symbol = function symbolFuncPolyfill(description) {
        return "@@Symbol(" + description + "):" + id++;
      };
    }
    return root.Symbol;
  }
  exports.ensureSymbol = ensureSymbol;
  function symbolForPolyfill(key) {
    return '@@' + key;
  }
  exports.symbolForPolyfill = symbolForPolyfill;
  function ensureIterator(Symbol, root) {
    if (!Symbol.iterator) {
      if (typeof Symbol.for === 'function') {
        Symbol.iterator = Symbol.for('iterator');
      } else if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
        Symbol.iterator = '@@iterator';
      } else if (root.Map) {
        var keys = Object.getOwnPropertyNames(root.Map.prototype);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (key !== 'entries' && key !== 'size' && root.Map.prototype[key] === root.Map.prototype['entries']) {
            Symbol.iterator = key;
            break;
          }
        }
      } else {
        Symbol.iterator = '@@iterator';
      }
    }
  }
  exports.ensureIterator = ensureIterator;
  function ensureObservable(Symbol) {
    if (!Symbol.observable) {
      if (typeof Symbol.for === 'function') {
        Symbol.observable = Symbol.for('observable');
      } else {
        Symbol.observable = '@@observable';
      }
    }
  }
  exports.ensureObservable = ensureObservable;
  exports.SymbolShim = polyfillSymbol(root_1.root);
  global.define = __define;
  return module.exports;
});

System.register("rxjs/scheduler/QueueScheduler", ["rxjs/scheduler/QueueAction", "rxjs/scheduler/FutureAction"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var QueueAction_1 = require("rxjs/scheduler/QueueAction");
  var FutureAction_1 = require("rxjs/scheduler/FutureAction");
  var QueueScheduler = (function() {
    function QueueScheduler() {
      this.actions = [];
      this.active = false;
      this.scheduled = false;
    }
    QueueScheduler.prototype.now = function() {
      return Date.now();
    };
    QueueScheduler.prototype.flush = function() {
      if (this.active || this.scheduled) {
        return ;
      }
      this.active = true;
      var actions = this.actions;
      for (var action = void 0; action = actions.shift(); ) {
        action.execute();
      }
      this.active = false;
    };
    QueueScheduler.prototype.schedule = function(work, delay, state) {
      if (delay === void 0) {
        delay = 0;
      }
      return (delay <= 0) ? this.scheduleNow(work, state) : this.scheduleLater(work, delay, state);
    };
    QueueScheduler.prototype.scheduleNow = function(work, state) {
      return new QueueAction_1.QueueAction(this, work).schedule(state);
    };
    QueueScheduler.prototype.scheduleLater = function(work, delay, state) {
      return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
    };
    return QueueScheduler;
  })();
  exports.QueueScheduler = QueueScheduler;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/facade/exception_handler", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var _ArrayLogger = (function() {
    function _ArrayLogger() {
      this.res = [];
    }
    _ArrayLogger.prototype.log = function(s) {
      this.res.push(s);
    };
    _ArrayLogger.prototype.logError = function(s) {
      this.res.push(s);
    };
    _ArrayLogger.prototype.logGroup = function(s) {
      this.res.push(s);
    };
    _ArrayLogger.prototype.logGroupEnd = function() {};
    ;
    return _ArrayLogger;
  })();
  var ExceptionHandler = (function() {
    function ExceptionHandler(_logger, _rethrowException) {
      if (_rethrowException === void 0) {
        _rethrowException = true;
      }
      this._logger = _logger;
      this._rethrowException = _rethrowException;
    }
    ExceptionHandler.exceptionToString = function(exception, stackTrace, reason) {
      if (stackTrace === void 0) {
        stackTrace = null;
      }
      if (reason === void 0) {
        reason = null;
      }
      var l = new _ArrayLogger();
      var e = new ExceptionHandler(l, false);
      e.call(exception, stackTrace, reason);
      return l.res.join("\n");
    };
    ExceptionHandler.prototype.call = function(exception, stackTrace, reason) {
      if (stackTrace === void 0) {
        stackTrace = null;
      }
      if (reason === void 0) {
        reason = null;
      }
      var originalException = this._findOriginalException(exception);
      var originalStack = this._findOriginalStack(exception);
      var context = this._findContext(exception);
      this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
      if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
        this._logger.logError("STACKTRACE:");
        this._logger.logError(this._longStackTrace(stackTrace));
      }
      if (lang_1.isPresent(reason)) {
        this._logger.logError("REASON: " + reason);
      }
      if (lang_1.isPresent(originalException)) {
        this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
      }
      if (lang_1.isPresent(originalStack)) {
        this._logger.logError("ORIGINAL STACKTRACE:");
        this._logger.logError(this._longStackTrace(originalStack));
      }
      if (lang_1.isPresent(context)) {
        this._logger.logError("ERROR CONTEXT:");
        this._logger.logError(context);
      }
      this._logger.logGroupEnd();
      if (this._rethrowException)
        throw exception;
    };
    ExceptionHandler.prototype._extractMessage = function(exception) {
      return exception instanceof exceptions_1.WrappedException ? exception.wrapperMessage : exception.toString();
    };
    ExceptionHandler.prototype._longStackTrace = function(stackTrace) {
      return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") : stackTrace.toString();
    };
    ExceptionHandler.prototype._findContext = function(exception) {
      try {
        if (!(exception instanceof exceptions_1.WrappedException))
          return null;
        return lang_1.isPresent(exception.context) ? exception.context : this._findContext(exception.originalException);
      } catch (e) {
        return null;
      }
    };
    ExceptionHandler.prototype._findOriginalException = function(exception) {
      if (!(exception instanceof exceptions_1.WrappedException))
        return null;
      var e = exception.originalException;
      while (e instanceof exceptions_1.WrappedException && lang_1.isPresent(e.originalException)) {
        e = e.originalException;
      }
      return e;
    };
    ExceptionHandler.prototype._findOriginalStack = function(exception) {
      if (!(exception instanceof exceptions_1.WrappedException))
        return null;
      var e = exception;
      var stack = exception.originalStack;
      while (e instanceof exceptions_1.WrappedException && lang_1.isPresent(e.originalException)) {
        e = e.originalException;
        if (e instanceof exceptions_1.WrappedException && lang_1.isPresent(e.originalException)) {
          stack = e.originalStack;
        }
      }
      return stack;
    };
    return ExceptionHandler;
  })();
  exports.ExceptionHandler = ExceptionHandler;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/di/decorators", ["angular2/src/core/di/metadata", "angular2/src/core/util/decorators"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var metadata_1 = require("angular2/src/core/di/metadata");
  var decorators_1 = require("angular2/src/core/util/decorators");
  exports.Inject = decorators_1.makeParamDecorator(metadata_1.InjectMetadata);
  exports.Optional = decorators_1.makeParamDecorator(metadata_1.OptionalMetadata);
  exports.Injectable = decorators_1.makeDecorator(metadata_1.InjectableMetadata);
  exports.Self = decorators_1.makeParamDecorator(metadata_1.SelfMetadata);
  exports.Host = decorators_1.makeParamDecorator(metadata_1.HostMetadata);
  exports.SkipSelf = decorators_1.makeParamDecorator(metadata_1.SkipSelfMetadata);
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/reflection/reflection", ["angular2/src/core/reflection/reflector", "angular2/src/core/reflection/reflector", "angular2/src/core/reflection/reflection_capabilities"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var reflector_1 = require("angular2/src/core/reflection/reflector");
  var reflector_2 = require("angular2/src/core/reflection/reflector");
  exports.Reflector = reflector_2.Reflector;
  exports.ReflectionInfo = reflector_2.ReflectionInfo;
  var reflection_capabilities_1 = require("angular2/src/core/reflection/reflection_capabilities");
  exports.reflector = new reflector_1.Reflector(new reflection_capabilities_1.ReflectionCapabilities());
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/di/key", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/core/di/type_literal", "angular2/src/core/di/forward_ref", "angular2/src/core/di/type_literal"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var type_literal_1 = require("angular2/src/core/di/type_literal");
  var forward_ref_1 = require("angular2/src/core/di/forward_ref");
  var type_literal_2 = require("angular2/src/core/di/type_literal");
  exports.TypeLiteral = type_literal_2.TypeLiteral;
  var Key = (function() {
    function Key(token, id) {
      this.token = token;
      this.id = id;
      if (lang_1.isBlank(token)) {
        throw new exceptions_1.BaseException('Token must be defined!');
      }
    }
    Object.defineProperty(Key.prototype, "displayName", {
      get: function() {
        return lang_1.stringify(this.token);
      },
      enumerable: true,
      configurable: true
    });
    Key.get = function(token) {
      return _globalKeyRegistry.get(forward_ref_1.resolveForwardRef(token));
    };
    Object.defineProperty(Key, "numberOfKeys", {
      get: function() {
        return _globalKeyRegistry.numberOfKeys;
      },
      enumerable: true,
      configurable: true
    });
    return Key;
  })();
  exports.Key = Key;
  var KeyRegistry = (function() {
    function KeyRegistry() {
      this._allKeys = new Map();
    }
    KeyRegistry.prototype.get = function(token) {
      if (token instanceof Key)
        return token;
      var theToken = token;
      if (token instanceof type_literal_1.TypeLiteral) {
        theToken = token.type;
      }
      token = theToken;
      if (this._allKeys.has(token)) {
        return this._allKeys.get(token);
      }
      var newKey = new Key(token, Key.numberOfKeys);
      this._allKeys.set(token, newKey);
      return newKey;
    };
    Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
      get: function() {
        return this._allKeys.size;
      },
      enumerable: true,
      configurable: true
    });
    return KeyRegistry;
  })();
  exports.KeyRegistry = KeyRegistry;
  var _globalKeyRegistry = new KeyRegistry();
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/profile/profile", ["angular2/src/core/profile/wtf_impl"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var impl = require("angular2/src/core/profile/wtf_impl");
  exports.wtfEnabled = impl.detectWTF();
  function noopScope(arg0, arg1) {
    return null;
  }
  exports.wtfCreateScope = exports.wtfEnabled ? impl.createScope : function(signature, flags) {
    return noopScope;
  };
  exports.wtfLeave = exports.wtfEnabled ? impl.leave : function(s, r) {
    return r;
  };
  exports.wtfStartTimeRange = exports.wtfEnabled ? impl.startTimeRange : function(rangeType, action) {
    return null;
  };
  exports.wtfEndTimeRange = exports.wtfEnabled ? impl.endTimeRange : function(r) {
    return null;
  };
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/change_detection_util", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/change_detection/constants", "angular2/src/core/change_detection/pipe_lifecycle_reflector", "angular2/src/core/change_detection/binding_record", "angular2/src/core/change_detection/directive_record"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var constants_1 = require("angular2/src/core/change_detection/constants");
  var pipe_lifecycle_reflector_1 = require("angular2/src/core/change_detection/pipe_lifecycle_reflector");
  var binding_record_1 = require("angular2/src/core/change_detection/binding_record");
  var directive_record_1 = require("angular2/src/core/change_detection/directive_record");
  var WrappedValue = (function() {
    function WrappedValue(wrapped) {
      this.wrapped = wrapped;
    }
    WrappedValue.wrap = function(value) {
      var w = _wrappedValues[_wrappedIndex++ % 5];
      w.wrapped = value;
      return w;
    };
    return WrappedValue;
  })();
  exports.WrappedValue = WrappedValue;
  var _wrappedValues = [new WrappedValue(null), new WrappedValue(null), new WrappedValue(null), new WrappedValue(null), new WrappedValue(null)];
  var _wrappedIndex = 0;
  var SimpleChange = (function() {
    function SimpleChange(previousValue, currentValue) {
      this.previousValue = previousValue;
      this.currentValue = currentValue;
    }
    SimpleChange.prototype.isFirstChange = function() {
      return this.previousValue === ChangeDetectionUtil.uninitialized;
    };
    return SimpleChange;
  })();
  exports.SimpleChange = SimpleChange;
  var _simpleChangesIndex = 0;
  var _simpleChanges = [new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null)];
  function _simpleChange(previousValue, currentValue) {
    var index = _simpleChangesIndex++ % 20;
    var s = _simpleChanges[index];
    s.previousValue = previousValue;
    s.currentValue = currentValue;
    return s;
  }
  var ChangeDetectionUtil = (function() {
    function ChangeDetectionUtil() {}
    ChangeDetectionUtil.arrayFn0 = function() {
      return [];
    };
    ChangeDetectionUtil.arrayFn1 = function(a1) {
      return [a1];
    };
    ChangeDetectionUtil.arrayFn2 = function(a1, a2) {
      return [a1, a2];
    };
    ChangeDetectionUtil.arrayFn3 = function(a1, a2, a3) {
      return [a1, a2, a3];
    };
    ChangeDetectionUtil.arrayFn4 = function(a1, a2, a3, a4) {
      return [a1, a2, a3, a4];
    };
    ChangeDetectionUtil.arrayFn5 = function(a1, a2, a3, a4, a5) {
      return [a1, a2, a3, a4, a5];
    };
    ChangeDetectionUtil.arrayFn6 = function(a1, a2, a3, a4, a5, a6) {
      return [a1, a2, a3, a4, a5, a6];
    };
    ChangeDetectionUtil.arrayFn7 = function(a1, a2, a3, a4, a5, a6, a7) {
      return [a1, a2, a3, a4, a5, a6, a7];
    };
    ChangeDetectionUtil.arrayFn8 = function(a1, a2, a3, a4, a5, a6, a7, a8) {
      return [a1, a2, a3, a4, a5, a6, a7, a8];
    };
    ChangeDetectionUtil.arrayFn9 = function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      return [a1, a2, a3, a4, a5, a6, a7, a8, a9];
    };
    ChangeDetectionUtil.operation_negate = function(value) {
      return !value;
    };
    ChangeDetectionUtil.operation_add = function(left, right) {
      return left + right;
    };
    ChangeDetectionUtil.operation_subtract = function(left, right) {
      return left - right;
    };
    ChangeDetectionUtil.operation_multiply = function(left, right) {
      return left * right;
    };
    ChangeDetectionUtil.operation_divide = function(left, right) {
      return left / right;
    };
    ChangeDetectionUtil.operation_remainder = function(left, right) {
      return left % right;
    };
    ChangeDetectionUtil.operation_equals = function(left, right) {
      return left == right;
    };
    ChangeDetectionUtil.operation_not_equals = function(left, right) {
      return left != right;
    };
    ChangeDetectionUtil.operation_identical = function(left, right) {
      return left === right;
    };
    ChangeDetectionUtil.operation_not_identical = function(left, right) {
      return left !== right;
    };
    ChangeDetectionUtil.operation_less_then = function(left, right) {
      return left < right;
    };
    ChangeDetectionUtil.operation_greater_then = function(left, right) {
      return left > right;
    };
    ChangeDetectionUtil.operation_less_or_equals_then = function(left, right) {
      return left <= right;
    };
    ChangeDetectionUtil.operation_greater_or_equals_then = function(left, right) {
      return left >= right;
    };
    ChangeDetectionUtil.cond = function(cond, trueVal, falseVal) {
      return cond ? trueVal : falseVal;
    };
    ChangeDetectionUtil.mapFn = function(keys) {
      function buildMap(values) {
        var res = collection_1.StringMapWrapper.create();
        for (var i = 0; i < keys.length; ++i) {
          collection_1.StringMapWrapper.set(res, keys[i], values[i]);
        }
        return res;
      }
      switch (keys.length) {
        case 0:
          return function() {
            return [];
          };
        case 1:
          return function(a1) {
            return buildMap([a1]);
          };
        case 2:
          return function(a1, a2) {
            return buildMap([a1, a2]);
          };
        case 3:
          return function(a1, a2, a3) {
            return buildMap([a1, a2, a3]);
          };
        case 4:
          return function(a1, a2, a3, a4) {
            return buildMap([a1, a2, a3, a4]);
          };
        case 5:
          return function(a1, a2, a3, a4, a5) {
            return buildMap([a1, a2, a3, a4, a5]);
          };
        case 6:
          return function(a1, a2, a3, a4, a5, a6) {
            return buildMap([a1, a2, a3, a4, a5, a6]);
          };
        case 7:
          return function(a1, a2, a3, a4, a5, a6, a7) {
            return buildMap([a1, a2, a3, a4, a5, a6, a7]);
          };
        case 8:
          return function(a1, a2, a3, a4, a5, a6, a7, a8) {
            return buildMap([a1, a2, a3, a4, a5, a6, a7, a8]);
          };
        case 9:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return buildMap([a1, a2, a3, a4, a5, a6, a7, a8, a9]);
          };
        default:
          throw new exceptions_1.BaseException("Does not support literal maps with more than 9 elements");
      }
    };
    ChangeDetectionUtil.keyedAccess = function(obj, args) {
      return obj[args[0]];
    };
    ChangeDetectionUtil.unwrapValue = function(value) {
      if (value instanceof WrappedValue) {
        return value.wrapped;
      } else {
        return value;
      }
    };
    ChangeDetectionUtil.changeDetectionMode = function(strategy) {
      return constants_1.isDefaultChangeDetectionStrategy(strategy) ? constants_1.ChangeDetectionStrategy.CheckAlways : constants_1.ChangeDetectionStrategy.CheckOnce;
    };
    ChangeDetectionUtil.simpleChange = function(previousValue, currentValue) {
      return _simpleChange(previousValue, currentValue);
    };
    ChangeDetectionUtil.isValueBlank = function(value) {
      return lang_1.isBlank(value);
    };
    ChangeDetectionUtil.s = function(value) {
      return lang_1.isPresent(value) ? "" + value : '';
    };
    ChangeDetectionUtil.protoByIndex = function(protos, selfIndex) {
      return selfIndex < 1 ? null : protos[selfIndex - 1];
    };
    ChangeDetectionUtil.callPipeOnDestroy = function(selectedPipe) {
      if (pipe_lifecycle_reflector_1.implementsOnDestroy(selectedPipe.pipe)) {
        selectedPipe.pipe.ngOnDestroy();
      }
    };
    ChangeDetectionUtil.bindingTarget = function(mode, elementIndex, name, unit, debug) {
      return new binding_record_1.BindingTarget(mode, elementIndex, name, unit, debug);
    };
    ChangeDetectionUtil.directiveIndex = function(elementIndex, directiveIndex) {
      return new directive_record_1.DirectiveIndex(elementIndex, directiveIndex);
    };
    ChangeDetectionUtil.looseNotIdentical = function(a, b) {
      return !lang_1.looseIdentical(a, b);
    };
    ChangeDetectionUtil.uninitialized = lang_1.CONST_EXPR(new Object());
    return ChangeDetectionUtil;
  })();
  exports.ChangeDetectionUtil = ChangeDetectionUtil;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/abstract_change_detector", ["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/core/change_detection/change_detection_util", "angular2/src/core/change_detection/change_detector_ref", "angular2/src/core/change_detection/exceptions", "angular2/src/core/change_detection/parser/locals", "angular2/src/core/change_detection/constants", "angular2/src/core/profile/profile", "angular2/src/core/change_detection/observable_facade"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var collection_1 = require("angular2/src/facade/collection");
  var change_detection_util_1 = require("angular2/src/core/change_detection/change_detection_util");
  var change_detector_ref_1 = require("angular2/src/core/change_detection/change_detector_ref");
  var exceptions_1 = require("angular2/src/core/change_detection/exceptions");
  var locals_1 = require("angular2/src/core/change_detection/parser/locals");
  var constants_1 = require("angular2/src/core/change_detection/constants");
  var profile_1 = require("angular2/src/core/profile/profile");
  var observable_facade_1 = require("angular2/src/core/change_detection/observable_facade");
  var _scope_check = profile_1.wtfCreateScope("ChangeDetector#check(ascii id, bool throwOnChange)");
  var _Context = (function() {
    function _Context(element, componentElement, context, locals, injector, expression) {
      this.element = element;
      this.componentElement = componentElement;
      this.context = context;
      this.locals = locals;
      this.injector = injector;
      this.expression = expression;
    }
    return _Context;
  })();
  var AbstractChangeDetector = (function() {
    function AbstractChangeDetector(id, numberOfPropertyProtoRecords, bindingTargets, directiveIndices, strategy) {
      this.id = id;
      this.numberOfPropertyProtoRecords = numberOfPropertyProtoRecords;
      this.bindingTargets = bindingTargets;
      this.directiveIndices = directiveIndices;
      this.strategy = strategy;
      this.contentChildren = [];
      this.viewChildren = [];
      this.state = constants_1.ChangeDetectorState.NeverChecked;
      this.locals = null;
      this.mode = null;
      this.pipes = null;
      this.ref = new change_detector_ref_1.ChangeDetectorRef_(this);
    }
    AbstractChangeDetector.prototype.addContentChild = function(cd) {
      this.contentChildren.push(cd);
      cd.parent = this;
    };
    AbstractChangeDetector.prototype.removeContentChild = function(cd) {
      collection_1.ListWrapper.remove(this.contentChildren, cd);
    };
    AbstractChangeDetector.prototype.addViewChild = function(cd) {
      this.viewChildren.push(cd);
      cd.parent = this;
    };
    AbstractChangeDetector.prototype.removeViewChild = function(cd) {
      collection_1.ListWrapper.remove(this.viewChildren, cd);
    };
    AbstractChangeDetector.prototype.remove = function() {
      this.parent.removeContentChild(this);
    };
    AbstractChangeDetector.prototype.handleEvent = function(eventName, elIndex, event) {
      if (!this.hydrated()) {
        return true;
      }
      try {
        var locals = new Map();
        locals.set('$event', event);
        var res = !this.handleEventInternal(eventName, elIndex, new locals_1.Locals(this.locals, locals));
        this.markPathToRootAsCheckOnce();
        return res;
      } catch (e) {
        var c = this.dispatcher.getDebugContext(null, elIndex, null);
        var context = lang_1.isPresent(c) ? new exceptions_1.EventEvaluationErrorContext(c.element, c.componentElement, c.context, c.locals, c.injector) : null;
        throw new exceptions_1.EventEvaluationError(eventName, e, e.stack, context);
      }
    };
    AbstractChangeDetector.prototype.handleEventInternal = function(eventName, elIndex, locals) {
      return false;
    };
    AbstractChangeDetector.prototype.detectChanges = function() {
      this.runDetectChanges(false);
    };
    AbstractChangeDetector.prototype.checkNoChanges = function() {
      if (lang_1.assertionsEnabled()) {
        this.runDetectChanges(true);
      }
    };
    AbstractChangeDetector.prototype.runDetectChanges = function(throwOnChange) {
      if (this.mode === constants_1.ChangeDetectionStrategy.Detached || this.mode === constants_1.ChangeDetectionStrategy.Checked || this.state === constants_1.ChangeDetectorState.Errored)
        return ;
      var s = _scope_check(this.id, throwOnChange);
      this.detectChangesInRecords(throwOnChange);
      this._detectChangesContentChildren(throwOnChange);
      if (!throwOnChange)
        this.afterContentLifecycleCallbacks();
      this._detectChangesInViewChildren(throwOnChange);
      if (!throwOnChange)
        this.afterViewLifecycleCallbacks();
      if (this.mode === constants_1.ChangeDetectionStrategy.CheckOnce)
        this.mode = constants_1.ChangeDetectionStrategy.Checked;
      this.state = constants_1.ChangeDetectorState.CheckedBefore;
      profile_1.wtfLeave(s);
    };
    AbstractChangeDetector.prototype.detectChangesInRecords = function(throwOnChange) {
      if (!this.hydrated()) {
        this.throwDehydratedError();
      }
      try {
        this.detectChangesInRecordsInternal(throwOnChange);
      } catch (e) {
        if (!(e instanceof exceptions_1.ExpressionChangedAfterItHasBeenCheckedException)) {
          this.state = constants_1.ChangeDetectorState.Errored;
        }
        this._throwError(e, e.stack);
      }
    };
    AbstractChangeDetector.prototype.detectChangesInRecordsInternal = function(throwOnChange) {};
    AbstractChangeDetector.prototype.hydrate = function(context, locals, dispatcher, pipes) {
      this.dispatcher = dispatcher;
      this.mode = change_detection_util_1.ChangeDetectionUtil.changeDetectionMode(this.strategy);
      this.context = context;
      if (this.strategy === constants_1.ChangeDetectionStrategy.OnPushObserve) {
        this.observeComponent(context);
      }
      this.locals = locals;
      this.pipes = pipes;
      this.hydrateDirectives(dispatcher);
      this.state = constants_1.ChangeDetectorState.NeverChecked;
    };
    AbstractChangeDetector.prototype.hydrateDirectives = function(dispatcher) {};
    AbstractChangeDetector.prototype.dehydrate = function() {
      this.dehydrateDirectives(true);
      if (this.strategy === constants_1.ChangeDetectionStrategy.OnPushObserve) {
        this._unsubsribeFromObservables();
      }
      this.dispatcher = null;
      this.context = null;
      this.locals = null;
      this.pipes = null;
    };
    AbstractChangeDetector.prototype.dehydrateDirectives = function(destroyPipes) {};
    AbstractChangeDetector.prototype.hydrated = function() {
      return lang_1.isPresent(this.context);
    };
    AbstractChangeDetector.prototype.destroyRecursive = function() {
      this.dispatcher.notifyOnDestroy();
      this.dehydrate();
      var children = this.contentChildren;
      for (var i = 0; i < children.length; i++) {
        children[i].destroyRecursive();
      }
      children = this.viewChildren;
      for (var i = 0; i < children.length; i++) {
        children[i].destroyRecursive();
      }
    };
    AbstractChangeDetector.prototype.afterContentLifecycleCallbacks = function() {
      this.dispatcher.notifyAfterContentChecked();
      this.afterContentLifecycleCallbacksInternal();
    };
    AbstractChangeDetector.prototype.afterContentLifecycleCallbacksInternal = function() {};
    AbstractChangeDetector.prototype.afterViewLifecycleCallbacks = function() {
      this.dispatcher.notifyAfterViewChecked();
      this.afterViewLifecycleCallbacksInternal();
    };
    AbstractChangeDetector.prototype.afterViewLifecycleCallbacksInternal = function() {};
    AbstractChangeDetector.prototype._detectChangesContentChildren = function(throwOnChange) {
      var c = this.contentChildren;
      for (var i = 0; i < c.length; ++i) {
        c[i].runDetectChanges(throwOnChange);
      }
    };
    AbstractChangeDetector.prototype._detectChangesInViewChildren = function(throwOnChange) {
      var c = this.viewChildren;
      for (var i = 0; i < c.length; ++i) {
        c[i].runDetectChanges(throwOnChange);
      }
    };
    AbstractChangeDetector.prototype.markAsCheckOnce = function() {
      this.mode = constants_1.ChangeDetectionStrategy.CheckOnce;
    };
    AbstractChangeDetector.prototype.markPathToRootAsCheckOnce = function() {
      var c = this;
      while (lang_1.isPresent(c) && c.mode !== constants_1.ChangeDetectionStrategy.Detached) {
        if (c.mode === constants_1.ChangeDetectionStrategy.Checked)
          c.mode = constants_1.ChangeDetectionStrategy.CheckOnce;
        c = c.parent;
      }
    };
    AbstractChangeDetector.prototype._unsubsribeFromObservables = function() {
      if (lang_1.isPresent(this.subscriptions)) {
        for (var i = 0; i < this.subscriptions.length; ++i) {
          var s = this.subscriptions[i];
          if (lang_1.isPresent(this.subscriptions[i])) {
            s.cancel();
            this.subscriptions[i] = null;
          }
        }
      }
    };
    AbstractChangeDetector.prototype.observeValue = function(value, index) {
      var _this = this;
      if (observable_facade_1.isObservable(value)) {
        this._createArrayToStoreObservables();
        if (lang_1.isBlank(this.subscriptions[index])) {
          this.streams[index] = value.changes;
          this.subscriptions[index] = value.changes.listen(function(_) {
            return _this.ref.markForCheck();
          });
        } else if (this.streams[index] !== value.changes) {
          this.subscriptions[index].cancel();
          this.streams[index] = value.changes;
          this.subscriptions[index] = value.changes.listen(function(_) {
            return _this.ref.markForCheck();
          });
        }
      }
      return value;
    };
    AbstractChangeDetector.prototype.observeDirective = function(value, index) {
      var _this = this;
      if (observable_facade_1.isObservable(value)) {
        this._createArrayToStoreObservables();
        var arrayIndex = this.numberOfPropertyProtoRecords + index + 2;
        this.streams[arrayIndex] = value.changes;
        this.subscriptions[arrayIndex] = value.changes.listen(function(_) {
          return _this.ref.markForCheck();
        });
      }
      return value;
    };
    AbstractChangeDetector.prototype.observeComponent = function(value) {
      var _this = this;
      if (observable_facade_1.isObservable(value)) {
        this._createArrayToStoreObservables();
        var index = this.numberOfPropertyProtoRecords + 1;
        this.streams[index] = value.changes;
        this.subscriptions[index] = value.changes.listen(function(_) {
          return _this.ref.markForCheck();
        });
      }
      return value;
    };
    AbstractChangeDetector.prototype._createArrayToStoreObservables = function() {
      if (lang_1.isBlank(this.subscriptions)) {
        this.subscriptions = collection_1.ListWrapper.createFixedSize(this.numberOfPropertyProtoRecords + this.directiveIndices.length + 2);
        this.streams = collection_1.ListWrapper.createFixedSize(this.numberOfPropertyProtoRecords + this.directiveIndices.length + 2);
      }
    };
    AbstractChangeDetector.prototype.getDirectiveFor = function(directives, index) {
      return directives.getDirectiveFor(this.directiveIndices[index]);
    };
    AbstractChangeDetector.prototype.getDetectorFor = function(directives, index) {
      return directives.getDetectorFor(this.directiveIndices[index]);
    };
    AbstractChangeDetector.prototype.notifyDispatcher = function(value) {
      this.dispatcher.notifyOnBinding(this._currentBinding(), value);
    };
    AbstractChangeDetector.prototype.logBindingUpdate = function(value) {
      this.dispatcher.logBindingUpdate(this._currentBinding(), value);
    };
    AbstractChangeDetector.prototype.addChange = function(changes, oldValue, newValue) {
      if (lang_1.isBlank(changes)) {
        changes = {};
      }
      changes[this._currentBinding().name] = change_detection_util_1.ChangeDetectionUtil.simpleChange(oldValue, newValue);
      return changes;
    };
    AbstractChangeDetector.prototype._throwError = function(exception, stack) {
      var error;
      try {
        var c = this.dispatcher.getDebugContext(null, this._currentBinding().elementIndex, null);
        var context = lang_1.isPresent(c) ? new _Context(c.element, c.componentElement, c.context, c.locals, c.injector, this._currentBinding().debug) : null;
        error = new exceptions_1.ChangeDetectionError(this._currentBinding().debug, exception, stack, context);
      } catch (e) {
        error = new exceptions_1.ChangeDetectionError(null, exception, stack, null);
      }
      throw error;
    };
    AbstractChangeDetector.prototype.throwOnChangeError = function(oldValue, newValue) {
      throw new exceptions_1.ExpressionChangedAfterItHasBeenCheckedException(this._currentBinding().debug, oldValue, newValue, null);
    };
    AbstractChangeDetector.prototype.throwDehydratedError = function() {
      throw new exceptions_1.DehydratedException();
    };
    AbstractChangeDetector.prototype._currentBinding = function() {
      return this.bindingTargets[this.propertyBindingIndex];
    };
    return AbstractChangeDetector;
  })();
  exports.AbstractChangeDetector = AbstractChangeDetector;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/codegen_logic_util", ["angular2/src/facade/lang", "angular2/src/core/change_detection/codegen_facade", "angular2/src/core/change_detection/proto_record", "angular2/src/core/change_detection/constants", "angular2/src/facade/exceptions"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var codegen_facade_1 = require("angular2/src/core/change_detection/codegen_facade");
  var proto_record_1 = require("angular2/src/core/change_detection/proto_record");
  var constants_1 = require("angular2/src/core/change_detection/constants");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var CodegenLogicUtil = (function() {
    function CodegenLogicUtil(_names, _utilName, _changeDetectorStateName, _changeDetection) {
      this._names = _names;
      this._utilName = _utilName;
      this._changeDetectorStateName = _changeDetectorStateName;
      this._changeDetection = _changeDetection;
    }
    CodegenLogicUtil.prototype.genPropertyBindingEvalValue = function(protoRec) {
      var _this = this;
      return this._genEvalValue(protoRec, function(idx) {
        return _this._names.getLocalName(idx);
      }, this._names.getLocalsAccessorName());
    };
    CodegenLogicUtil.prototype.genEventBindingEvalValue = function(eventRecord, protoRec) {
      var _this = this;
      return this._genEvalValue(protoRec, function(idx) {
        return _this._names.getEventLocalName(eventRecord, idx);
      }, "locals");
    };
    CodegenLogicUtil.prototype._genEvalValue = function(protoRec, getLocalName, localsAccessor) {
      var context = (protoRec.contextIndex == -1) ? this._names.getDirectiveName(protoRec.directiveIndex) : getLocalName(protoRec.contextIndex);
      var argString = protoRec.args.map(function(arg) {
        return getLocalName(arg);
      }).join(", ");
      var rhs;
      switch (protoRec.mode) {
        case proto_record_1.RecordType.Self:
          rhs = context;
          break;
        case proto_record_1.RecordType.Const:
          rhs = codegen_facade_1.codify(protoRec.funcOrValue);
          break;
        case proto_record_1.RecordType.PropertyRead:
          rhs = this._observe(context + "." + protoRec.name, protoRec);
          break;
        case proto_record_1.RecordType.SafeProperty:
          var read = this._observe(context + "." + protoRec.name, protoRec);
          rhs = this._utilName + ".isValueBlank(" + context + ") ? null : " + this._observe(read, protoRec);
          break;
        case proto_record_1.RecordType.PropertyWrite:
          rhs = context + "." + protoRec.name + " = " + getLocalName(protoRec.args[0]);
          break;
        case proto_record_1.RecordType.Local:
          rhs = this._observe(localsAccessor + ".get(" + codegen_facade_1.rawString(protoRec.name) + ")", protoRec);
          break;
        case proto_record_1.RecordType.InvokeMethod:
          rhs = this._observe(context + "." + protoRec.name + "(" + argString + ")", protoRec);
          break;
        case proto_record_1.RecordType.SafeMethodInvoke:
          var invoke = context + "." + protoRec.name + "(" + argString + ")";
          rhs = this._utilName + ".isValueBlank(" + context + ") ? null : " + this._observe(invoke, protoRec);
          break;
        case proto_record_1.RecordType.InvokeClosure:
          rhs = context + "(" + argString + ")";
          break;
        case proto_record_1.RecordType.PrimitiveOp:
          rhs = this._utilName + "." + protoRec.name + "(" + argString + ")";
          break;
        case proto_record_1.RecordType.CollectionLiteral:
          rhs = this._utilName + "." + protoRec.name + "(" + argString + ")";
          break;
        case proto_record_1.RecordType.Interpolate:
          rhs = this._genInterpolation(protoRec);
          break;
        case proto_record_1.RecordType.KeyedRead:
          rhs = this._observe(context + "[" + getLocalName(protoRec.args[0]) + "]", protoRec);
          break;
        case proto_record_1.RecordType.KeyedWrite:
          rhs = context + "[" + getLocalName(protoRec.args[0]) + "] = " + getLocalName(protoRec.args[1]);
          break;
        case proto_record_1.RecordType.Chain:
          rhs = "" + getLocalName(protoRec.args[protoRec.args.length - 1]);
          break;
        default:
          throw new exceptions_1.BaseException("Unknown operation " + protoRec.mode);
      }
      return getLocalName(protoRec.selfIndex) + " = " + rhs + ";";
    };
    CodegenLogicUtil.prototype._observe = function(exp, rec) {
      if (this._changeDetection === constants_1.ChangeDetectionStrategy.OnPushObserve) {
        return "this.observeValue(" + exp + ", " + rec.selfIndex + ")";
      } else {
        return exp;
      }
    };
    CodegenLogicUtil.prototype.genPropertyBindingTargets = function(propertyBindingTargets, genDebugInfo) {
      var _this = this;
      var bs = propertyBindingTargets.map(function(b) {
        if (lang_1.isBlank(b))
          return "null";
        var debug = genDebugInfo ? codegen_facade_1.codify(b.debug) : "null";
        return _this._utilName + ".bindingTarget(" + codegen_facade_1.codify(b.mode) + ", " + b.elementIndex + ", " + codegen_facade_1.codify(b.name) + ", " + codegen_facade_1.codify(b.unit) + ", " + debug + ")";
      });
      return "[" + bs.join(", ") + "]";
    };
    CodegenLogicUtil.prototype.genDirectiveIndices = function(directiveRecords) {
      var _this = this;
      var bs = directiveRecords.map(function(b) {
        return (_this._utilName + ".directiveIndex(" + b.directiveIndex.elementIndex + ", " + b.directiveIndex.directiveIndex + ")");
      });
      return "[" + bs.join(", ") + "]";
    };
    CodegenLogicUtil.prototype._genInterpolation = function(protoRec) {
      var iVals = [];
      for (var i = 0; i < protoRec.args.length; ++i) {
        iVals.push(codegen_facade_1.codify(protoRec.fixedArgs[i]));
        iVals.push(this._utilName + ".s(" + this._names.getLocalName(protoRec.args[i]) + ")");
      }
      iVals.push(codegen_facade_1.codify(protoRec.fixedArgs[protoRec.args.length]));
      return codegen_facade_1.combineGeneratedStrings(iVals);
    };
    CodegenLogicUtil.prototype.genHydrateDirectives = function(directiveRecords) {
      var _this = this;
      var res = [];
      for (var i = 0; i < directiveRecords.length; ++i) {
        var r = directiveRecords[i];
        var dirVarName = this._names.getDirectiveName(r.directiveIndex);
        res.push(dirVarName + " = " + this._genReadDirective(i) + ";");
        if (lang_1.isPresent(r.outputs)) {
          r.outputs.forEach(function(output) {
            var eventHandlerExpr = _this._genEventHandler(r.directiveIndex.elementIndex, output[1]);
            if (lang_1.IS_DART) {
              res.push(dirVarName + "." + output[0] + ".listen(" + eventHandlerExpr + ");");
            } else {
              res.push(dirVarName + "." + output[0] + ".subscribe({next: " + eventHandlerExpr + "});");
            }
          });
        }
      }
      return res.join("\n");
    };
    CodegenLogicUtil.prototype.genDirectivesOnDestroy = function(directiveRecords) {
      var res = [];
      for (var i = 0; i < directiveRecords.length; ++i) {
        var r = directiveRecords[i];
        if (r.callOnDestroy) {
          var dirVarName = this._names.getDirectiveName(r.directiveIndex);
          res.push(dirVarName + ".ngOnDestroy();");
        }
      }
      return res.join("\n");
    };
    CodegenLogicUtil.prototype._genEventHandler = function(boundElementIndex, eventName) {
      if (lang_1.IS_DART) {
        return "(event) => this.handleEvent('" + eventName + "', " + boundElementIndex + ", event)";
      } else {
        return "(function(event) { return this.handleEvent('" + eventName + "', " + boundElementIndex + ", event); }).bind(this)";
      }
    };
    CodegenLogicUtil.prototype._genReadDirective = function(index) {
      var directiveExpr = "this.getDirectiveFor(directives, " + index + ")";
      if (this._changeDetection === constants_1.ChangeDetectionStrategy.OnPushObserve) {
        return "this.observeDirective(" + directiveExpr + ", " + index + ")";
      } else {
        return directiveExpr;
      }
    };
    CodegenLogicUtil.prototype.genHydrateDetectors = function(directiveRecords) {
      var res = [];
      for (var i = 0; i < directiveRecords.length; ++i) {
        var r = directiveRecords[i];
        if (!r.isDefaultChangeDetection()) {
          res.push(this._names.getDetectorName(r.directiveIndex) + " = this.getDetectorFor(directives, " + i + ");");
        }
      }
      return res.join("\n");
    };
    CodegenLogicUtil.prototype.genContentLifecycleCallbacks = function(directiveRecords) {
      var res = [];
      var eq = lang_1.IS_DART ? '==' : '===';
      for (var i = directiveRecords.length - 1; i >= 0; --i) {
        var dir = directiveRecords[i];
        if (dir.callAfterContentInit) {
          res.push("if(" + this._names.getStateName() + " " + eq + " " + this._changeDetectorStateName + ".NeverChecked) " + this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterContentInit();");
        }
        if (dir.callAfterContentChecked) {
          res.push(this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterContentChecked();");
        }
      }
      return res;
    };
    CodegenLogicUtil.prototype.genViewLifecycleCallbacks = function(directiveRecords) {
      var res = [];
      var eq = lang_1.IS_DART ? '==' : '===';
      for (var i = directiveRecords.length - 1; i >= 0; --i) {
        var dir = directiveRecords[i];
        if (dir.callAfterViewInit) {
          res.push("if(" + this._names.getStateName() + " " + eq + " " + this._changeDetectorStateName + ".NeverChecked) " + this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterViewInit();");
        }
        if (dir.callAfterViewChecked) {
          res.push(this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterViewChecked();");
        }
      }
      return res;
    };
    return CodegenLogicUtil;
  })();
  exports.CodegenLogicUtil = CodegenLogicUtil;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/metadata/directives", ["angular2/src/facade/lang", "angular2/src/core/di/metadata", "angular2/src/core/change_detection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var metadata_1 = require("angular2/src/core/di/metadata");
  var change_detection_1 = require("angular2/src/core/change_detection");
  var DirectiveMetadata = (function(_super) {
    __extends(DirectiveMetadata, _super);
    function DirectiveMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          selector = _b.selector,
          inputs = _b.inputs,
          outputs = _b.outputs,
          properties = _b.properties,
          events = _b.events,
          host = _b.host,
          bindings = _b.bindings,
          providers = _b.providers,
          exportAs = _b.exportAs,
          queries = _b.queries;
      _super.call(this);
      this.selector = selector;
      this._inputs = inputs;
      this._properties = properties;
      this._outputs = outputs;
      this._events = events;
      this.host = host;
      this.exportAs = exportAs;
      this.queries = queries;
      this._providers = providers;
      this._bindings = bindings;
    }
    Object.defineProperty(DirectiveMetadata.prototype, "inputs", {
      get: function() {
        return lang_1.isPresent(this._properties) && this._properties.length > 0 ? this._properties : this._inputs;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "properties", {
      get: function() {
        return this.inputs;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "outputs", {
      get: function() {
        return lang_1.isPresent(this._events) && this._events.length > 0 ? this._events : this._outputs;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "events", {
      get: function() {
        return this.outputs;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "providers", {
      get: function() {
        return lang_1.isPresent(this._bindings) && this._bindings.length > 0 ? this._bindings : this._providers;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "bindings", {
      get: function() {
        return this.providers;
      },
      enumerable: true,
      configurable: true
    });
    DirectiveMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], DirectiveMetadata);
    return DirectiveMetadata;
  })(metadata_1.InjectableMetadata);
  exports.DirectiveMetadata = DirectiveMetadata;
  var ComponentMetadata = (function(_super) {
    __extends(ComponentMetadata, _super);
    function ComponentMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          selector = _b.selector,
          inputs = _b.inputs,
          outputs = _b.outputs,
          properties = _b.properties,
          events = _b.events,
          host = _b.host,
          exportAs = _b.exportAs,
          moduleId = _b.moduleId,
          bindings = _b.bindings,
          providers = _b.providers,
          viewBindings = _b.viewBindings,
          viewProviders = _b.viewProviders,
          _c = _b.changeDetection,
          changeDetection = _c === void 0 ? change_detection_1.ChangeDetectionStrategy.Default : _c,
          queries = _b.queries,
          templateUrl = _b.templateUrl,
          template = _b.template,
          styleUrls = _b.styleUrls,
          styles = _b.styles,
          directives = _b.directives,
          pipes = _b.pipes,
          encapsulation = _b.encapsulation;
      _super.call(this, {
        selector: selector,
        inputs: inputs,
        outputs: outputs,
        properties: properties,
        events: events,
        host: host,
        exportAs: exportAs,
        bindings: bindings,
        providers: providers,
        queries: queries
      });
      this.changeDetection = changeDetection;
      this._viewProviders = viewProviders;
      this._viewBindings = viewBindings;
      this.templateUrl = templateUrl;
      this.template = template;
      this.styleUrls = styleUrls;
      this.styles = styles;
      this.directives = directives;
      this.pipes = pipes;
      this.encapsulation = encapsulation;
      this.moduleId = moduleId;
    }
    Object.defineProperty(ComponentMetadata.prototype, "viewProviders", {
      get: function() {
        return lang_1.isPresent(this._viewBindings) && this._viewBindings.length > 0 ? this._viewBindings : this._viewProviders;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentMetadata.prototype, "viewBindings", {
      get: function() {
        return this.viewProviders;
      },
      enumerable: true,
      configurable: true
    });
    ComponentMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], ComponentMetadata);
    return ComponentMetadata;
  })(DirectiveMetadata);
  exports.ComponentMetadata = ComponentMetadata;
  var PipeMetadata = (function(_super) {
    __extends(PipeMetadata, _super);
    function PipeMetadata(_a) {
      var name = _a.name,
          pure = _a.pure;
      _super.call(this);
      this.name = name;
      this._pure = pure;
    }
    Object.defineProperty(PipeMetadata.prototype, "pure", {
      get: function() {
        return lang_1.isPresent(this._pure) ? this._pure : true;
      },
      enumerable: true,
      configurable: true
    });
    PipeMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], PipeMetadata);
    return PipeMetadata;
  })(metadata_1.InjectableMetadata);
  exports.PipeMetadata = PipeMetadata;
  var InputMetadata = (function() {
    function InputMetadata(bindingPropertyName) {
      this.bindingPropertyName = bindingPropertyName;
    }
    InputMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String])], InputMetadata);
    return InputMetadata;
  })();
  exports.InputMetadata = InputMetadata;
  var OutputMetadata = (function() {
    function OutputMetadata(bindingPropertyName) {
      this.bindingPropertyName = bindingPropertyName;
    }
    OutputMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String])], OutputMetadata);
    return OutputMetadata;
  })();
  exports.OutputMetadata = OutputMetadata;
  var HostBindingMetadata = (function() {
    function HostBindingMetadata(hostPropertyName) {
      this.hostPropertyName = hostPropertyName;
    }
    HostBindingMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String])], HostBindingMetadata);
    return HostBindingMetadata;
  })();
  exports.HostBindingMetadata = HostBindingMetadata;
  var HostListenerMetadata = (function() {
    function HostListenerMetadata(eventName, args) {
      this.eventName = eventName;
      this.args = args;
    }
    HostListenerMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String, Array])], HostListenerMetadata);
    return HostListenerMetadata;
  })();
  exports.HostListenerMetadata = HostListenerMetadata;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/pipes/pipes", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/change_detection/pipes"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var cd = require("angular2/src/core/change_detection/pipes");
  var ProtoPipes = (function() {
    function ProtoPipes(config) {
      this.config = config;
      this.config = config;
    }
    ProtoPipes.fromProviders = function(providers) {
      var config = {};
      providers.forEach(function(b) {
        return config[b.name] = b;
      });
      return new ProtoPipes(config);
    };
    ProtoPipes.prototype.get = function(name) {
      var provider = this.config[name];
      if (lang_1.isBlank(provider))
        throw new exceptions_1.BaseException("Cannot find pipe '" + name + "'.");
      return provider;
    };
    return ProtoPipes;
  })();
  exports.ProtoPipes = ProtoPipes;
  var Pipes = (function() {
    function Pipes(proto, injector) {
      this.proto = proto;
      this.injector = injector;
      this._config = {};
    }
    Pipes.prototype.get = function(name) {
      var cached = collection_1.StringMapWrapper.get(this._config, name);
      if (lang_1.isPresent(cached))
        return cached;
      var p = this.proto.get(name);
      var transform = this.injector.instantiateResolved(p);
      var res = new cd.SelectedPipe(transform, p.pure);
      if (p.pure) {
        collection_1.StringMapWrapper.set(this._config, name, res);
      }
      return res;
    };
    return Pipes;
  })();
  exports.Pipes = Pipes;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/view_manager", ["angular2/src/core/di", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/facade/exceptions", "angular2/src/core/linker/view", "angular2/src/core/linker/element", "angular2/src/core/linker/view_listener", "angular2/src/core/render/api", "angular2/src/core/profile/profile", "angular2/src/core/application_tokens", "angular2/src/core/linker/view_type"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  var collection_1 = require("angular2/src/facade/collection");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var view_1 = require("angular2/src/core/linker/view");
  var element_1 = require("angular2/src/core/linker/element");
  var view_listener_1 = require("angular2/src/core/linker/view_listener");
  var api_1 = require("angular2/src/core/render/api");
  var profile_1 = require("angular2/src/core/profile/profile");
  var application_tokens_1 = require("angular2/src/core/application_tokens");
  var view_type_1 = require("angular2/src/core/linker/view_type");
  var AppViewManager = (function() {
    function AppViewManager() {}
    return AppViewManager;
  })();
  exports.AppViewManager = AppViewManager;
  var AppViewManager_ = (function(_super) {
    __extends(AppViewManager_, _super);
    function AppViewManager_(_renderer, _viewListener, _appId) {
      _super.call(this);
      this._renderer = _renderer;
      this._viewListener = _viewListener;
      this._appId = _appId;
      this._nextCompTypeId = 0;
      this._createRootHostViewScope = profile_1.wtfCreateScope('AppViewManager#createRootHostView()');
      this._destroyRootHostViewScope = profile_1.wtfCreateScope('AppViewManager#destroyRootHostView()');
      this._createEmbeddedViewInContainerScope = profile_1.wtfCreateScope('AppViewManager#createEmbeddedViewInContainer()');
      this._createHostViewInContainerScope = profile_1.wtfCreateScope('AppViewManager#createHostViewInContainer()');
      this._destroyViewInContainerScope = profile_1.wtfCreateScope('AppViewMananger#destroyViewInContainer()');
      this._attachViewInContainerScope = profile_1.wtfCreateScope('AppViewMananger#attachViewInContainer()');
      this._detachViewInContainerScope = profile_1.wtfCreateScope('AppViewMananger#detachViewInContainer()');
    }
    AppViewManager_.prototype.getViewContainer = function(location) {
      return location.internalElement.getViewContainerRef();
    };
    AppViewManager_.prototype.getHostElement = function(hostViewRef) {
      var hostView = hostViewRef.internalView;
      if (hostView.proto.type !== view_type_1.ViewType.HOST) {
        throw new exceptions_1.BaseException('This operation is only allowed on host views');
      }
      return hostView.appElements[0].ref;
    };
    AppViewManager_.prototype.getNamedElementInComponentView = function(hostLocation, variableName) {
      var appEl = hostLocation.internalElement;
      var componentView = appEl.componentView;
      if (lang_1.isBlank(componentView)) {
        throw new exceptions_1.BaseException("There is no component directive at element " + hostLocation);
      }
      for (var i = 0; i < componentView.appElements.length; i++) {
        var compAppEl = componentView.appElements[i];
        if (collection_1.StringMapWrapper.contains(compAppEl.proto.directiveVariableBindings, variableName)) {
          return compAppEl.ref;
        }
      }
      throw new exceptions_1.BaseException("Could not find variable " + variableName);
    };
    AppViewManager_.prototype.getComponent = function(hostLocation) {
      return hostLocation.internalElement.getComponent();
    };
    AppViewManager_.prototype.createRootHostView = function(hostViewFactoryRef, overrideSelector, injector, projectableNodes) {
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      var s = this._createRootHostViewScope();
      var hostViewFactory = hostViewFactoryRef.internalHostViewFactory;
      var selector = lang_1.isPresent(overrideSelector) ? overrideSelector : hostViewFactory.selector;
      var view = hostViewFactory.viewFactory(this._renderer, this, null, projectableNodes, selector, null, injector);
      return profile_1.wtfLeave(s, view.ref);
    };
    AppViewManager_.prototype.destroyRootHostView = function(hostViewRef) {
      var s = this._destroyRootHostViewScope();
      var hostView = hostViewRef.internalView;
      hostView.renderer.detachView(view_1.flattenNestedViewRenderNodes(hostView.rootNodesOrAppElements));
      hostView.destroy();
      profile_1.wtfLeave(s);
    };
    AppViewManager_.prototype.createEmbeddedViewInContainer = function(viewContainerLocation, index, templateRef) {
      var s = this._createEmbeddedViewInContainerScope();
      var contextEl = templateRef.elementRef.internalElement;
      var view = contextEl.embeddedViewFactory(contextEl.parentView.renderer, this, contextEl, contextEl.parentView.projectableNodes, null, null, null);
      this._attachViewToContainer(view, viewContainerLocation.internalElement, index);
      return profile_1.wtfLeave(s, view.ref);
    };
    AppViewManager_.prototype.createHostViewInContainer = function(viewContainerLocation, index, hostViewFactoryRef, dynamicallyCreatedProviders, projectableNodes) {
      var s = this._createHostViewInContainerScope();
      var contextEl = viewContainerLocation.internalElement;
      var hostViewFactory = hostViewFactoryRef.internalHostViewFactory;
      var view = hostViewFactory.viewFactory(contextEl.parentView.renderer, contextEl.parentView.viewManager, contextEl, projectableNodes, null, dynamicallyCreatedProviders, null);
      this._attachViewToContainer(view, viewContainerLocation.internalElement, index);
      return profile_1.wtfLeave(s, view.ref);
    };
    AppViewManager_.prototype.destroyViewInContainer = function(viewContainerLocation, index) {
      var s = this._destroyViewInContainerScope();
      var view = this._detachViewInContainer(viewContainerLocation.internalElement, index);
      view.destroy();
      profile_1.wtfLeave(s);
    };
    AppViewManager_.prototype.attachViewInContainer = function(viewContainerLocation, index, viewRef) {
      var s = this._attachViewInContainerScope();
      this._attachViewToContainer(viewRef.internalView, viewContainerLocation.internalElement, index);
      return profile_1.wtfLeave(s, viewRef);
    };
    AppViewManager_.prototype.detachViewInContainer = function(viewContainerLocation, index) {
      var s = this._detachViewInContainerScope();
      var view = this._detachViewInContainer(viewContainerLocation.internalElement, index);
      return profile_1.wtfLeave(s, view.ref);
    };
    AppViewManager_.prototype.onViewCreated = function(view) {
      this._viewListener.onViewCreated(view);
    };
    AppViewManager_.prototype.onViewDestroyed = function(view) {
      this._viewListener.onViewDestroyed(view);
    };
    AppViewManager_.prototype.createRenderComponentType = function(encapsulation, styles) {
      return new api_1.RenderComponentType(this._appId + "-" + this._nextCompTypeId++, encapsulation, styles);
    };
    AppViewManager_.prototype._attachViewToContainer = function(view, vcAppElement, viewIndex) {
      if (view.proto.type === view_type_1.ViewType.COMPONENT) {
        throw new exceptions_1.BaseException("Component views can't be moved!");
      }
      var nestedViews = vcAppElement.nestedViews;
      if (nestedViews == null) {
        nestedViews = [];
        vcAppElement.nestedViews = nestedViews;
      }
      collection_1.ListWrapper.insert(nestedViews, viewIndex, view);
      var refNode;
      if (viewIndex > 0) {
        var prevView = nestedViews[viewIndex - 1];
        refNode = prevView.rootNodesOrAppElements.length > 0 ? prevView.rootNodesOrAppElements[prevView.rootNodesOrAppElements.length - 1] : null;
      } else {
        refNode = vcAppElement.nativeElement;
      }
      if (lang_1.isPresent(refNode)) {
        var refRenderNode;
        if (refNode instanceof element_1.AppElement) {
          refRenderNode = refNode.nativeElement;
        } else {
          refRenderNode = refNode;
        }
        view.renderer.attachViewAfter(refRenderNode, view_1.flattenNestedViewRenderNodes(view.rootNodesOrAppElements));
      }
      vcAppElement.parentView.changeDetector.addContentChild(view.changeDetector);
      vcAppElement.traverseAndSetQueriesAsDirty();
    };
    AppViewManager_.prototype._detachViewInContainer = function(vcAppElement, viewIndex) {
      var view = collection_1.ListWrapper.removeAt(vcAppElement.nestedViews, viewIndex);
      if (view.proto.type === view_type_1.ViewType.COMPONENT) {
        throw new exceptions_1.BaseException("Component views can't be moved!");
      }
      vcAppElement.traverseAndSetQueriesAsDirty();
      view.renderer.detachView(view_1.flattenNestedViewRenderNodes(view.rootNodesOrAppElements));
      view.changeDetector.remove();
      return view;
    };
    AppViewManager_ = __decorate([di_1.Injectable(), __param(2, di_1.Inject(application_tokens_1.APP_ID)), __metadata('design:paramtypes', [api_1.RootRenderer, view_listener_1.AppViewListener, String])], AppViewManager_);
    return AppViewManager_;
  })(AppViewManager);
  exports.AppViewManager_ = AppViewManager_;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/metadata", ["angular2/src/core/metadata/di", "angular2/src/core/metadata/directives", "angular2/src/core/metadata/view", "angular2/src/core/metadata/di", "angular2/src/core/metadata/directives", "angular2/src/core/metadata/view", "angular2/src/core/util/decorators"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var di_1 = require("angular2/src/core/metadata/di");
  exports.QueryMetadata = di_1.QueryMetadata;
  exports.ContentChildrenMetadata = di_1.ContentChildrenMetadata;
  exports.ContentChildMetadata = di_1.ContentChildMetadata;
  exports.ViewChildrenMetadata = di_1.ViewChildrenMetadata;
  exports.ViewQueryMetadata = di_1.ViewQueryMetadata;
  exports.ViewChildMetadata = di_1.ViewChildMetadata;
  exports.AttributeMetadata = di_1.AttributeMetadata;
  var directives_1 = require("angular2/src/core/metadata/directives");
  exports.ComponentMetadata = directives_1.ComponentMetadata;
  exports.DirectiveMetadata = directives_1.DirectiveMetadata;
  exports.PipeMetadata = directives_1.PipeMetadata;
  exports.InputMetadata = directives_1.InputMetadata;
  exports.OutputMetadata = directives_1.OutputMetadata;
  exports.HostBindingMetadata = directives_1.HostBindingMetadata;
  exports.HostListenerMetadata = directives_1.HostListenerMetadata;
  var view_1 = require("angular2/src/core/metadata/view");
  exports.ViewMetadata = view_1.ViewMetadata;
  exports.ViewEncapsulation = view_1.ViewEncapsulation;
  var di_2 = require("angular2/src/core/metadata/di");
  var directives_2 = require("angular2/src/core/metadata/directives");
  var view_2 = require("angular2/src/core/metadata/view");
  var decorators_1 = require("angular2/src/core/util/decorators");
  exports.Component = decorators_1.makeDecorator(directives_2.ComponentMetadata, function(fn) {
    return fn.View = exports.View;
  });
  exports.Directive = decorators_1.makeDecorator(directives_2.DirectiveMetadata);
  exports.View = decorators_1.makeDecorator(view_2.ViewMetadata, function(fn) {
    return fn.View = exports.View;
  });
  exports.Attribute = decorators_1.makeParamDecorator(di_2.AttributeMetadata);
  exports.Query = decorators_1.makeParamDecorator(di_2.QueryMetadata);
  exports.ContentChildren = decorators_1.makePropDecorator(di_2.ContentChildrenMetadata);
  exports.ContentChild = decorators_1.makePropDecorator(di_2.ContentChildMetadata);
  exports.ViewChildren = decorators_1.makePropDecorator(di_2.ViewChildrenMetadata);
  exports.ViewChild = decorators_1.makePropDecorator(di_2.ViewChildMetadata);
  exports.ViewQuery = decorators_1.makeParamDecorator(di_2.ViewQueryMetadata);
  exports.Pipe = decorators_1.makeDecorator(directives_2.PipeMetadata);
  exports.Input = decorators_1.makePropDecorator(directives_2.InputMetadata);
  exports.Output = decorators_1.makePropDecorator(directives_2.OutputMetadata);
  exports.HostBinding = decorators_1.makePropDecorator(directives_2.HostBindingMetadata);
  exports.HostListener = decorators_1.makePropDecorator(directives_2.HostListenerMetadata);
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker", ["angular2/src/core/linker/directive_resolver", "angular2/src/core/linker/view_resolver", "angular2/src/core/linker/compiler", "angular2/src/core/linker/view_manager", "angular2/src/core/linker/query_list", "angular2/src/core/linker/dynamic_component_loader", "angular2/src/core/linker/element_ref", "angular2/src/core/linker/template_ref", "angular2/src/core/linker/view_ref", "angular2/src/core/linker/view_container_ref", "angular2/src/core/linker/dynamic_component_loader"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var directive_resolver_1 = require("angular2/src/core/linker/directive_resolver");
  exports.DirectiveResolver = directive_resolver_1.DirectiveResolver;
  var view_resolver_1 = require("angular2/src/core/linker/view_resolver");
  exports.ViewResolver = view_resolver_1.ViewResolver;
  var compiler_1 = require("angular2/src/core/linker/compiler");
  exports.Compiler = compiler_1.Compiler;
  var view_manager_1 = require("angular2/src/core/linker/view_manager");
  exports.AppViewManager = view_manager_1.AppViewManager;
  var query_list_1 = require("angular2/src/core/linker/query_list");
  exports.QueryList = query_list_1.QueryList;
  var dynamic_component_loader_1 = require("angular2/src/core/linker/dynamic_component_loader");
  exports.DynamicComponentLoader = dynamic_component_loader_1.DynamicComponentLoader;
  var element_ref_1 = require("angular2/src/core/linker/element_ref");
  exports.ElementRef = element_ref_1.ElementRef;
  var template_ref_1 = require("angular2/src/core/linker/template_ref");
  exports.TemplateRef = template_ref_1.TemplateRef;
  var view_ref_1 = require("angular2/src/core/linker/view_ref");
  exports.EmbeddedViewRef = view_ref_1.EmbeddedViewRef;
  exports.HostViewRef = view_ref_1.HostViewRef;
  exports.ViewRef = view_ref_1.ViewRef;
  exports.HostViewFactoryRef = view_ref_1.HostViewFactoryRef;
  var view_container_ref_1 = require("angular2/src/core/linker/view_container_ref");
  exports.ViewContainerRef = view_container_ref_1.ViewContainerRef;
  var dynamic_component_loader_2 = require("angular2/src/core/linker/dynamic_component_loader");
  exports.ComponentRef = dynamic_component_loader_2.ComponentRef;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/resolved_metadata_cache", ["angular2/src/core/di", "angular2/src/facade/lang", "angular2/src/core/linker/element", "angular2/src/core/linker/directive_resolver", "angular2/src/core/pipes/pipe_provider", "angular2/src/core/linker/pipe_resolver"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  var element_1 = require("angular2/src/core/linker/element");
  var directive_resolver_1 = require("angular2/src/core/linker/directive_resolver");
  var pipe_provider_1 = require("angular2/src/core/pipes/pipe_provider");
  var pipe_resolver_1 = require("angular2/src/core/linker/pipe_resolver");
  var ResolvedMetadataCache = (function() {
    function ResolvedMetadataCache(_directiveResolver, _pipeResolver) {
      this._directiveResolver = _directiveResolver;
      this._pipeResolver = _pipeResolver;
      this._directiveCache = new Map();
      this._pipeCache = new Map();
    }
    ResolvedMetadataCache.prototype.getResolvedDirectiveMetadata = function(type) {
      var result = this._directiveCache.get(type);
      if (lang_1.isBlank(result)) {
        result = element_1.DirectiveProvider.createFromType(type, this._directiveResolver.resolve(type));
        this._directiveCache.set(type, result);
      }
      return result;
    };
    ResolvedMetadataCache.prototype.getResolvedPipeMetadata = function(type) {
      var result = this._pipeCache.get(type);
      if (lang_1.isBlank(result)) {
        result = pipe_provider_1.PipeProvider.createFromType(type, this._pipeResolver.resolve(type));
        this._pipeCache.set(type, result);
      }
      return result;
    };
    ResolvedMetadataCache = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [directive_resolver_1.DirectiveResolver, pipe_resolver_1.PipeResolver])], ResolvedMetadataCache);
    return ResolvedMetadataCache;
  })();
  exports.ResolvedMetadataCache = ResolvedMetadataCache;
  exports.CODEGEN_RESOLVED_METADATA_CACHE = new ResolvedMetadataCache(directive_resolver_1.CODEGEN_DIRECTIVE_RESOLVER, pipe_resolver_1.CODEGEN_PIPE_RESOLVER);
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/animate/animation", ["angular2/src/facade/lang", "angular2/src/facade/math", "angular2/src/platform/dom/util", "angular2/src/facade/collection", "angular2/src/platform/dom/dom_adapter"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var math_1 = require("angular2/src/facade/math");
  var util_1 = require("angular2/src/platform/dom/util");
  var collection_1 = require("angular2/src/facade/collection");
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var Animation = (function() {
    function Animation(element, data, browserDetails) {
      var _this = this;
      this.element = element;
      this.data = data;
      this.browserDetails = browserDetails;
      this.callbacks = [];
      this.eventClearFunctions = [];
      this.completed = false;
      this._stringPrefix = '';
      this.startTime = lang_1.DateWrapper.toMillis(lang_1.DateWrapper.now());
      this._stringPrefix = dom_adapter_1.DOM.getAnimationPrefix();
      this.setup();
      this.wait(function(timestamp) {
        return _this.start();
      });
    }
    Object.defineProperty(Animation.prototype, "totalTime", {
      get: function() {
        var delay = this.computedDelay != null ? this.computedDelay : 0;
        var duration = this.computedDuration != null ? this.computedDuration : 0;
        return delay + duration;
      },
      enumerable: true,
      configurable: true
    });
    Animation.prototype.wait = function(callback) {
      this.browserDetails.raf(callback, 2);
    };
    Animation.prototype.setup = function() {
      if (this.data.fromStyles != null)
        this.applyStyles(this.data.fromStyles);
      if (this.data.duration != null)
        this.applyStyles({'transitionDuration': this.data.duration.toString() + 'ms'});
      if (this.data.delay != null)
        this.applyStyles({'transitionDelay': this.data.delay.toString() + 'ms'});
    };
    Animation.prototype.start = function() {
      this.addClasses(this.data.classesToAdd);
      this.addClasses(this.data.animationClasses);
      this.removeClasses(this.data.classesToRemove);
      if (this.data.toStyles != null)
        this.applyStyles(this.data.toStyles);
      var computedStyles = dom_adapter_1.DOM.getComputedStyle(this.element);
      this.computedDelay = math_1.Math.max(this.parseDurationString(computedStyles.getPropertyValue(this._stringPrefix + 'transition-delay')), this.parseDurationString(this.element.style.getPropertyValue(this._stringPrefix + 'transition-delay')));
      this.computedDuration = math_1.Math.max(this.parseDurationString(computedStyles.getPropertyValue(this._stringPrefix + 'transition-duration')), this.parseDurationString(this.element.style.getPropertyValue(this._stringPrefix + 'transition-duration')));
      this.addEvents();
    };
    Animation.prototype.applyStyles = function(styles) {
      var _this = this;
      collection_1.StringMapWrapper.forEach(styles, function(value, key) {
        var dashCaseKey = util_1.camelCaseToDashCase(key);
        if (lang_1.isPresent(dom_adapter_1.DOM.getStyle(_this.element, dashCaseKey))) {
          dom_adapter_1.DOM.setStyle(_this.element, dashCaseKey, value.toString());
        } else {
          dom_adapter_1.DOM.setStyle(_this.element, _this._stringPrefix + dashCaseKey, value.toString());
        }
      });
    };
    Animation.prototype.addClasses = function(classes) {
      for (var i = 0,
          len = classes.length; i < len; i++)
        dom_adapter_1.DOM.addClass(this.element, classes[i]);
    };
    Animation.prototype.removeClasses = function(classes) {
      for (var i = 0,
          len = classes.length; i < len; i++)
        dom_adapter_1.DOM.removeClass(this.element, classes[i]);
    };
    Animation.prototype.addEvents = function() {
      var _this = this;
      if (this.totalTime > 0) {
        this.eventClearFunctions.push(dom_adapter_1.DOM.onAndCancel(this.element, dom_adapter_1.DOM.getTransitionEnd(), function(event) {
          return _this.handleAnimationEvent(event);
        }));
      } else {
        this.handleAnimationCompleted();
      }
    };
    Animation.prototype.handleAnimationEvent = function(event) {
      var elapsedTime = math_1.Math.round(event.elapsedTime * 1000);
      if (!this.browserDetails.elapsedTimeIncludesDelay)
        elapsedTime += this.computedDelay;
      event.stopPropagation();
      if (elapsedTime >= this.totalTime)
        this.handleAnimationCompleted();
    };
    Animation.prototype.handleAnimationCompleted = function() {
      this.removeClasses(this.data.animationClasses);
      this.callbacks.forEach(function(callback) {
        return callback();
      });
      this.callbacks = [];
      this.eventClearFunctions.forEach(function(fn) {
        return fn();
      });
      this.eventClearFunctions = [];
      this.completed = true;
    };
    Animation.prototype.onComplete = function(callback) {
      if (this.completed) {
        callback();
      } else {
        this.callbacks.push(callback);
      }
      return this;
    };
    Animation.prototype.parseDurationString = function(duration) {
      var maxValue = 0;
      if (duration == null || duration.length < 2) {
        return maxValue;
      } else if (duration.substring(duration.length - 2) == 'ms') {
        var value = lang_1.NumberWrapper.parseInt(this.stripLetters(duration), 10);
        if (value > maxValue)
          maxValue = value;
      } else if (duration.substring(duration.length - 1) == 's') {
        var ms = lang_1.NumberWrapper.parseFloat(this.stripLetters(duration)) * 1000;
        var value = math_1.Math.floor(ms);
        if (value > maxValue)
          maxValue = value;
      }
      return maxValue;
    };
    Animation.prototype.stripLetters = function(str) {
      return lang_1.StringWrapper.replaceAll(str, lang_1.RegExpWrapper.create('[^0-9]+$', ''), '');
    };
    return Animation;
  })();
  exports.Animation = Animation;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/shared_styles_host", ["angular2/src/platform/dom/dom_adapter", "angular2/src/core/di", "angular2/src/facade/collection", "angular2/src/platform/dom/dom_tokens"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var di_1 = require("angular2/src/core/di");
  var collection_1 = require("angular2/src/facade/collection");
  var dom_tokens_1 = require("angular2/src/platform/dom/dom_tokens");
  var SharedStylesHost = (function() {
    function SharedStylesHost() {
      this._styles = [];
      this._stylesSet = new Set();
    }
    SharedStylesHost.prototype.addStyles = function(styles) {
      var _this = this;
      var additions = [];
      styles.forEach(function(style) {
        if (!collection_1.SetWrapper.has(_this._stylesSet, style)) {
          _this._stylesSet.add(style);
          _this._styles.push(style);
          additions.push(style);
        }
      });
      this.onStylesAdded(additions);
    };
    SharedStylesHost.prototype.onStylesAdded = function(additions) {};
    SharedStylesHost.prototype.getAllStyles = function() {
      return this._styles;
    };
    SharedStylesHost = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], SharedStylesHost);
    return SharedStylesHost;
  })();
  exports.SharedStylesHost = SharedStylesHost;
  var DomSharedStylesHost = (function(_super) {
    __extends(DomSharedStylesHost, _super);
    function DomSharedStylesHost(doc) {
      _super.call(this);
      this._hostNodes = new Set();
      this._hostNodes.add(doc.head);
    }
    DomSharedStylesHost.prototype._addStylesToHost = function(styles, host) {
      for (var i = 0; i < styles.length; i++) {
        var style = styles[i];
        dom_adapter_1.DOM.appendChild(host, dom_adapter_1.DOM.createStyleElement(style));
      }
    };
    DomSharedStylesHost.prototype.addHost = function(hostNode) {
      this._addStylesToHost(this._styles, hostNode);
      this._hostNodes.add(hostNode);
    };
    DomSharedStylesHost.prototype.removeHost = function(hostNode) {
      collection_1.SetWrapper.delete(this._hostNodes, hostNode);
    };
    DomSharedStylesHost.prototype.onStylesAdded = function(additions) {
      var _this = this;
      this._hostNodes.forEach(function(hostNode) {
        _this._addStylesToHost(additions, hostNode);
      });
    };
    DomSharedStylesHost = __decorate([di_1.Injectable(), __param(0, di_1.Inject(dom_tokens_1.DOCUMENT)), __metadata('design:paramtypes', [Object])], DomSharedStylesHost);
    return DomSharedStylesHost;
  })(SharedStylesHost);
  exports.DomSharedStylesHost = DomSharedStylesHost;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/events/hammer_gestures", ["angular2/src/platform/dom/events/hammer_common", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var hammer_common_1 = require("angular2/src/platform/dom/events/hammer_common");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var di_1 = require("angular2/src/core/di");
  var HammerGesturesPlugin = (function(_super) {
    __extends(HammerGesturesPlugin, _super);
    function HammerGesturesPlugin() {
      _super.apply(this, arguments);
    }
    HammerGesturesPlugin.prototype.supports = function(eventName) {
      if (!_super.prototype.supports.call(this, eventName))
        return false;
      if (!lang_1.isPresent(window['Hammer'])) {
        throw new exceptions_1.BaseException("Hammer.js is not loaded, can not bind " + eventName + " event");
      }
      return true;
    };
    HammerGesturesPlugin.prototype.addEventListener = function(element, eventName, handler) {
      var zone = this.manager.getZone();
      eventName = eventName.toLowerCase();
      zone.runOutsideAngular(function() {
        var mc = new Hammer(element);
        mc.get('pinch').set({enable: true});
        mc.get('rotate').set({enable: true});
        mc.on(eventName, function(eventObj) {
          zone.run(function() {
            handler(eventObj);
          });
        });
      });
    };
    HammerGesturesPlugin = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], HammerGesturesPlugin);
    return HammerGesturesPlugin;
  })(hammer_common_1.HammerGesturesPluginCommon);
  exports.HammerGesturesPlugin = HammerGesturesPlugin;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/directive_metadata", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/change_detection/change_detection", "angular2/src/core/metadata/view", "angular2/src/compiler/selector", "angular2/src/compiler/util", "angular2/src/core/linker/interfaces"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var change_detection_1 = require("angular2/src/core/change_detection/change_detection");
  var view_1 = require("angular2/src/core/metadata/view");
  var selector_1 = require("angular2/src/compiler/selector");
  var util_1 = require("angular2/src/compiler/util");
  var interfaces_1 = require("angular2/src/core/linker/interfaces");
  var HOST_REG_EXP = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))$/g;
  var CompileMetadataWithType = (function() {
    function CompileMetadataWithType() {}
    CompileMetadataWithType.fromJson = function(data) {
      return _COMPILE_METADATA_FROM_JSON[data['class']](data);
    };
    Object.defineProperty(CompileMetadataWithType.prototype, "type", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return CompileMetadataWithType;
  })();
  exports.CompileMetadataWithType = CompileMetadataWithType;
  var CompileTypeMetadata = (function() {
    function CompileTypeMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          runtime = _b.runtime,
          name = _b.name,
          moduleUrl = _b.moduleUrl,
          isHost = _b.isHost;
      this.runtime = runtime;
      this.name = name;
      this.moduleUrl = moduleUrl;
      this.isHost = lang_1.normalizeBool(isHost);
    }
    CompileTypeMetadata.fromJson = function(data) {
      return new CompileTypeMetadata({
        name: data['name'],
        moduleUrl: data['moduleUrl'],
        isHost: data['isHost']
      });
    };
    CompileTypeMetadata.prototype.toJson = function() {
      return {
        'name': this.name,
        'moduleUrl': this.moduleUrl,
        'isHost': this.isHost
      };
    };
    return CompileTypeMetadata;
  })();
  exports.CompileTypeMetadata = CompileTypeMetadata;
  var CompileTemplateMetadata = (function() {
    function CompileTemplateMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          encapsulation = _b.encapsulation,
          template = _b.template,
          templateUrl = _b.templateUrl,
          styles = _b.styles,
          styleUrls = _b.styleUrls,
          ngContentSelectors = _b.ngContentSelectors;
      this.encapsulation = lang_1.isPresent(encapsulation) ? encapsulation : view_1.ViewEncapsulation.Emulated;
      this.template = template;
      this.templateUrl = templateUrl;
      this.styles = lang_1.isPresent(styles) ? styles : [];
      this.styleUrls = lang_1.isPresent(styleUrls) ? styleUrls : [];
      this.ngContentSelectors = lang_1.isPresent(ngContentSelectors) ? ngContentSelectors : [];
    }
    CompileTemplateMetadata.fromJson = function(data) {
      return new CompileTemplateMetadata({
        encapsulation: lang_1.isPresent(data['encapsulation']) ? view_1.VIEW_ENCAPSULATION_VALUES[data['encapsulation']] : data['encapsulation'],
        template: data['template'],
        templateUrl: data['templateUrl'],
        styles: data['styles'],
        styleUrls: data['styleUrls'],
        ngContentSelectors: data['ngContentSelectors']
      });
    };
    CompileTemplateMetadata.prototype.toJson = function() {
      return {
        'encapsulation': lang_1.isPresent(this.encapsulation) ? lang_1.serializeEnum(this.encapsulation) : this.encapsulation,
        'template': this.template,
        'templateUrl': this.templateUrl,
        'styles': this.styles,
        'styleUrls': this.styleUrls,
        'ngContentSelectors': this.ngContentSelectors
      };
    };
    return CompileTemplateMetadata;
  })();
  exports.CompileTemplateMetadata = CompileTemplateMetadata;
  var CompileDirectiveMetadata = (function() {
    function CompileDirectiveMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          type = _b.type,
          isComponent = _b.isComponent,
          dynamicLoadable = _b.dynamicLoadable,
          selector = _b.selector,
          exportAs = _b.exportAs,
          changeDetection = _b.changeDetection,
          inputs = _b.inputs,
          outputs = _b.outputs,
          hostListeners = _b.hostListeners,
          hostProperties = _b.hostProperties,
          hostAttributes = _b.hostAttributes,
          lifecycleHooks = _b.lifecycleHooks,
          template = _b.template;
      this.type = type;
      this.isComponent = isComponent;
      this.dynamicLoadable = dynamicLoadable;
      this.selector = selector;
      this.exportAs = exportAs;
      this.changeDetection = changeDetection;
      this.inputs = inputs;
      this.outputs = outputs;
      this.hostListeners = hostListeners;
      this.hostProperties = hostProperties;
      this.hostAttributes = hostAttributes;
      this.lifecycleHooks = lifecycleHooks;
      this.template = template;
    }
    CompileDirectiveMetadata.create = function(_a) {
      var _b = _a === void 0 ? {} : _a,
          type = _b.type,
          isComponent = _b.isComponent,
          dynamicLoadable = _b.dynamicLoadable,
          selector = _b.selector,
          exportAs = _b.exportAs,
          changeDetection = _b.changeDetection,
          inputs = _b.inputs,
          outputs = _b.outputs,
          host = _b.host,
          lifecycleHooks = _b.lifecycleHooks,
          template = _b.template;
      var hostListeners = {};
      var hostProperties = {};
      var hostAttributes = {};
      if (lang_1.isPresent(host)) {
        collection_1.StringMapWrapper.forEach(host, function(value, key) {
          var matches = lang_1.RegExpWrapper.firstMatch(HOST_REG_EXP, key);
          if (lang_1.isBlank(matches)) {
            hostAttributes[key] = value;
          } else if (lang_1.isPresent(matches[1])) {
            hostProperties[matches[1]] = value;
          } else if (lang_1.isPresent(matches[2])) {
            hostListeners[matches[2]] = value;
          }
        });
      }
      var inputsMap = {};
      if (lang_1.isPresent(inputs)) {
        inputs.forEach(function(bindConfig) {
          var parts = util_1.splitAtColon(bindConfig, [bindConfig, bindConfig]);
          inputsMap[parts[0]] = parts[1];
        });
      }
      var outputsMap = {};
      if (lang_1.isPresent(outputs)) {
        outputs.forEach(function(bindConfig) {
          var parts = util_1.splitAtColon(bindConfig, [bindConfig, bindConfig]);
          outputsMap[parts[0]] = parts[1];
        });
      }
      return new CompileDirectiveMetadata({
        type: type,
        isComponent: lang_1.normalizeBool(isComponent),
        dynamicLoadable: lang_1.normalizeBool(dynamicLoadable),
        selector: selector,
        exportAs: exportAs,
        changeDetection: changeDetection,
        inputs: inputsMap,
        outputs: outputsMap,
        hostListeners: hostListeners,
        hostProperties: hostProperties,
        hostAttributes: hostAttributes,
        lifecycleHooks: lang_1.isPresent(lifecycleHooks) ? lifecycleHooks : [],
        template: template
      });
    };
    CompileDirectiveMetadata.fromJson = function(data) {
      return new CompileDirectiveMetadata({
        isComponent: data['isComponent'],
        dynamicLoadable: data['dynamicLoadable'],
        selector: data['selector'],
        exportAs: data['exportAs'],
        type: lang_1.isPresent(data['type']) ? CompileTypeMetadata.fromJson(data['type']) : data['type'],
        changeDetection: lang_1.isPresent(data['changeDetection']) ? change_detection_1.CHANGE_DETECTION_STRATEGY_VALUES[data['changeDetection']] : data['changeDetection'],
        inputs: data['inputs'],
        outputs: data['outputs'],
        hostListeners: data['hostListeners'],
        hostProperties: data['hostProperties'],
        hostAttributes: data['hostAttributes'],
        lifecycleHooks: data['lifecycleHooks'].map(function(hookValue) {
          return interfaces_1.LIFECYCLE_HOOKS_VALUES[hookValue];
        }),
        template: lang_1.isPresent(data['template']) ? CompileTemplateMetadata.fromJson(data['template']) : data['template']
      });
    };
    CompileDirectiveMetadata.prototype.toJson = function() {
      return {
        'class': 'Directive',
        'isComponent': this.isComponent,
        'dynamicLoadable': this.dynamicLoadable,
        'selector': this.selector,
        'exportAs': this.exportAs,
        'type': lang_1.isPresent(this.type) ? this.type.toJson() : this.type,
        'changeDetection': lang_1.isPresent(this.changeDetection) ? lang_1.serializeEnum(this.changeDetection) : this.changeDetection,
        'inputs': this.inputs,
        'outputs': this.outputs,
        'hostListeners': this.hostListeners,
        'hostProperties': this.hostProperties,
        'hostAttributes': this.hostAttributes,
        'lifecycleHooks': this.lifecycleHooks.map(function(hook) {
          return lang_1.serializeEnum(hook);
        }),
        'template': lang_1.isPresent(this.template) ? this.template.toJson() : this.template
      };
    };
    return CompileDirectiveMetadata;
  })();
  exports.CompileDirectiveMetadata = CompileDirectiveMetadata;
  function createHostComponentMeta(componentType, componentSelector) {
    var template = selector_1.CssSelector.parse(componentSelector)[0].getMatchingElementTemplate();
    return CompileDirectiveMetadata.create({
      type: new CompileTypeMetadata({
        runtime: Object,
        name: "Host" + componentType.name,
        moduleUrl: componentType.moduleUrl,
        isHost: true
      }),
      template: new CompileTemplateMetadata({
        template: template,
        templateUrl: '',
        styles: [],
        styleUrls: [],
        ngContentSelectors: []
      }),
      changeDetection: change_detection_1.ChangeDetectionStrategy.Default,
      inputs: [],
      outputs: [],
      host: {},
      lifecycleHooks: [],
      isComponent: true,
      dynamicLoadable: false,
      selector: '*'
    });
  }
  exports.createHostComponentMeta = createHostComponentMeta;
  var CompilePipeMetadata = (function() {
    function CompilePipeMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          type = _b.type,
          name = _b.name,
          pure = _b.pure;
      this.type = type;
      this.name = name;
      this.pure = lang_1.normalizeBool(pure);
    }
    CompilePipeMetadata.fromJson = function(data) {
      return new CompilePipeMetadata({
        type: lang_1.isPresent(data['type']) ? CompileTypeMetadata.fromJson(data['type']) : data['type'],
        name: data['name'],
        pure: data['pure']
      });
    };
    CompilePipeMetadata.prototype.toJson = function() {
      return {
        'class': 'Pipe',
        'type': lang_1.isPresent(this.type) ? this.type.toJson() : null,
        'name': this.name,
        'pure': this.pure
      };
    };
    return CompilePipeMetadata;
  })();
  exports.CompilePipeMetadata = CompilePipeMetadata;
  var _COMPILE_METADATA_FROM_JSON = {
    'Directive': CompileDirectiveMetadata.fromJson,
    'Pipe': CompilePipeMetadata.fromJson
  };
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/change_detector_compiler", ["angular2/src/compiler/source_module", "angular2/src/core/change_detection/change_detection_jit_generator", "angular2/src/core/change_detection/abstract_change_detector", "angular2/src/core/change_detection/change_detection_util", "angular2/src/core/change_detection/constants", "angular2/src/compiler/change_definition_factory", "angular2/src/facade/lang", "angular2/src/core/change_detection/change_detection", "angular2/src/transform/template_compiler/change_detector_codegen", "angular2/src/compiler/util", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var source_module_1 = require("angular2/src/compiler/source_module");
  var change_detection_jit_generator_1 = require("angular2/src/core/change_detection/change_detection_jit_generator");
  var abstract_change_detector_1 = require("angular2/src/core/change_detection/abstract_change_detector");
  var change_detection_util_1 = require("angular2/src/core/change_detection/change_detection_util");
  var constants_1 = require("angular2/src/core/change_detection/constants");
  var change_definition_factory_1 = require("angular2/src/compiler/change_definition_factory");
  var lang_1 = require("angular2/src/facade/lang");
  var change_detection_1 = require("angular2/src/core/change_detection/change_detection");
  var change_detector_codegen_1 = require("angular2/src/transform/template_compiler/change_detector_codegen");
  var util_1 = require("angular2/src/compiler/util");
  var di_1 = require("angular2/src/core/di");
  var ABSTRACT_CHANGE_DETECTOR = "AbstractChangeDetector";
  var UTIL = "ChangeDetectionUtil";
  var CHANGE_DETECTOR_STATE = "ChangeDetectorState";
  exports.CHANGE_DETECTION_JIT_IMPORTS = lang_1.CONST_EXPR({
    'AbstractChangeDetector': abstract_change_detector_1.AbstractChangeDetector,
    'ChangeDetectionUtil': change_detection_util_1.ChangeDetectionUtil,
    'ChangeDetectorState': constants_1.ChangeDetectorState
  });
  var ABSTRACT_CHANGE_DETECTOR_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/abstract_change_detector" + util_1.MODULE_SUFFIX);
  var UTIL_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/change_detection_util" + util_1.MODULE_SUFFIX);
  var PREGEN_PROTO_CHANGE_DETECTOR_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/pregen_proto_change_detector" + util_1.MODULE_SUFFIX);
  var CONSTANTS_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/constants" + util_1.MODULE_SUFFIX);
  var ChangeDetectionCompiler = (function() {
    function ChangeDetectionCompiler(_genConfig) {
      this._genConfig = _genConfig;
    }
    ChangeDetectionCompiler.prototype.compileComponentRuntime = function(componentType, strategy, parsedTemplate) {
      var _this = this;
      var changeDetectorDefinitions = change_definition_factory_1.createChangeDetectorDefinitions(componentType, strategy, this._genConfig, parsedTemplate);
      return changeDetectorDefinitions.map(function(definition) {
        return _this._createChangeDetectorFactory(definition);
      });
    };
    ChangeDetectionCompiler.prototype._createChangeDetectorFactory = function(definition) {
      var proto = new change_detection_1.DynamicProtoChangeDetector(definition);
      return function() {
        return proto.instantiate();
      };
    };
    ChangeDetectionCompiler.prototype.compileComponentCodeGen = function(componentType, strategy, parsedTemplate) {
      var changeDetectorDefinitions = change_definition_factory_1.createChangeDetectorDefinitions(componentType, strategy, this._genConfig, parsedTemplate);
      var factories = [];
      var index = 0;
      var sourceParts = changeDetectorDefinitions.map(function(definition) {
        var codegen;
        var sourcePart;
        if (lang_1.IS_DART) {
          codegen = new change_detector_codegen_1.Codegen(PREGEN_PROTO_CHANGE_DETECTOR_MODULE);
          var className = "_" + definition.id;
          var typeRef = (index === 0 && componentType.isHost) ? 'dynamic' : "" + source_module_1.moduleRef(componentType.moduleUrl) + componentType.name;
          codegen.generate(typeRef, className, definition);
          factories.push(className + ".newChangeDetector");
          sourcePart = codegen.toString();
        } else {
          codegen = new change_detection_jit_generator_1.ChangeDetectorJITGenerator(definition, "" + UTIL_MODULE + UTIL, "" + ABSTRACT_CHANGE_DETECTOR_MODULE + ABSTRACT_CHANGE_DETECTOR, "" + CONSTANTS_MODULE + CHANGE_DETECTOR_STATE);
          factories.push("function() { return new " + codegen.typeName + "(); }");
          sourcePart = codegen.generateSource();
        }
        index++;
        return sourcePart;
      });
      return new source_module_1.SourceExpressions(sourceParts, factories);
    };
    ChangeDetectionCompiler = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [change_detection_1.ChangeDetectorGenConfig])], ChangeDetectionCompiler);
    return ChangeDetectionCompiler;
  })();
  exports.ChangeDetectionCompiler = ChangeDetectionCompiler;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/style_compiler", ["angular2/src/compiler/source_module", "angular2/src/core/metadata/view", "angular2/src/compiler/xhr", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/compiler/shadow_css", "angular2/src/compiler/url_resolver", "angular2/src/compiler/style_url_resolver", "angular2/src/compiler/util", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var source_module_1 = require("angular2/src/compiler/source_module");
  var view_1 = require("angular2/src/core/metadata/view");
  var xhr_1 = require("angular2/src/compiler/xhr");
  var lang_1 = require("angular2/src/facade/lang");
  var async_1 = require("angular2/src/facade/async");
  var shadow_css_1 = require("angular2/src/compiler/shadow_css");
  var url_resolver_1 = require("angular2/src/compiler/url_resolver");
  var style_url_resolver_1 = require("angular2/src/compiler/style_url_resolver");
  var util_1 = require("angular2/src/compiler/util");
  var di_1 = require("angular2/src/core/di");
  var COMPONENT_VARIABLE = '%COMP%';
  var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
  var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
  var StyleCompiler = (function() {
    function StyleCompiler(_xhr, _urlResolver) {
      this._xhr = _xhr;
      this._urlResolver = _urlResolver;
      this._styleCache = new Map();
      this._shadowCss = new shadow_css_1.ShadowCss();
    }
    StyleCompiler.prototype.compileComponentRuntime = function(template) {
      var styles = template.styles;
      var styleAbsUrls = template.styleUrls;
      return this._loadStyles(styles, styleAbsUrls, template.encapsulation === view_1.ViewEncapsulation.Emulated);
    };
    StyleCompiler.prototype.compileComponentCodeGen = function(template) {
      var shim = template.encapsulation === view_1.ViewEncapsulation.Emulated;
      return this._styleCodeGen(template.styles, template.styleUrls, shim);
    };
    StyleCompiler.prototype.compileStylesheetCodeGen = function(stylesheetUrl, cssText) {
      var styleWithImports = style_url_resolver_1.extractStyleUrls(this._urlResolver, stylesheetUrl, cssText);
      return [this._styleModule(stylesheetUrl, false, this._styleCodeGen([styleWithImports.style], styleWithImports.styleUrls, false)), this._styleModule(stylesheetUrl, true, this._styleCodeGen([styleWithImports.style], styleWithImports.styleUrls, true))];
    };
    StyleCompiler.prototype.clearCache = function() {
      this._styleCache.clear();
    };
    StyleCompiler.prototype._loadStyles = function(plainStyles, absUrls, encapsulate) {
      var _this = this;
      var promises = absUrls.map(function(absUrl) {
        var cacheKey = "" + absUrl + (encapsulate ? '.shim' : '');
        var result = _this._styleCache.get(cacheKey);
        if (lang_1.isBlank(result)) {
          result = _this._xhr.get(absUrl).then(function(style) {
            var styleWithImports = style_url_resolver_1.extractStyleUrls(_this._urlResolver, absUrl, style);
            return _this._loadStyles([styleWithImports.style], styleWithImports.styleUrls, encapsulate);
          });
          _this._styleCache.set(cacheKey, result);
        }
        return result;
      });
      return async_1.PromiseWrapper.all(promises).then(function(nestedStyles) {
        var result = plainStyles.map(function(plainStyle) {
          return _this._shimIfNeeded(plainStyle, encapsulate);
        });
        nestedStyles.forEach(function(styles) {
          return result.push(styles);
        });
        return result;
      });
    };
    StyleCompiler.prototype._styleCodeGen = function(plainStyles, absUrls, shim) {
      var _this = this;
      var arrayPrefix = lang_1.IS_DART ? "const" : '';
      var styleExpressions = plainStyles.map(function(plainStyle) {
        return util_1.escapeSingleQuoteString(_this._shimIfNeeded(plainStyle, shim));
      });
      for (var i = 0; i < absUrls.length; i++) {
        var moduleUrl = this._createModuleUrl(absUrls[i], shim);
        styleExpressions.push(source_module_1.moduleRef(moduleUrl) + "STYLES");
      }
      var expressionSource = arrayPrefix + " [" + styleExpressions.join(',') + "]";
      return new source_module_1.SourceExpression([], expressionSource);
    };
    StyleCompiler.prototype._styleModule = function(stylesheetUrl, shim, expression) {
      var moduleSource = "\n      " + expression.declarations.join('\n') + "\n      " + util_1.codeGenExportVariable('STYLES') + expression.expression + ";\n    ";
      return new source_module_1.SourceModule(this._createModuleUrl(stylesheetUrl, shim), moduleSource);
    };
    StyleCompiler.prototype._shimIfNeeded = function(style, shim) {
      return shim ? this._shadowCss.shimCssText(style, CONTENT_ATTR, HOST_ATTR) : style;
    };
    StyleCompiler.prototype._createModuleUrl = function(stylesheetUrl, shim) {
      return shim ? stylesheetUrl + ".shim" + util_1.MODULE_SUFFIX : "" + stylesheetUrl + util_1.MODULE_SUFFIX;
    };
    StyleCompiler = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [xhr_1.XHR, url_resolver_1.UrlResolver])], StyleCompiler);
    return StyleCompiler;
  })();
  exports.StyleCompiler = StyleCompiler;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/view_compiler", ["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/compiler/template_ast", "angular2/src/compiler/source_module", "angular2/src/core/linker/view", "angular2/src/core/linker/view_type", "angular2/src/core/linker/element", "angular2/src/core/metadata/view", "angular2/src/compiler/util", "angular2/src/core/di", "angular2/src/compiler/proto_view_compiler"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var collection_1 = require("angular2/src/facade/collection");
  var template_ast_1 = require("angular2/src/compiler/template_ast");
  var source_module_1 = require("angular2/src/compiler/source_module");
  var view_1 = require("angular2/src/core/linker/view");
  var view_type_1 = require("angular2/src/core/linker/view_type");
  var element_1 = require("angular2/src/core/linker/element");
  var view_2 = require("angular2/src/core/metadata/view");
  var util_1 = require("angular2/src/compiler/util");
  var di_1 = require("angular2/src/core/di");
  var proto_view_compiler_1 = require("angular2/src/compiler/proto_view_compiler");
  exports.VIEW_JIT_IMPORTS = lang_1.CONST_EXPR({
    'AppView': view_1.AppView,
    'AppElement': element_1.AppElement,
    'flattenNestedViewRenderNodes': view_1.flattenNestedViewRenderNodes,
    'checkSlotCount': view_1.checkSlotCount
  });
  var ViewCompiler = (function() {
    function ViewCompiler() {}
    ViewCompiler.prototype.compileComponentRuntime = function(component, template, styles, protoViews, changeDetectorFactories, componentViewFactory) {
      var viewFactory = new RuntimeViewFactory(component, styles, protoViews, changeDetectorFactories, componentViewFactory);
      return viewFactory.createViewFactory(template, 0, []);
    };
    ViewCompiler.prototype.compileComponentCodeGen = function(component, template, styles, protoViews, changeDetectorFactoryExpressions, componentViewFactory) {
      var viewFactory = new CodeGenViewFactory(component, styles, protoViews, changeDetectorFactoryExpressions, componentViewFactory);
      var targetStatements = [];
      var viewFactoryExpression = viewFactory.createViewFactory(template, 0, targetStatements);
      return new source_module_1.SourceExpression(targetStatements.map(function(stmt) {
        return stmt.statement;
      }), viewFactoryExpression.expression);
    };
    ViewCompiler = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], ViewCompiler);
    return ViewCompiler;
  })();
  exports.ViewCompiler = ViewCompiler;
  var CodeGenViewFactory = (function() {
    function CodeGenViewFactory(component, styles, protoViews, changeDetectorExpressions, componentViewFactory) {
      this.component = component;
      this.styles = styles;
      this.protoViews = protoViews;
      this.changeDetectorExpressions = changeDetectorExpressions;
      this.componentViewFactory = componentViewFactory;
      this._nextVarId = 0;
    }
    CodeGenViewFactory.prototype._nextVar = function(prefix) {
      return "" + prefix + this._nextVarId++ + "_" + this.component.type.name;
    };
    CodeGenViewFactory.prototype._nextRenderVar = function() {
      return this._nextVar('render');
    };
    CodeGenViewFactory.prototype._nextAppVar = function() {
      return this._nextVar('app');
    };
    CodeGenViewFactory.prototype._nextDisposableVar = function() {
      return "disposable" + this._nextVarId++ + "_" + this.component.type.name;
    };
    CodeGenViewFactory.prototype.createText = function(renderer, parent, text, targetStatements) {
      var varName = this._nextRenderVar();
      var statement = "var " + varName + " = " + renderer.expression + ".createText(" + (lang_1.isPresent(parent) ? parent.expression : null) + ", " + util_1.escapeSingleQuoteString(text) + ");";
      targetStatements.push(new util_1.Statement(statement));
      return new util_1.Expression(varName);
    };
    CodeGenViewFactory.prototype.createElement = function(renderer, parentRenderNode, name, rootSelector, targetStatements) {
      var varName = this._nextRenderVar();
      var valueExpr;
      if (lang_1.isPresent(rootSelector)) {
        valueExpr = rootSelector.expression + " == null ?\n        " + renderer.expression + ".createElement(" + (lang_1.isPresent(parentRenderNode) ? parentRenderNode.expression : null) + ", " + util_1.escapeSingleQuoteString(name) + ") :\n        " + renderer.expression + ".selectRootElement(" + rootSelector.expression + ");";
      } else {
        valueExpr = renderer.expression + ".createElement(" + (lang_1.isPresent(parentRenderNode) ? parentRenderNode.expression : null) + ", " + util_1.escapeSingleQuoteString(name) + ")";
      }
      var statement = "var " + varName + " = " + valueExpr + ";";
      targetStatements.push(new util_1.Statement(statement));
      return new util_1.Expression(varName);
    };
    CodeGenViewFactory.prototype.createTemplateAnchor = function(renderer, parentRenderNode, targetStatements) {
      var varName = this._nextRenderVar();
      var valueExpr = renderer.expression + ".createTemplateAnchor(" + (lang_1.isPresent(parentRenderNode) ? parentRenderNode.expression : null) + ");";
      targetStatements.push(new util_1.Statement("var " + varName + " = " + valueExpr));
      return new util_1.Expression(varName);
    };
    CodeGenViewFactory.prototype.createGlobalEventListener = function(renderer, appView, boundElementIndex, eventAst, targetStatements) {
      var disposableVar = this._nextDisposableVar();
      var eventHandlerExpr = codeGenEventHandler(appView, boundElementIndex, eventAst.fullName);
      targetStatements.push(new util_1.Statement("var " + disposableVar + " = " + renderer.expression + ".listenGlobal(" + util_1.escapeValue(eventAst.target) + ", " + util_1.escapeValue(eventAst.name) + ", " + eventHandlerExpr + ");"));
      return new util_1.Expression(disposableVar);
    };
    CodeGenViewFactory.prototype.createElementEventListener = function(renderer, appView, boundElementIndex, renderNode, eventAst, targetStatements) {
      var eventHandlerExpr = codeGenEventHandler(appView, boundElementIndex, eventAst.fullName);
      targetStatements.push(new util_1.Statement(renderer.expression + ".listen(" + renderNode.expression + ", " + util_1.escapeValue(eventAst.name) + ", " + eventHandlerExpr + ");"));
    };
    CodeGenViewFactory.prototype.setElementAttribute = function(renderer, renderNode, attrName, attrValue, targetStatements) {
      targetStatements.push(new util_1.Statement(renderer.expression + ".setElementAttribute(" + renderNode.expression + ", " + util_1.escapeSingleQuoteString(attrName) + ", " + util_1.escapeSingleQuoteString(attrValue) + ");"));
    };
    CodeGenViewFactory.prototype.createAppElement = function(appProtoEl, appView, renderNode, parentAppEl, embeddedViewFactory, targetStatements) {
      var appVar = this._nextAppVar();
      var varValue = "new " + proto_view_compiler_1.APP_EL_MODULE_REF + "AppElement(" + appProtoEl.expression + ", " + appView.expression + ",\n      " + (lang_1.isPresent(parentAppEl) ? parentAppEl.expression : null) + ", " + renderNode.expression + ", " + (lang_1.isPresent(embeddedViewFactory) ? embeddedViewFactory.expression : null) + ")";
      targetStatements.push(new util_1.Statement("var " + appVar + " = " + varValue + ";"));
      return new util_1.Expression(appVar);
    };
    CodeGenViewFactory.prototype.createAndSetComponentView = function(renderer, viewManager, view, appEl, component, contentNodesByNgContentIndex, targetStatements) {
      var codeGenContentNodes;
      if (this.component.type.isHost) {
        codeGenContentNodes = view.expression + ".projectableNodes";
      } else {
        codeGenContentNodes = "[" + contentNodesByNgContentIndex.map(function(nodes) {
          return util_1.codeGenFlatArray(nodes);
        }).join(',') + "]";
      }
      targetStatements.push(new util_1.Statement(this.componentViewFactory(component) + "(" + renderer.expression + ", " + viewManager.expression + ", " + appEl.expression + ", " + codeGenContentNodes + ", null, null, null);"));
    };
    CodeGenViewFactory.prototype.getProjectedNodes = function(projectableNodes, ngContentIndex) {
      return new util_1.Expression(projectableNodes.expression + "[" + ngContentIndex + "]", true);
    };
    CodeGenViewFactory.prototype.appendProjectedNodes = function(renderer, parent, nodes, targetStatements) {
      targetStatements.push(new util_1.Statement(renderer.expression + ".projectNodes(" + parent.expression + ", " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "flattenNestedViewRenderNodes(" + nodes.expression + "));"));
    };
    CodeGenViewFactory.prototype.createViewFactory = function(asts, embeddedTemplateIndex, targetStatements) {
      var compileProtoView = this.protoViews[embeddedTemplateIndex];
      var isHostView = this.component.type.isHost;
      var isComponentView = embeddedTemplateIndex === 0 && !isHostView;
      var visitor = new ViewBuilderVisitor(new util_1.Expression('renderer'), new util_1.Expression('viewManager'), new util_1.Expression('projectableNodes'), isHostView ? new util_1.Expression('rootSelector') : null, new util_1.Expression('view'), compileProtoView, targetStatements, this);
      template_ast_1.templateVisitAll(visitor, asts, new ParentElement(isComponentView ? new util_1.Expression('parentRenderNode') : null, null, null));
      var appProtoView = compileProtoView.protoView.expression;
      var viewFactoryName = codeGenViewFactoryName(this.component, embeddedTemplateIndex);
      var changeDetectorFactory = this.changeDetectorExpressions.expressions[embeddedTemplateIndex];
      var factoryArgs = ['parentRenderer', 'viewManager', 'containerEl', 'projectableNodes', 'rootSelector', 'dynamicallyCreatedProviders', 'rootInjector'];
      var initRendererStmts = [];
      var rendererExpr = "parentRenderer";
      if (embeddedTemplateIndex === 0) {
        var renderCompTypeVar = this._nextVar('renderType');
        targetStatements.push(new util_1.Statement("var " + renderCompTypeVar + " = null;"));
        var stylesVar = this._nextVar('styles');
        targetStatements.push(new util_1.Statement(util_1.CONST_VAR + " " + stylesVar + " = " + this.styles.expression + ";"));
        var encapsulation = this.component.template.encapsulation;
        initRendererStmts.push("if (" + renderCompTypeVar + " == null) {\n        " + renderCompTypeVar + " = viewManager.createRenderComponentType(" + codeGenViewEncapsulation(encapsulation) + ", " + stylesVar + ");\n      }");
        rendererExpr = "parentRenderer.renderComponent(" + renderCompTypeVar + ")";
      }
      var statement = "\n" + util_1.codeGenFnHeader(factoryArgs, viewFactoryName) + "{\n  " + initRendererStmts.join('\n') + "\n  var renderer = " + rendererExpr + ";\n  var view = new " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "AppView(\n    " + appProtoView + ", renderer, viewManager,\n    projectableNodes,\n    containerEl,\n    dynamicallyCreatedProviders, rootInjector,\n    " + changeDetectorFactory + "()\n  );\n  " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "checkSlotCount(" + util_1.escapeValue(this.component.type.name) + ", " + this.component.template.ngContentSelectors.length + ", projectableNodes);\n  " + (isComponentView ? 'var parentRenderNode = renderer.createViewRoot(view.containerAppElement.nativeElement);' : '') + "\n  " + visitor.renderStmts.map(function(stmt) {
        return stmt.statement;
      }).join('\n') + "\n  " + visitor.appStmts.map(function(stmt) {
        return stmt.statement;
      }).join('\n') + "\n\n  view.init(" + util_1.codeGenFlatArray(visitor.rootNodesOrAppElements) + ", " + util_1.codeGenArray(visitor.renderNodes) + ", " + util_1.codeGenArray(visitor.appDisposables) + ",\n            " + util_1.codeGenArray(visitor.appElements) + ");\n  return view;\n}";
      targetStatements.push(new util_1.Statement(statement));
      return new util_1.Expression(viewFactoryName);
    };
    return CodeGenViewFactory;
  })();
  var RuntimeViewFactory = (function() {
    function RuntimeViewFactory(component, styles, protoViews, changeDetectorFactories, componentViewFactory) {
      this.component = component;
      this.styles = styles;
      this.protoViews = protoViews;
      this.changeDetectorFactories = changeDetectorFactories;
      this.componentViewFactory = componentViewFactory;
    }
    RuntimeViewFactory.prototype.createText = function(renderer, parent, text, targetStatements) {
      return renderer.createText(parent, text);
    };
    RuntimeViewFactory.prototype.createElement = function(renderer, parent, name, rootSelector, targetStatements) {
      var el;
      if (lang_1.isPresent(rootSelector)) {
        el = renderer.selectRootElement(rootSelector);
      } else {
        el = renderer.createElement(parent, name);
      }
      return el;
    };
    RuntimeViewFactory.prototype.createTemplateAnchor = function(renderer, parent, targetStatements) {
      return renderer.createTemplateAnchor(parent);
    };
    RuntimeViewFactory.prototype.createGlobalEventListener = function(renderer, appView, boundElementIndex, eventAst, targetStatements) {
      return renderer.listenGlobal(eventAst.target, eventAst.name, function(event) {
        return appView.triggerEventHandlers(eventAst.fullName, event, boundElementIndex);
      });
    };
    RuntimeViewFactory.prototype.createElementEventListener = function(renderer, appView, boundElementIndex, renderNode, eventAst, targetStatements) {
      renderer.listen(renderNode, eventAst.name, function(event) {
        return appView.triggerEventHandlers(eventAst.fullName, event, boundElementIndex);
      });
    };
    RuntimeViewFactory.prototype.setElementAttribute = function(renderer, renderNode, attrName, attrValue, targetStatements) {
      renderer.setElementAttribute(renderNode, attrName, attrValue);
    };
    RuntimeViewFactory.prototype.createAppElement = function(appProtoEl, appView, renderNode, parentAppEl, embeddedViewFactory, targetStatements) {
      return new element_1.AppElement(appProtoEl, appView, parentAppEl, renderNode, embeddedViewFactory);
    };
    RuntimeViewFactory.prototype.createAndSetComponentView = function(renderer, viewManager, appView, appEl, component, contentNodesByNgContentIndex, targetStatements) {
      var flattenedContentNodes;
      if (this.component.type.isHost) {
        flattenedContentNodes = appView.projectableNodes;
      } else {
        flattenedContentNodes = collection_1.ListWrapper.createFixedSize(contentNodesByNgContentIndex.length);
        for (var i = 0; i < contentNodesByNgContentIndex.length; i++) {
          flattenedContentNodes[i] = util_1.flattenArray(contentNodesByNgContentIndex[i], []);
        }
      }
      this.componentViewFactory(component)(renderer, viewManager, appEl, flattenedContentNodes);
    };
    RuntimeViewFactory.prototype.getProjectedNodes = function(projectableNodes, ngContentIndex) {
      return projectableNodes[ngContentIndex];
    };
    RuntimeViewFactory.prototype.appendProjectedNodes = function(renderer, parent, nodes, targetStatements) {
      renderer.projectNodes(parent, view_1.flattenNestedViewRenderNodes(nodes));
    };
    RuntimeViewFactory.prototype.createViewFactory = function(asts, embeddedTemplateIndex, targetStatements) {
      var _this = this;
      var compileProtoView = this.protoViews[embeddedTemplateIndex];
      var isComponentView = compileProtoView.protoView.type === view_type_1.ViewType.COMPONENT;
      var renderComponentType = null;
      return function(parentRenderer, viewManager, containerEl, projectableNodes, rootSelector, dynamicallyCreatedProviders, rootInjector) {
        if (rootSelector === void 0) {
          rootSelector = null;
        }
        if (dynamicallyCreatedProviders === void 0) {
          dynamicallyCreatedProviders = null;
        }
        if (rootInjector === void 0) {
          rootInjector = null;
        }
        view_1.checkSlotCount(_this.component.type.name, _this.component.template.ngContentSelectors.length, projectableNodes);
        var renderer;
        if (embeddedTemplateIndex === 0) {
          if (lang_1.isBlank(renderComponentType)) {
            renderComponentType = viewManager.createRenderComponentType(_this.component.template.encapsulation, _this.styles);
          }
          renderer = parentRenderer.renderComponent(renderComponentType);
        } else {
          renderer = parentRenderer;
        }
        var changeDetector = _this.changeDetectorFactories[embeddedTemplateIndex]();
        var view = new view_1.AppView(compileProtoView.protoView, renderer, viewManager, projectableNodes, containerEl, dynamicallyCreatedProviders, rootInjector, changeDetector);
        var visitor = new ViewBuilderVisitor(renderer, viewManager, projectableNodes, rootSelector, view, compileProtoView, [], _this);
        var parentRenderNode = isComponentView ? renderer.createViewRoot(containerEl.nativeElement) : null;
        template_ast_1.templateVisitAll(visitor, asts, new ParentElement(parentRenderNode, null, null));
        view.init(util_1.flattenArray(visitor.rootNodesOrAppElements, []), visitor.renderNodes, visitor.appDisposables, visitor.appElements);
        return view;
      };
    };
    return RuntimeViewFactory;
  })();
  var ParentElement = (function() {
    function ParentElement(renderNode, appEl, component) {
      this.renderNode = renderNode;
      this.appEl = appEl;
      this.component = component;
      if (lang_1.isPresent(component)) {
        this.contentNodesByNgContentIndex = collection_1.ListWrapper.createFixedSize(component.template.ngContentSelectors.length);
        for (var i = 0; i < this.contentNodesByNgContentIndex.length; i++) {
          this.contentNodesByNgContentIndex[i] = [];
        }
      } else {
        this.contentNodesByNgContentIndex = null;
      }
    }
    ParentElement.prototype.addContentNode = function(ngContentIndex, nodeExpr) {
      this.contentNodesByNgContentIndex[ngContentIndex].push(nodeExpr);
    };
    return ParentElement;
  })();
  var ViewBuilderVisitor = (function() {
    function ViewBuilderVisitor(renderer, viewManager, projectableNodes, rootSelector, view, protoView, targetStatements, factory) {
      this.renderer = renderer;
      this.viewManager = viewManager;
      this.projectableNodes = projectableNodes;
      this.rootSelector = rootSelector;
      this.view = view;
      this.protoView = protoView;
      this.targetStatements = targetStatements;
      this.factory = factory;
      this.renderStmts = [];
      this.renderNodes = [];
      this.appStmts = [];
      this.appElements = [];
      this.appDisposables = [];
      this.rootNodesOrAppElements = [];
      this.elementCount = 0;
    }
    ViewBuilderVisitor.prototype._addRenderNode = function(renderNode, appEl, ngContentIndex, parent) {
      this.renderNodes.push(renderNode);
      if (lang_1.isPresent(parent.component)) {
        if (lang_1.isPresent(ngContentIndex)) {
          parent.addContentNode(ngContentIndex, lang_1.isPresent(appEl) ? appEl : renderNode);
        }
      } else if (lang_1.isBlank(parent.renderNode)) {
        this.rootNodesOrAppElements.push(lang_1.isPresent(appEl) ? appEl : renderNode);
      }
    };
    ViewBuilderVisitor.prototype._getParentRenderNode = function(ngContentIndex, parent) {
      return lang_1.isPresent(parent.component) && parent.component.template.encapsulation !== view_2.ViewEncapsulation.Native ? null : parent.renderNode;
    };
    ViewBuilderVisitor.prototype.visitBoundText = function(ast, parent) {
      return this._visitText('', ast.ngContentIndex, parent);
    };
    ViewBuilderVisitor.prototype.visitText = function(ast, parent) {
      return this._visitText(ast.value, ast.ngContentIndex, parent);
    };
    ViewBuilderVisitor.prototype._visitText = function(value, ngContentIndex, parent) {
      var renderNode = this.factory.createText(this.renderer, this._getParentRenderNode(ngContentIndex, parent), value, this.renderStmts);
      this._addRenderNode(renderNode, null, ngContentIndex, parent);
      return null;
    };
    ViewBuilderVisitor.prototype.visitNgContent = function(ast, parent) {
      var nodesExpression = this.factory.getProjectedNodes(this.projectableNodes, ast.index);
      if (lang_1.isPresent(parent.component)) {
        if (lang_1.isPresent(ast.ngContentIndex)) {
          parent.addContentNode(ast.ngContentIndex, nodesExpression);
        }
      } else {
        if (lang_1.isPresent(parent.renderNode)) {
          this.factory.appendProjectedNodes(this.renderer, parent.renderNode, nodesExpression, this.renderStmts);
        } else {
          this.rootNodesOrAppElements.push(nodesExpression);
        }
      }
      return null;
    };
    ViewBuilderVisitor.prototype.visitElement = function(ast, parent) {
      var _this = this;
      var renderNode = this.factory.createElement(this.renderer, this._getParentRenderNode(ast.ngContentIndex, parent), ast.name, this.rootSelector, this.renderStmts);
      var component = ast.getComponent();
      var elementIndex = this.elementCount++;
      var protoEl = this.protoView.protoElements[elementIndex];
      protoEl.renderEvents.forEach(function(eventAst) {
        if (lang_1.isPresent(eventAst.target)) {
          var disposable = _this.factory.createGlobalEventListener(_this.renderer, _this.view, protoEl.boundElementIndex, eventAst, _this.renderStmts);
          _this.appDisposables.push(disposable);
        } else {
          _this.factory.createElementEventListener(_this.renderer, _this.view, protoEl.boundElementIndex, renderNode, eventAst, _this.renderStmts);
        }
      });
      for (var i = 0; i < protoEl.attrNameAndValues.length; i++) {
        var attrName = protoEl.attrNameAndValues[i][0];
        var attrValue = protoEl.attrNameAndValues[i][1];
        this.factory.setElementAttribute(this.renderer, renderNode, attrName, attrValue, this.renderStmts);
      }
      var appEl = null;
      if (lang_1.isPresent(protoEl.appProtoEl)) {
        appEl = this.factory.createAppElement(protoEl.appProtoEl, this.view, renderNode, parent.appEl, null, this.appStmts);
        this.appElements.push(appEl);
      }
      this._addRenderNode(renderNode, appEl, ast.ngContentIndex, parent);
      var newParent = new ParentElement(renderNode, lang_1.isPresent(appEl) ? appEl : parent.appEl, component);
      template_ast_1.templateVisitAll(this, ast.children, newParent);
      if (lang_1.isPresent(appEl) && lang_1.isPresent(component)) {
        this.factory.createAndSetComponentView(this.renderer, this.viewManager, this.view, appEl, component, newParent.contentNodesByNgContentIndex, this.appStmts);
      }
      return null;
    };
    ViewBuilderVisitor.prototype.visitEmbeddedTemplate = function(ast, parent) {
      var renderNode = this.factory.createTemplateAnchor(this.renderer, this._getParentRenderNode(ast.ngContentIndex, parent), this.renderStmts);
      var elementIndex = this.elementCount++;
      var protoEl = this.protoView.protoElements[elementIndex];
      var embeddedViewFactory = this.factory.createViewFactory(ast.children, protoEl.embeddedTemplateIndex, this.targetStatements);
      var appEl = this.factory.createAppElement(protoEl.appProtoEl, this.view, renderNode, parent.appEl, embeddedViewFactory, this.appStmts);
      this._addRenderNode(renderNode, appEl, ast.ngContentIndex, parent);
      this.appElements.push(appEl);
      return null;
    };
    ViewBuilderVisitor.prototype.visitVariable = function(ast, ctx) {
      return null;
    };
    ViewBuilderVisitor.prototype.visitAttr = function(ast, ctx) {
      return null;
    };
    ViewBuilderVisitor.prototype.visitDirective = function(ast, ctx) {
      return null;
    };
    ViewBuilderVisitor.prototype.visitEvent = function(ast, ctx) {
      return null;
    };
    ViewBuilderVisitor.prototype.visitDirectiveProperty = function(ast, context) {
      return null;
    };
    ViewBuilderVisitor.prototype.visitElementProperty = function(ast, context) {
      return null;
    };
    return ViewBuilderVisitor;
  })();
  function codeGenEventHandler(view, boundElementIndex, eventName) {
    return util_1.codeGenValueFn(['event'], view.expression + ".triggerEventHandlers(" + util_1.escapeValue(eventName) + ", event, " + boundElementIndex + ")");
  }
  function codeGenViewFactoryName(component, embeddedTemplateIndex) {
    return "viewFactory_" + component.type.name + embeddedTemplateIndex;
  }
  function codeGenViewEncapsulation(value) {
    if (lang_1.IS_DART) {
      return "" + proto_view_compiler_1.METADATA_MODULE_REF + value;
    } else {
      return "" + value;
    }
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/html_lexer", ["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/compiler/parse_util", "angular2/src/compiler/html_tags"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var lang_1 = require("angular2/src/facade/lang");
  var collection_1 = require("angular2/src/facade/collection");
  var parse_util_1 = require("angular2/src/compiler/parse_util");
  var html_tags_1 = require("angular2/src/compiler/html_tags");
  (function(HtmlTokenType) {
    HtmlTokenType[HtmlTokenType["TAG_OPEN_START"] = 0] = "TAG_OPEN_START";
    HtmlTokenType[HtmlTokenType["TAG_OPEN_END"] = 1] = "TAG_OPEN_END";
    HtmlTokenType[HtmlTokenType["TAG_OPEN_END_VOID"] = 2] = "TAG_OPEN_END_VOID";
    HtmlTokenType[HtmlTokenType["TAG_CLOSE"] = 3] = "TAG_CLOSE";
    HtmlTokenType[HtmlTokenType["TEXT"] = 4] = "TEXT";
    HtmlTokenType[HtmlTokenType["ESCAPABLE_RAW_TEXT"] = 5] = "ESCAPABLE_RAW_TEXT";
    HtmlTokenType[HtmlTokenType["RAW_TEXT"] = 6] = "RAW_TEXT";
    HtmlTokenType[HtmlTokenType["COMMENT_START"] = 7] = "COMMENT_START";
    HtmlTokenType[HtmlTokenType["COMMENT_END"] = 8] = "COMMENT_END";
    HtmlTokenType[HtmlTokenType["CDATA_START"] = 9] = "CDATA_START";
    HtmlTokenType[HtmlTokenType["CDATA_END"] = 10] = "CDATA_END";
    HtmlTokenType[HtmlTokenType["ATTR_NAME"] = 11] = "ATTR_NAME";
    HtmlTokenType[HtmlTokenType["ATTR_VALUE"] = 12] = "ATTR_VALUE";
    HtmlTokenType[HtmlTokenType["DOC_TYPE"] = 13] = "DOC_TYPE";
    HtmlTokenType[HtmlTokenType["EOF"] = 14] = "EOF";
  })(exports.HtmlTokenType || (exports.HtmlTokenType = {}));
  var HtmlTokenType = exports.HtmlTokenType;
  var HtmlToken = (function() {
    function HtmlToken(type, parts, sourceSpan) {
      this.type = type;
      this.parts = parts;
      this.sourceSpan = sourceSpan;
    }
    return HtmlToken;
  })();
  exports.HtmlToken = HtmlToken;
  var HtmlTokenError = (function(_super) {
    __extends(HtmlTokenError, _super);
    function HtmlTokenError(errorMsg, tokenType, location) {
      _super.call(this, location, errorMsg);
      this.tokenType = tokenType;
    }
    return HtmlTokenError;
  })(parse_util_1.ParseError);
  exports.HtmlTokenError = HtmlTokenError;
  var HtmlTokenizeResult = (function() {
    function HtmlTokenizeResult(tokens, errors) {
      this.tokens = tokens;
      this.errors = errors;
    }
    return HtmlTokenizeResult;
  })();
  exports.HtmlTokenizeResult = HtmlTokenizeResult;
  function tokenizeHtml(sourceContent, sourceUrl) {
    return new _HtmlTokenizer(new parse_util_1.ParseSourceFile(sourceContent, sourceUrl)).tokenize();
  }
  exports.tokenizeHtml = tokenizeHtml;
  var $EOF = 0;
  var $TAB = 9;
  var $LF = 10;
  var $FF = 12;
  var $CR = 13;
  var $SPACE = 32;
  var $BANG = 33;
  var $DQ = 34;
  var $HASH = 35;
  var $$ = 36;
  var $AMPERSAND = 38;
  var $SQ = 39;
  var $MINUS = 45;
  var $SLASH = 47;
  var $0 = 48;
  var $SEMICOLON = 59;
  var $9 = 57;
  var $COLON = 58;
  var $LT = 60;
  var $EQ = 61;
  var $GT = 62;
  var $QUESTION = 63;
  var $LBRACKET = 91;
  var $RBRACKET = 93;
  var $A = 65;
  var $F = 70;
  var $X = 88;
  var $Z = 90;
  var $a = 97;
  var $f = 102;
  var $z = 122;
  var $x = 120;
  var $NBSP = 160;
  var CR_OR_CRLF_REGEXP = /\r\n?/g;
  function unexpectedCharacterErrorMsg(charCode) {
    var char = charCode === $EOF ? 'EOF' : lang_1.StringWrapper.fromCharCode(charCode);
    return "Unexpected character \"" + char + "\"";
  }
  function unknownEntityErrorMsg(entitySrc) {
    return "Unknown entity \"" + entitySrc + "\" - use the \"&#<decimal>;\" or  \"&#x<hex>;\" syntax";
  }
  var ControlFlowError = (function() {
    function ControlFlowError(error) {
      this.error = error;
    }
    return ControlFlowError;
  })();
  var _HtmlTokenizer = (function() {
    function _HtmlTokenizer(file) {
      this.file = file;
      this.peek = -1;
      this.index = -1;
      this.line = 0;
      this.column = -1;
      this.tokens = [];
      this.errors = [];
      this.input = file.content;
      this.length = file.content.length;
      this._advance();
    }
    _HtmlTokenizer.prototype._processCarriageReturns = function(content) {
      return lang_1.StringWrapper.replaceAll(content, CR_OR_CRLF_REGEXP, '\n');
    };
    _HtmlTokenizer.prototype.tokenize = function() {
      while (this.peek !== $EOF) {
        var start = this._getLocation();
        try {
          if (this._attemptCharCode($LT)) {
            if (this._attemptCharCode($BANG)) {
              if (this._attemptCharCode($LBRACKET)) {
                this._consumeCdata(start);
              } else if (this._attemptCharCode($MINUS)) {
                this._consumeComment(start);
              } else {
                this._consumeDocType(start);
              }
            } else if (this._attemptCharCode($SLASH)) {
              this._consumeTagClose(start);
            } else {
              this._consumeTagOpen(start);
            }
          } else {
            this._consumeText();
          }
        } catch (e) {
          if (e instanceof ControlFlowError) {
            this.errors.push(e.error);
          } else {
            throw e;
          }
        }
      }
      this._beginToken(HtmlTokenType.EOF);
      this._endToken([]);
      return new HtmlTokenizeResult(mergeTextTokens(this.tokens), this.errors);
    };
    _HtmlTokenizer.prototype._getLocation = function() {
      return new parse_util_1.ParseLocation(this.file, this.index, this.line, this.column);
    };
    _HtmlTokenizer.prototype._beginToken = function(type, start) {
      if (start === void 0) {
        start = null;
      }
      if (lang_1.isBlank(start)) {
        start = this._getLocation();
      }
      this.currentTokenStart = start;
      this.currentTokenType = type;
    };
    _HtmlTokenizer.prototype._endToken = function(parts, end) {
      if (end === void 0) {
        end = null;
      }
      if (lang_1.isBlank(end)) {
        end = this._getLocation();
      }
      var token = new HtmlToken(this.currentTokenType, parts, new parse_util_1.ParseSourceSpan(this.currentTokenStart, end));
      this.tokens.push(token);
      this.currentTokenStart = null;
      this.currentTokenType = null;
      return token;
    };
    _HtmlTokenizer.prototype._createError = function(msg, position) {
      var error = new HtmlTokenError(msg, this.currentTokenType, position);
      this.currentTokenStart = null;
      this.currentTokenType = null;
      return new ControlFlowError(error);
    };
    _HtmlTokenizer.prototype._advance = function() {
      if (this.index >= this.length) {
        throw this._createError(unexpectedCharacterErrorMsg($EOF), this._getLocation());
      }
      if (this.peek === $LF) {
        this.line++;
        this.column = 0;
      } else if (this.peek !== $LF && this.peek !== $CR) {
        this.column++;
      }
      this.index++;
      this.peek = this.index >= this.length ? $EOF : lang_1.StringWrapper.charCodeAt(this.input, this.index);
    };
    _HtmlTokenizer.prototype._attemptCharCode = function(charCode) {
      if (this.peek === charCode) {
        this._advance();
        return true;
      }
      return false;
    };
    _HtmlTokenizer.prototype._attemptCharCodeCaseInsensitive = function(charCode) {
      if (compareCharCodeCaseInsensitive(this.peek, charCode)) {
        this._advance();
        return true;
      }
      return false;
    };
    _HtmlTokenizer.prototype._requireCharCode = function(charCode) {
      var location = this._getLocation();
      if (!this._attemptCharCode(charCode)) {
        throw this._createError(unexpectedCharacterErrorMsg(this.peek), location);
      }
    };
    _HtmlTokenizer.prototype._attemptStr = function(chars) {
      for (var i = 0; i < chars.length; i++) {
        if (!this._attemptCharCode(lang_1.StringWrapper.charCodeAt(chars, i))) {
          return false;
        }
      }
      return true;
    };
    _HtmlTokenizer.prototype._attemptStrCaseInsensitive = function(chars) {
      for (var i = 0; i < chars.length; i++) {
        if (!this._attemptCharCodeCaseInsensitive(lang_1.StringWrapper.charCodeAt(chars, i))) {
          return false;
        }
      }
      return true;
    };
    _HtmlTokenizer.prototype._requireStr = function(chars) {
      var location = this._getLocation();
      if (!this._attemptStr(chars)) {
        throw this._createError(unexpectedCharacterErrorMsg(this.peek), location);
      }
    };
    _HtmlTokenizer.prototype._attemptCharCodeUntilFn = function(predicate) {
      while (!predicate(this.peek)) {
        this._advance();
      }
    };
    _HtmlTokenizer.prototype._requireCharCodeUntilFn = function(predicate, len) {
      var start = this._getLocation();
      this._attemptCharCodeUntilFn(predicate);
      if (this.index - start.offset < len) {
        throw this._createError(unexpectedCharacterErrorMsg(this.peek), start);
      }
    };
    _HtmlTokenizer.prototype._attemptUntilChar = function(char) {
      while (this.peek !== char) {
        this._advance();
      }
    };
    _HtmlTokenizer.prototype._readChar = function(decodeEntities) {
      if (decodeEntities && this.peek === $AMPERSAND) {
        return this._decodeEntity();
      } else {
        var index = this.index;
        this._advance();
        return this.input[index];
      }
    };
    _HtmlTokenizer.prototype._decodeEntity = function() {
      var start = this._getLocation();
      this._advance();
      if (this._attemptCharCode($HASH)) {
        var isHex = this._attemptCharCode($x) || this._attemptCharCode($X);
        var numberStart = this._getLocation().offset;
        this._attemptCharCodeUntilFn(isDigitEntityEnd);
        if (this.peek != $SEMICOLON) {
          throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getLocation());
        }
        this._advance();
        var strNum = this.input.substring(numberStart, this.index - 1);
        try {
          var charCode = lang_1.NumberWrapper.parseInt(strNum, isHex ? 16 : 10);
          return lang_1.StringWrapper.fromCharCode(charCode);
        } catch (e) {
          var entity = this.input.substring(start.offset + 1, this.index - 1);
          throw this._createError(unknownEntityErrorMsg(entity), start);
        }
      } else {
        var startPosition = this._savePosition();
        this._attemptCharCodeUntilFn(isNamedEntityEnd);
        if (this.peek != $SEMICOLON) {
          this._restorePosition(startPosition);
          return '&';
        }
        this._advance();
        var name_1 = this.input.substring(start.offset + 1, this.index - 1);
        var char = html_tags_1.NAMED_ENTITIES[name_1];
        if (lang_1.isBlank(char)) {
          throw this._createError(unknownEntityErrorMsg(name_1), start);
        }
        return char;
      }
    };
    _HtmlTokenizer.prototype._consumeRawText = function(decodeEntities, firstCharOfEnd, attemptEndRest) {
      var tagCloseStart;
      var textStart = this._getLocation();
      this._beginToken(decodeEntities ? HtmlTokenType.ESCAPABLE_RAW_TEXT : HtmlTokenType.RAW_TEXT, textStart);
      var parts = [];
      while (true) {
        tagCloseStart = this._getLocation();
        if (this._attemptCharCode(firstCharOfEnd) && attemptEndRest()) {
          break;
        }
        if (this.index > tagCloseStart.offset) {
          parts.push(this.input.substring(tagCloseStart.offset, this.index));
        }
        while (this.peek !== firstCharOfEnd) {
          parts.push(this._readChar(decodeEntities));
        }
      }
      return this._endToken([this._processCarriageReturns(parts.join(''))], tagCloseStart);
    };
    _HtmlTokenizer.prototype._consumeComment = function(start) {
      var _this = this;
      this._beginToken(HtmlTokenType.COMMENT_START, start);
      this._requireCharCode($MINUS);
      this._endToken([]);
      var textToken = this._consumeRawText(false, $MINUS, function() {
        return _this._attemptStr('->');
      });
      this._beginToken(HtmlTokenType.COMMENT_END, textToken.sourceSpan.end);
      this._endToken([]);
    };
    _HtmlTokenizer.prototype._consumeCdata = function(start) {
      var _this = this;
      this._beginToken(HtmlTokenType.CDATA_START, start);
      this._requireStr('CDATA[');
      this._endToken([]);
      var textToken = this._consumeRawText(false, $RBRACKET, function() {
        return _this._attemptStr(']>');
      });
      this._beginToken(HtmlTokenType.CDATA_END, textToken.sourceSpan.end);
      this._endToken([]);
    };
    _HtmlTokenizer.prototype._consumeDocType = function(start) {
      this._beginToken(HtmlTokenType.DOC_TYPE, start);
      this._attemptUntilChar($GT);
      this._advance();
      this._endToken([this.input.substring(start.offset + 2, this.index - 1)]);
    };
    _HtmlTokenizer.prototype._consumePrefixAndName = function() {
      var nameOrPrefixStart = this.index;
      var prefix = null;
      while (this.peek !== $COLON && !isPrefixEnd(this.peek)) {
        this._advance();
      }
      var nameStart;
      if (this.peek === $COLON) {
        this._advance();
        prefix = this.input.substring(nameOrPrefixStart, this.index - 1);
        nameStart = this.index;
      } else {
        nameStart = nameOrPrefixStart;
      }
      this._requireCharCodeUntilFn(isNameEnd, this.index === nameStart ? 1 : 0);
      var name = this.input.substring(nameStart, this.index);
      return [prefix, name];
    };
    _HtmlTokenizer.prototype._consumeTagOpen = function(start) {
      var savedPos = this._savePosition();
      var lowercaseTagName;
      try {
        if (!isAsciiLetter(this.peek)) {
          throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getLocation());
        }
        var nameStart = this.index;
        this._consumeTagOpenStart(start);
        lowercaseTagName = this.input.substring(nameStart, this.index).toLowerCase();
        this._attemptCharCodeUntilFn(isNotWhitespace);
        while (this.peek !== $SLASH && this.peek !== $GT) {
          this._consumeAttributeName();
          this._attemptCharCodeUntilFn(isNotWhitespace);
          if (this._attemptCharCode($EQ)) {
            this._attemptCharCodeUntilFn(isNotWhitespace);
            this._consumeAttributeValue();
          }
          this._attemptCharCodeUntilFn(isNotWhitespace);
        }
        this._consumeTagOpenEnd();
      } catch (e) {
        if (e instanceof ControlFlowError) {
          this._restorePosition(savedPos);
          this._beginToken(HtmlTokenType.TEXT, start);
          this._endToken(['<']);
          return ;
        }
        throw e;
      }
      var contentTokenType = html_tags_1.getHtmlTagDefinition(lowercaseTagName).contentType;
      if (contentTokenType === html_tags_1.HtmlTagContentType.RAW_TEXT) {
        this._consumeRawTextWithTagClose(lowercaseTagName, false);
      } else if (contentTokenType === html_tags_1.HtmlTagContentType.ESCAPABLE_RAW_TEXT) {
        this._consumeRawTextWithTagClose(lowercaseTagName, true);
      }
    };
    _HtmlTokenizer.prototype._consumeRawTextWithTagClose = function(lowercaseTagName, decodeEntities) {
      var _this = this;
      var textToken = this._consumeRawText(decodeEntities, $LT, function() {
        if (!_this._attemptCharCode($SLASH))
          return false;
        _this._attemptCharCodeUntilFn(isNotWhitespace);
        if (!_this._attemptStrCaseInsensitive(lowercaseTagName))
          return false;
        _this._attemptCharCodeUntilFn(isNotWhitespace);
        if (!_this._attemptCharCode($GT))
          return false;
        return true;
      });
      this._beginToken(HtmlTokenType.TAG_CLOSE, textToken.sourceSpan.end);
      this._endToken([null, lowercaseTagName]);
    };
    _HtmlTokenizer.prototype._consumeTagOpenStart = function(start) {
      this._beginToken(HtmlTokenType.TAG_OPEN_START, start);
      var parts = this._consumePrefixAndName();
      this._endToken(parts);
    };
    _HtmlTokenizer.prototype._consumeAttributeName = function() {
      this._beginToken(HtmlTokenType.ATTR_NAME);
      var prefixAndName = this._consumePrefixAndName();
      this._endToken(prefixAndName);
    };
    _HtmlTokenizer.prototype._consumeAttributeValue = function() {
      this._beginToken(HtmlTokenType.ATTR_VALUE);
      var value;
      if (this.peek === $SQ || this.peek === $DQ) {
        var quoteChar = this.peek;
        this._advance();
        var parts = [];
        while (this.peek !== quoteChar) {
          parts.push(this._readChar(true));
        }
        value = parts.join('');
        this._advance();
      } else {
        var valueStart = this.index;
        this._requireCharCodeUntilFn(isNameEnd, 1);
        value = this.input.substring(valueStart, this.index);
      }
      this._endToken([this._processCarriageReturns(value)]);
    };
    _HtmlTokenizer.prototype._consumeTagOpenEnd = function() {
      var tokenType = this._attemptCharCode($SLASH) ? HtmlTokenType.TAG_OPEN_END_VOID : HtmlTokenType.TAG_OPEN_END;
      this._beginToken(tokenType);
      this._requireCharCode($GT);
      this._endToken([]);
    };
    _HtmlTokenizer.prototype._consumeTagClose = function(start) {
      this._beginToken(HtmlTokenType.TAG_CLOSE, start);
      this._attemptCharCodeUntilFn(isNotWhitespace);
      var prefixAndName;
      prefixAndName = this._consumePrefixAndName();
      this._attemptCharCodeUntilFn(isNotWhitespace);
      this._requireCharCode($GT);
      this._endToken(prefixAndName);
    };
    _HtmlTokenizer.prototype._consumeText = function() {
      var start = this._getLocation();
      this._beginToken(HtmlTokenType.TEXT, start);
      var parts = [this._readChar(true)];
      while (!isTextEnd(this.peek)) {
        parts.push(this._readChar(true));
      }
      this._endToken([this._processCarriageReturns(parts.join(''))]);
    };
    _HtmlTokenizer.prototype._savePosition = function() {
      return [this.peek, this.index, this.column, this.line, this.tokens.length];
    };
    _HtmlTokenizer.prototype._restorePosition = function(position) {
      this.peek = position[0];
      this.index = position[1];
      this.column = position[2];
      this.line = position[3];
      var nbTokens = position[4];
      if (nbTokens < this.tokens.length) {
        this.tokens = collection_1.ListWrapper.slice(this.tokens, 0, nbTokens);
      }
    };
    return _HtmlTokenizer;
  })();
  function isNotWhitespace(code) {
    return !isWhitespace(code) || code === $EOF;
  }
  function isWhitespace(code) {
    return (code >= $TAB && code <= $SPACE) || (code === $NBSP);
  }
  function isNameEnd(code) {
    return isWhitespace(code) || code === $GT || code === $SLASH || code === $SQ || code === $DQ || code === $EQ;
  }
  function isPrefixEnd(code) {
    return (code < $a || $z < code) && (code < $A || $Z < code) && (code < $0 || code > $9);
  }
  function isDigitEntityEnd(code) {
    return code == $SEMICOLON || code == $EOF || !isAsciiHexDigit(code);
  }
  function isNamedEntityEnd(code) {
    return code == $SEMICOLON || code == $EOF || !isAsciiLetter(code);
  }
  function isTextEnd(code) {
    return code === $LT || code === $EOF;
  }
  function isAsciiLetter(code) {
    return code >= $a && code <= $z || code >= $A && code <= $Z;
  }
  function isAsciiHexDigit(code) {
    return code >= $a && code <= $f || code >= $A && code <= $F || code >= $0 && code <= $9;
  }
  function compareCharCodeCaseInsensitive(code1, code2) {
    return toUpperCaseCharCode(code1) == toUpperCaseCharCode(code2);
  }
  function toUpperCaseCharCode(code) {
    return code >= $a && code <= $z ? code - $a + $A : code;
  }
  function mergeTextTokens(srcTokens) {
    var dstTokens = [];
    var lastDstToken;
    for (var i = 0; i < srcTokens.length; i++) {
      var token = srcTokens[i];
      if (lang_1.isPresent(lastDstToken) && lastDstToken.type == HtmlTokenType.TEXT && token.type == HtmlTokenType.TEXT) {
        lastDstToken.parts[0] += token.parts[0];
        lastDstToken.sourceSpan.end = token.sourceSpan.end;
      } else {
        lastDstToken = token;
        dstTokens.push(lastDstToken);
      }
    }
    return dstTokens;
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/runtime_metadata", ["angular2/src/core/di", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/compiler/directive_metadata", "angular2/src/core/metadata/directives", "angular2/src/core/linker/directive_resolver", "angular2/src/core/linker/pipe_resolver", "angular2/src/core/linker/view_resolver", "angular2/src/core/linker/directive_lifecycle_reflector", "angular2/src/core/linker/interfaces", "angular2/src/core/reflection/reflection", "angular2/src/core/di", "angular2/src/core/platform_directives_and_pipes", "angular2/src/compiler/util", "angular2/src/compiler/url_resolver"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var cpl = require("angular2/src/compiler/directive_metadata");
  var md = require("angular2/src/core/metadata/directives");
  var directive_resolver_1 = require("angular2/src/core/linker/directive_resolver");
  var pipe_resolver_1 = require("angular2/src/core/linker/pipe_resolver");
  var view_resolver_1 = require("angular2/src/core/linker/view_resolver");
  var directive_lifecycle_reflector_1 = require("angular2/src/core/linker/directive_lifecycle_reflector");
  var interfaces_1 = require("angular2/src/core/linker/interfaces");
  var reflection_1 = require("angular2/src/core/reflection/reflection");
  var di_2 = require("angular2/src/core/di");
  var platform_directives_and_pipes_1 = require("angular2/src/core/platform_directives_and_pipes");
  var util_1 = require("angular2/src/compiler/util");
  var url_resolver_1 = require("angular2/src/compiler/url_resolver");
  var RuntimeMetadataResolver = (function() {
    function RuntimeMetadataResolver(_directiveResolver, _pipeResolver, _viewResolver, _platformDirectives, _platformPipes) {
      this._directiveResolver = _directiveResolver;
      this._pipeResolver = _pipeResolver;
      this._viewResolver = _viewResolver;
      this._platformDirectives = _platformDirectives;
      this._platformPipes = _platformPipes;
      this._directiveCache = new Map();
      this._pipeCache = new Map();
    }
    RuntimeMetadataResolver.prototype.getDirectiveMetadata = function(directiveType) {
      var meta = this._directiveCache.get(directiveType);
      if (lang_1.isBlank(meta)) {
        var dirMeta = this._directiveResolver.resolve(directiveType);
        var moduleUrl = null;
        var templateMeta = null;
        var changeDetectionStrategy = null;
        if (dirMeta instanceof md.ComponentMetadata) {
          var cmpMeta = dirMeta;
          moduleUrl = calcModuleUrl(directiveType, cmpMeta);
          var viewMeta = this._viewResolver.resolve(directiveType);
          templateMeta = new cpl.CompileTemplateMetadata({
            encapsulation: viewMeta.encapsulation,
            template: viewMeta.template,
            templateUrl: viewMeta.templateUrl,
            styles: viewMeta.styles,
            styleUrls: viewMeta.styleUrls
          });
          changeDetectionStrategy = cmpMeta.changeDetection;
        }
        meta = cpl.CompileDirectiveMetadata.create({
          selector: dirMeta.selector,
          exportAs: dirMeta.exportAs,
          isComponent: lang_1.isPresent(templateMeta),
          dynamicLoadable: true,
          type: new cpl.CompileTypeMetadata({
            name: lang_1.stringify(directiveType),
            moduleUrl: moduleUrl,
            runtime: directiveType
          }),
          template: templateMeta,
          changeDetection: changeDetectionStrategy,
          inputs: dirMeta.inputs,
          outputs: dirMeta.outputs,
          host: dirMeta.host,
          lifecycleHooks: interfaces_1.LIFECYCLE_HOOKS_VALUES.filter(function(hook) {
            return directive_lifecycle_reflector_1.hasLifecycleHook(hook, directiveType);
          })
        });
        this._directiveCache.set(directiveType, meta);
      }
      return meta;
    };
    RuntimeMetadataResolver.prototype.getPipeMetadata = function(pipeType) {
      var meta = this._pipeCache.get(pipeType);
      if (lang_1.isBlank(meta)) {
        var pipeMeta = this._pipeResolver.resolve(pipeType);
        var moduleUrl = reflection_1.reflector.importUri(pipeType);
        meta = new cpl.CompilePipeMetadata({
          type: new cpl.CompileTypeMetadata({
            name: lang_1.stringify(pipeType),
            moduleUrl: moduleUrl,
            runtime: pipeType
          }),
          name: pipeMeta.name,
          pure: pipeMeta.pure
        });
        this._pipeCache.set(pipeType, meta);
      }
      return meta;
    };
    RuntimeMetadataResolver.prototype.getViewDirectivesMetadata = function(component) {
      var _this = this;
      var view = this._viewResolver.resolve(component);
      var directives = flattenDirectives(view, this._platformDirectives);
      for (var i = 0; i < directives.length; i++) {
        if (!isValidType(directives[i])) {
          throw new exceptions_1.BaseException("Unexpected directive value '" + lang_1.stringify(directives[i]) + "' on the View of component '" + lang_1.stringify(component) + "'");
        }
      }
      return directives.map(function(type) {
        return _this.getDirectiveMetadata(type);
      });
    };
    RuntimeMetadataResolver.prototype.getViewPipesMetadata = function(component) {
      var _this = this;
      var view = this._viewResolver.resolve(component);
      var pipes = flattenPipes(view, this._platformPipes);
      for (var i = 0; i < pipes.length; i++) {
        if (!isValidType(pipes[i])) {
          throw new exceptions_1.BaseException("Unexpected piped value '" + lang_1.stringify(pipes[i]) + "' on the View of component '" + lang_1.stringify(component) + "'");
        }
      }
      return pipes.map(function(type) {
        return _this.getPipeMetadata(type);
      });
    };
    RuntimeMetadataResolver = __decorate([di_2.Injectable(), __param(3, di_2.Optional()), __param(3, di_2.Inject(platform_directives_and_pipes_1.PLATFORM_DIRECTIVES)), __param(4, di_2.Optional()), __param(4, di_2.Inject(platform_directives_and_pipes_1.PLATFORM_PIPES)), __metadata('design:paramtypes', [directive_resolver_1.DirectiveResolver, pipe_resolver_1.PipeResolver, view_resolver_1.ViewResolver, Array, Array])], RuntimeMetadataResolver);
    return RuntimeMetadataResolver;
  })();
  exports.RuntimeMetadataResolver = RuntimeMetadataResolver;
  function flattenDirectives(view, platformDirectives) {
    var directives = [];
    if (lang_1.isPresent(platformDirectives)) {
      flattenArray(platformDirectives, directives);
    }
    if (lang_1.isPresent(view.directives)) {
      flattenArray(view.directives, directives);
    }
    return directives;
  }
  function flattenPipes(view, platformPipes) {
    var pipes = [];
    if (lang_1.isPresent(platformPipes)) {
      flattenArray(platformPipes, pipes);
    }
    if (lang_1.isPresent(view.pipes)) {
      flattenArray(view.pipes, pipes);
    }
    return pipes;
  }
  function flattenArray(tree, out) {
    for (var i = 0; i < tree.length; i++) {
      var item = di_1.resolveForwardRef(tree[i]);
      if (lang_1.isArray(item)) {
        flattenArray(item, out);
      } else {
        out.push(item);
      }
    }
  }
  function isValidType(value) {
    return lang_1.isPresent(value) && (value instanceof lang_1.Type);
  }
  function calcModuleUrl(type, cmpMetadata) {
    var moduleId = cmpMetadata.moduleId;
    if (lang_1.isPresent(moduleId)) {
      var scheme = url_resolver_1.getUrlScheme(moduleId);
      return lang_1.isPresent(scheme) && scheme.length > 0 ? moduleId : "package:" + moduleId + util_1.MODULE_SUFFIX;
    } else {
      return reflection_1.reflector.importUri(type);
    }
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/browser/browser_adapter", ["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/platform/dom/dom_adapter", "angular2/src/platform/browser/generic_browser_adapter"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var generic_browser_adapter_1 = require("angular2/src/platform/browser/generic_browser_adapter");
  var _attrToPropMap = {
    'class': 'className',
    'innerHtml': 'innerHTML',
    'readonly': 'readOnly',
    'tabindex': 'tabIndex'
  };
  var DOM_KEY_LOCATION_NUMPAD = 3;
  var _keyMap = {
    '\b': 'Backspace',
    '\t': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    'Del': 'Delete',
    'Esc': 'Escape',
    'Left': 'ArrowLeft',
    'Right': 'ArrowRight',
    'Up': 'ArrowUp',
    'Down': 'ArrowDown',
    'Menu': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'Win': 'OS'
  };
  var _chromeNumKeyPadMap = {
    'A': '1',
    'B': '2',
    'C': '3',
    'D': '4',
    'E': '5',
    'F': '6',
    'G': '7',
    'H': '8',
    'I': '9',
    'J': '*',
    'K': '+',
    'M': '-',
    'N': '.',
    'O': '/',
    '\x60': '0',
    '\x90': 'NumLock'
  };
  var BrowserDomAdapter = (function(_super) {
    __extends(BrowserDomAdapter, _super);
    function BrowserDomAdapter() {
      _super.apply(this, arguments);
    }
    BrowserDomAdapter.prototype.parse = function(templateHtml) {
      throw new Error("parse not implemented");
    };
    BrowserDomAdapter.makeCurrent = function() {
      dom_adapter_1.setRootDomAdapter(new BrowserDomAdapter());
    };
    BrowserDomAdapter.prototype.hasProperty = function(element, name) {
      return name in element;
    };
    BrowserDomAdapter.prototype.setProperty = function(el, name, value) {
      el[name] = value;
    };
    BrowserDomAdapter.prototype.getProperty = function(el, name) {
      return el[name];
    };
    BrowserDomAdapter.prototype.invoke = function(el, methodName, args) {
      el[methodName].apply(el, args);
    };
    BrowserDomAdapter.prototype.logError = function(error) {
      if (window.console.error) {
        window.console.error(error);
      } else {
        window.console.log(error);
      }
    };
    BrowserDomAdapter.prototype.log = function(error) {
      window.console.log(error);
    };
    BrowserDomAdapter.prototype.logGroup = function(error) {
      if (window.console.group) {
        window.console.group(error);
        this.logError(error);
      } else {
        window.console.log(error);
      }
    };
    BrowserDomAdapter.prototype.logGroupEnd = function() {
      if (window.console.groupEnd) {
        window.console.groupEnd();
      }
    };
    Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
      get: function() {
        return _attrToPropMap;
      },
      enumerable: true,
      configurable: true
    });
    BrowserDomAdapter.prototype.query = function(selector) {
      return document.querySelector(selector);
    };
    BrowserDomAdapter.prototype.querySelector = function(el, selector) {
      return el.querySelector(selector);
    };
    BrowserDomAdapter.prototype.querySelectorAll = function(el, selector) {
      return el.querySelectorAll(selector);
    };
    BrowserDomAdapter.prototype.on = function(el, evt, listener) {
      el.addEventListener(evt, listener, false);
    };
    BrowserDomAdapter.prototype.onAndCancel = function(el, evt, listener) {
      el.addEventListener(evt, listener, false);
      return function() {
        el.removeEventListener(evt, listener, false);
      };
    };
    BrowserDomAdapter.prototype.dispatchEvent = function(el, evt) {
      el.dispatchEvent(evt);
    };
    BrowserDomAdapter.prototype.createMouseEvent = function(eventType) {
      var evt = document.createEvent('MouseEvent');
      evt.initEvent(eventType, true, true);
      return evt;
    };
    BrowserDomAdapter.prototype.createEvent = function(eventType) {
      var evt = document.createEvent('Event');
      evt.initEvent(eventType, true, true);
      return evt;
    };
    BrowserDomAdapter.prototype.preventDefault = function(evt) {
      evt.preventDefault();
      evt.returnValue = false;
    };
    BrowserDomAdapter.prototype.isPrevented = function(evt) {
      return evt.defaultPrevented || lang_1.isPresent(evt.returnValue) && !evt.returnValue;
    };
    BrowserDomAdapter.prototype.getInnerHTML = function(el) {
      return el.innerHTML;
    };
    BrowserDomAdapter.prototype.getOuterHTML = function(el) {
      return el.outerHTML;
    };
    BrowserDomAdapter.prototype.nodeName = function(node) {
      return node.nodeName;
    };
    BrowserDomAdapter.prototype.nodeValue = function(node) {
      return node.nodeValue;
    };
    BrowserDomAdapter.prototype.type = function(node) {
      return node.type;
    };
    BrowserDomAdapter.prototype.content = function(node) {
      if (this.hasProperty(node, "content")) {
        return node.content;
      } else {
        return node;
      }
    };
    BrowserDomAdapter.prototype.firstChild = function(el) {
      return el.firstChild;
    };
    BrowserDomAdapter.prototype.nextSibling = function(el) {
      return el.nextSibling;
    };
    BrowserDomAdapter.prototype.parentElement = function(el) {
      return el.parentNode;
    };
    BrowserDomAdapter.prototype.childNodes = function(el) {
      return el.childNodes;
    };
    BrowserDomAdapter.prototype.childNodesAsList = function(el) {
      var childNodes = el.childNodes;
      var res = collection_1.ListWrapper.createFixedSize(childNodes.length);
      for (var i = 0; i < childNodes.length; i++) {
        res[i] = childNodes[i];
      }
      return res;
    };
    BrowserDomAdapter.prototype.clearNodes = function(el) {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    };
    BrowserDomAdapter.prototype.appendChild = function(el, node) {
      el.appendChild(node);
    };
    BrowserDomAdapter.prototype.removeChild = function(el, node) {
      el.removeChild(node);
    };
    BrowserDomAdapter.prototype.replaceChild = function(el, newChild, oldChild) {
      el.replaceChild(newChild, oldChild);
    };
    BrowserDomAdapter.prototype.remove = function(node) {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
      return node;
    };
    BrowserDomAdapter.prototype.insertBefore = function(el, node) {
      el.parentNode.insertBefore(node, el);
    };
    BrowserDomAdapter.prototype.insertAllBefore = function(el, nodes) {
      nodes.forEach(function(n) {
        return el.parentNode.insertBefore(n, el);
      });
    };
    BrowserDomAdapter.prototype.insertAfter = function(el, node) {
      el.parentNode.insertBefore(node, el.nextSibling);
    };
    BrowserDomAdapter.prototype.setInnerHTML = function(el, value) {
      el.innerHTML = value;
    };
    BrowserDomAdapter.prototype.getText = function(el) {
      return el.textContent;
    };
    BrowserDomAdapter.prototype.setText = function(el, value) {
      el.textContent = value;
    };
    BrowserDomAdapter.prototype.getValue = function(el) {
      return el.value;
    };
    BrowserDomAdapter.prototype.setValue = function(el, value) {
      el.value = value;
    };
    BrowserDomAdapter.prototype.getChecked = function(el) {
      return el.checked;
    };
    BrowserDomAdapter.prototype.setChecked = function(el, value) {
      el.checked = value;
    };
    BrowserDomAdapter.prototype.createComment = function(text) {
      return document.createComment(text);
    };
    BrowserDomAdapter.prototype.createTemplate = function(html) {
      var t = document.createElement('template');
      t.innerHTML = html;
      return t;
    };
    BrowserDomAdapter.prototype.createElement = function(tagName, doc) {
      if (doc === void 0) {
        doc = document;
      }
      return doc.createElement(tagName);
    };
    BrowserDomAdapter.prototype.createElementNS = function(ns, tagName, doc) {
      if (doc === void 0) {
        doc = document;
      }
      return doc.createElementNS(ns, tagName);
    };
    BrowserDomAdapter.prototype.createTextNode = function(text, doc) {
      if (doc === void 0) {
        doc = document;
      }
      return doc.createTextNode(text);
    };
    BrowserDomAdapter.prototype.createScriptTag = function(attrName, attrValue, doc) {
      if (doc === void 0) {
        doc = document;
      }
      var el = doc.createElement('SCRIPT');
      el.setAttribute(attrName, attrValue);
      return el;
    };
    BrowserDomAdapter.prototype.createStyleElement = function(css, doc) {
      if (doc === void 0) {
        doc = document;
      }
      var style = doc.createElement('style');
      this.appendChild(style, this.createTextNode(css));
      return style;
    };
    BrowserDomAdapter.prototype.createShadowRoot = function(el) {
      return el.createShadowRoot();
    };
    BrowserDomAdapter.prototype.getShadowRoot = function(el) {
      return el.shadowRoot;
    };
    BrowserDomAdapter.prototype.getHost = function(el) {
      return el.host;
    };
    BrowserDomAdapter.prototype.clone = function(node) {
      return node.cloneNode(true);
    };
    BrowserDomAdapter.prototype.getElementsByClassName = function(element, name) {
      return element.getElementsByClassName(name);
    };
    BrowserDomAdapter.prototype.getElementsByTagName = function(element, name) {
      return element.getElementsByTagName(name);
    };
    BrowserDomAdapter.prototype.classList = function(element) {
      return Array.prototype.slice.call(element.classList, 0);
    };
    BrowserDomAdapter.prototype.addClass = function(element, className) {
      element.classList.add(className);
    };
    BrowserDomAdapter.prototype.removeClass = function(element, className) {
      element.classList.remove(className);
    };
    BrowserDomAdapter.prototype.hasClass = function(element, className) {
      return element.classList.contains(className);
    };
    BrowserDomAdapter.prototype.setStyle = function(element, styleName, styleValue) {
      element.style[styleName] = styleValue;
    };
    BrowserDomAdapter.prototype.removeStyle = function(element, stylename) {
      element.style[stylename] = null;
    };
    BrowserDomAdapter.prototype.getStyle = function(element, stylename) {
      return element.style[stylename];
    };
    BrowserDomAdapter.prototype.hasStyle = function(element, styleName, styleValue) {
      if (styleValue === void 0) {
        styleValue = null;
      }
      var value = this.getStyle(element, styleName) || '';
      return styleValue ? value == styleValue : value.length > 0;
    };
    BrowserDomAdapter.prototype.tagName = function(element) {
      return element.tagName;
    };
    BrowserDomAdapter.prototype.attributeMap = function(element) {
      var res = new Map();
      var elAttrs = element.attributes;
      for (var i = 0; i < elAttrs.length; i++) {
        var attrib = elAttrs[i];
        res.set(attrib.name, attrib.value);
      }
      return res;
    };
    BrowserDomAdapter.prototype.hasAttribute = function(element, attribute) {
      return element.hasAttribute(attribute);
    };
    BrowserDomAdapter.prototype.getAttribute = function(element, attribute) {
      return element.getAttribute(attribute);
    };
    BrowserDomAdapter.prototype.setAttribute = function(element, name, value) {
      element.setAttribute(name, value);
    };
    BrowserDomAdapter.prototype.setAttributeNS = function(element, ns, name, value) {
      element.setAttributeNS(ns, name, value);
    };
    BrowserDomAdapter.prototype.removeAttribute = function(element, attribute) {
      element.removeAttribute(attribute);
    };
    BrowserDomAdapter.prototype.templateAwareRoot = function(el) {
      return this.isTemplateElement(el) ? this.content(el) : el;
    };
    BrowserDomAdapter.prototype.createHtmlDocument = function() {
      return document.implementation.createHTMLDocument('fakeTitle');
    };
    BrowserDomAdapter.prototype.defaultDoc = function() {
      return document;
    };
    BrowserDomAdapter.prototype.getBoundingClientRect = function(el) {
      try {
        return el.getBoundingClientRect();
      } catch (e) {
        return {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        };
      }
    };
    BrowserDomAdapter.prototype.getTitle = function() {
      return document.title;
    };
    BrowserDomAdapter.prototype.setTitle = function(newTitle) {
      document.title = newTitle || '';
    };
    BrowserDomAdapter.prototype.elementMatches = function(n, selector) {
      var matches = false;
      if (n instanceof HTMLElement) {
        if (n.matches) {
          matches = n.matches(selector);
        } else if (n.msMatchesSelector) {
          matches = n.msMatchesSelector(selector);
        } else if (n.webkitMatchesSelector) {
          matches = n.webkitMatchesSelector(selector);
        }
      }
      return matches;
    };
    BrowserDomAdapter.prototype.isTemplateElement = function(el) {
      return el instanceof HTMLElement && el.nodeName == "TEMPLATE";
    };
    BrowserDomAdapter.prototype.isTextNode = function(node) {
      return node.nodeType === Node.TEXT_NODE;
    };
    BrowserDomAdapter.prototype.isCommentNode = function(node) {
      return node.nodeType === Node.COMMENT_NODE;
    };
    BrowserDomAdapter.prototype.isElementNode = function(node) {
      return node.nodeType === Node.ELEMENT_NODE;
    };
    BrowserDomAdapter.prototype.hasShadowRoot = function(node) {
      return node instanceof HTMLElement && lang_1.isPresent(node.shadowRoot);
    };
    BrowserDomAdapter.prototype.isShadowRoot = function(node) {
      return node instanceof DocumentFragment;
    };
    BrowserDomAdapter.prototype.importIntoDoc = function(node) {
      var toImport = node;
      if (this.isTemplateElement(node)) {
        toImport = this.content(node);
      }
      return document.importNode(toImport, true);
    };
    BrowserDomAdapter.prototype.adoptNode = function(node) {
      return document.adoptNode(node);
    };
    BrowserDomAdapter.prototype.getHref = function(el) {
      return el.href;
    };
    BrowserDomAdapter.prototype.getEventKey = function(event) {
      var key = event.key;
      if (lang_1.isBlank(key)) {
        key = event.keyIdentifier;
        if (lang_1.isBlank(key)) {
          return 'Unidentified';
        }
        if (key.startsWith('U+')) {
          key = String.fromCharCode(parseInt(key.substring(2), 16));
          if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
            key = _chromeNumKeyPadMap[key];
          }
        }
      }
      if (_keyMap.hasOwnProperty(key)) {
        key = _keyMap[key];
      }
      return key;
    };
    BrowserDomAdapter.prototype.getGlobalEventTarget = function(target) {
      if (target == "window") {
        return window;
      } else if (target == "document") {
        return document;
      } else if (target == "body") {
        return document.body;
      }
    };
    BrowserDomAdapter.prototype.getHistory = function() {
      return window.history;
    };
    BrowserDomAdapter.prototype.getLocation = function() {
      return window.location;
    };
    BrowserDomAdapter.prototype.getBaseHref = function() {
      var href = getBaseElementHref();
      if (lang_1.isBlank(href)) {
        return null;
      }
      return relativePath(href);
    };
    BrowserDomAdapter.prototype.resetBaseElement = function() {
      baseElement = null;
    };
    BrowserDomAdapter.prototype.getUserAgent = function() {
      return window.navigator.userAgent;
    };
    BrowserDomAdapter.prototype.setData = function(element, name, value) {
      this.setAttribute(element, 'data-' + name, value);
    };
    BrowserDomAdapter.prototype.getData = function(element, name) {
      return this.getAttribute(element, 'data-' + name);
    };
    BrowserDomAdapter.prototype.getComputedStyle = function(element) {
      return getComputedStyle(element);
    };
    BrowserDomAdapter.prototype.setGlobalVar = function(path, value) {
      lang_1.setValueOnPath(lang_1.global, path, value);
    };
    BrowserDomAdapter.prototype.requestAnimationFrame = function(callback) {
      return window.requestAnimationFrame(callback);
    };
    BrowserDomAdapter.prototype.cancelAnimationFrame = function(id) {
      window.cancelAnimationFrame(id);
    };
    BrowserDomAdapter.prototype.performanceNow = function() {
      if (lang_1.isPresent(window.performance) && lang_1.isPresent(window.performance.now)) {
        return window.performance.now();
      } else {
        return lang_1.DateWrapper.toMillis(lang_1.DateWrapper.now());
      }
    };
    return BrowserDomAdapter;
  })(generic_browser_adapter_1.GenericBrowserDomAdapter);
  exports.BrowserDomAdapter = BrowserDomAdapter;
  var baseElement = null;
  function getBaseElementHref() {
    if (lang_1.isBlank(baseElement)) {
      baseElement = document.querySelector('base');
      if (lang_1.isBlank(baseElement)) {
        return null;
      }
    }
    return baseElement.getAttribute('href');
  }
  var urlParsingNode = null;
  function relativePath(url) {
    if (lang_1.isBlank(urlParsingNode)) {
      urlParsingNode = document.createElement("a");
    }
    urlParsingNode.setAttribute('href', url);
    return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname : '/' + urlParsingNode.pathname;
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/shared/serializer", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/render/api", "angular2/src/core/di", "angular2/src/web_workers/shared/render_store", "angular2/src/core/metadata/view"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var api_1 = require("angular2/src/core/render/api");
  var di_1 = require("angular2/src/core/di");
  var render_store_1 = require("angular2/src/web_workers/shared/render_store");
  var view_1 = require("angular2/src/core/metadata/view");
  exports.PRIMITIVE = String;
  var Serializer = (function() {
    function Serializer(_renderStore) {
      this._renderStore = _renderStore;
    }
    Serializer.prototype.serialize = function(obj, type) {
      var _this = this;
      if (!lang_1.isPresent(obj)) {
        return null;
      }
      if (lang_1.isArray(obj)) {
        return obj.map(function(v) {
          return _this.serialize(v, type);
        });
      }
      if (type == exports.PRIMITIVE) {
        return obj;
      }
      if (type == RenderStoreObject) {
        return this._renderStore.serialize(obj);
      } else if (type === api_1.RenderComponentType) {
        return this._serializeRenderComponentType(obj);
      } else if (type === view_1.ViewEncapsulation) {
        return lang_1.serializeEnum(obj);
      } else {
        throw new exceptions_1.BaseException("No serializer for " + type.toString());
      }
    };
    Serializer.prototype.deserialize = function(map, type, data) {
      var _this = this;
      if (!lang_1.isPresent(map)) {
        return null;
      }
      if (lang_1.isArray(map)) {
        var obj = [];
        map.forEach(function(val) {
          return obj.push(_this.deserialize(val, type, data));
        });
        return obj;
      }
      if (type == exports.PRIMITIVE) {
        return map;
      }
      if (type == RenderStoreObject) {
        return this._renderStore.deserialize(map);
      } else if (type === api_1.RenderComponentType) {
        return this._deserializeRenderComponentType(map);
      } else if (type === view_1.ViewEncapsulation) {
        return view_1.VIEW_ENCAPSULATION_VALUES[map];
      } else {
        throw new exceptions_1.BaseException("No deserializer for " + type.toString());
      }
    };
    Serializer.prototype.mapToObject = function(map, type) {
      var _this = this;
      var object = {};
      var serialize = lang_1.isPresent(type);
      map.forEach(function(value, key) {
        if (serialize) {
          object[key] = _this.serialize(value, type);
        } else {
          object[key] = value;
        }
      });
      return object;
    };
    Serializer.prototype.objectToMap = function(obj, type, data) {
      var _this = this;
      if (lang_1.isPresent(type)) {
        var map = new collection_1.Map();
        collection_1.StringMapWrapper.forEach(obj, function(val, key) {
          map.set(key, _this.deserialize(val, type, data));
        });
        return map;
      } else {
        return collection_1.MapWrapper.createFromStringMap(obj);
      }
    };
    Serializer.prototype._serializeRenderComponentType = function(obj) {
      return {
        'id': obj.id,
        'encapsulation': this.serialize(obj.encapsulation, view_1.ViewEncapsulation),
        'styles': this.serialize(obj.styles, exports.PRIMITIVE)
      };
    };
    Serializer.prototype._deserializeRenderComponentType = function(map) {
      return new api_1.RenderComponentType(map['id'], this.deserialize(map['encapsulation'], view_1.ViewEncapsulation), this.deserialize(map['styles'], exports.PRIMITIVE));
    };
    Serializer = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [render_store_1.RenderStore])], Serializer);
    return Serializer;
  })();
  exports.Serializer = Serializer;
  var RenderStoreObject = (function() {
    function RenderStoreObject() {}
    return RenderStoreObject;
  })();
  exports.RenderStoreObject = RenderStoreObject;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/ui/event_dispatcher", ["angular2/src/web_workers/shared/serializer", "angular2/src/web_workers/ui/event_serializer", "angular2/src/facade/exceptions", "angular2/src/facade/async"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var serializer_1 = require("angular2/src/web_workers/shared/serializer");
  var event_serializer_1 = require("angular2/src/web_workers/ui/event_serializer");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var async_1 = require("angular2/src/facade/async");
  var EventDispatcher = (function() {
    function EventDispatcher(_sink, _serializer) {
      this._sink = _sink;
      this._serializer = _serializer;
    }
    EventDispatcher.prototype.dispatchRenderEvent = function(element, eventTarget, eventName, event) {
      var serializedEvent;
      switch (event.type) {
        case "click":
        case "mouseup":
        case "mousedown":
        case "dblclick":
        case "contextmenu":
        case "mouseenter":
        case "mouseleave":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "show":
          serializedEvent = event_serializer_1.serializeMouseEvent(event);
          break;
        case "keydown":
        case "keypress":
        case "keyup":
          serializedEvent = event_serializer_1.serializeKeyboardEvent(event);
          break;
        case "input":
        case "change":
        case "blur":
          serializedEvent = event_serializer_1.serializeEventWithTarget(event);
          break;
        case "abort":
        case "afterprint":
        case "beforeprint":
        case "cached":
        case "canplay":
        case "canplaythrough":
        case "chargingchange":
        case "chargingtimechange":
        case "close":
        case "dischargingtimechange":
        case "DOMContentLoaded":
        case "downloading":
        case "durationchange":
        case "emptied":
        case "ended":
        case "error":
        case "fullscreenchange":
        case "fullscreenerror":
        case "invalid":
        case "languagechange":
        case "levelfchange":
        case "loadeddata":
        case "loadedmetadata":
        case "obsolete":
        case "offline":
        case "online":
        case "open":
        case "orientatoinchange":
        case "pause":
        case "pointerlockchange":
        case "pointerlockerror":
        case "play":
        case "playing":
        case "ratechange":
        case "readystatechange":
        case "reset":
        case "scroll":
        case "seeked":
        case "seeking":
        case "stalled":
        case "submit":
        case "success":
        case "suspend":
        case "timeupdate":
        case "updateready":
        case "visibilitychange":
        case "volumechange":
        case "waiting":
          serializedEvent = event_serializer_1.serializeGenericEvent(event);
          break;
        default:
          throw new exceptions_1.BaseException(eventName + " not supported on WebWorkers");
      }
      async_1.ObservableWrapper.callEmit(this._sink, {
        "element": this._serializer.serialize(element, serializer_1.RenderStoreObject),
        "eventName": eventName,
        "eventTarget": eventTarget,
        "event": serializedEvent
      });
      return false;
    };
    return EventDispatcher;
  })();
  exports.EventDispatcher = EventDispatcher;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/worker_render", ["angular2/src/web_workers/shared/post_message_bus", "angular2/src/web_workers/shared/message_bus", "angular2/core", "angular2/src/core/di", "angular2/src/platform/worker_render_common", "angular2/src/facade/exceptions", "angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var post_message_bus_1 = require("angular2/src/web_workers/shared/post_message_bus");
  var message_bus_1 = require("angular2/src/web_workers/shared/message_bus");
  var core_1 = require("angular2/core");
  var di_1 = require("angular2/src/core/di");
  var worker_render_common_1 = require("angular2/src/platform/worker_render_common");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var lang_1 = require("angular2/src/facade/lang");
  var WebWorkerInstance = (function() {
    function WebWorkerInstance() {}
    WebWorkerInstance.prototype.init = function(worker, bus) {
      this.worker = worker;
      this.bus = bus;
    };
    WebWorkerInstance = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], WebWorkerInstance);
    return WebWorkerInstance;
  })();
  exports.WebWorkerInstance = WebWorkerInstance;
  exports.WORKER_RENDER_APPLICATION = lang_1.CONST_EXPR([worker_render_common_1.WORKER_RENDER_APPLICATION_COMMON, WebWorkerInstance, new di_1.Provider(core_1.APP_INITIALIZER, {
    useFactory: function(injector) {
      return function() {
        return initWebWorkerApplication(injector);
      };
    },
    multi: true,
    deps: [di_1.Injector]
  }), new di_1.Provider(message_bus_1.MessageBus, {
    useFactory: function(instance) {
      return instance.bus;
    },
    deps: [WebWorkerInstance]
  })]);
  function initWebWorkerApplication(injector) {
    var scriptUri;
    try {
      scriptUri = injector.get(worker_render_common_1.WORKER_SCRIPT);
    } catch (e) {
      throw new exceptions_1.BaseException("You must provide your WebWorker's initialization script with the WORKER_SCRIPT token");
    }
    var instance = injector.get(WebWorkerInstance);
    spawnWebWorker(scriptUri, instance);
    worker_render_common_1.initializeGenericWorkerRenderer(injector);
  }
  function spawnWebWorker(uri, instance) {
    var webWorker = new Worker(uri);
    var sink = new post_message_bus_1.PostMessageBusSink(webWorker);
    var source = new post_message_bus_1.PostMessageBusSource(webWorker);
    var bus = new post_message_bus_1.PostMessageBus(sink, source);
    instance.init(webWorker, bus);
  }
  global.define = __define;
  return module.exports;
});

System.register("rxjs/symbol/rxSubscriber", ["rxjs/util/SymbolShim"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var SymbolShim_1 = require("rxjs/util/SymbolShim");
  exports.rxSubscriber = SymbolShim_1.SymbolShim.for('rxSubscriber');
  global.define = __define;
  return module.exports;
});

System.register("rxjs/scheduler/queue", ["rxjs/scheduler/QueueScheduler"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var QueueScheduler_1 = require("rxjs/scheduler/QueueScheduler");
  exports.queue = new QueueScheduler_1.QueueScheduler();
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/facade/exceptions", ["angular2/src/facade/exception_handler", "angular2/src/facade/exception_handler"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var exception_handler_1 = require("angular2/src/facade/exception_handler");
  var exception_handler_2 = require("angular2/src/facade/exception_handler");
  exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
  var BaseException = (function(_super) {
    __extends(BaseException, _super);
    function BaseException(message) {
      if (message === void 0) {
        message = "--";
      }
      _super.call(this, message);
      this.message = message;
      this.stack = (new Error(message)).stack;
    }
    BaseException.prototype.toString = function() {
      return this.message;
    };
    return BaseException;
  })(Error);
  exports.BaseException = BaseException;
  var WrappedException = (function(_super) {
    __extends(WrappedException, _super);
    function WrappedException(_wrapperMessage, _originalException, _originalStack, _context) {
      _super.call(this, _wrapperMessage);
      this._wrapperMessage = _wrapperMessage;
      this._originalException = _originalException;
      this._originalStack = _originalStack;
      this._context = _context;
      this._wrapperStack = (new Error(_wrapperMessage)).stack;
    }
    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
      get: function() {
        return this._wrapperMessage;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
      get: function() {
        return this._wrapperStack;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "originalException", {
      get: function() {
        return this._originalException;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "originalStack", {
      get: function() {
        return this._originalStack;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "context", {
      get: function() {
        return this._context;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "message", {
      get: function() {
        return exception_handler_1.ExceptionHandler.exceptionToString(this);
      },
      enumerable: true,
      configurable: true
    });
    WrappedException.prototype.toString = function() {
      return this.message;
    };
    return WrappedException;
  })(Error);
  exports.WrappedException = WrappedException;
  function makeTypeError(message) {
    return new TypeError(message);
  }
  exports.makeTypeError = makeTypeError;
  function unimplemented() {
    throw new BaseException('unimplemented');
  }
  exports.unimplemented = unimplemented;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/di/provider", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/reflection/reflection", "angular2/src/core/di/key", "angular2/src/core/di/metadata", "angular2/src/core/di/exceptions", "angular2/src/core/di/forward_ref"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var reflection_1 = require("angular2/src/core/reflection/reflection");
  var key_1 = require("angular2/src/core/di/key");
  var metadata_1 = require("angular2/src/core/di/metadata");
  var exceptions_2 = require("angular2/src/core/di/exceptions");
  var forward_ref_1 = require("angular2/src/core/di/forward_ref");
  var Dependency = (function() {
    function Dependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
      this.key = key;
      this.optional = optional;
      this.lowerBoundVisibility = lowerBoundVisibility;
      this.upperBoundVisibility = upperBoundVisibility;
      this.properties = properties;
    }
    Dependency.fromKey = function(key) {
      return new Dependency(key, false, null, null, []);
    };
    return Dependency;
  })();
  exports.Dependency = Dependency;
  var _EMPTY_LIST = lang_1.CONST_EXPR([]);
  var Provider = (function() {
    function Provider(token, _a) {
      var useClass = _a.useClass,
          useValue = _a.useValue,
          useExisting = _a.useExisting,
          useFactory = _a.useFactory,
          deps = _a.deps,
          multi = _a.multi;
      this.token = token;
      this.useClass = useClass;
      this.useValue = useValue;
      this.useExisting = useExisting;
      this.useFactory = useFactory;
      this.dependencies = deps;
      this._multi = multi;
    }
    Object.defineProperty(Provider.prototype, "multi", {
      get: function() {
        return lang_1.normalizeBool(this._multi);
      },
      enumerable: true,
      configurable: true
    });
    Provider = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object, Object])], Provider);
    return Provider;
  })();
  exports.Provider = Provider;
  var Binding = (function(_super) {
    __extends(Binding, _super);
    function Binding(token, _a) {
      var toClass = _a.toClass,
          toValue = _a.toValue,
          toAlias = _a.toAlias,
          toFactory = _a.toFactory,
          deps = _a.deps,
          multi = _a.multi;
      _super.call(this, token, {
        useClass: toClass,
        useValue: toValue,
        useExisting: toAlias,
        useFactory: toFactory,
        deps: deps,
        multi: multi
      });
    }
    Object.defineProperty(Binding.prototype, "toClass", {
      get: function() {
        return this.useClass;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "toAlias", {
      get: function() {
        return this.useExisting;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "toFactory", {
      get: function() {
        return this.useFactory;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "toValue", {
      get: function() {
        return this.useValue;
      },
      enumerable: true,
      configurable: true
    });
    Binding = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object, Object])], Binding);
    return Binding;
  })(Provider);
  exports.Binding = Binding;
  var ResolvedProvider_ = (function() {
    function ResolvedProvider_(key, resolvedFactories, multiProvider) {
      this.key = key;
      this.resolvedFactories = resolvedFactories;
      this.multiProvider = multiProvider;
    }
    Object.defineProperty(ResolvedProvider_.prototype, "resolvedFactory", {
      get: function() {
        return this.resolvedFactories[0];
      },
      enumerable: true,
      configurable: true
    });
    return ResolvedProvider_;
  })();
  exports.ResolvedProvider_ = ResolvedProvider_;
  var ResolvedFactory = (function() {
    function ResolvedFactory(factory, dependencies) {
      this.factory = factory;
      this.dependencies = dependencies;
    }
    return ResolvedFactory;
  })();
  exports.ResolvedFactory = ResolvedFactory;
  function bind(token) {
    return new ProviderBuilder(token);
  }
  exports.bind = bind;
  function provide(token, _a) {
    var useClass = _a.useClass,
        useValue = _a.useValue,
        useExisting = _a.useExisting,
        useFactory = _a.useFactory,
        deps = _a.deps,
        multi = _a.multi;
    return new Provider(token, {
      useClass: useClass,
      useValue: useValue,
      useExisting: useExisting,
      useFactory: useFactory,
      deps: deps,
      multi: multi
    });
  }
  exports.provide = provide;
  var ProviderBuilder = (function() {
    function ProviderBuilder(token) {
      this.token = token;
    }
    ProviderBuilder.prototype.toClass = function(type) {
      if (!lang_1.isType(type)) {
        throw new exceptions_1.BaseException("Trying to create a class provider but \"" + lang_1.stringify(type) + "\" is not a class!");
      }
      return new Provider(this.token, {useClass: type});
    };
    ProviderBuilder.prototype.toValue = function(value) {
      return new Provider(this.token, {useValue: value});
    };
    ProviderBuilder.prototype.toAlias = function(aliasToken) {
      if (lang_1.isBlank(aliasToken)) {
        throw new exceptions_1.BaseException("Can not alias " + lang_1.stringify(this.token) + " to a blank value!");
      }
      return new Provider(this.token, {useExisting: aliasToken});
    };
    ProviderBuilder.prototype.toFactory = function(factory, dependencies) {
      if (!lang_1.isFunction(factory)) {
        throw new exceptions_1.BaseException("Trying to create a factory provider but \"" + lang_1.stringify(factory) + "\" is not a function!");
      }
      return new Provider(this.token, {
        useFactory: factory,
        deps: dependencies
      });
    };
    return ProviderBuilder;
  })();
  exports.ProviderBuilder = ProviderBuilder;
  function resolveFactory(provider) {
    var factoryFn;
    var resolvedDeps;
    if (lang_1.isPresent(provider.useClass)) {
      var useClass = forward_ref_1.resolveForwardRef(provider.useClass);
      factoryFn = reflection_1.reflector.factory(useClass);
      resolvedDeps = _dependenciesFor(useClass);
    } else if (lang_1.isPresent(provider.useExisting)) {
      factoryFn = function(aliasInstance) {
        return aliasInstance;
      };
      resolvedDeps = [Dependency.fromKey(key_1.Key.get(provider.useExisting))];
    } else if (lang_1.isPresent(provider.useFactory)) {
      factoryFn = provider.useFactory;
      resolvedDeps = _constructDependencies(provider.useFactory, provider.dependencies);
    } else {
      factoryFn = function() {
        return provider.useValue;
      };
      resolvedDeps = _EMPTY_LIST;
    }
    return new ResolvedFactory(factoryFn, resolvedDeps);
  }
  exports.resolveFactory = resolveFactory;
  function resolveProvider(provider) {
    return new ResolvedProvider_(key_1.Key.get(provider.token), [resolveFactory(provider)], provider.multi);
  }
  exports.resolveProvider = resolveProvider;
  function resolveProviders(providers) {
    var normalized = _normalizeProviders(providers, []);
    var resolved = normalized.map(resolveProvider);
    return collection_1.MapWrapper.values(mergeResolvedProviders(resolved, new Map()));
  }
  exports.resolveProviders = resolveProviders;
  function mergeResolvedProviders(providers, normalizedProvidersMap) {
    for (var i = 0; i < providers.length; i++) {
      var provider = providers[i];
      var existing = normalizedProvidersMap.get(provider.key.id);
      if (lang_1.isPresent(existing)) {
        if (provider.multiProvider !== existing.multiProvider) {
          throw new exceptions_2.MixingMultiProvidersWithRegularProvidersError(existing, provider);
        }
        if (provider.multiProvider) {
          for (var j = 0; j < provider.resolvedFactories.length; j++) {
            existing.resolvedFactories.push(provider.resolvedFactories[j]);
          }
        } else {
          normalizedProvidersMap.set(provider.key.id, provider);
        }
      } else {
        var resolvedProvider;
        if (provider.multiProvider) {
          resolvedProvider = new ResolvedProvider_(provider.key, collection_1.ListWrapper.clone(provider.resolvedFactories), provider.multiProvider);
        } else {
          resolvedProvider = provider;
        }
        normalizedProvidersMap.set(provider.key.id, resolvedProvider);
      }
    }
    return normalizedProvidersMap;
  }
  exports.mergeResolvedProviders = mergeResolvedProviders;
  function _normalizeProviders(providers, res) {
    providers.forEach(function(b) {
      if (b instanceof lang_1.Type) {
        res.push(provide(b, {useClass: b}));
      } else if (b instanceof Provider) {
        res.push(b);
      } else if (b instanceof Array) {
        _normalizeProviders(b, res);
      } else if (b instanceof ProviderBuilder) {
        throw new exceptions_2.InvalidProviderError(b.token);
      } else {
        throw new exceptions_2.InvalidProviderError(b);
      }
    });
    return res;
  }
  function _constructDependencies(factoryFunction, dependencies) {
    if (lang_1.isBlank(dependencies)) {
      return _dependenciesFor(factoryFunction);
    } else {
      var params = dependencies.map(function(t) {
        return [t];
      });
      return dependencies.map(function(t) {
        return _extractToken(factoryFunction, t, params);
      });
    }
  }
  function _dependenciesFor(typeOrFunc) {
    var params = reflection_1.reflector.parameters(typeOrFunc);
    if (lang_1.isBlank(params))
      return [];
    if (params.some(lang_1.isBlank)) {
      throw new exceptions_2.NoAnnotationError(typeOrFunc, params);
    }
    return params.map(function(p) {
      return _extractToken(typeOrFunc, p, params);
    });
  }
  function _extractToken(typeOrFunc, metadata, params) {
    var depProps = [];
    var token = null;
    var optional = false;
    if (!lang_1.isArray(metadata)) {
      if (metadata instanceof metadata_1.InjectMetadata) {
        return _createDependency(metadata.token, optional, null, null, depProps);
      } else {
        return _createDependency(metadata, optional, null, null, depProps);
      }
    }
    var lowerBoundVisibility = null;
    var upperBoundVisibility = null;
    for (var i = 0; i < metadata.length; ++i) {
      var paramMetadata = metadata[i];
      if (paramMetadata instanceof lang_1.Type) {
        token = paramMetadata;
      } else if (paramMetadata instanceof metadata_1.InjectMetadata) {
        token = paramMetadata.token;
      } else if (paramMetadata instanceof metadata_1.OptionalMetadata) {
        optional = true;
      } else if (paramMetadata instanceof metadata_1.SelfMetadata) {
        upperBoundVisibility = paramMetadata;
      } else if (paramMetadata instanceof metadata_1.HostMetadata) {
        upperBoundVisibility = paramMetadata;
      } else if (paramMetadata instanceof metadata_1.SkipSelfMetadata) {
        lowerBoundVisibility = paramMetadata;
      } else if (paramMetadata instanceof metadata_1.DependencyMetadata) {
        if (lang_1.isPresent(paramMetadata.token)) {
          token = paramMetadata.token;
        }
        depProps.push(paramMetadata);
      }
    }
    token = forward_ref_1.resolveForwardRef(token);
    if (lang_1.isPresent(token)) {
      return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
    } else {
      throw new exceptions_2.NoAnnotationError(typeOrFunc, params);
    }
  }
  function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
    return new Dependency(key_1.Key.get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/zone/ng_zone", ["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/core/profile/profile"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var async_1 = require("angular2/src/facade/async");
  var profile_1 = require("angular2/src/core/profile/profile");
  var NgZoneError = (function() {
    function NgZoneError(error, stackTrace) {
      this.error = error;
      this.stackTrace = stackTrace;
    }
    return NgZoneError;
  })();
  exports.NgZoneError = NgZoneError;
  var NgZone = (function() {
    function NgZone(_a) {
      var enableLongStackTrace = _a.enableLongStackTrace;
      this._runScope = profile_1.wtfCreateScope("NgZone#run()");
      this._microtaskScope = profile_1.wtfCreateScope("NgZone#microtask()");
      this._pendingMicrotasks = 0;
      this._hasExecutedCodeInInnerZone = false;
      this._nestedRun = 0;
      this._inVmTurnDone = false;
      this._pendingTimeouts = [];
      if (lang_1.global.zone) {
        this._disabled = false;
        this._mountZone = lang_1.global.zone;
        this._innerZone = this._createInnerZone(this._mountZone, enableLongStackTrace);
      } else {
        this._disabled = true;
        this._mountZone = null;
      }
      this._onTurnStartEvents = new async_1.EventEmitter(false);
      this._onTurnDoneEvents = new async_1.EventEmitter(false);
      this._onEventDoneEvents = new async_1.EventEmitter(false);
      this._onErrorEvents = new async_1.EventEmitter(false);
    }
    NgZone.prototype.overrideOnTurnStart = function(onTurnStartHook) {
      this._onTurnStart = lang_1.normalizeBlank(onTurnStartHook);
    };
    Object.defineProperty(NgZone.prototype, "onTurnStart", {
      get: function() {
        return this._onTurnStartEvents;
      },
      enumerable: true,
      configurable: true
    });
    NgZone.prototype._notifyOnTurnStart = function(parentRun) {
      var _this = this;
      parentRun.call(this._innerZone, function() {
        _this._onTurnStartEvents.emit(null);
      });
    };
    NgZone.prototype.overrideOnTurnDone = function(onTurnDoneHook) {
      this._onTurnDone = lang_1.normalizeBlank(onTurnDoneHook);
    };
    Object.defineProperty(NgZone.prototype, "onTurnDone", {
      get: function() {
        return this._onTurnDoneEvents;
      },
      enumerable: true,
      configurable: true
    });
    NgZone.prototype._notifyOnTurnDone = function(parentRun) {
      var _this = this;
      parentRun.call(this._innerZone, function() {
        _this._onTurnDoneEvents.emit(null);
      });
    };
    NgZone.prototype.overrideOnEventDone = function(onEventDoneFn, opt_waitForAsync) {
      var _this = this;
      if (opt_waitForAsync === void 0) {
        opt_waitForAsync = false;
      }
      var normalizedOnEventDone = lang_1.normalizeBlank(onEventDoneFn);
      if (opt_waitForAsync) {
        this._onEventDone = function() {
          if (!_this._pendingTimeouts.length) {
            normalizedOnEventDone();
          }
        };
      } else {
        this._onEventDone = normalizedOnEventDone;
      }
    };
    Object.defineProperty(NgZone.prototype, "onEventDone", {
      get: function() {
        return this._onEventDoneEvents;
      },
      enumerable: true,
      configurable: true
    });
    NgZone.prototype._notifyOnEventDone = function() {
      var _this = this;
      this.runOutsideAngular(function() {
        _this._onEventDoneEvents.emit(null);
      });
    };
    Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
      get: function() {
        return this._pendingMicrotasks > 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingTimers", {
      get: function() {
        return this._pendingTimeouts.length > 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingAsyncTasks", {
      get: function() {
        return this.hasPendingMicrotasks || this.hasPendingTimers;
      },
      enumerable: true,
      configurable: true
    });
    NgZone.prototype.overrideOnErrorHandler = function(errorHandler) {
      this._onErrorHandler = lang_1.normalizeBlank(errorHandler);
    };
    Object.defineProperty(NgZone.prototype, "onError", {
      get: function() {
        return this._onErrorEvents;
      },
      enumerable: true,
      configurable: true
    });
    NgZone.prototype.run = function(fn) {
      if (this._disabled) {
        return fn();
      } else {
        var s = this._runScope();
        try {
          return this._innerZone.run(fn);
        } finally {
          profile_1.wtfLeave(s);
        }
      }
    };
    NgZone.prototype.runOutsideAngular = function(fn) {
      if (this._disabled) {
        return fn();
      } else {
        return this._mountZone.run(fn);
      }
    };
    NgZone.prototype._createInnerZone = function(zone, enableLongStackTrace) {
      var microtaskScope = this._microtaskScope;
      var ngZone = this;
      var errorHandling;
      if (enableLongStackTrace) {
        errorHandling = collection_1.StringMapWrapper.merge(Zone.longStackTraceZone, {onError: function(e) {
            ngZone._notifyOnError(this, e);
          }});
      } else {
        errorHandling = {onError: function(e) {
            ngZone._notifyOnError(this, e);
          }};
      }
      return zone.fork(errorHandling).fork({
        '$run': function(parentRun) {
          return function() {
            try {
              ngZone._nestedRun++;
              if (!ngZone._hasExecutedCodeInInnerZone) {
                ngZone._hasExecutedCodeInInnerZone = true;
                ngZone._notifyOnTurnStart(parentRun);
                if (ngZone._onTurnStart) {
                  parentRun.call(ngZone._innerZone, ngZone._onTurnStart);
                }
              }
              return parentRun.apply(this, arguments);
            } finally {
              ngZone._nestedRun--;
              if (ngZone._pendingMicrotasks == 0 && ngZone._nestedRun == 0 && !this._inVmTurnDone) {
                if (ngZone._hasExecutedCodeInInnerZone) {
                  try {
                    this._inVmTurnDone = true;
                    ngZone._notifyOnTurnDone(parentRun);
                    if (ngZone._onTurnDone) {
                      parentRun.call(ngZone._innerZone, ngZone._onTurnDone);
                    }
                  } finally {
                    this._inVmTurnDone = false;
                    ngZone._hasExecutedCodeInInnerZone = false;
                  }
                }
                if (ngZone._pendingMicrotasks === 0) {
                  ngZone._notifyOnEventDone();
                  if (lang_1.isPresent(ngZone._onEventDone)) {
                    ngZone.runOutsideAngular(ngZone._onEventDone);
                  }
                }
              }
            }
          };
        },
        '$scheduleMicrotask': function(parentScheduleMicrotask) {
          return function(fn) {
            ngZone._pendingMicrotasks++;
            var microtask = function() {
              var s = microtaskScope();
              try {
                fn();
              } finally {
                ngZone._pendingMicrotasks--;
                profile_1.wtfLeave(s);
              }
            };
            parentScheduleMicrotask.call(this, microtask);
          };
        },
        '$setTimeout': function(parentSetTimeout) {
          return function(fn, delay) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
              args[_i - 2] = arguments[_i];
            }
            var id;
            var cb = function() {
              fn();
              collection_1.ListWrapper.remove(ngZone._pendingTimeouts, id);
            };
            id = parentSetTimeout(cb, delay, args);
            ngZone._pendingTimeouts.push(id);
            return id;
          };
        },
        '$clearTimeout': function(parentClearTimeout) {
          return function(id) {
            parentClearTimeout(id);
            collection_1.ListWrapper.remove(ngZone._pendingTimeouts, id);
          };
        },
        _innerZone: true
      });
    };
    NgZone.prototype._notifyOnError = function(zone, e) {
      if (lang_1.isPresent(this._onErrorHandler) || async_1.ObservableWrapper.hasSubscribers(this._onErrorEvents)) {
        var trace = [lang_1.normalizeBlank(e.stack)];
        while (zone && zone.constructedAtException) {
          trace.push(zone.constructedAtException.get());
          zone = zone.parent;
        }
        if (async_1.ObservableWrapper.hasSubscribers(this._onErrorEvents)) {
          async_1.ObservableWrapper.callEmit(this._onErrorEvents, new NgZoneError(e, trace));
        }
        if (lang_1.isPresent(this._onErrorHandler)) {
          this._onErrorHandler(e, trace);
        }
      } else {
        console.log('## _notifyOnError ##');
        console.log(e.stack);
        throw e;
      }
    };
    return NgZone;
  })();
  exports.NgZone = NgZone;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/dynamic_change_detector", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/change_detection/abstract_change_detector", "angular2/src/core/change_detection/change_detection_util", "angular2/src/core/change_detection/constants", "angular2/src/core/change_detection/proto_record", "angular2/src/core/reflection/reflection", "angular2/src/facade/async"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var abstract_change_detector_1 = require("angular2/src/core/change_detection/abstract_change_detector");
  var change_detection_util_1 = require("angular2/src/core/change_detection/change_detection_util");
  var constants_1 = require("angular2/src/core/change_detection/constants");
  var proto_record_1 = require("angular2/src/core/change_detection/proto_record");
  var reflection_1 = require("angular2/src/core/reflection/reflection");
  var async_1 = require("angular2/src/facade/async");
  var DynamicChangeDetector = (function(_super) {
    __extends(DynamicChangeDetector, _super);
    function DynamicChangeDetector(id, numberOfPropertyProtoRecords, propertyBindingTargets, directiveIndices, strategy, _records, _eventBindings, _directiveRecords, _genConfig) {
      _super.call(this, id, numberOfPropertyProtoRecords, propertyBindingTargets, directiveIndices, strategy);
      this._records = _records;
      this._eventBindings = _eventBindings;
      this._directiveRecords = _directiveRecords;
      this._genConfig = _genConfig;
      var len = _records.length + 1;
      this.values = collection_1.ListWrapper.createFixedSize(len);
      this.localPipes = collection_1.ListWrapper.createFixedSize(len);
      this.prevContexts = collection_1.ListWrapper.createFixedSize(len);
      this.changes = collection_1.ListWrapper.createFixedSize(len);
      this.dehydrateDirectives(false);
    }
    DynamicChangeDetector.prototype.handleEventInternal = function(eventName, elIndex, locals) {
      var _this = this;
      var preventDefault = false;
      this._matchingEventBindings(eventName, elIndex).forEach(function(rec) {
        var res = _this._processEventBinding(rec, locals);
        if (res === false) {
          preventDefault = true;
        }
      });
      return preventDefault;
    };
    DynamicChangeDetector.prototype._processEventBinding = function(eb, locals) {
      var values = collection_1.ListWrapper.createFixedSize(eb.records.length);
      values[0] = this.values[0];
      for (var protoIdx = 0; protoIdx < eb.records.length; ++protoIdx) {
        var proto = eb.records[protoIdx];
        if (proto.isSkipRecord()) {
          protoIdx += this._computeSkipLength(protoIdx, proto, values);
        } else {
          var res = this._calculateCurrValue(proto, values, locals);
          if (proto.lastInBinding) {
            this._markPathAsCheckOnce(proto);
            return res;
          } else {
            this._writeSelf(proto, res, values);
          }
        }
      }
      throw new exceptions_1.BaseException("Cannot be reached");
    };
    DynamicChangeDetector.prototype._computeSkipLength = function(protoIndex, proto, values) {
      if (proto.mode === proto_record_1.RecordType.SkipRecords) {
        return proto.fixedArgs[0] - protoIndex - 1;
      }
      if (proto.mode === proto_record_1.RecordType.SkipRecordsIf) {
        var condition = this._readContext(proto, values);
        return condition ? proto.fixedArgs[0] - protoIndex - 1 : 0;
      }
      if (proto.mode === proto_record_1.RecordType.SkipRecordsIfNot) {
        var condition = this._readContext(proto, values);
        return condition ? 0 : proto.fixedArgs[0] - protoIndex - 1;
      }
      throw new exceptions_1.BaseException("Cannot be reached");
    };
    DynamicChangeDetector.prototype._markPathAsCheckOnce = function(proto) {
      if (!proto.bindingRecord.isDefaultChangeDetection()) {
        var dir = proto.bindingRecord.directiveRecord;
        this._getDetectorFor(dir.directiveIndex).markPathToRootAsCheckOnce();
      }
    };
    DynamicChangeDetector.prototype._matchingEventBindings = function(eventName, elIndex) {
      return this._eventBindings.filter(function(eb) {
        return eb.eventName == eventName && eb.elIndex === elIndex;
      });
    };
    DynamicChangeDetector.prototype.hydrateDirectives = function(dispatcher) {
      var _this = this;
      this.values[0] = this.context;
      this.dispatcher = dispatcher;
      if (this.strategy === constants_1.ChangeDetectionStrategy.OnPushObserve) {
        for (var i = 0; i < this.directiveIndices.length; ++i) {
          var index = this.directiveIndices[i];
          _super.prototype.observeDirective.call(this, this._getDirectiveFor(index), i);
        }
      }
      for (var i = 0; i < this._directiveRecords.length; ++i) {
        var r = this._directiveRecords[i];
        if (lang_1.isPresent(r.outputs)) {
          r.outputs.forEach(function(output) {
            var eventHandler = _this._createEventHandler(r.directiveIndex.elementIndex, output[1]);
            var directive = _this._getDirectiveFor(r.directiveIndex);
            var getter = reflection_1.reflector.getter(output[0]);
            async_1.ObservableWrapper.subscribe(getter(directive), eventHandler);
          });
        }
      }
    };
    DynamicChangeDetector.prototype._createEventHandler = function(boundElementIndex, eventName) {
      var _this = this;
      return function(event) {
        return _this.handleEvent(eventName, boundElementIndex, event);
      };
    };
    DynamicChangeDetector.prototype.dehydrateDirectives = function(destroyPipes) {
      if (destroyPipes) {
        this._destroyPipes();
        this._destroyDirectives();
      }
      this.values[0] = null;
      collection_1.ListWrapper.fill(this.values, change_detection_util_1.ChangeDetectionUtil.uninitialized, 1);
      collection_1.ListWrapper.fill(this.changes, false);
      collection_1.ListWrapper.fill(this.localPipes, null);
      collection_1.ListWrapper.fill(this.prevContexts, change_detection_util_1.ChangeDetectionUtil.uninitialized);
    };
    DynamicChangeDetector.prototype._destroyPipes = function() {
      for (var i = 0; i < this.localPipes.length; ++i) {
        if (lang_1.isPresent(this.localPipes[i])) {
          change_detection_util_1.ChangeDetectionUtil.callPipeOnDestroy(this.localPipes[i]);
        }
      }
    };
    DynamicChangeDetector.prototype._destroyDirectives = function() {
      for (var i = 0; i < this._directiveRecords.length; ++i) {
        var record = this._directiveRecords[i];
        if (record.callOnDestroy) {
          this._getDirectiveFor(record.directiveIndex).ngOnDestroy();
        }
      }
    };
    DynamicChangeDetector.prototype.checkNoChanges = function() {
      this.runDetectChanges(true);
    };
    DynamicChangeDetector.prototype.detectChangesInRecordsInternal = function(throwOnChange) {
      var protos = this._records;
      var changes = null;
      var isChanged = false;
      for (var protoIdx = 0; protoIdx < protos.length; ++protoIdx) {
        var proto = protos[protoIdx];
        var bindingRecord = proto.bindingRecord;
        var directiveRecord = bindingRecord.directiveRecord;
        if (this._firstInBinding(proto)) {
          this.propertyBindingIndex = proto.propertyBindingIndex;
        }
        if (proto.isLifeCycleRecord()) {
          if (proto.name === "DoCheck" && !throwOnChange) {
            this._getDirectiveFor(directiveRecord.directiveIndex).ngDoCheck();
          } else if (proto.name === "OnInit" && !throwOnChange && this.state == constants_1.ChangeDetectorState.NeverChecked) {
            this._getDirectiveFor(directiveRecord.directiveIndex).ngOnInit();
          } else if (proto.name === "OnChanges" && lang_1.isPresent(changes) && !throwOnChange) {
            this._getDirectiveFor(directiveRecord.directiveIndex).ngOnChanges(changes);
          }
        } else if (proto.isSkipRecord()) {
          protoIdx += this._computeSkipLength(protoIdx, proto, this.values);
        } else {
          var change = this._check(proto, throwOnChange, this.values, this.locals);
          if (lang_1.isPresent(change)) {
            this._updateDirectiveOrElement(change, bindingRecord);
            isChanged = true;
            changes = this._addChange(bindingRecord, change, changes);
          }
        }
        if (proto.lastInDirective) {
          changes = null;
          if (isChanged && !bindingRecord.isDefaultChangeDetection()) {
            this._getDetectorFor(directiveRecord.directiveIndex).markAsCheckOnce();
          }
          isChanged = false;
        }
      }
    };
    DynamicChangeDetector.prototype._firstInBinding = function(r) {
      var prev = change_detection_util_1.ChangeDetectionUtil.protoByIndex(this._records, r.selfIndex - 1);
      return lang_1.isBlank(prev) || prev.bindingRecord !== r.bindingRecord;
    };
    DynamicChangeDetector.prototype.afterContentLifecycleCallbacksInternal = function() {
      var dirs = this._directiveRecords;
      for (var i = dirs.length - 1; i >= 0; --i) {
        var dir = dirs[i];
        if (dir.callAfterContentInit && this.state == constants_1.ChangeDetectorState.NeverChecked) {
          this._getDirectiveFor(dir.directiveIndex).ngAfterContentInit();
        }
        if (dir.callAfterContentChecked) {
          this._getDirectiveFor(dir.directiveIndex).ngAfterContentChecked();
        }
      }
    };
    DynamicChangeDetector.prototype.afterViewLifecycleCallbacksInternal = function() {
      var dirs = this._directiveRecords;
      for (var i = dirs.length - 1; i >= 0; --i) {
        var dir = dirs[i];
        if (dir.callAfterViewInit && this.state == constants_1.ChangeDetectorState.NeverChecked) {
          this._getDirectiveFor(dir.directiveIndex).ngAfterViewInit();
        }
        if (dir.callAfterViewChecked) {
          this._getDirectiveFor(dir.directiveIndex).ngAfterViewChecked();
        }
      }
    };
    DynamicChangeDetector.prototype._updateDirectiveOrElement = function(change, bindingRecord) {
      if (lang_1.isBlank(bindingRecord.directiveRecord)) {
        _super.prototype.notifyDispatcher.call(this, change.currentValue);
      } else {
        var directiveIndex = bindingRecord.directiveRecord.directiveIndex;
        bindingRecord.setter(this._getDirectiveFor(directiveIndex), change.currentValue);
      }
      if (this._genConfig.logBindingUpdate) {
        _super.prototype.logBindingUpdate.call(this, change.currentValue);
      }
    };
    DynamicChangeDetector.prototype._addChange = function(bindingRecord, change, changes) {
      if (bindingRecord.callOnChanges()) {
        return _super.prototype.addChange.call(this, changes, change.previousValue, change.currentValue);
      } else {
        return changes;
      }
    };
    DynamicChangeDetector.prototype._getDirectiveFor = function(directiveIndex) {
      return this.dispatcher.getDirectiveFor(directiveIndex);
    };
    DynamicChangeDetector.prototype._getDetectorFor = function(directiveIndex) {
      return this.dispatcher.getDetectorFor(directiveIndex);
    };
    DynamicChangeDetector.prototype._check = function(proto, throwOnChange, values, locals) {
      if (proto.isPipeRecord()) {
        return this._pipeCheck(proto, throwOnChange, values);
      } else {
        return this._referenceCheck(proto, throwOnChange, values, locals);
      }
    };
    DynamicChangeDetector.prototype._referenceCheck = function(proto, throwOnChange, values, locals) {
      if (this._pureFuncAndArgsDidNotChange(proto)) {
        this._setChanged(proto, false);
        return null;
      }
      var currValue = this._calculateCurrValue(proto, values, locals);
      if (this.strategy === constants_1.ChangeDetectionStrategy.OnPushObserve) {
        _super.prototype.observeValue.call(this, currValue, proto.selfIndex);
      }
      if (proto.shouldBeChecked()) {
        var prevValue = this._readSelf(proto, values);
        if (change_detection_util_1.ChangeDetectionUtil.looseNotIdentical(prevValue, currValue)) {
          if (proto.lastInBinding) {
            var change = change_detection_util_1.ChangeDetectionUtil.simpleChange(prevValue, currValue);
            if (throwOnChange)
              this.throwOnChangeError(prevValue, currValue);
            this._writeSelf(proto, currValue, values);
            this._setChanged(proto, true);
            return change;
          } else {
            this._writeSelf(proto, currValue, values);
            this._setChanged(proto, true);
            return null;
          }
        } else {
          this._setChanged(proto, false);
          return null;
        }
      } else {
        this._writeSelf(proto, currValue, values);
        this._setChanged(proto, true);
        return null;
      }
    };
    DynamicChangeDetector.prototype._calculateCurrValue = function(proto, values, locals) {
      switch (proto.mode) {
        case proto_record_1.RecordType.Self:
          return this._readContext(proto, values);
        case proto_record_1.RecordType.Const:
          return proto.funcOrValue;
        case proto_record_1.RecordType.PropertyRead:
          var context = this._readContext(proto, values);
          return proto.funcOrValue(context);
        case proto_record_1.RecordType.SafeProperty:
          var context = this._readContext(proto, values);
          return lang_1.isBlank(context) ? null : proto.funcOrValue(context);
        case proto_record_1.RecordType.PropertyWrite:
          var context = this._readContext(proto, values);
          var value = this._readArgs(proto, values)[0];
          proto.funcOrValue(context, value);
          return value;
        case proto_record_1.RecordType.KeyedWrite:
          var context = this._readContext(proto, values);
          var key = this._readArgs(proto, values)[0];
          var value = this._readArgs(proto, values)[1];
          context[key] = value;
          return value;
        case proto_record_1.RecordType.Local:
          return locals.get(proto.name);
        case proto_record_1.RecordType.InvokeMethod:
          var context = this._readContext(proto, values);
          var args = this._readArgs(proto, values);
          return proto.funcOrValue(context, args);
        case proto_record_1.RecordType.SafeMethodInvoke:
          var context = this._readContext(proto, values);
          if (lang_1.isBlank(context)) {
            return null;
          }
          var args = this._readArgs(proto, values);
          return proto.funcOrValue(context, args);
        case proto_record_1.RecordType.KeyedRead:
          var arg = this._readArgs(proto, values)[0];
          return this._readContext(proto, values)[arg];
        case proto_record_1.RecordType.Chain:
          var args = this._readArgs(proto, values);
          return args[args.length - 1];
        case proto_record_1.RecordType.InvokeClosure:
          return lang_1.FunctionWrapper.apply(this._readContext(proto, values), this._readArgs(proto, values));
        case proto_record_1.RecordType.Interpolate:
        case proto_record_1.RecordType.PrimitiveOp:
        case proto_record_1.RecordType.CollectionLiteral:
          return lang_1.FunctionWrapper.apply(proto.funcOrValue, this._readArgs(proto, values));
        default:
          throw new exceptions_1.BaseException("Unknown operation " + proto.mode);
      }
    };
    DynamicChangeDetector.prototype._pipeCheck = function(proto, throwOnChange, values) {
      var context = this._readContext(proto, values);
      var selectedPipe = this._pipeFor(proto, context);
      if (!selectedPipe.pure || this._argsOrContextChanged(proto)) {
        var args = this._readArgs(proto, values);
        var currValue = selectedPipe.pipe.transform(context, args);
        if (proto.shouldBeChecked()) {
          var prevValue = this._readSelf(proto, values);
          if (change_detection_util_1.ChangeDetectionUtil.looseNotIdentical(prevValue, currValue)) {
            currValue = change_detection_util_1.ChangeDetectionUtil.unwrapValue(currValue);
            if (proto.lastInBinding) {
              var change = change_detection_util_1.ChangeDetectionUtil.simpleChange(prevValue, currValue);
              if (throwOnChange)
                this.throwOnChangeError(prevValue, currValue);
              this._writeSelf(proto, currValue, values);
              this._setChanged(proto, true);
              return change;
            } else {
              this._writeSelf(proto, currValue, values);
              this._setChanged(proto, true);
              return null;
            }
          } else {
            this._setChanged(proto, false);
            return null;
          }
        } else {
          this._writeSelf(proto, currValue, values);
          this._setChanged(proto, true);
          return null;
        }
      }
    };
    DynamicChangeDetector.prototype._pipeFor = function(proto, context) {
      var storedPipe = this._readPipe(proto);
      if (lang_1.isPresent(storedPipe))
        return storedPipe;
      var pipe = this.pipes.get(proto.name);
      this._writePipe(proto, pipe);
      return pipe;
    };
    DynamicChangeDetector.prototype._readContext = function(proto, values) {
      if (proto.contextIndex == -1) {
        return this._getDirectiveFor(proto.directiveIndex);
      }
      return values[proto.contextIndex];
    };
    DynamicChangeDetector.prototype._readSelf = function(proto, values) {
      return values[proto.selfIndex];
    };
    DynamicChangeDetector.prototype._writeSelf = function(proto, value, values) {
      values[proto.selfIndex] = value;
    };
    DynamicChangeDetector.prototype._readPipe = function(proto) {
      return this.localPipes[proto.selfIndex];
    };
    DynamicChangeDetector.prototype._writePipe = function(proto, value) {
      this.localPipes[proto.selfIndex] = value;
    };
    DynamicChangeDetector.prototype._setChanged = function(proto, value) {
      if (proto.argumentToPureFunction)
        this.changes[proto.selfIndex] = value;
    };
    DynamicChangeDetector.prototype._pureFuncAndArgsDidNotChange = function(proto) {
      return proto.isPureFunction() && !this._argsChanged(proto);
    };
    DynamicChangeDetector.prototype._argsChanged = function(proto) {
      var args = proto.args;
      for (var i = 0; i < args.length; ++i) {
        if (this.changes[args[i]]) {
          return true;
        }
      }
      return false;
    };
    DynamicChangeDetector.prototype._argsOrContextChanged = function(proto) {
      return this._argsChanged(proto) || this.changes[proto.contextIndex];
    };
    DynamicChangeDetector.prototype._readArgs = function(proto, values) {
      var res = collection_1.ListWrapper.createFixedSize(proto.args.length);
      var args = proto.args;
      for (var i = 0; i < args.length; ++i) {
        res[i] = values[args[i]];
      }
      return res;
    };
    return DynamicChangeDetector;
  })(abstract_change_detector_1.AbstractChangeDetector);
  exports.DynamicChangeDetector = DynamicChangeDetector;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/change_detection_jit_generator", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/change_detection/abstract_change_detector", "angular2/src/core/change_detection/change_detection_util", "angular2/src/core/change_detection/proto_record", "angular2/src/core/change_detection/codegen_name_util", "angular2/src/core/change_detection/codegen_logic_util", "angular2/src/core/change_detection/codegen_facade", "angular2/src/core/change_detection/constants", "angular2/src/core/change_detection/proto_change_detector"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var abstract_change_detector_1 = require("angular2/src/core/change_detection/abstract_change_detector");
  var change_detection_util_1 = require("angular2/src/core/change_detection/change_detection_util");
  var proto_record_1 = require("angular2/src/core/change_detection/proto_record");
  var codegen_name_util_1 = require("angular2/src/core/change_detection/codegen_name_util");
  var codegen_logic_util_1 = require("angular2/src/core/change_detection/codegen_logic_util");
  var codegen_facade_1 = require("angular2/src/core/change_detection/codegen_facade");
  var constants_1 = require("angular2/src/core/change_detection/constants");
  var proto_change_detector_1 = require("angular2/src/core/change_detection/proto_change_detector");
  var IS_CHANGED_LOCAL = "isChanged";
  var CHANGES_LOCAL = "changes";
  var ChangeDetectorJITGenerator = (function() {
    function ChangeDetectorJITGenerator(definition, changeDetectionUtilVarName, abstractChangeDetectorVarName, changeDetectorStateVarName) {
      this.changeDetectionUtilVarName = changeDetectionUtilVarName;
      this.abstractChangeDetectorVarName = abstractChangeDetectorVarName;
      this.changeDetectorStateVarName = changeDetectorStateVarName;
      var propertyBindingRecords = proto_change_detector_1.createPropertyRecords(definition);
      var eventBindingRecords = proto_change_detector_1.createEventRecords(definition);
      var propertyBindingTargets = definition.bindingRecords.map(function(b) {
        return b.target;
      });
      this.id = definition.id;
      this.changeDetectionStrategy = definition.strategy;
      this.genConfig = definition.genConfig;
      this.records = propertyBindingRecords;
      this.propertyBindingTargets = propertyBindingTargets;
      this.eventBindings = eventBindingRecords;
      this.directiveRecords = definition.directiveRecords;
      this._names = new codegen_name_util_1.CodegenNameUtil(this.records, this.eventBindings, this.directiveRecords, this.changeDetectionUtilVarName);
      this._logic = new codegen_logic_util_1.CodegenLogicUtil(this._names, this.changeDetectionUtilVarName, this.changeDetectorStateVarName, this.changeDetectionStrategy);
      this.typeName = codegen_name_util_1.sanitizeName("ChangeDetector_" + this.id);
    }
    ChangeDetectorJITGenerator.prototype.generate = function() {
      var factorySource = "\n      " + this.generateSource() + "\n      return function() {\n        return new " + this.typeName + "();\n      }\n    ";
      return new Function(this.abstractChangeDetectorVarName, this.changeDetectionUtilVarName, this.changeDetectorStateVarName, factorySource)(abstract_change_detector_1.AbstractChangeDetector, change_detection_util_1.ChangeDetectionUtil, constants_1.ChangeDetectorState);
    };
    ChangeDetectorJITGenerator.prototype.generateSource = function() {
      return "\n      var " + this.typeName + " = function " + this.typeName + "() {\n        " + this.abstractChangeDetectorVarName + ".call(\n            this, " + JSON.stringify(this.id) + ", " + this.records.length + ",\n            " + this.typeName + ".gen_propertyBindingTargets, " + this.typeName + ".gen_directiveIndices,\n            " + codegen_facade_1.codify(this.changeDetectionStrategy) + ");\n        this.dehydrateDirectives(false);\n      }\n\n      " + this.typeName + ".prototype = Object.create(" + this.abstractChangeDetectorVarName + ".prototype);\n\n      " + this.typeName + ".prototype.detectChangesInRecordsInternal = function(throwOnChange) {\n        " + this._names.genInitLocals() + "\n        var " + IS_CHANGED_LOCAL + " = false;\n        var " + CHANGES_LOCAL + " = null;\n\n        " + this._genAllRecords(this.records) + "\n      }\n\n      " + this._maybeGenHandleEventInternal() + "\n\n      " + this._maybeGenAfterContentLifecycleCallbacks() + "\n\n      " + this._maybeGenAfterViewLifecycleCallbacks() + "\n\n      " + this._maybeGenHydrateDirectives() + "\n\n      " + this._maybeGenDehydrateDirectives() + "\n\n      " + this._genPropertyBindingTargets() + "\n\n      " + this._genDirectiveIndices() + "\n    ";
    };
    ChangeDetectorJITGenerator.prototype._genPropertyBindingTargets = function() {
      var targets = this._logic.genPropertyBindingTargets(this.propertyBindingTargets, this.genConfig.genDebugInfo);
      return this.typeName + ".gen_propertyBindingTargets = " + targets + ";";
    };
    ChangeDetectorJITGenerator.prototype._genDirectiveIndices = function() {
      var indices = this._logic.genDirectiveIndices(this.directiveRecords);
      return this.typeName + ".gen_directiveIndices = " + indices + ";";
    };
    ChangeDetectorJITGenerator.prototype._maybeGenHandleEventInternal = function() {
      var _this = this;
      if (this.eventBindings.length > 0) {
        var handlers = this.eventBindings.map(function(eb) {
          return _this._genEventBinding(eb);
        }).join("\n");
        return "\n        " + this.typeName + ".prototype.handleEventInternal = function(eventName, elIndex, locals) {\n          var " + this._names.getPreventDefaultAccesor() + " = false;\n          " + this._names.genInitEventLocals() + "\n          " + handlers + "\n          return " + this._names.getPreventDefaultAccesor() + ";\n        }\n      ";
      } else {
        return '';
      }
    };
    ChangeDetectorJITGenerator.prototype._genEventBinding = function(eb) {
      var _this = this;
      var codes = [];
      this._endOfBlockIdxs = [];
      collection_1.ListWrapper.forEachWithIndex(eb.records, function(r, i) {
        var code;
        if (r.isConditionalSkipRecord()) {
          code = _this._genConditionalSkip(r, _this._names.getEventLocalName(eb, i));
        } else if (r.isUnconditionalSkipRecord()) {
          code = _this._genUnconditionalSkip(r);
        } else {
          code = _this._genEventBindingEval(eb, r);
        }
        code += _this._genEndOfSkipBlock(i);
        codes.push(code);
      });
      return "\n    if (eventName === \"" + eb.eventName + "\" && elIndex === " + eb.elIndex + ") {\n      " + codes.join("\n") + "\n    }";
    };
    ChangeDetectorJITGenerator.prototype._genEventBindingEval = function(eb, r) {
      if (r.lastInBinding) {
        var evalRecord = this._logic.genEventBindingEvalValue(eb, r);
        var markPath = this._genMarkPathToRootAsCheckOnce(r);
        var prevDefault = this._genUpdatePreventDefault(eb, r);
        return evalRecord + "\n" + markPath + "\n" + prevDefault;
      } else {
        return this._logic.genEventBindingEvalValue(eb, r);
      }
    };
    ChangeDetectorJITGenerator.prototype._genMarkPathToRootAsCheckOnce = function(r) {
      var br = r.bindingRecord;
      if (br.isDefaultChangeDetection()) {
        return "";
      } else {
        return this._names.getDetectorName(br.directiveRecord.directiveIndex) + ".markPathToRootAsCheckOnce();";
      }
    };
    ChangeDetectorJITGenerator.prototype._genUpdatePreventDefault = function(eb, r) {
      var local = this._names.getEventLocalName(eb, r.selfIndex);
      return "if (" + local + " === false) { " + this._names.getPreventDefaultAccesor() + " = true};";
    };
    ChangeDetectorJITGenerator.prototype._maybeGenDehydrateDirectives = function() {
      var destroyPipesCode = this._names.genPipeOnDestroy();
      var destroyDirectivesCode = this._logic.genDirectivesOnDestroy(this.directiveRecords);
      var dehydrateFieldsCode = this._names.genDehydrateFields();
      if (!destroyPipesCode && !destroyDirectivesCode && !dehydrateFieldsCode)
        return '';
      return this.typeName + ".prototype.dehydrateDirectives = function(destroyPipes) {\n        if (destroyPipes) {\n          " + destroyPipesCode + "\n          " + destroyDirectivesCode + "\n        }\n        " + dehydrateFieldsCode + "\n    }";
    };
    ChangeDetectorJITGenerator.prototype._maybeGenHydrateDirectives = function() {
      var hydrateDirectivesCode = this._logic.genHydrateDirectives(this.directiveRecords);
      var hydrateDetectorsCode = this._logic.genHydrateDetectors(this.directiveRecords);
      if (!hydrateDirectivesCode && !hydrateDetectorsCode)
        return '';
      return this.typeName + ".prototype.hydrateDirectives = function(directives) {\n      " + hydrateDirectivesCode + "\n      " + hydrateDetectorsCode + "\n    }";
    };
    ChangeDetectorJITGenerator.prototype._maybeGenAfterContentLifecycleCallbacks = function() {
      var notifications = this._logic.genContentLifecycleCallbacks(this.directiveRecords);
      if (notifications.length > 0) {
        var directiveNotifications = notifications.join("\n");
        return "\n        " + this.typeName + ".prototype.afterContentLifecycleCallbacksInternal = function() {\n          " + directiveNotifications + "\n        }\n      ";
      } else {
        return '';
      }
    };
    ChangeDetectorJITGenerator.prototype._maybeGenAfterViewLifecycleCallbacks = function() {
      var notifications = this._logic.genViewLifecycleCallbacks(this.directiveRecords);
      if (notifications.length > 0) {
        var directiveNotifications = notifications.join("\n");
        return "\n        " + this.typeName + ".prototype.afterViewLifecycleCallbacksInternal = function() {\n          " + directiveNotifications + "\n        }\n      ";
      } else {
        return '';
      }
    };
    ChangeDetectorJITGenerator.prototype._genAllRecords = function(rs) {
      var codes = [];
      this._endOfBlockIdxs = [];
      for (var i = 0; i < rs.length; i++) {
        var code = void 0;
        var r = rs[i];
        if (r.isLifeCycleRecord()) {
          code = this._genDirectiveLifecycle(r);
        } else if (r.isPipeRecord()) {
          code = this._genPipeCheck(r);
        } else if (r.isConditionalSkipRecord()) {
          code = this._genConditionalSkip(r, this._names.getLocalName(r.contextIndex));
        } else if (r.isUnconditionalSkipRecord()) {
          code = this._genUnconditionalSkip(r);
        } else {
          code = this._genReferenceCheck(r);
        }
        code = "\n        " + this._maybeFirstInBinding(r) + "\n        " + code + "\n        " + this._maybeGenLastInDirective(r) + "\n        " + this._genEndOfSkipBlock(i) + "\n      ";
        codes.push(code);
      }
      return codes.join("\n");
    };
    ChangeDetectorJITGenerator.prototype._genConditionalSkip = function(r, condition) {
      var maybeNegate = r.mode === proto_record_1.RecordType.SkipRecordsIf ? '!' : '';
      this._endOfBlockIdxs.push(r.fixedArgs[0] - 1);
      return "if (" + maybeNegate + condition + ") {";
    };
    ChangeDetectorJITGenerator.prototype._genUnconditionalSkip = function(r) {
      this._endOfBlockIdxs.pop();
      this._endOfBlockIdxs.push(r.fixedArgs[0] - 1);
      return "} else {";
    };
    ChangeDetectorJITGenerator.prototype._genEndOfSkipBlock = function(protoIndex) {
      if (!collection_1.ListWrapper.isEmpty(this._endOfBlockIdxs)) {
        var endOfBlock = collection_1.ListWrapper.last(this._endOfBlockIdxs);
        if (protoIndex === endOfBlock) {
          this._endOfBlockIdxs.pop();
          return '}';
        }
      }
      return '';
    };
    ChangeDetectorJITGenerator.prototype._genDirectiveLifecycle = function(r) {
      if (r.name === "DoCheck") {
        return this._genOnCheck(r);
      } else if (r.name === "OnInit") {
        return this._genOnInit(r);
      } else if (r.name === "OnChanges") {
        return this._genOnChange(r);
      } else {
        throw new exceptions_1.BaseException("Unknown lifecycle event '" + r.name + "'");
      }
    };
    ChangeDetectorJITGenerator.prototype._genPipeCheck = function(r) {
      var _this = this;
      var context = this._names.getLocalName(r.contextIndex);
      var argString = r.args.map(function(arg) {
        return _this._names.getLocalName(arg);
      }).join(", ");
      var oldValue = this._names.getFieldName(r.selfIndex);
      var newValue = this._names.getLocalName(r.selfIndex);
      var pipe = this._names.getPipeName(r.selfIndex);
      var pipeName = r.name;
      var init = "\n      if (" + pipe + " === " + this.changeDetectionUtilVarName + ".uninitialized) {\n        " + pipe + " = " + this._names.getPipesAccessorName() + ".get('" + pipeName + "');\n      }\n    ";
      var read = newValue + " = " + pipe + ".pipe.transform(" + context + ", [" + argString + "]);";
      var contexOrArgCheck = r.args.map(function(a) {
        return _this._names.getChangeName(a);
      });
      contexOrArgCheck.push(this._names.getChangeName(r.contextIndex));
      var condition = "!" + pipe + ".pure || (" + contexOrArgCheck.join(" || ") + ")";
      var check = "\n      if (" + this.changeDetectionUtilVarName + ".looseNotIdentical(" + oldValue + ", " + newValue + ")) {\n        " + newValue + " = " + this.changeDetectionUtilVarName + ".unwrapValue(" + newValue + ")\n        " + this._genChangeMarker(r) + "\n        " + this._genUpdateDirectiveOrElement(r) + "\n        " + this._genAddToChanges(r) + "\n        " + oldValue + " = " + newValue + ";\n      }\n    ";
      var genCode = r.shouldBeChecked() ? "" + read + check : read;
      if (r.isUsedByOtherRecord()) {
        return init + " if (" + condition + ") { " + genCode + " } else { " + newValue + " = " + oldValue + "; }";
      } else {
        return init + " if (" + condition + ") { " + genCode + " }";
      }
    };
    ChangeDetectorJITGenerator.prototype._genReferenceCheck = function(r) {
      var _this = this;
      var oldValue = this._names.getFieldName(r.selfIndex);
      var newValue = this._names.getLocalName(r.selfIndex);
      var read = "\n      " + this._logic.genPropertyBindingEvalValue(r) + "\n    ";
      var check = "\n      if (" + this.changeDetectionUtilVarName + ".looseNotIdentical(" + oldValue + ", " + newValue + ")) {\n        " + this._genChangeMarker(r) + "\n        " + this._genUpdateDirectiveOrElement(r) + "\n        " + this._genAddToChanges(r) + "\n        " + oldValue + " = " + newValue + ";\n      }\n    ";
      var genCode = r.shouldBeChecked() ? "" + read + check : read;
      if (r.isPureFunction()) {
        var condition = r.args.map(function(a) {
          return _this._names.getChangeName(a);
        }).join(" || ");
        if (r.isUsedByOtherRecord()) {
          return "if (" + condition + ") { " + genCode + " } else { " + newValue + " = " + oldValue + "; }";
        } else {
          return "if (" + condition + ") { " + genCode + " }";
        }
      } else {
        return genCode;
      }
    };
    ChangeDetectorJITGenerator.prototype._genChangeMarker = function(r) {
      return r.argumentToPureFunction ? this._names.getChangeName(r.selfIndex) + " = true" : "";
    };
    ChangeDetectorJITGenerator.prototype._genUpdateDirectiveOrElement = function(r) {
      if (!r.lastInBinding)
        return "";
      var newValue = this._names.getLocalName(r.selfIndex);
      var oldValue = this._names.getFieldName(r.selfIndex);
      var notifyDebug = this.genConfig.logBindingUpdate ? "this.logBindingUpdate(" + newValue + ");" : "";
      var br = r.bindingRecord;
      if (br.target.isDirective()) {
        var directiveProperty = this._names.getDirectiveName(br.directiveRecord.directiveIndex) + "." + br.target.name;
        return "\n        " + this._genThrowOnChangeCheck(oldValue, newValue) + "\n        " + directiveProperty + " = " + newValue + ";\n        " + notifyDebug + "\n        " + IS_CHANGED_LOCAL + " = true;\n      ";
      } else {
        return "\n        " + this._genThrowOnChangeCheck(oldValue, newValue) + "\n        this.notifyDispatcher(" + newValue + ");\n        " + notifyDebug + "\n      ";
      }
    };
    ChangeDetectorJITGenerator.prototype._genThrowOnChangeCheck = function(oldValue, newValue) {
      if (lang_1.assertionsEnabled()) {
        return "\n        if(throwOnChange) {\n          this.throwOnChangeError(" + oldValue + ", " + newValue + ");\n        }\n        ";
      } else {
        return '';
      }
    };
    ChangeDetectorJITGenerator.prototype._genAddToChanges = function(r) {
      var newValue = this._names.getLocalName(r.selfIndex);
      var oldValue = this._names.getFieldName(r.selfIndex);
      if (!r.bindingRecord.callOnChanges())
        return "";
      return CHANGES_LOCAL + " = this.addChange(" + CHANGES_LOCAL + ", " + oldValue + ", " + newValue + ");";
    };
    ChangeDetectorJITGenerator.prototype._maybeFirstInBinding = function(r) {
      var prev = change_detection_util_1.ChangeDetectionUtil.protoByIndex(this.records, r.selfIndex - 1);
      var firstInBinding = lang_1.isBlank(prev) || prev.bindingRecord !== r.bindingRecord;
      return firstInBinding && !r.bindingRecord.isDirectiveLifecycle() ? this._names.getPropertyBindingIndex() + " = " + r.propertyBindingIndex + ";" : '';
    };
    ChangeDetectorJITGenerator.prototype._maybeGenLastInDirective = function(r) {
      if (!r.lastInDirective)
        return "";
      return "\n      " + CHANGES_LOCAL + " = null;\n      " + this._genNotifyOnPushDetectors(r) + "\n      " + IS_CHANGED_LOCAL + " = false;\n    ";
    };
    ChangeDetectorJITGenerator.prototype._genOnCheck = function(r) {
      var br = r.bindingRecord;
      return "if (!throwOnChange) " + this._names.getDirectiveName(br.directiveRecord.directiveIndex) + ".ngDoCheck();";
    };
    ChangeDetectorJITGenerator.prototype._genOnInit = function(r) {
      var br = r.bindingRecord;
      return "if (!throwOnChange && " + this._names.getStateName() + " === " + this.changeDetectorStateVarName + ".NeverChecked) " + this._names.getDirectiveName(br.directiveRecord.directiveIndex) + ".ngOnInit();";
    };
    ChangeDetectorJITGenerator.prototype._genOnChange = function(r) {
      var br = r.bindingRecord;
      return "if (!throwOnChange && " + CHANGES_LOCAL + ") " + this._names.getDirectiveName(br.directiveRecord.directiveIndex) + ".ngOnChanges(" + CHANGES_LOCAL + ");";
    };
    ChangeDetectorJITGenerator.prototype._genNotifyOnPushDetectors = function(r) {
      var br = r.bindingRecord;
      if (!r.lastInDirective || br.isDefaultChangeDetection())
        return "";
      var retVal = "\n      if(" + IS_CHANGED_LOCAL + ") {\n        " + this._names.getDetectorName(br.directiveRecord.directiveIndex) + ".markAsCheckOnce();\n      }\n    ";
      return retVal;
    };
    return ChangeDetectorJITGenerator;
  })();
  exports.ChangeDetectorJITGenerator = ChangeDetectorJITGenerator;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/element", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/di", "angular2/src/core/di/provider", "angular2/src/core/di/injector", "angular2/src/core/di/provider", "angular2/src/core/metadata/di", "angular2/src/core/linker/view_type", "angular2/src/core/linker/element_ref", "angular2/src/core/linker/view_container_ref", "angular2/src/core/linker/element_ref", "angular2/src/core/render/api", "angular2/src/core/linker/template_ref", "angular2/src/core/metadata/directives", "angular2/src/core/change_detection/change_detection", "angular2/src/core/linker/query_list", "angular2/src/core/reflection/reflection", "angular2/src/core/pipes/pipe_provider", "angular2/src/core/linker/view_container_ref"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var di_1 = require("angular2/src/core/di");
  var provider_1 = require("angular2/src/core/di/provider");
  var injector_1 = require("angular2/src/core/di/injector");
  var provider_2 = require("angular2/src/core/di/provider");
  var di_2 = require("angular2/src/core/metadata/di");
  var view_type_1 = require("angular2/src/core/linker/view_type");
  var element_ref_1 = require("angular2/src/core/linker/element_ref");
  var view_container_ref_1 = require("angular2/src/core/linker/view_container_ref");
  var element_ref_2 = require("angular2/src/core/linker/element_ref");
  var api_1 = require("angular2/src/core/render/api");
  var template_ref_1 = require("angular2/src/core/linker/template_ref");
  var directives_1 = require("angular2/src/core/metadata/directives");
  var change_detection_1 = require("angular2/src/core/change_detection/change_detection");
  var query_list_1 = require("angular2/src/core/linker/query_list");
  var reflection_1 = require("angular2/src/core/reflection/reflection");
  var pipe_provider_1 = require("angular2/src/core/pipes/pipe_provider");
  var view_container_ref_2 = require("angular2/src/core/linker/view_container_ref");
  var _staticKeys;
  var StaticKeys = (function() {
    function StaticKeys() {
      this.templateRefId = di_1.Key.get(template_ref_1.TemplateRef).id;
      this.viewContainerId = di_1.Key.get(view_container_ref_1.ViewContainerRef).id;
      this.changeDetectorRefId = di_1.Key.get(change_detection_1.ChangeDetectorRef).id;
      this.elementRefId = di_1.Key.get(element_ref_2.ElementRef).id;
      this.rendererId = di_1.Key.get(api_1.Renderer).id;
    }
    StaticKeys.instance = function() {
      if (lang_1.isBlank(_staticKeys))
        _staticKeys = new StaticKeys();
      return _staticKeys;
    };
    return StaticKeys;
  })();
  exports.StaticKeys = StaticKeys;
  var DirectiveDependency = (function(_super) {
    __extends(DirectiveDependency, _super);
    function DirectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties, attributeName, queryDecorator) {
      _super.call(this, key, optional, lowerBoundVisibility, upperBoundVisibility, properties);
      this.attributeName = attributeName;
      this.queryDecorator = queryDecorator;
      this._verify();
    }
    DirectiveDependency.prototype._verify = function() {
      var count = 0;
      if (lang_1.isPresent(this.queryDecorator))
        count++;
      if (lang_1.isPresent(this.attributeName))
        count++;
      if (count > 1)
        throw new exceptions_1.BaseException('A directive injectable can contain only one of the following @Attribute or @Query.');
    };
    DirectiveDependency.createFrom = function(d) {
      return new DirectiveDependency(d.key, d.optional, d.lowerBoundVisibility, d.upperBoundVisibility, d.properties, DirectiveDependency._attributeName(d.properties), DirectiveDependency._query(d.properties));
    };
    DirectiveDependency._attributeName = function(properties) {
      var p = properties.find(function(p) {
        return p instanceof di_2.AttributeMetadata;
      });
      return lang_1.isPresent(p) ? p.attributeName : null;
    };
    DirectiveDependency._query = function(properties) {
      return properties.find(function(p) {
        return p instanceof di_2.QueryMetadata;
      });
    };
    return DirectiveDependency;
  })(di_1.Dependency);
  exports.DirectiveDependency = DirectiveDependency;
  var DirectiveProvider = (function(_super) {
    __extends(DirectiveProvider, _super);
    function DirectiveProvider(key, factory, deps, isComponent, providers, viewProviders, queries) {
      _super.call(this, key, [new provider_2.ResolvedFactory(factory, deps)], false);
      this.isComponent = isComponent;
      this.providers = providers;
      this.viewProviders = viewProviders;
      this.queries = queries;
    }
    Object.defineProperty(DirectiveProvider.prototype, "displayName", {
      get: function() {
        return this.key.displayName;
      },
      enumerable: true,
      configurable: true
    });
    DirectiveProvider.createFromType = function(type, meta) {
      var provider = new di_1.Provider(type, {useClass: type});
      if (lang_1.isBlank(meta)) {
        meta = new directives_1.DirectiveMetadata();
      }
      var rb = provider_2.resolveProvider(provider);
      var rf = rb.resolvedFactories[0];
      var deps = rf.dependencies.map(DirectiveDependency.createFrom);
      var isComponent = meta instanceof directives_1.ComponentMetadata;
      var resolvedProviders = lang_1.isPresent(meta.providers) ? di_1.Injector.resolve(meta.providers) : null;
      var resolvedViewProviders = meta instanceof directives_1.ComponentMetadata && lang_1.isPresent(meta.viewProviders) ? di_1.Injector.resolve(meta.viewProviders) : null;
      var queries = [];
      if (lang_1.isPresent(meta.queries)) {
        collection_1.StringMapWrapper.forEach(meta.queries, function(meta, fieldName) {
          var setter = reflection_1.reflector.setter(fieldName);
          queries.push(new QueryMetadataWithSetter(setter, meta));
        });
      }
      deps.forEach(function(d) {
        if (lang_1.isPresent(d.queryDecorator)) {
          queries.push(new QueryMetadataWithSetter(null, d.queryDecorator));
        }
      });
      return new DirectiveProvider(rb.key, rf.factory, deps, isComponent, resolvedProviders, resolvedViewProviders, queries);
    };
    return DirectiveProvider;
  })(provider_2.ResolvedProvider_);
  exports.DirectiveProvider = DirectiveProvider;
  var QueryMetadataWithSetter = (function() {
    function QueryMetadataWithSetter(setter, metadata) {
      this.setter = setter;
      this.metadata = metadata;
    }
    return QueryMetadataWithSetter;
  })();
  exports.QueryMetadataWithSetter = QueryMetadataWithSetter;
  function setProvidersVisibility(providers, visibility, result) {
    for (var i = 0; i < providers.length; i++) {
      result.set(providers[i].key.id, visibility);
    }
  }
  var AppProtoElement = (function() {
    function AppProtoElement(firstProviderIsComponent, index, attributes, pwvs, protoQueryRefs, directiveVariableBindings) {
      this.firstProviderIsComponent = firstProviderIsComponent;
      this.index = index;
      this.attributes = attributes;
      this.protoQueryRefs = protoQueryRefs;
      this.directiveVariableBindings = directiveVariableBindings;
      var length = pwvs.length;
      if (length > 0) {
        this.protoInjector = new injector_1.ProtoInjector(pwvs);
      } else {
        this.protoInjector = null;
        this.protoQueryRefs = [];
      }
    }
    AppProtoElement.create = function(metadataCache, index, attributes, directiveTypes, directiveVariableBindings) {
      var componentDirProvider = null;
      var mergedProvidersMap = new Map();
      var providerVisibilityMap = new Map();
      var providers = collection_1.ListWrapper.createGrowableSize(directiveTypes.length);
      var protoQueryRefs = [];
      for (var i = 0; i < directiveTypes.length; i++) {
        var dirProvider = metadataCache.getResolvedDirectiveMetadata(directiveTypes[i]);
        providers[i] = new injector_1.ProviderWithVisibility(dirProvider, dirProvider.isComponent ? injector_1.Visibility.PublicAndPrivate : injector_1.Visibility.Public);
        if (dirProvider.isComponent) {
          componentDirProvider = dirProvider;
        } else {
          if (lang_1.isPresent(dirProvider.providers)) {
            provider_1.mergeResolvedProviders(dirProvider.providers, mergedProvidersMap);
            setProvidersVisibility(dirProvider.providers, injector_1.Visibility.Public, providerVisibilityMap);
          }
        }
        if (lang_1.isPresent(dirProvider.viewProviders)) {
          provider_1.mergeResolvedProviders(dirProvider.viewProviders, mergedProvidersMap);
          setProvidersVisibility(dirProvider.viewProviders, injector_1.Visibility.Private, providerVisibilityMap);
        }
        for (var queryIdx = 0; queryIdx < dirProvider.queries.length; queryIdx++) {
          var q = dirProvider.queries[queryIdx];
          protoQueryRefs.push(new ProtoQueryRef(i, q.setter, q.metadata));
        }
      }
      if (lang_1.isPresent(componentDirProvider) && lang_1.isPresent(componentDirProvider.providers)) {
        provider_1.mergeResolvedProviders(componentDirProvider.providers, mergedProvidersMap);
        setProvidersVisibility(componentDirProvider.providers, injector_1.Visibility.Public, providerVisibilityMap);
      }
      mergedProvidersMap.forEach(function(provider, _) {
        providers.push(new injector_1.ProviderWithVisibility(provider, providerVisibilityMap.get(provider.key.id)));
      });
      return new AppProtoElement(lang_1.isPresent(componentDirProvider), index, attributes, providers, protoQueryRefs, directiveVariableBindings);
    };
    AppProtoElement.prototype.getProviderAtIndex = function(index) {
      return this.protoInjector.getProviderAtIndex(index);
    };
    return AppProtoElement;
  })();
  exports.AppProtoElement = AppProtoElement;
  var _Context = (function() {
    function _Context(element, componentElement, injector) {
      this.element = element;
      this.componentElement = componentElement;
      this.injector = injector;
    }
    return _Context;
  })();
  var InjectorWithHostBoundary = (function() {
    function InjectorWithHostBoundary(injector, hostInjectorBoundary) {
      this.injector = injector;
      this.hostInjectorBoundary = hostInjectorBoundary;
    }
    return InjectorWithHostBoundary;
  })();
  exports.InjectorWithHostBoundary = InjectorWithHostBoundary;
  var AppElement = (function() {
    function AppElement(proto, parentView, parent, nativeElement, embeddedViewFactory) {
      var _this = this;
      this.proto = proto;
      this.parentView = parentView;
      this.parent = parent;
      this.nativeElement = nativeElement;
      this.embeddedViewFactory = embeddedViewFactory;
      this.nestedViews = null;
      this.componentView = null;
      this.ref = new element_ref_1.ElementRef_(this);
      var parentInjector = lang_1.isPresent(parent) ? parent._injector : parentView.parentInjector;
      if (lang_1.isPresent(this.proto.protoInjector)) {
        var isBoundary;
        if (lang_1.isPresent(parent) && lang_1.isPresent(parent.proto.protoInjector)) {
          isBoundary = false;
        } else {
          isBoundary = parentView.hostInjectorBoundary;
        }
        this._queryStrategy = this._buildQueryStrategy();
        this._injector = new di_1.Injector(this.proto.protoInjector, parentInjector, isBoundary, this, function() {
          return _this._debugContext();
        });
        var injectorStrategy = this._injector.internalStrategy;
        this._strategy = injectorStrategy instanceof injector_1.InjectorInlineStrategy ? new ElementDirectiveInlineStrategy(injectorStrategy, this) : new ElementDirectiveDynamicStrategy(injectorStrategy, this);
        this._strategy.init();
      } else {
        this._queryStrategy = null;
        this._injector = parentInjector;
        this._strategy = null;
      }
    }
    AppElement.getViewParentInjector = function(parentViewType, containerAppElement, imperativelyCreatedProviders, rootInjector) {
      var parentInjector;
      var hostInjectorBoundary;
      switch (parentViewType) {
        case view_type_1.ViewType.COMPONENT:
          parentInjector = containerAppElement._injector;
          hostInjectorBoundary = true;
          break;
        case view_type_1.ViewType.EMBEDDED:
          parentInjector = lang_1.isPresent(containerAppElement.proto.protoInjector) ? containerAppElement._injector.parent : containerAppElement._injector;
          hostInjectorBoundary = containerAppElement._injector.hostBoundary;
          break;
        case view_type_1.ViewType.HOST:
          if (lang_1.isPresent(containerAppElement)) {
            parentInjector = lang_1.isPresent(containerAppElement.proto.protoInjector) ? containerAppElement._injector.parent : containerAppElement._injector;
            if (lang_1.isPresent(imperativelyCreatedProviders)) {
              var imperativeProvidersWithVisibility = imperativelyCreatedProviders.map(function(p) {
                return new injector_1.ProviderWithVisibility(p, injector_1.Visibility.Public);
              });
              parentInjector = new di_1.Injector(new injector_1.ProtoInjector(imperativeProvidersWithVisibility), parentInjector, true, null, null);
              hostInjectorBoundary = false;
            } else {
              hostInjectorBoundary = containerAppElement._injector.hostBoundary;
            }
          } else {
            parentInjector = rootInjector;
            hostInjectorBoundary = true;
          }
          break;
      }
      return new InjectorWithHostBoundary(parentInjector, hostInjectorBoundary);
    };
    AppElement.prototype.attachComponentView = function(componentView) {
      this.componentView = componentView;
    };
    AppElement.prototype._debugContext = function() {
      var c = this.parentView.getDebugContext(this, null, null);
      return lang_1.isPresent(c) ? new _Context(c.element, c.componentElement, c.injector) : null;
    };
    AppElement.prototype.hasVariableBinding = function(name) {
      var vb = this.proto.directiveVariableBindings;
      return lang_1.isPresent(vb) && collection_1.StringMapWrapper.contains(vb, name);
    };
    AppElement.prototype.getVariableBinding = function(name) {
      var index = this.proto.directiveVariableBindings[name];
      return lang_1.isPresent(index) ? this.getDirectiveAtIndex(index) : this.getElementRef();
    };
    AppElement.prototype.get = function(token) {
      return this._injector.get(token);
    };
    AppElement.prototype.hasDirective = function(type) {
      return lang_1.isPresent(this._injector.getOptional(type));
    };
    AppElement.prototype.getComponent = function() {
      return lang_1.isPresent(this._strategy) ? this._strategy.getComponent() : null;
    };
    AppElement.prototype.getInjector = function() {
      return this._injector;
    };
    AppElement.prototype.getElementRef = function() {
      return this.ref;
    };
    AppElement.prototype.getViewContainerRef = function() {
      return new view_container_ref_2.ViewContainerRef_(this);
    };
    AppElement.prototype.getTemplateRef = function() {
      if (lang_1.isPresent(this.embeddedViewFactory)) {
        return new template_ref_1.TemplateRef_(this.ref);
      }
      return null;
    };
    AppElement.prototype.getDependency = function(injector, provider, dep) {
      if (provider instanceof DirectiveProvider) {
        var dirDep = dep;
        if (lang_1.isPresent(dirDep.attributeName))
          return this._buildAttribute(dirDep);
        if (lang_1.isPresent(dirDep.queryDecorator))
          return this._queryStrategy.findQuery(dirDep.queryDecorator).list;
        if (dirDep.key.id === StaticKeys.instance().changeDetectorRefId) {
          if (this.proto.firstProviderIsComponent) {
            return new _ComponentViewChangeDetectorRef(this);
          } else {
            return this.parentView.changeDetector.ref;
          }
        }
        if (dirDep.key.id === StaticKeys.instance().elementRefId) {
          return this.getElementRef();
        }
        if (dirDep.key.id === StaticKeys.instance().viewContainerId) {
          return this.getViewContainerRef();
        }
        if (dirDep.key.id === StaticKeys.instance().templateRefId) {
          var tr = this.getTemplateRef();
          if (lang_1.isBlank(tr) && !dirDep.optional) {
            throw new di_1.NoProviderError(null, dirDep.key);
          }
          return tr;
        }
        if (dirDep.key.id === StaticKeys.instance().rendererId) {
          return this.parentView.renderer;
        }
      } else if (provider instanceof pipe_provider_1.PipeProvider) {
        if (dep.key.id === StaticKeys.instance().changeDetectorRefId) {
          if (this.proto.firstProviderIsComponent) {
            return new _ComponentViewChangeDetectorRef(this);
          } else {
            return this.parentView.changeDetector;
          }
        }
      }
      return injector_1.UNDEFINED;
    };
    AppElement.prototype._buildAttribute = function(dep) {
      var attributes = this.proto.attributes;
      if (lang_1.isPresent(attributes) && collection_1.StringMapWrapper.contains(attributes, dep.attributeName)) {
        return attributes[dep.attributeName];
      } else {
        return null;
      }
    };
    AppElement.prototype.addDirectivesMatchingQuery = function(query, list) {
      var templateRef = this.getTemplateRef();
      if (query.selector === template_ref_1.TemplateRef && lang_1.isPresent(templateRef)) {
        list.push(templateRef);
      }
      if (this._strategy != null) {
        this._strategy.addDirectivesMatchingQuery(query, list);
      }
    };
    AppElement.prototype._buildQueryStrategy = function() {
      if (this.proto.protoQueryRefs.length === 0) {
        return _emptyQueryStrategy;
      } else if (this.proto.protoQueryRefs.length <= InlineQueryStrategy.NUMBER_OF_SUPPORTED_QUERIES) {
        return new InlineQueryStrategy(this);
      } else {
        return new DynamicQueryStrategy(this);
      }
    };
    AppElement.prototype.getDirectiveAtIndex = function(index) {
      return this._injector.getAt(index);
    };
    AppElement.prototype.ngAfterViewChecked = function() {
      if (lang_1.isPresent(this._queryStrategy))
        this._queryStrategy.updateViewQueries();
    };
    AppElement.prototype.ngAfterContentChecked = function() {
      if (lang_1.isPresent(this._queryStrategy))
        this._queryStrategy.updateContentQueries();
    };
    AppElement.prototype.traverseAndSetQueriesAsDirty = function() {
      var inj = this;
      while (lang_1.isPresent(inj)) {
        inj._setQueriesAsDirty();
        inj = inj.parent;
      }
    };
    AppElement.prototype._setQueriesAsDirty = function() {
      if (lang_1.isPresent(this._queryStrategy)) {
        this._queryStrategy.setContentQueriesAsDirty();
      }
      if (this.parentView.proto.type === view_type_1.ViewType.COMPONENT) {
        this.parentView.containerAppElement._queryStrategy.setViewQueriesAsDirty();
      }
    };
    return AppElement;
  })();
  exports.AppElement = AppElement;
  var _EmptyQueryStrategy = (function() {
    function _EmptyQueryStrategy() {}
    _EmptyQueryStrategy.prototype.setContentQueriesAsDirty = function() {};
    _EmptyQueryStrategy.prototype.setViewQueriesAsDirty = function() {};
    _EmptyQueryStrategy.prototype.updateContentQueries = function() {};
    _EmptyQueryStrategy.prototype.updateViewQueries = function() {};
    _EmptyQueryStrategy.prototype.findQuery = function(query) {
      throw new exceptions_1.BaseException("Cannot find query for directive " + query + ".");
    };
    return _EmptyQueryStrategy;
  })();
  var _emptyQueryStrategy = new _EmptyQueryStrategy();
  var InlineQueryStrategy = (function() {
    function InlineQueryStrategy(ei) {
      var protoRefs = ei.proto.protoQueryRefs;
      if (protoRefs.length > 0)
        this.query0 = new QueryRef(protoRefs[0], ei);
      if (protoRefs.length > 1)
        this.query1 = new QueryRef(protoRefs[1], ei);
      if (protoRefs.length > 2)
        this.query2 = new QueryRef(protoRefs[2], ei);
    }
    InlineQueryStrategy.prototype.setContentQueriesAsDirty = function() {
      if (lang_1.isPresent(this.query0) && !this.query0.isViewQuery)
        this.query0.dirty = true;
      if (lang_1.isPresent(this.query1) && !this.query1.isViewQuery)
        this.query1.dirty = true;
      if (lang_1.isPresent(this.query2) && !this.query2.isViewQuery)
        this.query2.dirty = true;
    };
    InlineQueryStrategy.prototype.setViewQueriesAsDirty = function() {
      if (lang_1.isPresent(this.query0) && this.query0.isViewQuery)
        this.query0.dirty = true;
      if (lang_1.isPresent(this.query1) && this.query1.isViewQuery)
        this.query1.dirty = true;
      if (lang_1.isPresent(this.query2) && this.query2.isViewQuery)
        this.query2.dirty = true;
    };
    InlineQueryStrategy.prototype.updateContentQueries = function() {
      if (lang_1.isPresent(this.query0) && !this.query0.isViewQuery) {
        this.query0.update();
      }
      if (lang_1.isPresent(this.query1) && !this.query1.isViewQuery) {
        this.query1.update();
      }
      if (lang_1.isPresent(this.query2) && !this.query2.isViewQuery) {
        this.query2.update();
      }
    };
    InlineQueryStrategy.prototype.updateViewQueries = function() {
      if (lang_1.isPresent(this.query0) && this.query0.isViewQuery) {
        this.query0.update();
      }
      if (lang_1.isPresent(this.query1) && this.query1.isViewQuery) {
        this.query1.update();
      }
      if (lang_1.isPresent(this.query2) && this.query2.isViewQuery) {
        this.query2.update();
      }
    };
    InlineQueryStrategy.prototype.findQuery = function(query) {
      if (lang_1.isPresent(this.query0) && this.query0.protoQueryRef.query === query) {
        return this.query0;
      }
      if (lang_1.isPresent(this.query1) && this.query1.protoQueryRef.query === query) {
        return this.query1;
      }
      if (lang_1.isPresent(this.query2) && this.query2.protoQueryRef.query === query) {
        return this.query2;
      }
      throw new exceptions_1.BaseException("Cannot find query for directive " + query + ".");
    };
    InlineQueryStrategy.NUMBER_OF_SUPPORTED_QUERIES = 3;
    return InlineQueryStrategy;
  })();
  var DynamicQueryStrategy = (function() {
    function DynamicQueryStrategy(ei) {
      this.queries = ei.proto.protoQueryRefs.map(function(p) {
        return new QueryRef(p, ei);
      });
    }
    DynamicQueryStrategy.prototype.setContentQueriesAsDirty = function() {
      for (var i = 0; i < this.queries.length; ++i) {
        var q = this.queries[i];
        if (!q.isViewQuery)
          q.dirty = true;
      }
    };
    DynamicQueryStrategy.prototype.setViewQueriesAsDirty = function() {
      for (var i = 0; i < this.queries.length; ++i) {
        var q = this.queries[i];
        if (q.isViewQuery)
          q.dirty = true;
      }
    };
    DynamicQueryStrategy.prototype.updateContentQueries = function() {
      for (var i = 0; i < this.queries.length; ++i) {
        var q = this.queries[i];
        if (!q.isViewQuery) {
          q.update();
        }
      }
    };
    DynamicQueryStrategy.prototype.updateViewQueries = function() {
      for (var i = 0; i < this.queries.length; ++i) {
        var q = this.queries[i];
        if (q.isViewQuery) {
          q.update();
        }
      }
    };
    DynamicQueryStrategy.prototype.findQuery = function(query) {
      for (var i = 0; i < this.queries.length; ++i) {
        var q = this.queries[i];
        if (q.protoQueryRef.query === query) {
          return q;
        }
      }
      throw new exceptions_1.BaseException("Cannot find query for directive " + query + ".");
    };
    return DynamicQueryStrategy;
  })();
  var ElementDirectiveInlineStrategy = (function() {
    function ElementDirectiveInlineStrategy(injectorStrategy, _ei) {
      this.injectorStrategy = injectorStrategy;
      this._ei = _ei;
    }
    ElementDirectiveInlineStrategy.prototype.init = function() {
      var i = this.injectorStrategy;
      var p = i.protoStrategy;
      i.resetConstructionCounter();
      if (p.provider0 instanceof DirectiveProvider && lang_1.isPresent(p.keyId0) && i.obj0 === injector_1.UNDEFINED)
        i.obj0 = i.instantiateProvider(p.provider0, p.visibility0);
      if (p.provider1 instanceof DirectiveProvider && lang_1.isPresent(p.keyId1) && i.obj1 === injector_1.UNDEFINED)
        i.obj1 = i.instantiateProvider(p.provider1, p.visibility1);
      if (p.provider2 instanceof DirectiveProvider && lang_1.isPresent(p.keyId2) && i.obj2 === injector_1.UNDEFINED)
        i.obj2 = i.instantiateProvider(p.provider2, p.visibility2);
      if (p.provider3 instanceof DirectiveProvider && lang_1.isPresent(p.keyId3) && i.obj3 === injector_1.UNDEFINED)
        i.obj3 = i.instantiateProvider(p.provider3, p.visibility3);
      if (p.provider4 instanceof DirectiveProvider && lang_1.isPresent(p.keyId4) && i.obj4 === injector_1.UNDEFINED)
        i.obj4 = i.instantiateProvider(p.provider4, p.visibility4);
      if (p.provider5 instanceof DirectiveProvider && lang_1.isPresent(p.keyId5) && i.obj5 === injector_1.UNDEFINED)
        i.obj5 = i.instantiateProvider(p.provider5, p.visibility5);
      if (p.provider6 instanceof DirectiveProvider && lang_1.isPresent(p.keyId6) && i.obj6 === injector_1.UNDEFINED)
        i.obj6 = i.instantiateProvider(p.provider6, p.visibility6);
      if (p.provider7 instanceof DirectiveProvider && lang_1.isPresent(p.keyId7) && i.obj7 === injector_1.UNDEFINED)
        i.obj7 = i.instantiateProvider(p.provider7, p.visibility7);
      if (p.provider8 instanceof DirectiveProvider && lang_1.isPresent(p.keyId8) && i.obj8 === injector_1.UNDEFINED)
        i.obj8 = i.instantiateProvider(p.provider8, p.visibility8);
      if (p.provider9 instanceof DirectiveProvider && lang_1.isPresent(p.keyId9) && i.obj9 === injector_1.UNDEFINED)
        i.obj9 = i.instantiateProvider(p.provider9, p.visibility9);
    };
    ElementDirectiveInlineStrategy.prototype.getComponent = function() {
      return this.injectorStrategy.obj0;
    };
    ElementDirectiveInlineStrategy.prototype.isComponentKey = function(key) {
      return this._ei.proto.firstProviderIsComponent && lang_1.isPresent(key) && key.id === this.injectorStrategy.protoStrategy.keyId0;
    };
    ElementDirectiveInlineStrategy.prototype.addDirectivesMatchingQuery = function(query, list) {
      var i = this.injectorStrategy;
      var p = i.protoStrategy;
      if (lang_1.isPresent(p.provider0) && p.provider0.key.token === query.selector) {
        if (i.obj0 === injector_1.UNDEFINED)
          i.obj0 = i.instantiateProvider(p.provider0, p.visibility0);
        list.push(i.obj0);
      }
      if (lang_1.isPresent(p.provider1) && p.provider1.key.token === query.selector) {
        if (i.obj1 === injector_1.UNDEFINED)
          i.obj1 = i.instantiateProvider(p.provider1, p.visibility1);
        list.push(i.obj1);
      }
      if (lang_1.isPresent(p.provider2) && p.provider2.key.token === query.selector) {
        if (i.obj2 === injector_1.UNDEFINED)
          i.obj2 = i.instantiateProvider(p.provider2, p.visibility2);
        list.push(i.obj2);
      }
      if (lang_1.isPresent(p.provider3) && p.provider3.key.token === query.selector) {
        if (i.obj3 === injector_1.UNDEFINED)
          i.obj3 = i.instantiateProvider(p.provider3, p.visibility3);
        list.push(i.obj3);
      }
      if (lang_1.isPresent(p.provider4) && p.provider4.key.token === query.selector) {
        if (i.obj4 === injector_1.UNDEFINED)
          i.obj4 = i.instantiateProvider(p.provider4, p.visibility4);
        list.push(i.obj4);
      }
      if (lang_1.isPresent(p.provider5) && p.provider5.key.token === query.selector) {
        if (i.obj5 === injector_1.UNDEFINED)
          i.obj5 = i.instantiateProvider(p.provider5, p.visibility5);
        list.push(i.obj5);
      }
      if (lang_1.isPresent(p.provider6) && p.provider6.key.token === query.selector) {
        if (i.obj6 === injector_1.UNDEFINED)
          i.obj6 = i.instantiateProvider(p.provider6, p.visibility6);
        list.push(i.obj6);
      }
      if (lang_1.isPresent(p.provider7) && p.provider7.key.token === query.selector) {
        if (i.obj7 === injector_1.UNDEFINED)
          i.obj7 = i.instantiateProvider(p.provider7, p.visibility7);
        list.push(i.obj7);
      }
      if (lang_1.isPresent(p.provider8) && p.provider8.key.token === query.selector) {
        if (i.obj8 === injector_1.UNDEFINED)
          i.obj8 = i.instantiateProvider(p.provider8, p.visibility8);
        list.push(i.obj8);
      }
      if (lang_1.isPresent(p.provider9) && p.provider9.key.token === query.selector) {
        if (i.obj9 === injector_1.UNDEFINED)
          i.obj9 = i.instantiateProvider(p.provider9, p.visibility9);
        list.push(i.obj9);
      }
    };
    return ElementDirectiveInlineStrategy;
  })();
  var ElementDirectiveDynamicStrategy = (function() {
    function ElementDirectiveDynamicStrategy(injectorStrategy, _ei) {
      this.injectorStrategy = injectorStrategy;
      this._ei = _ei;
    }
    ElementDirectiveDynamicStrategy.prototype.init = function() {
      var inj = this.injectorStrategy;
      var p = inj.protoStrategy;
      inj.resetConstructionCounter();
      for (var i = 0; i < p.keyIds.length; i++) {
        if (p.providers[i] instanceof DirectiveProvider && lang_1.isPresent(p.keyIds[i]) && inj.objs[i] === injector_1.UNDEFINED) {
          inj.objs[i] = inj.instantiateProvider(p.providers[i], p.visibilities[i]);
        }
      }
    };
    ElementDirectiveDynamicStrategy.prototype.getComponent = function() {
      return this.injectorStrategy.objs[0];
    };
    ElementDirectiveDynamicStrategy.prototype.isComponentKey = function(key) {
      var p = this.injectorStrategy.protoStrategy;
      return this._ei.proto.firstProviderIsComponent && lang_1.isPresent(key) && key.id === p.keyIds[0];
    };
    ElementDirectiveDynamicStrategy.prototype.addDirectivesMatchingQuery = function(query, list) {
      var ist = this.injectorStrategy;
      var p = ist.protoStrategy;
      for (var i = 0; i < p.providers.length; i++) {
        if (p.providers[i].key.token === query.selector) {
          if (ist.objs[i] === injector_1.UNDEFINED) {
            ist.objs[i] = ist.instantiateProvider(p.providers[i], p.visibilities[i]);
          }
          list.push(ist.objs[i]);
        }
      }
    };
    return ElementDirectiveDynamicStrategy;
  })();
  var ProtoQueryRef = (function() {
    function ProtoQueryRef(dirIndex, setter, query) {
      this.dirIndex = dirIndex;
      this.setter = setter;
      this.query = query;
    }
    Object.defineProperty(ProtoQueryRef.prototype, "usesPropertySyntax", {
      get: function() {
        return lang_1.isPresent(this.setter);
      },
      enumerable: true,
      configurable: true
    });
    return ProtoQueryRef;
  })();
  exports.ProtoQueryRef = ProtoQueryRef;
  var QueryRef = (function() {
    function QueryRef(protoQueryRef, originator) {
      this.protoQueryRef = protoQueryRef;
      this.originator = originator;
      this.list = new query_list_1.QueryList();
      this.dirty = true;
    }
    Object.defineProperty(QueryRef.prototype, "isViewQuery", {
      get: function() {
        return this.protoQueryRef.query.isViewQuery;
      },
      enumerable: true,
      configurable: true
    });
    QueryRef.prototype.update = function() {
      if (!this.dirty)
        return ;
      this._update();
      this.dirty = false;
      if (this.protoQueryRef.usesPropertySyntax) {
        var dir = this.originator.getDirectiveAtIndex(this.protoQueryRef.dirIndex);
        if (this.protoQueryRef.query.first) {
          this.protoQueryRef.setter(dir, this.list.length > 0 ? this.list.first : null);
        } else {
          this.protoQueryRef.setter(dir, this.list);
        }
      }
      this.list.notifyOnChanges();
    };
    QueryRef.prototype._update = function() {
      var aggregator = [];
      if (this.protoQueryRef.query.isViewQuery) {
        var nestedView = this.originator.componentView;
        if (lang_1.isPresent(nestedView))
          this._visitView(nestedView, aggregator);
      } else {
        this._visit(this.originator, aggregator);
      }
      this.list.reset(aggregator);
    };
    ;
    QueryRef.prototype._visit = function(inj, aggregator) {
      var view = inj.parentView;
      var startIdx = inj.proto.index;
      for (var i = startIdx; i < view.appElements.length; i++) {
        var curInj = view.appElements[i];
        if (i > startIdx && (lang_1.isBlank(curInj.parent) || curInj.parent.proto.index < startIdx)) {
          break;
        }
        if (!this.protoQueryRef.query.descendants && !(curInj.parent == this.originator || curInj == this.originator))
          continue;
        this._visitInjector(curInj, aggregator);
        this._visitViewContainerViews(curInj.nestedViews, aggregator);
      }
    };
    QueryRef.prototype._visitInjector = function(inj, aggregator) {
      if (this.protoQueryRef.query.isVarBindingQuery) {
        this._aggregateVariableBinding(inj, aggregator);
      } else {
        this._aggregateDirective(inj, aggregator);
      }
    };
    QueryRef.prototype._visitViewContainerViews = function(views, aggregator) {
      if (lang_1.isPresent(views)) {
        for (var j = 0; j < views.length; j++) {
          this._visitView(views[j], aggregator);
        }
      }
    };
    QueryRef.prototype._visitView = function(view, aggregator) {
      for (var i = 0; i < view.appElements.length; i++) {
        var inj = view.appElements[i];
        this._visitInjector(inj, aggregator);
        this._visitViewContainerViews(inj.nestedViews, aggregator);
      }
    };
    QueryRef.prototype._aggregateVariableBinding = function(inj, aggregator) {
      var vb = this.protoQueryRef.query.varBindings;
      for (var i = 0; i < vb.length; ++i) {
        if (inj.hasVariableBinding(vb[i])) {
          aggregator.push(inj.getVariableBinding(vb[i]));
        }
      }
    };
    QueryRef.prototype._aggregateDirective = function(inj, aggregator) {
      inj.addDirectivesMatchingQuery(this.protoQueryRef.query, aggregator);
    };
    return QueryRef;
  })();
  exports.QueryRef = QueryRef;
  var _ComponentViewChangeDetectorRef = (function(_super) {
    __extends(_ComponentViewChangeDetectorRef, _super);
    function _ComponentViewChangeDetectorRef(_appElement) {
      _super.call(this);
      this._appElement = _appElement;
    }
    _ComponentViewChangeDetectorRef.prototype.markForCheck = function() {
      this._appElement.componentView.changeDetector.ref.markForCheck();
    };
    _ComponentViewChangeDetectorRef.prototype.detach = function() {
      this._appElement.componentView.changeDetector.ref.detach();
    };
    _ComponentViewChangeDetectorRef.prototype.detectChanges = function() {
      this._appElement.componentView.changeDetector.ref.detectChanges();
    };
    _ComponentViewChangeDetectorRef.prototype.checkNoChanges = function() {
      this._appElement.componentView.changeDetector.ref.checkNoChanges();
    };
    _ComponentViewChangeDetectorRef.prototype.reattach = function() {
      this._appElement.componentView.changeDetector.ref.reattach();
    };
    return _ComponentViewChangeDetectorRef;
  })(change_detection_1.ChangeDetectorRef);
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/application_common_providers", ["angular2/src/facade/lang", "angular2/src/core/di", "angular2/src/core/application_tokens", "angular2/src/core/change_detection/change_detection", "angular2/src/core/linker/resolved_metadata_cache", "angular2/src/core/linker/view_manager", "angular2/src/core/linker/view_manager", "angular2/src/core/linker/view_resolver", "angular2/src/core/linker/view_listener", "angular2/src/core/linker/directive_resolver", "angular2/src/core/linker/pipe_resolver", "angular2/src/core/linker/compiler", "angular2/src/core/linker/compiler", "angular2/src/core/linker/dynamic_component_loader", "angular2/src/core/linker/dynamic_component_loader"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var di_1 = require("angular2/src/core/di");
  var application_tokens_1 = require("angular2/src/core/application_tokens");
  var change_detection_1 = require("angular2/src/core/change_detection/change_detection");
  var resolved_metadata_cache_1 = require("angular2/src/core/linker/resolved_metadata_cache");
  var view_manager_1 = require("angular2/src/core/linker/view_manager");
  var view_manager_2 = require("angular2/src/core/linker/view_manager");
  var view_resolver_1 = require("angular2/src/core/linker/view_resolver");
  var view_listener_1 = require("angular2/src/core/linker/view_listener");
  var directive_resolver_1 = require("angular2/src/core/linker/directive_resolver");
  var pipe_resolver_1 = require("angular2/src/core/linker/pipe_resolver");
  var compiler_1 = require("angular2/src/core/linker/compiler");
  var compiler_2 = require("angular2/src/core/linker/compiler");
  var dynamic_component_loader_1 = require("angular2/src/core/linker/dynamic_component_loader");
  var dynamic_component_loader_2 = require("angular2/src/core/linker/dynamic_component_loader");
  exports.APPLICATION_COMMON_PROVIDERS = lang_1.CONST_EXPR([new di_1.Provider(compiler_1.Compiler, {useClass: compiler_2.Compiler_}), application_tokens_1.APP_ID_RANDOM_PROVIDER, resolved_metadata_cache_1.ResolvedMetadataCache, new di_1.Provider(view_manager_1.AppViewManager, {useClass: view_manager_2.AppViewManager_}), view_listener_1.AppViewListener, view_resolver_1.ViewResolver, new di_1.Provider(change_detection_1.IterableDiffers, {useValue: change_detection_1.defaultIterableDiffers}), new di_1.Provider(change_detection_1.KeyValueDiffers, {useValue: change_detection_1.defaultKeyValueDiffers}), directive_resolver_1.DirectiveResolver, pipe_resolver_1.PipeResolver, new di_1.Provider(dynamic_component_loader_1.DynamicComponentLoader, {useClass: dynamic_component_loader_2.DynamicComponentLoader_})]);
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/animate/css_animation_builder", ["angular2/src/animate/css_animation_options", "angular2/src/animate/animation"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var css_animation_options_1 = require("angular2/src/animate/css_animation_options");
  var animation_1 = require("angular2/src/animate/animation");
  var CssAnimationBuilder = (function() {
    function CssAnimationBuilder(browserDetails) {
      this.browserDetails = browserDetails;
      this.data = new css_animation_options_1.CssAnimationOptions();
    }
    CssAnimationBuilder.prototype.addAnimationClass = function(className) {
      this.data.animationClasses.push(className);
      return this;
    };
    CssAnimationBuilder.prototype.addClass = function(className) {
      this.data.classesToAdd.push(className);
      return this;
    };
    CssAnimationBuilder.prototype.removeClass = function(className) {
      this.data.classesToRemove.push(className);
      return this;
    };
    CssAnimationBuilder.prototype.setDuration = function(duration) {
      this.data.duration = duration;
      return this;
    };
    CssAnimationBuilder.prototype.setDelay = function(delay) {
      this.data.delay = delay;
      return this;
    };
    CssAnimationBuilder.prototype.setStyles = function(from, to) {
      return this.setFromStyles(from).setToStyles(to);
    };
    CssAnimationBuilder.prototype.setFromStyles = function(from) {
      this.data.fromStyles = from;
      return this;
    };
    CssAnimationBuilder.prototype.setToStyles = function(to) {
      this.data.toStyles = to;
      return this;
    };
    CssAnimationBuilder.prototype.start = function(element) {
      return new animation_1.Animation(element, this.data, this.browserDetails);
    };
    return CssAnimationBuilder;
  })();
  exports.CssAnimationBuilder = CssAnimationBuilder;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/html_parser", ["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/compiler/html_ast", "angular2/src/core/di", "angular2/src/compiler/html_lexer", "angular2/src/compiler/parse_util", "angular2/src/compiler/html_tags"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var collection_1 = require("angular2/src/facade/collection");
  var html_ast_1 = require("angular2/src/compiler/html_ast");
  var di_1 = require("angular2/src/core/di");
  var html_lexer_1 = require("angular2/src/compiler/html_lexer");
  var parse_util_1 = require("angular2/src/compiler/parse_util");
  var html_tags_1 = require("angular2/src/compiler/html_tags");
  var HtmlTreeError = (function(_super) {
    __extends(HtmlTreeError, _super);
    function HtmlTreeError(elementName, location, msg) {
      _super.call(this, location, msg);
      this.elementName = elementName;
    }
    HtmlTreeError.create = function(elementName, location, msg) {
      return new HtmlTreeError(elementName, location, msg);
    };
    return HtmlTreeError;
  })(parse_util_1.ParseError);
  exports.HtmlTreeError = HtmlTreeError;
  var HtmlParseTreeResult = (function() {
    function HtmlParseTreeResult(rootNodes, errors) {
      this.rootNodes = rootNodes;
      this.errors = errors;
    }
    return HtmlParseTreeResult;
  })();
  exports.HtmlParseTreeResult = HtmlParseTreeResult;
  var HtmlParser = (function() {
    function HtmlParser() {}
    HtmlParser.prototype.parse = function(sourceContent, sourceUrl) {
      var tokensAndErrors = html_lexer_1.tokenizeHtml(sourceContent, sourceUrl);
      var treeAndErrors = new TreeBuilder(tokensAndErrors.tokens).build();
      return new HtmlParseTreeResult(treeAndErrors.rootNodes, tokensAndErrors.errors.concat(treeAndErrors.errors));
    };
    HtmlParser = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], HtmlParser);
    return HtmlParser;
  })();
  exports.HtmlParser = HtmlParser;
  var TreeBuilder = (function() {
    function TreeBuilder(tokens) {
      this.tokens = tokens;
      this.index = -1;
      this.rootNodes = [];
      this.errors = [];
      this.elementStack = [];
      this._advance();
    }
    TreeBuilder.prototype.build = function() {
      while (this.peek.type !== html_lexer_1.HtmlTokenType.EOF) {
        if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_OPEN_START) {
          this._consumeStartTag(this._advance());
        } else if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_CLOSE) {
          this._consumeEndTag(this._advance());
        } else if (this.peek.type === html_lexer_1.HtmlTokenType.CDATA_START) {
          this._closeVoidElement();
          this._consumeCdata(this._advance());
        } else if (this.peek.type === html_lexer_1.HtmlTokenType.COMMENT_START) {
          this._closeVoidElement();
          this._consumeComment(this._advance());
        } else if (this.peek.type === html_lexer_1.HtmlTokenType.TEXT || this.peek.type === html_lexer_1.HtmlTokenType.RAW_TEXT || this.peek.type === html_lexer_1.HtmlTokenType.ESCAPABLE_RAW_TEXT) {
          this._closeVoidElement();
          this._consumeText(this._advance());
        } else {
          this._advance();
        }
      }
      return new HtmlParseTreeResult(this.rootNodes, this.errors);
    };
    TreeBuilder.prototype._advance = function() {
      var prev = this.peek;
      if (this.index < this.tokens.length - 1) {
        this.index++;
      }
      this.peek = this.tokens[this.index];
      return prev;
    };
    TreeBuilder.prototype._advanceIf = function(type) {
      if (this.peek.type === type) {
        return this._advance();
      }
      return null;
    };
    TreeBuilder.prototype._consumeCdata = function(startToken) {
      this._consumeText(this._advance());
      this._advanceIf(html_lexer_1.HtmlTokenType.CDATA_END);
    };
    TreeBuilder.prototype._consumeComment = function(startToken) {
      this._advanceIf(html_lexer_1.HtmlTokenType.RAW_TEXT);
      this._advanceIf(html_lexer_1.HtmlTokenType.COMMENT_END);
    };
    TreeBuilder.prototype._consumeText = function(token) {
      var text = token.parts[0];
      if (text.length > 0 && text[0] == '\n') {
        var parent_1 = this._getParentElement();
        if (lang_1.isPresent(parent_1) && parent_1.children.length == 0 && html_tags_1.getHtmlTagDefinition(parent_1.name).ignoreFirstLf) {
          text = text.substring(1);
        }
      }
      if (text.length > 0) {
        this._addToParent(new html_ast_1.HtmlTextAst(text, token.sourceSpan));
      }
    };
    TreeBuilder.prototype._closeVoidElement = function() {
      if (this.elementStack.length > 0) {
        var el = collection_1.ListWrapper.last(this.elementStack);
        if (html_tags_1.getHtmlTagDefinition(el.name).isVoid) {
          this.elementStack.pop();
        }
      }
    };
    TreeBuilder.prototype._consumeStartTag = function(startTagToken) {
      var prefix = startTagToken.parts[0];
      var name = startTagToken.parts[1];
      var attrs = [];
      while (this.peek.type === html_lexer_1.HtmlTokenType.ATTR_NAME) {
        attrs.push(this._consumeAttr(this._advance()));
      }
      var fullName = getElementFullName(prefix, name, this._getParentElement());
      var selfClosing = false;
      if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_OPEN_END_VOID) {
        this._advance();
        selfClosing = true;
        if (html_tags_1.getNsPrefix(fullName) == null && !html_tags_1.getHtmlTagDefinition(fullName).isVoid) {
          this.errors.push(HtmlTreeError.create(fullName, startTagToken.sourceSpan.start, "Only void and foreign elements can be self closed \"" + startTagToken.parts[1] + "\""));
        }
      } else if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_OPEN_END) {
        this._advance();
        selfClosing = false;
      }
      var end = this.peek.sourceSpan.start;
      var el = new html_ast_1.HtmlElementAst(fullName, attrs, [], new parse_util_1.ParseSourceSpan(startTagToken.sourceSpan.start, end));
      this._pushElement(el);
      if (selfClosing) {
        this._popElement(fullName);
      }
    };
    TreeBuilder.prototype._pushElement = function(el) {
      if (this.elementStack.length > 0) {
        var parentEl = collection_1.ListWrapper.last(this.elementStack);
        if (html_tags_1.getHtmlTagDefinition(parentEl.name).isClosedByChild(el.name)) {
          this.elementStack.pop();
        }
      }
      var tagDef = html_tags_1.getHtmlTagDefinition(el.name);
      var parentEl = this._getParentElement();
      if (tagDef.requireExtraParent(lang_1.isPresent(parentEl) ? parentEl.name : null)) {
        var newParent = new html_ast_1.HtmlElementAst(tagDef.parentToAdd, [], [el], el.sourceSpan);
        this._addToParent(newParent);
        this.elementStack.push(newParent);
        this.elementStack.push(el);
      } else {
        this._addToParent(el);
        this.elementStack.push(el);
      }
    };
    TreeBuilder.prototype._consumeEndTag = function(endTagToken) {
      var fullName = getElementFullName(endTagToken.parts[0], endTagToken.parts[1], this._getParentElement());
      if (html_tags_1.getHtmlTagDefinition(fullName).isVoid) {
        this.errors.push(HtmlTreeError.create(fullName, endTagToken.sourceSpan.start, "Void elements do not have end tags \"" + endTagToken.parts[1] + "\""));
      } else if (!this._popElement(fullName)) {
        this.errors.push(HtmlTreeError.create(fullName, endTagToken.sourceSpan.start, "Unexpected closing tag \"" + endTagToken.parts[1] + "\""));
      }
    };
    TreeBuilder.prototype._popElement = function(fullName) {
      for (var stackIndex = this.elementStack.length - 1; stackIndex >= 0; stackIndex--) {
        var el = this.elementStack[stackIndex];
        if (el.name == fullName) {
          collection_1.ListWrapper.splice(this.elementStack, stackIndex, this.elementStack.length - stackIndex);
          return true;
        }
        if (!html_tags_1.getHtmlTagDefinition(el.name).closedByParent) {
          return false;
        }
      }
      return false;
    };
    TreeBuilder.prototype._consumeAttr = function(attrName) {
      var fullName = mergeNsAndName(attrName.parts[0], attrName.parts[1]);
      var end = attrName.sourceSpan.end;
      var value = '';
      if (this.peek.type === html_lexer_1.HtmlTokenType.ATTR_VALUE) {
        var valueToken = this._advance();
        value = valueToken.parts[0];
        end = valueToken.sourceSpan.end;
      }
      return new html_ast_1.HtmlAttrAst(fullName, value, new parse_util_1.ParseSourceSpan(attrName.sourceSpan.start, end));
    };
    TreeBuilder.prototype._getParentElement = function() {
      return this.elementStack.length > 0 ? collection_1.ListWrapper.last(this.elementStack) : null;
    };
    TreeBuilder.prototype._addToParent = function(node) {
      var parent = this._getParentElement();
      if (lang_1.isPresent(parent)) {
        parent.children.push(node);
      } else {
        this.rootNodes.push(node);
      }
    };
    return TreeBuilder;
  })();
  function mergeNsAndName(prefix, localName) {
    return lang_1.isPresent(prefix) ? "@" + prefix + ":" + localName : localName;
  }
  function getElementFullName(prefix, localName, parentElement) {
    if (lang_1.isBlank(prefix)) {
      prefix = html_tags_1.getHtmlTagDefinition(localName).implicitNamespacePrefix;
      if (lang_1.isBlank(prefix) && lang_1.isPresent(parentElement)) {
        prefix = html_tags_1.getNsPrefix(parentElement.name);
      }
    }
    return mergeNsAndName(prefix, localName);
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/web_workers/ui/renderer", ["angular2/src/core/di", "angular2/src/web_workers/shared/message_bus", "angular2/src/web_workers/shared/serializer", "angular2/src/core/render/api", "angular2/src/web_workers/shared/messaging_api", "angular2/src/web_workers/ui/bind", "angular2/src/web_workers/ui/event_dispatcher", "angular2/src/web_workers/shared/render_store", "angular2/src/web_workers/shared/service_message_broker"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var message_bus_1 = require("angular2/src/web_workers/shared/message_bus");
  var serializer_1 = require("angular2/src/web_workers/shared/serializer");
  var api_1 = require("angular2/src/core/render/api");
  var messaging_api_1 = require("angular2/src/web_workers/shared/messaging_api");
  var bind_1 = require("angular2/src/web_workers/ui/bind");
  var event_dispatcher_1 = require("angular2/src/web_workers/ui/event_dispatcher");
  var render_store_1 = require("angular2/src/web_workers/shared/render_store");
  var service_message_broker_1 = require("angular2/src/web_workers/shared/service_message_broker");
  var MessageBasedRenderer = (function() {
    function MessageBasedRenderer(_brokerFactory, _bus, _serializer, _renderStore, _rootRenderer) {
      this._brokerFactory = _brokerFactory;
      this._bus = _bus;
      this._serializer = _serializer;
      this._renderStore = _renderStore;
      this._rootRenderer = _rootRenderer;
    }
    MessageBasedRenderer.prototype.start = function() {
      var broker = this._brokerFactory.createMessageBroker(messaging_api_1.RENDERER_CHANNEL);
      this._bus.initChannel(messaging_api_1.EVENT_CHANNEL);
      this._eventDispatcher = new event_dispatcher_1.EventDispatcher(this._bus.to(messaging_api_1.EVENT_CHANNEL), this._serializer);
      broker.registerMethod("renderComponent", [api_1.RenderComponentType, serializer_1.PRIMITIVE], bind_1.bind(this._renderComponent, this));
      broker.registerMethod("selectRootElement", [serializer_1.RenderStoreObject, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._selectRootElement, this));
      broker.registerMethod("createElement", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._createElement, this));
      broker.registerMethod("createViewRoot", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE], bind_1.bind(this._createViewRoot, this));
      broker.registerMethod("createTemplateAnchor", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE], bind_1.bind(this._createTemplateAnchor, this));
      broker.registerMethod("createText", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._createText, this));
      broker.registerMethod("projectNodes", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.RenderStoreObject], bind_1.bind(this._projectNodes, this));
      broker.registerMethod("attachViewAfter", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.RenderStoreObject], bind_1.bind(this._attachViewAfter, this));
      broker.registerMethod("detachView", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject], bind_1.bind(this._detachView, this));
      broker.registerMethod("destroyView", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.RenderStoreObject], bind_1.bind(this._destroyView, this));
      broker.registerMethod("setElementProperty", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._setElementProperty, this));
      broker.registerMethod("setElementAttribute", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._setElementAttribute, this));
      broker.registerMethod("setBindingDebugInfo", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._setBindingDebugInfo, this));
      broker.registerMethod("setElementClass", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._setElementClass, this));
      broker.registerMethod("setElementStyle", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._setElementStyle, this));
      broker.registerMethod("invokeElementMethod", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._invokeElementMethod, this));
      broker.registerMethod("setText", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE], bind_1.bind(this._setText, this));
      broker.registerMethod("listen", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject, serializer_1.PRIMITIVE], bind_1.bind(this._listen, this));
      broker.registerMethod("listenGlobal", [serializer_1.RenderStoreObject, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._listenGlobal, this));
      broker.registerMethod("listenGlobalDone", [serializer_1.RenderStoreObject, serializer_1.RenderStoreObject], bind_1.bind(this._listenGlobalDone, this));
    };
    MessageBasedRenderer.prototype._renderComponent = function(renderComponentType, rendererId) {
      var renderer = this._rootRenderer.renderComponent(renderComponentType);
      this._renderStore.store(renderer, rendererId);
    };
    MessageBasedRenderer.prototype._selectRootElement = function(renderer, selector, elId) {
      this._renderStore.store(renderer.selectRootElement(selector), elId);
    };
    MessageBasedRenderer.prototype._createElement = function(renderer, parentElement, name, elId) {
      this._renderStore.store(renderer.createElement(parentElement, name), elId);
    };
    MessageBasedRenderer.prototype._createViewRoot = function(renderer, hostElement, elId) {
      var viewRoot = renderer.createViewRoot(hostElement);
      if (this._renderStore.serialize(hostElement) !== elId) {
        this._renderStore.store(viewRoot, elId);
      }
    };
    MessageBasedRenderer.prototype._createTemplateAnchor = function(renderer, parentElement, elId) {
      this._renderStore.store(renderer.createTemplateAnchor(parentElement), elId);
    };
    MessageBasedRenderer.prototype._createText = function(renderer, parentElement, value, elId) {
      this._renderStore.store(renderer.createText(parentElement, value), elId);
    };
    MessageBasedRenderer.prototype._projectNodes = function(renderer, parentElement, nodes) {
      renderer.projectNodes(parentElement, nodes);
    };
    MessageBasedRenderer.prototype._attachViewAfter = function(renderer, node, viewRootNodes) {
      renderer.attachViewAfter(node, viewRootNodes);
    };
    MessageBasedRenderer.prototype._detachView = function(renderer, viewRootNodes) {
      renderer.detachView(viewRootNodes);
    };
    MessageBasedRenderer.prototype._destroyView = function(renderer, hostElement, viewAllNodes) {
      renderer.destroyView(hostElement, viewAllNodes);
      for (var i = 0; i < viewAllNodes.length; i++) {
        this._renderStore.remove(viewAllNodes[i]);
      }
    };
    MessageBasedRenderer.prototype._setElementProperty = function(renderer, renderElement, propertyName, propertyValue) {
      renderer.setElementProperty(renderElement, propertyName, propertyValue);
    };
    MessageBasedRenderer.prototype._setElementAttribute = function(renderer, renderElement, attributeName, attributeValue) {
      renderer.setElementAttribute(renderElement, attributeName, attributeValue);
    };
    MessageBasedRenderer.prototype._setBindingDebugInfo = function(renderer, renderElement, propertyName, propertyValue) {
      renderer.setBindingDebugInfo(renderElement, propertyName, propertyValue);
    };
    MessageBasedRenderer.prototype._setElementClass = function(renderer, renderElement, className, isAdd) {
      renderer.setElementClass(renderElement, className, isAdd);
    };
    MessageBasedRenderer.prototype._setElementStyle = function(renderer, renderElement, styleName, styleValue) {
      renderer.setElementStyle(renderElement, styleName, styleValue);
    };
    MessageBasedRenderer.prototype._invokeElementMethod = function(renderer, renderElement, methodName, args) {
      renderer.invokeElementMethod(renderElement, methodName, args);
    };
    MessageBasedRenderer.prototype._setText = function(renderer, renderNode, text) {
      renderer.setText(renderNode, text);
    };
    MessageBasedRenderer.prototype._listen = function(renderer, renderElement, eventName) {
      var _this = this;
      renderer.listen(renderElement, eventName, function(event) {
        return _this._eventDispatcher.dispatchRenderEvent(renderElement, null, eventName, event);
      });
    };
    MessageBasedRenderer.prototype._listenGlobal = function(renderer, eventTarget, eventName, unlistenId) {
      var _this = this;
      var unregisterCallback = renderer.listenGlobal(eventTarget, eventName, function(event) {
        return _this._eventDispatcher.dispatchRenderEvent(null, eventTarget, eventName, event);
      });
      this._renderStore.store(unregisterCallback, unlistenId);
    };
    MessageBasedRenderer.prototype._listenGlobalDone = function(renderer, unlistenCallback) {
      unlistenCallback();
    };
    MessageBasedRenderer = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [service_message_broker_1.ServiceMessageBrokerFactory, message_bus_1.MessageBus, serializer_1.Serializer, render_store_1.RenderStore, api_1.RootRenderer])], MessageBasedRenderer);
    return MessageBasedRenderer;
  })();
  exports.MessageBasedRenderer = MessageBasedRenderer;
  global.define = __define;
  return module.exports;
});

System.register("rxjs/Subscriber", ["rxjs/util/noop", "rxjs/util/throwError", "rxjs/util/tryOrOnError", "rxjs/Subscription", "rxjs/symbol/rxSubscriber"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var noop_1 = require("rxjs/util/noop");
  var throwError_1 = require("rxjs/util/throwError");
  var tryOrOnError_1 = require("rxjs/util/tryOrOnError");
  var Subscription_1 = require("rxjs/Subscription");
  var rxSubscriber_1 = require("rxjs/symbol/rxSubscriber");
  var Subscriber = (function(_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
      _super.call(this);
      this.destination = destination;
      this._isUnsubscribed = false;
      if (!this.destination) {
        return ;
      }
      var subscription = destination._subscription;
      if (subscription) {
        this._subscription = subscription;
      } else if (destination instanceof Subscriber) {
        this._subscription = destination;
      }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function() {
      return this;
    };
    Object.defineProperty(Subscriber.prototype, "isUnsubscribed", {
      get: function() {
        var subscription = this._subscription;
        if (subscription) {
          return this._isUnsubscribed || subscription.isUnsubscribed;
        } else {
          return this._isUnsubscribed;
        }
      },
      set: function(value) {
        var subscription = this._subscription;
        if (subscription) {
          subscription.isUnsubscribed = Boolean(value);
        } else {
          this._isUnsubscribed = Boolean(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Subscriber.create = function(next, error, complete) {
      var subscriber = new Subscriber();
      subscriber._next = (typeof next === 'function') && tryOrOnError_1.tryOrOnError(next) || noop_1.noop;
      subscriber._error = (typeof error === 'function') && error || throwError_1.throwError;
      subscriber._complete = (typeof complete === 'function') && complete || noop_1.noop;
      return subscriber;
    };
    Subscriber.prototype.add = function(sub) {
      var _subscription = this._subscription;
      if (_subscription) {
        _subscription.add(sub);
      } else {
        _super.prototype.add.call(this, sub);
      }
    };
    Subscriber.prototype.remove = function(sub) {
      if (this._subscription) {
        this._subscription.remove(sub);
      } else {
        _super.prototype.remove.call(this, sub);
      }
    };
    Subscriber.prototype.unsubscribe = function() {
      if (this._isUnsubscribed) {
        return ;
      } else if (this._subscription) {
        this._isUnsubscribed = true;
      } else {
        _super.prototype.unsubscribe.call(this);
      }
    };
    Subscriber.prototype._next = function(value) {
      var destination = this.destination;
      if (destination.next) {
        destination.next(value);
      }
    };
    Subscriber.prototype._error = function(err) {
      var destination = this.destination;
      if (destination.error) {
        destination.error(err);
      }
    };
    Subscriber.prototype._complete = function() {
      var destination = this.destination;
      if (destination.complete) {
        destination.complete();
      }
    };
    Subscriber.prototype.next = function(value) {
      if (!this.isUnsubscribed) {
        this._next(value);
      }
    };
    Subscriber.prototype.error = function(err) {
      if (!this.isUnsubscribed) {
        this._error(err);
        this.unsubscribe();
      }
    };
    Subscriber.prototype.complete = function() {
      if (!this.isUnsubscribed) {
        this._complete();
        this.unsubscribe();
      }
    };
    return Subscriber;
  })(Subscription_1.Subscription);
  exports.Subscriber = Subscriber;
  global.define = __define;
  return module.exports;
});

System.register("rxjs/observable/fromPromise", ["rxjs/Observable", "rxjs/Subscription", "rxjs/scheduler/queue"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = require("rxjs/Observable");
  var Subscription_1 = require("rxjs/Subscription");
  var queue_1 = require("rxjs/scheduler/queue");
  var PromiseObservable = (function(_super) {
    __extends(PromiseObservable, _super);
    function PromiseObservable(promise, scheduler) {
      if (scheduler === void 0) {
        scheduler = queue_1.queue;
      }
      _super.call(this);
      this.promise = promise;
      this.scheduler = scheduler;
      this._isScalar = false;
    }
    PromiseObservable.create = function(promise, scheduler) {
      if (scheduler === void 0) {
        scheduler = queue_1.queue;
      }
      return new PromiseObservable(promise, scheduler);
    };
    PromiseObservable.prototype._subscribe = function(subscriber) {
      var _this = this;
      var scheduler = this.scheduler;
      var promise = this.promise;
      if (scheduler === queue_1.queue) {
        if (this._isScalar) {
          subscriber.next(this.value);
          subscriber.complete();
        } else {
          promise.then(function(value) {
            _this._isScalar = true;
            _this.value = value;
            subscriber.next(value);
            subscriber.complete();
          }, function(err) {
            return subscriber.error(err);
          }).then(null, function(err) {
            setTimeout(function() {
              throw err;
            });
          });
        }
      } else {
        var subscription = new Subscription_1.Subscription();
        if (this._isScalar) {
          var value = this.value;
          subscription.add(scheduler.schedule(dispatchNext, 0, {
            value: value,
            subscriber: subscriber
          }));
        } else {
          promise.then(function(value) {
            _this._isScalar = true;
            _this.value = value;
            subscription.add(scheduler.schedule(dispatchNext, 0, {
              value: value,
              subscriber: subscriber
            }));
          }, function(err) {
            return subscription.add(scheduler.schedule(dispatchError, 0, {
              err: err,
              subscriber: subscriber
            }));
          }).then(null, function(err) {
            scheduler.schedule(function() {
              throw err;
            });
          });
        }
        return subscription;
      }
    };
    return PromiseObservable;
  })(Observable_1.Observable);
  exports.PromiseObservable = PromiseObservable;
  function dispatchNext(_a) {
    var value = _a.value,
        subscriber = _a.subscriber;
    subscriber.next(value);
    subscriber.complete();
  }
  function dispatchError(_a) {
    var err = _a.err,
        subscriber = _a.subscriber;
    subscriber.error(err);
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/di/injector", ["angular2/src/facade/collection", "angular2/src/core/di/provider", "angular2/src/core/di/exceptions", "angular2/src/facade/lang", "angular2/src/core/di/key", "angular2/src/core/di/metadata"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var collection_1 = require("angular2/src/facade/collection");
  var provider_1 = require("angular2/src/core/di/provider");
  var exceptions_1 = require("angular2/src/core/di/exceptions");
  var lang_1 = require("angular2/src/facade/lang");
  var key_1 = require("angular2/src/core/di/key");
  var metadata_1 = require("angular2/src/core/di/metadata");
  var _MAX_CONSTRUCTION_COUNTER = 10;
  exports.UNDEFINED = lang_1.CONST_EXPR(new Object());
  (function(Visibility) {
    Visibility[Visibility["Public"] = 0] = "Public";
    Visibility[Visibility["Private"] = 1] = "Private";
    Visibility[Visibility["PublicAndPrivate"] = 2] = "PublicAndPrivate";
  })(exports.Visibility || (exports.Visibility = {}));
  var Visibility = exports.Visibility;
  function canSee(src, dst) {
    return (src === dst) || (dst === Visibility.PublicAndPrivate || src === Visibility.PublicAndPrivate);
  }
  var ProtoInjectorInlineStrategy = (function() {
    function ProtoInjectorInlineStrategy(protoEI, bwv) {
      this.provider0 = null;
      this.provider1 = null;
      this.provider2 = null;
      this.provider3 = null;
      this.provider4 = null;
      this.provider5 = null;
      this.provider6 = null;
      this.provider7 = null;
      this.provider8 = null;
      this.provider9 = null;
      this.keyId0 = null;
      this.keyId1 = null;
      this.keyId2 = null;
      this.keyId3 = null;
      this.keyId4 = null;
      this.keyId5 = null;
      this.keyId6 = null;
      this.keyId7 = null;
      this.keyId8 = null;
      this.keyId9 = null;
      this.visibility0 = null;
      this.visibility1 = null;
      this.visibility2 = null;
      this.visibility3 = null;
      this.visibility4 = null;
      this.visibility5 = null;
      this.visibility6 = null;
      this.visibility7 = null;
      this.visibility8 = null;
      this.visibility9 = null;
      var length = bwv.length;
      if (length > 0) {
        this.provider0 = bwv[0].provider;
        this.keyId0 = bwv[0].getKeyId();
        this.visibility0 = bwv[0].visibility;
      }
      if (length > 1) {
        this.provider1 = bwv[1].provider;
        this.keyId1 = bwv[1].getKeyId();
        this.visibility1 = bwv[1].visibility;
      }
      if (length > 2) {
        this.provider2 = bwv[2].provider;
        this.keyId2 = bwv[2].getKeyId();
        this.visibility2 = bwv[2].visibility;
      }
      if (length > 3) {
        this.provider3 = bwv[3].provider;
        this.keyId3 = bwv[3].getKeyId();
        this.visibility3 = bwv[3].visibility;
      }
      if (length > 4) {
        this.provider4 = bwv[4].provider;
        this.keyId4 = bwv[4].getKeyId();
        this.visibility4 = bwv[4].visibility;
      }
      if (length > 5) {
        this.provider5 = bwv[5].provider;
        this.keyId5 = bwv[5].getKeyId();
        this.visibility5 = bwv[5].visibility;
      }
      if (length > 6) {
        this.provider6 = bwv[6].provider;
        this.keyId6 = bwv[6].getKeyId();
        this.visibility6 = bwv[6].visibility;
      }
      if (length > 7) {
        this.provider7 = bwv[7].provider;
        this.keyId7 = bwv[7].getKeyId();
        this.visibility7 = bwv[7].visibility;
      }
      if (length > 8) {
        this.provider8 = bwv[8].provider;
        this.keyId8 = bwv[8].getKeyId();
        this.visibility8 = bwv[8].visibility;
      }
      if (length > 9) {
        this.provider9 = bwv[9].provider;
        this.keyId9 = bwv[9].getKeyId();
        this.visibility9 = bwv[9].visibility;
      }
    }
    ProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function(index) {
      if (index == 0)
        return this.provider0;
      if (index == 1)
        return this.provider1;
      if (index == 2)
        return this.provider2;
      if (index == 3)
        return this.provider3;
      if (index == 4)
        return this.provider4;
      if (index == 5)
        return this.provider5;
      if (index == 6)
        return this.provider6;
      if (index == 7)
        return this.provider7;
      if (index == 8)
        return this.provider8;
      if (index == 9)
        return this.provider9;
      throw new exceptions_1.OutOfBoundsError(index);
    };
    ProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function(injector) {
      return new InjectorInlineStrategy(injector, this);
    };
    return ProtoInjectorInlineStrategy;
  })();
  exports.ProtoInjectorInlineStrategy = ProtoInjectorInlineStrategy;
  var ProtoInjectorDynamicStrategy = (function() {
    function ProtoInjectorDynamicStrategy(protoInj, bwv) {
      var len = bwv.length;
      this.providers = collection_1.ListWrapper.createFixedSize(len);
      this.keyIds = collection_1.ListWrapper.createFixedSize(len);
      this.visibilities = collection_1.ListWrapper.createFixedSize(len);
      for (var i = 0; i < len; i++) {
        this.providers[i] = bwv[i].provider;
        this.keyIds[i] = bwv[i].getKeyId();
        this.visibilities[i] = bwv[i].visibility;
      }
    }
    ProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function(index) {
      if (index < 0 || index >= this.providers.length) {
        throw new exceptions_1.OutOfBoundsError(index);
      }
      return this.providers[index];
    };
    ProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function(ei) {
      return new InjectorDynamicStrategy(this, ei);
    };
    return ProtoInjectorDynamicStrategy;
  })();
  exports.ProtoInjectorDynamicStrategy = ProtoInjectorDynamicStrategy;
  var ProtoInjector = (function() {
    function ProtoInjector(bwv) {
      this.numberOfProviders = bwv.length;
      this._strategy = bwv.length > _MAX_CONSTRUCTION_COUNTER ? new ProtoInjectorDynamicStrategy(this, bwv) : new ProtoInjectorInlineStrategy(this, bwv);
    }
    ProtoInjector.fromResolvedProviders = function(providers) {
      var bd = providers.map(function(b) {
        return new ProviderWithVisibility(b, Visibility.Public);
      });
      return new ProtoInjector(bd);
    };
    ProtoInjector.prototype.getProviderAtIndex = function(index) {
      return this._strategy.getProviderAtIndex(index);
    };
    return ProtoInjector;
  })();
  exports.ProtoInjector = ProtoInjector;
  var InjectorInlineStrategy = (function() {
    function InjectorInlineStrategy(injector, protoStrategy) {
      this.injector = injector;
      this.protoStrategy = protoStrategy;
      this.obj0 = exports.UNDEFINED;
      this.obj1 = exports.UNDEFINED;
      this.obj2 = exports.UNDEFINED;
      this.obj3 = exports.UNDEFINED;
      this.obj4 = exports.UNDEFINED;
      this.obj5 = exports.UNDEFINED;
      this.obj6 = exports.UNDEFINED;
      this.obj7 = exports.UNDEFINED;
      this.obj8 = exports.UNDEFINED;
      this.obj9 = exports.UNDEFINED;
    }
    InjectorInlineStrategy.prototype.resetConstructionCounter = function() {
      this.injector._constructionCounter = 0;
    };
    InjectorInlineStrategy.prototype.instantiateProvider = function(provider, visibility) {
      return this.injector._new(provider, visibility);
    };
    InjectorInlineStrategy.prototype.getObjByKeyId = function(keyId, visibility) {
      var p = this.protoStrategy;
      var inj = this.injector;
      if (p.keyId0 === keyId && canSee(p.visibility0, visibility)) {
        if (this.obj0 === exports.UNDEFINED) {
          this.obj0 = inj._new(p.provider0, p.visibility0);
        }
        return this.obj0;
      }
      if (p.keyId1 === keyId && canSee(p.visibility1, visibility)) {
        if (this.obj1 === exports.UNDEFINED) {
          this.obj1 = inj._new(p.provider1, p.visibility1);
        }
        return this.obj1;
      }
      if (p.keyId2 === keyId && canSee(p.visibility2, visibility)) {
        if (this.obj2 === exports.UNDEFINED) {
          this.obj2 = inj._new(p.provider2, p.visibility2);
        }
        return this.obj2;
      }
      if (p.keyId3 === keyId && canSee(p.visibility3, visibility)) {
        if (this.obj3 === exports.UNDEFINED) {
          this.obj3 = inj._new(p.provider3, p.visibility3);
        }
        return this.obj3;
      }
      if (p.keyId4 === keyId && canSee(p.visibility4, visibility)) {
        if (this.obj4 === exports.UNDEFINED) {
          this.obj4 = inj._new(p.provider4, p.visibility4);
        }
        return this.obj4;
      }
      if (p.keyId5 === keyId && canSee(p.visibility5, visibility)) {
        if (this.obj5 === exports.UNDEFINED) {
          this.obj5 = inj._new(p.provider5, p.visibility5);
        }
        return this.obj5;
      }
      if (p.keyId6 === keyId && canSee(p.visibility6, visibility)) {
        if (this.obj6 === exports.UNDEFINED) {
          this.obj6 = inj._new(p.provider6, p.visibility6);
        }
        return this.obj6;
      }
      if (p.keyId7 === keyId && canSee(p.visibility7, visibility)) {
        if (this.obj7 === exports.UNDEFINED) {
          this.obj7 = inj._new(p.provider7, p.visibility7);
        }
        return this.obj7;
      }
      if (p.keyId8 === keyId && canSee(p.visibility8, visibility)) {
        if (this.obj8 === exports.UNDEFINED) {
          this.obj8 = inj._new(p.provider8, p.visibility8);
        }
        return this.obj8;
      }
      if (p.keyId9 === keyId && canSee(p.visibility9, visibility)) {
        if (this.obj9 === exports.UNDEFINED) {
          this.obj9 = inj._new(p.provider9, p.visibility9);
        }
        return this.obj9;
      }
      return exports.UNDEFINED;
    };
    InjectorInlineStrategy.prototype.getObjAtIndex = function(index) {
      if (index == 0)
        return this.obj0;
      if (index == 1)
        return this.obj1;
      if (index == 2)
        return this.obj2;
      if (index == 3)
        return this.obj3;
      if (index == 4)
        return this.obj4;
      if (index == 5)
        return this.obj5;
      if (index == 6)
        return this.obj6;
      if (index == 7)
        return this.obj7;
      if (index == 8)
        return this.obj8;
      if (index == 9)
        return this.obj9;
      throw new exceptions_1.OutOfBoundsError(index);
    };
    InjectorInlineStrategy.prototype.getMaxNumberOfObjects = function() {
      return _MAX_CONSTRUCTION_COUNTER;
    };
    return InjectorInlineStrategy;
  })();
  exports.InjectorInlineStrategy = InjectorInlineStrategy;
  var InjectorDynamicStrategy = (function() {
    function InjectorDynamicStrategy(protoStrategy, injector) {
      this.protoStrategy = protoStrategy;
      this.injector = injector;
      this.objs = collection_1.ListWrapper.createFixedSize(protoStrategy.providers.length);
      collection_1.ListWrapper.fill(this.objs, exports.UNDEFINED);
    }
    InjectorDynamicStrategy.prototype.resetConstructionCounter = function() {
      this.injector._constructionCounter = 0;
    };
    InjectorDynamicStrategy.prototype.instantiateProvider = function(provider, visibility) {
      return this.injector._new(provider, visibility);
    };
    InjectorDynamicStrategy.prototype.getObjByKeyId = function(keyId, visibility) {
      var p = this.protoStrategy;
      for (var i = 0; i < p.keyIds.length; i++) {
        if (p.keyIds[i] === keyId && canSee(p.visibilities[i], visibility)) {
          if (this.objs[i] === exports.UNDEFINED) {
            this.objs[i] = this.injector._new(p.providers[i], p.visibilities[i]);
          }
          return this.objs[i];
        }
      }
      return exports.UNDEFINED;
    };
    InjectorDynamicStrategy.prototype.getObjAtIndex = function(index) {
      if (index < 0 || index >= this.objs.length) {
        throw new exceptions_1.OutOfBoundsError(index);
      }
      return this.objs[index];
    };
    InjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function() {
      return this.objs.length;
    };
    return InjectorDynamicStrategy;
  })();
  exports.InjectorDynamicStrategy = InjectorDynamicStrategy;
  var ProviderWithVisibility = (function() {
    function ProviderWithVisibility(provider, visibility) {
      this.provider = provider;
      this.visibility = visibility;
    }
    ;
    ProviderWithVisibility.prototype.getKeyId = function() {
      return this.provider.key.id;
    };
    return ProviderWithVisibility;
  })();
  exports.ProviderWithVisibility = ProviderWithVisibility;
  var Injector = (function() {
    function Injector(_proto, _parent, _isHostBoundary, _depProvider, _debugContext) {
      if (_parent === void 0) {
        _parent = null;
      }
      if (_isHostBoundary === void 0) {
        _isHostBoundary = false;
      }
      if (_depProvider === void 0) {
        _depProvider = null;
      }
      if (_debugContext === void 0) {
        _debugContext = null;
      }
      this._isHostBoundary = _isHostBoundary;
      this._depProvider = _depProvider;
      this._debugContext = _debugContext;
      this._constructionCounter = 0;
      this._proto = _proto;
      this._parent = _parent;
      this._strategy = _proto._strategy.createInjectorStrategy(this);
    }
    Injector.resolve = function(providers) {
      return provider_1.resolveProviders(providers);
    };
    Injector.resolveAndCreate = function(providers) {
      var resolvedProviders = Injector.resolve(providers);
      return Injector.fromResolvedProviders(resolvedProviders);
    };
    Injector.fromResolvedProviders = function(providers) {
      return new Injector(ProtoInjector.fromResolvedProviders(providers));
    };
    Injector.fromResolvedBindings = function(providers) {
      return Injector.fromResolvedProviders(providers);
    };
    Object.defineProperty(Injector.prototype, "hostBoundary", {
      get: function() {
        return this._isHostBoundary;
      },
      enumerable: true,
      configurable: true
    });
    Injector.prototype.debugContext = function() {
      return this._debugContext();
    };
    Injector.prototype.get = function(token) {
      return this._getByKey(key_1.Key.get(token), null, null, false, Visibility.PublicAndPrivate);
    };
    Injector.prototype.getOptional = function(token) {
      return this._getByKey(key_1.Key.get(token), null, null, true, Visibility.PublicAndPrivate);
    };
    Injector.prototype.getAt = function(index) {
      return this._strategy.getObjAtIndex(index);
    };
    Object.defineProperty(Injector.prototype, "parent", {
      get: function() {
        return this._parent;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Injector.prototype, "internalStrategy", {
      get: function() {
        return this._strategy;
      },
      enumerable: true,
      configurable: true
    });
    Injector.prototype.resolveAndCreateChild = function(providers) {
      var resolvedProviders = Injector.resolve(providers);
      return this.createChildFromResolved(resolvedProviders);
    };
    Injector.prototype.createChildFromResolved = function(providers) {
      var bd = providers.map(function(b) {
        return new ProviderWithVisibility(b, Visibility.Public);
      });
      var proto = new ProtoInjector(bd);
      var inj = new Injector(proto);
      inj._parent = this;
      return inj;
    };
    Injector.prototype.resolveAndInstantiate = function(provider) {
      return this.instantiateResolved(Injector.resolve([provider])[0]);
    };
    Injector.prototype.instantiateResolved = function(provider) {
      return this._instantiateProvider(provider, Visibility.PublicAndPrivate);
    };
    Injector.prototype._new = function(provider, visibility) {
      if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
        throw new exceptions_1.CyclicDependencyError(this, provider.key);
      }
      return this._instantiateProvider(provider, visibility);
    };
    Injector.prototype._instantiateProvider = function(provider, visibility) {
      if (provider.multiProvider) {
        var res = collection_1.ListWrapper.createFixedSize(provider.resolvedFactories.length);
        for (var i = 0; i < provider.resolvedFactories.length; ++i) {
          res[i] = this._instantiate(provider, provider.resolvedFactories[i], visibility);
        }
        return res;
      } else {
        return this._instantiate(provider, provider.resolvedFactories[0], visibility);
      }
    };
    Injector.prototype._instantiate = function(provider, resolvedFactory, visibility) {
      var factory = resolvedFactory.factory;
      var deps = resolvedFactory.dependencies;
      var length = deps.length;
      var d0,
          d1,
          d2,
          d3,
          d4,
          d5,
          d6,
          d7,
          d8,
          d9,
          d10,
          d11,
          d12,
          d13,
          d14,
          d15,
          d16,
          d17,
          d18,
          d19;
      try {
        d0 = length > 0 ? this._getByDependency(provider, deps[0], visibility) : null;
        d1 = length > 1 ? this._getByDependency(provider, deps[1], visibility) : null;
        d2 = length > 2 ? this._getByDependency(provider, deps[2], visibility) : null;
        d3 = length > 3 ? this._getByDependency(provider, deps[3], visibility) : null;
        d4 = length > 4 ? this._getByDependency(provider, deps[4], visibility) : null;
        d5 = length > 5 ? this._getByDependency(provider, deps[5], visibility) : null;
        d6 = length > 6 ? this._getByDependency(provider, deps[6], visibility) : null;
        d7 = length > 7 ? this._getByDependency(provider, deps[7], visibility) : null;
        d8 = length > 8 ? this._getByDependency(provider, deps[8], visibility) : null;
        d9 = length > 9 ? this._getByDependency(provider, deps[9], visibility) : null;
        d10 = length > 10 ? this._getByDependency(provider, deps[10], visibility) : null;
        d11 = length > 11 ? this._getByDependency(provider, deps[11], visibility) : null;
        d12 = length > 12 ? this._getByDependency(provider, deps[12], visibility) : null;
        d13 = length > 13 ? this._getByDependency(provider, deps[13], visibility) : null;
        d14 = length > 14 ? this._getByDependency(provider, deps[14], visibility) : null;
        d15 = length > 15 ? this._getByDependency(provider, deps[15], visibility) : null;
        d16 = length > 16 ? this._getByDependency(provider, deps[16], visibility) : null;
        d17 = length > 17 ? this._getByDependency(provider, deps[17], visibility) : null;
        d18 = length > 18 ? this._getByDependency(provider, deps[18], visibility) : null;
        d19 = length > 19 ? this._getByDependency(provider, deps[19], visibility) : null;
      } catch (e) {
        if (e instanceof exceptions_1.AbstractProviderError || e instanceof exceptions_1.InstantiationError) {
          e.addKey(this, provider.key);
        }
        throw e;
      }
      var obj;
      try {
        switch (length) {
          case 0:
            obj = factory();
            break;
          case 1:
            obj = factory(d0);
            break;
          case 2:
            obj = factory(d0, d1);
            break;
          case 3:
            obj = factory(d0, d1, d2);
            break;
          case 4:
            obj = factory(d0, d1, d2, d3);
            break;
          case 5:
            obj = factory(d0, d1, d2, d3, d4);
            break;
          case 6:
            obj = factory(d0, d1, d2, d3, d4, d5);
            break;
          case 7:
            obj = factory(d0, d1, d2, d3, d4, d5, d6);
            break;
          case 8:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
            break;
          case 9:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
            break;
          case 10:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
            break;
          case 11:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
            break;
          case 12:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
            break;
          case 13:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
            break;
          case 14:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
            break;
          case 15:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
            break;
          case 16:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
            break;
          case 17:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
            break;
          case 18:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
            break;
          case 19:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
            break;
          case 20:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
            break;
        }
      } catch (e) {
        throw new exceptions_1.InstantiationError(this, e, e.stack, provider.key);
      }
      return obj;
    };
    Injector.prototype._getByDependency = function(provider, dep, providerVisibility) {
      var special = lang_1.isPresent(this._depProvider) ? this._depProvider.getDependency(this, provider, dep) : exports.UNDEFINED;
      if (special !== exports.UNDEFINED) {
        return special;
      } else {
        return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional, providerVisibility);
      }
    };
    Injector.prototype._getByKey = function(key, lowerBoundVisibility, upperBoundVisibility, optional, providerVisibility) {
      if (key === INJECTOR_KEY) {
        return this;
      }
      if (upperBoundVisibility instanceof metadata_1.SelfMetadata) {
        return this._getByKeySelf(key, optional, providerVisibility);
      } else if (upperBoundVisibility instanceof metadata_1.HostMetadata) {
        return this._getByKeyHost(key, optional, providerVisibility, lowerBoundVisibility);
      } else {
        return this._getByKeyDefault(key, optional, providerVisibility, lowerBoundVisibility);
      }
    };
    Injector.prototype._throwOrNull = function(key, optional) {
      if (optional) {
        return null;
      } else {
        throw new exceptions_1.NoProviderError(this, key);
      }
    };
    Injector.prototype._getByKeySelf = function(key, optional, providerVisibility) {
      var obj = this._strategy.getObjByKeyId(key.id, providerVisibility);
      return (obj !== exports.UNDEFINED) ? obj : this._throwOrNull(key, optional);
    };
    Injector.prototype._getByKeyHost = function(key, optional, providerVisibility, lowerBoundVisibility) {
      var inj = this;
      if (lowerBoundVisibility instanceof metadata_1.SkipSelfMetadata) {
        if (inj._isHostBoundary) {
          return this._getPrivateDependency(key, optional, inj);
        } else {
          inj = inj._parent;
        }
      }
      while (inj != null) {
        var obj = inj._strategy.getObjByKeyId(key.id, providerVisibility);
        if (obj !== exports.UNDEFINED)
          return obj;
        if (lang_1.isPresent(inj._parent) && inj._isHostBoundary) {
          return this._getPrivateDependency(key, optional, inj);
        } else {
          inj = inj._parent;
        }
      }
      return this._throwOrNull(key, optional);
    };
    Injector.prototype._getPrivateDependency = function(key, optional, inj) {
      var obj = inj._parent._strategy.getObjByKeyId(key.id, Visibility.Private);
      return (obj !== exports.UNDEFINED) ? obj : this._throwOrNull(key, optional);
    };
    Injector.prototype._getByKeyDefault = function(key, optional, providerVisibility, lowerBoundVisibility) {
      var inj = this;
      if (lowerBoundVisibility instanceof metadata_1.SkipSelfMetadata) {
        providerVisibility = inj._isHostBoundary ? Visibility.PublicAndPrivate : Visibility.Public;
        inj = inj._parent;
      }
      while (inj != null) {
        var obj = inj._strategy.getObjByKeyId(key.id, providerVisibility);
        if (obj !== exports.UNDEFINED)
          return obj;
        providerVisibility = inj._isHostBoundary ? Visibility.PublicAndPrivate : Visibility.Public;
        inj = inj._parent;
      }
      return this._throwOrNull(key, optional);
    };
    Object.defineProperty(Injector.prototype, "displayName", {
      get: function() {
        return "Injector(providers: [" + _mapProviders(this, function(b) {
          return (" \"" + b.key.displayName + "\" ");
        }).join(", ") + "])";
      },
      enumerable: true,
      configurable: true
    });
    Injector.prototype.toString = function() {
      return this.displayName;
    };
    return Injector;
  })();
  exports.Injector = Injector;
  var INJECTOR_KEY = key_1.Key.get(Injector);
  function _mapProviders(injector, fn) {
    var res = [];
    for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
      res.push(fn(injector._proto.getProviderAtIndex(i)));
    }
    return res;
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/proto_change_detector", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/core/change_detection/parser/ast", "angular2/src/core/change_detection/change_detection_util", "angular2/src/core/change_detection/dynamic_change_detector", "angular2/src/core/change_detection/directive_record", "angular2/src/core/change_detection/event_binding", "angular2/src/core/change_detection/coalesce", "angular2/src/core/change_detection/proto_record"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var ast_1 = require("angular2/src/core/change_detection/parser/ast");
  var change_detection_util_1 = require("angular2/src/core/change_detection/change_detection_util");
  var dynamic_change_detector_1 = require("angular2/src/core/change_detection/dynamic_change_detector");
  var directive_record_1 = require("angular2/src/core/change_detection/directive_record");
  var event_binding_1 = require("angular2/src/core/change_detection/event_binding");
  var coalesce_1 = require("angular2/src/core/change_detection/coalesce");
  var proto_record_1 = require("angular2/src/core/change_detection/proto_record");
  var DynamicProtoChangeDetector = (function() {
    function DynamicProtoChangeDetector(_definition) {
      this._definition = _definition;
      this._propertyBindingRecords = createPropertyRecords(_definition);
      this._eventBindingRecords = createEventRecords(_definition);
      this._propertyBindingTargets = this._definition.bindingRecords.map(function(b) {
        return b.target;
      });
      this._directiveIndices = this._definition.directiveRecords.map(function(d) {
        return d.directiveIndex;
      });
    }
    DynamicProtoChangeDetector.prototype.instantiate = function() {
      return new dynamic_change_detector_1.DynamicChangeDetector(this._definition.id, this._propertyBindingRecords.length, this._propertyBindingTargets, this._directiveIndices, this._definition.strategy, this._propertyBindingRecords, this._eventBindingRecords, this._definition.directiveRecords, this._definition.genConfig);
    };
    return DynamicProtoChangeDetector;
  })();
  exports.DynamicProtoChangeDetector = DynamicProtoChangeDetector;
  function createPropertyRecords(definition) {
    var recordBuilder = new ProtoRecordBuilder();
    collection_1.ListWrapper.forEachWithIndex(definition.bindingRecords, function(b, index) {
      return recordBuilder.add(b, definition.variableNames, index);
    });
    return coalesce_1.coalesce(recordBuilder.records);
  }
  exports.createPropertyRecords = createPropertyRecords;
  function createEventRecords(definition) {
    var varNames = collection_1.ListWrapper.concat(['$event'], definition.variableNames);
    return definition.eventRecords.map(function(er) {
      var records = _ConvertAstIntoProtoRecords.create(er, varNames);
      var dirIndex = er.implicitReceiver instanceof directive_record_1.DirectiveIndex ? er.implicitReceiver : null;
      return new event_binding_1.EventBinding(er.target.name, er.target.elementIndex, dirIndex, records);
    });
  }
  exports.createEventRecords = createEventRecords;
  var ProtoRecordBuilder = (function() {
    function ProtoRecordBuilder() {
      this.records = [];
    }
    ProtoRecordBuilder.prototype.add = function(b, variableNames, bindingIndex) {
      var oldLast = collection_1.ListWrapper.last(this.records);
      if (lang_1.isPresent(oldLast) && oldLast.bindingRecord.directiveRecord == b.directiveRecord) {
        oldLast.lastInDirective = false;
      }
      var numberOfRecordsBefore = this.records.length;
      this._appendRecords(b, variableNames, bindingIndex);
      var newLast = collection_1.ListWrapper.last(this.records);
      if (lang_1.isPresent(newLast) && newLast !== oldLast) {
        newLast.lastInBinding = true;
        newLast.lastInDirective = true;
        this._setArgumentToPureFunction(numberOfRecordsBefore);
      }
    };
    ProtoRecordBuilder.prototype._setArgumentToPureFunction = function(startIndex) {
      var _this = this;
      for (var i = startIndex; i < this.records.length; ++i) {
        var rec = this.records[i];
        if (rec.isPureFunction()) {
          rec.args.forEach(function(recordIndex) {
            return _this.records[recordIndex - 1].argumentToPureFunction = true;
          });
        }
        if (rec.mode === proto_record_1.RecordType.Pipe) {
          rec.args.forEach(function(recordIndex) {
            return _this.records[recordIndex - 1].argumentToPureFunction = true;
          });
          this.records[rec.contextIndex - 1].argumentToPureFunction = true;
        }
      }
    };
    ProtoRecordBuilder.prototype._appendRecords = function(b, variableNames, bindingIndex) {
      if (b.isDirectiveLifecycle()) {
        this.records.push(new proto_record_1.ProtoRecord(proto_record_1.RecordType.DirectiveLifecycle, b.lifecycleEvent, null, [], [], -1, null, this.records.length + 1, b, false, false, false, false, null));
      } else {
        _ConvertAstIntoProtoRecords.append(this.records, b, variableNames, bindingIndex);
      }
    };
    return ProtoRecordBuilder;
  })();
  exports.ProtoRecordBuilder = ProtoRecordBuilder;
  var _ConvertAstIntoProtoRecords = (function() {
    function _ConvertAstIntoProtoRecords(_records, _bindingRecord, _variableNames, _bindingIndex) {
      this._records = _records;
      this._bindingRecord = _bindingRecord;
      this._variableNames = _variableNames;
      this._bindingIndex = _bindingIndex;
    }
    _ConvertAstIntoProtoRecords.append = function(records, b, variableNames, bindingIndex) {
      var c = new _ConvertAstIntoProtoRecords(records, b, variableNames, bindingIndex);
      b.ast.visit(c);
    };
    _ConvertAstIntoProtoRecords.create = function(b, variableNames) {
      var rec = [];
      _ConvertAstIntoProtoRecords.append(rec, b, variableNames, null);
      rec[rec.length - 1].lastInBinding = true;
      return rec;
    };
    _ConvertAstIntoProtoRecords.prototype.visitImplicitReceiver = function(ast) {
      return this._bindingRecord.implicitReceiver;
    };
    _ConvertAstIntoProtoRecords.prototype.visitInterpolation = function(ast) {
      var args = this._visitAll(ast.expressions);
      return this._addRecord(proto_record_1.RecordType.Interpolate, "interpolate", _interpolationFn(ast.strings), args, ast.strings, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitLiteralPrimitive = function(ast) {
      return this._addRecord(proto_record_1.RecordType.Const, "literal", ast.value, [], null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitPropertyRead = function(ast) {
      var receiver = ast.receiver.visit(this);
      if (lang_1.isPresent(this._variableNames) && collection_1.ListWrapper.contains(this._variableNames, ast.name) && ast.receiver instanceof ast_1.ImplicitReceiver) {
        return this._addRecord(proto_record_1.RecordType.Local, ast.name, ast.name, [], null, receiver);
      } else {
        return this._addRecord(proto_record_1.RecordType.PropertyRead, ast.name, ast.getter, [], null, receiver);
      }
    };
    _ConvertAstIntoProtoRecords.prototype.visitPropertyWrite = function(ast) {
      if (lang_1.isPresent(this._variableNames) && collection_1.ListWrapper.contains(this._variableNames, ast.name) && ast.receiver instanceof ast_1.ImplicitReceiver) {
        throw new exceptions_1.BaseException("Cannot reassign a variable binding " + ast.name);
      } else {
        var receiver = ast.receiver.visit(this);
        var value = ast.value.visit(this);
        return this._addRecord(proto_record_1.RecordType.PropertyWrite, ast.name, ast.setter, [value], null, receiver);
      }
    };
    _ConvertAstIntoProtoRecords.prototype.visitKeyedWrite = function(ast) {
      var obj = ast.obj.visit(this);
      var key = ast.key.visit(this);
      var value = ast.value.visit(this);
      return this._addRecord(proto_record_1.RecordType.KeyedWrite, null, null, [key, value], null, obj);
    };
    _ConvertAstIntoProtoRecords.prototype.visitSafePropertyRead = function(ast) {
      var receiver = ast.receiver.visit(this);
      return this._addRecord(proto_record_1.RecordType.SafeProperty, ast.name, ast.getter, [], null, receiver);
    };
    _ConvertAstIntoProtoRecords.prototype.visitMethodCall = function(ast) {
      var receiver = ast.receiver.visit(this);
      var args = this._visitAll(ast.args);
      if (lang_1.isPresent(this._variableNames) && collection_1.ListWrapper.contains(this._variableNames, ast.name)) {
        var target = this._addRecord(proto_record_1.RecordType.Local, ast.name, ast.name, [], null, receiver);
        return this._addRecord(proto_record_1.RecordType.InvokeClosure, "closure", null, args, null, target);
      } else {
        return this._addRecord(proto_record_1.RecordType.InvokeMethod, ast.name, ast.fn, args, null, receiver);
      }
    };
    _ConvertAstIntoProtoRecords.prototype.visitSafeMethodCall = function(ast) {
      var receiver = ast.receiver.visit(this);
      var args = this._visitAll(ast.args);
      return this._addRecord(proto_record_1.RecordType.SafeMethodInvoke, ast.name, ast.fn, args, null, receiver);
    };
    _ConvertAstIntoProtoRecords.prototype.visitFunctionCall = function(ast) {
      var target = ast.target.visit(this);
      var args = this._visitAll(ast.args);
      return this._addRecord(proto_record_1.RecordType.InvokeClosure, "closure", null, args, null, target);
    };
    _ConvertAstIntoProtoRecords.prototype.visitLiteralArray = function(ast) {
      var primitiveName = "arrayFn" + ast.expressions.length;
      return this._addRecord(proto_record_1.RecordType.CollectionLiteral, primitiveName, _arrayFn(ast.expressions.length), this._visitAll(ast.expressions), null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitLiteralMap = function(ast) {
      return this._addRecord(proto_record_1.RecordType.CollectionLiteral, _mapPrimitiveName(ast.keys), change_detection_util_1.ChangeDetectionUtil.mapFn(ast.keys), this._visitAll(ast.values), null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitBinary = function(ast) {
      var left = ast.left.visit(this);
      switch (ast.operation) {
        case '&&':
          var branchEnd = [null];
          this._addRecord(proto_record_1.RecordType.SkipRecordsIfNot, "SkipRecordsIfNot", null, [], branchEnd, left);
          var right = ast.right.visit(this);
          branchEnd[0] = right;
          return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "cond", change_detection_util_1.ChangeDetectionUtil.cond, [left, right, left], null, 0);
        case '||':
          var branchEnd = [null];
          this._addRecord(proto_record_1.RecordType.SkipRecordsIf, "SkipRecordsIf", null, [], branchEnd, left);
          var right = ast.right.visit(this);
          branchEnd[0] = right;
          return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "cond", change_detection_util_1.ChangeDetectionUtil.cond, [left, left, right], null, 0);
        default:
          var right = ast.right.visit(this);
          return this._addRecord(proto_record_1.RecordType.PrimitiveOp, _operationToPrimitiveName(ast.operation), _operationToFunction(ast.operation), [left, right], null, 0);
      }
    };
    _ConvertAstIntoProtoRecords.prototype.visitPrefixNot = function(ast) {
      var exp = ast.expression.visit(this);
      return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "operation_negate", change_detection_util_1.ChangeDetectionUtil.operation_negate, [exp], null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitConditional = function(ast) {
      var condition = ast.condition.visit(this);
      var startOfFalseBranch = [null];
      var endOfFalseBranch = [null];
      this._addRecord(proto_record_1.RecordType.SkipRecordsIfNot, "SkipRecordsIfNot", null, [], startOfFalseBranch, condition);
      var whenTrue = ast.trueExp.visit(this);
      var skip = this._addRecord(proto_record_1.RecordType.SkipRecords, "SkipRecords", null, [], endOfFalseBranch, 0);
      var whenFalse = ast.falseExp.visit(this);
      startOfFalseBranch[0] = skip;
      endOfFalseBranch[0] = whenFalse;
      return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "cond", change_detection_util_1.ChangeDetectionUtil.cond, [condition, whenTrue, whenFalse], null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitPipe = function(ast) {
      var value = ast.exp.visit(this);
      var args = this._visitAll(ast.args);
      return this._addRecord(proto_record_1.RecordType.Pipe, ast.name, ast.name, args, null, value);
    };
    _ConvertAstIntoProtoRecords.prototype.visitKeyedRead = function(ast) {
      var obj = ast.obj.visit(this);
      var key = ast.key.visit(this);
      return this._addRecord(proto_record_1.RecordType.KeyedRead, "keyedAccess", change_detection_util_1.ChangeDetectionUtil.keyedAccess, [key], null, obj);
    };
    _ConvertAstIntoProtoRecords.prototype.visitChain = function(ast) {
      var _this = this;
      var args = ast.expressions.map(function(e) {
        return e.visit(_this);
      });
      return this._addRecord(proto_record_1.RecordType.Chain, "chain", null, args, null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitQuote = function(ast) {
      throw new exceptions_1.BaseException(("Caught uninterpreted expression at " + ast.location + ": " + ast.uninterpretedExpression + ". ") + ("Expression prefix " + ast.prefix + " did not match a template transformer to interpret the expression."));
    };
    _ConvertAstIntoProtoRecords.prototype._visitAll = function(asts) {
      var res = collection_1.ListWrapper.createFixedSize(asts.length);
      for (var i = 0; i < asts.length; ++i) {
        res[i] = asts[i].visit(this);
      }
      return res;
    };
    _ConvertAstIntoProtoRecords.prototype._addRecord = function(type, name, funcOrValue, args, fixedArgs, context) {
      var selfIndex = this._records.length + 1;
      if (context instanceof directive_record_1.DirectiveIndex) {
        this._records.push(new proto_record_1.ProtoRecord(type, name, funcOrValue, args, fixedArgs, -1, context, selfIndex, this._bindingRecord, false, false, false, false, this._bindingIndex));
      } else {
        this._records.push(new proto_record_1.ProtoRecord(type, name, funcOrValue, args, fixedArgs, context, null, selfIndex, this._bindingRecord, false, false, false, false, this._bindingIndex));
      }
      return selfIndex;
    };
    return _ConvertAstIntoProtoRecords;
  })();
  function _arrayFn(length) {
    switch (length) {
      case 0:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn0;
      case 1:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn1;
      case 2:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn2;
      case 3:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn3;
      case 4:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn4;
      case 5:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn5;
      case 6:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn6;
      case 7:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn7;
      case 8:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn8;
      case 9:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn9;
      default:
        throw new exceptions_1.BaseException("Does not support literal maps with more than 9 elements");
    }
  }
  function _mapPrimitiveName(keys) {
    var stringifiedKeys = keys.map(function(k) {
      return lang_1.isString(k) ? "\"" + k + "\"" : "" + k;
    }).join(', ');
    return "mapFn([" + stringifiedKeys + "])";
  }
  function _operationToPrimitiveName(operation) {
    switch (operation) {
      case '+':
        return "operation_add";
      case '-':
        return "operation_subtract";
      case '*':
        return "operation_multiply";
      case '/':
        return "operation_divide";
      case '%':
        return "operation_remainder";
      case '==':
        return "operation_equals";
      case '!=':
        return "operation_not_equals";
      case '===':
        return "operation_identical";
      case '!==':
        return "operation_not_identical";
      case '<':
        return "operation_less_then";
      case '>':
        return "operation_greater_then";
      case '<=':
        return "operation_less_or_equals_then";
      case '>=':
        return "operation_greater_or_equals_then";
      default:
        throw new exceptions_1.BaseException("Unsupported operation " + operation);
    }
  }
  function _operationToFunction(operation) {
    switch (operation) {
      case '+':
        return change_detection_util_1.ChangeDetectionUtil.operation_add;
      case '-':
        return change_detection_util_1.ChangeDetectionUtil.operation_subtract;
      case '*':
        return change_detection_util_1.ChangeDetectionUtil.operation_multiply;
      case '/':
        return change_detection_util_1.ChangeDetectionUtil.operation_divide;
      case '%':
        return change_detection_util_1.ChangeDetectionUtil.operation_remainder;
      case '==':
        return change_detection_util_1.ChangeDetectionUtil.operation_equals;
      case '!=':
        return change_detection_util_1.ChangeDetectionUtil.operation_not_equals;
      case '===':
        return change_detection_util_1.ChangeDetectionUtil.operation_identical;
      case '!==':
        return change_detection_util_1.ChangeDetectionUtil.operation_not_identical;
      case '<':
        return change_detection_util_1.ChangeDetectionUtil.operation_less_then;
      case '>':
        return change_detection_util_1.ChangeDetectionUtil.operation_greater_then;
      case '<=':
        return change_detection_util_1.ChangeDetectionUtil.operation_less_or_equals_then;
      case '>=':
        return change_detection_util_1.ChangeDetectionUtil.operation_greater_or_equals_then;
      default:
        throw new exceptions_1.BaseException("Unsupported operation " + operation);
    }
  }
  function s(v) {
    return lang_1.isPresent(v) ? "" + v : '';
  }
  function _interpolationFn(strings) {
    var length = strings.length;
    var c0 = length > 0 ? strings[0] : null;
    var c1 = length > 1 ? strings[1] : null;
    var c2 = length > 2 ? strings[2] : null;
    var c3 = length > 3 ? strings[3] : null;
    var c4 = length > 4 ? strings[4] : null;
    var c5 = length > 5 ? strings[5] : null;
    var c6 = length > 6 ? strings[6] : null;
    var c7 = length > 7 ? strings[7] : null;
    var c8 = length > 8 ? strings[8] : null;
    var c9 = length > 9 ? strings[9] : null;
    switch (length - 1) {
      case 1:
        return function(a1) {
          return c0 + s(a1) + c1;
        };
      case 2:
        return function(a1, a2) {
          return c0 + s(a1) + c1 + s(a2) + c2;
        };
      case 3:
        return function(a1, a2, a3) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3;
        };
      case 4:
        return function(a1, a2, a3, a4) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4;
        };
      case 5:
        return function(a1, a2, a3, a4, a5) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5;
        };
      case 6:
        return function(a1, a2, a3, a4, a5, a6) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6;
        };
      case 7:
        return function(a1, a2, a3, a4, a5, a6, a7) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7;
        };
      case 8:
        return function(a1, a2, a3, a4, a5, a6, a7, a8) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7 + s(a8) + c8;
        };
      case 9:
        return function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7 + s(a8) + c8 + s(a9) + c9;
        };
      default:
        throw new exceptions_1.BaseException("Does not support more than 9 expressions");
    }
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/jit_proto_change_detector", ["angular2/src/core/change_detection/change_detection_jit_generator"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var change_detection_jit_generator_1 = require("angular2/src/core/change_detection/change_detection_jit_generator");
  var JitProtoChangeDetector = (function() {
    function JitProtoChangeDetector(definition) {
      this.definition = definition;
      this._factory = this._createFactory(definition);
    }
    JitProtoChangeDetector.isSupported = function() {
      return true;
    };
    JitProtoChangeDetector.prototype.instantiate = function() {
      return this._factory();
    };
    JitProtoChangeDetector.prototype._createFactory = function(definition) {
      return new change_detection_jit_generator_1.ChangeDetectorJITGenerator(definition, 'util', 'AbstractChangeDetector', 'ChangeDetectorStatus').generate();
    };
    return JitProtoChangeDetector;
  })();
  exports.JitProtoChangeDetector = JitProtoChangeDetector;
  global.define = __define;
  return module.exports;
});

System.register("angular2/core", ["angular2/src/core/metadata", "angular2/src/core/util", "angular2/src/core/prod_mode", "angular2/src/core/di", "angular2/src/facade/facade", "angular2/src/facade/lang", "angular2/src/core/application_ref", "angular2/src/core/application_tokens", "angular2/src/core/zone", "angular2/src/core/render", "angular2/src/core/linker", "angular2/src/core/debug/debug_element", "angular2/src/core/testability/testability", "angular2/src/core/change_detection", "angular2/src/core/platform_directives_and_pipes", "angular2/src/core/platform_common_providers", "angular2/src/core/application_common_providers", "angular2/src/core/reflection/reflection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(require("angular2/src/core/metadata"));
  __export(require("angular2/src/core/util"));
  __export(require("angular2/src/core/prod_mode"));
  __export(require("angular2/src/core/di"));
  __export(require("angular2/src/facade/facade"));
  var lang_1 = require("angular2/src/facade/lang");
  exports.enableProdMode = lang_1.enableProdMode;
  var application_ref_1 = require("angular2/src/core/application_ref");
  exports.platform = application_ref_1.platform;
  exports.createNgZone = application_ref_1.createNgZone;
  exports.PlatformRef = application_ref_1.PlatformRef;
  exports.ApplicationRef = application_ref_1.ApplicationRef;
  var application_tokens_1 = require("angular2/src/core/application_tokens");
  exports.APP_ID = application_tokens_1.APP_ID;
  exports.APP_COMPONENT = application_tokens_1.APP_COMPONENT;
  exports.APP_INITIALIZER = application_tokens_1.APP_INITIALIZER;
  exports.PACKAGE_ROOT_URL = application_tokens_1.PACKAGE_ROOT_URL;
  exports.PLATFORM_INITIALIZER = application_tokens_1.PLATFORM_INITIALIZER;
  __export(require("angular2/src/core/zone"));
  __export(require("angular2/src/core/render"));
  __export(require("angular2/src/core/linker"));
  var debug_element_1 = require("angular2/src/core/debug/debug_element");
  exports.DebugElement = debug_element_1.DebugElement;
  exports.Scope = debug_element_1.Scope;
  exports.inspectElement = debug_element_1.inspectElement;
  exports.asNativeElements = debug_element_1.asNativeElements;
  __export(require("angular2/src/core/testability/testability"));
  __export(require("angular2/src/core/change_detection"));
  __export(require("angular2/src/core/platform_directives_and_pipes"));
  __export(require("angular2/src/core/platform_common_providers"));
  __export(require("angular2/src/core/application_common_providers"));
  __export(require("angular2/src/core/reflection/reflection"));
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/animate/animation_builder", ["angular2/src/core/di", "angular2/src/animate/css_animation_builder", "angular2/src/animate/browser_details"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var css_animation_builder_1 = require("angular2/src/animate/css_animation_builder");
  var browser_details_1 = require("angular2/src/animate/browser_details");
  var AnimationBuilder = (function() {
    function AnimationBuilder(browserDetails) {
      this.browserDetails = browserDetails;
    }
    AnimationBuilder.prototype.css = function() {
      return new css_animation_builder_1.CssAnimationBuilder(this.browserDetails);
    };
    AnimationBuilder = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [browser_details_1.BrowserDetails])], AnimationBuilder);
    return AnimationBuilder;
  })();
  exports.AnimationBuilder = AnimationBuilder;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/template_parser", ["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/core", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/core/change_detection/change_detection", "angular2/src/compiler/html_parser", "angular2/src/compiler/html_tags", "angular2/src/compiler/parse_util", "angular2/src/core/change_detection/parser/ast", "angular2/src/compiler/template_ast", "angular2/src/compiler/selector", "angular2/src/compiler/schema/element_schema_registry", "angular2/src/compiler/template_preparser", "angular2/src/compiler/style_url_resolver", "angular2/src/compiler/html_ast", "angular2/src/compiler/util"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var collection_1 = require("angular2/src/facade/collection");
  var lang_1 = require("angular2/src/facade/lang");
  var core_1 = require("angular2/core");
  var lang_2 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var change_detection_1 = require("angular2/src/core/change_detection/change_detection");
  var html_parser_1 = require("angular2/src/compiler/html_parser");
  var html_tags_1 = require("angular2/src/compiler/html_tags");
  var parse_util_1 = require("angular2/src/compiler/parse_util");
  var ast_1 = require("angular2/src/core/change_detection/parser/ast");
  var template_ast_1 = require("angular2/src/compiler/template_ast");
  var selector_1 = require("angular2/src/compiler/selector");
  var element_schema_registry_1 = require("angular2/src/compiler/schema/element_schema_registry");
  var template_preparser_1 = require("angular2/src/compiler/template_preparser");
  var style_url_resolver_1 = require("angular2/src/compiler/style_url_resolver");
  var html_ast_1 = require("angular2/src/compiler/html_ast");
  var util_1 = require("angular2/src/compiler/util");
  var BIND_NAME_REGEXP = /^(?:(?:(?:(bind-)|(var-|#)|(on-)|(bindon-))(.+))|\[\(([^\)]+)\)\]|\[([^\]]+)\]|\(([^\)]+)\))$/g;
  var TEMPLATE_ELEMENT = 'template';
  var TEMPLATE_ATTR = 'template';
  var TEMPLATE_ATTR_PREFIX = '*';
  var CLASS_ATTR = 'class';
  var PROPERTY_PARTS_SEPARATOR = '.';
  var ATTRIBUTE_PREFIX = 'attr';
  var CLASS_PREFIX = 'class';
  var STYLE_PREFIX = 'style';
  var TEXT_CSS_SELECTOR = selector_1.CssSelector.parse('*')[0];
  exports.TEMPLATE_TRANSFORMS = lang_2.CONST_EXPR(new core_1.OpaqueToken('TemplateTransforms'));
  var TemplateParseError = (function(_super) {
    __extends(TemplateParseError, _super);
    function TemplateParseError(message, location) {
      _super.call(this, location, message);
    }
    return TemplateParseError;
  })(parse_util_1.ParseError);
  exports.TemplateParseError = TemplateParseError;
  var TemplateParser = (function() {
    function TemplateParser(_exprParser, _schemaRegistry, _htmlParser, transforms) {
      this._exprParser = _exprParser;
      this._schemaRegistry = _schemaRegistry;
      this._htmlParser = _htmlParser;
      this.transforms = transforms;
    }
    TemplateParser.prototype.parse = function(template, directives, pipes, templateUrl) {
      var parseVisitor = new TemplateParseVisitor(directives, pipes, this._exprParser, this._schemaRegistry);
      var htmlAstWithErrors = this._htmlParser.parse(template, templateUrl);
      var result = html_ast_1.htmlVisitAll(parseVisitor, htmlAstWithErrors.rootNodes, EMPTY_COMPONENT);
      var errors = htmlAstWithErrors.errors.concat(parseVisitor.errors);
      if (errors.length > 0) {
        var errorString = errors.join('\n');
        throw new exceptions_1.BaseException("Template parse errors:\n" + errorString);
      }
      if (lang_1.isPresent(this.transforms)) {
        this.transforms.forEach(function(transform) {
          result = template_ast_1.templateVisitAll(transform, result);
        });
      }
      return result;
    };
    TemplateParser = __decorate([core_1.Injectable(), __param(3, core_1.Optional()), __param(3, core_1.Inject(exports.TEMPLATE_TRANSFORMS)), __metadata('design:paramtypes', [change_detection_1.Parser, element_schema_registry_1.ElementSchemaRegistry, html_parser_1.HtmlParser, Array])], TemplateParser);
    return TemplateParser;
  })();
  exports.TemplateParser = TemplateParser;
  var TemplateParseVisitor = (function() {
    function TemplateParseVisitor(directives, pipes, _exprParser, _schemaRegistry) {
      var _this = this;
      this._exprParser = _exprParser;
      this._schemaRegistry = _schemaRegistry;
      this.errors = [];
      this.directivesIndex = new Map();
      this.ngContentCount = 0;
      this.selectorMatcher = new selector_1.SelectorMatcher();
      collection_1.ListWrapper.forEachWithIndex(directives, function(directive, index) {
        var selector = selector_1.CssSelector.parse(directive.selector);
        _this.selectorMatcher.addSelectables(selector, directive);
        _this.directivesIndex.set(directive, index);
      });
      this.pipesByName = new Map();
      pipes.forEach(function(pipe) {
        return _this.pipesByName.set(pipe.name, pipe);
      });
    }
    TemplateParseVisitor.prototype._reportError = function(message, sourceSpan) {
      this.errors.push(new TemplateParseError(message, sourceSpan.start));
    };
    TemplateParseVisitor.prototype._parseInterpolation = function(value, sourceSpan) {
      var sourceInfo = sourceSpan.start.toString();
      try {
        var ast = this._exprParser.parseInterpolation(value, sourceInfo);
        this._checkPipes(ast, sourceSpan);
        return ast;
      } catch (e) {
        this._reportError("" + e, sourceSpan);
        return this._exprParser.wrapLiteralPrimitive('ERROR', sourceInfo);
      }
    };
    TemplateParseVisitor.prototype._parseAction = function(value, sourceSpan) {
      var sourceInfo = sourceSpan.start.toString();
      try {
        var ast = this._exprParser.parseAction(value, sourceInfo);
        this._checkPipes(ast, sourceSpan);
        return ast;
      } catch (e) {
        this._reportError("" + e, sourceSpan);
        return this._exprParser.wrapLiteralPrimitive('ERROR', sourceInfo);
      }
    };
    TemplateParseVisitor.prototype._parseBinding = function(value, sourceSpan) {
      var sourceInfo = sourceSpan.start.toString();
      try {
        var ast = this._exprParser.parseBinding(value, sourceInfo);
        this._checkPipes(ast, sourceSpan);
        return ast;
      } catch (e) {
        this._reportError("" + e, sourceSpan);
        return this._exprParser.wrapLiteralPrimitive('ERROR', sourceInfo);
      }
    };
    TemplateParseVisitor.prototype._parseTemplateBindings = function(value, sourceSpan) {
      var _this = this;
      var sourceInfo = sourceSpan.start.toString();
      try {
        var bindings = this._exprParser.parseTemplateBindings(value, sourceInfo);
        bindings.forEach(function(binding) {
          if (lang_1.isPresent(binding.expression)) {
            _this._checkPipes(binding.expression, sourceSpan);
          }
        });
        return bindings;
      } catch (e) {
        this._reportError("" + e, sourceSpan);
        return [];
      }
    };
    TemplateParseVisitor.prototype._checkPipes = function(ast, sourceSpan) {
      var _this = this;
      if (lang_1.isPresent(ast)) {
        var collector = new PipeCollector();
        ast.visit(collector);
        collector.pipes.forEach(function(pipeName) {
          if (!_this.pipesByName.has(pipeName)) {
            _this._reportError("The pipe '" + pipeName + "' could not be found", sourceSpan);
          }
        });
      }
    };
    TemplateParseVisitor.prototype.visitText = function(ast, component) {
      var ngContentIndex = component.findNgContentIndex(TEXT_CSS_SELECTOR);
      var expr = this._parseInterpolation(ast.value, ast.sourceSpan);
      if (lang_1.isPresent(expr)) {
        return new template_ast_1.BoundTextAst(expr, ngContentIndex, ast.sourceSpan);
      } else {
        return new template_ast_1.TextAst(ast.value, ngContentIndex, ast.sourceSpan);
      }
    };
    TemplateParseVisitor.prototype.visitAttr = function(ast, contex) {
      return new template_ast_1.AttrAst(ast.name, ast.value, ast.sourceSpan);
    };
    TemplateParseVisitor.prototype.visitElement = function(element, component) {
      var _this = this;
      var nodeName = element.name;
      var preparsedElement = template_preparser_1.preparseElement(element);
      if (preparsedElement.type === template_preparser_1.PreparsedElementType.SCRIPT || preparsedElement.type === template_preparser_1.PreparsedElementType.STYLE) {
        return null;
      }
      if (preparsedElement.type === template_preparser_1.PreparsedElementType.STYLESHEET && style_url_resolver_1.isStyleUrlResolvable(preparsedElement.hrefAttr)) {
        return null;
      }
      var matchableAttrs = [];
      var elementOrDirectiveProps = [];
      var vars = [];
      var events = [];
      var templateElementOrDirectiveProps = [];
      var templateVars = [];
      var templateMatchableAttrs = [];
      var hasInlineTemplates = false;
      var attrs = [];
      element.attrs.forEach(function(attr) {
        var hasBinding = _this._parseAttr(attr, matchableAttrs, elementOrDirectiveProps, events, vars);
        var hasTemplateBinding = _this._parseInlineTemplateBinding(attr, templateMatchableAttrs, templateElementOrDirectiveProps, templateVars);
        if (!hasBinding && !hasTemplateBinding) {
          attrs.push(_this.visitAttr(attr, null));
          matchableAttrs.push([attr.name, attr.value]);
        }
        if (hasTemplateBinding) {
          hasInlineTemplates = true;
        }
      });
      var lcElName = html_tags_1.splitNsName(nodeName.toLowerCase())[1];
      var isTemplateElement = lcElName == TEMPLATE_ELEMENT;
      var elementCssSelector = createElementCssSelector(nodeName, matchableAttrs);
      var directives = this._createDirectiveAsts(element.name, this._parseDirectives(this.selectorMatcher, elementCssSelector), elementOrDirectiveProps, isTemplateElement ? [] : vars, element.sourceSpan);
      var elementProps = this._createElementPropertyAsts(element.name, elementOrDirectiveProps, directives);
      var children = html_ast_1.htmlVisitAll(preparsedElement.nonBindable ? NON_BINDABLE_VISITOR : this, element.children, Component.create(directives));
      var elementNgContentIndex = hasInlineTemplates ? null : component.findNgContentIndex(elementCssSelector);
      var parsedElement;
      if (preparsedElement.type === template_preparser_1.PreparsedElementType.NG_CONTENT) {
        if (lang_1.isPresent(element.children) && element.children.length > 0) {
          this._reportError("<ng-content> element cannot have content. <ng-content> must be immediately followed by </ng-content>", element.sourceSpan);
        }
        parsedElement = new template_ast_1.NgContentAst(this.ngContentCount++, elementNgContentIndex, element.sourceSpan);
      } else if (isTemplateElement) {
        this._assertAllEventsPublishedByDirectives(directives, events);
        this._assertNoComponentsNorElementBindingsOnTemplate(directives, elementProps, element.sourceSpan);
        parsedElement = new template_ast_1.EmbeddedTemplateAst(attrs, events, vars, directives, children, elementNgContentIndex, element.sourceSpan);
      } else {
        this._assertOnlyOneComponent(directives, element.sourceSpan);
        var elementExportAsVars = vars.filter(function(varAst) {
          return varAst.value.length === 0;
        });
        parsedElement = new template_ast_1.ElementAst(nodeName, attrs, elementProps, events, elementExportAsVars, directives, children, elementNgContentIndex, element.sourceSpan);
      }
      if (hasInlineTemplates) {
        var templateCssSelector = createElementCssSelector(TEMPLATE_ELEMENT, templateMatchableAttrs);
        var templateDirectives = this._createDirectiveAsts(element.name, this._parseDirectives(this.selectorMatcher, templateCssSelector), templateElementOrDirectiveProps, [], element.sourceSpan);
        var templateElementProps = this._createElementPropertyAsts(element.name, templateElementOrDirectiveProps, templateDirectives);
        this._assertNoComponentsNorElementBindingsOnTemplate(templateDirectives, templateElementProps, element.sourceSpan);
        parsedElement = new template_ast_1.EmbeddedTemplateAst([], [], templateVars, templateDirectives, [parsedElement], component.findNgContentIndex(templateCssSelector), element.sourceSpan);
      }
      return parsedElement;
    };
    TemplateParseVisitor.prototype._parseInlineTemplateBinding = function(attr, targetMatchableAttrs, targetProps, targetVars) {
      var templateBindingsSource = null;
      if (attr.name == TEMPLATE_ATTR) {
        templateBindingsSource = attr.value;
      } else if (attr.name.startsWith(TEMPLATE_ATTR_PREFIX)) {
        var key = attr.name.substring(TEMPLATE_ATTR_PREFIX.length);
        templateBindingsSource = (attr.value.length == 0) ? key : key + ' ' + attr.value;
      }
      if (lang_1.isPresent(templateBindingsSource)) {
        var bindings = this._parseTemplateBindings(templateBindingsSource, attr.sourceSpan);
        for (var i = 0; i < bindings.length; i++) {
          var binding = bindings[i];
          if (binding.keyIsVar) {
            targetVars.push(new template_ast_1.VariableAst(binding.key, binding.name, attr.sourceSpan));
            targetMatchableAttrs.push([binding.key, binding.name]);
          } else if (lang_1.isPresent(binding.expression)) {
            this._parsePropertyAst(binding.key, binding.expression, attr.sourceSpan, targetMatchableAttrs, targetProps);
          } else {
            targetMatchableAttrs.push([binding.key, '']);
            this._parseLiteralAttr(binding.key, null, attr.sourceSpan, targetProps);
          }
        }
        return true;
      }
      return false;
    };
    TemplateParseVisitor.prototype._parseAttr = function(attr, targetMatchableAttrs, targetProps, targetEvents, targetVars) {
      var attrName = this._normalizeAttributeName(attr.name);
      var attrValue = attr.value;
      var bindParts = lang_1.RegExpWrapper.firstMatch(BIND_NAME_REGEXP, attrName);
      var hasBinding = false;
      if (lang_1.isPresent(bindParts)) {
        hasBinding = true;
        if (lang_1.isPresent(bindParts[1])) {
          this._parseProperty(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
        } else if (lang_1.isPresent(bindParts[2])) {
          var identifier = bindParts[5];
          this._parseVariable(identifier, attrValue, attr.sourceSpan, targetVars);
        } else if (lang_1.isPresent(bindParts[3])) {
          this._parseEvent(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
        } else if (lang_1.isPresent(bindParts[4])) {
          this._parseProperty(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
          this._parseAssignmentEvent(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
        } else if (lang_1.isPresent(bindParts[6])) {
          this._parseProperty(bindParts[6], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
          this._parseAssignmentEvent(bindParts[6], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
        } else if (lang_1.isPresent(bindParts[7])) {
          this._parseProperty(bindParts[7], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
        } else if (lang_1.isPresent(bindParts[8])) {
          this._parseEvent(bindParts[8], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
        }
      } else {
        hasBinding = this._parsePropertyInterpolation(attrName, attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
      }
      if (!hasBinding) {
        this._parseLiteralAttr(attrName, attrValue, attr.sourceSpan, targetProps);
      }
      return hasBinding;
    };
    TemplateParseVisitor.prototype._normalizeAttributeName = function(attrName) {
      return attrName.toLowerCase().startsWith('data-') ? attrName.substring(5) : attrName;
    };
    TemplateParseVisitor.prototype._parseVariable = function(identifier, value, sourceSpan, targetVars) {
      if (identifier.indexOf('-') > -1) {
        this._reportError("\"-\" is not allowed in variable names", sourceSpan);
      }
      targetVars.push(new template_ast_1.VariableAst(identifier, value, sourceSpan));
    };
    TemplateParseVisitor.prototype._parseProperty = function(name, expression, sourceSpan, targetMatchableAttrs, targetProps) {
      this._parsePropertyAst(name, this._parseBinding(expression, sourceSpan), sourceSpan, targetMatchableAttrs, targetProps);
    };
    TemplateParseVisitor.prototype._parsePropertyInterpolation = function(name, value, sourceSpan, targetMatchableAttrs, targetProps) {
      var expr = this._parseInterpolation(value, sourceSpan);
      if (lang_1.isPresent(expr)) {
        this._parsePropertyAst(name, expr, sourceSpan, targetMatchableAttrs, targetProps);
        return true;
      }
      return false;
    };
    TemplateParseVisitor.prototype._parsePropertyAst = function(name, ast, sourceSpan, targetMatchableAttrs, targetProps) {
      targetMatchableAttrs.push([name, ast.source]);
      targetProps.push(new BoundElementOrDirectiveProperty(name, ast, false, sourceSpan));
    };
    TemplateParseVisitor.prototype._parseAssignmentEvent = function(name, expression, sourceSpan, targetMatchableAttrs, targetEvents) {
      this._parseEvent(name + "Change", expression + "=$event", sourceSpan, targetMatchableAttrs, targetEvents);
    };
    TemplateParseVisitor.prototype._parseEvent = function(name, expression, sourceSpan, targetMatchableAttrs, targetEvents) {
      var parts = util_1.splitAtColon(name, [null, name]);
      var target = parts[0];
      var eventName = parts[1];
      targetEvents.push(new template_ast_1.BoundEventAst(eventName, target, this._parseAction(expression, sourceSpan), sourceSpan));
    };
    TemplateParseVisitor.prototype._parseLiteralAttr = function(name, value, sourceSpan, targetProps) {
      targetProps.push(new BoundElementOrDirectiveProperty(name, this._exprParser.wrapLiteralPrimitive(value, ''), true, sourceSpan));
    };
    TemplateParseVisitor.prototype._parseDirectives = function(selectorMatcher, elementCssSelector) {
      var _this = this;
      var directives = [];
      selectorMatcher.match(elementCssSelector, function(selector, directive) {
        directives.push(directive);
      });
      collection_1.ListWrapper.sort(directives, function(dir1, dir2) {
        var dir1Comp = dir1.isComponent;
        var dir2Comp = dir2.isComponent;
        if (dir1Comp && !dir2Comp) {
          return -1;
        } else if (!dir1Comp && dir2Comp) {
          return 1;
        } else {
          return _this.directivesIndex.get(dir1) - _this.directivesIndex.get(dir2);
        }
      });
      return directives;
    };
    TemplateParseVisitor.prototype._createDirectiveAsts = function(elementName, directives, props, possibleExportAsVars, sourceSpan) {
      var _this = this;
      var matchedVariables = new Set();
      var directiveAsts = directives.map(function(directive) {
        var hostProperties = [];
        var hostEvents = [];
        var directiveProperties = [];
        _this._createDirectiveHostPropertyAsts(elementName, directive.hostProperties, sourceSpan, hostProperties);
        _this._createDirectiveHostEventAsts(directive.hostListeners, sourceSpan, hostEvents);
        _this._createDirectivePropertyAsts(directive.inputs, props, directiveProperties);
        var exportAsVars = [];
        possibleExportAsVars.forEach(function(varAst) {
          if ((varAst.value.length === 0 && directive.isComponent) || (directive.exportAs == varAst.value)) {
            exportAsVars.push(varAst);
            matchedVariables.add(varAst.name);
          }
        });
        return new template_ast_1.DirectiveAst(directive, directiveProperties, hostProperties, hostEvents, exportAsVars, sourceSpan);
      });
      possibleExportAsVars.forEach(function(varAst) {
        if (varAst.value.length > 0 && !collection_1.SetWrapper.has(matchedVariables, varAst.name)) {
          _this._reportError("There is no directive with \"exportAs\" set to \"" + varAst.value + "\"", varAst.sourceSpan);
        }
      });
      return directiveAsts;
    };
    TemplateParseVisitor.prototype._createDirectiveHostPropertyAsts = function(elementName, hostProps, sourceSpan, targetPropertyAsts) {
      var _this = this;
      if (lang_1.isPresent(hostProps)) {
        collection_1.StringMapWrapper.forEach(hostProps, function(expression, propName) {
          var exprAst = _this._parseBinding(expression, sourceSpan);
          targetPropertyAsts.push(_this._createElementPropertyAst(elementName, propName, exprAst, sourceSpan));
        });
      }
    };
    TemplateParseVisitor.prototype._createDirectiveHostEventAsts = function(hostListeners, sourceSpan, targetEventAsts) {
      var _this = this;
      if (lang_1.isPresent(hostListeners)) {
        collection_1.StringMapWrapper.forEach(hostListeners, function(expression, propName) {
          _this._parseEvent(propName, expression, sourceSpan, [], targetEventAsts);
        });
      }
    };
    TemplateParseVisitor.prototype._createDirectivePropertyAsts = function(directiveProperties, boundProps, targetBoundDirectiveProps) {
      if (lang_1.isPresent(directiveProperties)) {
        var boundPropsByName = new Map();
        boundProps.forEach(function(boundProp) {
          var prevValue = boundPropsByName.get(boundProp.name);
          if (lang_1.isBlank(prevValue) || prevValue.isLiteral) {
            boundPropsByName.set(boundProp.name, boundProp);
          }
        });
        collection_1.StringMapWrapper.forEach(directiveProperties, function(elProp, dirProp) {
          var boundProp = boundPropsByName.get(elProp);
          if (lang_1.isPresent(boundProp)) {
            targetBoundDirectiveProps.push(new template_ast_1.BoundDirectivePropertyAst(dirProp, boundProp.name, boundProp.expression, boundProp.sourceSpan));
          }
        });
      }
    };
    TemplateParseVisitor.prototype._createElementPropertyAsts = function(elementName, props, directives) {
      var _this = this;
      var boundElementProps = [];
      var boundDirectivePropsIndex = new Map();
      directives.forEach(function(directive) {
        directive.inputs.forEach(function(prop) {
          boundDirectivePropsIndex.set(prop.templateName, prop);
        });
      });
      props.forEach(function(prop) {
        if (!prop.isLiteral && lang_1.isBlank(boundDirectivePropsIndex.get(prop.name))) {
          boundElementProps.push(_this._createElementPropertyAst(elementName, prop.name, prop.expression, prop.sourceSpan));
        }
      });
      return boundElementProps;
    };
    TemplateParseVisitor.prototype._createElementPropertyAst = function(elementName, name, ast, sourceSpan) {
      var unit = null;
      var bindingType;
      var boundPropertyName;
      var parts = name.split(PROPERTY_PARTS_SEPARATOR);
      if (parts.length === 1) {
        boundPropertyName = this._schemaRegistry.getMappedPropName(parts[0]);
        bindingType = template_ast_1.PropertyBindingType.Property;
        if (!this._schemaRegistry.hasProperty(elementName, boundPropertyName)) {
          this._reportError("Can't bind to '" + boundPropertyName + "' since it isn't a known native property", sourceSpan);
        }
      } else {
        if (parts[0] == ATTRIBUTE_PREFIX) {
          boundPropertyName = parts[1];
          bindingType = template_ast_1.PropertyBindingType.Attribute;
        } else if (parts[0] == CLASS_PREFIX) {
          boundPropertyName = parts[1];
          bindingType = template_ast_1.PropertyBindingType.Class;
        } else if (parts[0] == STYLE_PREFIX) {
          unit = parts.length > 2 ? parts[2] : null;
          boundPropertyName = parts[1];
          bindingType = template_ast_1.PropertyBindingType.Style;
        } else {
          this._reportError("Invalid property name '" + name + "'", sourceSpan);
          bindingType = null;
        }
      }
      return new template_ast_1.BoundElementPropertyAst(boundPropertyName, bindingType, ast, unit, sourceSpan);
    };
    TemplateParseVisitor.prototype._findComponentDirectiveNames = function(directives) {
      var componentTypeNames = [];
      directives.forEach(function(directive) {
        var typeName = directive.directive.type.name;
        if (directive.directive.isComponent) {
          componentTypeNames.push(typeName);
        }
      });
      return componentTypeNames;
    };
    TemplateParseVisitor.prototype._assertOnlyOneComponent = function(directives, sourceSpan) {
      var componentTypeNames = this._findComponentDirectiveNames(directives);
      if (componentTypeNames.length > 1) {
        this._reportError("More than one component: " + componentTypeNames.join(','), sourceSpan);
      }
    };
    TemplateParseVisitor.prototype._assertNoComponentsNorElementBindingsOnTemplate = function(directives, elementProps, sourceSpan) {
      var _this = this;
      var componentTypeNames = this._findComponentDirectiveNames(directives);
      if (componentTypeNames.length > 0) {
        this._reportError("Components on an embedded template: " + componentTypeNames.join(','), sourceSpan);
      }
      elementProps.forEach(function(prop) {
        _this._reportError("Property binding " + prop.name + " not used by any directive on an embedded template", sourceSpan);
      });
    };
    TemplateParseVisitor.prototype._assertAllEventsPublishedByDirectives = function(directives, events) {
      var _this = this;
      var allDirectiveEvents = new Set();
      directives.forEach(function(directive) {
        collection_1.StringMapWrapper.forEach(directive.directive.outputs, function(eventName, _) {
          allDirectiveEvents.add(eventName);
        });
      });
      events.forEach(function(event) {
        if (lang_1.isPresent(event.target) || !collection_1.SetWrapper.has(allDirectiveEvents, event.name)) {
          _this._reportError("Event binding " + event.fullName + " not emitted by any directive on an embedded template", event.sourceSpan);
        }
      });
    };
    return TemplateParseVisitor;
  })();
  var NonBindableVisitor = (function() {
    function NonBindableVisitor() {}
    NonBindableVisitor.prototype.visitElement = function(ast, component) {
      var preparsedElement = template_preparser_1.preparseElement(ast);
      if (preparsedElement.type === template_preparser_1.PreparsedElementType.SCRIPT || preparsedElement.type === template_preparser_1.PreparsedElementType.STYLE || preparsedElement.type === template_preparser_1.PreparsedElementType.STYLESHEET) {
        return null;
      }
      var attrNameAndValues = ast.attrs.map(function(attrAst) {
        return [attrAst.name, attrAst.value];
      });
      var selector = createElementCssSelector(ast.name, attrNameAndValues);
      var ngContentIndex = component.findNgContentIndex(selector);
      var children = html_ast_1.htmlVisitAll(this, ast.children, EMPTY_COMPONENT);
      return new template_ast_1.ElementAst(ast.name, html_ast_1.htmlVisitAll(this, ast.attrs), [], [], [], [], children, ngContentIndex, ast.sourceSpan);
    };
    NonBindableVisitor.prototype.visitAttr = function(ast, context) {
      return new template_ast_1.AttrAst(ast.name, ast.value, ast.sourceSpan);
    };
    NonBindableVisitor.prototype.visitText = function(ast, component) {
      var ngContentIndex = component.findNgContentIndex(TEXT_CSS_SELECTOR);
      return new template_ast_1.TextAst(ast.value, ngContentIndex, ast.sourceSpan);
    };
    return NonBindableVisitor;
  })();
  var BoundElementOrDirectiveProperty = (function() {
    function BoundElementOrDirectiveProperty(name, expression, isLiteral, sourceSpan) {
      this.name = name;
      this.expression = expression;
      this.isLiteral = isLiteral;
      this.sourceSpan = sourceSpan;
    }
    return BoundElementOrDirectiveProperty;
  })();
  function splitClasses(classAttrValue) {
    return lang_1.StringWrapper.split(classAttrValue.trim(), /\s+/g);
  }
  exports.splitClasses = splitClasses;
  var Component = (function() {
    function Component(ngContentIndexMatcher, wildcardNgContentIndex) {
      this.ngContentIndexMatcher = ngContentIndexMatcher;
      this.wildcardNgContentIndex = wildcardNgContentIndex;
    }
    Component.create = function(directives) {
      if (directives.length === 0 || !directives[0].directive.isComponent) {
        return EMPTY_COMPONENT;
      }
      var matcher = new selector_1.SelectorMatcher();
      var ngContentSelectors = directives[0].directive.template.ngContentSelectors;
      var wildcardNgContentIndex = null;
      for (var i = 0; i < ngContentSelectors.length; i++) {
        var selector = ngContentSelectors[i];
        if (lang_1.StringWrapper.equals(selector, '*')) {
          wildcardNgContentIndex = i;
        } else {
          matcher.addSelectables(selector_1.CssSelector.parse(ngContentSelectors[i]), i);
        }
      }
      return new Component(matcher, wildcardNgContentIndex);
    };
    Component.prototype.findNgContentIndex = function(selector) {
      var ngContentIndices = [];
      this.ngContentIndexMatcher.match(selector, function(selector, ngContentIndex) {
        ngContentIndices.push(ngContentIndex);
      });
      collection_1.ListWrapper.sort(ngContentIndices);
      if (lang_1.isPresent(this.wildcardNgContentIndex)) {
        ngContentIndices.push(this.wildcardNgContentIndex);
      }
      return ngContentIndices.length > 0 ? ngContentIndices[0] : null;
    };
    return Component;
  })();
  function createElementCssSelector(elementName, matchableAttrs) {
    var cssSelector = new selector_1.CssSelector();
    var elNameNoNs = html_tags_1.splitNsName(elementName)[1];
    cssSelector.setElement(elNameNoNs);
    for (var i = 0; i < matchableAttrs.length; i++) {
      var attrName = matchableAttrs[i][0];
      var attrNameNoNs = html_tags_1.splitNsName(attrName)[1];
      var attrValue = matchableAttrs[i][1];
      cssSelector.addAttribute(attrNameNoNs, attrValue);
      if (attrName.toLowerCase() == CLASS_ATTR) {
        var classes = splitClasses(attrValue);
        classes.forEach(function(className) {
          return cssSelector.addClassName(className);
        });
      }
    }
    return cssSelector;
  }
  var EMPTY_COMPONENT = new Component(new selector_1.SelectorMatcher(), null);
  var NON_BINDABLE_VISITOR = new NonBindableVisitor();
  var PipeCollector = (function(_super) {
    __extends(PipeCollector, _super);
    function PipeCollector() {
      _super.apply(this, arguments);
      this.pipes = new Set();
    }
    PipeCollector.prototype.visitPipe = function(ast) {
      this.pipes.add(ast.name);
      ast.exp.visit(this);
      this.visitAll(ast.args);
      return null;
    };
    return PipeCollector;
  })(ast_1.RecursiveAstVisitor);
  exports.PipeCollector = PipeCollector;
  global.define = __define;
  return module.exports;
});

System.register("rxjs/Observable", ["rxjs/Subscriber", "rxjs/util/root", "rxjs/util/SymbolShim", "rxjs/symbol/rxSubscriber"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var Subscriber_1 = require("rxjs/Subscriber");
  var root_1 = require("rxjs/util/root");
  var SymbolShim_1 = require("rxjs/util/SymbolShim");
  var rxSubscriber_1 = require("rxjs/symbol/rxSubscriber");
  var Observable = (function() {
    function Observable(subscribe) {
      this._isScalar = false;
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable.prototype.lift = function(operator) {
      var observable = new Observable();
      observable.source = this;
      observable.operator = operator;
      return observable;
    };
    Observable.prototype[SymbolShim_1.SymbolShim.observable] = function() {
      return this;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
      var subscriber;
      if (observerOrNext && typeof observerOrNext === 'object') {
        if (observerOrNext instanceof Subscriber_1.Subscriber) {
          subscriber = observerOrNext;
        } else if (observerOrNext[rxSubscriber_1.rxSubscriber]) {
          subscriber = observerOrNext[rxSubscriber_1.rxSubscriber]();
        } else {
          subscriber = new Subscriber_1.Subscriber(observerOrNext);
        }
      } else {
        var next = observerOrNext;
        subscriber = Subscriber_1.Subscriber.create(next, error, complete);
      }
      subscriber.add(this._subscribe(subscriber));
      return subscriber;
    };
    Observable.prototype.forEach = function(next, thisArg, PromiseCtor) {
      if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
          PromiseCtor = root_1.root.Rx.config.Promise;
        } else if (root_1.root.Promise) {
          PromiseCtor = root_1.root.Promise;
        }
      }
      if (!PromiseCtor) {
        throw new Error('no Promise impl found');
      }
      var nextHandler;
      if (thisArg) {
        nextHandler = function nextHandlerFn(value) {
          var _a = nextHandlerFn,
              thisArg = _a.thisArg,
              next = _a.next;
          return next.call(thisArg, value);
        };
        nextHandler.thisArg = thisArg;
        nextHandler.next = next;
      } else {
        nextHandler = next;
      }
      var promiseCallback = function promiseCallbackFn(resolve, reject) {
        var _a = promiseCallbackFn,
            source = _a.source,
            nextHandler = _a.nextHandler;
        source.subscribe(nextHandler, reject, resolve);
      };
      promiseCallback.source = this;
      promiseCallback.nextHandler = nextHandler;
      return new PromiseCtor(promiseCallback);
    };
    Observable.prototype._subscribe = function(subscriber) {
      return this.source._subscribe(this.operator.call(subscriber));
    };
    Observable.create = function(subscribe) {
      return new Observable(subscribe);
    };
    return Observable;
  })();
  exports.Observable = Observable;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/di", ["angular2/src/core/di/metadata", "angular2/src/core/di/decorators", "angular2/src/core/di/forward_ref", "angular2/src/core/di/injector", "angular2/src/core/di/provider", "angular2/src/core/di/key", "angular2/src/core/di/exceptions", "angular2/src/core/di/opaque_token"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var metadata_1 = require("angular2/src/core/di/metadata");
  exports.InjectMetadata = metadata_1.InjectMetadata;
  exports.OptionalMetadata = metadata_1.OptionalMetadata;
  exports.InjectableMetadata = metadata_1.InjectableMetadata;
  exports.SelfMetadata = metadata_1.SelfMetadata;
  exports.HostMetadata = metadata_1.HostMetadata;
  exports.SkipSelfMetadata = metadata_1.SkipSelfMetadata;
  exports.DependencyMetadata = metadata_1.DependencyMetadata;
  __export(require("angular2/src/core/di/decorators"));
  var forward_ref_1 = require("angular2/src/core/di/forward_ref");
  exports.forwardRef = forward_ref_1.forwardRef;
  exports.resolveForwardRef = forward_ref_1.resolveForwardRef;
  var injector_1 = require("angular2/src/core/di/injector");
  exports.Injector = injector_1.Injector;
  var provider_1 = require("angular2/src/core/di/provider");
  exports.Binding = provider_1.Binding;
  exports.ProviderBuilder = provider_1.ProviderBuilder;
  exports.ResolvedFactory = provider_1.ResolvedFactory;
  exports.Dependency = provider_1.Dependency;
  exports.bind = provider_1.bind;
  exports.Provider = provider_1.Provider;
  exports.provide = provider_1.provide;
  var key_1 = require("angular2/src/core/di/key");
  exports.Key = key_1.Key;
  exports.TypeLiteral = key_1.TypeLiteral;
  var exceptions_1 = require("angular2/src/core/di/exceptions");
  exports.NoProviderError = exceptions_1.NoProviderError;
  exports.AbstractProviderError = exceptions_1.AbstractProviderError;
  exports.CyclicDependencyError = exceptions_1.CyclicDependencyError;
  exports.InstantiationError = exceptions_1.InstantiationError;
  exports.InvalidProviderError = exceptions_1.InvalidProviderError;
  exports.NoAnnotationError = exceptions_1.NoAnnotationError;
  exports.OutOfBoundsError = exceptions_1.OutOfBoundsError;
  var opaque_token_1 = require("angular2/src/core/di/opaque_token");
  exports.OpaqueToken = opaque_token_1.OpaqueToken;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/change_detection/change_detection", ["angular2/src/core/change_detection/differs/iterable_differs", "angular2/src/core/change_detection/differs/default_iterable_differ", "angular2/src/core/change_detection/differs/keyvalue_differs", "angular2/src/core/change_detection/differs/default_keyvalue_differ", "angular2/src/facade/lang", "angular2/src/core/change_detection/parser/ast", "angular2/src/core/change_detection/parser/lexer", "angular2/src/core/change_detection/parser/parser", "angular2/src/core/change_detection/parser/locals", "angular2/src/core/change_detection/exceptions", "angular2/src/core/change_detection/interfaces", "angular2/src/core/change_detection/constants", "angular2/src/core/change_detection/proto_change_detector", "angular2/src/core/change_detection/jit_proto_change_detector", "angular2/src/core/change_detection/binding_record", "angular2/src/core/change_detection/directive_record", "angular2/src/core/change_detection/dynamic_change_detector", "angular2/src/core/change_detection/change_detector_ref", "angular2/src/core/change_detection/differs/iterable_differs", "angular2/src/core/change_detection/differs/keyvalue_differs", "angular2/src/core/change_detection/change_detection_util"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var iterable_differs_1 = require("angular2/src/core/change_detection/differs/iterable_differs");
  var default_iterable_differ_1 = require("angular2/src/core/change_detection/differs/default_iterable_differ");
  var keyvalue_differs_1 = require("angular2/src/core/change_detection/differs/keyvalue_differs");
  var default_keyvalue_differ_1 = require("angular2/src/core/change_detection/differs/default_keyvalue_differ");
  var lang_1 = require("angular2/src/facade/lang");
  var ast_1 = require("angular2/src/core/change_detection/parser/ast");
  exports.ASTWithSource = ast_1.ASTWithSource;
  exports.AST = ast_1.AST;
  exports.AstTransformer = ast_1.AstTransformer;
  exports.PropertyRead = ast_1.PropertyRead;
  exports.LiteralArray = ast_1.LiteralArray;
  exports.ImplicitReceiver = ast_1.ImplicitReceiver;
  var lexer_1 = require("angular2/src/core/change_detection/parser/lexer");
  exports.Lexer = lexer_1.Lexer;
  var parser_1 = require("angular2/src/core/change_detection/parser/parser");
  exports.Parser = parser_1.Parser;
  var locals_1 = require("angular2/src/core/change_detection/parser/locals");
  exports.Locals = locals_1.Locals;
  var exceptions_1 = require("angular2/src/core/change_detection/exceptions");
  exports.DehydratedException = exceptions_1.DehydratedException;
  exports.ExpressionChangedAfterItHasBeenCheckedException = exceptions_1.ExpressionChangedAfterItHasBeenCheckedException;
  exports.ChangeDetectionError = exceptions_1.ChangeDetectionError;
  var interfaces_1 = require("angular2/src/core/change_detection/interfaces");
  exports.ChangeDetectorDefinition = interfaces_1.ChangeDetectorDefinition;
  exports.DebugContext = interfaces_1.DebugContext;
  exports.ChangeDetectorGenConfig = interfaces_1.ChangeDetectorGenConfig;
  var constants_1 = require("angular2/src/core/change_detection/constants");
  exports.ChangeDetectionStrategy = constants_1.ChangeDetectionStrategy;
  exports.CHANGE_DETECTION_STRATEGY_VALUES = constants_1.CHANGE_DETECTION_STRATEGY_VALUES;
  var proto_change_detector_1 = require("angular2/src/core/change_detection/proto_change_detector");
  exports.DynamicProtoChangeDetector = proto_change_detector_1.DynamicProtoChangeDetector;
  var jit_proto_change_detector_1 = require("angular2/src/core/change_detection/jit_proto_change_detector");
  exports.JitProtoChangeDetector = jit_proto_change_detector_1.JitProtoChangeDetector;
  var binding_record_1 = require("angular2/src/core/change_detection/binding_record");
  exports.BindingRecord = binding_record_1.BindingRecord;
  exports.BindingTarget = binding_record_1.BindingTarget;
  var directive_record_1 = require("angular2/src/core/change_detection/directive_record");
  exports.DirectiveIndex = directive_record_1.DirectiveIndex;
  exports.DirectiveRecord = directive_record_1.DirectiveRecord;
  var dynamic_change_detector_1 = require("angular2/src/core/change_detection/dynamic_change_detector");
  exports.DynamicChangeDetector = dynamic_change_detector_1.DynamicChangeDetector;
  var change_detector_ref_1 = require("angular2/src/core/change_detection/change_detector_ref");
  exports.ChangeDetectorRef = change_detector_ref_1.ChangeDetectorRef;
  var iterable_differs_2 = require("angular2/src/core/change_detection/differs/iterable_differs");
  exports.IterableDiffers = iterable_differs_2.IterableDiffers;
  var keyvalue_differs_2 = require("angular2/src/core/change_detection/differs/keyvalue_differs");
  exports.KeyValueDiffers = keyvalue_differs_2.KeyValueDiffers;
  var change_detection_util_1 = require("angular2/src/core/change_detection/change_detection_util");
  exports.WrappedValue = change_detection_util_1.WrappedValue;
  exports.SimpleChange = change_detection_util_1.SimpleChange;
  exports.keyValDiff = lang_1.CONST_EXPR([lang_1.CONST_EXPR(new default_keyvalue_differ_1.DefaultKeyValueDifferFactory())]);
  exports.iterableDiff = lang_1.CONST_EXPR([lang_1.CONST_EXPR(new default_iterable_differ_1.DefaultIterableDifferFactory())]);
  exports.defaultIterableDiffers = lang_1.CONST_EXPR(new iterable_differs_1.IterableDiffers(exports.iterableDiff));
  exports.defaultKeyValueDiffers = lang_1.CONST_EXPR(new keyvalue_differs_1.KeyValueDiffers(exports.keyValDiff));
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/dom/dom_renderer", ["angular2/src/core/di", "angular2/src/animate/animation_builder", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/platform/dom/shared_styles_host", "angular2/src/platform/dom/events/event_manager", "angular2/src/platform/dom/dom_tokens", "angular2/src/core/metadata", "angular2/src/platform/dom/dom_adapter", "angular2/src/platform/dom/util"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var di_1 = require("angular2/src/core/di");
  var animation_builder_1 = require("angular2/src/animate/animation_builder");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var shared_styles_host_1 = require("angular2/src/platform/dom/shared_styles_host");
  var event_manager_1 = require("angular2/src/platform/dom/events/event_manager");
  var dom_tokens_1 = require("angular2/src/platform/dom/dom_tokens");
  var metadata_1 = require("angular2/src/core/metadata");
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var util_1 = require("angular2/src/platform/dom/util");
  var NAMESPACE_URIS = lang_1.CONST_EXPR({
    'xlink': 'http://www.w3.org/1999/xlink',
    'svg': 'http://www.w3.org/2000/svg'
  });
  var TEMPLATE_COMMENT_TEXT = 'template bindings={}';
  var TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/g;
  var DomRootRenderer = (function() {
    function DomRootRenderer(document, eventManager, sharedStylesHost, animate) {
      this.document = document;
      this.eventManager = eventManager;
      this.sharedStylesHost = sharedStylesHost;
      this.animate = animate;
      this._registeredComponents = new Map();
    }
    DomRootRenderer.prototype.renderComponent = function(componentProto) {
      var renderer = this._registeredComponents.get(componentProto.id);
      if (lang_1.isBlank(renderer)) {
        renderer = new DomRenderer(this, componentProto);
        this._registeredComponents.set(componentProto.id, renderer);
      }
      return renderer;
    };
    return DomRootRenderer;
  })();
  exports.DomRootRenderer = DomRootRenderer;
  var DomRootRenderer_ = (function(_super) {
    __extends(DomRootRenderer_, _super);
    function DomRootRenderer_(_document, _eventManager, sharedStylesHost, animate) {
      _super.call(this, _document, _eventManager, sharedStylesHost, animate);
    }
    DomRootRenderer_ = __decorate([di_1.Injectable(), __param(0, di_1.Inject(dom_tokens_1.DOCUMENT)), __metadata('design:paramtypes', [Object, event_manager_1.EventManager, shared_styles_host_1.DomSharedStylesHost, animation_builder_1.AnimationBuilder])], DomRootRenderer_);
    return DomRootRenderer_;
  })(DomRootRenderer);
  exports.DomRootRenderer_ = DomRootRenderer_;
  var DomRenderer = (function() {
    function DomRenderer(_rootRenderer, componentProto) {
      this._rootRenderer = _rootRenderer;
      this.componentProto = componentProto;
      this._styles = _flattenStyles(componentProto.id, componentProto.styles, []);
      if (componentProto.encapsulation !== metadata_1.ViewEncapsulation.Native) {
        this._rootRenderer.sharedStylesHost.addStyles(this._styles);
      }
      if (this.componentProto.encapsulation === metadata_1.ViewEncapsulation.Emulated) {
        this._contentAttr = _shimContentAttribute(componentProto.id);
        this._hostAttr = _shimHostAttribute(componentProto.id);
      } else {
        this._contentAttr = null;
        this._hostAttr = null;
      }
    }
    DomRenderer.prototype.renderComponent = function(componentProto) {
      return this._rootRenderer.renderComponent(componentProto);
    };
    DomRenderer.prototype.selectRootElement = function(selector) {
      var el = dom_adapter_1.DOM.querySelector(this._rootRenderer.document, selector);
      if (lang_1.isBlank(el)) {
        throw new exceptions_1.BaseException("The selector \"" + selector + "\" did not match any elements");
      }
      dom_adapter_1.DOM.clearNodes(el);
      return el;
    };
    DomRenderer.prototype.createElement = function(parent, name) {
      var nsAndName = splitNamespace(name);
      var el = lang_1.isPresent(nsAndName[0]) ? dom_adapter_1.DOM.createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]) : dom_adapter_1.DOM.createElement(nsAndName[1]);
      if (lang_1.isPresent(this._contentAttr)) {
        dom_adapter_1.DOM.setAttribute(el, this._contentAttr, '');
      }
      if (lang_1.isPresent(parent)) {
        dom_adapter_1.DOM.appendChild(parent, el);
      }
      return el;
    };
    DomRenderer.prototype.createViewRoot = function(hostElement) {
      var nodesParent;
      if (this.componentProto.encapsulation === metadata_1.ViewEncapsulation.Native) {
        nodesParent = dom_adapter_1.DOM.createShadowRoot(hostElement);
        this._rootRenderer.sharedStylesHost.addHost(nodesParent);
        for (var i = 0; i < this._styles.length; i++) {
          dom_adapter_1.DOM.appendChild(nodesParent, dom_adapter_1.DOM.createStyleElement(this._styles[i]));
        }
      } else {
        if (lang_1.isPresent(this._hostAttr)) {
          dom_adapter_1.DOM.setAttribute(hostElement, this._hostAttr, '');
        }
        nodesParent = hostElement;
      }
      return nodesParent;
    };
    DomRenderer.prototype.createTemplateAnchor = function(parentElement) {
      var comment = dom_adapter_1.DOM.createComment(TEMPLATE_COMMENT_TEXT);
      if (lang_1.isPresent(parentElement)) {
        dom_adapter_1.DOM.appendChild(parentElement, comment);
      }
      return comment;
    };
    DomRenderer.prototype.createText = function(parentElement, value) {
      var node = dom_adapter_1.DOM.createTextNode(value);
      if (lang_1.isPresent(parentElement)) {
        dom_adapter_1.DOM.appendChild(parentElement, node);
      }
      return node;
    };
    DomRenderer.prototype.projectNodes = function(parentElement, nodes) {
      if (lang_1.isBlank(parentElement))
        return ;
      appendNodes(parentElement, nodes);
    };
    DomRenderer.prototype.attachViewAfter = function(node, viewRootNodes) {
      moveNodesAfterSibling(node, viewRootNodes);
      for (var i = 0; i < viewRootNodes.length; i++)
        this.animateNodeEnter(viewRootNodes[i]);
    };
    DomRenderer.prototype.detachView = function(viewRootNodes) {
      for (var i = 0; i < viewRootNodes.length; i++) {
        var node = viewRootNodes[i];
        dom_adapter_1.DOM.remove(node);
        this.animateNodeLeave(node);
      }
    };
    DomRenderer.prototype.destroyView = function(hostElement, viewAllNodes) {
      if (this.componentProto.encapsulation === metadata_1.ViewEncapsulation.Native && lang_1.isPresent(hostElement)) {
        this._rootRenderer.sharedStylesHost.removeHost(dom_adapter_1.DOM.getShadowRoot(hostElement));
      }
    };
    DomRenderer.prototype.listen = function(renderElement, name, callback) {
      this._rootRenderer.eventManager.addEventListener(renderElement, name, decoratePreventDefault(callback));
    };
    DomRenderer.prototype.listenGlobal = function(target, name, callback) {
      return this._rootRenderer.eventManager.addGlobalEventListener(target, name, decoratePreventDefault(callback));
    };
    DomRenderer.prototype.setElementProperty = function(renderElement, propertyName, propertyValue) {
      dom_adapter_1.DOM.setProperty(renderElement, propertyName, propertyValue);
    };
    DomRenderer.prototype.setElementAttribute = function(renderElement, attributeName, attributeValue) {
      var attrNs;
      var nsAndName = splitNamespace(attributeName);
      if (lang_1.isPresent(nsAndName[0])) {
        attributeName = nsAndName[0] + ':' + nsAndName[1];
        attrNs = NAMESPACE_URIS[nsAndName[0]];
      }
      if (lang_1.isPresent(attributeValue)) {
        if (lang_1.isPresent(attrNs)) {
          dom_adapter_1.DOM.setAttributeNS(renderElement, attrNs, attributeName, attributeValue);
        } else {
          dom_adapter_1.DOM.setAttribute(renderElement, nsAndName[1], attributeValue);
        }
      } else {
        dom_adapter_1.DOM.removeAttribute(renderElement, attributeName);
      }
    };
    DomRenderer.prototype.setBindingDebugInfo = function(renderElement, propertyName, propertyValue) {
      var dashCasedPropertyName = util_1.camelCaseToDashCase(propertyName);
      if (dom_adapter_1.DOM.isCommentNode(renderElement)) {
        var existingBindings = lang_1.RegExpWrapper.firstMatch(TEMPLATE_BINDINGS_EXP, lang_1.StringWrapper.replaceAll(dom_adapter_1.DOM.getText(renderElement), /\n/g, ''));
        var parsedBindings = lang_1.Json.parse(existingBindings[1]);
        parsedBindings[dashCasedPropertyName] = propertyValue;
        dom_adapter_1.DOM.setText(renderElement, lang_1.StringWrapper.replace(TEMPLATE_COMMENT_TEXT, '{}', lang_1.Json.stringify(parsedBindings)));
      } else {
        this.setElementAttribute(renderElement, propertyName, propertyValue);
      }
    };
    DomRenderer.prototype.setElementClass = function(renderElement, className, isAdd) {
      if (isAdd) {
        dom_adapter_1.DOM.addClass(renderElement, className);
      } else {
        dom_adapter_1.DOM.removeClass(renderElement, className);
      }
    };
    DomRenderer.prototype.setElementStyle = function(renderElement, styleName, styleValue) {
      if (lang_1.isPresent(styleValue)) {
        dom_adapter_1.DOM.setStyle(renderElement, styleName, lang_1.stringify(styleValue));
      } else {
        dom_adapter_1.DOM.removeStyle(renderElement, styleName);
      }
    };
    DomRenderer.prototype.invokeElementMethod = function(renderElement, methodName, args) {
      dom_adapter_1.DOM.invoke(renderElement, methodName, args);
    };
    DomRenderer.prototype.setText = function(renderNode, text) {
      dom_adapter_1.DOM.setText(renderNode, text);
    };
    DomRenderer.prototype.animateNodeEnter = function(node) {
      if (dom_adapter_1.DOM.isElementNode(node) && dom_adapter_1.DOM.hasClass(node, 'ng-animate')) {
        dom_adapter_1.DOM.addClass(node, 'ng-enter');
        this._rootRenderer.animate.css().addAnimationClass('ng-enter-active').start(node).onComplete(function() {
          dom_adapter_1.DOM.removeClass(node, 'ng-enter');
        });
      }
    };
    DomRenderer.prototype.animateNodeLeave = function(node) {
      if (dom_adapter_1.DOM.isElementNode(node) && dom_adapter_1.DOM.hasClass(node, 'ng-animate')) {
        dom_adapter_1.DOM.addClass(node, 'ng-leave');
        this._rootRenderer.animate.css().addAnimationClass('ng-leave-active').start(node).onComplete(function() {
          dom_adapter_1.DOM.removeClass(node, 'ng-leave');
          dom_adapter_1.DOM.remove(node);
        });
      } else {
        dom_adapter_1.DOM.remove(node);
      }
    };
    return DomRenderer;
  })();
  exports.DomRenderer = DomRenderer;
  function moveNodesAfterSibling(sibling, nodes) {
    var parent = dom_adapter_1.DOM.parentElement(sibling);
    if (nodes.length > 0 && lang_1.isPresent(parent)) {
      var nextSibling = dom_adapter_1.DOM.nextSibling(sibling);
      if (lang_1.isPresent(nextSibling)) {
        for (var i = 0; i < nodes.length; i++) {
          dom_adapter_1.DOM.insertBefore(nextSibling, nodes[i]);
        }
      } else {
        for (var i = 0; i < nodes.length; i++) {
          dom_adapter_1.DOM.appendChild(parent, nodes[i]);
        }
      }
    }
  }
  function appendNodes(parent, nodes) {
    for (var i = 0; i < nodes.length; i++) {
      dom_adapter_1.DOM.appendChild(parent, nodes[i]);
    }
  }
  function decoratePreventDefault(eventHandler) {
    return function(event) {
      var allowDefaultBehavior = eventHandler(event);
      if (allowDefaultBehavior === false) {
        dom_adapter_1.DOM.preventDefault(event);
      }
    };
  }
  var COMPONENT_REGEX = /%COMP%/g;
  exports.COMPONENT_VARIABLE = '%COMP%';
  exports.HOST_ATTR = "_nghost-" + exports.COMPONENT_VARIABLE;
  exports.CONTENT_ATTR = "_ngcontent-" + exports.COMPONENT_VARIABLE;
  function _shimContentAttribute(componentShortId) {
    return lang_1.StringWrapper.replaceAll(exports.CONTENT_ATTR, COMPONENT_REGEX, componentShortId);
  }
  function _shimHostAttribute(componentShortId) {
    return lang_1.StringWrapper.replaceAll(exports.HOST_ATTR, COMPONENT_REGEX, componentShortId);
  }
  function _flattenStyles(compId, styles, target) {
    for (var i = 0; i < styles.length; i++) {
      var style = styles[i];
      if (lang_1.isArray(style)) {
        _flattenStyles(compId, style, target);
      } else {
        style = lang_1.StringWrapper.replaceAll(style, COMPONENT_REGEX, compId);
        target.push(style);
      }
    }
    return target;
  }
  var NS_PREFIX_RE = /^@([^:]+):(.+)/g;
  function splitNamespace(name) {
    if (name[0] != '@') {
      return [null, name];
    }
    var match = lang_1.RegExpWrapper.firstMatch(NS_PREFIX_RE, name);
    return [match[1], match[2]];
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/template_compiler", ["angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/collection", "angular2/src/facade/async", "angular2/src/compiler/directive_metadata", "angular2/src/compiler/template_ast", "angular2/src/core/di", "angular2/src/compiler/source_module", "angular2/src/compiler/change_detector_compiler", "angular2/src/compiler/style_compiler", "angular2/src/compiler/view_compiler", "angular2/src/compiler/proto_view_compiler", "angular2/src/compiler/template_parser", "angular2/src/compiler/template_normalizer", "angular2/src/compiler/runtime_metadata", "angular2/src/core/linker/view", "angular2/src/core/change_detection/change_detection", "angular2/src/core/linker/resolved_metadata_cache", "angular2/src/compiler/util"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var collection_1 = require("angular2/src/facade/collection");
  var async_1 = require("angular2/src/facade/async");
  var directive_metadata_1 = require("angular2/src/compiler/directive_metadata");
  var template_ast_1 = require("angular2/src/compiler/template_ast");
  var di_1 = require("angular2/src/core/di");
  var source_module_1 = require("angular2/src/compiler/source_module");
  var change_detector_compiler_1 = require("angular2/src/compiler/change_detector_compiler");
  var style_compiler_1 = require("angular2/src/compiler/style_compiler");
  var view_compiler_1 = require("angular2/src/compiler/view_compiler");
  var proto_view_compiler_1 = require("angular2/src/compiler/proto_view_compiler");
  var template_parser_1 = require("angular2/src/compiler/template_parser");
  var template_normalizer_1 = require("angular2/src/compiler/template_normalizer");
  var runtime_metadata_1 = require("angular2/src/compiler/runtime_metadata");
  var view_1 = require("angular2/src/core/linker/view");
  var change_detection_1 = require("angular2/src/core/change_detection/change_detection");
  var resolved_metadata_cache_1 = require("angular2/src/core/linker/resolved_metadata_cache");
  var util_1 = require("angular2/src/compiler/util");
  exports.METADATA_CACHE_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/resolved_metadata_cache' + util_1.MODULE_SUFFIX);
  var TemplateCompiler = (function() {
    function TemplateCompiler(_runtimeMetadataResolver, _templateNormalizer, _templateParser, _styleCompiler, _cdCompiler, _protoViewCompiler, _viewCompiler, _resolvedMetadataCache, _genConfig) {
      this._runtimeMetadataResolver = _runtimeMetadataResolver;
      this._templateNormalizer = _templateNormalizer;
      this._templateParser = _templateParser;
      this._styleCompiler = _styleCompiler;
      this._cdCompiler = _cdCompiler;
      this._protoViewCompiler = _protoViewCompiler;
      this._viewCompiler = _viewCompiler;
      this._resolvedMetadataCache = _resolvedMetadataCache;
      this._genConfig = _genConfig;
      this._hostCacheKeys = new Map();
      this._compiledTemplateCache = new Map();
      this._compiledTemplateDone = new Map();
    }
    TemplateCompiler.prototype.normalizeDirectiveMetadata = function(directive) {
      if (!directive.isComponent) {
        return async_1.PromiseWrapper.resolve(directive);
      }
      return this._templateNormalizer.normalizeTemplate(directive.type, directive.template).then(function(normalizedTemplate) {
        return new directive_metadata_1.CompileDirectiveMetadata({
          type: directive.type,
          isComponent: directive.isComponent,
          dynamicLoadable: directive.dynamicLoadable,
          selector: directive.selector,
          exportAs: directive.exportAs,
          changeDetection: directive.changeDetection,
          inputs: directive.inputs,
          outputs: directive.outputs,
          hostListeners: directive.hostListeners,
          hostProperties: directive.hostProperties,
          hostAttributes: directive.hostAttributes,
          lifecycleHooks: directive.lifecycleHooks,
          template: normalizedTemplate
        });
      });
    };
    TemplateCompiler.prototype.compileHostComponentRuntime = function(type) {
      var compMeta = this._runtimeMetadataResolver.getDirectiveMetadata(type);
      var hostCacheKey = this._hostCacheKeys.get(type);
      if (lang_1.isBlank(hostCacheKey)) {
        hostCacheKey = new Object();
        this._hostCacheKeys.set(type, hostCacheKey);
        assertComponent(compMeta);
        var hostMeta = directive_metadata_1.createHostComponentMeta(compMeta.type, compMeta.selector);
        this._compileComponentRuntime(hostCacheKey, hostMeta, [compMeta], [], []);
      }
      return this._compiledTemplateDone.get(hostCacheKey).then(function(compiledTemplate) {
        return new view_1.HostViewFactory(compMeta.selector, compiledTemplate.viewFactory);
      });
    };
    TemplateCompiler.prototype.clearCache = function() {
      this._styleCompiler.clearCache();
      this._compiledTemplateCache.clear();
      this._compiledTemplateDone.clear();
      this._hostCacheKeys.clear();
    };
    TemplateCompiler.prototype.compileTemplatesCodeGen = function(components) {
      var _this = this;
      if (components.length === 0) {
        throw new exceptions_1.BaseException('No components given');
      }
      var declarations = [];
      components.forEach(function(componentWithDirs) {
        var compMeta = componentWithDirs.component;
        assertComponent(compMeta);
        _this._compileComponentCodeGen(compMeta, componentWithDirs.directives, componentWithDirs.pipes, declarations);
        if (compMeta.dynamicLoadable) {
          var hostMeta = directive_metadata_1.createHostComponentMeta(compMeta.type, compMeta.selector);
          var viewFactoryExpression = _this._compileComponentCodeGen(hostMeta, [compMeta], [], declarations);
          var constructionKeyword = lang_1.IS_DART ? 'const' : 'new';
          var compiledTemplateExpr = constructionKeyword + " " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "HostViewFactory('" + compMeta.selector + "'," + viewFactoryExpression + ")";
          var varName = codeGenHostViewFactoryName(compMeta.type);
          declarations.push("" + util_1.codeGenExportVariable(varName) + compiledTemplateExpr + ";");
        }
      });
      var moduleUrl = components[0].component.type.moduleUrl;
      return new source_module_1.SourceModule("" + templateModuleUrl(moduleUrl), declarations.join('\n'));
    };
    TemplateCompiler.prototype.compileStylesheetCodeGen = function(stylesheetUrl, cssText) {
      return this._styleCompiler.compileStylesheetCodeGen(stylesheetUrl, cssText);
    };
    TemplateCompiler.prototype._compileComponentRuntime = function(cacheKey, compMeta, viewDirectives, pipes, compilingComponentsPath) {
      var _this = this;
      var uniqViewDirectives = removeDuplicates(viewDirectives);
      var uniqViewPipes = removeDuplicates(pipes);
      var compiledTemplate = this._compiledTemplateCache.get(cacheKey);
      var done = this._compiledTemplateDone.get(cacheKey);
      if (lang_1.isBlank(compiledTemplate)) {
        compiledTemplate = new CompiledTemplate();
        this._compiledTemplateCache.set(cacheKey, compiledTemplate);
        done = async_1.PromiseWrapper.all([this._styleCompiler.compileComponentRuntime(compMeta.template)].concat(uniqViewDirectives.map(function(dirMeta) {
          return _this.normalizeDirectiveMetadata(dirMeta);
        }))).then(function(stylesAndNormalizedViewDirMetas) {
          var normalizedViewDirMetas = stylesAndNormalizedViewDirMetas.slice(1);
          var styles = stylesAndNormalizedViewDirMetas[0];
          var parsedTemplate = _this._templateParser.parse(compMeta.template.template, normalizedViewDirMetas, uniqViewPipes, compMeta.type.name);
          var childPromises = [];
          var usedDirectives = DirectiveCollector.findUsedDirectives(parsedTemplate);
          usedDirectives.components.forEach(function(component) {
            return _this._compileNestedComponentRuntime(component, compilingComponentsPath, childPromises);
          });
          return async_1.PromiseWrapper.all(childPromises).then(function(_) {
            var filteredPipes = filterPipes(parsedTemplate, uniqViewPipes);
            compiledTemplate.init(_this._createViewFactoryRuntime(compMeta, parsedTemplate, usedDirectives.directives, styles, filteredPipes));
            return compiledTemplate;
          });
        });
        this._compiledTemplateDone.set(cacheKey, done);
      }
      return compiledTemplate;
    };
    TemplateCompiler.prototype._compileNestedComponentRuntime = function(childComponentDir, parentCompilingComponentsPath, childPromises) {
      var compilingComponentsPath = collection_1.ListWrapper.clone(parentCompilingComponentsPath);
      var childCacheKey = childComponentDir.type.runtime;
      var childViewDirectives = this._runtimeMetadataResolver.getViewDirectivesMetadata(childComponentDir.type.runtime);
      var childViewPipes = this._runtimeMetadataResolver.getViewPipesMetadata(childComponentDir.type.runtime);
      var childIsRecursive = collection_1.ListWrapper.contains(compilingComponentsPath, childCacheKey);
      compilingComponentsPath.push(childCacheKey);
      this._compileComponentRuntime(childCacheKey, childComponentDir, childViewDirectives, childViewPipes, compilingComponentsPath);
      if (!childIsRecursive) {
        childPromises.push(this._compiledTemplateDone.get(childCacheKey));
      }
    };
    TemplateCompiler.prototype._createViewFactoryRuntime = function(compMeta, parsedTemplate, directives, styles, pipes) {
      var _this = this;
      if (lang_1.IS_DART || !this._genConfig.useJit) {
        var changeDetectorFactories = this._cdCompiler.compileComponentRuntime(compMeta.type, compMeta.changeDetection, parsedTemplate);
        var protoViews = this._protoViewCompiler.compileProtoViewRuntime(this._resolvedMetadataCache, compMeta, parsedTemplate, pipes);
        return this._viewCompiler.compileComponentRuntime(compMeta, parsedTemplate, styles, protoViews.protoViews, changeDetectorFactories, function(compMeta) {
          return _this._getNestedComponentViewFactory(compMeta);
        });
      } else {
        var declarations = [];
        var viewFactoryExpr = this._createViewFactoryCodeGen('resolvedMetadataCache', compMeta, new source_module_1.SourceExpression([], 'styles'), parsedTemplate, pipes, declarations);
        var vars = {
          'exports': {},
          'styles': styles,
          'resolvedMetadataCache': this._resolvedMetadataCache
        };
        directives.forEach(function(dirMeta) {
          vars[dirMeta.type.name] = dirMeta.type.runtime;
          if (dirMeta.isComponent && dirMeta.type.runtime !== compMeta.type.runtime) {
            vars[("viewFactory_" + dirMeta.type.name + "0")] = _this._getNestedComponentViewFactory(dirMeta);
          }
        });
        pipes.forEach(function(pipeMeta) {
          return vars[pipeMeta.type.name] = pipeMeta.type.runtime;
        });
        var declarationsWithoutImports = source_module_1.SourceModule.getSourceWithoutImports(declarations.join('\n'));
        return lang_1.evalExpression("viewFactory_" + compMeta.type.name, viewFactoryExpr, declarationsWithoutImports, mergeStringMaps([vars, change_detector_compiler_1.CHANGE_DETECTION_JIT_IMPORTS, proto_view_compiler_1.PROTO_VIEW_JIT_IMPORTS, view_compiler_1.VIEW_JIT_IMPORTS]));
      }
    };
    TemplateCompiler.prototype._getNestedComponentViewFactory = function(compMeta) {
      return this._compiledTemplateCache.get(compMeta.type.runtime).viewFactory;
    };
    TemplateCompiler.prototype._compileComponentCodeGen = function(compMeta, directives, pipes, targetDeclarations) {
      var uniqueDirectives = removeDuplicates(directives);
      var uniqPipes = removeDuplicates(pipes);
      var styleExpr = this._styleCompiler.compileComponentCodeGen(compMeta.template);
      var parsedTemplate = this._templateParser.parse(compMeta.template.template, uniqueDirectives, uniqPipes, compMeta.type.name);
      var filteredPipes = filterPipes(parsedTemplate, uniqPipes);
      return this._createViewFactoryCodeGen(exports.METADATA_CACHE_MODULE_REF + "CODEGEN_RESOLVED_METADATA_CACHE", compMeta, styleExpr, parsedTemplate, filteredPipes, targetDeclarations);
    };
    TemplateCompiler.prototype._createViewFactoryCodeGen = function(resolvedMetadataCacheExpr, compMeta, styleExpr, parsedTemplate, pipes, targetDeclarations) {
      var changeDetectorsExprs = this._cdCompiler.compileComponentCodeGen(compMeta.type, compMeta.changeDetection, parsedTemplate);
      var protoViewExprs = this._protoViewCompiler.compileProtoViewCodeGen(new util_1.Expression(resolvedMetadataCacheExpr), compMeta, parsedTemplate, pipes);
      var viewFactoryExpr = this._viewCompiler.compileComponentCodeGen(compMeta, parsedTemplate, styleExpr, protoViewExprs.protoViews, changeDetectorsExprs, codeGenComponentViewFactoryName);
      util_1.addAll(changeDetectorsExprs.declarations, targetDeclarations);
      util_1.addAll(protoViewExprs.declarations, targetDeclarations);
      util_1.addAll(viewFactoryExpr.declarations, targetDeclarations);
      return viewFactoryExpr.expression;
    };
    TemplateCompiler = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [runtime_metadata_1.RuntimeMetadataResolver, template_normalizer_1.TemplateNormalizer, template_parser_1.TemplateParser, style_compiler_1.StyleCompiler, change_detector_compiler_1.ChangeDetectionCompiler, proto_view_compiler_1.ProtoViewCompiler, view_compiler_1.ViewCompiler, resolved_metadata_cache_1.ResolvedMetadataCache, change_detection_1.ChangeDetectorGenConfig])], TemplateCompiler);
    return TemplateCompiler;
  })();
  exports.TemplateCompiler = TemplateCompiler;
  var NormalizedComponentWithViewDirectives = (function() {
    function NormalizedComponentWithViewDirectives(component, directives, pipes) {
      this.component = component;
      this.directives = directives;
      this.pipes = pipes;
    }
    return NormalizedComponentWithViewDirectives;
  })();
  exports.NormalizedComponentWithViewDirectives = NormalizedComponentWithViewDirectives;
  var CompiledTemplate = (function() {
    function CompiledTemplate() {
      this.viewFactory = null;
    }
    CompiledTemplate.prototype.init = function(viewFactory) {
      this.viewFactory = viewFactory;
    };
    return CompiledTemplate;
  })();
  function assertComponent(meta) {
    if (!meta.isComponent) {
      throw new exceptions_1.BaseException("Could not compile '" + meta.type.name + "' because it is not a component.");
    }
  }
  function templateModuleUrl(moduleUrl) {
    var urlWithoutSuffix = moduleUrl.substring(0, moduleUrl.length - util_1.MODULE_SUFFIX.length);
    return urlWithoutSuffix + ".template" + util_1.MODULE_SUFFIX;
  }
  function codeGenHostViewFactoryName(type) {
    return "hostViewFactory_" + type.name;
  }
  function codeGenComponentViewFactoryName(nestedCompType) {
    return source_module_1.moduleRef(templateModuleUrl(nestedCompType.type.moduleUrl)) + "viewFactory_" + nestedCompType.type.name + "0";
  }
  function mergeStringMaps(maps) {
    var result = {};
    maps.forEach(function(map) {
      collection_1.StringMapWrapper.forEach(map, function(value, key) {
        result[key] = value;
      });
    });
    return result;
  }
  function removeDuplicates(items) {
    var res = [];
    items.forEach(function(item) {
      var hasMatch = res.filter(function(r) {
        return r.type.name == item.type.name && r.type.moduleUrl == item.type.moduleUrl && r.type.runtime == item.type.runtime;
      }).length > 0;
      if (!hasMatch) {
        res.push(item);
      }
    });
    return res;
  }
  var DirectiveCollector = (function() {
    function DirectiveCollector() {
      this.directives = [];
      this.components = [];
    }
    DirectiveCollector.findUsedDirectives = function(parsedTemplate) {
      var collector = new DirectiveCollector();
      template_ast_1.templateVisitAll(collector, parsedTemplate);
      return collector;
    };
    DirectiveCollector.prototype.visitBoundText = function(ast, context) {
      return null;
    };
    DirectiveCollector.prototype.visitText = function(ast, context) {
      return null;
    };
    DirectiveCollector.prototype.visitNgContent = function(ast, context) {
      return null;
    };
    DirectiveCollector.prototype.visitElement = function(ast, context) {
      template_ast_1.templateVisitAll(this, ast.directives);
      template_ast_1.templateVisitAll(this, ast.children);
      return null;
    };
    DirectiveCollector.prototype.visitEmbeddedTemplate = function(ast, context) {
      template_ast_1.templateVisitAll(this, ast.directives);
      template_ast_1.templateVisitAll(this, ast.children);
      return null;
    };
    DirectiveCollector.prototype.visitVariable = function(ast, ctx) {
      return null;
    };
    DirectiveCollector.prototype.visitAttr = function(ast, attrNameAndValues) {
      return null;
    };
    DirectiveCollector.prototype.visitDirective = function(ast, ctx) {
      if (ast.directive.isComponent) {
        this.components.push(ast.directive);
      }
      this.directives.push(ast.directive);
      return null;
    };
    DirectiveCollector.prototype.visitEvent = function(ast, eventTargetAndNames) {
      return null;
    };
    DirectiveCollector.prototype.visitDirectiveProperty = function(ast, context) {
      return null;
    };
    DirectiveCollector.prototype.visitElementProperty = function(ast, context) {
      return null;
    };
    return DirectiveCollector;
  })();
  function filterPipes(template, allPipes) {
    var visitor = new PipeVisitor();
    template_ast_1.templateVisitAll(visitor, template);
    return allPipes.filter(function(pipeMeta) {
      return collection_1.SetWrapper.has(visitor.collector.pipes, pipeMeta.name);
    });
  }
  var PipeVisitor = (function() {
    function PipeVisitor() {
      this.collector = new template_parser_1.PipeCollector();
    }
    PipeVisitor.prototype.visitBoundText = function(ast, context) {
      ast.value.visit(this.collector);
      return null;
    };
    PipeVisitor.prototype.visitText = function(ast, context) {
      return null;
    };
    PipeVisitor.prototype.visitNgContent = function(ast, context) {
      return null;
    };
    PipeVisitor.prototype.visitElement = function(ast, context) {
      template_ast_1.templateVisitAll(this, ast.inputs);
      template_ast_1.templateVisitAll(this, ast.outputs);
      template_ast_1.templateVisitAll(this, ast.directives);
      template_ast_1.templateVisitAll(this, ast.children);
      return null;
    };
    PipeVisitor.prototype.visitEmbeddedTemplate = function(ast, context) {
      template_ast_1.templateVisitAll(this, ast.outputs);
      template_ast_1.templateVisitAll(this, ast.directives);
      template_ast_1.templateVisitAll(this, ast.children);
      return null;
    };
    PipeVisitor.prototype.visitVariable = function(ast, ctx) {
      return null;
    };
    PipeVisitor.prototype.visitAttr = function(ast, attrNameAndValues) {
      return null;
    };
    PipeVisitor.prototype.visitDirective = function(ast, ctx) {
      template_ast_1.templateVisitAll(this, ast.inputs);
      template_ast_1.templateVisitAll(this, ast.hostEvents);
      template_ast_1.templateVisitAll(this, ast.hostProperties);
      return null;
    };
    PipeVisitor.prototype.visitEvent = function(ast, eventTargetAndNames) {
      ast.handler.visit(this.collector);
      return null;
    };
    PipeVisitor.prototype.visitDirectiveProperty = function(ast, context) {
      ast.value.visit(this.collector);
      return null;
    };
    PipeVisitor.prototype.visitElementProperty = function(ast, context) {
      ast.value.visit(this.collector);
      return null;
    };
    return PipeVisitor;
  })();
  global.define = __define;
  return module.exports;
});

System.register("rxjs/Subject", ["rxjs/Observable", "rxjs/Subscriber", "rxjs/Subscription", "rxjs/subject/SubjectSubscription", "rxjs/symbol/rxSubscriber"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = require("rxjs/Observable");
  var Subscriber_1 = require("rxjs/Subscriber");
  var Subscription_1 = require("rxjs/Subscription");
  var SubjectSubscription_1 = require("rxjs/subject/SubjectSubscription");
  var rxSubscriber_1 = require("rxjs/symbol/rxSubscriber");
  var subscriptionAdd = Subscription_1.Subscription.prototype.add;
  var subscriptionRemove = Subscription_1.Subscription.prototype.remove;
  var subscriptionUnsubscribe = Subscription_1.Subscription.prototype.unsubscribe;
  var subscriberNext = Subscriber_1.Subscriber.prototype.next;
  var subscriberError = Subscriber_1.Subscriber.prototype.error;
  var subscriberComplete = Subscriber_1.Subscriber.prototype.complete;
  var _subscriberNext = Subscriber_1.Subscriber.prototype._next;
  var _subscriberError = Subscriber_1.Subscriber.prototype._error;
  var _subscriberComplete = Subscriber_1.Subscriber.prototype._complete;
  var Subject = (function(_super) {
    __extends(Subject, _super);
    function Subject() {
      _super.apply(this, arguments);
      this.observers = [];
      this.isUnsubscribed = false;
      this.dispatching = false;
      this.errorSignal = false;
      this.completeSignal = false;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function() {
      return this;
    };
    Subject.create = function(source, destination) {
      return new BidirectionalSubject(source, destination);
    };
    Subject.prototype.lift = function(operator) {
      var subject = new BidirectionalSubject(this, this.destination || this);
      subject.operator = operator;
      return subject;
    };
    Subject.prototype._subscribe = function(subscriber) {
      if (subscriber.isUnsubscribed) {
        return ;
      } else if (this.errorSignal) {
        subscriber.error(this.errorInstance);
        return ;
      } else if (this.completeSignal) {
        subscriber.complete();
        return ;
      } else if (this.isUnsubscribed) {
        throw new Error('Cannot subscribe to a disposed Subject.');
      }
      this.observers.push(subscriber);
      return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
    };
    Subject.prototype.add = function(subscription) {
      subscriptionAdd.call(this, subscription);
    };
    Subject.prototype.remove = function(subscription) {
      subscriptionRemove.call(this, subscription);
    };
    Subject.prototype.unsubscribe = function() {
      this.observers = void 0;
      subscriptionUnsubscribe.call(this);
    };
    Subject.prototype.next = function(value) {
      if (this.isUnsubscribed) {
        return ;
      }
      this.dispatching = true;
      this._next(value);
      this.dispatching = false;
      if (this.errorSignal) {
        this.error(this.errorInstance);
      } else if (this.completeSignal) {
        this.complete();
      }
    };
    Subject.prototype.error = function(err) {
      if (this.isUnsubscribed || this.completeSignal) {
        return ;
      }
      this.errorSignal = true;
      this.errorInstance = err;
      if (this.dispatching) {
        return ;
      }
      this._error(err);
      this.unsubscribe();
    };
    Subject.prototype.complete = function() {
      if (this.isUnsubscribed || this.errorSignal) {
        return ;
      }
      this.completeSignal = true;
      if (this.dispatching) {
        return ;
      }
      this._complete();
      this.unsubscribe();
    };
    Subject.prototype._next = function(value) {
      var index = -1;
      var observers = this.observers.slice(0);
      var len = observers.length;
      while (++index < len) {
        observers[index].next(value);
      }
    };
    Subject.prototype._error = function(err) {
      var index = -1;
      var observers = this.observers;
      var len = observers.length;
      this.observers = void 0;
      this.isUnsubscribed = true;
      while (++index < len) {
        observers[index].error(err);
      }
      this.isUnsubscribed = false;
    };
    Subject.prototype._complete = function() {
      var index = -1;
      var observers = this.observers;
      var len = observers.length;
      this.observers = void 0;
      this.isUnsubscribed = true;
      while (++index < len) {
        observers[index].complete();
      }
      this.isUnsubscribed = false;
    };
    return Subject;
  })(Observable_1.Observable);
  exports.Subject = Subject;
  var BidirectionalSubject = (function(_super) {
    __extends(BidirectionalSubject, _super);
    function BidirectionalSubject(source, destination) {
      _super.call(this);
      this.source = source;
      this.destination = destination;
    }
    BidirectionalSubject.prototype._subscribe = function(subscriber) {
      var operator = this.operator;
      return this.source._subscribe.call(this.source, operator ? operator.call(subscriber) : subscriber);
    };
    BidirectionalSubject.prototype.next = function(value) {
      subscriberNext.call(this, value);
    };
    BidirectionalSubject.prototype.error = function(err) {
      subscriberError.call(this, err);
    };
    BidirectionalSubject.prototype.complete = function() {
      subscriberComplete.call(this);
    };
    BidirectionalSubject.prototype._next = function(value) {
      _subscriberNext.call(this, value);
    };
    BidirectionalSubject.prototype._error = function(err) {
      _subscriberError.call(this, err);
    };
    BidirectionalSubject.prototype._complete = function() {
      _subscriberComplete.call(this);
    };
    return BidirectionalSubject;
  })(Subject);
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/view", ["angular2/src/facade/collection", "angular2/src/core/change_detection/change_detection", "angular2/src/core/change_detection/interfaces", "angular2/src/core/linker/element", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/core/linker/view_ref", "angular2/src/core/pipes/pipes", "angular2/src/core/render/util", "angular2/src/core/change_detection/interfaces", "angular2/src/core/pipes/pipes", "angular2/src/core/linker/view_type"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var collection_1 = require("angular2/src/facade/collection");
  var change_detection_1 = require("angular2/src/core/change_detection/change_detection");
  var interfaces_1 = require("angular2/src/core/change_detection/interfaces");
  var element_1 = require("angular2/src/core/linker/element");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var view_ref_1 = require("angular2/src/core/linker/view_ref");
  var pipes_1 = require("angular2/src/core/pipes/pipes");
  var util_1 = require("angular2/src/core/render/util");
  var interfaces_2 = require("angular2/src/core/change_detection/interfaces");
  exports.DebugContext = interfaces_2.DebugContext;
  var pipes_2 = require("angular2/src/core/pipes/pipes");
  var view_type_1 = require("angular2/src/core/linker/view_type");
  var REFLECT_PREFIX = 'ng-reflect-';
  var EMPTY_CONTEXT = lang_1.CONST_EXPR(new Object());
  var AppView = (function() {
    function AppView(proto, renderer, viewManager, projectableNodes, containerAppElement, imperativelyCreatedProviders, rootInjector, changeDetector) {
      this.proto = proto;
      this.renderer = renderer;
      this.viewManager = viewManager;
      this.projectableNodes = projectableNodes;
      this.containerAppElement = containerAppElement;
      this.changeDetector = changeDetector;
      this.context = null;
      this.destroyed = false;
      this.ref = new view_ref_1.ViewRef_(this);
      var injectorWithHostBoundary = element_1.AppElement.getViewParentInjector(this.proto.type, containerAppElement, imperativelyCreatedProviders, rootInjector);
      this.parentInjector = injectorWithHostBoundary.injector;
      this.hostInjectorBoundary = injectorWithHostBoundary.hostInjectorBoundary;
      var pipes;
      var context;
      switch (proto.type) {
        case view_type_1.ViewType.COMPONENT:
          pipes = new pipes_2.Pipes(proto.protoPipes, containerAppElement.getInjector());
          context = containerAppElement.getComponent();
          break;
        case view_type_1.ViewType.EMBEDDED:
          pipes = containerAppElement.parentView.pipes;
          context = containerAppElement.parentView.context;
          break;
        case view_type_1.ViewType.HOST:
          pipes = null;
          context = EMPTY_CONTEXT;
          break;
      }
      this.pipes = pipes;
      this.context = context;
    }
    AppView.prototype.init = function(rootNodesOrAppElements, allNodes, disposables, appElements) {
      this.rootNodesOrAppElements = rootNodesOrAppElements;
      this.allNodes = allNodes;
      this.disposables = disposables;
      this.appElements = appElements;
      var localsMap = new collection_1.Map();
      collection_1.StringMapWrapper.forEach(this.proto.templateVariableBindings, function(templateName, _) {
        localsMap.set(templateName, null);
      });
      for (var i = 0; i < appElements.length; i++) {
        var appEl = appElements[i];
        collection_1.StringMapWrapper.forEach(appEl.proto.directiveVariableBindings, function(directiveIndex, name) {
          if (lang_1.isBlank(directiveIndex)) {
            localsMap.set(name, appEl.nativeElement);
          } else {
            localsMap.set(name, appEl.getDirectiveAtIndex(directiveIndex));
          }
        });
      }
      var parentLocals = null;
      if (this.proto.type !== view_type_1.ViewType.COMPONENT) {
        parentLocals = lang_1.isPresent(this.containerAppElement) ? this.containerAppElement.parentView.locals : null;
      }
      if (this.proto.type === view_type_1.ViewType.COMPONENT) {
        this.containerAppElement.attachComponentView(this);
        this.containerAppElement.parentView.changeDetector.addViewChild(this.changeDetector);
      }
      this.locals = new change_detection_1.Locals(parentLocals, localsMap);
      this.changeDetector.hydrate(this.context, this.locals, this, this.pipes);
      this.viewManager.onViewCreated(this);
    };
    AppView.prototype.destroy = function() {
      if (this.destroyed) {
        throw new exceptions_1.BaseException('This view has already been destroyed!');
      }
      this.changeDetector.destroyRecursive();
    };
    AppView.prototype.notifyOnDestroy = function() {
      this.destroyed = true;
      var hostElement = this.proto.type === view_type_1.ViewType.COMPONENT ? this.containerAppElement.nativeElement : null;
      this.renderer.destroyView(hostElement, this.allNodes);
      for (var i = 0; i < this.disposables.length; i++) {
        this.disposables[i]();
      }
      this.viewManager.onViewDestroyed(this);
    };
    Object.defineProperty(AppView.prototype, "changeDetectorRef", {
      get: function() {
        return this.changeDetector.ref;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AppView.prototype, "flatRootNodes", {
      get: function() {
        return flattenNestedViewRenderNodes(this.rootNodesOrAppElements);
      },
      enumerable: true,
      configurable: true
    });
    AppView.prototype.hasLocal = function(contextName) {
      return collection_1.StringMapWrapper.contains(this.proto.templateVariableBindings, contextName);
    };
    AppView.prototype.setLocal = function(contextName, value) {
      if (!this.hasLocal(contextName)) {
        return ;
      }
      var templateName = this.proto.templateVariableBindings[contextName];
      this.locals.set(templateName, value);
    };
    AppView.prototype.notifyOnBinding = function(b, currentValue) {
      if (b.isTextNode()) {
        this.renderer.setText(this.allNodes[b.elementIndex], currentValue);
      } else {
        var nativeElement = this.appElements[b.elementIndex].nativeElement;
        if (b.isElementProperty()) {
          this.renderer.setElementProperty(nativeElement, b.name, currentValue);
        } else if (b.isElementAttribute()) {
          this.renderer.setElementAttribute(nativeElement, b.name, lang_1.isPresent(currentValue) ? "" + currentValue : null);
        } else if (b.isElementClass()) {
          this.renderer.setElementClass(nativeElement, b.name, currentValue);
        } else if (b.isElementStyle()) {
          var unit = lang_1.isPresent(b.unit) ? b.unit : '';
          this.renderer.setElementStyle(nativeElement, b.name, lang_1.isPresent(currentValue) ? "" + currentValue + unit : null);
        } else {
          throw new exceptions_1.BaseException('Unsupported directive record');
        }
      }
    };
    AppView.prototype.logBindingUpdate = function(b, value) {
      if (b.isDirective() || b.isElementProperty()) {
        var nativeElement = this.appElements[b.elementIndex].nativeElement;
        this.renderer.setBindingDebugInfo(nativeElement, "" + REFLECT_PREFIX + util_1.camelCaseToDashCase(b.name), "" + value);
      }
    };
    AppView.prototype.notifyAfterContentChecked = function() {
      var count = this.appElements.length;
      for (var i = count - 1; i >= 0; i--) {
        this.appElements[i].ngAfterContentChecked();
      }
    };
    AppView.prototype.notifyAfterViewChecked = function() {
      var count = this.appElements.length;
      for (var i = count - 1; i >= 0; i--) {
        this.appElements[i].ngAfterViewChecked();
      }
    };
    AppView.prototype.getDebugContext = function(appElement, elementIndex, directiveIndex) {
      try {
        if (lang_1.isBlank(appElement) && elementIndex < this.appElements.length) {
          appElement = this.appElements[elementIndex];
        }
        var container = this.containerAppElement;
        var element = lang_1.isPresent(appElement) ? appElement.nativeElement : null;
        var componentElement = lang_1.isPresent(container) ? container.nativeElement : null;
        var directive = lang_1.isPresent(directiveIndex) ? appElement.getDirectiveAtIndex(directiveIndex) : null;
        var injector = lang_1.isPresent(appElement) ? appElement.getInjector() : null;
        return new interfaces_1.DebugContext(element, componentElement, directive, this.context, _localsToStringMap(this.locals), injector);
      } catch (e) {
        return null;
      }
    };
    AppView.prototype.getDirectiveFor = function(directive) {
      return this.appElements[directive.elementIndex].getDirectiveAtIndex(directive.directiveIndex);
    };
    AppView.prototype.getDetectorFor = function(directive) {
      var componentView = this.appElements[directive.elementIndex].componentView;
      return lang_1.isPresent(componentView) ? componentView.changeDetector : null;
    };
    AppView.prototype.triggerEventHandlers = function(eventName, eventObj, boundElementIndex) {
      return this.changeDetector.handleEvent(eventName, boundElementIndex, eventObj);
    };
    return AppView;
  })();
  exports.AppView = AppView;
  function _localsToStringMap(locals) {
    var res = {};
    var c = locals;
    while (lang_1.isPresent(c)) {
      res = collection_1.StringMapWrapper.merge(res, collection_1.MapWrapper.toStringMap(c.current));
      c = c.parent;
    }
    return res;
  }
  var AppProtoView = (function() {
    function AppProtoView(type, protoPipes, templateVariableBindings) {
      this.type = type;
      this.protoPipes = protoPipes;
      this.templateVariableBindings = templateVariableBindings;
    }
    AppProtoView.create = function(metadataCache, type, pipes, templateVariableBindings) {
      var protoPipes = null;
      if (lang_1.isPresent(pipes) && pipes.length > 0) {
        var boundPipes = collection_1.ListWrapper.createFixedSize(pipes.length);
        for (var i = 0; i < pipes.length; i++) {
          boundPipes[i] = metadataCache.getResolvedPipeMetadata(pipes[i]);
        }
        protoPipes = pipes_1.ProtoPipes.fromProviders(boundPipes);
      }
      return new AppProtoView(type, protoPipes, templateVariableBindings);
    };
    return AppProtoView;
  })();
  exports.AppProtoView = AppProtoView;
  var HostViewFactory = (function() {
    function HostViewFactory(selector, viewFactory) {
      this.selector = selector;
      this.viewFactory = viewFactory;
    }
    HostViewFactory = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String, Function])], HostViewFactory);
    return HostViewFactory;
  })();
  exports.HostViewFactory = HostViewFactory;
  function flattenNestedViewRenderNodes(nodes) {
    return _flattenNestedViewRenderNodes(nodes, []);
  }
  exports.flattenNestedViewRenderNodes = flattenNestedViewRenderNodes;
  function _flattenNestedViewRenderNodes(nodes, renderNodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node instanceof element_1.AppElement) {
        var appEl = node;
        renderNodes.push(appEl.nativeElement);
        if (lang_1.isPresent(appEl.nestedViews)) {
          for (var k = 0; k < appEl.nestedViews.length; k++) {
            _flattenNestedViewRenderNodes(appEl.nestedViews[k].rootNodesOrAppElements, renderNodes);
          }
        }
      } else {
        renderNodes.push(node);
      }
    }
    return renderNodes;
  }
  function checkSlotCount(componentName, expectedSlotCount, projectableNodes) {
    var givenSlotCount = lang_1.isPresent(projectableNodes) ? projectableNodes.length : 0;
    if (givenSlotCount < expectedSlotCount) {
      throw new exceptions_1.BaseException(("The component " + componentName + " has " + expectedSlotCount + " <ng-content> elements,") + (" but only " + givenSlotCount + " slots were provided."));
    }
  }
  exports.checkSlotCount = checkSlotCount;
  global.define = __define;
  return module.exports;
});

System.register("angular2/platform/common_dom", ["angular2/src/platform/dom/dom_adapter", "angular2/src/platform/dom/dom_renderer", "angular2/src/platform/dom/dom_tokens", "angular2/src/platform/dom/shared_styles_host", "angular2/src/platform/dom/events/dom_events", "angular2/src/platform/dom/events/event_manager", "angular2/src/platform/dom/debug/by", "angular2/src/platform/dom/debug/debug_element_view_listener"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  exports.DOM = dom_adapter_1.DOM;
  exports.setRootDomAdapter = dom_adapter_1.setRootDomAdapter;
  exports.DomAdapter = dom_adapter_1.DomAdapter;
  var dom_renderer_1 = require("angular2/src/platform/dom/dom_renderer");
  exports.DomRenderer = dom_renderer_1.DomRenderer;
  var dom_tokens_1 = require("angular2/src/platform/dom/dom_tokens");
  exports.DOCUMENT = dom_tokens_1.DOCUMENT;
  var shared_styles_host_1 = require("angular2/src/platform/dom/shared_styles_host");
  exports.SharedStylesHost = shared_styles_host_1.SharedStylesHost;
  exports.DomSharedStylesHost = shared_styles_host_1.DomSharedStylesHost;
  var dom_events_1 = require("angular2/src/platform/dom/events/dom_events");
  exports.DomEventsPlugin = dom_events_1.DomEventsPlugin;
  var event_manager_1 = require("angular2/src/platform/dom/events/event_manager");
  exports.EVENT_MANAGER_PLUGINS = event_manager_1.EVENT_MANAGER_PLUGINS;
  exports.EventManager = event_manager_1.EventManager;
  exports.EventManagerPlugin = event_manager_1.EventManagerPlugin;
  __export(require("angular2/src/platform/dom/debug/by"));
  __export(require("angular2/src/platform/dom/debug/debug_element_view_listener"));
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/runtime_compiler", ["angular2/src/core/linker/compiler", "angular2/src/core/linker/view_ref", "angular2/src/compiler/template_compiler", "angular2/src/core/di"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var compiler_1 = require("angular2/src/core/linker/compiler");
  var view_ref_1 = require("angular2/src/core/linker/view_ref");
  var template_compiler_1 = require("angular2/src/compiler/template_compiler");
  var di_1 = require("angular2/src/core/di");
  var RuntimeCompiler = (function(_super) {
    __extends(RuntimeCompiler, _super);
    function RuntimeCompiler() {
      _super.apply(this, arguments);
    }
    return RuntimeCompiler;
  })(compiler_1.Compiler);
  exports.RuntimeCompiler = RuntimeCompiler;
  var RuntimeCompiler_ = (function(_super) {
    __extends(RuntimeCompiler_, _super);
    function RuntimeCompiler_(_templateCompiler) {
      _super.call(this);
      this._templateCompiler = _templateCompiler;
    }
    RuntimeCompiler_.prototype.compileInHost = function(componentType) {
      return this._templateCompiler.compileHostComponentRuntime(componentType).then(function(hostViewFactory) {
        return new view_ref_1.HostViewFactoryRef_(hostViewFactory);
      });
    };
    RuntimeCompiler_.prototype.clearCache = function() {
      _super.prototype.clearCache.call(this);
      this._templateCompiler.clearCache();
    };
    RuntimeCompiler_ = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [template_compiler_1.TemplateCompiler])], RuntimeCompiler_);
    return RuntimeCompiler_;
  })(compiler_1.Compiler_);
  exports.RuntimeCompiler_ = RuntimeCompiler_;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/facade/async", ["angular2/src/facade/lang", "angular2/src/facade/promise", "rxjs/Subject", "rxjs/observable/fromPromise", "rxjs/operator/toPromise", "rxjs/Observable", "rxjs/Subject"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var lang_1 = require("angular2/src/facade/lang");
  var promise_1 = require("angular2/src/facade/promise");
  exports.PromiseWrapper = promise_1.PromiseWrapper;
  exports.Promise = promise_1.Promise;
  var Subject_1 = require("rxjs/Subject");
  var fromPromise_1 = require("rxjs/observable/fromPromise");
  var toPromise_1 = require("rxjs/operator/toPromise");
  var Observable_1 = require("rxjs/Observable");
  exports.Observable = Observable_1.Observable;
  var Subject_2 = require("rxjs/Subject");
  exports.Subject = Subject_2.Subject;
  var TimerWrapper = (function() {
    function TimerWrapper() {}
    TimerWrapper.setTimeout = function(fn, millis) {
      return lang_1.global.setTimeout(fn, millis);
    };
    TimerWrapper.clearTimeout = function(id) {
      lang_1.global.clearTimeout(id);
    };
    TimerWrapper.setInterval = function(fn, millis) {
      return lang_1.global.setInterval(fn, millis);
    };
    TimerWrapper.clearInterval = function(id) {
      lang_1.global.clearInterval(id);
    };
    return TimerWrapper;
  })();
  exports.TimerWrapper = TimerWrapper;
  var ObservableWrapper = (function() {
    function ObservableWrapper() {}
    ObservableWrapper.subscribe = function(emitter, onNext, onError, onComplete) {
      if (onComplete === void 0) {
        onComplete = function() {};
      }
      onError = (typeof onError === "function") && onError || lang_1.noop;
      onComplete = (typeof onComplete === "function") && onComplete || lang_1.noop;
      return emitter.subscribe({
        next: onNext,
        error: onError,
        complete: onComplete
      });
    };
    ObservableWrapper.isObservable = function(obs) {
      return !!obs.subscribe;
    };
    ObservableWrapper.hasSubscribers = function(obs) {
      return obs.observers.length > 0;
    };
    ObservableWrapper.dispose = function(subscription) {
      subscription.unsubscribe();
    };
    ObservableWrapper.callNext = function(emitter, value) {
      emitter.next(value);
    };
    ObservableWrapper.callEmit = function(emitter, value) {
      emitter.emit(value);
    };
    ObservableWrapper.callError = function(emitter, error) {
      emitter.error(error);
    };
    ObservableWrapper.callComplete = function(emitter) {
      emitter.complete();
    };
    ObservableWrapper.fromPromise = function(promise) {
      return fromPromise_1.PromiseObservable.create(promise);
    };
    ObservableWrapper.toPromise = function(obj) {
      return toPromise_1.toPromise.call(obj);
    };
    return ObservableWrapper;
  })();
  exports.ObservableWrapper = ObservableWrapper;
  var EventEmitter = (function(_super) {
    __extends(EventEmitter, _super);
    function EventEmitter(isAsync) {
      if (isAsync === void 0) {
        isAsync = true;
      }
      _super.call(this);
      this._isAsync = isAsync;
    }
    EventEmitter.prototype.emit = function(value) {
      _super.prototype.next.call(this, value);
    };
    EventEmitter.prototype.next = function(value) {
      _super.prototype.next.call(this, value);
    };
    EventEmitter.prototype.subscribe = function(generatorOrNext, error, complete) {
      var schedulerFn;
      var errorFn = function(err) {
        return null;
      };
      var completeFn = function() {
        return null;
      };
      if (generatorOrNext && typeof generatorOrNext === 'object') {
        schedulerFn = this._isAsync ? function(value) {
          setTimeout(function() {
            return generatorOrNext.next(value);
          });
        } : function(value) {
          generatorOrNext.next(value);
        };
        if (generatorOrNext.error) {
          errorFn = this._isAsync ? function(err) {
            setTimeout(function() {
              return generatorOrNext.error(err);
            });
          } : function(err) {
            generatorOrNext.error(err);
          };
        }
        if (generatorOrNext.complete) {
          completeFn = this._isAsync ? function() {
            setTimeout(function() {
              return generatorOrNext.complete();
            });
          } : function() {
            generatorOrNext.complete();
          };
        }
      } else {
        schedulerFn = this._isAsync ? function(value) {
          setTimeout(function() {
            return generatorOrNext(value);
          });
        } : function(value) {
          generatorOrNext(value);
        };
        if (error) {
          errorFn = this._isAsync ? function(err) {
            setTimeout(function() {
              return error(err);
            });
          } : function(err) {
            error(err);
          };
        }
        if (complete) {
          completeFn = this._isAsync ? function() {
            setTimeout(function() {
              return complete();
            });
          } : function() {
            complete();
          };
        }
      }
      return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
    };
    return EventEmitter;
  })(Subject_1.Subject);
  exports.EventEmitter = EventEmitter;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/compiler", ["angular2/src/core/di", "angular2/src/facade/lang", "angular2/src/facade/exceptions", "angular2/src/facade/async", "angular2/src/core/reflection/reflection", "angular2/src/core/linker/view", "angular2/src/core/linker/view_ref"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var lang_1 = require("angular2/src/facade/lang");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var async_1 = require("angular2/src/facade/async");
  var reflection_1 = require("angular2/src/core/reflection/reflection");
  var view_1 = require("angular2/src/core/linker/view");
  var view_ref_1 = require("angular2/src/core/linker/view_ref");
  var Compiler = (function() {
    function Compiler() {}
    return Compiler;
  })();
  exports.Compiler = Compiler;
  function isHostViewFactory(type) {
    return type instanceof view_1.HostViewFactory;
  }
  var Compiler_ = (function(_super) {
    __extends(Compiler_, _super);
    function Compiler_() {
      _super.apply(this, arguments);
    }
    Compiler_.prototype.compileInHost = function(componentType) {
      var metadatas = reflection_1.reflector.annotations(componentType);
      var hostViewFactory = metadatas.find(isHostViewFactory);
      if (lang_1.isBlank(hostViewFactory)) {
        throw new exceptions_1.BaseException("No precompiled component " + lang_1.stringify(componentType) + " found");
      }
      return async_1.PromiseWrapper.resolve(new view_ref_1.HostViewFactoryRef_(hostViewFactory));
    };
    Compiler_.prototype.clearCache = function() {};
    Compiler_ = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], Compiler_);
    return Compiler_;
  })(Compiler);
  exports.Compiler_ = Compiler_;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/compiler/compiler", ["angular2/src/compiler/runtime_compiler", "angular2/src/compiler/template_compiler", "angular2/src/compiler/directive_metadata", "angular2/src/compiler/source_module", "angular2/src/core/platform_directives_and_pipes", "angular2/src/compiler/template_ast", "angular2/src/compiler/template_parser", "angular2/src/facade/lang", "angular2/src/core/di", "angular2/src/compiler/template_parser", "angular2/src/compiler/html_parser", "angular2/src/compiler/template_normalizer", "angular2/src/compiler/runtime_metadata", "angular2/src/compiler/change_detector_compiler", "angular2/src/compiler/style_compiler", "angular2/src/compiler/view_compiler", "angular2/src/compiler/proto_view_compiler", "angular2/src/compiler/template_compiler", "angular2/src/core/change_detection/change_detection", "angular2/src/core/linker/compiler", "angular2/src/compiler/runtime_compiler", "angular2/src/compiler/schema/element_schema_registry", "angular2/src/compiler/schema/dom_element_schema_registry", "angular2/src/compiler/url_resolver", "angular2/src/core/change_detection/change_detection"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var runtime_compiler_1 = require("angular2/src/compiler/runtime_compiler");
  var template_compiler_1 = require("angular2/src/compiler/template_compiler");
  exports.TemplateCompiler = template_compiler_1.TemplateCompiler;
  var directive_metadata_1 = require("angular2/src/compiler/directive_metadata");
  exports.CompileDirectiveMetadata = directive_metadata_1.CompileDirectiveMetadata;
  exports.CompileTypeMetadata = directive_metadata_1.CompileTypeMetadata;
  exports.CompileTemplateMetadata = directive_metadata_1.CompileTemplateMetadata;
  var source_module_1 = require("angular2/src/compiler/source_module");
  exports.SourceModule = source_module_1.SourceModule;
  exports.SourceWithImports = source_module_1.SourceWithImports;
  var platform_directives_and_pipes_1 = require("angular2/src/core/platform_directives_and_pipes");
  exports.PLATFORM_DIRECTIVES = platform_directives_and_pipes_1.PLATFORM_DIRECTIVES;
  exports.PLATFORM_PIPES = platform_directives_and_pipes_1.PLATFORM_PIPES;
  __export(require("angular2/src/compiler/template_ast"));
  var template_parser_1 = require("angular2/src/compiler/template_parser");
  exports.TEMPLATE_TRANSFORMS = template_parser_1.TEMPLATE_TRANSFORMS;
  var lang_1 = require("angular2/src/facade/lang");
  var di_1 = require("angular2/src/core/di");
  var template_parser_2 = require("angular2/src/compiler/template_parser");
  var html_parser_1 = require("angular2/src/compiler/html_parser");
  var template_normalizer_1 = require("angular2/src/compiler/template_normalizer");
  var runtime_metadata_1 = require("angular2/src/compiler/runtime_metadata");
  var change_detector_compiler_1 = require("angular2/src/compiler/change_detector_compiler");
  var style_compiler_1 = require("angular2/src/compiler/style_compiler");
  var view_compiler_1 = require("angular2/src/compiler/view_compiler");
  var proto_view_compiler_1 = require("angular2/src/compiler/proto_view_compiler");
  var template_compiler_2 = require("angular2/src/compiler/template_compiler");
  var change_detection_1 = require("angular2/src/core/change_detection/change_detection");
  var compiler_1 = require("angular2/src/core/linker/compiler");
  var runtime_compiler_2 = require("angular2/src/compiler/runtime_compiler");
  var element_schema_registry_1 = require("angular2/src/compiler/schema/element_schema_registry");
  var dom_element_schema_registry_1 = require("angular2/src/compiler/schema/dom_element_schema_registry");
  var url_resolver_1 = require("angular2/src/compiler/url_resolver");
  var change_detection_2 = require("angular2/src/core/change_detection/change_detection");
  function _createChangeDetectorGenConfig() {
    return new change_detection_1.ChangeDetectorGenConfig(lang_1.assertionsEnabled(), false, true);
  }
  exports.COMPILER_PROVIDERS = lang_1.CONST_EXPR([change_detection_2.Lexer, change_detection_2.Parser, html_parser_1.HtmlParser, template_parser_2.TemplateParser, template_normalizer_1.TemplateNormalizer, runtime_metadata_1.RuntimeMetadataResolver, url_resolver_1.DEFAULT_PACKAGE_URL_PROVIDER, style_compiler_1.StyleCompiler, proto_view_compiler_1.ProtoViewCompiler, view_compiler_1.ViewCompiler, change_detector_compiler_1.ChangeDetectionCompiler, new di_1.Provider(change_detection_1.ChangeDetectorGenConfig, {
    useFactory: _createChangeDetectorGenConfig,
    deps: []
  }), template_compiler_2.TemplateCompiler, new di_1.Provider(runtime_compiler_2.RuntimeCompiler, {useClass: runtime_compiler_1.RuntimeCompiler_}), new di_1.Provider(compiler_1.Compiler, {useExisting: runtime_compiler_2.RuntimeCompiler}), dom_element_schema_registry_1.DomElementSchemaRegistry, new di_1.Provider(element_schema_registry_1.ElementSchemaRegistry, {useExisting: dom_element_schema_registry_1.DomElementSchemaRegistry}), url_resolver_1.UrlResolver]);
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/facade/facade", ["angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/facade/exceptions", "angular2/src/facade/exception_handler"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  exports.Type = lang_1.Type;
  var async_1 = require("angular2/src/facade/async");
  exports.EventEmitter = async_1.EventEmitter;
  var exceptions_1 = require("angular2/src/facade/exceptions");
  exports.WrappedException = exceptions_1.WrappedException;
  var exception_handler_1 = require("angular2/src/facade/exception_handler");
  exports.ExceptionHandler = exception_handler_1.ExceptionHandler;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/linker/dynamic_component_loader", ["angular2/src/core/di", "angular2/src/core/linker/compiler", "angular2/src/facade/lang", "angular2/src/core/linker/view_manager"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = require("angular2/src/core/di");
  var compiler_1 = require("angular2/src/core/linker/compiler");
  var lang_1 = require("angular2/src/facade/lang");
  var view_manager_1 = require("angular2/src/core/linker/view_manager");
  var ComponentRef = (function() {
    function ComponentRef() {}
    Object.defineProperty(ComponentRef.prototype, "hostView", {
      get: function() {
        return this.location.internalElement.parentView.ref;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "hostComponent", {
      get: function() {
        return this.instance;
      },
      enumerable: true,
      configurable: true
    });
    return ComponentRef;
  })();
  exports.ComponentRef = ComponentRef;
  var ComponentRef_ = (function(_super) {
    __extends(ComponentRef_, _super);
    function ComponentRef_(location, instance, componentType, injector, _dispose) {
      _super.call(this);
      this._dispose = _dispose;
      this.location = location;
      this.instance = instance;
      this.componentType = componentType;
      this.injector = injector;
    }
    Object.defineProperty(ComponentRef_.prototype, "hostComponentType", {
      get: function() {
        return this.componentType;
      },
      enumerable: true,
      configurable: true
    });
    ComponentRef_.prototype.dispose = function() {
      this._dispose();
    };
    return ComponentRef_;
  })(ComponentRef);
  exports.ComponentRef_ = ComponentRef_;
  var DynamicComponentLoader = (function() {
    function DynamicComponentLoader() {}
    return DynamicComponentLoader;
  })();
  exports.DynamicComponentLoader = DynamicComponentLoader;
  var DynamicComponentLoader_ = (function(_super) {
    __extends(DynamicComponentLoader_, _super);
    function DynamicComponentLoader_(_compiler, _viewManager) {
      _super.call(this);
      this._compiler = _compiler;
      this._viewManager = _viewManager;
    }
    DynamicComponentLoader_.prototype.loadAsRoot = function(type, overrideSelector, injector, onDispose, projectableNodes) {
      var _this = this;
      return this._compiler.compileInHost(type).then(function(hostProtoViewRef) {
        var hostViewRef = _this._viewManager.createRootHostView(hostProtoViewRef, overrideSelector, injector, projectableNodes);
        var newLocation = _this._viewManager.getHostElement(hostViewRef);
        var component = _this._viewManager.getComponent(newLocation);
        var dispose = function() {
          if (lang_1.isPresent(onDispose)) {
            onDispose();
          }
          _this._viewManager.destroyRootHostView(hostViewRef);
        };
        return new ComponentRef_(newLocation, component, type, injector, dispose);
      });
    };
    DynamicComponentLoader_.prototype.loadIntoLocation = function(type, hostLocation, anchorName, providers, projectableNodes) {
      if (providers === void 0) {
        providers = null;
      }
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      return this.loadNextToLocation(type, this._viewManager.getNamedElementInComponentView(hostLocation, anchorName), providers, projectableNodes);
    };
    DynamicComponentLoader_.prototype.loadNextToLocation = function(type, location, providers, projectableNodes) {
      var _this = this;
      if (providers === void 0) {
        providers = null;
      }
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      return this._compiler.compileInHost(type).then(function(hostProtoViewRef) {
        var viewContainer = _this._viewManager.getViewContainer(location);
        var hostViewRef = viewContainer.createHostView(hostProtoViewRef, viewContainer.length, providers, projectableNodes);
        var newLocation = _this._viewManager.getHostElement(hostViewRef);
        var component = _this._viewManager.getComponent(newLocation);
        var dispose = function() {
          var index = viewContainer.indexOf(hostViewRef);
          if (!hostViewRef.destroyed && index !== -1) {
            viewContainer.remove(index);
          }
        };
        return new ComponentRef_(newLocation, component, type, null, dispose);
      });
    };
    DynamicComponentLoader_ = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [compiler_1.Compiler, view_manager_1.AppViewManager])], DynamicComponentLoader_);
    return DynamicComponentLoader_;
  })(DynamicComponentLoader);
  exports.DynamicComponentLoader_ = DynamicComponentLoader_;
  global.define = __define;
  return module.exports;
});

System.register("angular2/compiler", ["angular2/src/compiler/url_resolver", "angular2/src/compiler/xhr", "angular2/src/compiler/compiler"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(require("angular2/src/compiler/url_resolver"));
  __export(require("angular2/src/compiler/xhr"));
  __export(require("angular2/src/compiler/compiler"));
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/core/application_ref", ["angular2/src/core/zone/ng_zone", "angular2/src/facade/lang", "angular2/src/core/di", "angular2/src/core/application_tokens", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/core/testability/testability", "angular2/src/core/linker/dynamic_component_loader", "angular2/src/facade/exceptions", "angular2/src/core/console", "angular2/src/core/profile/profile", "angular2/src/facade/lang"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ng_zone_1 = require("angular2/src/core/zone/ng_zone");
  var lang_1 = require("angular2/src/facade/lang");
  var di_1 = require("angular2/src/core/di");
  var application_tokens_1 = require("angular2/src/core/application_tokens");
  var async_1 = require("angular2/src/facade/async");
  var collection_1 = require("angular2/src/facade/collection");
  var testability_1 = require("angular2/src/core/testability/testability");
  var dynamic_component_loader_1 = require("angular2/src/core/linker/dynamic_component_loader");
  var exceptions_1 = require("angular2/src/facade/exceptions");
  var console_1 = require("angular2/src/core/console");
  var profile_1 = require("angular2/src/core/profile/profile");
  var lang_2 = require("angular2/src/facade/lang");
  function _componentProviders(appComponentType) {
    return [di_1.provide(application_tokens_1.APP_COMPONENT, {useValue: appComponentType}), di_1.provide(application_tokens_1.APP_COMPONENT_REF_PROMISE, {
      useFactory: function(dynamicComponentLoader, appRef, injector) {
        var ref;
        return dynamicComponentLoader.loadAsRoot(appComponentType, null, injector, function() {
          appRef._unloadComponent(ref);
        }).then(function(componentRef) {
          ref = componentRef;
          var testability = injector.getOptional(testability_1.Testability);
          if (lang_1.isPresent(testability)) {
            injector.get(testability_1.TestabilityRegistry).registerApplication(componentRef.location.nativeElement, testability);
          }
          return componentRef;
        });
      },
      deps: [dynamic_component_loader_1.DynamicComponentLoader, ApplicationRef, di_1.Injector]
    }), di_1.provide(appComponentType, {
      useFactory: function(p) {
        return p.then(function(ref) {
          return ref.instance;
        });
      },
      deps: [application_tokens_1.APP_COMPONENT_REF_PROMISE]
    })];
  }
  function createNgZone() {
    return new ng_zone_1.NgZone({enableLongStackTrace: lang_1.assertionsEnabled()});
  }
  exports.createNgZone = createNgZone;
  var _platform;
  var _platformProviders;
  function platform(providers) {
    lang_2.lockMode();
    if (lang_1.isPresent(_platform)) {
      if (collection_1.ListWrapper.equals(_platformProviders, providers)) {
        return _platform;
      } else {
        throw new exceptions_1.BaseException("platform cannot be initialized with different sets of providers.");
      }
    } else {
      return _createPlatform(providers);
    }
  }
  exports.platform = platform;
  function disposePlatform() {
    if (lang_1.isPresent(_platform)) {
      _platform.dispose();
      _platform = null;
    }
  }
  exports.disposePlatform = disposePlatform;
  function _createPlatform(providers) {
    _platformProviders = providers;
    var injector = di_1.Injector.resolveAndCreate(providers);
    _platform = new PlatformRef_(injector, function() {
      _platform = null;
      _platformProviders = null;
    });
    _runPlatformInitializers(injector);
    return _platform;
  }
  function _runPlatformInitializers(injector) {
    var inits = injector.getOptional(application_tokens_1.PLATFORM_INITIALIZER);
    if (lang_1.isPresent(inits))
      inits.forEach(function(init) {
        return init();
      });
  }
  var PlatformRef = (function() {
    function PlatformRef() {}
    Object.defineProperty(PlatformRef.prototype, "injector", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return PlatformRef;
  })();
  exports.PlatformRef = PlatformRef;
  var PlatformRef_ = (function(_super) {
    __extends(PlatformRef_, _super);
    function PlatformRef_(_injector, _dispose) {
      _super.call(this);
      this._injector = _injector;
      this._dispose = _dispose;
      this._applications = [];
      this._disposeListeners = [];
    }
    PlatformRef_.prototype.registerDisposeListener = function(dispose) {
      this._disposeListeners.push(dispose);
    };
    Object.defineProperty(PlatformRef_.prototype, "injector", {
      get: function() {
        return this._injector;
      },
      enumerable: true,
      configurable: true
    });
    PlatformRef_.prototype.application = function(providers) {
      var app = this._initApp(createNgZone(), providers);
      if (async_1.PromiseWrapper.isPromise(app)) {
        throw new exceptions_1.BaseException("Cannot use asyncronous app initializers with application. Use asyncApplication instead.");
      }
      return app;
    };
    PlatformRef_.prototype.asyncApplication = function(bindingFn, additionalProviders) {
      var _this = this;
      var zone = createNgZone();
      var completer = async_1.PromiseWrapper.completer();
      if (bindingFn === null) {
        completer.resolve(this._initApp(zone, additionalProviders));
      } else {
        zone.run(function() {
          async_1.PromiseWrapper.then(bindingFn(zone), function(providers) {
            if (lang_1.isPresent(additionalProviders)) {
              providers = collection_1.ListWrapper.concat(providers, additionalProviders);
            }
            var promise = _this._initApp(zone, providers);
            completer.resolve(promise);
          });
        });
      }
      return completer.promise;
    };
    PlatformRef_.prototype._initApp = function(zone, providers) {
      var _this = this;
      var injector;
      var app;
      zone.run(function() {
        providers = collection_1.ListWrapper.concat(providers, [di_1.provide(ng_zone_1.NgZone, {useValue: zone}), di_1.provide(ApplicationRef, {
          useFactory: function() {
            return app;
          },
          deps: []
        })]);
        var exceptionHandler;
        try {
          injector = _this.injector.resolveAndCreateChild(providers);
          exceptionHandler = injector.get(exceptions_1.ExceptionHandler);
          zone.overrideOnErrorHandler(function(e, s) {
            return exceptionHandler.call(e, s);
          });
        } catch (e) {
          if (lang_1.isPresent(exceptionHandler)) {
            exceptionHandler.call(e, e.stack);
          } else {
            lang_1.print(e.toString());
          }
        }
      });
      app = new ApplicationRef_(this, zone, injector);
      this._applications.push(app);
      var promise = _runAppInitializers(injector);
      if (promise !== null) {
        return async_1.PromiseWrapper.then(promise, function(_) {
          return app;
        });
      } else {
        return app;
      }
    };
    PlatformRef_.prototype.dispose = function() {
      collection_1.ListWrapper.clone(this._applications).forEach(function(app) {
        return app.dispose();
      });
      this._disposeListeners.forEach(function(dispose) {
        return dispose();
      });
      this._dispose();
    };
    PlatformRef_.prototype._applicationDisposed = function(app) {
      collection_1.ListWrapper.remove(this._applications, app);
    };
    return PlatformRef_;
  })(PlatformRef);
  exports.PlatformRef_ = PlatformRef_;
  function _runAppInitializers(injector) {
    var inits = injector.getOptional(application_tokens_1.APP_INITIALIZER);
    var promises = [];
    if (lang_1.isPresent(inits)) {
      inits.forEach(function(init) {
        var retVal = init();
        if (async_1.PromiseWrapper.isPromise(retVal)) {
          promises.push(retVal);
        }
      });
    }
    if (promises.length > 0) {
      return async_1.PromiseWrapper.all(promises);
    } else {
      return null;
    }
  }
  var ApplicationRef = (function() {
    function ApplicationRef() {}
    Object.defineProperty(ApplicationRef.prototype, "injector", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ApplicationRef.prototype, "zone", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return ApplicationRef;
  })();
  exports.ApplicationRef = ApplicationRef;
  var ApplicationRef_ = (function(_super) {
    __extends(ApplicationRef_, _super);
    function ApplicationRef_(_platform, _zone, _injector) {
      var _this = this;
      _super.call(this);
      this._platform = _platform;
      this._zone = _zone;
      this._injector = _injector;
      this._bootstrapListeners = [];
      this._disposeListeners = [];
      this._rootComponents = [];
      this._rootComponentTypes = [];
      this._changeDetectorRefs = [];
      this._runningTick = false;
      this._enforceNoNewChanges = false;
      if (lang_1.isPresent(this._zone)) {
        async_1.ObservableWrapper.subscribe(this._zone.onTurnDone, function(_) {
          _this._zone.run(function() {
            _this.tick();
          });
        });
      }
      this._enforceNoNewChanges = lang_1.assertionsEnabled();
    }
    ApplicationRef_.prototype.registerBootstrapListener = function(listener) {
      this._bootstrapListeners.push(listener);
    };
    ApplicationRef_.prototype.registerDisposeListener = function(dispose) {
      this._disposeListeners.push(dispose);
    };
    ApplicationRef_.prototype.registerChangeDetector = function(changeDetector) {
      this._changeDetectorRefs.push(changeDetector);
    };
    ApplicationRef_.prototype.unregisterChangeDetector = function(changeDetector) {
      collection_1.ListWrapper.remove(this._changeDetectorRefs, changeDetector);
    };
    ApplicationRef_.prototype.bootstrap = function(componentType, providers) {
      var _this = this;
      var completer = async_1.PromiseWrapper.completer();
      this._zone.run(function() {
        var componentProviders = _componentProviders(componentType);
        if (lang_1.isPresent(providers)) {
          componentProviders.push(providers);
        }
        var exceptionHandler = _this._injector.get(exceptions_1.ExceptionHandler);
        _this._rootComponentTypes.push(componentType);
        try {
          var injector = _this._injector.resolveAndCreateChild(componentProviders);
          var compRefToken = injector.get(application_tokens_1.APP_COMPONENT_REF_PROMISE);
          var tick = function(componentRef) {
            _this._loadComponent(componentRef);
            completer.resolve(componentRef);
          };
          var tickResult = async_1.PromiseWrapper.then(compRefToken, tick);
          if (lang_1.IS_DART) {
            async_1.PromiseWrapper.then(tickResult, function(_) {});
          }
          async_1.PromiseWrapper.then(tickResult, null, function(err, stackTrace) {
            return completer.reject(err, stackTrace);
          });
        } catch (e) {
          exceptionHandler.call(e, e.stack);
          completer.reject(e, e.stack);
        }
      });
      return completer.promise.then(function(_) {
        var c = _this._injector.get(console_1.Console);
        var modeDescription = lang_1.assertionsEnabled() ? "in the development mode. Call enableProdMode() to enable the production mode." : "in the production mode. Call enableDevMode() to enable the development mode.";
        c.log("Angular 2 is running " + modeDescription);
        return _;
      });
    };
    ApplicationRef_.prototype._loadComponent = function(ref) {
      var appChangeDetector = ref.location.internalElement.parentView.changeDetector;
      this._changeDetectorRefs.push(appChangeDetector.ref);
      this.tick();
      this._rootComponents.push(ref);
      this._bootstrapListeners.forEach(function(listener) {
        return listener(ref);
      });
    };
    ApplicationRef_.prototype._unloadComponent = function(ref) {
      if (!collection_1.ListWrapper.contains(this._rootComponents, ref)) {
        return ;
      }
      this.unregisterChangeDetector(ref.location.internalElement.parentView.changeDetector.ref);
      collection_1.ListWrapper.remove(this._rootComponents, ref);
    };
    Object.defineProperty(ApplicationRef_.prototype, "injector", {
      get: function() {
        return this._injector;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ApplicationRef_.prototype, "zone", {
      get: function() {
        return this._zone;
      },
      enumerable: true,
      configurable: true
    });
    ApplicationRef_.prototype.tick = function() {
      if (this._runningTick) {
        throw new exceptions_1.BaseException("ApplicationRef.tick is called recursively");
      }
      var s = ApplicationRef_._tickScope();
      try {
        this._runningTick = true;
        this._changeDetectorRefs.forEach(function(detector) {
          return detector.detectChanges();
        });
        if (this._enforceNoNewChanges) {
          this._changeDetectorRefs.forEach(function(detector) {
            return detector.checkNoChanges();
          });
        }
      } finally {
        this._runningTick = false;
        profile_1.wtfLeave(s);
      }
    };
    ApplicationRef_.prototype.dispose = function() {
      collection_1.ListWrapper.clone(this._rootComponents).forEach(function(ref) {
        return ref.dispose();
      });
      this._disposeListeners.forEach(function(dispose) {
        return dispose();
      });
      this._platform._applicationDisposed(this);
    };
    Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
      get: function() {
        return this._rootComponentTypes;
      },
      enumerable: true,
      configurable: true
    });
    ApplicationRef_._tickScope = profile_1.wtfCreateScope('ApplicationRef#tick()');
    return ApplicationRef_;
  })(ApplicationRef);
  exports.ApplicationRef_ = ApplicationRef_;
  global.define = __define;
  return module.exports;
});

System.register("angular2/src/platform/worker_render_common", ["angular2/src/facade/lang", "angular2/src/web_workers/shared/message_bus", "angular2/src/core/zone/ng_zone", "angular2/core", "angular2/platform/common_dom", "angular2/src/core/di", "angular2/src/platform/dom/dom_adapter", "angular2/src/platform/dom/events/dom_events", "angular2/src/platform/dom/events/key_events", "angular2/src/platform/dom/events/hammer_gestures", "angular2/src/platform/dom/dom_tokens", "angular2/src/platform/dom/dom_renderer", "angular2/src/platform/dom/shared_styles_host", "angular2/src/platform/dom/shared_styles_host", "angular2/src/animate/browser_details", "angular2/src/animate/animation_builder", "angular2/compiler", "angular2/src/platform/browser/xhr_impl", "angular2/src/core/testability/testability", "angular2/src/platform/browser/testability", "angular2/src/platform/browser/browser_adapter", "angular2/src/core/profile/wtf_init", "angular2/src/web_workers/ui/renderer", "angular2/src/web_workers/ui/xhr_impl", "angular2/src/web_workers/shared/service_message_broker", "angular2/src/web_workers/shared/client_message_broker", "angular2/src/web_workers/shared/serializer", "angular2/src/web_workers/shared/api", "angular2/src/web_workers/shared/render_store"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var lang_1 = require("angular2/src/facade/lang");
  var message_bus_1 = require("angular2/src/web_workers/shared/message_bus");
  var ng_zone_1 = require("angular2/src/core/zone/ng_zone");
  var core_1 = require("angular2/core");
  var common_dom_1 = require("angular2/platform/common_dom");
  var di_1 = require("angular2/src/core/di");
  var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
  var dom_events_1 = require("angular2/src/platform/dom/events/dom_events");
  var key_events_1 = require("angular2/src/platform/dom/events/key_events");
  var hammer_gestures_1 = require("angular2/src/platform/dom/events/hammer_gestures");
  var dom_tokens_1 = require("angular2/src/platform/dom/dom_tokens");
  var dom_renderer_1 = require("angular2/src/platform/dom/dom_renderer");
  var shared_styles_host_1 = require("angular2/src/platform/dom/shared_styles_host");
  var shared_styles_host_2 = require("angular2/src/platform/dom/shared_styles_host");
  var browser_details_1 = require("angular2/src/animate/browser_details");
  var animation_builder_1 = require("angular2/src/animate/animation_builder");
  var compiler_1 = require("angular2/compiler");
  var xhr_impl_1 = require("angular2/src/platform/browser/xhr_impl");
  var testability_1 = require("angular2/src/core/testability/testability");
  var testability_2 = require("angular2/src/platform/browser/testability");
  var browser_adapter_1 = require("angular2/src/platform/browser/browser_adapter");
  var wtf_init_1 = require("angular2/src/core/profile/wtf_init");
  var renderer_1 = require("angular2/src/web_workers/ui/renderer");
  var xhr_impl_2 = require("angular2/src/web_workers/ui/xhr_impl");
  var service_message_broker_1 = require("angular2/src/web_workers/shared/service_message_broker");
  var client_message_broker_1 = require("angular2/src/web_workers/shared/client_message_broker");
  var serializer_1 = require("angular2/src/web_workers/shared/serializer");
  var api_1 = require("angular2/src/web_workers/shared/api");
  var render_store_1 = require("angular2/src/web_workers/shared/render_store");
  exports.WORKER_SCRIPT = lang_1.CONST_EXPR(new di_1.OpaqueToken("WebWorkerScript"));
  exports.WORKER_RENDER_MESSAGING_PROVIDERS = lang_1.CONST_EXPR([renderer_1.MessageBasedRenderer, xhr_impl_2.MessageBasedXHRImpl]);
  exports.WORKER_RENDER_PLATFORM = lang_1.CONST_EXPR([core_1.PLATFORM_COMMON_PROVIDERS, new di_1.Provider(core_1.PLATFORM_INITIALIZER, {
    useValue: initWebWorkerRenderPlatform,
    multi: true
  })]);
  exports.WORKER_RENDER_APPLICATION_COMMON = lang_1.CONST_EXPR([core_1.APPLICATION_COMMON_PROVIDERS, exports.WORKER_RENDER_MESSAGING_PROVIDERS, new di_1.Provider(core_1.ExceptionHandler, {
    useFactory: _exceptionHandler,
    deps: []
  }), new di_1.Provider(dom_tokens_1.DOCUMENT, {
    useFactory: _document,
    deps: []
  }), new di_1.Provider(common_dom_1.EVENT_MANAGER_PLUGINS, {
    useClass: dom_events_1.DomEventsPlugin,
    multi: true
  }), new di_1.Provider(common_dom_1.EVENT_MANAGER_PLUGINS, {
    useClass: key_events_1.KeyEventsPlugin,
    multi: true
  }), new di_1.Provider(common_dom_1.EVENT_MANAGER_PLUGINS, {
    useClass: hammer_gestures_1.HammerGesturesPlugin,
    multi: true
  }), new di_1.Provider(dom_renderer_1.DomRootRenderer, {useClass: dom_renderer_1.DomRootRenderer_}), new di_1.Provider(core_1.RootRenderer, {useExisting: dom_renderer_1.DomRootRenderer}), new di_1.Provider(shared_styles_host_2.SharedStylesHost, {useExisting: shared_styles_host_1.DomSharedStylesHost}), new di_1.Provider(compiler_1.XHR, {useClass: xhr_impl_1.XHRImpl}), xhr_impl_2.MessageBasedXHRImpl, new di_1.Provider(service_message_broker_1.ServiceMessageBrokerFactory, {useClass: service_message_broker_1.ServiceMessageBrokerFactory_}), new di_1.Provider(client_message_broker_1.ClientMessageBrokerFactory, {useClass: client_message_broker_1.ClientMessageBrokerFactory_}), serializer_1.Serializer, new di_1.Provider(api_1.ON_WEB_WORKER, {useValue: false}), render_store_1.RenderStore, shared_styles_host_1.DomSharedStylesHost, testability_1.Testability, browser_details_1.BrowserDetails, animation_builder_1.AnimationBuilder, common_dom_1.EventManager]);
  function initializeGenericWorkerRenderer(injector) {
    var bus = injector.get(message_bus_1.MessageBus);
    var zone = injector.get(ng_zone_1.NgZone);
    bus.attachToZone(zone);
    zone.run(function() {
      exports.WORKER_RENDER_MESSAGING_PROVIDERS.forEach(function(token) {
        injector.get(token).start();
      });
    });
  }
  exports.initializeGenericWorkerRenderer = initializeGenericWorkerRenderer;
  function initWebWorkerRenderPlatform() {
    browser_adapter_1.BrowserDomAdapter.makeCurrent();
    wtf_init_1.wtfInit();
    testability_2.BrowserGetTestability.init();
  }
  exports.initWebWorkerRenderPlatform = initWebWorkerRenderPlatform;
  function _exceptionHandler() {
    return new core_1.ExceptionHandler(dom_adapter_1.DOM, !lang_1.IS_DART);
  }
  function _document() {
    return dom_adapter_1.DOM.defaultDoc();
  }
  global.define = __define;
  return module.exports;
});

System.register("angular2/platform/worker_render", ["angular2/src/platform/worker_render_common", "angular2/src/platform/worker_render", "angular2/src/web_workers/shared/client_message_broker", "angular2/src/web_workers/shared/service_message_broker", "angular2/src/web_workers/shared/serializer", "angular2/src/web_workers/shared/message_bus", "angular2/src/platform/worker_render"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var worker_render_common_1 = require("angular2/src/platform/worker_render_common");
  exports.WORKER_SCRIPT = worker_render_common_1.WORKER_SCRIPT;
  exports.WORKER_RENDER_PLATFORM = worker_render_common_1.WORKER_RENDER_PLATFORM;
  exports.initializeGenericWorkerRenderer = worker_render_common_1.initializeGenericWorkerRenderer;
  exports.WORKER_RENDER_APPLICATION_COMMON = worker_render_common_1.WORKER_RENDER_APPLICATION_COMMON;
  var worker_render_1 = require("angular2/src/platform/worker_render");
  exports.WORKER_RENDER_APPLICATION = worker_render_1.WORKER_RENDER_APPLICATION;
  exports.WebWorkerInstance = worker_render_1.WebWorkerInstance;
  var client_message_broker_1 = require("angular2/src/web_workers/shared/client_message_broker");
  exports.ClientMessageBroker = client_message_broker_1.ClientMessageBroker;
  exports.ClientMessageBrokerFactory = client_message_broker_1.ClientMessageBrokerFactory;
  exports.FnArg = client_message_broker_1.FnArg;
  exports.UiArguments = client_message_broker_1.UiArguments;
  var service_message_broker_1 = require("angular2/src/web_workers/shared/service_message_broker");
  exports.ReceivedMessage = service_message_broker_1.ReceivedMessage;
  exports.ServiceMessageBroker = service_message_broker_1.ServiceMessageBroker;
  exports.ServiceMessageBrokerFactory = service_message_broker_1.ServiceMessageBrokerFactory;
  var serializer_1 = require("angular2/src/web_workers/shared/serializer");
  exports.PRIMITIVE = serializer_1.PRIMITIVE;
  __export(require("angular2/src/web_workers/shared/message_bus"));
  var worker_render_2 = require("angular2/src/platform/worker_render");
  exports.WORKER_RENDER_APP = worker_render_2.WORKER_RENDER_APPLICATION;
  global.define = __define;
  return module.exports;
});

System.register("angular2/web_worker/ui", ["angular2/src/facade/facade", "angular2/src/core/di", "angular2/src/core/application_ref", "angular2/src/core/application_tokens", "angular2/src/core/zone", "angular2/platform/worker_render"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(require("angular2/src/facade/facade"));
  __export(require("angular2/src/core/di"));
  var application_ref_1 = require("angular2/src/core/application_ref");
  exports.platform = application_ref_1.platform;
  exports.PlatformRef = application_ref_1.PlatformRef;
  exports.ApplicationRef = application_ref_1.ApplicationRef;
  var application_tokens_1 = require("angular2/src/core/application_tokens");
  exports.APP_ID = application_tokens_1.APP_ID;
  exports.APP_COMPONENT = application_tokens_1.APP_COMPONENT;
  exports.APP_INITIALIZER = application_tokens_1.APP_INITIALIZER;
  exports.PLATFORM_INITIALIZER = application_tokens_1.PLATFORM_INITIALIZER;
  __export(require("angular2/src/core/zone"));
  __export(require("angular2/platform/worker_render"));
  global.define = __define;
  return module.exports;
});

//# sourceMappingURLDisabled=ui.dev.js.map