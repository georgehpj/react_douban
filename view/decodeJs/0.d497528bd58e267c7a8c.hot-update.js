webpackHotUpdate(0,{

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(5), RootInstanceProvider = __webpack_require__(13), ReactMount = __webpack_require__(15), React = __webpack_require__(79); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * Created by George on 2016/5/29.
	 */

	var React = __webpack_require__(79);
	var SearchBox = React.createClass({displayName: "SearchBox",
	    propTypes: {
	        className: React.PropTypes.string.isRequired,
	        hrefUrl: React.PropTypes.string
	    },
	    render: function () {
	        return (
	            React.createElement("div", {className: "input-group nav-wrap-search"}, 
	                React.createElement("input", {type: "text", className: "form-control", placeholder: "电影、影人、影院、"}), 
	                React.createElement("span", {className: "input-group-btn"}, 
	                    React.createElement("button", {className: "btn btn-default", type: "button"}, 
	                        React.createElement("i", {className: "glyphicon glyphicon-search"})
	                    )
	                )
	            )
	        );
	    }
	});
	module.exports = SearchBox;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(184); if (makeExportsHot(module, __webpack_require__(79))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "searchBox.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})