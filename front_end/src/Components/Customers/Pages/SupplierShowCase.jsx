import React, { useState, useEffect } from "react";
import CarItem from "../../Home/Home_Components/UI/CarItem";
import data from "../../Home/assets/data/carData";
import { Typography, Card } from "@material-tailwind/react";
import { Container, Row, Col } from "reactstrap";

function StatsCard({ count, title, description }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography
        variant="gradient"
        className="text-4xl font-bold"
        color="blue-gray"
      >
        {count}
      </Typography>
      <hr className="mt-2 mb-4 max-w-xs" />
      <Typography variant="h5" color="blue-gray" className="mt-1 font-bold">
        {title}
      </Typography>
      <Typography className="text-base max-w-xs font-normal leading-7 !text-gray-500">
        {description}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "1,500",
    title: "Nhân viên",
    description: "Số nhân viên trong công ty của nhà cung cấp ở thời điểm hiện tại",
  },
  {
    count: "1,000",
    title: "Đơn hàng",
    description: "Số đơn hàng nhà cung cấp đã bán ra trên hệ thống",
  },
  {
    count: "2017",
    title: "Thành viên từ năm",
    description:
      "Mốc thời gian nhà cung cấp tham gia hệ thống của chúng tôi",
  },
  {
    count: "30",
    title: "Sàn phẩm",
    description: "Số sản phẩm nhà cung cấp có mặt trên sàn",
  },
];

function SupplierShowCase() {
  const [selectedTab, setSelectedTab] = useState("profile");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const [sort, setSort] = useState("price");

  const sortedData = [...data].sort((a, b) =>
    sort === "low" ? a.price - b.price : b.price - a.price
  );



  const handleSortChange = (e) => {
    setSort(e.target.value);
  };



  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <div
                    className={`text-white rounded-md px-3 py-1 text-sm font-medium no-underline ${
                      selectedTab === "profile"
                        ? "bg-gray-900"
                        : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleTabClick("profile")}
                  >
                    Hồ sơ nhà cung cấp
                  </div>
                  <div
                    className={`text-gray-300 rounded-md px-3 py-2 text-sm font-medium no-underline ${
                      selectedTab === "products"
                        ? "bg-gray-900"
                        : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleTabClick("products")}
                  >
                    Tất cả sản phẩm
                  </div>
                </div>
              </div>
              <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end flex-end">
                <div class="max-w-lg lg:max-w-xs w-60">
                  <label for="search" class="sr-only">
                    Search{" "}
                  </label>
                  <form methode="get" action="#" class="relative">
                    <button
                      type="submit"
                      id="searchsubmit"
                      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <input
                      type="text"
                      name="s"
                      id="s"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 placeholder-gray-400 focus:outline-none bg-white sm:text-sm transition duration-150 ease-in-out"
                      placeholder="Tìm kiếm sản phẩm"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {selectedTab === "profile" ? (
        <section className="lg:py-28 py-10 px-8 container mx-auto">
          <div className="lg:mb-24 mb-10">
            <Typography
              color="blue-gray"
              className="mb-4 !text-2xl font-bold lg:!text-4xl"
            >
              Tên nhà cung cấp
            </Typography>
            <Typography
              variant="lead"
              className="w-w-full !text-gray-500 max-w-xl"
            >
              Mô tả của nhà cung cấp
            </Typography>
          </div>
          <div className="grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center">
            <Card className="bg-gray-100/50 py-24 text-center" shadow={false}>
              <Typography
                variant="h1"
                className="!text-green-500 !leading-snug text-5xl"
              >
                100%
              </Typography>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mt-2 font-bold"
              >
                Đơn hàng thành công
              </Typography>
              <Typography
                variant="h1"
                className="!text-red-500 !leading-snug text-5xl"
              >
                0%
              </Typography>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mt-2 font-bold"
              >
                Đơn hàng bị hủy
              </Typography>
            </Card>
            <div>
              <div className="grid lg:grid-cols-2 gap-10 gap-x-20">
                {stats.map((props, key) => (
                  <StatsCard key={key} {...props} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="mx-8 mt-4">
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
        </div>
      )}
    </div>
  );
}

export default SupplierShowCase;
