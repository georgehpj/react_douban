/**
 * Created by George on 2016/5/29.
 */
var React = require('react');
var Pic = React.createClass({
    propTypes: {
        className:React.PropTypes.string.isRequired,
        hrefUrl:React.PropTypes.string
    },
    render:function(){
        return(
            <span className={this.props.className}>
                <a href={this.props.href}>{this.props.children}</a>
            </span>
        );
    }
});
module.exports = Pic;