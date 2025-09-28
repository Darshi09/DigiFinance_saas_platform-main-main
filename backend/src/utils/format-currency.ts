// Convert rupees to paise when saving (1 INR = 100 paise)
export function convertToPaise(amount: number) {
  return Math.round(amount * 100);
}

// Convert paise to rupees when retrieving
export function convertToRupees(amount: number) {
  return amount / 100;
}

// Format currency in Indian Rupees (₹)
export function formatCurrency(amount: number) {
  if (amount === null || amount === undefined) return "No Balance";

  let formatted = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  return `Rs. ${formatted}`;
}
