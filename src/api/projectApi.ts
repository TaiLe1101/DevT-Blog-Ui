import { ProjectModel } from '~/models/ProjectModel';
import { ResponseApiModel } from './../models/ResponseApiModel';
import { axiosClient } from '~/utils';

const url = 'projects';
export const projectApi = {
    getAll(): Promise<ResponseApiModel<ProjectModel[]>> {
        return axiosClient.get(url);
    },
};
