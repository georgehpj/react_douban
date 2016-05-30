/**
 * Created by 16030117 on 2016/5/30.
 */

require('../../../stylesheets/scss/db_main.scss');
var React = require('react');
var Pic = require('../picLink/pic');

var ScreeningHeader = React.createClass({
    render : function(){
        return (
            <header className="screening-hd">
                <div className="ui-slide-control">
                    <Pic className="prev-btn" href="javascript:void(0)"/>
                    <Pic className="next_btn" href="javascript:void(0)"/>
                </div>
                <div className="slide-tip">
                    <span className="ui-slide-index">1</span>
                    /
                    <span className="ui-slide-max">6</span>
                </div>
                <h2>
                    正在热映
                    <span>
                        <a onClick="" href="#">全部正在热映»</a>
                    </span>
                    <span>
                        <a onClick="" href="#">即将上映»</a>
                    </span>
                </h2>
            </header>
        );
    }
});

module.exports = ScreeningHeader;