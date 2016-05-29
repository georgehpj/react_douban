/**
 * Created by George on 2016/5/29.
 */

var React = require('react');
var FixedTopNav = require('../nav/fixedTopNav');
var FooterNav = require('../nav/footerNav');
var Wap = require('../section/wrap');

var IndexHeader = React.createClass({
    render : function(){
        return (
            <div>
                <FixedTopNav/>
                <Wap/>
                <FooterNav/>
            </div>
        );
    }
});

module.exports = IndexHeader;