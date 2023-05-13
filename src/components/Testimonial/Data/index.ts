import image from '~/assets/avatar.jpg';

type CustomerDataType = {
    id: number;
    avatar: string;
    name: string;
    comment: string;
};

const Customers: CustomerDataType[] = [
    {
        id: 1,
        avatar: image,
        name: 'Tài Lê',
        comment: 'Tốt lắm web về UI lẫn UX điều tốt 5⭐',
    },
    {
        id: 2,
        avatar: image,
        name: 'Tài Lê',
        comment: 'Tôi đánh giá 5⭐',
    },
    {
        id: 3,
        avatar: image,
        name: 'Tài Lê',
        comment: 'Bạn làm rất tốt',
    },
    {
        id: 4,
        avatar: image,
        name: 'Tài Lê',
        comment: 'Hay',
    },
];

export { Customers };
