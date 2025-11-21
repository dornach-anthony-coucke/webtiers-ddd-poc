import type { CompanyLegalIdentityVO } from '@webtiers-ddd-poc/company-registry-domain';
import type { SubdivisionAddressVO } from '@webtiers-ddd-poc/company-registry-domain';

export class CreateCompanyCommand {
  constructor(
    public readonly companyId: string,
    public readonly companyLegalIdentity: CompanyLegalIdentityVO,
    public readonly headquarterAddress: SubdivisionAddressVO
  ) {}
}
