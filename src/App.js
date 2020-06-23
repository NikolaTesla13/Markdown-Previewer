import React, { Component } from 'react';
import marked from 'marked';
import './App.css';

function translate() {
  try {
    var text = document.getElementById("editor").value
    document.getElementById("preview").innerHTML = text;
  } catch(err) {}
}

class App extends Component {

  componentWillMount() {
    setInterval(() => {
      this.translate()
    }, 1)
  }
  translate() {
    try {
      var text = document.getElementById("editor").value
      document.getElementById("preview").innerHTML = marked(text);
    } catch(err) {}
  }
  
  render() {
    return (
      <div className="App">
        <div className="write">
          <textarea type="text" id="editor" className="area" onKeyDown={translate()}></textarea>
        </div>
        <div className="view" id="preview"></div>
      </div>
    );
  }
}

export default App;
