import React from "react";
import { useStateValue } from "./StateProvider";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="storyReel">
      {/* Story */}
      <Story
        image="https://static01.nyt.com/images/2021/06/23/business/23OnTech-Facebook/23OnTech-Facebook-facebookJumbo-v2.png"
        profileSrc={user.photoURL}
        title={user.displayName}
      />

      {/* Story */}
      <Story
        image="https://image.freepik.com/freie-psd/black-friday-sonderangebot-instagram-und-facebook-story-banner-vorlage_120329-1073.jpg"
        profileSrc="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s900-c-k-c0x00ffffff-no-rj"
        title="Sonny Sangha"
      />

      {/* Story */}
      <Story
        image="https://media.npr.org/assets/img/2020/03/25/ap_20085517237134-e9bb419b611df93184b754ff9b9cfe554a4d58d4.jpg"
        profileSrc="https://media.npr.org/assets/img/2020/03/25/ap_20085517237134-e9bb419b611df93184b754ff9b9cfe554a4d58d4.jpg"
        title="Putin"
      />

      {/* Story */}
      <Story
        image="https://dd20lazkioz9n.cloudfront.net/wp-content/uploads/2021/10/Copy-of-WP-News-story-template-58.jpg"
        profileSrc="https://images.beinsports.com/tyek8VDDBt1qPoEXP9jh-x4U3OU=/full-fit-in/1000x0/lionel-messi_qnaqolkzj2qr16y57d06vhh7x.jpg"
        title="Leo Messi"
      />

      {/* Story */}
      <Story
        image="https://swordstoday.ie/wp-content/uploads/2021/08/1_C4yGTDSLSz86TCakrza2HQ.jpeg"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQFrEuXGV7S8jw/profile-displayphoto-shrink_200_200/0/1600986017891?e=1651708800&v=beta&t=d51eOqwerU7cIcHCBRrdEkB_cJPZikP73tp4PhnMXNg"
        title="Feruzjon Majidov"
      />
    </div>
  );
}

export default StoryReel;
