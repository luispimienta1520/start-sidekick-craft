import { describe, expect, it } from "vitest";
import { filterServices, getWhatsAppUrl, BUSINESS_WHATSAPP } from "@/lib/services";

describe("Service discovery", () => {
  it("finds catalogs without requiring accents", () => {
    expect(filterServices("catalogo", "Todos").map((s) => s.id)).toContain("catalogo");
  });
  it("combines a category with the search", () => {
    expect(filterServices("inventario", "Comercios").map((s) => s.id)).toEqual(["inventario"]);
    expect(filterServices("inventario", "Restaurantes")).toHaveLength(0);
  });
  it("finds a service by area and by a feature", () => {
    expect(filterServices("educacion", "Todos").some((s) => s.id === "academico")).toBe(true);
    expect(filterServices("recordatorios", "Servicios").map((s) => s.id)).toEqual(["citas"]);
  });
});
describe("Safe business contact", () => {
  it("does not send customers to the placeholder number", () => {
    expect(getWhatsAppUrl("573000000000", "Catálogo")).toBeNull();
  });
  it("keeps contact unavailable while the business number is pending", () => {
    expect(getWhatsAppUrl(BUSINESS_WHATSAPP, "Catálogo")).toBeNull();
  });
  it("rejects values that are not a telephone number", () => {
    expect(getWhatsAppUrl("javascript:alert(1)", "Catálogo")).toBeNull();
  });
});
