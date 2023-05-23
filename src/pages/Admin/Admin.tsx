import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    ChartData,
    ChartOptions,
    Point,
    BubbleDataPoint,
    Title,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

import styles from './Admin.module.scss';
import routes from '~/configs/route';
import CardAdmin from '~/components/CardAdmin';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

export const options: ChartOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Biểu đồ thống kê tổng lượt xem với Project, Post, Email...',
        },
    },
};

export const data: ChartData<
    'bar',
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
> = {
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
    datasets: [
        {
            label: 'Lượt xem post',
            data: [1, 2, 3, 4, 5, 6, 7],
            backgroundColor: '#068DA9',
        },
        {
            label: 'Lượt xem project',
            data: [7, 6, 5, 4, 3, 2, 1],
            backgroundColor: '#FDCEDF',
        },
        {
            label: 'Lượt gửi gmail',
            data: [1, 3, 2, 5, 6, 4, 7],
            backgroundColor: '#526D82',
        },
    ],
};

const cx = classNames.bind(styles);

function Admin() {
    return (
        <div className={cx('admin')}>
            <div className={cx('admin-cards')}>
                <Row gutter={[16, 16]}>
                    <Col span={24} lg={{ span: 8 }}>
                        <CardAdmin
                            backgroundColor="#ECF8F9"
                            icon={
                                <i
                                    className={cx(
                                        'uil',
                                        'uil-web-grid',
                                        'admin-card-top__icon'
                                    )}
                                ></i>
                            }
                            path="#"
                            title="Post"
                        ></CardAdmin>
                    </Col>
                    <Col span={24} lg={{ span: 8 }}>
                        <CardAdmin
                            backgroundColor="#F9F5F6"
                            path="#"
                            title="Project"
                            icon={
                                <i
                                    className={cx(
                                        'uil',
                                        'uil-web-grid',
                                        'admin-card-top__icon'
                                    )}
                                ></i>
                            }
                        ></CardAdmin>
                    </Col>
                    <Col span={24} lg={{ span: 8 }}>
                        <CardAdmin
                            backgroundColor="#C4DFDF"
                            path="#"
                            title="Email"
                            icon={
                                <i
                                    className={cx(
                                        'uil',
                                        'uil-web-grid',
                                        'admin-card-top__icon'
                                    )}
                                ></i>
                            }
                        ></CardAdmin>
                    </Col>
                </Row>
            </div>

            <div className={cx('admin-charts')}>
                <div className={cx('admin-charts-chart')}>
                    <Row gutter={[16, 16]}>
                        <Bar options={options} data={data} />
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Admin;
