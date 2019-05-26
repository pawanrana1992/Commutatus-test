This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Language change logic inside application

High order component which will handle the language change in application

HOC `WithLanguage` component is high order component. It has methods like :

`1) in componentDIdMount` lifecycle handle the `.csv` file where all the matching sentences is available and convert it in json format with the help of `papaparse` library.
Here I handle default `<HTML lang="en">` and initial it will set the app language according to default html language.

```ssh
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
//read a csv file localy first need to use http request to red the file

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
                }
            };
            rawFile.send(null);
        }
        
```

`2) changeLang` it is a function which will handle the `select` onchange language value. It will available in children props.

```sh
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
```


`3) handleLanguage` It is a function which will change the html text with the desired language. it accept default text parameter. if given text is available in `.csv` file then it will return matches language data. else it will return default given text.


```ssh

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

```

Above both methods are handling components language.


`4) render`method finally returning component with default props from this High order component so all the props and state is available in child components.

```ssh
render() {
            return (
                <Component handleLanguage={this.handleLanguage}
                           changeLang={this.changeLang} {...this.props} {...this.state} />

            );
        }
```


All the logic happening inside `WithLanguage` High order component only.

#### How to use this High order component in any component ?

just export that all component with this High order component.

example:

```ssh
class IndexPage extends React.Component {

    render() {
    // props will be avaible in this component so let's use in 
        const {
        handleLanguage, //it will change text according to app language
        changeLang, //it will handle languages drop down onchange event
        languages, //it has all type of languages in an array of object like [['English','en'],['Spanish','es']]
        activeLanguage, //default active language value for select dropdown. 
        
        } = this.props;
        render(
        <div className="page">
        
        //select language drop down
            <div className="select-box-custom">
           
            <p className="content-text">
                //Pass text with the help of  props `handleLanguage(text)` method.
               
                <strong>{handleLanguage(`Why do we provide Global Volunteer experiences?`)}</strong>
           </p>
            
                    <div className="custom-footer-select dropup">
                      <select name="lang" id="" value={activeLanguage} onChange={(e) => changeLang(e)}>
                                {languages.map((ob, i) => (
                                    <option value={ob[0]} key={i}>{ob[0]}</option>
                                ))}
                            </select>
                    </div>
             </div>
        </div>
        
        
            )
        }
}

export default WithLanguage(IndexPage);
```