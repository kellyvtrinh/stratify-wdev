import React from 'react';
import { Theme } from '../../../models/Theme';
import { TimelineMode } from '../../../models/TimelineModel';
export declare enum OutlinePosition {
    'left' = 0,
    'right' = 1
}
export interface TimelineOutlineItem {
    name?: string;
    id?: string;
    selected?: boolean;
}
export interface TimelineOutlineModel {
    items?: TimelineOutlineItem[];
    onSelect?: (index: number) => void;
    theme?: Theme;
    mode?: TimelineMode;
}
declare const TimelineOutline: React.FunctionComponent<TimelineOutlineModel>;
export { TimelineOutline };
