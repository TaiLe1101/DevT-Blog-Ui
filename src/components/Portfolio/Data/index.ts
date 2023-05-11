import thumbnail from '~/assets/thumbnail.jpg';

export type ProjectDataType = {
  id: number;
  thumbnail: string;
  title: string;
  categoryId: number;
};

export type ProjectNavDataType = {
  id: number;
  name: string;
};

const projects: ProjectDataType[] = [
  {
    id: 1,
    thumbnail: thumbnail,
    title: 'Kệ kho',
    categoryId: 1,
  },
  {
    id: 2,
    thumbnail: thumbnail,
    title: 'Virtual Assistant',
    categoryId: 1,
  },
  {
    id: 3,
    thumbnail: thumbnail,
    title: 'Game Tetris',
    categoryId: 3,
  },
  {
    id: 4,
    thumbnail: thumbnail,
    title: 'My Music',
    categoryId: 1,
  },
  {
    id: 5,
    thumbnail: thumbnail,
    title: 'TR 2',
    categoryId: 2,
  },
  {
    id: 6,
    thumbnail: thumbnail,
    title: 'Meden API',
    categoryId: 2,
  },
  {
    id: 7,
    thumbnail: thumbnail,
    title: 'Meden UI',
    categoryId: 1,
  },
  {
    id: 8,
    thumbnail: thumbnail,
    title: 'Universe world cup',
    categoryId: 2,
  },
  {
    id: 9,
    thumbnail: thumbnail,
    title: 'Shoppe',
    categoryId: 3,
  },
  {
    id: 10,
    thumbnail: thumbnail,
    title: 'The band',
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
