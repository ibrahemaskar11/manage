import logoImage from "../assets/logo-white.png";
import facebookImage from "../assets/icon-facebook.png";
import youtubeImage from "../assets/icon-youtube.png";
import twitterImage from "../assets/icon-twitter.png";
import pintrestImage from "../assets/icon-pinterest.png";
import instagramImage from "../assets/icon-instagram.png";
const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between mx-auto px-6 py-10 space-y-8 md:space-y-0 md:space-x-2 md:flex-row">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mt-9 md:mt-0">
            <img src={logoImage} className="h-8" alt="" />
          </div>
          <div className="flex space-x-3 justify-center">
            <a href="#">
              <img src={facebookImage} className="h-8" alt="" />
            </a>
            <a href="#">
              <img src={youtubeImage} className="h-8" alt="" />
            </a>
            <a href="#">
              <img src={twitterImage} className="h-8" alt="" />
            </a>
            <a href="#">
              <img src={pintrestImage} className="h-8" alt="" />
            </a>
            <a href="#">
              <img src={instagramImage} className="h-8" alt="" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:brightRed">
              Home
            </a>
            <a href="#" className="hover:brightRed">
              Pricing
            </a>
            <a href="#" className="hover:brightRed">
              Products
            </a>
            <a href="#" className="hover:brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:brightRed">
              Careers
            </a>
            <a href="#" className="hover:brightRed">
              Community
            </a>
            <a href="#" className="hover:brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 py-2 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
