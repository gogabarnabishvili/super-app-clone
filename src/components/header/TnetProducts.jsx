import { useEffect, useState } from "react";
import myAuto from "../../image-icon/myauto.jpg";
const TnetProducts = () => {
    const tnetProductList = [
        myAuto,
        myAuto,
        myAuto,
        myAuto,
        myAuto,
        myAuto,
        myAuto,
        myAuto,
        myAuto,
        myAuto,
        myAuto,
    ];
    // const [platformIcon, setPlatformIcon] = useState();

    // const renderProducts = (arr) => {
    //     arr.map((e) => {
    //         setPlatformIcon([e]);
    //     });
    // };
    // useEffect(() => {
    //     console.log(tnetProductList.length);
    //     renderProducts(tnetProductList);
    // }, []);
    // console.log(platformIcon);
    return (
        <div>
            <div className="descriptyon">
                <h3>TNET</h3>
                <p>
                    ყველაზე დიდი ტექნოლოგიური ეკოსისტემა, რომელიც აერთიანებს 11
                    პლატფორმას
                </p>
            </div>
            {/* <img src={myAuto} alt="" /> */}
            <div>
                {tnetProductList.map((e, index) => (
                    <img src={e} alt="" key={index} />
                ))}
            </div>
        </div>
    );
};

export default TnetProducts;
// import React, { useEffect, useState } from "react";
// import myAuto from "../../image-icon/myauto.jpg";

// const TnetProducts = () => {
//     const tnetProductList = Array(12).fill(myAuto); // Fill array with 12 copies of myAuto
//     const [platformIcons, setPlatformIcons] = useState([]);

//     useEffect(() => {
//         setPlatformIcons(tnetProductList);
//     }, []);

//     console.log(platformIcons);

//     return (
//         <div>
//             <div className="description">
//                 <h3>TNET</h3>
//                 <p>
//                     ყველაზე დიდი ტექნოლოგიური ეკოსისტემა, რომელიც აერთიანებს 11
//                     პლატფორმას
//                 </p>
//             </div>
//             <div>
//                 {platformIcons.map((icon, index) => (
//                     <img key={index} src={icon} alt={`Product ${index}`} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TnetProducts;
