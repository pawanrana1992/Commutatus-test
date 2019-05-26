import React from "react";
import csvLang from "../../Services/language.csv";
import PapaPerse from "papaparse";

function WithLanguage(Component) {
    return class WithLanguage extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                languages: [],
                activeLanguage: '',
                languageData: [],
            };
            this.handleLanguage = this.handleLanguage.bind(this);
            this.changeLang  = this.changeLang.bind(this);
        }

        componentDidMount() {
            let rawFile = new XMLHttpRequest();
            rawFile.open("GET", csvLang, false);
            rawFile.onreadystatechange = () => {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status === 0) {
                        let allText = rawFile.responseText;
                        //handle csv file
                        PapaPerse.parse(allText, {
                            header: true,
                            complete: (data) => {
                                //deconstruct types of languages for shorthand html languages
                                let allLanguages = Object.keys(data.data[0]);
                                let arrangeLange = allLanguages.map(c => {
                                    switch (c) {
                                        case 'English': {
                                            return [c, 'en'];
                                        }
                                        case 'Spanish': {
                                            return [c, 'es'];
                                        }
                                        case 'Portuguese': {
                                            return [c, 'pt'];
                                        }
                                        case 'French': {
                                            return [c, 'fr'];
                                        }
                                        case 'Mandarin (Simplified)': {
                                            return [c, 'zh-Hans'];
                                        }
                                        case 'German': {
                                            return [c, 'de'];
                                        }
                                        case 'Polish': {
                                            return [c, 'pl'];
                                        }
                                        default: {
                                            break;
                                        }
                                    }
                                });
                                //set all converted data in state
                                this.setState({
                                    languageData: data.data,
                                    languages: arrangeLange,
                                }, () => {
                                    //initialize default language according to document language

                                    let docLang = document.getElementsByTagName('html')[0].lang;
                                    let checkDocLng = [];
                                    for (let m = 0; m < this.state.languages.length; m++) {
                                        let k = this.state.languages[m];
                                        if (k.indexOf(docLang) >= 0) {
                                            checkDocLng = this.state.languages[m];
                                            break;
                                        }
                                    }
                                    //set active language
                                    this.setState({
                                        activeLanguage: checkDocLng[0],
                                    })
                                })
                            }
                        })
                    }
                    else{
                        alert(`Can\'t resolve the language file from: ${JSON.stringify(csvLang)}`)
                    }
                }
            };
            rawFile.send(null);
        }

        //This function is shared with all childrens to update the text according to languages
        handleLanguage = (txt) => {
            let {languageData, languages, activeLanguage} = this.state;
            let obj = languageData.find(obj => {
                for (let n = 0; n < languages.length; n++) {
                    if (obj[languages[n][0]].toLowerCase() === txt.toLowerCase()) {
                        return obj;
                    }
                    break;
                }
            });
            //if word not matched just return default word
            if (!obj) {
                return txt;
            } else {
                //if language is change and data is matched it will return converted data
                return obj[activeLanguage];
            }
        };


        //shared function to children to change application language
        changeLang = (e) => {
            this.setState({
                activeLanguage: e.target.value,
            }, () => {
                let checkDocLng = [];

                for (let m = 0; m < this.state.languages.length; m++) {
                    let k = this.state.languages[m];
                    if (k.indexOf(this.state.activeLanguage) >= 0) {
                        checkDocLng = this.state.languages[m];
                        break;
                    }
                }
                document.getElementsByTagName('html')[0].lang = checkDocLng[1];
            })
        };

        render() {
            return (
                <Component handleLanguage={this.handleLanguage}
                           changeLang={this.changeLang} {...this.props} {...this.state} />

            );
        }
    }
}

export default WithLanguage;