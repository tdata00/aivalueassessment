export const calculateSectionValue = (sectionId: string, value: string): string => {
  if (!value) return '';
  
  const numValue = parseFloat(value);
  if (isNaN(numValue)) return '';

  switch (sectionId) {
    case 'customerService':
      return `Potential Annual Savings: $${(numValue * 0.7).toLocaleString()}`;
    case 'virtualReceptionist':
      const missedCalls = Math.floor(numValue * 0.25);
      const potentialRevenue = missedCalls * 100;
      return `Potential Monthly Revenue: $${potentialRevenue.toLocaleString()}`;
    case 'appointmentSetter':
      const currentConversions = Math.floor(numValue * 0.04);
      const improvedConversions = Math.floor(numValue * 0.21);
      const additionalRevenue = (improvedConversions - currentConversions) * 1000;
      return `Additional Monthly Revenue: $${additionalRevenue.toLocaleString()}`;
    case 'onboarding':
      const onboardingSalary = 5000; // Average monthly salary for onboarding staff
      const oldOnboardingTimeHours = 20; // Standard onboarding time per client
      const onboardingTimeReduction = 0.90; // 90% reduction
      const newOnboardingTimeHours = oldOnboardingTimeHours * (1 - onboardingTimeReduction);
      const hourlyRate = onboardingSalary / 160; // Monthly salary to hourly rate
      const currentMonthlyCost = numValue * oldOnboardingTimeHours * hourlyRate;
      const newMonthlyCost = numValue * newOnboardingTimeHours * hourlyRate;
      const monthlySavings = currentMonthlyCost - newMonthlyCost;
      return `Monthly Cost Savings: $${monthlySavings.toLocaleString()}`;
    case 'workflow':
      const hourlyCost = 50;
      const errorCostMultiplier = 200;
      const currentErrorRate = 0.15;
      
      const currentLaborCost = numValue * hourlyCost;
      const currentErrorCost = (numValue * currentErrorRate) * errorCostMultiplier;
      const totalCurrentCost = currentLaborCost + currentErrorCost;
      
      const aiHours = numValue * 0.3;
      const aiLaborCost = aiHours * hourlyCost;
      const aiErrorCost = (aiHours * (currentErrorRate * 0.1)) * errorCostMultiplier;
      const totalAiCost = aiLaborCost + aiErrorCost;
      
      const workflowSavings = totalCurrentCost - totalAiCost;
      return `Monthly Savings: $${workflowSavings.toLocaleString()}`;
    default:
      return '';
  }
};

export const calculateMonthlySavings = (sectionId: string, value: string): number => {
  if (!value) return 0;
  
  const numValue = parseFloat(value);
  if (isNaN(numValue)) return 0;

  switch (sectionId) {
    case 'customerService':
      return numValue * 0.7;
    case 'virtualReceptionist':
      return Math.floor(numValue * 0.25) * 100;
    case 'appointmentSetter':
      const currentConversions = Math.floor(numValue * 0.04);
      const improvedConversions = Math.floor(numValue * 0.21);
      return (improvedConversions - currentConversions) * 1000;
    case 'onboarding':
      const onboardingSalary = 5000;
      const oldOnboardingTimeHours = 20;
      const onboardingTimeReduction = 0.90;
      const newOnboardingTimeHours = oldOnboardingTimeHours * (1 - onboardingTimeReduction);
      const hourlyRate = onboardingSalary / 160;
      const currentMonthlyCost = numValue * oldOnboardingTimeHours * hourlyRate;
      const newMonthlyCost = numValue * newOnboardingTimeHours * hourlyRate;
      return currentMonthlyCost - newMonthlyCost;
    case 'workflow':
      const hourlyCost = 50;
      const errorCostMultiplier = 200;
      const currentErrorRate = 0.15;
      
      const currentLaborCost = numValue * hourlyCost;
      const currentErrorCost = (numValue * currentErrorRate) * errorCostMultiplier;
      const totalCurrentCost = currentLaborCost + currentErrorCost;
      
      const aiHours = numValue * 0.3;
      const aiLaborCost = aiHours * hourlyCost;
      const aiErrorCost = (aiHours * (currentErrorRate * 0.1)) * errorCostMultiplier;
      const totalAiCost = aiLaborCost + aiErrorCost;
      
      return totalCurrentCost - totalAiCost;
    default:
      return 0;
  }
};