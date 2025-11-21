export class AddressVO {
  constructor(
    public readonly line1: string,
    public readonly line2: string,
    public readonly line3: string,
    public readonly country: string,
    public readonly city: string,
    public readonly zipCode: string,
  ) {}
}
