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

export { projectNav };
