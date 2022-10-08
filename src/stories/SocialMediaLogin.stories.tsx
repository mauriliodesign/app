import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SocialMediaLogin from "../components/SocialMediaLogin";

export default {
    title: "SocialMediaLogin",
    component: SocialMediaLogin,
} as ComponentMeta<typeof SocialMediaLogin>;

const Template: ComponentStory<typeof SocialMediaLogin> = () => <SocialMediaLogin platform="AAAA" />;

export const SocialMediaLoginAction = Template.bind({});
