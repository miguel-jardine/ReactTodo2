var 
    React       = require("react"),

    end_var_def = [];


var Main = (props) => {
    return(
        <div>
            <p>Main.jsx rendered</p>
            <div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
module.exports = Main;