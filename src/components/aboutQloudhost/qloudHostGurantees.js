import Link from "next/link";
import { FaRegCircleCheck } from "react-icons/fa6";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/about.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const QloudHostGurantees = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { heading, subHeading, service } = data.data;

  return (
    <div className="paid-method-banner py-5">
      <div className="container">
        <h2 className="text-center mb-3 m-auto">{heading}</h2>
        <p className="text-center mb-5">{subHeading}</p>

        <div className="row mb-4">
          {service.map((serviceItem) => (
            <div key={serviceItem.id} className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body about-gurantee">
                  <div className="mb-3">
                    <span className="check-symbol">
                      <FaRegCircleCheck className="me-2 option-icon" />
                    </span>
                  </div>
                  <h5 className="method-title mb-3">{serviceItem.title}</h5>
                  <p className="card-method-text">{serviceItem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/" className="btn-primary m-auto d-flex justify-content-center">
          <button className="btn-primary start-now-btn enterprise-btn me-3">
            Get Started Now
            <i className="ms-4 start-now-icon">→</i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QloudHostGurantees;
