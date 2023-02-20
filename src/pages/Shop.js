import Header from "../components/Header";
import Footer from "../components/Footer";
import bawo from "../images/bawo.jpg";
import faith from "../images/faith.jpg";
import cisco from "../images/cisco.jpg";
import jenny from "../images/Jenny.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CardDisplay from "../components/CardDisplay";

function Shop(props){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 4 // this is needed to tell the amount of px that should be visible.
        }
      }
    return(
        <div className="Shop">
            <div className="carton">
                <Header
                    setHide={props.setHide}
                    category = 'Shop'
                    icon = 'https://cdn1.iconfinder.com/data/icons/shopping-346/24/happy-bag-cart-shop-shopping-64.png'
                />
                <div className="top">
                    <Carousel 
                    responsive={responsive}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={5000}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    partialVisible={true}
                    >
                        <CardDisplay
                            image = {jenny}
                            writeUp= 'Go around confidently with the best scent. We offer the best fragrances which would make everyone notice you.'
                        />
                        <CardDisplay
                            image = {jenny}
                            writeUp= 'Go around confidently with the best scent. We offer the best fragrances which would make everyone notice you.'
                        />
                        <CardDisplay
                            image = {jenny}
                            writeUp= 'Go around confidently with the best scent. We offer the best fragrances which would make everyone notice you.'
                        />
                        <CardDisplay
                            image = {jenny}
                            writeUp= 'Go around confidently with the best scent. We offer the best fragrances which would make everyone notice you.'
                        />
                        <CardDisplay
                            image = {jenny}
                            writeUp= 'Go around confidently with the best scent. We offer the best fragrances which would make everyone notice you.'
                        />
                    </Carousel>
                </div>
                <div className="middle">
                    <CardDisplay
                        image = {bawo}
                        writeUp= "Looking elegant isn't enough, smell nice too and feel like a boss."
                    />
                    <CardDisplay
                        image = {faith}
                        writeUp= 'Smile nice, smell nice!'
                    />
                </div>
                <div className="down">
                    <CardDisplay
                        image = {cisco}
                        writeUp= 'The best deodourants tailored to your personal wants'
                    />
                </div>
            </div>
            <Footer cartItems= {props.cartItems} starItems= {props.starItems}/>
        </div>
    )
}
export default Shop;