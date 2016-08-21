import React,{Component} from 'react';
import {Form,FormGroup,FormControl,
  ControlLabel,
  InputGroup} from 'react-bootstrap';

export default class App extends Component {
    constructor(props){
        super(props) ;
    }
    render(){
        return(
            <Form componentClass="fieldset" inline>
                <FormGroup controlId="formValidationWarning4" validationState="warning">
                    <ControlLabel>Input with warning</ControlLabel>
                    {' '}
                    <FormControl type="text" />
                    <FormControl.Feedback />
                </FormGroup>
                {' '}
                <FormGroup controlId="formValidationError4" validationState="error">
                    <ControlLabel>Input group with error</ControlLabel>
                    {' '}
                    <InputGroup>
                    <InputGroup.Addon>@</InputGroup.Addon>
                    <FormControl type="text" />
                    </InputGroup>
                    <FormControl.Feedback />
                </FormGroup>
            </Form>
        ) ;
    }
}
