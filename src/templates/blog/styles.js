import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  margin-top: 90px;

  ${media.lessThan('small')`
    padding: 14px;
    margin-top: 45px;
  `}

  footer {
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Pagination = styled.div`
  margin-top: 42px;
  display: flex;
  justify-content: space-between;
  position: relative;

  ${media.lessThan('small')`
    font-size: 14px;
  `}

  span {
    flex: 1;
    text-align: center;
  }

  a {
    position: absolute;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};

    svg {
      margin-right: 6px;
    }
  }

  .right {
    right: 0;
    svg {
      margin-left: 6px;
      margin-right: 0;
    }
  }
`;
