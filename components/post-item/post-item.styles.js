import styled from "styled-components";

const PostItemStyles = styled.div`
    text-align: center;
    margin-bottom: 25px;
    border: 2px #000 solid;
    width: 200px;
    height: 120px;
    padding: 10px;
`;

export const Title = styled.h3`
    font-size: 20px;
    margin-bottom: 0;
    margin-top: 5px;
`;

export const Author = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const Content = styled.div`
    margin-top: 5px;
`;

export const ReadMore = styled.a`
    background: none;
    border: 2px #000 solid;
    padding: 7px 12px;
    font-weight: 600;
    text-decoration: none;
    color: #000;
    display: block;
    max-width: 100px;
    margin: 10px auto;

    &:hover{
        cursor: pointer;
        background: #000;
        color: #fff;
        transition: 0.8s;
    }
`;

export default PostItemStyles;