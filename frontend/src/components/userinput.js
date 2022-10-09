// ----------------------------
//     INPUT USER INPUTS - FRONTEND
// ----------------------------

//Function - Getting user inputs
//Student name - Ekanayake K.L.W
//Student ID - IT19150758

import React, { Component } from "react";

const initialStates = {

}
export default class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = initialStates;
    }

    render() {
        return (
            <div>
                {/* <Header /> */}
                <div class="wrapper">
                    <main>
                        <div class="container border rounded" style={{ width: "800px" }}>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <form onSubmit={this.onSubmit}>
                                        <br />

                                        <h2 style={{ color: "#8e9be6" }}>
                                            User Input Form
                                        </h2>
                                        <br />
                                        <span style={{ color: "grey", fontSize: "14px" }}>
                                            {/* User input for heading */}
                                            Input Heading
                                        </span>
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="inputHeading"
                                            id="inputHeading"
                                            required
                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                        <br />

                                        <span style={{ color: "grey", fontSize: "14px" }}>
                                            Input Label
                                        </span>
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="InputLabel"
                                            id="InputLabel"
                                            required
                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                        <br />

                                        <span style={{ color: "grey", fontSize: "14px" }}>
                                            Input textbox label
                                        </span>
                                        <input
                                            class="form-control"
                                            type="text"
                                            name=" Inputtextboxlabel"
                                            id="Inputtextboxlabel"
                                            required
                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                        <br />

                                        <span style={{ color: "grey", fontSize: "14px" }}>
                                            Input checkbox label
                                        </span>
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="Inputcheckboxlabel"
                                            id="Inputcheckboxlabel"
                                            required
                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                        <br />
                                        <span style={{ color: "grey", fontSize: "14px" }}>
                                            Input button label
                                        </span>
                                        <input
                                            class="form-control"
                                            type="text"
                                            name=" Inputbuttonlabel"
                                            id=" Inputbuttonlabel"
                                            required
                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                        <br />

                                        <span style={{ color: "grey", fontSize: "14px" }}>
                                            Input hyperlink label
                                        </span>
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="Inputhyperlinklabel"
                                            id="Inputhyperlinklabel"
                                            required
                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                        <br />
                                        <br />
                                        <button type="submit" className="btn btn-dark" id="submitBtn">Submit</button>
                                        <br />
                                    </form>
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}
