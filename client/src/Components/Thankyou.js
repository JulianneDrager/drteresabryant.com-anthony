import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ThankyouStyle from "./Thankyou.module.css";
import Wrapper from "./ui/Wrapper";

const ThankyouGeneral = () => {
  const { name } = useParams();
  //   console.log(name);
  const cardWrapper = ThankyouStyle.cardWrapper;
  const innerCardWrapper = ThankyouStyle.innerCardWrapper;
  const cardBody = ThankyouStyle.cardBody;

  return (
    <>
      <Wrapper className="contactBody"></Wrapper>

      <Wrapper className={cardWrapper}>
        <Wrapper className={innerCardWrapper}>
          <Wrapper className={cardBody}>
            <h1>
              Hello <b>{name}</b>
            </h1>
            <h2>
              Thank you for contacting Dr Teresa J. Bryant. She will contact you
              shortly!
              <br />
            </h2>

            <br />
            <Button style={{ cursor: "initial" }} variant={"dark"}>
              IF YOU WOULD LIKE TO SUPPORT PLEASE GO TO Venmo: @DRTERESABRYANT
            </Button>

            <Button
              style={{
                marginTop: "1rem",
                background: "none",
                border: "none",
                color: "black",
              }}
              href="/"
            >
              Back to Website
            </Button>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};
export default ThankyouGeneral;
