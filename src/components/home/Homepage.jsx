
import { FooterImg } from "./footer-img";
import { HeroBanner } from "./hero-banner";
import { PopularDish } from "./popular-dish";

export function HomePage(){
    return(
        <>
          <HeroBanner></HeroBanner>
          <PopularDish></PopularDish>
          <FooterImg></FooterImg>
         
        </>
    )
}