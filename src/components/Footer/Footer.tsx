import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

function Footer() {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-[#F27405] text-2xl">
          Hotelzz
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Contact</h4>

        {/* Main footer content */}
        <div className="flex flex-wrap gap-16 items-start justify-between">
          {/* Contact Info */}
          <div className="flex-1">
            <p>Some Road</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">pringleshowboi</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">021-345-6789</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">pringleshowboi</p>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex-1 md:text-right">
            <p className="pb-4">Our Mission</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Our Privacy Commitment</p>
            <p className="pb-4">Terms of Service</p>
            <p>Customer Assistance</p>
          </div>

          {/* Links Column 2 */}
          <div className="flex-1 md:text-right">
            <p className="pb-4">Dining Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-amber-400 h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  );
}

export default Footer;
