import styled from 'styled-components'
let Featured = styled.div`
    display:flex;
    flex-direction:column;
    width:1360px;
    margin: 10px auto;

    padding:5px;
        *::selection{
            background-color:teal;
            color:white;    
        }
        *{
            transition:.5s;
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

export const Table = styled.table`
    display:flex;
    flex-direction: column;
    width:85%;
    height: 420px;
    margin:50px auto;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding:10px 10px;
    overflow:auto;
`

export const Thead = styled.thead`
    display:grid;
    grid-template-columns: 4fr repeat(4,1.2fr) ;
    padding:5px;
    gap:2px;
    align-items: center;
    justify-content:center;
    position: sticky;
    top:-10px;
    background-color: white;
    z-index:9999;
    min-height:40px;
    max-height:700px;
`
export const Th = styled.th`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    text-align: ${(props) => (props.align ? props.align : 'center')};
    line-height: 28px;
    color: #0D263B;
    padding-left:5px;
`
export const Tbody = styled.tbody`

`
export const Td = styled.td`
    display:grid;
    grid-template-columns: 4fr repeat(4,1.2fr);
    padding:5px;
    gap:5px;
`
export const ListingTitle = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 2.7fr;
        .logo{
            display:flex;
            position:relative;
        }

        .featured{
            position: absolute;
            left:5px;
            top:5px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 3px 5px;
            gap: 10px;
            background: #0061DF;
            border-radius: 3px;
            font-size: 10px;
            color: #FFFFFF;
        }
`
export const ListingInfo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    gap:25px;
`
export const ListingName = styled.div`
    .title{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #0D263B;
        
        display:flex;
        gap: 10px;
        position:relative;
    }

    .country{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #696969;
    }

    .forsale{
        font-family: 'Cerebri Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 13px;
        color: #FFFFFF;
        text-transform: uppercase;

        border-radius: 3px;
        background: #0D263B;
        padding: 5px 12px;
        
        gap: 10px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        position: absolute;
        right:50px;
    }

`
export const ListingPrice = styled.div`
    .price{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        text-decoration-line: line-through;
        color: #696969;
    }
    .price1{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #0D263B;
    }

`

export const ListingTxt = styled.div`
    display:flex;
    height:100%;
    justify-content:center;
    align-items:center;


    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #696969;
        .btns{
            display:flex;
            width:100%;
            justify-content:center;
            gap:20px;
            button{
                background-color:transparent;
                border:none;
                width: 35px;
                height: 35px;
                cursor:pointer;
                border-radius: 60px;
                aoutline:none;
                transition:.3s;
                :hover{
                    background: #dae2e6;
                }
                :active{
                    background: #c0cacf;
                }
                
            }
        }
`


export const NoResult = styled.div`

display:flex;
align-items:center;
justify-content: center;
height:150%;
flex-direction:column;
p{
    color:black;
    font-family:cursive;
    font-size:20px;
}
`

export { Featured }