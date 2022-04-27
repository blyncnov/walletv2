import styled from "styled-components"

export const WalletContainer = styled.div`
width: 100%;
padding-top: 20px;
`
export const Constraint = styled.div`
width: 100%;
max-width: 90%;
margin: 0 auto;
`

export const WalletNavigation = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

p{
    color: #3B99FB;
    font-weight: 450;
    cursor: pointer;
}
`

export const WalletContentContainer = styled.div`
width: 100%;
max-width: 90%;
margin: 0 auto;
text-align: center;
line-height: 1.5;

.textTitle{
    margin: 3em 0;

    h1{
        color: #657B91;
        font-weight: 500;
    }

    p{
        max-width: 70%;
        margin: 0 auto;
          color: #657B91;
    }

}

@media (max-width: 768px) {
    .textTitle{
           margin: 2em 0;

           p{
        max-width: 100%;
        margin: 0 auto;
    }

    }
}

`

export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 1.2em;
    grid-row-gap: 1.3em;

.data{
    cursor: pointer;
}

@media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
}
`

export const FooterContainer = styled.div`
width: 100%;
max-width: 50%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 3em auto;

.iconsbox{
  display: flex;
  align-items: center;
  gap: .5em;

  h5{
       color: #647A91;
  }

}

@media (max-width: 768px) {
  max-width: 100%;
  flex-direction: column;
  gap: 1em;
}

`

export const PopUpBoxModel = styled.div`
position: fixed;
top: 0; left: 0;
right: 0; bottom: 0;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.424);

.modelbox{
    width: 40%;
    border-radius: 10px;
    background-color: white;

    .navigator__btn{
        padding: 0.5em 2em;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button{
            background-color: transparent;
            color: #587087;
        }
    }

    .blue{
        background-color: #3181CE;
    }

    .red{
        background-color: #E53E3E;
        width: 100%;
    }

    .import__text{
        font-weight: 400;
    }

    .start{
        align-items: flex-start;
        text-align: left;
        color :#586F87;
        border: 1px solid rgb(64, 68, 79);
       
    }

    .err{
         border: 1px solid red;
    }

    .connecting{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        padding: 1em 2em; 

        .erroetext{
            color: red;
        }

        .wallet__info h4{
            margin: .5em 0;
        }

        h4{
            font-weight: 500;
        

        @media (max-width: 768px) {
            font-size: 12px;
    }
        }

        @media (max-width: 768px) {
        padding: 1em .8em;
    }

    }

    button{
        background-color: #565A69;
        padding: .5em 1em;
        color: white;
          border-radius: 5px;
          outline: none;
          border: none;
          cursor: pointer;
        font-weight: 500;
    }

.white__header{
    background-color: white !important;
        justify-content: flex-start !important;
        gap: 1em;
}

.model__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em 1em;
     border-radius: 5px;
     color: #3B99FB;
    background-color: #E6E6E6;

   
}

.model__content{
        padding: 2em 1em;
        height: auto;
}

}

@media (max-width: 768px) {
    .modelbox{
    width: 90%;
    border-radius: 5px;
    background-color: white;
    }
}

`
export const PopUpBoxModel2 = styled(PopUpBoxModel)`
// padding: 2em 1em;
`


export default WalletContainer;