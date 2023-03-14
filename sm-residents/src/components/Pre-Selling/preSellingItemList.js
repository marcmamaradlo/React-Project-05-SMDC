import someImg from '../Home/homeBanner.jpg'
const PreSellingItemList = (props) => {
    // console.log(item.id);
    const item = props.items;

    const cardBackground = {
        backgroundImage: `url(${someImg})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '30rem',
        position: 'relative'
    };

    const appendItems = () => {
        return <div className='card-properties' key={item.id} data-aos="fade-up" data-aos-duration="1000">
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
            {appendItems()}
        </>
    )
}

export default PreSellingItemList;