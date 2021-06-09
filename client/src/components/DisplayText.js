// Used to simply show how props and states work (with TestComp.js)

// "text" is received as a prop from wherever the DisplayText
// commponent is used
const DisplayText = ({ text }) => {
    console.log("Component re-rendered");
    return <h3>{ text }</h3>;
};

export default DisplayText;