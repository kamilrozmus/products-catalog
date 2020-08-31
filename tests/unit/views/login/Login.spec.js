import { mount } from "@vue/test-utils";

import Login from "@/views/login/Login.vue";

describe("Login view", () => {
  it("should render correctly", () => {
    const wrapper = mount(Login);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should emit submit event", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    const wrapper = mount(Login, { attachTo: div });

    wrapper.find("button").trigger("click");

    expect(wrapper.emitted().submit).toBeTruthy();
  });
});
