// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    car_id: 1,
    brand: "Suzuki",
    carName: "SUZUKI XL7",
    imgUrl: img01,
    price: 500000,
    speed: "65km/h",
    fuel: "Xăng",
    seatType: "7 chỗ",
    automatic: "Tự động",
    description:
      "Xe Suzuki XL7 2022 đời mới vận hành êm ái, là dòng xe lai MPV và SUV nên nhiều tính năng ưu việt. Xe phù hơp di chuyển trên nhiều cung đường hỗn hợp. Thuận lợi cho gia đinh đi du lịch, đi dã ngoại với thể tích chứa đồ rộng rãi. Xe ưu điểm rất tiết kiệm xăng. ",
  },

  {
    car_id: 2,
    brand: "Kia",
    carName: "KIA SORENTO",
    imgUrl: img02,
    price: 500000,
    speed: "60km/h",
    fuel: "Dầu Diesel",
    seatType: "7 chỗ",
    automatic: "Tự động",
    description:
      " KIA SORENTO 2020",
  },

  {
    car_id: 3,
    brand: "Kia",
    carName: "KIA MORNING SI",
    imgUrl: img03,
    price: 650000,
    speed: "60km/h",
    fuel: "Xăng",
    seatType: "4 chỗ",
    automatic: "Tự động",
    description:
      " Xe gia đình. Ít sử dụng.",
  },

  {
    car_id: 4,
    brand: "Toyota",
    carName: "TOYOTA INNOVA G",
    imgUrl: img04,
    price: 700000,
    speed: "72km/h",
    fuel: "Xăng",
    seatType: "7 chỗ",
    automatic: "Số sàn",
    description:
      " TOYOTA INNOVA G 2016",
  },

  {
    car_id: 5,
    brand: "Honda",
    carName: "HONDA CITY",
    imgUrl: img05,
    price: 450000,
    speed: "60km/h",
    fuel: "Xăng",
    seatType: "4 chỗ",
    automatic: "Số sàn",
    description:
      " Xe Honda City 2017, số sàn, màu đen. Xe gia đình. Ít sử dụng. Xe đi êm, điều hòa mát. (Số Sàn) tiết kiệm xăng. Phù hợp cá nhân và gia đình trong mọi lộ trình. Xe đā có thu phí tự động (VETC)Có rèm chắn nắng.",
  },

  {
    car_id: 6,
    brand: "Hyundai",
    carName: "HYUNDAI GRAND I10",
    imgUrl: img06,
    price: 850000,
    speed: "65km/h",
    fuel: "Xăng",
    seatType: "4 chỗ",
    automatic: "Số sàn",
    description:
      " Xe sạch đẹp số sàn, hỗ trợ rửa xe",
  },

  {
    car_id: 7,
    brand: "Ford",
    carName: "FORD RANGER XLS",
    imgUrl: img07,
    price: 500000,
    speed: "72km/h",
    fuel: "Xăng",
    seatType: "4 chỗ",
    automatic: "Tự động",
    description:
      " FORD RANGER XLS 2017",
  },

  {
    car_id: 8,
    brand: "Mercedes",
    carName: "MERCEDES C250",
    imgUrl: img08,
    price: 500000,
    speed: "70km/h",
    fuel: "Xăng",
    seatType: "4 chỗ",
    automatic: "Tự động",
    description:
      " Mercedes_Benz 2018( FORM MỚI KHÁC FORM 2016) Full option, xe mới đẹp long lanh. Xe mới sạch sẽ, Rada cảnh báo va chạm và phanh chủ động. Form S-Class có nước hoa tự động. Định vị toàn cầu. Không lo lạc đường. Hệ thống kiểm soát hành trình, cảnh báo hỗ trợ phanh tự động khi có va chạm. Cốp điện, cửa sổ trời, loa Burmester Xe được chăm sóc và làm đẹp định kì. ",
  },

  {
    car_id: 9,
    brand: "Honda",
    carName: "HONDA CITY",
    imgUrl: img08,
    price: 700000,
    speed: "72km/h",
    fuel: "Xăng",
    seatType: "4 chỗ",
    automatic: "Tự động",
    description:
      " Mercedes_Benz 2018( FORM MỚI KHÁC FORM 2016) Full option, xe mới đẹp long lanh. Xe mới sạch sẽ, Rada cảnh báo va chạm và phanh chủ động. Form S-Class có nước hoa tự động. Định vị toàn cầu. Không lo lạc đường. Hệ thống kiểm soát hành trình, cảnh báo hỗ trợ phanh tự động khi có va chạm. Cốp điện, cửa sổ trời, loa Burmester Xe được chăm sóc và làm đẹp định kì. ",
  },

  {
    car_id: 10,
    brand: "Mercedes",
    carName: "MERCEDES C250",
    imgUrl: img08,
    price: 500000,
    speed: "60km/h",
    fuel: "Xăng",
    seatType: "4 chỗ",
    automatic: "Tự động",
    description:
      " Mercedes_Benz 2018( FORM MỚI KHÁC FORM 2016) Full option, xe mới đẹp long lanh. Xe mới sạch sẽ, Rada cảnh báo va chạm và phanh chủ động. Form S-Class có nước hoa tự động. Định vị toàn cầu. Không lo lạc đường. Hệ thống kiểm soát hành trình, cảnh báo hỗ trợ phanh tự động khi có va chạm. Cốp điện, cửa sổ trời, loa Burmester Xe được chăm sóc và làm đẹp định kì. ",
  },

  {
    car_id: 11,
    brand: "Mercedes",
    carName: "MERCEDES C250",
    imgUrl: img08,
    price: 500000,
    speed: "65km/h",
    fuel: "Xăng",
    seatType: "4 chỗ",
    automatic: "Tự động",
    description:
      " Mercedes_Benz 2018( FORM MỚI KHÁC FORM 2016) Full option, xe mới đẹp long lanh. Xe mới sạch sẽ, Rada cảnh báo va chạm và phanh chủ động. Form S-Class có nước hoa tự động. Định vị toàn cầu. Không lo lạc đường. Hệ thống kiểm soát hành trình, cảnh báo hỗ trợ phanh tự động khi có va chạm. Cốp điện, cửa sổ trời, loa Burmester Xe được chăm sóc và làm đẹp định kì. ",
  },
 
];

export default carData;