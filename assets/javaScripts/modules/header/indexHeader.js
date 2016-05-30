/**
 * Created by George on 2016/5/29.
 */

var React = require('react');
var FixedTopNav = require('../nav/fixedTopNav');
var Wap = require('../section/wrap');

var IndexHeader = React.createClass({
    render : function(){
        return (
            <header className="db_header">
                <FixedTopNav/>
                <Wap/>
            </header>
        );
    }
});

module.exports = IndexHeader;