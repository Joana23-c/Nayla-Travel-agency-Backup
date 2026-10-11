
import './section2.scss';

export default function Section2(){
    return(
        <>
        <div className="sevices-wrapper">

            <div className="services">
                <div className="services__header">
                <p className="services__subtitle">Our Services</p>
                <p className="services__title">Travel Made Simple</p>
                </div>

                <div className="services__icons">
                    <div className="iconContainer">
                        <i className="fa-regular fa-map"></i>
                        <p className="iconName">Vacation planning</p>
                    </div>
                    <div className="iconContainer">
                        <i className="fa-solid fa-plane"></i>
                        <p className="iconName">Flights</p>
                    </div>
                    <div className="iconContainer">
                        <i className="fa-solid fa-hotel"></i>
                        <p className="iconName">Accommodation</p>
                    </div>
                    <div className="iconContainer">
                        <i className="fa-solid fa-boxes-packing"></i>
                        <p className="iconName">Travel packages</p>
                    </div>
                    <div className="iconContainer">
                        <i className="fa-solid fa-hands-holding-circle"></i>
                        <p className="iconName">Tailor-made journeys</p>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}