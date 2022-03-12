import styled from "styled-components";

export let Container = styled.div`
    flex: 1;
`;

export let Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
`;

export let Info = styled.div<{color?: string}>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'};
`;