import styled from "styled-components";

const STYLE = {
  Container: styled.div`
    display: flex;
    height: 35vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
  `,

  Header: styled.h1`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  `,

  InputContainer: styled.div`
    width: 100%;
    margin-bottom: 20px;
  `,

  Label: styled.label`
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: 500;
  `,

  InputWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.lignt_gray};
    padding: 8px 0;
  `,

  CurrentNickname: styled.input`
    outline: none;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.black};
  `,

  SuggestedNickname: styled.span`
    font-size: 16px;
    color: ${({ theme }) => theme.blue};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,

  SuggestionText: styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.gray};
    margin-top: 5px;
  `,

  SubmitButton: styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.blue};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.deep_blue};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.lignt_gray};
      color: ${({ theme }) => theme.gray};
      cursor: not-allowed;
    }
  `,
};

export default STYLE;