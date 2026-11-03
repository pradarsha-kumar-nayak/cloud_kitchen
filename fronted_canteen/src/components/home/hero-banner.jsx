import "./hero-banner.css"
import { FaLongArrowAltRight } from "react-icons/fa";

export function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-overlay"></div>

      <div className="hero-txt">
        <div className="top-hed">SPEED MEETS FLAVOR</div>

        <h1 className="hero-title">
          <span className="sec-hed">High-Fidelity Flavor</span>
          <span className="trd-hed">Delivered at Speed.</span>
        </h1>

        <p className="for-hed mt-2">
          Experience the ultimate urban dining evolution. Chef-driven
          menus from our cloud kitchens straight to your doorstep in
          under 20 minutes.
        </p>

        <div className="hero-btns mt-3">
          <button className="btn ord">Order Now <FaLongArrowAltRight /></button>
          <button className="btn vew">View Menu</button>
        </div>
      </div>
    </div>
  )
}