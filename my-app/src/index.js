//Import react and react-dom
import React from "react";
import ReactDOM from "react-dom";

const getButtonText = () => {
  return "Click on me!";
};
// Create react component
const App = () => {
  return (
    <div>
      Hello there!
      <div>
        <label htmlFor="name" className="label">
          Enter lol name:
        </label>
        <input id="name" type="text"></input>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          type="submit"
        >
          {getButtonText()}
        </button>
      </div>
      <div>
        <table style={{ border: "1px solid red" }}>
          <tbody>
            <tr>
              <th>head1</th>
              <th>head2</th>
              <th>head3</th>
            </tr>
            <tr>
              <td>head1</td>
              <td>head2</td>
              <td>head3</td>
            </tr>
            <tr>
              <td>head1</td>
              <td>head2</td>
              <td>head3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
  //document.querySelector("#root")
);
