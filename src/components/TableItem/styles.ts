import styled from "styled-components";

export let TableLine = styled.tr``;

export let TableColumn = styled.td`
    padding: 10px 0;
`;

export let Category = styled.div<{color: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`;

export let Value = styled.div<{color: string}>`
    color: ${props => props.color};
`;