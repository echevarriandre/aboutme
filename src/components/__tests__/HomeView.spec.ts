import HomeViewVue from "@/views/HomeView.vue";
import { mount } from "@cypress/vue";

describe("HomeView", () => {
  it("renders properly", () => {
    mount(HomeViewVue);
    cy.get("h3").should("contain", "André Echevarria");
  });
});
