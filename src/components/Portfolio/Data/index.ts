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
