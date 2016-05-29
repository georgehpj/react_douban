var React = require("react");
var InlineList = React.createClass({
    propTypes: {
        className:React.PropTypes.string.isRequired
    },

    render : function () {
        var items = this.props.items;
        return (
            <ul className={this.props.className}>
                {
                    React.Children.map(this.props.children, function(child){
                        return <li>{child}</li>
                    })
                }
            </ul>
        );
    }
});

module.exports = InlineList;