/**
 * Created by George on 2016/5/29.
 */

var React = require('react');
var SearchBox = React.createClass({
    propTypes: {
        className: React.PropTypes.string.isRequired,
        hrefUrl: React.PropTypes.string
    },
    render: function () {
        return (
            <div className="input-group nav-wrap-search">
                <input type="text" className="form-control" placeholder="电影、影人、影院、电视剧"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                        <i className="glyphicon glyphicon-search"/>
                    </button>
                </span>
            </div>
        );
    }
});
module.exports = SearchBox;