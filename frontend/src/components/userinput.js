import React, { Component } from 'react'
import '../assets/css/elements.css';
import Axios from 'axios';

const initialStates = {
    "heading": '',
    "label": '',
    "textbox": '',
    "checkbox": '',
    "button": '',
    "hyperlink": '',
    "headingmargin": '',
    "labelmargin": '',
    "textboxmargin": '',
    "checkboxmargin": '',
    "buttonmargin": '',
    "hyperlinkmargin": '',
    "headingallign": '',
    "labelallign": '',
    "textboxallign": '',
    "checkboxallign": '',
    "buttonallign": '',
    "hyperlinkallign": '',
}


export default class UserInput extends Component {


    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialStates;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();


        let uimodel = {
            heading: this.state.heading,
            label: this.state.label,
            textbox: this.state.textbox,
            checkbox: this.state.checkbox,
            button: this.state.button,
            hyperlink: this.state.hyperlink,
            headingMargin: this.state.headingmargin,
            labelMargin: this.state.labelmargin,
            textboxMargin: this.state.textboxmargin,
            checkboxMargin: this.state.checkboxmargin,
            buttonMargin: this.state.buttonmargin,
            hyperlinkMargin: this.state.hyperlinkmargin,
            headingAllignment: this.state.headingallign,
            labelAllignment: this.state.labelallign,
            textboxAllignment: this.state.textboxallign,
            checkboxAllignment: this.state.checkboxallign,
            buttonAllignment: this.state.buttonallign,
            hyperlinkAllignment: this.state.hyperlinkallign,
        }
        
        console.log('Test', uimodel)
        Axios.post('http://localhost:3001/uigenerator/addUIModel', uimodel)
            .then(response => {
                alert('UI Details Added Successfully');
                // window.location = "/viewProducts";
            }).catch(error => {
                alert(error.message);
            })


    }

    render() {
        return (
            <div>
                <div class="wrapper">
                    <main>
                        <h1> <center>ADD INPUT ELEMENTS DETAILS</center></h1>
                        <div class="container border rounded" style={{ width: '1000%' }}>
                            <div class="row">
                                <div class="col-lg-4 col-md-3">
                                    <form><br />
                                        <div className="form-group">
                                            <div class="row">
                                                <div class="column">
                                                    <div className="form-group">
                                                        <center><h3 style={{ backgroundColor: "#76a9e3" }}><b>Input Elements</b></h3></center><br />
                                                        <span style={{ color: "black" }}>Input Heading<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="heading"
                                                            id="heading"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Label<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="label"
                                                            id="label"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input TextBox Label<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="textbox"
                                                            id="textbox"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Checkbox Label<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="checkbox"
                                                            id="checkbox"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Button Label<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="button"
                                                            id="button"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Hyperlink Label<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="hyperlink"
                                                            id="hyperlink"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                </div>
                                                <div class="column" style={{ marginLeft: "450px", marginTop: "-300px" }}>
                                                    <div className="form-group">
                                                        <center><h3 style={{ backgroundColor: "#76a9e3" }}><b>Margins</b></h3></center><br />
                                                        <span style={{ color: "black" }}>Input Heading - Margin<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="headingmargin"
                                                            id="headingmargin"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>

                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Label - Margin<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="labelmargin"
                                                            id="labelmargin"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input TextBox Label - Margin<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="textboxmargin"
                                                            id="textboxmargin"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Checkbox Label - Margin<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="checkboxmargin"
                                                            id="checkboxmargin"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Button Label - Margin<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="buttonmargin"
                                                            id="buttonmargin"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Hyperlink Label - Margin<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="hyperlinkmargin"
                                                            id="hyperlinkmargin"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                </div>
                                                <div class="column" style={{ marginLeft: "890px", marginTop: "-300px" }}>
                                                    <div className="form-group">
                                                        <center><h3 style={{ backgroundColor: "#76a9e3" }}><b>Alignments</b></h3></center><br />
                                                        <span style={{ color: "black" }}>Input Heading - Alignment<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="headingallign"
                                                            id="headingallign"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>

                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Label - Alignment<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="labelallign"
                                                            id="labelallign"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input TextBox Label - Alignment<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="textboxallign"
                                                            id="textboxallign"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Checkbox Label - Alignment<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="checkboxallign"
                                                            id="checkboxallign"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Button Label - Alignment<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="buttonallign"
                                                            id="buttonallign"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <span style={{ color: "black" }}>Input Hyperlink Label - Alignment<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="hyperlinkallign"
                                                            id="hyperlinkallign"
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                </div>
                                                <br /><br /><br /><br /><br /><br /><br />
                                                <br /><br /><br /><br /><br />
                                                <br /><br />
                                            </div><br />
                                            {/* <button type="submit" style={{ width: '98%', marginLeft: '111%' }} onClick={this.onSubmit} className="btn btn-dark" id="submitBtn">Submit</button> */}
                                        </div>
                                    </form>
                                    <button type="submit" style={{ width: '98%', marginLeft: '111%' }} onClick={this.onSubmit} className="btn btn-dark" id="submitBtn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}