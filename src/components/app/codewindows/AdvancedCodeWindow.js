import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import './codewindows.css';

export default class AdvancedCodeWindow extends Component {
    state = {
        html: false,
        css: false,
        htmlCode: "",
        cssCode: ""
    };

    componentDidMount(){
        this.renderHTML();
    }

    switchCode = (id) => {
        if(id === "html"){
            this.renderHTML();
        } else {
            this.renderCSS();
        }
    }

    renderHTML = () => {
        this.setState({ html: true, css: false }, () => {
            this.setState({htmlCode: this.formatHTMLText(this.props.html)});
        });
    }

    renderCSS = () => {
        this.setState({ html: false, css: true }, () => {
            this.setState({cssCode: this.getStyleRules(this.props.html)});
        });
    }

    getStyleSheet = (className) => {
        for (let i = 0; i < document.styleSheets.length; i++) {
            for (let j = 0; j < document.styleSheets[i].cssRules.length; j++) {
                if(document.styleSheets[i].cssRules[j].cssText.includes(className)) {
                    return document.styleSheets[i]
                }
            }
        }
    }

    getStyleRules = (className) => {
        let ruleText = "";
        let sheet = this.getStyleSheet(className);
        let animationNames = [];

        for(let i = 0; i < sheet.cssRules.length; i++) {
            ruleText += sheet.cssRules[i].cssText + "\n" ;
            if(sheet.cssRules[i].cssText.includes("animation:")){
                animationNames.push(sheet.cssRules[i].style.animationName)
            }
        }

        for(let i = 0; i < sheet.cssRules.length; i++) {
            if(sheet.cssRules[i].type === 7 && animationNames.includes(sheet.cssRules[i].name)) {
                ruleText += sheet.cssRules[i].cssText + "\n" ;
            }
        }

        ruleText = this.formatRuleText(ruleText, className);

        return ruleText;
    }

    formatRuleText = (ruleText, className) => {
        let demoClass = ruleText.split(className + " ");
        ruleText = className + " " + demoClass.join("");
        ruleText = ruleText.replace(/{/g, "{\n   ");
        ruleText = ruleText.replace(/}/g, "}\n");
        ruleText = ruleText.replace(/;/g, ";\n   ");
        ruleText = ruleText.replace(/ {4}}/g, "}");

        return "\n" + ruleText;
    }

    analyzeCodeRow = (codeRowText) => {
        let analysis = {
            hasAttribute: false,
            attributeCount: 0,
            attributeList: [],
            elementTag: ""
        };

        analysis.elementTag = codeRowText.split("")[0].replace("<", "");

        let div = document.createElement("div");
        div.innerHTML = codeRowText;
        console.log(div);
        
        let actualElement = div.firstChild;
        console.log(actualElement.attributes);
        console.log(actualElement.innerText);

        if(codeRowText.includes("class=")){
            analysis.attributeCount++;
            analysis.hasAttribute = true;
        }
    }

    formatHTMLText = (className) => {
        if(document.querySelector(className) !== null){
            let text = `${document.querySelector(className).innerHTML}`;
            
            text = `<div class="${document.querySelector(className).classList.value}">` + text + "</div>"
            text = text.replace(/>/g, ">\n");
            text = text.replace(/</g, "\n<");
            let textArray = text.split('\n').filter(t => t !== "");

            this.analyzeCodeRow(textArray[2]);

            let formattedText = "";
            let breakTags = [ "<div", "</div", "<h1", "<h2", "<h3", "<h4", "<a", "<p", "<img", "<svg", "<path", "<ul", "<li", "</ul>", "</li>", "</a>", "<svg", "</svg>", "<butt", "<span", "</span" ];
            let indenters = [ "<div", "<ul", "<li", "<a", "<svg", "<span" ];
            let outdenters = [ "</div", "</ul>", "</li>", "</a>", "</svg>", "</span>" ];
            let indentCount = 0;

            textArray.forEach(t => {
                if (breakTags.filter(tag => t.includes(tag)).length > 0) {
                    formattedText += "\n"
                    if(indenters.filter(i => t.includes(i)).length > 0){
                        indentCount++;
                        for(let i = 0; i < indentCount; i++){
                            formattedText += "    ";
                        }
                    } else if(outdenters.filter(i => t.includes(i)).length > 0){
                        for(let i = 0; i < indentCount; i++){
                            formattedText += "    ";
                        }
                        indentCount--;
                    } else {
                        for(let i = 0; i < indentCount + 1; i++){
                            formattedText += "    ";
                        }
                    }
                    formattedText += t;
                } else {
                    formattedText += t;
                }
            })

            return formattedText;
        }
    }

    render(){
        return (
            <div className="code-box">
                <div className="code-selection-box">
                    <button id="html" className="code-selection-button" ><FontAwesomeIcon icon={faHtml5} onClick={() => this.switchCode("html")}/></button>
                    <button id="css" className="code-selection-button" ><FontAwesomeIcon icon={faCss3Alt} onClick={() => this.switchCode("css")}/></button>
                    <h3>Toggle between HTML and CSS Code</h3>
                </div>
                <div className="code-display-box">
                    <pre>
                        { 
                            this.state.html &&
                            <code>
                                <div><span>{this.state.htmlCode}</span></div>
                            </code>
                        }
                        {
                            this.state.css &&
                            this.state.cssCode
                        }
                    </pre>
                </div>
            </div>
        );
    }
}