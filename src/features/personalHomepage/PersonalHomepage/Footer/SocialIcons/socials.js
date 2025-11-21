import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/Adam-Musial-AMu",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100012331151586",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/adammusial/",
    Icon: styleIcon(LinkedinIcon),
  }, 
  /*
  {
    name: "Instagram",
    url: "https://www.instagram.com/a_musial/",
    Icon: styleIcon(InstagramIcon),
  },*/
];
