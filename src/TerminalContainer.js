import styled from 'styled-components';

const TerminalContainer = styled.div`
  & > :last-child {
    padding-bottom: ${({ theme }) => theme.spacing};
  }
  height: ${({ theme }) => theme.height};
  width: ${({ theme }) => theme.width};
  line-height: 1.2em;
  padding: ${({ theme }) => theme.spacing};
  overflow-y: scroll;
  color: ${({ theme }) => theme.outputColor};
  background: ${({ theme }) => theme.background};
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSize};
`;

export default TerminalContainer;
