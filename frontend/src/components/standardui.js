
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
                <div className="text">
                    <form>
                        <div class="formContainer">
                            <h3>test</h3><hr />
                        </div>
                        <div class="container">
                            <img src='/asset' style={{ width: "50px", height: "50px" }}></img>
                            <h3>test</h3>
                            <input
                                type="text"
                                name="username"
                                required
                            />
                            <input
                                type="checkbox"
                                name="remember me"
                                required
                            />
                            <button type="submit">login</button>
                            <a href="#">forgot</a>
                            <br /><br /><br />
                        </div>
                    </form>
                </div>
            </div>
        )

    }
}
