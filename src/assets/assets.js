import logo from './react.svg';
import menu from './menu_icon.svg';
import cross from './cross_icon.svg';
import brand from './brand_img.jpg';
import left from './left_arrow.svg';
import right from './right_arrow.svg';
import home from './home_automation_wiering.png';
import commercial from './commercial.png';
import industrial from './industrial.png';
import lightningArrester from './lightning.png';
import transformer from './transformer.png';
import electricalInspectorate from './elec_insp.png';
import bescomPowerSanction from './bescom.png';
 
export const assets = {
  logo: logo,
  menu: menu,
  cross: cross,
  brand: brand,
  left: left,
  right: right,
  home: home,
  commercial: commercial,
  industrial: industrial,
  lightningArrester: lightningArrester,
  transformer: transformer,
  electricalInspectorate: electricalInspectorate,
  bescomPowerSanction: bescomPowerSanction
  
}
export const services = {
  home: {
    index: 0,
    image: home,
    title: "Home Automation Wiring",
    description: "Smart home solutions for a connected lifestyle."
  },
  commercial: {
    index: 1,
    image: commercial,
    title: "Commercial Services",
    description: "Tailored camera wiring with high speed networking cable installation."
  },
  industrial: {
    index: 2,
    image: industrial,
    title: "Industrial Wiring with detailed diagrams",
    description: "Streamlining operations with advanced automation."
  },
  lightning_arrester_installation: {
    index: 3,
    image: lightningArrester,
    title: "Lightning Arrester Installation",
    description: "Protecting your property with reliable lightning protection systems."
  },
  '11kv HT Transformer work': {
    index: 4,
    image: transformer,
    title: "11kv HT Transformer work",
    description: "Expertise in high voltage transformer installation and maintenance."
  },
  electrical_inspectorate: {
    index: 5,
    image: electricalInspectorate,
    title: "Electrical Inspectorate Services",
    description: "Ensuring compliance with electrical standards and necessary sanctions."
  },
  bescom_power_sanction: {
    index: 6,
    image: bescomPowerSanction,
    title: "BESCOM Power Sanction Services",
    description: "Assisting with BESCOM power sanction approvals and documentation."
  }
};