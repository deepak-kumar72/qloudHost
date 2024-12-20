import Link from "next/link";
import Image from "next/image";

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

const AboutFeatures = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { section } = data;

  return (
    <div className="privacy-hardware-container mt-5">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              className="img-fluid"
              width={1000}
              height={1000}
            />
          </div>
          <div className="col-md-6 about-sec">
            <h2>{section.heading}</h2>
            <h4 className="mb-3 w-100">{section.subheading}</h4>
            {section.paragraphs.map((paragraph, pIdx) => (
              <p key={pIdx}>
                {paragraph.content.map((part, idx) => {
                  if (part.type === "text") {
                    return <span key={idx}>{part.content}</span>;
                  } else if (part.type === "link") {
                    return (
                      <Link key={idx} href={part.url} className="faq-link">
                        {part.content}
                      </Link>
                    );
                  }
                  return null;
                })}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
