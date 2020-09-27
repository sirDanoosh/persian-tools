// Digits Converter
import { digitsEnToFa, digitsFaToEn, digitsArToFa, digitsArToEn } from "./modules/digits";
// check and convert persian string
export { default as isPersian } from "./modules/isPersian";
export { default as toPersianChars } from "./modules/toPersianChars";
// String and Number Converter
export { default as NumberToWords } from "./modules/NumberToWords";
export { default as WordsToNumber } from "./modules/WordsToNumber";
// Add and Remove Commas
export { default as addCommas } from "./modules/addCommas";
export { default as removeCommas } from "./modules/removeCommas";
// Iran National-ID
export * from "./modules/getPlaceByIranNationalId";
export { default as verifyIranianNationalId } from "./modules/nationalId";
// Verify Card Number and Get Bank Name from Card-Number
export { default as verifyCardNumber } from "./modules/verifyCardNumber";
export { default as getBankNameFromCardNumber } from "./modules/getBankNameFromCardNumber";
// Fix and sort persian string
export { default as URLfix } from "./modules/URLfix";
export { default as SortText } from "./modules/SortText";
export { default as halfSpace } from "./modules/halfSpace";
// Bill info
export { default as BillInfo } from "./modules/Bill";

export {
	// Digits
	digitsEnToFa,
	digitsFaToEn,
	digitsArToFa,
	digitsArToEn,
};
