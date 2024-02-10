import styled from 'styled-components';
import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
} from '@mui/material';
import { IListItemProps } from '../types';
import { getCssVar } from '../../../styles';

export const ListWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

export const ListScroller = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  max-width: 100%;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex: 0 1 auto;
  padding: 0;
  color: ${({ isActive }: IListItemProps) => (isActive
    ? getCssVar('grey', 950)
    : getCssVar('grey', 500))};
`;

export const StyledListItemButton = styled(MuiListItemButton)`
  padding: .8rem;
  border-radius: .4rem;
  color: currentColor;
`;

export const StyledListItemText = styled(MuiListItemText)`
  white-space: nowrap;
  color: currentColor;

  span {
    font-weight: inherit;
    color: currentColor;
  }
`;

export const StyledListItemIcon = styled(MuiListItemIcon)`
  display: inline-flex;
  justify-content: center;
  min-width: 3.2rem;
  color: currentColor;
`;
