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
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
}
