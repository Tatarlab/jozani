import { Divider as MuiDivider } from '@mui/material';
import styled from 'styled-components';
import { getCssVar } from '../../../styles';

export const StyledDivider = styled(MuiDivider)`
  background: ${getCssVar('grey', 900)};
`;
