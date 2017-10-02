import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import DraggedNodeShadowFilter from './filters/DraggedNodeShadowFilter';

const PatchSVG = ({
  children,
  isInPanningMode,
  isInResizingMode,
  isPanning,
  svgRef,
  ...restProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn('PatchSVG', { isPanning, isInPanningMode, isInResizingMode })}
    width="100%"
    height="100%"
    ref={svgRef}
    {...restProps}
  >
    <defs>
      <DraggedNodeShadowFilter />
    </defs>
    {children}
  </svg>
);

PatchSVG.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  isPanning: PropTypes.bool,
  isInPanningMode: PropTypes.bool,
  isInResizingMode: PropTypes.bool,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseUp: PropTypes.func,
  svgRef: PropTypes.func,
};

export default PatchSVG;
