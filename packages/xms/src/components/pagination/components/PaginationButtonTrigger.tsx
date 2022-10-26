import * as React from 'react';
import { VisuallyHidden } from '@chakra-ui/react';

import PaginationButton from './PaginationButton';

type PaginationButtonTriggerProps = {
  color: string;
  disabled: boolean;
  onClick: () => void;
  visuallyHidden: string;
  icon: React.ReactNode;
};

const PaginationButtonTrigger: React.FC<PaginationButtonTriggerProps> = ({
  color,
  disabled,
  onClick,
  visuallyHidden,
  icon,
}) => {
  return (
    <PaginationButton color={color} disabled={disabled} onClick={onClick}>
      <VisuallyHidden>{visuallyHidden}</VisuallyHidden>
      {icon}
    </PaginationButton>
  );
};

export default PaginationButtonTrigger;
