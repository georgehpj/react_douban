/**
 * Created by George on 2016/5/28.
 */
require('../stylesheets/scss/db_main.scss');
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./modules/header/indexHeader');
var IndexFooter = require('./modules/footer/indexFooter');
var ScreeningHeader = require('./modules/header/screeningHeader');

var Body = React.createClass({
    render : function() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <section className="col-lg-9 col-md-8 col-sm-12 padding-left-zero">
                        <ScreeningHeader/>
                    </section>
                    <aside className="col-lg-3 col-md-4 col-sm-12 padding-left-zero">

                    </aside>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Body/>,
    document.body
);