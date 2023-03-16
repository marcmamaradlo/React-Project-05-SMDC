import React, { Component } from "react";
import preSellingJSON from '../components/preSelling.json';
import PreSellingItemList from "../components/Pre-Selling/preSellingItemList";
// import PreSellingSingleItem from "../components/Pre-Selling/PreSellingSingleItem";

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        preSellingJSON: preSellingJSON,
        preSellingIndex: '',
        divIndex: 0
    }

    handlePreSellingMapFunction = () => {
        return this.state.preSellingJSON.map((items, index) => (
            <PreSellingItemList items={items} index={index} />
        ))
    }

    handleButtonClick = () => {
        console.log('button is Clicked!!');
    }

    handleShowDivIndex = (e) => {
        this.setState({ divIndex: parseInt(e.currentTarget.dataset.index) })
        // const singleItemIndex = this.state.divIndex;
        // return <PreSellingSingleItem value={this.state.divIndex} />
    }


    render() {

        // console.log(this.state.preSellingJSON[0])
        // console.log(this.state.divIndex)
        // console.log(this.state.preSellingJSON[this.state.divIndex])

        const {
            handlePreSellingMapFunction, handleButtonClick, handleShowDivIndex,
            state
        } = this;

        return (
            <MyContext.Provider
                value={{
                    handlePreSellingMapFunction, handleButtonClick, handleShowDivIndex,
                    state
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };
