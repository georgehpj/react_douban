/**
 * Created by George on 2016/5/29.
 */

require('../../../stylesheets/scss/db_main.scss');
var React = require('react');
var WrapHead = require('../section/wrap_head');
var WrapSecond = require('../section/wrap_second');

var Wrap = React.createClass({
    render:function() {
        return (
            <div>
                <div className="nav-wrap">
                    <WrapHead/>
                </div>
                <WrapSecond/>
            </div>
        );
    }
});
module.exports = Wrap;