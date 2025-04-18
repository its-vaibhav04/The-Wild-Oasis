import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#9ca3af" : "#3b82f6")};
  color: white;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  transition: background-color 0.2s;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover:not(:disabled) {
    background-color: #2563eb;
  }
`;

const TooltipBox = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  width: 200px;
  background-color: #1f2937;
  color: white;
  font-size: 1.5rem;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 10;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-color: #1f2937;
  }
`;
const ToolTip = ({ buttonText, tooltipText, onClick, disabled = false }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <TooltipContainer
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <ButtonWrapper disabled={disabled}>
        <StyledButton onClick={handleClick} disabled={disabled}>
          {buttonText}
        </StyledButton>
      </ButtonWrapper>

      {showTooltip && <TooltipBox>{tooltipText}</TooltipBox>}
    </TooltipContainer>
  );
};

export default ToolTip;
