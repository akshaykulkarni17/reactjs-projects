import faker from "faker";
import React from "react";
import ReactDOM  from "react-dom";
import ApprovalCard from "./ApprovalCard";
import  CommentDetail  from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" img={faker.image.image()} time="Today at 4.00PM" text="Good"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" img={faker.image.image()} time="Today at 6.00PM" text="Nice"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" img={faker.image.image()} time="Yesterday 2.00AM" text="Beautiful"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App/>, document.querySelector("#root")
);