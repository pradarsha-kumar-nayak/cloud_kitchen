import "./footer.css";
import { IoMdShare } from "react-icons/io";
import { GiWorld } from "react-icons/gi";

export function Footer() {
  return (
    <footer className="footer-con mt-5">
      <div className="container-fluid">
        <div className="row footer-row p-3 p-md-4 gy-4">

          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="footer-brand">OurKitchen</h3>
            <p className="footer-text mt-3">
              High-fidelity flavor delivered at speed. The future of the urban kitchen.
            </p>
          </div>

          {/* Company */}
          <div className="col-6 col-md-3 col-lg-2">
            <p className="footer-title">Company</p>
            <p className="footer-link">Menu</p>
            <p className="footer-link">Track Order</p>
          </div>

          {/* Support */}
          <div className="col-6 col-md-3 col-lg-2">
            <p className="footer-title">Support</p>
            <p className="footer-link">Kitchen Location</p>
            <p className="footer-link">Support</p>
          </div>

          {/* Legal */}
          <div className="col-6 col-md-3 col-lg-2">
            <p className="footer-title">Legal</p>
            <p className="footer-link">Privacy</p>
            <p className="footer-link">Terms</p>
          </div>

          {/* Social + copyright */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footer-icons">
              <IoMdShare />
              <GiWorld />
            </div>
            <p className="footer-text mt-3">
              &copy; 2024 OurKitchen. High-fidelity flavor delivered at speed.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}