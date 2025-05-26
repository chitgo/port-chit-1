import mailIcon from "../assets/mail-icon.svg";
import mapIcon from "../assets/map-location.svg";

function Contact() {
  return (
    <section
      className="px-4 py-24 text-center sm:px-8 md:px-12 lg:px-20 2xl:px-40 bg-[#B3C8CF]"
      id="contact"
    >
      <h2 className="text-2xl font-bold text-primary">Contact</h2>
      <h2 className="mt-6 text-3xl font-semibold">
        Let’s connect!
        <br />
        I’m open to opportunities and collaborations.
      </h2>
      <div className="flex flex-col items-center mt-8 ">
        <img
          src={mapIcon}
          alt="location"
          className="p-3 rounded-full shadow-xl"
        />
        <p className="font-bold text-[27px]">Location</p>
        <p className="text-[##767676] hover:text-primary cursor-pointer text-[27px] ">
          Athens, Greece
        </p>
      </div>
      <div className="flex flex-col items-center mt-4">
        <img
          src={mailIcon}
          alt="location"
          className="p-3 rounded-full shadow-xl "
        />
        <p className="font-bold text-[27px]">Email</p>
        <a
          href="mailto:kostas.chitos@gmail.com"
          className="text-[##767676] cursor-pointer hover:text-primary text-[27px]"
        >
          kostas.chitos@gmail.com
        </a>
      </div>
    </section>
  );
}
export default Contact;
