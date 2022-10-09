
export default class UIGeneratorPage {
    //Generate code for label
    static generateCodeForLogo(source) {
        let LogoCode = '<img src=' +'"'+ source +'"'+ ' style={{ width: ' + '"' + '50px' + '"' + ', height: ' + '"' + '50px' + '"' + '}} />' + '<br />' + '\n';
        return LogoCode;
    }

    //Code generation for label
    //Pass the style parameters as method params
    static generateCodeForHeading(heading) {
        let headingCode = '<h3>' + heading + '</h3>' + '<br /><br />' + '\n';
        return headingCode;
    }

    static generateCodeForLabel(label) {
        let labelCode = '<span>' + label + '</span>' + '<br /><br />' + '\n';
        return labelCode;
    }

    //Code generation for input
    //Pass the style parameters as method params
    static generateCodeFortextbox(labelName) {
        let inputCode = '<span>' + labelName + '</span>' + '<br />' + '\n';
        //let inputCode = '<input' + '\n';
        inputCode = inputCode + '<input' + '\n';
        inputCode = inputCode + '\t' + 'type="text"' + '\n';
        inputCode = inputCode + '\t' + 'name="' + labelName + '"' + '\n';;
        inputCode = inputCode + '\t\t\t\t' + 'required' + '\n';
        inputCode = inputCode + '\t\t' + '/>' + '<br /><br />' + '\n';

        return inputCode;
    }

    static generateCodeForcheckbox(checkboxlabel) {
        let checkboxCode = '<input' + '\n';
        checkboxCode = checkboxCode + '\t' + 'type="checkbox"' + '\n';
        checkboxCode = checkboxCode + '\t' + 'name="' + checkboxlabel + '"' + '\n';;
        checkboxCode = checkboxCode + '\t\t\t\t' + 'required' + '\n';
        checkboxCode = checkboxCode + '\t\t' + '/>' + '\n';

        checkboxCode = checkboxCode + '<span>' + checkboxlabel + '</span>' + '<br /><br />' + '\n';

        return checkboxCode;
    }

    //Code generation for Button
    //Pass the style parameters as method params
    static generateCodeForButton(buttonName) {
        let buttonCode = '\t\t\t' + '<button type="submit">' + buttonName + '</button>' + '<br /><br />' + '\n';

        return buttonCode;
    }

    static generateCodeForHyperlink(hyperlinklabel) {
        let hyperlinkCode = '<a href="#">' + hyperlinklabel + '</a>' + '<br /><br />' + '\n';

        return hyperlinkCode;
    }

    //XML Genenerator
    static generateXMLFileHeader(xmlTitle){
        let xmlCodeHeader = "<Window x:Class='StandardXML'" + '\n';
        xmlCodeHeader = xmlCodeHeader + '\t\t' + 'xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"' + '\n';
        xmlCodeHeader = xmlCodeHeader + '\t\t' + 'xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"' + '\n';
        xmlCodeHeader = xmlCodeHeader + '\t\t' + 'xmlns:d="http://schemas.microsoft.com/expression/blend/2008"' + '\n';
        xmlCodeHeader = xmlCodeHeader + '\t\t' + 'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"' + '\n';
        xmlCodeHeader = xmlCodeHeader + '\t\t' + 'xmlns:local="clr-namespace:TestPro"' + '\n';
        xmlCodeHeader = xmlCodeHeader + '\t\t' + 'mc:Ignorable="d"' + '\n';
        xmlCodeHeader = xmlCodeHeader + '\t\t' + 'Title="' + xmlTitle + '">' + '\n'; 
        return xmlCodeHeader;
    }

    static generateXMLHeaderTag(type, content, horiAlign, vertiAlign, margin){
        let labelXMLtag = '\t\t' + "<Label x:type=" + '"' + type + '"' + " Content=" + '"' + content + '"' + " HorizontalAlignment=" + '"' + horiAlign + '"' + " VerticalAlignment=" + '"' + vertiAlign + '"' + " Margin=" + '"' + margin + '"' + "></Label>" + '\n';
        return labelXMLtag;  
    }

    static generateXMLTextBoxTag(label, name, datatype, hint, horiAlign, vertiAlign, margin){
        let textBoxXMLtag = '\t\t' + "<TextBox x:type=" + '"input"' + " x:Label=" + '"' + label + '"' + " x:Name=" + '"' + name + '"' + " x:Type=" + '"' + datatype + '"' + " Text=" + '"' + hint + '"' + " HorizontalAlignment=" + '"' + horiAlign + '"' + " VerticalAlignment=" + '"' + vertiAlign + '"' + " Margin=" + '"' + margin + '"' + "></Label>" + '\n';
        return textBoxXMLtag;  
    }

    static generateXMLCheckBoxTag(label, name, datatype, content, value, horiAlign, vertiAlign, margin){
        let checkBoxXMLtag = '\t\t' + "<CheckBoxes x:type=" + '"checkbox"' + " x:Label=" + '"' + label + '"' + " x:Name=" + '"' + name + '"' + " x:Type=" + '"' + datatype + '"' + " Content=" + '"' + content + '"' + " Value=" + '"' + value + " HorizontalAlignment=" + '"' + horiAlign + '"' + " VerticalAlignment=" + '"' + vertiAlign + '"' + " Margin=" + '"' + margin + '"' + "></Label>" + '\n';
        return checkBoxXMLtag;  
    }

    
    static generateXMLButtonTag(name, content, width, height, horiAlign, margin){
        let buttonXMLtag = '\t\t' + "<Button x:type=" + '"button"' +  " Name=" + '"' + name + '"' + " Content=" + '"' + content + '"' + " Width=" + '"' + width + '"' + " Height=" + '"' + height + " HorizontalAlignment=" + '"' + horiAlign + '"' + " Margin=" + '"' + margin + '"' + "></Button>" + '\n';
        return buttonXMLtag;  
    }

}
