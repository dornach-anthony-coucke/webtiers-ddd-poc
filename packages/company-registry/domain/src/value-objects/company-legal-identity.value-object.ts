export class CompanyLegalIdentityVO {
  constructor(
    public readonly legalName: string,
    public readonly legalId?: string,
    public readonly legalForm?: string
  ) {}
}
