import React from 'react';
import HeroComponent from '../commonComponent/heroComponent';
import images from '../../constants/images';
import CouponCard from './couponcard';
import MoneyBack from './moneyBack';

const Coupons = () => {
  return (
    <div>
      <HeroComponent
        title="QloudHost Coupon Codes and Promotions"
        description="Save big on DMCA Ignored web hosting with QloudHost! Check out our coupon codes and promotions for discounts on shared, VPS Servers. Don’t miss out – check out QloudHost today!"
        button1Text="Explore Coupons"
        button1Link=""
        button2Text="Explore Coupons"
        button2Link="" // Link for the second button
        imageSrc={images.heroImage2}
        moneyBackText="14-Day Money-Back Guarantee"
        
      />
      <CouponCard
         title="10% Off on All VPS Hosting Yearly Plans"
        discount="Flat 10% OFF on Annual VPS Plans"
        description="New customers can save 10% on all yearly plans for any VPS hosting plans by using coupon code ADD10. Choose from a range of Offshore DMCA Ignored VPS plans to get reliable and efficient service at a discounted price. Don’t miss out on this limited-time offer and sign up today!"
        subTitle="(New Customers Only)"
        buttonText="ADD10"
      />
      <CouponCard
         title="Instant 5% OFF on All VPS Semiannual Plans"
        discount="5% OFF For Semi-Annual VPS"
        description="New customers can get 5% off their Semi-Annual VPS hosting plan with coupon code Qloud5. Choose a flexible plan to suit your needs and experience reliable and efficient hosting service at an unbeatable price. Don’t miss out on this limited-time offer, sign up today and enjoy the savings!"
        subTitle="(New Customers Only)"
        buttonText="Qloud5"
      />
      <CouponCard
         title="Flat 15% OFF on all Shared and WordPress Annual/TriAnnual Plans"
        discount="Flat 15% OFF"
        description="Save an extra 15% on all shared and WordPress hosting Plans. On Shared & WordPress Plans you will get 15% OFF on Annual and TriAnnual Plans. Choose a plan that fits your needs and enjoy high-performance hosting at a discounted price. Don’t miss out on this limited-time offer!"
        subTitle=""
        buttonText="SAVE15"
      />
      <CouponCard
         title="Flat 5% OFF on All Dedicated Server Plans"
        discount="Flat 5% OFF"
        description="Save an extra 5% OFF on all Dedicated Server Plans On their Quarterly and Semi-Annual Plans. Choose a plan that fits your needs and enjoy high-performance hosting at a discounted price. Don’t miss out on this limited-time offer!"
        subTitle="(New Customers Only)"
        buttonText="SAVEBIG"
      />

      <MoneyBack/>

    </div>
  )
}

export default Coupons
