import HeroComponent from "@/components/commonComponent/heroComponent";
import CouponCard from "@/components/coupons/couponcard";
import MoneyBack from "@/components/coupons/moneyBack";
import ContactUs from "../contact-us";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/coupons.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const Coupon = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  // Destructure data for cleaner usage
  const { heroComponent, coupons } = data;

  return (
    <div>
      <HeroComponent
        title={heroComponent.title}
        description={heroComponent.description}
        button1Text={heroComponent.button1Text}
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

      <MoneyBack data={data}/>
      <ContactUs/>
    </div>
  );
};

export default Coupon;
