
import React, { Component } from 'react'

export default class StandarUI extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <h3>test</h3><hr />
                    </div>
                    <div>
                        <img src="/asset" style={{ width: "50px", height: "50px" }} /><br />
                        <h3>test</h3><br />
                        <span>username</span><br />
                        <input
                            type="text"
                            name="username"
                            required
                        /><br />
                        <input
                            type="checkbox"
                            name="remember me"
                            required
                        />
                        <span>remember me</span><br />
                        <button type="submit">login</button><br />
                        <a href="#">forgot</a><br />
                        <br /><br /><br />
                    </div>
                </form>
            </div>
        )
    }
}
