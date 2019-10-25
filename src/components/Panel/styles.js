import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 50px;
`;
export const Search = styled.header`
  height: 140px;
  background: #fff;
  padding: 0 50px;

  -webkit-box-shadow: 0px 5px 10px 3px rgba(199, 199, 199, 1);
  -moz-box-shadow: 0px 5px 10px 3px rgba(199, 199, 199, 1);
  box-shadow: 0px 5px 10px 3px rgba(199, 199, 199, 1);

  h3 {
    display: block;
    padding: 20px 0 30px 0;
    color: #333;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
export const Selector = styled.div`
  select {
    padding: 5px 0;
    width: 150px;
    text-align: center;
    border-radius: 4px;
  }
`;
export const Period = styled.div`
  margin-left: 50px;

  input {
    margin: 0 5px;
    border: 1px solid #9e9e9e;
    padding: 5px 0;
    text-align: center;
    border-radius: 4px;
  }
  button {
    background: none;
    border: 1px solid #9e9e9e;
    border-radius: 4px;
    padding: 5px;
    display: flex;
    align-items: center;
  }
`;
export const PanelGraf = styled.div`
  height: 500px;
  margin-top: 30px;
  background: #fff;
  padding: 0 50px;

  -webkit-box-shadow: 0px 5px 10px 3px rgba(199, 199, 199, 1);
  -moz-box-shadow: 0px 5px 10px 3px rgba(199, 199, 199, 1);
  box-shadow: 0px 5px 10px 3px rgba(199, 199, 199, 1);

  h3 {
    display: block;
    padding: 20px 0 30px 0;
    color: #333;
  }
  canvas {
    max-height: 400px;
  }
`;
