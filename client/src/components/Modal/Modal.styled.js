import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  background-color: #cccccc;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  transition: all 0.3s;
`;

export const Content = styled.div`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background: white;
`;
