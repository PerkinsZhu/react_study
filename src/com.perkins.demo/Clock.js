import React from "react";
import App from "../App";


function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            登陆
        </button>
    );
}

function LogoutButton(props) {
    return (
        //这里的onClick是设置的事件
        <button onClick={props.onClick}>
            退出
        </button>
    );
}

class Clock extends React.Component {
    constructor(props) {
        super(props);

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = {isLoggedIn: false, date: new Date()};


    }


    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({date: new Date()})
    }


    handleClick(e) {
        e.preventDefault();
        console.log('链接被点击');
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    jump(e) {
        e.preventDefault()
        console.log("--------jump=======")
        alert("I AM JUMP ======");
    }


    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            //这里的onClick传递的是参数，只是个入参，然后在LogoutButton中通过props中取出
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (<div>
            <h1>Hello, world!</h1>
            <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>

            <a href="http://www.baidu.com" id="testLink" onClick={this.jump}>百度</a>
            <br/>
            {button}
        </div>)
    }
}


export default Clock;