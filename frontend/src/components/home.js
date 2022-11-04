import React, { Component } from 'react'
import SideNavBar from '../components/navBar/sideNavBar';
import { FileUploader } from './sketchUploader';
import '../assets/css/home.css';
import '../assets/css/textarea.css';
import * as tf from '@tensorflow/tfjs';
import firebase from './../Firebase/firebase';
import sketch from '../assets/img/sketch.jpg';


const initialStates = {
    "userInterface": '',
    "uiFile": '',
    "model": ''
}

export default class home extends Component {

    constructor(props) {
        super(props);
        this.handleTestBtn = this.handleTestBtn.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.navigatetotest = this.navigatetotest.bind(this);
        this.state = initialStates;
    }

    componentDidMount() {
        document.getElementById('submitBtn').disabled = true;
    }

    async handleTestBtn() {
        console.log('BUTTON IS PRESSED');
        const model = await tf.loadLayersModel('/tfjs/model.json');
        console.log(model)
        var img = new Image(this.state.uiFile);
        img.width = 64;
        img.height = 64;

        var tensorImg = tf.browser.fromPixels(img).toFloat().expandDims();
        var prediction = model.predict(tensorImg).data()
            .then((res) => {
                alert('Predicted successfully!');
                window.location = '/userinput'
                console.log(res)
                // this.generateCode(res);
            })
            .catch(error => {
                alert(error);
            })
    }

    async onImageChange(e) {
        const file = e.target.files[0];
        this.setState({ uiFile: file });
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);

        await fileRef.put(file).then(() => {
        }).catch(error => {
            alert(error.message);
        });

        const downloadImage = await fileRef.getDownloadURL();
        this.setState({ userInterface: downloadImage });
        alert('Image Uploaded Successfully!!', file.name);
        console.log('File Name', file.name);
        document.getElementById('submitBtn').disabled = false;
    }

    navigatetotest() {
        window.location = '/standard';
    }

    render() {
        return (
            <div>
                <body class="g-sidenav-show   bg-gray-100">
                    <div class="min-height-100 bg-primary position-absolute w-100"></div>
                    <SideNavBar />
                    <main class="main-content position-relative border-radius-lg ">
                        <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
                            <div class="container-fluid py-1 px-3">
                                <nav aria-label="breadcrumb"><br />
                                    <h5 class="font-weight-bolder text-white mb-0">Sketch to XML process</h5>
                                </nav>
                            </div>
                        </nav><br /><br />
                        <div class="container-fluid py-4">
                            <div class="row">
                                <center>
                                    <div class="card bg-light text-dark" style={{ width: '1300px', height: '1130px' }}>
                                        <div class="alert alert-secondary" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                            Upload Sketch here
                                        </div>
                                        <div class="card-body">
                                            <center>
                                                <button type="submit" className="btn btn-secondary" id="submitBtn" onClick={this.handleTestBtn}>Submit</button>
                                                <form onSubmit={this.onSubmit}>
                                                    <div>
                                                        <form method="post" action="#" id="#">
                                                            <div className="form-group files">
                                                                <input type="file"
                                                                    className="form-control"
                                                                    id="file"
                                                                    name="file"
                                                                    onChange={this.onImageChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </form>
                                                        <br />
                                                {/* <div class="frame" style={{ width: '650px', height: '450px', border: '3px solid #ccc', background: '#eee', margin: 'auto', padding: '15px 10px' }}>
                                                    <img src={sketch} class="navbar-brand-img h-100" alt="step2" />
                                                </div><br /> */}
                                                    </div>
                                                </form>
                                            </center>
                                        </div>
                                    </div></center>
                            </div>
                        </div>
                    </main>
                </body>
            </div>
        )
    }
}