import React from "react";
import { Button, Image } from "react-bootstrap";
import PrayerStyle from "./PrayerStyle.module.css";
import { useMediaQuery } from "@mui/material";
import SupportGallery from "./SupportGallery";
import PoliticalGallery from "./PoliticalGallery";

const MenuSection = () => {
  const clickHereWrapper = PrayerStyle.clickHereWrapper;
  const clickHereBtn = PrayerStyle.clickHereBtn;
  const clickHereSowBtn = PrayerStyle.clickHereSowBtn;
  const btnStrip = PrayerStyle.btnStrip;
  const btnStrip2 = PrayerStyle.btnStrip2;
  const btnStrip3 = PrayerStyle.btnStrip3;
  const btnTextGive = PrayerStyle.btnTextGive;
  const btnTextCampaign = PrayerStyle.btnTextCampaign;
  const btnTextConference = PrayerStyle.btnTextConference;
  const cardWrapper = PrayerStyle.cardWrapper;
  const cardChangeWrapper = PrayerStyle.cardChangeWrapper;
  const supportStyle = PrayerStyle.supportStyle;
  const supportH2Style = PrayerStyle.supportH2Style;
  const campSubTitleStyle = PrayerStyle.campSubTitleStyle;
  const campTitleStyle = PrayerStyle.campTitleStyle;
  const changePStyle = PrayerStyle.changePStyle;
  const matchsLg = useMediaQuery("(min-width:658px)");

  // const supportCard = <div className={btnTextGive}></div>;
  const supportButton = (
    <Button className={clickHereSowBtn}>Venmo: @DrTeresaBryant</Button>
  );

  const supportCard = (
    <>
      <div className={btnTextGive}>
        <h1 className={supportStyle}>Support & Give</h1>
        <div className={cardWrapper}>
          <h1 className={supportH2Style}>Dr. Teresa J Bryant, A Leader To Trust </h1>
          <p>
            More than a Reverend or a Paster, Dr Teresa shines bright with
            authenticity and compassion. More than a mother and faithful wife,
            Dr. Teresa is courageous and bold, with a heart of empathy for the
            people.
          </p>
          {supportButton}
        </div>
      </div>

    </>
  );

  const campaignButton = (
    <Button href={"https://www.bryantforsuffolk.com/"} className={clickHereBtn}>
      VOTE DR. TERESA J. BRYANT
    </Button>
  );

  const campaignCard = (
    <div className={btnTextCampaign}>
      <h1 className={campSubTitleStyle}>If You Want Change</h1>
      <h1 className={campTitleStyle}>Be The Change</h1>
      <div className={cardChangeWrapper}>
        <div className={changePStyle}>Elect Dr. Teresa J Bryant For:</div>
        <p style={{ margin: "0" }}>A Better Quality of Life</p>
        <p style={{ margin: "0" }}>Support For Law Enforcement</p>
        <p style={{ margin: "0" }}>Safer Neighborhoods</p>
        <p style={{ margin: "0" }}>Small Business Sustainability</p>
        <p style={{ margin: "0" }}>Awareness In Mental Health</p>
        <p style={{ margin: "0" }}>Developed and Expanded Infrastructure </p>
      </div>
      {campaignButton}
    </div>
  );

  const registerButton = (
    <Button href={"#contact"} className={clickHereBtn}>
      REGISTER NOW
    </Button>
  );

  const registerCard = (
    <div className={btnTextConference}>
      <h1 className={supportStyle}>B.A.D Girls '23</h1>
      <div className={cardWrapper}>
        <h1 className={supportH2Style}>
        Receive Healing, Deliverance & Restoration 
        </h1>
        <p style={{ margin: "0" }}>
          This year's Bad Girls Conference is an event you don't want to miss.{" "}
          <p style={{ margin: "0" }}>
            We empower, enlighten, and enhance the lives of women economically,
            professionally, and spiritually. Our desire is to be used by God to
            bring healing, deliverance, and restoration to God's people.
          </p>
        </p>
        {registerButton}
      </div>
    </div>
  );

  return (
    <>
      <div>
        <aside className={clickHereWrapper}>
          <div className={btnStrip}>
            <>
              <div>{supportCard}</div>
              <SupportGallery/>
            </>
          </div>

          <div className={btnStrip2}>
            <>
              <div>
                <div>{campaignCard}</div>
              </div>
              <PoliticalGallery/>
            </>
          </div>

          <div id="bad-girls" className={btnStrip3}>
            <div>{registerCard}</div>
          </div>
        </aside>
      </div>
    </>
  );
};
export default MenuSection;
