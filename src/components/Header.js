import { Container,Alert } from "react-bootstrap";

export function  Header(props){
    return(
        <>
            <Container>
                <Alert className="mt-5 text-center">{props.alertText}</Alert>
                <p className="text-center">{props.description}</p>
            </Container>
        </>
    )
}