import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const settings1={
            dots:true,
            infinite:true,
            speed: 300,
            slidesToShow:1,
            slideToScroll:1
        }
        return (
            <div className="body">
                {/* <Slider {...settings1}>
                    <div className="item">
                        <img src="https://www.arcgis.com/sharing/rest/content/items/6c036c09c490450db100cbf867c7688a/resources/1571940616424.png?w=3340" alt="none"/>
                    </div>
                    <div className="item item-position">
                        <img src="https://qmpg.net/wp-content/uploads/2017/04/employee-training-budget-1200x630-OG.jpg" alt="none"/>
                    </div>
                </Slider> */}
                {/* Container */}
                <div className="container-fluid padding">
                    <div className="row padding">
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="./nhamct.jpg" alt="1"/>
                                <div className="card-body">
                                    <h4 className="card-title">Cao Thị Nhâm</h4>
                                    <p className="card-text">Là giảng viên khoa Thống kê - Tin học </p>
                                    <Link to="/nham" className="btn btn-outline-secondary">See profile</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="./thuynt.jpg" alt="1"/>
                                <div className="card-body">
                                    <h4 className="card-title">Nguyễn Thành Thuỷ</h4>
                                    <p className="card-text">Là giảng viên khoa Thống kê - Tin học </p>
                                    <Link to="/thuy" className="btn btn-outline-secondary">See profile</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="./chucnv.jpg" alt="1"/>
                                <div className="card-body">
                                    <h4 className="card-title">Nguyễn Văn Chức</h4>
                                    <p className="card-text">Là giảng viên khoa Thương Mại Điện Tử </p>
                                    <Link to="/chuc" className="btn btn-outline-secondary">See profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;