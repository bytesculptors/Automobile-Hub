import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import 'remixicon/fonts/remixicon.css'
// import { useDispatch } from 'react-redux';
// import { clearUser } from './Redux/userSlice';


const root = ReactDOM.createRoot(document.getElementById('root'));


// let isAppClosing = false;

// window.addEventListener('beforeunload', (event) => {
//   if (!isAppClosing) {
//     // Ngăn chặn hiển thị thông báo xác nhận rời khỏi trang
//     event.preventDefault();

//     // Lưu trạng thái "app đang đóng"
//     isAppClosing = true;

//     // Xóa dữ liệu người dùng
//     store.dispatch(clearUser());
//     window.localStorage.clear();

//     // Đóng trình duyệt
//     window.close();
//   }
// });


console.log(1);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>

);