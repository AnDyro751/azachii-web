import React, { useEffect } from "react"
import MainBanner from "./MainBanner"
import HelpYou from "../HelpYou"
import WebPage from "../WebPage";
import {useMixpanel} from "gatsby-plugin-mixpanel";
import SimplePayments from "../SimplePayments";
import GetFreePage from "../GetFreePage";
import Tools from "../Tools";
import MainGetter from '../MainGetter';
import PerrosFelices from '../Projects/PerrosFelices';
import Mec from '../Projects/Mec';

const MainHome = () => {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("home_page")
  }, []);

  return (
    <>
      
      {/* <MainGetter 
        title="Producción multimedia"
        description="Producción multimedia para tu negocio o marca personal"
        contain="multimedia"
        tracker="get_multimedia"
        button_text="Solicitar presupuesto" /> */}
      <Tools />
      <SimplePayments />
      <GetFreePage />
    </>
  )
};

export default MainHome;
