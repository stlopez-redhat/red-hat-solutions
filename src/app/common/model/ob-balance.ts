export class ObBalance {
  AccountId = '';
  Amount = {
    Amount: '',
    Currency: ''
  };
  CreditDebitIndicator = '';
  Type = '';
  DateTime = '';
  CreditLine = [
    {
      Included: false,
      Amount: {
        Amount: '',
        Currency: ''
      },
      Type: ''
    }
  ];
}
