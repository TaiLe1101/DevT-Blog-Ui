import keKho from '~/assets/kekho.png';
import candy from '~/assets/Visual.png';
import game from '~/assets/game.png';
import billiardcrypto from '~/assets/billiardcrypto.png';
import mentden from '~/assets/mentden.png';
import mentdenApi from '~/assets/mentden-api.png';
import tr2 from '~/assets/tr2.png';
import devtApi from '~/assets/devt-api.png';
import { ProjectType } from '~/types/project.type';

export interface ProjectNavDataType {
    id: number;
    name: string;
}

const projects: ProjectType[] = [
    {
        id: 1,
        thumbnail: keKho,
        title: 'Kệ kho',
        categoryId: 1,
    },
    {
        id: 2,
        thumbnail: candy,
        title: 'Candy P2E',
        categoryId: 1,
    },
    {
        id: 3,
        thumbnail: game,
        title: 'Game Tetris',
        categoryId: 3,
    },
    {
        id: 4,
        thumbnail: billiardcrypto,
        title: 'Billiard Crypto',
        categoryId: 1,
    },
    {
        id: 5,
        thumbnail: tr2,
        title: 'TR2 International',
        categoryId: 1,
    },
    {
        id: 6,
        thumbnail: mentdenApi,
        title: 'Meden API',
        categoryId: 2,
    },
    {
        id: 7,
        thumbnail: mentden,
        title: 'Meden UI',
        categoryId: 1,
    },
    {
        id: 8,
        thumbnail: devtApi,
        title: 'DevT Blog API',
        categoryId: 2,
    },
];

const projectNav: ProjectNavDataType[] = [
    {
        id: 0,
        name: 'all',
    },
    {
        id: 1,
        name: 'frontend',
    },
    {
        id: 2,
        name: 'backend',
    },
    {
        id: 3,
        name: 'game',
    },
];

export { projects, projectNav };
