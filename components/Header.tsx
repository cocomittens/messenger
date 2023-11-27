import Contact from "./Contact";

type User = {
  username: string;
  image: string;
};

const Header = ({ username, image }: User) => {
  return <Contact username={username} image={image} />;
};

export default Header;
