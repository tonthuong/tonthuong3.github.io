import React from 'react';

export default function Information() {
    return (
        <div className=' p-6 lg:grid grid-rows-4'>
            <div className='sm:grid grid-rows-4'>
                <div className='sm:pl-24 sm:row-span-1 lg:pl-8'>
                    <h1 id='thongTinLienHe' className='font-bold sm:text-lg'>THÔNG TIN LIÊN HỆ</h1><br />
                    <span className='flex '><img width="18" height="18" src="https://img.icons8.com/ios-glyphs/30/user--v1.png" alt="user--v1" />Nam</span><br />
                    <span className='flex '><img width="18" height="18" src="https://img.icons8.com/metro/26/time.png" alt="time" /> 11/08/2000</span><br />
                    <span className='flex '><img width="18" height="18" src="https://img.icons8.com/ios/18/iphone.png" alt="iphone" /> 0385914912</span><br />
                    <span className='flex '><img width="18" height="18" src="https://img.icons8.com/ios/50/mail.png" alt="mail" /> phi.phannhat@circleK.com.vn</span><br />
                    <span className='flex '><img width="18" height="18" src="https://img.icons8.com/ios/18/marker--v1.png" alt="marker--v1" /> Thống Nhất, Dĩ An, Bình Dương</span>
                </div>
                <div className='sm:row-span-1 sm:mt-14 sm:pl-24 lg:pl-8'>
                    <h1 id='thongTinLienHe' className='font-bold sm:text-lg'>TRÌNH ĐỘ HỌC VẤN</h1><br />
                    <span className='font-medium'>Trường Đại Học Bách Khoa HCM 2018-2022</span><br />
                    <span>Chuyên ngành: Kĩ thuật máy tính</span><br />
                    <span>Xếp loại: Giỏi (GPA:8.0)</span>
                </div>
                <div className='sm:row-span-2  sm:pl-24 lg:pl-8'>
                    <h1 id='thongTinLienHe' className='font-bold sm:text-lg'>KINH NGHIỆM LÀM VIỆC</h1><br />
                    <span className='font-medium'>Công ty cổ phần BAMI</span><br />
                    <span>Vị trí: Lập trình viên PHP</span><br />
                    <span>Thời gian: 03/2022-04/2023</span><br />
                    <span>-Vận hành hệ thống các site , xây dựng và bảo trì hệ thống site vệ tinh</span><br />
                    <span>-Phát triển tính năng, thay đổi giao diện, xây dựng hiệu ứng và tối ưu hóa sửa dụng cho người dùng</span><br /><br />
                    <span className='font-medium'>Công ty cổ phần thanh toán BAA</span><br />
                    <span>Vị trí: Lập trình viên PHP</span><br />
                    <span>Thời gian: 04/2023-09/2023</span><br />
                    <span>-Phát triển tính năng theo sự hướng dẫn của trưởng nhóm</span><br />
                    <span>-Chuyển đổi giao diện website hoàn chỉnh từ file thiết kế .psd</span>
                </div>
            </div>
        </div>
    )
};