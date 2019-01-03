import React from "react";
import Dialog from "comp/dialog"

const hocDialog = (Component) => {
    return function(Wrapper) {
        return class extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    flag: false
                }
                this.toggle = this.toggle.bind(this);
                this.close = this.close.bind(this);
            }
            toggle() {
                this.setState({
                    flag: !this.state.flag
                }, () => {
                    console.log(this.state.flag)
                })

            }
            close(val) {
                this.setState({
                    flag: val
                })
            }
            render() {
                const { flag } = this.state;
                return <Wrapper>
					<div>this is hocDialog</div>
					<button onClick={this.toggle}>显示/隐藏</button>
					{
						flag?<Component close ={this.close}/>: null
					}
				</Wrapper>
            }
        }
    }
}
@hocDialog(Dialog)
class Registry extends React.Component {
    render() {
        return <div>
        	this is Registry page
        	{this.props.children}
        </div>
    }
}
export default Registry;