import styled from "styled-components";

export const StudentProfile = styled.div`
    border: 1px solid #333;
    border-radius: 5px;
    width: 100%;
    padding: 1%;
    display: flex;
    align-items: center;
    gap: 40px;
`;

export const Image = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 50%;
`;

export const ImageDiv = styled.div`
  width: 50px; 
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;


export const FullName = styled.p`
    font-size: 1.2em;
    font-weight: 900;
    color: #333;
    user-select: none;
    cursor: pointer;
`;

export const TableDiv = styled.div`
  width: 100%;
  padding: 0px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
`;

export const ContentArea = styled.div`
  background: #ffffff;
  border-radius: 4px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Table = styled.table`
  border-spacing: 0;
  width: 100%;
`;

export const TR = styled.tr`
`;

export const THead = styled.thead`
  padding: 0px 0px 8px 32px;
  background: rgba(0, 0, 0, 0.04);
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #012a4a;
  `;

export const TBody = styled.tbody`
`;

export const TD = styled.td`
  padding: 18px 0px;
  margin-left: 10%;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #012a4a;
`;

export const TH = styled.th`
  background: rgba(0, 0, 0, 0.04);
  white-space: nowrap;
  padding: 8px 20px 8px 20px;
  color: #012a4a;
  font-family: "Inter";
  font-style: normal;
  font-weight: 550;
  font-size: 14px;
`;