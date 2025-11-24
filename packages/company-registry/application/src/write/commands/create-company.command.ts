import type { CompanyLegalIdentityVO } from '@dornach-anthony-coucke/company-registry-domain';
import type { SubdivisionAddressVO } from '@dornach-anthony-coucke/company-registry-domain';

export class CreateCompanyCommand {
  constructor(
    public readonly companyId: string,
    public readonly companyLegalIdentity: CompanyLegalIdentityVO,
    public readonly headquarterAddress: SubdivisionAddressVO
  ) {}
}
