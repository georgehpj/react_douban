/**
 * Created by George on 2016/5/29.
 */
var React = require('react');
var InlineList = require('../list/inlineList');
var WrapSecond = React.createClass({
    items : [
        <a className="small" href="#">影讯&购票</a>,
        <a className="small" href="#">选电影</a>,
        <a className="small" href="#">电视剧</a>,
        <a className="small" href="#">排行榜</a>,
        <a className="small" href="#">分类</a>,
        <a className="small" href="#">影评</a>,
        <a className="small" href="#">2015年度榜单</a>,
        <a className="small" href="#">豆瓣观影报告</a>,
    ],
    
    render : function() {
        return (
            <div className="nav-second">
                <div className="container">
                    <InlineList className="nav-inline">
                        {this.items}
                    </InlineList>
                </div>
            </div>
        );
    }
});

module.exports = WrapSecond;