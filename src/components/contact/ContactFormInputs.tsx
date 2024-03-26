import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  icon?: JSX.Element;
  rows?: number;
}

const ContactFormInputs: Array<InputProps> = [
  {
    label: "Name",
    name: "user_name",
    placeholder: "Your Name",
    type: "text",
    icon: <BsPerson />,
  },
  {
    label: "Email",
    name: "user_email",
    placeholder: "Your Email",
    type: "email",
    icon: <MdOutlineEmail />,
  },
  {
    label: "Message",
    name: "message",
    placeholder: "Your Message",
    rows: 6,
  },
];

export default ContactFormInputs;
