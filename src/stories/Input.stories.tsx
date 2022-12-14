import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "../components/Input";

export default {
    title: "Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    console.log(args);
    return <Input {...args} />;
};

export const InputEmail = Template.bind({});

export const InputEmailDisabled = Template.bind({});
InputEmailDisabled.args = {
    disabled: true,
};

export const InputEmailFilled = Template.bind({});
InputEmailFilled.args = {
    variant: "filled",
};

export const InputEmailOutlined = Template.bind({});
InputEmailOutlined.args = {
    variant: "outlined",
};
