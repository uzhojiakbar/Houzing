import styled from 'styled-components'
let Featured = styled.div`
display:flex;
flex-direction:column;
width:1360px;
margin: 10px auto;
padding:5px;
*::selection{
    background-color:blue;
    color:white;    
}
`
export const Title = styled.div`
display:flex;
width:90%;
margin: 0 auto;
justify-content: space-between;
align-items:center;

`
export const Componentname = styled.div`
font-weight: 600;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
color: #0D263B;
`
export const Search = styled.input`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
color: #696969;
border:none;
outline:none;
border-bottom: 2px solid #E6E9EC;
padding: 2px 0;
transition: .5s;
text-transform:capitalize;
    ::placeholder{
        font-size: 18px;
        line-height: 20px;
        color: #696969;
        font-weight: 400;}
    :focus{
        border-bottom:2px solid #5f676e;
    }
}
`

export { Featured }