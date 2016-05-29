/**
 * Created by George on 2016/5/28.
 */

var React = require('react');
var InlineList = require('../list/inlineList');
var FooterNav = React.createClass({

    nav_right : [
        <a href="#">关于豆瓣</a>,
        <a href="#">在豆瓣工作</a>,
        <a href="#">联系我们</a>,
        <a href="#">免责声明</a>,
        <a href="#">帮助中心</a>,
        <a href="#">移动应用</a>,
        <a href="#">豆瓣广告</a>
    ],

    render : function(){
        return (
            <nav className="navbar-default navbar-fixed-bottom" role="navigation">
                <div className="navbar-right">
                    <InlineList className="nav navbar-nav">
                        {this.nav_right}
                    </InlineList>
                </div>
            </nav>
        );
    }
});

module.exports = FooterNav;