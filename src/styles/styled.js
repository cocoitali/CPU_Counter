import styled from "styled-components";

//Container
export const AppWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  max-width: 885px;
  display: flex;
  height: 100vh;
  font-family: Tahoma, Geneva, sans-serif;
`;

export const ContainerWrapper = styled.div`
  width: 680px;
  height: 500px;
  width: 100vw;
  background: #e0f4f4;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const InnerContainerWrapper = styled.div`
  height: 220px;
  width: 600px;
  width: 100vw;
  background: #2b3636;
  box-shadow: 5px 10px 8px 10px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UnitCost = styled.div`
  width: 160px;
  height: 95px; //THEMES???
  background: #af74e3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TotalCost = styled.div`
  width: 160px;
  height: 95px; //THEMES?
  background: #1dc090;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CostText = styled.div`
  color: black;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 15px;
`;

export const NumsText = styled.div`
  font-size: 30px;
  color: white;
  margin-bottom: 15px;
  margin-left: 15px;
`;

//Counter
export const OuterCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CounterInput = styled.input`
  width: 60px;
  height: 35px;
  background: white;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
`;

export const CounterText = styled.div`
  color: #779090;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const InnerCounterWrapper = styled.div`
  display: flex;
`;

export const Button = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: 1px solid #779090;
  color: #779090;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
