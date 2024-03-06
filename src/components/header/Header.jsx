import { useState } from "react";
import logo from "../../image-icon/Screenshot 2024-03-06 231248.jpg";
import { BsQrCodeScan } from "react-icons/bs";
import TnetProducts from "./TnetProducts";
import wightLogo from "../../image-icon/white.jpg";
const Header = () => {
    const [openProduct, setOpenProduct] = useState(false);
    console.log(2);
    return (
        <header>
            <div className="logo-name">
                <div className="app-logo">
                    <img src={logo} alt="super app, სუპერ აპი" />
                </div>
                <div className="app-name">სუპერ აპი</div>
            </div>
            <div className="ringht-side-header">
                <div className="donwload-app-header">
                    <img
                        src={<BsQrCodeScan />}
                        alt="QrCode donwload super app, გადმოვწერე სუპერ აპი"
                    />
                    გადმოწერე
                </div>
                <div
                    className="tnet-info"
                    onClick={() => setOpenProduct(!openProduct)}
                >
                    <img
                        src={openProduct && logo ? wightLogo : logo}
                        alt="tnet,products, ტნეთ, პროდუქტები"
                    />
                    {openProduct && <TnetProducts />}
                </div>
            </div>
        </header>
    );
};
export default Header;
