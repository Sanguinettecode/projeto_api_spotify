import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 650px;
  margin-top: 30px;
  background: #fff;
  padding: 20px 50px;
  -webkit-box-shadow: 0px 5px 10px 3px rgba(199, 199, 199, 1);
  -moz-box-shadow: 0px 5px 10px 3px rgba(199, 199, 199, 1);
  box-shadow: 0px 5px 10px 3px rgba(199, 199, 199, 1);
`;
export const SearchMusic = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  h3 {
    color: #333;
  }
  nav {
    display: flex;
    align-items: center;

    input {
      width: 200px;
      margin: 0 10px 0 0;
      border: none;
      padding: 10px;
      font-size: 14px;
      border-bottom: 1px solid #999;
    }
    span {
      display: flex;
      padding: 9px;
      align-items: center;
      border-bottom: 1px solid #999;
    }
  }
`;
export const CardList = styled.div`
  margin-top: 60px;
  max-height: 450px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-row-gap: 10px;
`;
