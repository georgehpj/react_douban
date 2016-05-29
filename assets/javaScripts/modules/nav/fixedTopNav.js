/**
 * Created by George on 2016/5/28.
 */

var React = require('react');
var InlineList = require('../list/inlineList');
var FixedTopNav = React.createClass({

    nav_header : [
        <a className="navbar-brand" href="#">豆瓣</a>,
        <a className="navbar-brand" href="#">读书</a>,
        <a className="navbar-brand" href="#">电影</a>,
        <a className="navbar-brand" href="#">音乐</a>,
        <a className="navbar-brand" href="#">同城</a>,
        <a className="navbar-brand" href="#">小组</a>,
        <a className="navbar-brand" href="#">阅读</a>,
        <a className="navbar-brand" href="#">FM</a>,
        <a className="navbar-brand" href="#">东西</a>,
        <a className="navbar-brand" href="#">市集</a>,
        <a className="navbar-brand" href="#">更多</a>
    ],

    nav_right : [
        <a className="navbar-brand" href="#">下载豆瓣客户端</a>,
        <a className="navbar-brand" href="#">登录</a>,
        <a className="navbar-brand" href="#">注册</a>
    ],

    render : function(){
        return (
            <nav className="navbar-inverse navbar-fixed-top " role="navigation">
                <div className="navbar-header">
                    <InlineList className="nav navbar-nav">
                        {this.nav_header}
                    </InlineList>
                </div>
                <div className="navbar-right">
                    <InlineList className="nav navbar-nav">
                        {this.nav_right}
                    </InlineList>
                </div>
            </nav>
        );

    }
});

module.exports = FixedTopNav;