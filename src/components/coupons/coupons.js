import React, { useState, useEffect } from "react";
import HeroComponent from '../commonComponent/heroComponent';
import CouponCard from './couponcard';
import MoneyBack from './moneyBack';
import Link from "next/link";

const Coupons = () => {
  const [data, setData] = useState(null); // State to store JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/coupons.json"); // Path to your JSON file in the public folder
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div>Loading...</div>;
  }

  // Destructure data for cleaner usage
  const { heroComponent, coupons } = data;
  
  return (
    <div>
      <HeroComponent
        title={heroComponent.title}
        description={heroComponent.description}
        button1Link={heroComponent.button1Link}
        button2Text={heroComponent.button2Text}
        button2Link={heroComponent.button2Link}
        imageSrc={heroComponent.imageSrc}
        moneyBackText={heroComponent.moneyBackText}
      />
      
      {coupons.map((coupon, index) => (
        <CouponCard
          key={index}
          title={coupon.title}
          discount={coupon.discount}
          description={coupon.description}
          subTitle={coupon.subTitle}
          buttonText={coupon.buttonText}
        />
      ))}

      <MoneyBack />
    </div>
  );
}

export default Coupons;
