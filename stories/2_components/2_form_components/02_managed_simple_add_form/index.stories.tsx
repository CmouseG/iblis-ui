import { action } from '@storybook/addon-actions';
import { RenderFunction, storiesOf } from '@storybook/react';
import * as React from 'react';
import { ConfigProps, reduxForm } from 'redux-form';
import { ManagedAddSimpleForm, ManagedAddSimpleFormProps, ManagedAddSimpleFormValues } from '../../../../src';
import { injectProvider, injectTheme } from '../../../decorators';

const requiredTextField = (value: string, _allValues: ManagedAddSimpleFormValues, _props: ManagedAddSimpleFormProps) => {
    return value && value.trim() !== '' ? undefined : 'Required';
};

export default storiesOf('2.2.2 Managed Simple Add Form', module)
    .addDecorator((story: RenderFunction) => {
        return (
            injectTheme(story)
        );
    })
    .addDecorator((story: RenderFunction) => {
        return (
            injectProvider(story)
        );
    })
    //
    .add('ManagedAddSimpleForm', (() => {
        // configure the form
        const config = (): ConfigProps<ManagedAddSimpleFormValues, ManagedAddSimpleFormProps> => {
            const configForm: ConfigProps<ManagedAddSimpleFormValues, ManagedAddSimpleFormProps> = {
                form: 'ManagedAddSimpleForm',
            };
            return configForm;
        };
        // connect the form
        const ConnectedForm = reduxForm(config())(ManagedAddSimpleForm);
        return (
            <ConnectedForm
                namePlaceHolder="Name"
                buttonLabelAdd="Add"
                validateFunctions={[requiredTextField]}
                addAction={action('Add')}
            />
        );
    }
    ))
    //
    .add('Add entity form loading', (() => {
        // configure the form
        const config = (): ConfigProps<ManagedAddSimpleFormValues, ManagedAddSimpleFormProps> => {
            const configForm: ConfigProps<ManagedAddSimpleFormValues, ManagedAddSimpleFormProps> = {
                form: 'ManagedAddSimpleForm',
            };
            return configForm;
        };
        // connect the form
        const ConnectedForm = reduxForm(config())(ManagedAddSimpleForm);
        return (
            <ConnectedForm
                isLoading={true}
                namePlaceHolder="Name"
                buttonLabelAdd="Add"
                validateFunctions={[requiredTextField]}
                addAction={action('Add')}
            />
        );
    }
    ))
    //
    ;
