const API_URL = "https://prueba-tecnica-api-tienda-moviles.onrender.com";
const API_KEY = "87909682e6cd74208f41a6ef39fe4191";

const headers = {
  "x-api-key": API_KEY,
};

export async function getPhones(query = "") {
  const res = await fetch(`${API_URL}/products?limit=21&search=${query}`, {
    headers,
  });
  if (!res.ok) throw new Error("Error al cargar los teléfonos");
  return res.json();
}

export async function getPhoneById(id) {
  const res = await fetch(`${API_URL}/products/${id}`, { headers });
  if (!res.ok) throw new Error("Error al cargar el teléfono");
  return res.json();
}
