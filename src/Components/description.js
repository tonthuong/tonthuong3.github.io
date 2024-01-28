import React from 'react';
export default function Description(){
    return(
        <div>
            <div className='grid grid-rows-5'>
                <div className='row-span-1   sm:mt-3 sm:pl-24 lg:p-8'>
                    <h1 id='muc_tieu' className='font-bold sm:text-lg'>MỤC TIÊU NGHỀ NGHIỆP</h1><br />
                    <span>-Tôi mong muốn được làm việc ở môi trường lập trình chuyên nghiệp ở đó tôi có thể phát triển kỹ năng chuyên môn, học hỏi thêm kiến thức lập trình mới để hoàn thành xuất sắc công việc được giao.</span><br />
                    <span>-Lập trình viên PHP là mục tiêu nghề nghiệp của tôi</span>
                </div>
                <div className='row-span-1  sm:mt-5 sm:pl-24 lg:p-8'>
                    <h1 id='muc_tieu' className='font-bold sm:text-lg'>KỸ NĂNG</h1>
                    <span>-Có kiến thức về Version Control</span><br />
                    <span>-Kỹ năng giải quyết vấn đề</span><br />
                    <span>-Kỹ năng độc lập - làm việc nhóm.</span>
                </div>
                <div className='row-span-1  sm:-mt-7  sm:pl-24 lg:p-8'>
                    <h1 id='muc_tieu' className='font-bold sm:text-lg'>CHỨNG CHỈ</h1>
                    <span>-PHP, Javascrip, Mysql</span><br />
                    <span>-Git, Linux, Redis, MongoDB</span><br />
                    <span>-Laravel framework, Jquery, React</span>
                </div>
                <div  className='row-span-1  sm:-mt-12  sm:pl-24 lg:p-8'>
                    <h1 id='muc_tieu' className='font-bold sm:text-lg'>GIẢI THƯỞNG</h1>
                    <span>-GitHub Arctic Code Vault Contributor</span><br />
                    <span>-Google AI Impact Challenge</span><br />
                    <span>-ACM A.M. Turing Award</span>
                </div>
                <div className='row-span-1  sm:-mt-16 sm:pl-24 lg:p-8'>
                    <h1 id='muc_tieu' className='font-bold sm:text-lg'>SỞ THÍCH</h1>
                    <span>-Lập trình</span><br />
                    <span>-Chụp ảnh, làm video</span><br />
                    <span>-Đi du lịch</span><br />
                </div>
                <div className='row-span-1  sm:-mt-16 sm:pl-24 lg:p-8'>
                <h1 id='muc_tieu' className='font-bold sm:text-lg'>NGƯỜI THAM CHIẾU</h1>
                    <span>-Nguyễn Thị B- Kế toán trưởng công ty cổ phần BAMI</span><br />
                    <span>-SĐT:0982.123.123</span><br />
                </div>

            </div>
            <div className='grid grid-cols-10 mt-20'>
                <div className='col-span-3'></div>
                <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                <div className='col-span-3'></div>
            </div>
            <div><h3 className='text-center mt-5'>Thanks and best regards</h3></div>
        </div>
    )
}