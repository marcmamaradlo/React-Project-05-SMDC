import React, { Component } from "react";
import preSellingJSON from '../components/preSelling.json';
import PreSellingItemList from "../components/Pre-Selling/preSellingItemList";

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        preSellingJSON: preSellingJSON
    }

    handlePreSellingMapFunction = () => {
        return this.state.preSellingJSON.map((items) => (
            <PreSellingItemList items={items} />
        ))
    }

    handleButtonClick = () => {
        console.log('button is Clicked!!');
    }


    render() {

        console.log(this.state.preSellingJSON)

        const {
            handlePreSellingMapFunction, handleButtonClick,
            state
        } = this;

        return (
            <MyContext.Provider
                value={{
                    handlePreSellingMapFunction, handleButtonClick,
                    state
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };
