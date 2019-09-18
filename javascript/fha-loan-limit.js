const county_loan_limits = [
  { loan: FHA, county: others, limit: 679650 },// Others - https://entp.hud.gov/idapp/html/hicostlook.cfm
  { loan: FHA, county: los_angeles, limit: 726525 },// Los Angeles & Orange County
  { loan: FHA, county: san_bernardino, limit: 431250 },// Riverside & San Bernardino County
  { loan: Conventional, county: los_angeles, limit: 726525 },// Los Angeles, Orange County
  { loan: Conventional, county: san_bernardino, limit: 484350 },// Sn Bernardino, Riverside County
  { loan: Conventional, county: others, limit: 484350 },// Others
]
const loan_programs = [
  { loan: CalHFA_FHA, down_payment: 0.035, zip: 0.00 },
  { loan: CalPLUS_FHA_ZIP_2, down_payment: 0.035, zip = 0.02 },
  { loan: CalPLUS_FHA_ZIP_3, down_payment: 0.035, zip = 0.03 },
  { loan: CalHFA_Conventional, down_payment: 0.03, zip: 0.00 },
  { loan: CalPLUS_Conventional_ZIP_2, down_payment: 0.03, zip = 0.02 },
  { loan: CalPLUS_Conventional_ZIP_3, down_payment: 0.03, zip = 0.03 },
]
