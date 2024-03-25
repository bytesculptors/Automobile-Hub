import React, { useState, useEffect } from "react";
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

  const [selectedSupplier, setSelectedSupplier] = useState(null);

  useEffect(() => {
    setSelectedSupplier(suppliers[0].id);
  }, []);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleSelect = (id) => {
    setSelectedSupplier(id);
  };

  const suppliers = [
    {
      id: 1,
      name: "Toyota",
    },
    {
      id: 2,
      name: "KIA",
    },
    {
      id: 3,
      name: "Mazda",
    },
    {
      id: 4,
      name: "Huyndai",
    },
    {
      id: 5,
      name: "Honda",
    },

    // Thêm các đối tượng nhà cung cấp khác
  ];

  return (
    <Helmet title="Cars">
      <CommonSection title="Danh mục sản phẩm" />
      <section>
        <Container>
          <h2>Lựa chọn nhà cung cấp</h2>
          <div className="flex justify-start mb-2">
            {suppliers.map((supplier) => (
              <div
                key={supplier.id}
                className={`w-1/12 text-center mr-1 cursor-pointer p-1 rounded-lg ${
                  selectedSupplier === supplier.id
                    ? "bg-green-500"
                    : "bg-gray-200"
                }`}
                onClick={() => handleSelect(supplier.id)}
              >
                {supplier.name}
              </div>
            ))}
          </div>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-2">
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
