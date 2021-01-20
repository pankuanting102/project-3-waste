import React from "react";
import ReactDOM from "react-dom";
import Score from "react-score-indicator";

import "./styles.css";
import { Box } from "./styled";

class Scale extends React.PureComponent {
    state = {
        value: 5
    };

    add = () => {
        this.setState({ value: this.state.value + 1 });
    };

    render() {
        return (
            <div className="Scale">
                <h1>Range Indicator</h1>
                <Box>
                    <Score
                        value={this.state.value}
                        maxValue={100}
                        borderWidth={30}
                        gap={5}
                        maxAngle={260}
                        rotation={90}
                        colors={[
                            "#d12000",
                            "#ed8d00",
                            "#f1bc00",
                            "#84c42b",
                            "#53b83a",
                            "#3da940",
                            "#3da940",
                            "#3da940"
                        ]}
                    />
                </Box>
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Scale />, rootElement);

export default Scale;
