import { useContext } from 'react';
import { MyContext } from '../../context';

import someImg from '../Home/homeBanner.jpg'
const PreSellingItemList = (props) => {
    // console.log(props.index);
    const context = useContext(MyContext);

    const handleShowDivIndex = context.handleShowDivIndex;
    const item = props.items;
    const divIndex = props.index;

    const cardBackground = {
        backgroundImage: `url(${someImg})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '30rem',
        position: 'relative'
    };

    const itemList = () => {
        return <div
            key={item.id}
            className='card-properties'
            data-aos="fade-up"
            data-aos-duration="1000"
            data-index={divIndex}
            onClick={handleShowDivIndex}
        >
            <div className='card-properties-image-container' style={{ ...cardBackground }}>
                <p className='card-status'>{item.status}</p>
            </div>
            <div className='card-info'>
                <h3>{item.name}</h3>
                <p className='font-blue font-size-15rem margin-zero'>{item.cardDiscount}</p>
                <p className='font-blue font-size-15rem margin-zero'>{item.cardPrice}</p>
                <p>{item.cardDescription}</p>
                <p><span><i className='fa-solid fa-location-dot'></i></span> {item.cardAddress}</p>
            </div>
        </div>
    }

    return (
        <>
            {itemList()}
        </>
    )
}

export default PreSellingItemList;