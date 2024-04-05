// import all images from assets/images directory
import img01 from "../all-images/laptop-img/gaming.png";
import img02 from "../all-images/laptop-img/hp.png";
import img03 from "../all-images/laptop-img/vivobook.png";
import img04 from "../all-images/laptop-img/dell.png";
import img05 from "../all-images/laptop-img/lenovo.jpg";
import img06 from "../all-images/laptop-img/macbook.png";
import img07 from "../all-images/chair-img/chair1.jpg";
import img08 from "../all-images/chair-img/chair2.jpg";

const carData = [
  {
    car_id: 1,
    brand: "ROG",
    carName: "ROG Strix SCAR G18",
    imgUrl: img01,
    price: 500000,
    speed: "65km/h",
    fuel: "Xăng",
    seatType: "7 chỗ",
    automatic: "Tự động",
    description:
      "Cùng chào đón thế hệ chip Intel Gen 14 hoàn toàn mới trên những mẫu máy tính xách tay, laptop Asus Gaming ROG Strix SCAR G18 G814JIR i9 14900HX (N6007W) với sức mạnh tuyệt vời từ con chip Intel dòng HX hiệu năng cao, card rời RTX 40 series cùng hàng loạt những công nghệ hàng đầu sẽ dẫn lối cộng đồng game thủ vào những đấu trường ảo đỉnh cao nhất.",
  },

  {
    car_id: 2,
    brand: "HP",
    carName: "Laptop HP 240 G9",
    imgUrl: img02,
    price: 500000,
    speed: "60km/h",
    fuel: "Dầu Diesel",
    seatType: "7 chỗ",
    automatic: "Tự động",
    description:
      "Laptop HP 240 G9 i5 (6L1Y2PA) sẽ là chiếc laptop học tập - văn phòng khó lòng chối từ nếu bạn là sinh viên hoặc dân văn phòng bởi trang bị bộ vi xử lý Intel Gen 12 tân tiến cùng những thông số kỹ thuật ấn tượng.",
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
    description: " Xe gia đình. Ít sử dụng.",
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
    description: " TOYOTA INNOVA G 2016",
  },

  {
    car_id: 5,
    brand: "Honda",
    carName: "Ghế Gaming E-Dra Yummy EGC232 V2 Black",
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
    description: " Xe sạch đẹp số sàn, hỗ trợ rửa xe",
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
    description: " FORD RANGER XLS 2017",
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