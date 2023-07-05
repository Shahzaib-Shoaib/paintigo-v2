import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";
const { widgets, payment } = footer;

const Footer: React.FC = () => (
  <footer className="bg-white border-b-4 border-black mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-5">
    <Widgets widgets={widgets} />
    <Copyright payment={payment} />
  </footer>
);

export default Footer;
