export const formatCurrency = (
  value: number,
  options: { 
    currency?: string; 
    decimalPlaces?: number;
    compact?: boolean;
    showSign?: boolean;
    isExpense?: boolean;
  } = {}
): string => {
  const { 
    currency = 'INR',   // ✅ Default currency set to INR
    decimalPlaces = 2, 
    compact = false, 
    showSign = false, 
    isExpense = false 
  } = options;

  const displayValue = isExpense ? -Math.abs(value) : value;

  return new Intl.NumberFormat('en-IN', {   // ✅ Indian formatting style
    style: 'currency',
    currency,
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
    notation: compact ? 'compact' : 'standard',
    signDisplay: showSign ? 'always' : 'auto',
  }).format(displayValue);
};
