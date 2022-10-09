import React, { Component } from 'react'
import SideNavBar from '../components/navBar/sideNavBar';
import { FileUploader } from './sketchUploader';
import '../assets/css/home.css';
import { LogoValue, HeadingValue, TextBoxValue, CheckBoxValue, ButtonValue, HyperLinkValue, LabelValue } from '../Configurations/config'
import '../assets/css/textarea.css';
import * as tf from '@tensorflow/tfjs';
import firebase from './../Firebase/firebase';
import UIGeneratorPage from '../UIGenerator/uigenerator';
import ReactHtmlParser from 'react-html-parser'

const initialStates = {
    "userInterface": '',
    "uiFile": '',
    "model": '',
    "generatedCode": '',
    "generatedXMLFile" : ''
}
export default class home extends Component {

    constructor(props) {
        super(props);
        this.handleTestBtn = this.handleTestBtn.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.navigatetotest = this.navigatetotest.bind(this);
        this.state = initialStates;
    }

    generateCode(response) {

        //CODE GENERATION START - NEED OPTMIZATION
        //Drawback - All UI do not have forms - Have a tag in XML to determine if it is form/normal div!
        // console.log('Response : ', response);
        //XML File
        let genXMLCode = UIGeneratorPage.generateXMLFileHeader('Test');//XML Header
        genXMLCode = genXMLCode + '\t' + '<Canvas>' + '\n';

        let code = '<div>' + '\n';
        code = code + '\t' + '<form>' + '\n';

        code = code + '\t\t' + '<div>' + '\n';
        code = code + '\t\t\t' + '<h3>test</h3><hr/>' + '\n';
        code = code + '\t\t' + '</div>' + '\n';

        code = code + '\t\t' + '<div>' + '\n';
        //Label
        if (response[1].toFixed(2) == HeadingValue) {
            code = code + UIGeneratorPage.generateCodeForHeading('test');
            genXMLCode = genXMLCode + UIGeneratorPage.generateXMLHeaderTag('header', 'testHeader', 'Left', 'Right', '0,0,0,0');//For XML
        }

        if (response[7].toFixed(2) == LabelValue) {
            code = code + UIGeneratorPage.generateCodeForLabel('test');
            genXMLCode = genXMLCode + UIGeneratorPage.generateXMLHeaderTag('label', 'testLabel', 'Left', 'Right', '0,0,0,0');//For XML
        }

        if (response[4].toFixed(2) == LogoValue) {
            code = code + UIGeneratorPage.generateCodeForLogo('/asset');
        }

        if (response[5].toFixed(2) == TextBoxValue) {
            code = code + UIGeneratorPage.generateCodeFortextbox('username');
            genXMLCode = genXMLCode + UIGeneratorPage.generateXMLTextBoxTag('Test TxtBoxLabel', 'Test TxtBoxName', 'string', 'Test Placeholder', 'Left', 'Right', '0,0,0,0');
        }

        if (response[6].toFixed(2) == CheckBoxValue) {
            code = code + UIGeneratorPage.generateCodeForcheckbox('remember me');
            genXMLCode = genXMLCode + UIGeneratorPage.generateXMLCheckBoxTag('Test CheckBoxLabel', 'Test TxtBoxName', 'checkbox', 'Test Content', 'TestValue', 'Left', 'Right', '0,0,0,0');
        }

        if (response[14].toFixed(2) == ButtonValue) {
            code = code + UIGeneratorPage.generateCodeForButton('login');
            genXMLCode = genXMLCode + UIGeneratorPage.generateXMLButtonTag('Test Button', 'Test Btn', '150', '100', 'Left', '0,0,0,0');
        }

        if (response[2].toFixed(2) == HyperLinkValue) {
            code = code + UIGeneratorPage.generateCodeForHyperlink('forgot');
        }
        code = code + '\t\t\t' + '<br /><br /><br />' + '\n';
        code = code + '\t\t' + '</div>' + '\n';

        code = code + '\t' + '</form>' + '\n';
        code = code + '</div>';

        //Generated XML End
        genXMLCode = genXMLCode + '\t' + '</Canvas>' + '\n';
        genXMLCode = genXMLCode + '</Window>' + '\n';

        //Get the generated Code
        console.log('UI Code', code);
        this.setState({ generatedCode: code });
        console.log('GENERATED XML : ', genXMLCode);
        this.setState({ generatedXMLFile: genXMLCode });
    }
    async handleTestBtn() {
        console.log('BUTTON IS PRESSED');
        // console.log('test', this.state.uiFile)
        const model = await tf.loadLayersModel('/tfjs/model.json');
        //const model = await tf.loadLayersModel('../../public/tfjs/model.json');
        console.log(model)
        var img = new Image(this.state.uiFile);
        img.width = 64;
        img.height = 64;
        
        var tensorImg = tf.browser.fromPixels(img).toFloat().expandDims();
        // var tensorImg = tf.browser.fromPixels(img).resizeNearestNeighbor(203.0, 126.0, 173.0).toFloat().expandDims();
        var prediction = model.predict(tensorImg).data()
            .then((res) => {
                alert('Predicted successfully!');
                console.log(res)
                this.generateCode(res);
            })
            .catch(error => {
                alert(error);
            })
    }

    //upload product image to firebase
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
                                                <button type="submit" className="btn btn-secondary" id="cancelBtn" onClick={this.navigatetotest}>Standard UI</button>
                                                <button type="submit" className="btn btn-secondary" id="cancelBtn" onClick={this.handleTestBtn}>Submit</button>
                                                {/* <button type="submit" className="btn btn-primary" id="submitBtn" style={{ width: "200px" }} onClick={this.handleTestBtn}>Test Sanjay</button><br /><br />*/}
                                                <form onSubmit={this.onSubmit}>
                                                    {/* <FileUploader /> */}
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
                                                    </div>

                                                    {/*Sanjay commented above */}
                                                    {/* <button type="submit" className="btn btn-primary" id="submitBtn" style={{ width: "200px" }} onClick={this.handleTestBtn}>Submit</button><br /><br /> */}

                                                    <div class="alert alert-secondary" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                                        Display Sketch and XML file
                                                    </div><br />

                                                    <div class="row">
                                                        <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                                                            <div class="alert alert-dark" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                                                Standard UI
                                                            </div>
                                                            {ReactHtmlParser(this.state.generatedCode)}
                                                            {/* <p style={{ backgroundColor: '#b7b7c7', height: '450px', borderRadius: '10px' }}></p> */}
                                                        </div>
                                                        <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                                                            <div class="alert alert-dark" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                                                XML File
                                                            </div>
                                                            <textarea value={this.state.generatedXMLFile} id="xmlString" className="textAreaStyle"></textarea>
                                                        </div>
                                                    </div>
                                                </form>
                                            </center>
                                        </div>
                                        <div class="col-12 text-end">
                                            <a class="btn btn-primary" href="" style={{ marginRight: '30px', marginTop: '-20px' }}>Download XML File</a>
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