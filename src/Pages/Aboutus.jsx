import React from "react";
import "../App.css";

const Aboutus = () => {
  return (
    <div className="bg-black text-white relative my-0">
      <div className="w-full">
        <img src="./layered-waves-haikei.svg" alt="" className="w-full m-0" />
      </div>
      <div className="w-[100%] text-center justify-center h-screen relative">
        <h1 className="text-9xl relative z-10">
          {" "}
          {/* Add relative and z-10 */}
          <p className="gradient-text-header mt-[-120px] -z-50">
            Medline Pharmaceuticals
          </p>
        </h1>
        <span className="italic text-2xl gradient-text-sub ">
          Empowering Health, Enriching Lives - Your Trusted Pharmaceutical
          Partner.
        </span>
        <div className="mt-[150px] text-4xl w-[80%] text-center justify-center mx-auto m-10 leading-[50px]">
          <p>
            Established in 2006, Medline Pharmaceuticals Pvt. Ltd. stands as a
            beacon of excellence in the pharmaceutical industry. Headquartered
            in Chennai, Tamil Nadu, our state-of-the-art manufacturing facility
            spans 7800 sq.ft. across 2 floors and a basement. We specialize in
            the production of high-quality tablets, liquids, and capsules,
            delivering exceptional pharmaceutical solutions since our inception.
          </p>
        </div>
      </div>

      {/* vision part */}
      <div className="flex background-div pb-[200px] my-0">
        <h1 className="text-8xl z-10 relative gradient-text-sub w-[50%] my-[150px] mx-10">
          OUR VISION
        </h1>
        <div className="w-[50%] text-3xl my-[150px] mx-10">
          <span>
            To be a global leader in pharmaceutical manufacturing, committed to
            unparalleled quality and unwavering trust.
          </span>
        </div>
      </div>

      {/* mission part */}
      <div className="flex background-div-flipped">
        <div className="my-[100px] w-full flex">
          <div className="w-[40%] text-3xl my-[250px] ml-10 ">
            <span>
              To provide superior pharmaceutical products, leveraging
              cutting-edge technology, dedicated expertise, and a commitment to
              ethical practices.
            </span>
          </div>
          <div className="w-[60%] text-3xl">
            {" "}
            {/* Added a new container */}
            <h1 className="text-8xl z-10 relative gradient-text-sub my-[250px] ml-[150px]">
              OUR MISSION
            </h1>
          </div>
        </div>
      </div>

      {/* div containing both core and expertise part */}
      <div className="">
        {/* core values part */}
        <div className="mb-[100px] pt-[100px]">
          <h1 className="text-9xl gradient-text-list-header-reverse text-center">
            OUR CORE VALUES
          </h1>
        </div>

        <ul className="w-[80%] justify-center mx-auto text-left list-disc	">
          <li className="text-4xl mb-10 leading-[50px] ">
            <span className="font-semibold gradient-text-list-header">
              Quality First :{" "}
            </span>{" "}
            We prioritize the quality of our products above all else, adhering
            to stringent international standards.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-header">
              Trust :{" "}
            </span>{" "}
            Building enduring relationships with our clients and partners based
            on trust and reliability.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-header">
              Service Excellence :{" "}
            </span>{" "}
            We view our work as a service, going beyond mere business
            transactions to deliver exceptional value.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-header">
              Innovation :{" "}
            </span>{" "}
            Embracing innovation to enhance our products and processes
            continually.
          </li>
        </ul>

        {/* Manufacturing Expertise */}
        <div className="mb-[60px] mt-[300px]">
          <h1 className="text-8xl gradient-text-list-header text-center leading-[150px] uppercase">
            Manufacturing Expertise
          </h1>
        </div>
        <h2 className="text-6xl gradient-text-list-header-reverse text-center w-[90%] justify-center mx-auto mb-[60px]">
          Our facility is divided into specialized sections:
        </h2>
        <ul className="w-[80%] justify-center mx-auto text-left list-disc	">
          <li className="text-4xl mb-10 leading-[50px] ">
            <span className="font-semibold gradient-text-list-header">
              Tablet Section :{" "}
            </span>{" "}
            Where precision meets formulation, ensuring every tablet is a
            testament to quality.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-header">
              Oral Liquid Section :{" "}
            </span>{" "}
            Crafting liquid formulations that are both effective and palatable.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-header">
              Capsules Section :{" "}
            </span>{" "}
            Expertly encapsulating pharmaceutical solutions for ease of
            consumption.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-header">
              Quality Control Laboratory :{" "}
            </span>{" "}
            Equipped with advanced instruments including HPLC, UV Spectrometer,
            Dissolution Apparatus, KF Titrimeter, Freeability Tester, PH-Meter,
            and D.T. Apparatus, ensuring the highest quality standards are met.
          </li>
        </ul>
      </div>

      <div className="w-full mt-[200px]">
        <img
          src="./layered-waves-haikei-red-yellow.svg"
          alt=""
          className="w-full m-0 origin-center rotate-180"
        />
      </div>
      <div className="w-full">
        <img
          src="./layered-waves-haikei-red-yellow.svg"
          alt=""
          className="w-full mb-[50px]"
        />
      </div>

      {/* certifications part */}
      <div className="mb-[150px]">
        <div className="mb-[50px]">
          <h1 className="text-8xl gradient-text-list-header-2 text-center leading-[150px] uppercase">
            Our Certifications
          </h1>
        </div>
        <div className="mb-[100px]">
          <h2 className="text-4xl justify-start mx-auto text-center w-[90%] text-[#a362ce]">
            At Medline Pharmaceuticals Pvt. Ltd., we are proud holders of
            various certifications, ensuring the highest standards of quality
            and compliance:
          </h2>
        </div>
        <ul className="w-[80%] justify-center mx-auto text-left list-disc	">
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-item">
              ISO Certification :{" "}
            </span>{" "}
            We are ISO certified, adhering to the international standards of
            quality management and demonstrating our dedication to quality
            assurance.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-item">
              GMP (Good Manufacturing Practice) Certification :{" "}
            </span>{" "}
            Our adherence to GMP guidelines guarantees the production of
            pharmaceuticals of the highest quality, safety, and efficacy.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-item">
              Udyog Aadhar :{" "}
            </span>{" "}
            Recognized under the Udyog Aadhar scheme, we are a registered
            entity, contributing significantly to the growth of the
            pharmaceutical sector in India.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-item">
              MSME Certification :{" "}
            </span>{" "}
            As a Micro, Small, and Medium Enterprises (MSME) certified company,
            we actively contribute to the economic development of the region.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-item">
              Drug License :{" "}
            </span>{" "}
            We possess a valid Drug License, ensuring that our pharmaceutical
            products comply with all legal and regulatory requirements.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-item">
              Health and Sanitary Certifications :{" "}
            </span>{" "}
            Our manufacturing facility adheres to strict health and sanitary
            standards, creating a safe and hygienic environment for
            pharmaceutical production.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-item">
              Fire Safety Certification :{" "}
            </span>{" "}
            We are equipped with advanced fire safety measures and possess the
            necessary certifications to ensure the safety of our employees and
            assets.
          </li>
          <li className="text-4xl mb-10 leading-[50px]">
            <span className=" font-semibold gradient-text-list-item">
              IE Code Certification :{" "}
            </span>{" "}
            Our company complies with all the necessary regulations and
            procedures to obtain an Importer Exporter (IE) Code. We have
            successfully secured our IE Code, which is essential for our
            international trade operations, ensuring that we meet the legal
            requirements for importing and exporting goods and services in
            accordance with Indian trade and commerce laws.
          </li>
        </ul>
      </div>

      {/* market presence */}
      <div className="">
        <div className="mb-[50px]">
          <h1 className="text-8xl gradient-text-header-3 text-center leading-[150px] uppercase">
            market presence
          </h1>
          <div className="w-full">
            <img
              src="./stacked-waves-haikei-seperator.svg"
              alt=""
              className="w-full mb-[50px]"
            />
          </div>
        </div>
        <div className="text-5xl w-[90%] text-center mx-auto">
          We have successfully supplied pharmaceutical products to more than 300
          clients across India. Our reach extends to various regions, especially
          in the South, including Tamil Nadu, Puducherry, Andhra Pradesh,
          Karnataka, and Kerala. Additionally, we have been proud suppliers for
          Government Tenders since 2016.
        </div>
      </div>

      <div className="w-full mt-[100px]">
        <img
          src="./stacked-waves-haikei-yellow-seperator.svg"
          alt=""
          className="w-full m-0 origin-center rotate-180"
        />
      </div>

      {/* team part */}
      <div className="mt-[100px]">
        <div className="mb-[50px]">
          <h1 className="text-8xl gradient-text-header-4 text-center leading-[150px] uppercase">
            our team
          </h1>
        </div>
        <div className="text-5xl w-[90%] text-center mx-auto">
          At Medline Pharmaceuticals Pvt. Ltd., we attribute our success to our
          dedicated team. Our Managing Director, along with our proficient
          Production Manager, Quality Manager, and technical staff, forms the
          backbone of our company. Their relentless hard work and unwavering
          commitment have been instrumental in our growth.
        </div>
      </div>

      {/* commitment part */}
      <div className="mt-[250px]">
        <div className="mb-[50px]">
          <h1 className="text-8xl gradient-text-header-5 text-center leading-[150px] uppercase">
            Commitment to Excellence
          </h1>
        </div>
        <div className="w-[90%] text-5xl text-center mx-auto leading-[50px]">
          At Medline Pharmaceuticals Pvt. Ltd., we go beyond certificates and
          manufacturing expertise. We are committed to making a positive
          difference in the world by improving healthcare outcomes and enhancing
          the quality of life for people globally. Our holistic approach to
          healthcare encompasses quality, innovation, and compassionate service.
          Our doors are wide open, welcoming partnerships and collaborations
          that align with our values of quality, trust, and service excellence.
        </div>
      </div>

      <div className="w-full mt-[100px]">
        <img
          src="./layered-waves-haikei-blue-seperator.svg"
          alt=""
          className="w-full m-0 origin-center rotate-180"
        />
      </div>
      <div className="w-full ">
        <img
          src="./layered-waves-haikei-blue-seperator.svg"
          alt=""
          className="w-full m-0 origin-center"
        />
      </div>

      {/* get in touch part */}
      <div className="mt-[200px]">
        <div className="mb-[50px]">
          <h1 className="text-8xl gradient-text-header-6 text-center leading-[150px] uppercase">
            get in touch with us
          </h1>
        </div>

        <div className="flex mx-8 pb-[200px]">
          <div className="text-5xl w-[50%] gradient-text-header-7">
            Collaborate with Medline Pharmaceuticals Pvt. Ltd. and experience
            the embodiment of our values and commitment to excellence.
          </div>
          <div className="text-5xl w-[50%] leading-[60px]">
            <p>Medline Pharmaceuticals Pvt. Ltd.</p>
            <p>R. Sundara Raman, Managing Director.</p>
            <p>Phone: +91-9841631918</p>
            <div className="border border-solid border-red-400 p-1 rounded-2xl my-5">
              <p>
                <a href="mailto:med_line@yahoo.co.in">
                  <p className="text-center text-red-300">
                    med_line@yahoo.co.in
                  </p>
                </a>
              </p>
            </div>

            <div className="border border-solid border-blue-500 p-1 rounded-2xl">
              <a
                href="https://www.linkedin.com/services/page/b691aa326191a79507/"
                className="text-sky-200"
              >
                <p className="text-center">Check out our LinkedIn Profile</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

// old one