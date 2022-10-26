import * as React from 'react';
import { VisuallyHidden } from '@chakra-ui/react';

import PaginationButton from './PaginationButton';

type PaginationButtonTriggerProps = {
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
  visuallyHidden?: string;
  icon?: React.ReactNode;
};

const PaginationButtonTrigger: React.FC<PaginationButtonTriggerProps> = ({
  color,
  disabled,
  onClick,
  visuallyHidden,
  icon,
}) => (
  <PaginationButton color={color} disabled={disabled} onClick={onClick}>
    <VisuallyHidden>{visuallyHidden}</VisuallyHidden>
    {icon}
  </PaginationButton>
);

PaginationButtonTrigger.defaultProps = {
  color: undefined,
  disabled: undefined,
  onClick: undefined,
  visuallyHidden: undefined,
  icon: undefined,
};

export default PaginationButtonTrigger;
