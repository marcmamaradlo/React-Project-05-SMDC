import { useContext } from "react";
import { MyContext } from "../../context";

import Navbar from "../Navbar";
import Email from "../Email";
import Footer from "../Footer";
// import PreSellingItemList from "./preSellingItemList";
import PreSellingSingleItem from "./PreSellingSingleItem";

const PreSelling = () => {

    const context = useContext(MyContext);
    const handlePreSellingMapFunction = context.handlePreSellingMapFunction;

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='text-filler'>
                    <p className='text-filler-title'>Pre-Selling Properties</p>
                    <p className='text-filler-info'>SMDC Preselling condominiums is a once in a lifetime opportunity to own a unit in prime locations while the price is low.</p>
                </div>
            </div>
            <div className='container'>
                <div className='card-properties-container'>
                    <PreSellingSingleItem />
                    {handlePreSellingMapFunction()}
                </div>
            </div>
            <Email />
            <Footer />
        </>
    )
}

export default PreSelling;