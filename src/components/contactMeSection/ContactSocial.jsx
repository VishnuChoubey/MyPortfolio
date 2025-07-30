import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://linkedin.com/in/vishnu-choubey-b92202258/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/VishnuChoubey"
        Icon={FiGithub}
      />
    </div>
  );
};

export default ContactSocial;
