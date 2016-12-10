var 
    React       = require("react"),

    TodoList    = require("TodoList"),

    end_var_def = [];

var TodoApp = React.createClass({

    getInitialState: function () {
        return {
            todos: [
                {
                    "id": 1,
                    "text": "Walk the dog"
                },
                {
                    "id": 2,
                    "text": "Clean the yard"
                },
                {
                    "id": 3,
                    "text": "Groceries"
                },
                {
                    "id": 4,
                    "text": "Yoga"
                },
            ]
        } 
    },


    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos} />
            </div>
        )
    }
});

module.exports = TodoApp;