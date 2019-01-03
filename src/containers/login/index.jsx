import React from "react";
import hocComp from "./hocComp";

//如果使用了装饰器，并且传参了，高阶组件的返回值必须是function
@hocComp()
class Login extends React.Component {
    render() {
        return <div>
            this is Login page
            {this.props.children}
        </div>
    }
}

export default Login;