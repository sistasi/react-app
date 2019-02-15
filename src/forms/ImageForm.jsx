import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { isEmpty } from 'lodash';
import {
    Form,
    FormGroup,
    Label,
    Button,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';
import Input from '../formComponents/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast from 'react-toastify';

const validate = (values) => {
    const errors = {};
    if (isEmpty(values.imgCount)) {
        errors.imgCount = 'No of image is required.';
        //toast.error('Input is required.');
    }
    
    return errors;
};

// eslint-disable-next-line import/no-mutable-exports
let ImageForm = (props) => {
    const {
        handleSubmit,
    } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <InputGroupAddon addonType="prepend">How many dogs do you want to see?</InputGroupAddon>
                    <Field
                        name="imgCount"
                        type="number"
                        component={Input}
                        placeholder="1"
                        min="1"
                    />
                    <InputGroupAddon addonType="append">
                        <Button
                            type="submit"
                            color="success"
                            title="woof!"
                        >
                            
                        <FontAwesomeIcon icon="dog" />
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
};

export default reduxForm({
    form: 'IMAGE',
    validate,
})(ImageForm);
