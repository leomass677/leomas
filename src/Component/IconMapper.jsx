// components/IconMapper.jsx
import {
  FaGithub,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const iconMap = {
  FaGithub,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  MdMarkEmailUnread,
};

const IconMapper = ({ name, className, size = 20, color }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} color={color} />;
};

export default IconMapper;
