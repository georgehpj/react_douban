/**
 * Created by George on 2016/5/29.
 */

var React = require('react');
var Logo = require('../picLink/logo');
var SearchBox = require('../others/searchBox');

var WrapHead = React.createClass({
    render : function() {
        return (
            <div className="nav-wrap-head container">
                <Logo className="nav-wrap-logo" href="https://movie.douban.com">豆瓣电影</Logo>
                <SearchBox/>
            </div>
        );
    }
});
module.exports = WrapHead;