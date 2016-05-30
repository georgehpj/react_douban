/**
 * Created by George on 2016/5/29.
 */

var React = require('react');
var Pic = require('../picLink/pic');
var SearchBox = require('../others/searchBox');

var WrapHead = React.createClass({
    render : function() {
        return (
            <div className="nav-wrap-head container">
                <Pic className="nav-wrap-logo" href="https://movie.douban.com"/>
                <SearchBox/>
            </div>
        );
    }
});
module.exports = WrapHead;