/**
 * Created by George on 2016/5/28.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./modules/header/indexHeader');

var Body = React.createClass({
    render : function() {
        return (
            <Header/>
        );
    }
});

ReactDOM.render(
    <Body></Body>,
    document.body
);