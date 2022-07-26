import avatartAnisha from "../assets/avatar-anisha.png";
import avatartAli from "../assets/avatar-ali.png";
import avatarRichard from "../assets/avatar-richard.png";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <ul className="items-center flex flex-col mt-24 md:flex-row md:space-x-6">
          <li className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGrey md:w-1/3">
            <img src={avatartAnisha} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue max-w-sm">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </li>
          <li className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGrey md:flex md:w-1/3">
            <img src={avatartAli} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue max-w-sm">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </li>
          <li className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGrey md:flex md:w-1/3">
            <img src={avatarRichard} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-darkGrayishBlue max-w-sm">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </li>
        </ul>
        <div className="my-16">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
