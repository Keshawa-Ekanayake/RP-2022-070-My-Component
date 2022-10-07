
export default class UIGeneratorPage {
    //Generate code for label
    static generateCodeForLogo(source) {
        let LogoCode = '<img src=' +"'"+ source +"'"+ ' style={{ width: 50px, height: 50px}}>' + '\n';
        return LogoCode;
    }

    //Code generation for label
    //Pass the style parameters as method params
    static generateCodeForHeading(heading) {
        let headingCode = '<h3>' + heading + '</h3>' + '\n';
        return headingCode;
    }

    //Code generation for input
    //Pass the style parameters as method params
    static generateCodeFortextbox(labelName) {
        let inputCode = '<input' + '\n';
        inputCode = inputCode + '\t' + 'type="text"' + '\n';
        inputCode = inputCode + '\t' + 'name="' + labelName + '"' + '\n';;
        inputCode = inputCode + '\t\t\t\t' + 'required' + '\n';
        inputCode = inputCode + '\t\t' + '/>' + '\n';

        return inputCode;
    }

    static generateCodeForcheckbox(checkboxlabel) {
        let checkboxCode = '<input' + '\n';
        checkboxCode = checkboxCode + '\t' + 'type="checkbox"' + '\n';
        checkboxCode = checkboxCode + '\t' + 'name="' + checkboxlabel + '"' + '\n';;
        checkboxCode = checkboxCode + '\t\t\t\t' + 'required' + '\n';
        checkboxCode = checkboxCode + '\t\t' + '/>' + '\n';

        return checkboxCode;
    }

    //Code generation for Button
    //Pass the style parameters as method params
    static generateCodeForButton(buttonName) {
        let buttonCode = '\t\t\t' + '<button type="submit">' + buttonName + '</button>' + '\n';

        return buttonCode;
    }

    static generateCodeForHyperlink(hyperlinklabel) {
        let hyperlinkCode = '<a href="#">' + hyperlinklabel + '</a>' + '\n';

        return hyperlinkCode;
    }


}
