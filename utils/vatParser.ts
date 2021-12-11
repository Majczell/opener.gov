import { getValue } from "./helpers";

const parseVat = jpk => {
  const jpkDeclaration = getValue(jpk, 'Deklaracja');
  const jpkDeclarationHeader = getValue(jpkDeclaration, 'Naglowek');
  const declarationCodeObject = getValue(jpkDeclarationHeader, 'KodFormularzaDekl');
  const declarationCode = declarationCodeObject?._;
  
  const jpkDeclarationDetails = getValue(jpkDeclaration, 'PozycjeSzczegolowe');
  console.log('jpkDeclarationDetails', jpkDeclarationDetails);
  
  const declarationDetails = {
    taxBaseInCountry: getValue(jpkDeclarationDetails, 'P_10'), // Wysokość podstawy opodatkowania z tytułu dostawy towarów oraz świadczenia usług na terytorium kraju, zwolnionych od podatku
    taxBaseAboard: getValue(jpkDeclarationDetails, 'P_11'), // Wysokość podstawy opodatkowania z tytułu dostawy towarów oraz świadczenia usług poza terytorium kraju
  };

  return {
    declarationCode,
    declarationDetails,
  };
};

export default parseVat;
