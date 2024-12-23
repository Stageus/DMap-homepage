import styled from "styled-components";

const STYLE = {
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1000;
  `,
  EventPropagation: styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  `,

  Sheet: styled.div`
    background: #ffffff;
    width: 100%;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 100%; /* 시트의 아래쪽부터 시작 */
      left: 0;
      width: 100%;
      height: 100vh; /* 화면 전체 높이 */
      background-color: #ffffff;
    }
    &.open {
      transition: transform 0.3s ease-out;
      transform: translateY(0);
    }
  `,

  Handle: styled.div`
    width: 50px;
    height: 5px;
    background: #ccc;
    border-radius: 10px;
    margin: 10px auto;
    cursor: grab;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  MapContainer: styled.div`
    width: 80%;
    margin-bottom: 20px;
  `,
  SliderContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    max-width: 400px;
  `,
  SliderModify: styled.input`
    flex: 1;
  `,
  ColorPicker: styled.input`
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  `,
  ButtonContainer: styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  `,
  Button: styled.button`
    flex: 1;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #0047ab;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #003580;
    }
  `,
};

export default STYLE;
