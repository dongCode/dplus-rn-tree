import { ReactElement } from 'react';
import { Node } from '../node-view';
import { StyleSheet } from 'react-native';

export interface IProps {
  data: any;
  extraData?: any;
  renderNode: (item: Node, level: number, isLastLevel: boolean) => ReactElement;
  onNodePressed?: (item: Node) => void;
  getChildrenName?: (item: Node) => string;
  style?: StyleSheet;
  keepOpenedState?: boolean;
  initialNumToRender?: number;
}
