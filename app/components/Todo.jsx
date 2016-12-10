var 
    React       = require("react"),

    end_var_def = [];

var TodoItem = React.createClass({

    render: function () {
        var {id, text} = this.props

        return (
            <div>
                {id}: {text}
            </div>
        )
    }
});

module.exports = TodoItem;