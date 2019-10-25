import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  background: #fff;
  border: 2px solid #f1f1f1;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;
export const Meta = styled.div`
  height: 40px;
  padding: 15px 0;
  border-bottom: 1px solid #bdbdbd;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #333;
    font-size: 11px;
    font-weight: bold;
  }
`;
export const Title = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 15px;
  color: #999;
`;
export const Info = styled.div`
  height: 40px;
  padding: 15px;
  display: flex;
  color: #74abfc;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;
  }
  img {
    height: 30px;
    width: 30px;
  }
`;
