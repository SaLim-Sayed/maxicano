import AboutUs from '@/components/Policy/AboutUs';
import Policy from '@/components/Policy/Policy';

import aboutImg from "@/public/policy/about.png";
export default function page() {
  return (
    <Policy title="حول الشركة" image={aboutImg} desc={<AboutUs />}/>
  )
}
