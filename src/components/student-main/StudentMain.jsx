import React, { useState } from 'react';
import Student from '../student/Student';
import { students } from '../student/StudentData';
import { ContentArea, Table, TableDiv, TBody, TD, TH, THead, TR } from '../student/StudentStyles';
import { StudentWrapper } from './StudentmainStyles';

const StudentMain = () => {
    const [ selectedStudent, setSelectedStudent ] = useState(null);
    
    const showRecordHandler = (index) => {
        setSelectedStudent(index === selectedStudent ? null : index);
    }

  return (
    <div>
      <h1>Students Record</h1>
        {students.map((student, index) => {
            const isExpanded = selectedStudent === index;

            return (
                <StudentWrapper>
                    <Student
                        image={student.image}
                        firstName={student.firstName}
                        lastName={student.lastName}
                        key={index}
                        toggleRecord={() => showRecordHandler(index)}
                        />
                    {isExpanded && (
                        <TableDiv>
                            <ContentArea>
                            <Table>
                                <THead>
                                <TR>
                                    <TH>Gender</TH>
                                    <TH>Score One</TH>
                                    <TH>Score Two</TH>
                                    <TH>Total Score</TH>
                                </TR>
                                </THead>
                                <TBody>
                                    <TR key={index}>
                                        <TD>{student.gender}</TD>
                                        <TD>{student.score1}</TD>
                                        <TD>{student.score2}</TD>
                                        <TD>{student.score1 + student.score2}</TD>
                                    </TR>
                                </TBody>
                            </Table>
                            </ContentArea>
                        </TableDiv>
                    )}
                </StudentWrapper>
            )
        })}
    </div>
  )
}

export default StudentMain;






