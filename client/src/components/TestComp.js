import { useState } from "react";
import DisplayText from "./DisplayText";
import { Container, Jumbotron } from "react-bootstrap";

/* 
1. counter and setCounter are set by useState (counter set to 0)
2. button is created with an onClickHandler that gets called when clicked
3. onClickHandler increments counter whenever called
4. DisplayText component is used to display the counter
5. "text" is passed into DisplayText as a prop
*/

const TestComp = () => {
  // Set counter as state variable, and setCounter as associated function
  const [counter, setCounter] = useState(0);
  const buttonText = "Increment Counter";
  // Click handler, function gets called whenever button is clicked
  const onClickHandler = () => {
    // Define state function for state variable
    setCounter(counter + 1);
  };
  return (
    <Container className="mt-4">
      <Jumbotron>
        <div className="TestComp">
          <h1>Test Comp Starts Here</h1>
          {/* Calls onClickHandler whenever button is clicked */}
          <button onClick={onClickHandler}>{buttonText}</button>
          {/* text property gets passed in as prop to DisplayText comp, 
      counter is passed in as state variable (useState above) */}
          <DisplayText text={`Button was clicked ${counter} times`} />
          {/* Does the same as above comp*/}
          <h2>Button was clicked {counter} times too</h2>
          <h1>Test Comp Ends Here</h1>
        </div>
      </Jumbotron>
    </Container>
  );
};

export default TestComp;
