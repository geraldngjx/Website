import dynamic from "next/dynamic";
import Card from "../components/accessories/Card";

const BgImage = dynamic(() => import("../components/accessories/BGImage"), {
  ssr: false,
});

function Homepage() {

  return (
  <Card>
  <BgImage />
    <h2> Gerald's Personal Website </h2>    
    <div>
    </div>
  </Card>);
}

export default Homepage;
