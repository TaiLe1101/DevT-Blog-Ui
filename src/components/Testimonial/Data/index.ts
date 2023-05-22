import image from '~/assets/billiardcrypto.png';
import image2 from '~/assets/Visual.png';
import image3 from '~/assets/mentden-api.png';
import image4 from '~/assets/avatar.jpg';

type CustomerDataType = {
    id: number;
    avatar: string;
    name: string;
    comment: string;
};

const Customers: CustomerDataType[] = [
    {
        id: 1,
        avatar: image2,
        name: 'Visual',
        comment: 'Tốt lắm web về UI lẫn UX điều tốt 5⭐',
    },
    {
        id: 2,
        avatar: image,
        name: 'Billiard Crypto',
        comment: 'Tôi đánh giá 5⭐',
    },
    {
        id: 3,
        avatar: image3,
        name: 'Mentden',
        comment: 'Chức năng rất tốt tối ưu hiệu xuất cũng tốt 5⭐',
    },
    {
        id: 4,
        avatar: image4,
        name: 'Tài Lê',
        comment: 'Hay',
    },
];

export { Customers };
