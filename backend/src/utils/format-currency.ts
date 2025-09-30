// Convert rupees to paise (1 INR = 100 paise)
export function convertToPaise(amount: number) {
  return Math.round(amount * 100);
}

// Convert paise to rupees
export function convertToRupees(amount: number) {
  return amount / 100;
}

// Format currency in Indian Rupees (₹)
export function formatCurrency(amount: number | null | undefined) {
  if (amount === null || amount === undefined) return "No Balance";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
