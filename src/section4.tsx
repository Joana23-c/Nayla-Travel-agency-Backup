import './section4.scss';



export default function Section4(){
    return(
        <>
        <div className="why-wrapper">

            <div className="why">
                <div className="why__header">
                <p className="why__subtitle">The Nayla Difference</p>
                <p className="why__title">Why choose Nayla Travel Agency?</p>
                </div>

                <div className="why__icons">
                    <div className="why-iconsContainer">
                        <i className="fa-regular fa-compass"></i>
                        <p className="why-iconName">Personal advice</p>
                    </div>
                    <div className="why-iconsContainer">
                        <i className="fa-solid fa-ranking-star"></i>
                        <p className="why-iconName">Carefully selected offers</p>
                    </div>
                    <div className="why-iconsContainer">
                        <i className="fa-solid fa-shield-heart"></i>
                        <p className="why-iconName">Secure bookings</p>
                    </div>
                    <div className="why-iconsContainer">
                        <i className="fa-solid fa-hand-holding-hand"></i>
                        <p className="why-iconName">Support throughout your journey</p>
                    </div>
    
                </div>
            </div>

        </div>
        </>
    );
}