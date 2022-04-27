import styled from "styled-components"


export const PhraseContainer = styled.div`
padding: .5em 1em  2em 1em;

.redcolor{
    background-color: red;
}

form {

    input{
        width: 100%;
        padding: 1em;
        margin-bottom: 1em;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

button {
    width: 100%;
    padding: 1em 2em;
    margin: .5em 0;
}

.blue, .red{
      background-color: blue;
}

}

`


export default PhraseContainer;