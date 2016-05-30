/**
 * Created by George on 2016/5/29.
 */

var React = require('react');
var SearchBox = React.createClass({
    getInitialState : function(){
        return {
            searchInfo: ''
        };
    },

    submitHandler : function (event) {
        event.preventDefault();
        alert(this.state.searchInfo);
    },

    handlerChange : function(event){
        this.setState({
            searchInfo : event.target.value
        });
    },

    render: function () {
        return (
            <form className="input-group nav-wrap-search" onSubmit={this.submitHandler}>
                <input type="text" placeholder="电影、影人、影院、电视剧"
                       value={this.state.searchInfo} className="form-control"
                       onChange={this.handlerChange}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                        <i className="glyphicon glyphicon-search"/>
                    </button>
                </span>
            </form>
        );
    }
});
module.exports = SearchBox;