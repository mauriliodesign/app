import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignUp from '../components/SignUp';

export default {
    title: 'SignUp',
    component: SignUp
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = () => <SignUp />;

export const SignUpButton = Template.bind({});
