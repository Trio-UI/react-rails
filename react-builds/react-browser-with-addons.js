var React = require("react");
var ReactDOM = require("react-dom");


React.addons = require("./addons-object.js");

injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

window.React = React;
window.ReactDOM = ReactDOM;
