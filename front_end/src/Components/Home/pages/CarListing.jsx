// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../Home_Components/Helmet/Helmet";
// import CommonSection from "../Home_Components/UI/CommonSection";
// import CarItem from "../Home_Components/UI/CarItem";
// import carData from "../assets/data/carData";

// const CarListing = () => {
//   return (
//     <Helmet title="Cars">
//       <CommonSection title="Danh mục sản phẩm" />

//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className=" d-flex align-items-center gap-3 mb-5">
//                 <span className=" d-flex align-items-center gap-2">
//                   <i class="ri-sort-asc"></i> Sắp xếp
//                 </span>

//                 <select>
//                   <option>Lựa chọn</option>
//                   <option value="low">Tăng dần</option>
//                   <option value="high">Giảm dần</option>
//                 </select>
//               </div>
//             </Col>

//             {carData.map((item) => (
//               <CarItem item={item} key={item.id} />
//             ))}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarListing;

// import React, { useState } from "react";
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../Home_Components/Helmet/Helmet";
// import CommonSection from "../Home_Components/UI/CommonSection";
// import CarItem from "../Home_Components/UI/CarItem";
// import carData from "../assets/data/carData";

import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Home_Components/Helmet/Helmet";
import CommonSection from "../Home_Components/UI/CommonSection";
import CarItem from "../Home_Components/UI/CarItem";
import data from "../assets/data/carData";

const CarListing = () => {
  const [sort, setSort] = useState("price");

  const sortedData = [...data].sort((a, b) =>
    sort === "low" ? a.price - b.price : b.price - a.price
  );

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Danh mục sản phẩm" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Giá
                </span>

                <select value={sort} onChange={handleSortChange}>
                  <option value="price">Lựa chọn</option>
                  <option value="low">Tăng dần</option>
                  <option value="high">Giảm dần</option>
                </select>
              </div>
            </Col>

            {sortedData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;