import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { IdentityDocuments } from "./components/services/IdentityDocuments";
import { TaxServices } from "./components/services/TaxServices";
import { BusinessServices } from "./components/services/BusinessServices";
import { HealthServices } from "./components/services/HealthServices";
import { EducationServices } from "./components/services/EducationServices";
import { SocialServices } from "./components/services/SocialServices";
import { VehicleServices } from "./components/services/VehicleServices";
import { PropertyServices } from "./components/services/PropertyServices";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "identity-documents", Component: IdentityDocuments },
      { path: "tax-services", Component: TaxServices },
      { path: "business-services", Component: BusinessServices },
      { path: "health-services", Component: HealthServices },
      { path: "education-services", Component: EducationServices },
      { path: "social-services", Component: SocialServices },
      { path: "vehicle-services", Component: VehicleServices },
      { path: "property-services", Component: PropertyServices },
      { path: "*", Component: NotFound },
    ],
  },
]);
