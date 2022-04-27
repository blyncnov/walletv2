import styled from "styled-components"

export const NContainer = styled.div`
width: 100%;
border-bottom: 1px solid #E2E8F0;

.blue{
    background-color: #2B6CB0;
    border-color: #0070f3;
    padding: .55em 0;
    text-align: center;
    font-weight: 300;
    font-size: 400;
    font-size: 18px;
    color: white;

    h5{
            font-weight: 400;
    }

h5 span a{
    padding: 0 1em;
   color: white;
   text-decoration: underline;
}

}
`

export const Nmax = styled.div`
width: 100%;
max-width: 90%;
margin: 0 auto;
`
export const Nnavbar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
  padding: 1em 0;


`

export const NLeft = styled.div`
width: auto;
display: flex;
gap: 2em;
align-items: center;

.logo{
    color: #3B99FC;
    display: flex;
    align-items: center;
    gap: .3em;
    cursor: pointer;
}

.link-lists{
display: flex;
gap: 1em;
align-items: center;
color: #4A5567;
font-weight: 500;
cursor: pointer;

@media (max-width: 900px) {
    display: none;
}

}
`

export const NRight = styled.div`
width: auto;
display: flex;
gap: 1em;
align-items: center;
color: black;
font-weight: 400;

li{
        cursor: pointer;
}

button{
    background-color: #3182ce;
    border: none;
    padding: 1em 1.5em;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    outline: none;
    border-radius: 20px;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: #2b6cb0;
    }
}

@media (max-width: 768px) {
    display: none;
}

`
export const NMobile = styled.div`
display: none;
color: #4A5567;

@media (max-width: 768px) {
    display: block;
}

`

export default NContainer