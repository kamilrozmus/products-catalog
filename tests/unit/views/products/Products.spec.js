import { mount } from "@vue/test-utils";

import Products from "@/views/products/Products.vue";

describe("Products view", () => {
  it("should render correctly", () => {
    const wrapper = mount(Products);

    expect(wrapper.text()).toMatch("This is products page");
  });

  it("should show correct number of products", () => {
    const wrapper = mount(Products);

    expect(wrapper.findAll("li")).toHaveLength(2);
  });
});
