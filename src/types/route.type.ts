import { ReactNode } from 'react';

export interface RouteType {
    name: string;
    icon?: ReactNode;
    path: string;
    component: React.FC<any>;
    layout?: React.FC<any> | null;
}
