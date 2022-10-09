
import React, { Component } from 'react'

export default class StandarUI extends Component {
    constructor(props) {
        super(props);
    }
    /**
       * The function to navigate to the add normal item page
    */
    // navigateToAddNormalitempage(e, productID, userId) {
    //     userId = this.state.userId;
    //     window.location = `/insertItem/${productID}/${userId}`;
    // }
    /**
       * The function written to get all the men product details
       * Uses - setState()
       * API CALL - GET ALL MEN PRODUCTS
       */
    // componentDidMount() {
    //     Axios.get('http://localhost:3001/product/getAllMenProducts')
    //         .then(response => {
    //             this.setState({ menProducts: response.data.data });
    //         }).catch(error => {
    //             alert(error.message);
    //         })

    //     this.setState({ userId: this.props.match.params.userId });
    // }
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
