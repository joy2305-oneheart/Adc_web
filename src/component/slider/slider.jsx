import React from 'react';
import Card from '../card/card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../slider/slider.scss'

const Slider = () => {
  // Array to hold card data for 10 iterations
  const cardData = Array.from({ length: 10 }).map((_, index) => ({
    key: index,
    imageUrl: "public/images/Image1.jpg",
    title: "Worship",
    description: "We believe in worshiping God with all our heart and in truth and spirit for who he is..."
  }));

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={5000}
      centerMode={true}
      className=""
      containerClass="container"
      customButtonGroup={<button></button>}
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={true} // Set infinite to true for looping
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      showDots ={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {cardData.map(card => (
        <Card
          key={card.key}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </Carousel>
  );
};

export default Slider;
